import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { UserService } from '../../services/userServices/user.service';
import { User } from 'src/app/interfaces/user.interfaces';
 
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
 
  public newUserDB:User[]=[];
  
  public newUser: User = {
    nombre:'',
    apellidoPaterno: '',
    apellidoMaterno:'',
    instituto: '',
    email:'',
    password:''
  }

  constructor( 
          public alertController:AlertController,
          public userService: UserService
    ) { }

  ngOnInit() {
  }

  
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      subHeader: 'Ijole yo creo que no se va a poder',
      message: 'Falta por llenar un campo, no seas wey xD', 
      buttons: ['OK'],
      // type:'ios'
    });

    await alert.present();
  }

  registro( formulario  ){

    if( !formulario.valid ){
      this.presentAlert();
      return;
    }
  

    this.userService.nuevoUser( this.newUser )
    .subscribe( (user:any)  => {
      console.log( user );
        this.newUserDB = user.usuario;
    });              

  }

}
