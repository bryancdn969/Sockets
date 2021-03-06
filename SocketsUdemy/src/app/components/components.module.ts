import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { IonicModule } from '@ionic/angular';
import { ChatComponent } from './chat/chat.component';
import { FormsModule } from '@angular/forms';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';

@NgModule({
  declarations: [
    FooterComponent,
    ChatComponent,
    ListaUsuariosComponent
  ],
  exports: [
    FooterComponent,
    ChatComponent,
    ListaUsuariosComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ]
})
export class ComponentsModule { }
