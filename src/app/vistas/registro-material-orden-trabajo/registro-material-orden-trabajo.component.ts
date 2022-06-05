import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { zonaInterface } from 'src/app/modelos/zona.interface';
import { cuadrillaInterface } from 'src/app/modelos/cuadrilla.interface';
import { CuadrillaService } from 'src/app/servicios/api/cuadrilla.service';
import { ZonaService } from 'src/app/servicios/api/zona.service';
import { ordenInterface } from 'src/app/modelos/orden.interface';
import { OrdenService } from 'src/app/servicios/api/orden.service';

@Component({
  selector: 'app-registro-material-orden-trabajo',
  templateUrl: './registro-material-orden-trabajo.component.html',
  styleUrls: ['./registro-material-orden-trabajo.component.css']
})
export class RegistroMaterialOrdenTrabajoComponent implements OnInit {

  registroForm = new FormGroup({
    nombreTrabajo: new FormControl('', Validators.required),
    nombreZona: new FormControl('',Validators.required),
    nombreCuadrilla: new FormControl('',Validators.required),
    fechaInicial: new FormControl('',Validators.required)
  })

  constructor(private api1:ZonaService, private api2:CuadrillaService, private api3:OrdenService) { }

  errorForm:boolean = false;
  errorMensaje:any = "";

  zonas:zonaInterface[];
  cuadrillas:cuadrillaInterface[];

  ngOnInit(): void {
    this.api1.obtenerZonas().subscribe(data=>{
      this.zonas = data;
    });
    this.api2.obtenerCuadrillas().subscribe(data=>{
      this.cuadrillas = data;
    });
  }

  registrarOrden(form:ordenInterface){
    console.log(form);
    if(this.registroForm.invalid){
      this.errorForm = true;
      this.errorMensaje = "Revise los campos";
    }else{
      this.api3.crearOrden(form).subscribe(data=>{
        if(data.mensaje=="Registrado correctamente"){
          alert(data.mensaje);
          location.reload();
        }
      });
    }
  }

}
