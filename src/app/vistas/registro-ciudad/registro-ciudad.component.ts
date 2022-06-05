import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { responseInterface } from 'src/app/modelos/response.interface';
import { DepartamentoService } from 'src/app/servicios/api/departamento.service';
import { CiudadService } from 'src/app/servicios/api/ciudad.service';
import { departamentoInterface } from 'src/app/modelos/departamento.interface';
import { Observable } from 'rxjs';
import { ciudadInterface } from 'src/app/modelos/ciudad.interface';

@Component({
  selector: 'app-registro-ciudad',
  templateUrl: './registro-ciudad.component.html',
  styleUrls: ['./registro-ciudad.component.css']
})
export class RegistroCiudadComponent implements OnInit {

  listaDepartamento:departamentoInterface[];

  registroForm = new FormGroup({
    nombreZona: new FormControl('', Validators.required),
    nombreDepartamento: new FormControl('',Validators.required)
  })

  constructor(private api1:DepartamentoService, private api2:CiudadService) { }

  errorForm:boolean = false;
  errorMensaje:any = "";

  ngOnInit(): void {
    this.api1.obtenerDepartamentos().subscribe(data=>{
      this.listaDepartamento = data;
    })
  }

  registrarCiudad(form:ciudadInterface){
    console.log(form);
    if(this.registroForm.invalid){
      this.errorForm = true;
      this.errorMensaje = "Revise los campos";
    }else{
      this.api2.crearCiudad(form).subscribe(data=>{
        if(data.mensaje == "El nombre de la ciudad se encuentra en uso"){
          this.errorForm = true;
          this.errorMensaje = data.mensaje;
        }else{
          alert(data.mensaje);
          location.reload();
        }
      });
    }
  }

 

}
