import { Usuario } from "./usuario";

//procesos para gregar. toda la logica

export class UsuariosLista{

    private lista: Usuario[] = [];


    constructor(){

    }


    //agregar un usaurio
    public agregar(usuario: Usuario){

        this.lista.push(usuario);
        console.log(this.lista);
        return usuario;
    }


    public actualizarNombre(id: string, nombre: string){

        for(let usuario of this.lista){

            if(usuario.id === id){
                usuario.nombre = nombre;
                break;
            }
        }

        console.log('=====Actualizando Usuario====');
        console.log(this.lista);
    }


    //obtener lista de usuarios
    public getLista(){
        return this.lista;
    }

    //regresar un usuario
    public getUsaurio(id: string){
        return this.lista.find(usuario => usuario.id === id);
    }

    //todos los usaurios en una sala en particuar
    public getUsuariosEnSAla(sala: string){
        return this.lista.filter(usuario =>usuario.sala === sala);
    }

    //borrar un usuario
    public borrarUsuario( id: string ){
        const temUsuario = this.getUsaurio(id);

        this.lista = this.lista.filter(usuario => usuario.id !== id);
        
        return temUsuario;

    }


}