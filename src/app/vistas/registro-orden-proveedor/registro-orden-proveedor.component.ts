import { Component, OnInit } from '@angular/core';
import { CuadrillaService } from 'src/app/servicios/api/cuadrilla.service';
import { ZonaService } from 'src/app/servicios/api/zona.service';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/servicios/api/api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { zonaInterface } from 'src/app/modelos/zona.interface';
import { cuadrillaInterface } from 'src/app/modelos/cuadrilla.interface';
import { ordenInterface } from 'src/app/modelos/orden.interface';
import { OrdenService } from 'src/app/servicios/api/orden.service';


@Component({
  selector: 'app-registro-orden-proveedor',
  templateUrl: './registro-orden-proveedor.component.html',
  styleUrls: ['./registro-orden-proveedor.component.css']
})
export class RegistroOrdenProveedorComponent implements OnInit {

  usuario:any = "";

  registroForm = new FormGroup({
    nombreTrabajo: new FormControl('', Validators.required),
    nombreZona: new FormControl('',Validators.required),
    nombreCuadrilla: new FormControl('',Validators.required),
    fechaInicial: new FormControl('',Validators.required)
  })

  constructor(private api1:ZonaService, private api2:CuadrillaService, private api3:ApiService, private api4:OrdenService,private router:Router) { }

  errorForm:boolean = false;
  errorMensaje:any = "";

  zonas:zonaInterface[];
  cuadrillas:cuadrillaInterface[];

  ngOnInit(): void {
    this.usuario = localStorage.getItem('correo');
    this.api3.obtenerIdPorCorreo(this.usuario).subscribe(data=>{
      this.api2.obtenerCuadrillaPorUsuario(data.mensaje).subscribe(data=>{
        this.cuadrillas = data;
      });
    });
    this.api1.obtenerZonas().subscribe(data=>{
      this.zonas = data;
    });
    
  }

  registrarOrden(form:ordenInterface){
    if(this.registroForm.invalid){
      this.errorForm = true;
      this.errorMensaje = "Revise los campos";
    }else{
      this.api4.crearOrden(form).subscribe(data=>{
        if(data.mensaje=="Registrado correctamente"){
          alert(data.mensaje);
          location.reload();
        }
      });
    }
  }

}
