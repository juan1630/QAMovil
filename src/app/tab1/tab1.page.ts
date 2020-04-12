import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

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
  
  constructor() {}

  ingresar(  f ){

    console.log( this.usuario )
    
  }

}
