import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { cuadrillaInterface } from 'src/app/modelos/cuadrilla.interface';
import { usuarioCuadrillaInterface } from 'src/app/modelos/usuarioCuadrilla.interface';
import { CuadrillaService } from 'src/app/servicios/api/cuadrilla.service';
import { ApiService } from 'src/app/servicios/api/api.service';

@Component({
  selector: 'app-registro-cuadrilla-proveedor',
  templateUrl: './registro-cuadrilla-proveedor.component.html',
  styleUrls: ['./registro-cuadrilla-proveedor.component.css']
})
export class RegistroCuadrillaProveedorComponent implements OnInit {

  registroForm = new FormGroup({
    nombreCuadrilla: new FormControl('', Validators.required),
  });

  usuario:any = "";
  id:any;
  idCuadrilla:any;
  usuarioCuadrillas:usuarioCuadrillaInterface;

  constructor(private api:CuadrillaService, private api2:ApiService) { }

  errorForm:boolean = false;
  errorMensaje:any = "";

  ngOnInit(): void {
    this.usuario = localStorage.getItem('correo');
    this.api2.obtenerIdPorCorreo(this.usuario).subscribe(data=>{
      this.id = data.mensaje;
    })
  }

  registrarCuadrilla(form:cuadrillaInterface){

    if(this.registroForm.invalid){
      this.errorForm = true;
      this.errorMensaje = "Revise los campos";
    }else{
      this.api.crerCuadrilla(form).subscribe(data=>{
        if(data.mensaje=="El nombre de la cuadrilla se encuentra en uso"){
          this.errorForm = true;
          this.errorMensaje = data.mensaje;
        }else{
          this.api.obtenerIdPorNombre(form).subscribe(data1=>{
            let dato:any = [];
          dato.cuadrilla = data1.mensaje;
          dato.usuario = this.id;
          this.usuarioCuadrillas = dato;
          this.api.crearCuadrillaUsuario(this.usuarioCuadrillas).subscribe(data7=>{
            alert(data.mensaje);
            location.reload();
          });
          });
        }
      });
    }
  }
}
