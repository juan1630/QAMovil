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
  
  public newUser = {
    nombre:'',
    apellidoPaterno: '',
    apellidoMaterno:'',
    institucion: '',
    correo:'',
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
      buttons: ['OK']
    });

    await alert.present();
  }

  registro( formulario  ){

    this.userService.nuevoUser( this.newUser )
    .subscribe( (user:any)  => {
        this.newUserDB = user.usuario;
    });              

    if( formulario.value ){
      this.presentAlert();
      return;
    }
  
  }

}
