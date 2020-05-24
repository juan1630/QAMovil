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
        public _http:HttpClient
   ) { }

// creacion de un nuevo usuario

   nuevoUser ( user: any ){

      console.log( user );
      
     let url = `${URL}/nuevo/usuario`;

     return this._http.post(url, user )
     .pipe( map( (data:User)  => {
        console.log( data );
        return data;
     } ) )
   }
  

   verUsuarios(){
    
     let url = `${URL}/usuarios`;

     return this._http.get( url);

   }

   verUsuarioPorId( id ){
  
    let url = `${URL}/usuario/${id}`;
    return this._http.get(url);
   
  }



   cambiarContrasenia(id, body ) {
    let url = `${URL}/usuario/edit/${id}`;

    return this._http.put(url, body);
   }


}
