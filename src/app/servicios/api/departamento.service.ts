import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { departamentoInterface } from 'src/app/modelos/departamento.interface';
import { Observable } from 'rxjs';
import { responseInterface } from 'src/app/modelos/response.interface';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  url:string = 'http://localhost:8080/'

  constructor(private http:HttpClient) { }

  crearDepartamento(form:departamentoInterface):Observable<responseInterface>{
    let direccion = this.url + "departamento/crearDepartamento";
    return this.http.post<responseInterface>(direccion,form);
  }

  obtenerDepartamentos():Observable<departamentoInterface[]>{
    let direccion = this.url + "departamento/listaDepartamento";
    return this.http.get<departamentoInterface[]>(direccion);
  }

  eliminarDepartamento(form:departamentoInterface):Observable<responseInterface>{
    let direccion = this.url + "departamento/eliminarDepartamento?id="+ form.idDepartamento;
    return this.http.put<responseInterface>(direccion, form);
  }

}
