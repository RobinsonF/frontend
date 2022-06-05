import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tipoMaterialInterface } from 'src/app/modelos/tipoMaterial.interface';
import { materialInterface } from 'src/app/modelos/material.interface';
import { responseInterface } from 'src/app/modelos/response.interface';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  constructor(private api:HttpClient) { }

  url:string = 'http://localhost:8080/';

  obtenerTipoMateriales():Observable<tipoMaterialInterface[]>{
    let dirrecion = this.url + "tipomaterial/listaTipoMaterial";
    return this.api.get<tipoMaterialInterface[]>(dirrecion);
  }

  creaMaterial(form:materialInterface):Observable<responseInterface>{
    let direccion = this.url + "material/crearMaterial";
    return this.api.post<responseInterface>(direccion, form);
  }

  obtenerMateriales():Observable<materialInterface[]>{
    let direccion = this.url + "material/listaMaterial";
    return this.api.get<materialInterface[]>(direccion);
  }
}
