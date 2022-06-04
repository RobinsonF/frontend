import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { cuadrillaInterface } from 'src/app/modelos/cuadrilla.interface';
import { Observable } from 'rxjs';
import { responseInterface } from 'src/app/modelos/response.interface';

@Injectable({
  providedIn: 'root'
})
export class CuadrillaService {

  url:string = 'http://localhost:8080/'

  constructor(private http:HttpClient) { }

  crerCuadrilla(form:cuadrillaInterface):Observable<responseInterface>{
    let direccion = this.url + "cuadrilla/crearCuadrilla"
    return this.http.post<responseInterface>(direccion, form);
  }
}
