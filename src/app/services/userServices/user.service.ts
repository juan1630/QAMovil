import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL } from '../../config/index.config';
import { User } from 'src/app/interfaces/user.interfaces';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( 
        private _http:HttpClient
   ) { }


   nuevoUser ( user ){
     let url = `${URL}/nuevo/usuario`;

     return this._http.post(url, user )
     .pipe( map( (data:User)  => {
        console.log( data );
        return data;
     } ) )
   }


}
