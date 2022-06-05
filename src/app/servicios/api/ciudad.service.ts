import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { ciudadInterface } from 'src/app/modelos/ciudad.interface';
import { Observable } from 'rxjs';
import { responseInterface } from 'src/app/modelos/response.interface';

@Injectable({
  providedIn: 'root'
})
export class CiudadService {

  url:string = 'http://localhost:8080/'

  constructor(private http:HttpClient) { }

  crearCiudad(form:ciudadInterface):Observable<responseInterface>{
    let direccion = this.url + "ciudad/crearCiudad";
    return this.http.post<responseInterface>(direccion, form);
  }

  obtenerCiudades():Observable<ciudadInterface[]>{
    let direccion = this.url + "ciudad/listaCiudad";
    return this.http.get<ciudadInterface[]>(direccion);
  }

  eliminarCiudad(form:ciudadInterface):Observable<responseInterface>{
    let direccion = this.url + "ciudad/eliminarCiudad?id=" + form.idCiudad;
    return this.http.put<responseInterface>(direccion, form);
  }
}
