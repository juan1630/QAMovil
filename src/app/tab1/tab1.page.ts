import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import  { Router, RouterEvent } from '@angular/router';
import { LoginService } from '../services/login/login.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})



export class Tab1Page {
  public usuario = {
  
    email: '',
    password: ''
  
  }
  
  constructor(
    public loginService: LoginService,
    public _router: Router
  ) {}

  ingresar(  ){

    
    console.log( this.usuario );

    this.loginService.login(this.usuario)

    .subscribe( (user:any) => {
        if( user.ok ){
          
          localStorage.setItem('user', user );
          this._router.navigate(['/ver-preguntas']);
        }
    } )
    
  }

}
