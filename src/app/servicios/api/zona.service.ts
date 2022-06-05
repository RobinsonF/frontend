import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { zonaInterface } from 'src/app/modelos/zona.interface';
import { Observable } from 'rxjs';
import { responseInterface } from 'src/app/modelos/response.interface';

@Injectable({
  providedIn: 'root'
})
export class ZonaService {

  url:string = 'http://localhost:8080/'

  constructor(private http:HttpClient) { }

  crearZona(form:zonaInterface):Observable<responseInterface>{
    let direccion = this.url + "zona/crearZona";
    return this.http.post<responseInterface>(direccion,form);
  }

  obtenerZonas():Observable<zonaInterface[]>{
    let direccion = this.url + "zona/listaZona";
    return this.http.get<zonaInterface[]>(direccion);
  }

  eliminarZona(form:zonaInterface):Observable<responseInterface>{
    let direccion = this.url + "zona/eliminarZona?id=" + form.idZona;
    return this.http.put<responseInterface>(direccion, form);
  }

}
