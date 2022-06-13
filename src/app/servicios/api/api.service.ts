import { Injectable } from '@angular/core';
import {loginInterface} from 'src/app/modelos/login.interface';
import { listaUsuariosInterface } from 'src/app/modelos/listaUsuarios.interface';
import { usuarioInterface } from 'src/app/modelos/registro.interface';
import { eliminarUsuarioInterface } from 'src/app/modelos/eliminarUsuario.interface';
import { responseInterface } from 'src/app/modelos/response.interface';
import { correoInterface } from 'src/app/modelos/correo.interface';
import { auditoriaInterface } from 'src/app/modelos/auditoria.interface';
import { parametoInterface} from 'src/app/modelos/parametro.interface';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { filtroInterface } from 'src/app/modelos/filtro.interface';

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

  obtenerAuditorias(id:any):Observable<auditoriaInterface[]>{
    let direccion = this.url + "auditoria/listaAuditoria?id=" + id;
    return this.http.get<auditoriaInterface[]>(direccion);
  }

  obtenerAuditoriaFecha(form:filtroInterface):Observable<auditoriaInterface[]>{
    let direccion = this.url + "auditoria/listaAuditoriaFecha?fecha1=" + form.fecha1 + "&fecha2=" + form.fecha2 + "&id=" + form.id_usuario;
    return this.http.get<auditoriaInterface[]>(direccion);
  }

  eliminarUsuario(form:eliminarUsuarioInterface):Observable<responseInterface>{
    let direccion = this.url + "usuario/eliminarUsuario?id=" + form.id_usuario;
    return this.http.put<responseInterface>(direccion, form);
  }

  registrarUsuario(form:usuarioInterface):Observable<responseInterface>{
    let direccion = this.url + "usuario/crearUsuario";
    return this.http.post<responseInterface>(direccion, form);
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

  aumentarIntento(form:any):Observable<string>{
    let direccion = this.url + "login/usuarioIntento/"+form.correo;
    let options = {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      })
    }
    return this.http.post<string>(direccion, JSON.stringify({correo:form.correo}), options);
  }

  obtenerIntentos(form:any):Observable<string>{
    let direccion = this.url + "login/usuarioNumeroIntentos/" + form.correo;
    let options = {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      })
    }
    return this.http.post<string>(direccion, JSON.stringify({correo:form.correo}), options);
  }

  setearIntentoCero(form:any):Observable<string>{
    let direccion = this.url + "login/usuarioCeroIntentos/" + form.correo;
    let options = {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      })
    }
    return this.http.post<string>(direccion, JSON.stringify({correo:form.correo}), options);
  }

  desbloquearUsuario(form:any):Observable<string>{
    let direccion = this.url + "usuario/desbloquearUsuario/" + form.id_usuario;
    let options = {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      })
    }
    return this.http.post<string>(direccion, JSON.stringify({id_usuario:form.id_usuario}), options);
  }

  obtenerUsuario(id:any):Observable<listaUsuariosInterface>{
    let direccion = this.url + "usuario/obtenerUsuario?id=" +id;
    return this.http.get<listaUsuariosInterface>(direccion);
  }

  editarUsuario(form:listaUsuariosInterface):Observable<responseInterface>{
    let direccion = this.url + "usuario/editarUsuario";
    console.log(form);
    let options = {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      })
    }
    return this.http.put<responseInterface>(direccion, form, options);
  }

  obtenerParametro():Observable<parametoInterface>{
  let direccion = this.url + "parametro/Intento?tipo=I";
  return this.http.get<parametoInterface>(direccion);
  }

  obtenerParametroC():Observable<parametoInterface>{
    let direccion = this.url + "parametro/Intento?tipo=C";
    return this.http.get<parametoInterface>(direccion);
  }

  cambiarPass(form:usuarioInterface):Observable<responseInterface>{
    let direccion = this.url + "usuario/cambiarPass"
    return this.http.post<responseInterface>(direccion, form);
  }

  obtenerIdPorCorreo(correo:any):Observable<responseInterface>{
    let direccion = this.url + "usuario/obtenerUsuarioCorreo?correo=" + correo;
    return this.http.get<responseInterface>(direccion);
  }

  obtenerRol(correo:any):Observable<responseInterface>{
    let direccion = this.url + "usuario/usuarioRol?correo=" + correo;
    return this.http.get<responseInterface>(direccion);
  }
}
