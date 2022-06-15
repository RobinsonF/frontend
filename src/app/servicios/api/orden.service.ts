import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ordenInterface } from 'src/app/modelos/orden.interface';
import { responseInterface } from 'src/app/modelos/response.interface';

@Injectable({
  providedIn: 'root'
})
export class OrdenService {

  url:string = 'http://localhost:8080/';

  constructor(private http:HttpClient) { }

  crearOrden(form:ordenInterface):Observable<responseInterface>{
    let direccion = this.url + "orden/crearOrden";
    return this.http.post<responseInterface>(direccion,form);
  }

  obtenerOrdenes():Observable<ordenInterface[]>{
    let direccion = this.url + "orden/listaOrden";
    return this.http.get<ordenInterface[]>(direccion); 
  }

  eliminarOrden(form:ordenInterface):Observable<responseInterface>{
    let direccion = this.url + "orden/eliminarOrden?id="+form.idTrabajo;
    return this.http.put<responseInterface>(direccion, form);
  }

  obtenerOrdenesPorUsuario(id:any):Observable<ordenInterface[]>{
    let direccion = this.url + "orden/listaOrdenUsuario?id=" + id;
    return this.http.get<ordenInterface[]>(direccion);
  }

  obtenerPorId(id:any):Observable<ordenInterface>{
    let direccion = this.url + "orden/obtenerOrden?id=" + id;
    return this.http.get<ordenInterface>(direccion);
  }

  editarOrden(form:ordenInterface):Observable<responseInterface>{
    let direccion = this.url + "orden/editarOrden";
    return this.http.put<responseInterface>(direccion, form);
  }
}
