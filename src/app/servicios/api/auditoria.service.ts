import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { auditoriaInterface } from 'src/app/modelos/auditoria.interface';
import { responseInterface } from 'src/app/modelos/response.interface';


@Injectable({
  providedIn: 'root'
})
export class AuditoriaService {

  url:string = 'http://localhost:8080/'

  constructor(private http:HttpClient) { }

  crearAuditoria(form:auditoriaInterface):Observable<responseInterface>{
    let direccion = this.url + "auditoria/crearAuditoria";
    let options = {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      })
    }
    return this.http.post<responseInterface>(direccion, JSON.stringify({id_usuario:form.id_usuario, evento:form.evento}), options);
  }
}
