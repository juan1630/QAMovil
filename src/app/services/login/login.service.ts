import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL } from '../../config/index.config';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( 
      private _http: HttpClient
   ) { }



   login( user ) {

      let url = `${URL}/login`;
      
      

   }


}
