import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { cuadrillaInterface } from 'src/app/modelos/cuadrilla.interface';
import { CuadrillaService } from 'src/app/servicios/api/cuadrilla.service';
import { empleadoInterface } from 'src/app/modelos/empleado.interface';
import { EmpleadoService } from 'src/app/servicios/api/empleado.service';
import { ApiService } from 'src/app/servicios/api/api.service';
import { usuarioCuadrillaInterface } from 'src/app/modelos/usuarioCuadrilla.interface';
import { AuditoriaService } from 'src/app/servicios/api/auditoria.service';

@Component({
  selector: 'app-registro-empleado-proveedor',
  templateUrl: './registro-empleado-proveedor.component.html',
  styleUrls: ['./registro-empleado-proveedor.component.css']
})
export class RegistroEmpleadoProveedorComponent implements OnInit {

  cuadrillas:cuadrillaInterface[];

  registroForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    apellido: new FormControl('',Validators.required),
    cedula: new FormControl('',Validators.required),
    nombreCuadrilla: new FormControl('',Validators.required)
  })

  constructor(private api1:CuadrillaService, private api2:EmpleadoService, private api3:ApiService, private api4:AuditoriaService) { }

  errorForm:boolean = false;
  errorMensaje:any = "";
  id:any;
  usuario:any = "";
  usuarioCuadrillas:usuarioCuadrillaInterface;

  ngOnInit(): void {
    this.usuario = localStorage.getItem('correo');
    this.api3.obtenerIdPorCorreo(this.usuario).subscribe(data=>{
      this.id = data.mensaje;
      this.api1.obtenerCuadrillaPorUsuario(data.mensaje).subscribe(data=>{
        this.cuadrillas = data;
      });
    });
   
  }

  registrarEmpleado(form:empleadoInterface){
    if(this.registroForm.invalid){
      this.errorForm = true;
      this.errorMensaje = "Revise los campos";
    }else{
      this.api2.crearEmpleado(form).subscribe(data=>{
        if(data.mensaje == "Registrado correctamente"){
          let auditoria:any = [];
            auditoria.id_usuario = this.id;
            auditoria.evento = "Creo el empleado con el nombre: " + form.nombre + " " + form.apellido;
            this.api4.crearAuditoria(auditoria).subscribe(data89=>{
            });
          alert(data.mensaje);
          location.reload();
        }
      });
    }
  }

}
