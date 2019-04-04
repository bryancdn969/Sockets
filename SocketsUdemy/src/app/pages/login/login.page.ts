import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../../services/websocket.service';
//import { IonicPage, NavController} from 'ionic-angular';
//import { HomePage } from '../home/home';
import { Router } from '@angular/router';

//@IonicPage()
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

nombre = '';
  constructor(
    public wsService: WebsocketService,
    //public navCtrl: NavController,
    private router: Router
  ) { }

  ngOnInit() {
  }

  ingresar(){

    this.wsService.loginWS(this.nombre).then(()=>{
      //this.navCtrl.setRoot(HomePage);
      this.router.navigateByUrl('/mensajes');
    });
    
  }

}
