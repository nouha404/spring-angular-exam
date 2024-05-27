import { NgIf } from '@angular/common';
import { Directive, Inject, OnInit,inject } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';

@Directive({
  selector: '[IfAuthentificated]',
  standalone: false,

  hostDirectives: [{directive:NgIf}]


})
export class IfAuthentificatedDirective implements OnInit {
  //injection
  private authService : AuthService=inject(AuthService)
  private ngIfDirective: NgIf=Inject(NgIf)


  ngOnInit(): void {
    throw new Error('Method not implemented.');
    this.ngIfDirective.ngIf=this.authService.isAuthentificated;
  }

}
