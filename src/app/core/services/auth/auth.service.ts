import { Injectable } from "@angular/core";
import { environment } from "../../../../environments/environment.development";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { RestResponse } from "../../models/rest.response";
import { AuthenticationRequest, TokenResponse } from "../../models/auth.model";

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  //les infos que je recupere pour les garder dans le service
  isAuthenticated=true
  username:string|null=null;
  roles:string[]=[];


  constructor(private http:HttpClient) {
  }

  private API_URL = `${environment.API_URL}`

  login(data:AuthenticationRequest): Observable<RestResponse<TokenResponse>>{
    return this.http.post<RestResponse<TokenResponse>>(`${this.API_URL}/login`,data);

  }

}
