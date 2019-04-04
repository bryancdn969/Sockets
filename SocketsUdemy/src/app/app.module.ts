import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { MensajesPageModule} from './pages/mensajes/mensajes.module';
import { LoginPageModule } from './pages/login/login.module';

//sockets
import { SocketIoModule, SocketIoConfig} from 'ngx-socket-io';
import { environment } from '../environments/environment';

import { ComponentsModule } from './components/components.module';


const config: SocketIoConfig = {url: environment.wsUrl, options:{}}

@NgModule({
  declarations: [
    AppComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    SocketIoModule.forRoot(config),
    ComponentsModule,
    FormsModule,
    MensajesPageModule,
    LoginPageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
