import { Injectable } from '@angular/core';
import {loginInterface} from 'src/app/modelos/login.interface';
import { listaUsuariosInterface } from 'src/app/modelos/listaUsuarios.interface';
import { responseInterface } from 'src/app/modelos/response.interface';
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

  eliminarUsuario(id:listaUsuariosInterface):Observable<responseInterface>{
    let datos: any = []
    datos.id_usuario = id;
    console.log(datos);
    console.log(id);
    let direccion = this.url + "usuario/eliminarUsuario/" + id;
    return this.http.post<responseInterface>(direccion, datos);
  }
}
