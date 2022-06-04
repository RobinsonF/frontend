import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { responseInterface } from 'src/app/modelos/response.interface';
import { CuadrillaService } from 'src/app/servicios/api/cuadrilla.service';
import { cuadrillaInterface } from 'src/app/modelos/cuadrilla.interface';

@Component({
  selector: 'app-registro-cuadrilla',
  templateUrl: './registro-cuadrilla.component.html',
  styleUrls: ['./registro-cuadrilla.component.css']
})
export class RegistroCuadrillaComponent implements OnInit {

  registroForm = new FormGroup({
    nombreCuadrilla: new FormControl('', Validators.required),
  })

  constructor(private api:CuadrillaService) { }

  errorForm:boolean = false;
  errorMensaje:any = "";

  ngOnInit(): void {
  }

  registrarCuadrilla(form:cuadrillaInterface){

    if(this.registroForm.invalid){
      this.errorForm = true;
      this.errorMensaje = "Revise los campos";
    }else{
      this.api.crerCuadrilla(form).subscribe(data=>{
        console.log(data);
        if(data.mensaje=="El nombre de la cuadrilla se encuentra en uso"){
          this.errorForm = true;
          this.errorMensaje = data.mensaje;
        }else{
          alert(data.mensaje);
          location.reload();
        }
      })
    }

  }

}
