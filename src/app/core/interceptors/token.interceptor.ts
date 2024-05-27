import { HttpInterceptorFn } from '@angular/common/http';

export const tokenInterceptor: HttpInterceptorFn = (request, next) => {
  let req = request;
  const token = localStorage.getItem('token');
  
  if (localStorage.getItem('token')) {
      //recupere la requete
      req = request.clone({
        headers:request.headers.set("Authorization", `Bearer ${token}`) //header de lancien requet + le token
      })

  }

  return next(req);
};
/**
 * L'interceptor
 * La deconnection doit etre faite coté front et back
 * on supprime le token au niveau du localstorage
 *coté backend on doit blacklisté le token (meme si kelk1 lavait enregistrer et il reviens puis le mets on regarde si le token se trouve dans la liste ), en realité on doit creer une table dans la db qui garde les token qui sont blacklisté . Donc des qu'il se deconnecte , on prend se token, on l'envoie dans la db et on le stock dans une table pour le blacklisté
 demain quand il vient se connecter avec un token, avant de verifier , d'extraire le username du token, on verifie que se token ne se trouve pas dans la liste des token blacklisté .si il se trouve laba , on lui dit que l'authentification n'est pas bon
 */
