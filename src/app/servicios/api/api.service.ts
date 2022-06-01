import { Injectable } from '@angular/core';
import {loginInterface} from 'src/app/modelos/login.interface';
import { listaUsuariosInterface } from 'src/app/modelos/listaUsuarios.interface';
import { usuarioInterface } from 'src/app/modelos/registro.interface';
import { eliminarUsuarioInterface } from 'src/app/modelos/eliminarUsuario.interface';
import { responseInterface } from 'src/app/modelos/response.interface';
import { correoInterface } from 'src/app/modelos/correo.interface';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string = 'http://localhost:8080/'
  constructor(private http:HttpClient) { }

  loginByEmail(form:loginInterface):Observable<responseInterface>{
    let direccion = this.url + "login/usuario";
    return this.http.post<responseInterface>(direccion, form);
  }

  obtenerUsuarios():Observable<listaUsuariosInterface[]>{
    let direccion = this.url + "usuario/listaUsuario";
    return this.http.get<listaUsuariosInterface[]>(direccion);
  }

  eliminarUsuario(form:eliminarUsuarioInterface):Observable<responseInterface>{
    let direccion = this.url + "usuario/eliminarUsuario?id=" + form.id_usuario;
    return this.http.put<responseInterface>(direccion, form);
  }

  registrarUsuario(form:usuarioInterface):Observable<usuarioInterface>{
    let direccion = this.url + "usuario/crearUsuario";
    return this.http.post<usuarioInterface>(direccion, form);
  }

  enviarCorreo(form:correoInterface):Observable<correoInterface>{
    let direccion = this.url + "correo/enviarCorreo";
    let options = {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      })
    }
    return this.http.post<correoInterface>(direccion, JSON.stringify({ subject: form.subject, to: form.to, from:"", text:form.text}), options);
  }
}
