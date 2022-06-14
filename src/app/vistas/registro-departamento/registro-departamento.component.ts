import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { responseInterface } from 'src/app/modelos/response.interface';
import { DepartamentoService } from 'src/app/servicios/api/departamento.service';
import { departamentoInterface } from 'src/app/modelos/departamento.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-registro-departamento',
  templateUrl: './registro-departamento.component.html',
  styleUrls: ['./registro-departamento.component.css']
})
export class RegistroDepartamentoComponent implements OnInit {

  registroForm = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.pattern("")]),
  })

  constructor(private api:DepartamentoService) { }

  errorForm:boolean = false;
  errorMensaje:any = "";

  ngOnInit(): void {
  }

  registrarDepartamento(form:departamentoInterface){
    if(this.registroForm.invalid){
      this.errorForm=true;
      this.errorMensaje="Revise los campos";
    }else{
      this.api.crearDepartamento(form).subscribe(data=>{
        if(data.mensaje=="El nombre del departamento se encuentra en uso"){
          this.errorForm=true;
          this.errorMensaje=data.mensaje;
        }else{
          alert(data.mensaje);
          location.reload();
        }
      });
    }
  }

}
