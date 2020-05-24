import { Component, OnInit } from '@angular/core';
import {  leerLS } from '../../../app/functions/localstorage';

@Component({
  selector: 'app-ver-preguntas',
  templateUrl: './ver-preguntas.page.html',
  styleUrls: ['./ver-preguntas.page.scss'],
})
export class VerPreguntasPage implements OnInit {

  public respuestas = {
    pregunta1:'',
    pregunta2:'',
    pregunta3:''

  }

  constructor() { }

  ngOnInit() {
    this.respuestas = leerLS();
    if( this.respuestas.pregunta1 === null ){
      
      this.respuestas = {
        pregunta1:'',
        pregunta2:'',
        pregunta3:''

        }

    }
  }

  enviar(){

    console.log( this.respuestas );
    let respuestasString = JSON.stringify( this.respuestas );
    localStorage.setItem('respuestas', respuestasString );

  }

}
