import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { cuadrillaInterface } from 'src/app/modelos/cuadrilla.interface';
import { Observable } from 'rxjs';
import { responseInterface } from 'src/app/modelos/response.interface';
import { usuarioCuadrillaInterface } from 'src/app/modelos/usuarioCuadrilla.interface';

@Injectable({
  providedIn: 'root'
})
export class CuadrillaService {

  url:string = 'http://localhost:8080/'

  constructor(private http:HttpClient) { }

  crerCuadrilla(form:cuadrillaInterface):Observable<responseInterface>{
    let direccion = this.url + "cuadrilla/crearCuadrilla";
    return this.http.post<responseInterface>(direccion, form);
  }

  obtenerCuadrillas():Observable<cuadrillaInterface[]>{
    let direccion = this.url + "cuadrilla/listaCuadrilla"
    return this.http.get<cuadrillaInterface[]>(direccion);
  }

  eliminarCuadrilla(form:cuadrillaInterface):Observable<responseInterface>{
    let direccion = this.url + "cuadrilla/eliminarCuadrilla?id="+form.idCuadrilla;
    return this.http.put<responseInterface>(direccion, form);
  }

  obtenerIdPorNombre(form:cuadrillaInterface):Observable<responseInterface>{
    let direccion = this.url + "cuadrilla/obtenerId?nombre=" + form.nombreCuadrilla;
    return this.http.get<responseInterface>(direccion);
  }

  obtenerCuadrillaPorUsuario(id:any):Observable<cuadrillaInterface[]>{
    let direccion = this.url + "cuadrilla/listaCuadrillaUsuario?id=" + id;
    return this.http.get<cuadrillaInterface[]>(direccion);
  }

  obtenerCuadrillaPorId(id:any):Observable<cuadrillaInterface>{
    let direccion = this.url + "cuadrilla/obtenerCuadrilla?id=" + id;
    return this.http.get<cuadrillaInterface>(direccion);
  }

  editarCuadrilla(form:cuadrillaInterface):Observable<responseInterface>{
    let direccion = this.url + "cuadrilla/editarCuadrilla";
    return this.http.put<responseInterface>(direccion, form);
  }

  crearCuadrillaUsuario(form:usuarioCuadrillaInterface):Observable<responseInterface>{
    let options = {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      })
    }
    let direccion = this.url + "usuarioCuadrilla/crearUsuarioCuadrilla";
    return this.http.post<responseInterface>(direccion, JSON.stringify({usuario:form.usuario, cuadrilla:form.cuadrilla}), options);

  }

}
