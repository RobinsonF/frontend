import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { empleadoInterface } from 'src/app/modelos/empleado.interface';
import { responseInterface } from 'src/app/modelos/response.interface';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  url:string = 'http://localhost:8080/'

  constructor(private http:HttpClient) { }

  crearEmpleado(form:empleadoInterface):Observable<responseInterface>{
    let direccion = this.url + "empleado/crearEmpleado";
    return this.http.post<responseInterface>(direccion, form);
  }

  obtenerEmpleados():Observable<empleadoInterface[]>{
    let direccion = this.url + "empleado/listaEmpleado";
    return this.http.get<empleadoInterface[]>(direccion);
  }

}
