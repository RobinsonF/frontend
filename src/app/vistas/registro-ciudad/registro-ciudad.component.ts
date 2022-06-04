import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { responseInterface } from 'src/app/modelos/response.interface';
import { DepartamentoService } from 'src/app/servicios/api/departamento.service';
import { CiudadService } from 'src/app/servicios/api/ciudad.service';
import { departamentoInterface } from 'src/app/modelos/departamento.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-registro-ciudad',
  templateUrl: './registro-ciudad.component.html',
  styleUrls: ['./registro-ciudad.component.css']
})
export class RegistroCiudadComponent implements OnInit {

  listaDepartamento:departamentoInterface[];

  registroForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    departamento: new FormControl('')
  })

  constructor(private api1:DepartamentoService, private api2:CiudadService) { }

  errorForm:boolean = false;
  errorMensaje:any = "";

  ngOnInit(): void {
    this.api1.obtenerDepartamentos().subscribe(data=>{
      this.listaDepartamento = data;
    })
  }

  registrarCiudad(form:departamentoInterface){
    if(this.registroForm.invalid){
      this.errorForm = true;
      this.errorMensaje = "Revise los campos";
    }else{

    }
  }

 

}
