import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { responseInterface } from 'src/app/modelos/response.interface';
import { DepartamentoService } from 'src/app/servicios/api/departamento.service';
import { departamentoInterface } from 'src/app/modelos/departamento.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-registro-ciudad',
  templateUrl: './registro-ciudad.component.html',
  styleUrls: ['./registro-ciudad.component.css']
})
export class RegistroCiudadComponent implements OnInit {

  registroForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
  })

  constructor(private api:DepartamentoService) { }

  errorForm:boolean = false;
  errorMensaje:any = "";

  ngOnInit(): void {
  }

  registrarDepartamento(form:departamentoInterface){

  }

}
