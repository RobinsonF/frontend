import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ordenInterface } from 'src/app/modelos/orden.interface';
import { OrdenService } from 'src/app/servicios/api/orden.service';
import { materialInterface } from 'src/app/modelos/material.interface';
import { MaterialService } from 'src/app/servicios/api/material.service';
import { tipoMaterialInterface } from 'src/app/modelos/tipoMaterial.interface';

@Component({
  selector: 'app-registro-material',
  templateUrl: './registro-material.component.html',
  styleUrls: ['./registro-material.component.css']
})
export class RegistroMaterialComponent implements OnInit {

  tipoMateriales:tipoMaterialInterface[];

  registroForm = new FormGroup({
    nombreMaterial: new FormControl('', Validators.required),
    nombreTipoMaterial: new FormControl('',Validators.required),
    cantidad: new FormControl('',Validators.required),
  })

  constructor(private api1:OrdenService, private api2:MaterialService) { }

  errorForm:boolean = false;
  errorMensaje:any = "";

  ngOnInit(): void {
    this.api2.obtenerTipoMateriales().subscribe(data=>{
      this.tipoMateriales = data;
    });
  }

  registrarMaterial(form:materialInterface){
    if(this.registroForm.invalid){
      this.errorForm = true;
      this.errorMensaje = "Revise los campos";
    }else{
      this.api2.creaMaterial(form).subscribe(data=>{
        if(data.mensaje=="El nombre del material se encuentra en uso"){
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
