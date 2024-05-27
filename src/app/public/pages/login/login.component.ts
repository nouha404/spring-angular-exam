import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RestResponse } from '../../../core/models/rest.response';
import { TokenResponse } from '../../../core/models/auth.model';
import { AuthService } from '../../../core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  form:FormGroup

  constructor(private fb:FormBuilder,private router:Router,private authService:AuthService) {
    this.form = this.fb.group({
      username:'',
      password:''
    })
  }

  onSubmit() {
    let data = this.form.getRawValue(); //données du formulaire
    this.authService.login(data).subscribe((res:RestResponse<TokenResponse>) => {
      if(res.statuts==200){
        //les infos du token
        this.authService.isAuthenticated=true;
        this.authService.username=res.results.username
        this.authService.roles=res.results.roles
        //localstorage pour garder les données
        localStorage.setItem("token",res.results.token) //


        this.router.navigateByUrl('/responsable/rp/cours');

      } else {
        this.authService.isAuthenticated=false;
        console.log("erreur");

      }
    })
  }

}
