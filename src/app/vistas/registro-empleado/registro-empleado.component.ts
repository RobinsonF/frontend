import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { cuadrillaInterface } from 'src/app/modelos/cuadrilla.interface';
import { CuadrillaService } from 'src/app/servicios/api/cuadrilla.service';
import { empleadoInterface } from 'src/app/modelos/empleado.interface';
import { EmpleadoService } from 'src/app/servicios/api/empleado.service';

@Component({
  selector: 'app-registro-empleado',
  templateUrl: './registro-empleado.component.html',
  styleUrls: ['./registro-empleado.component.css']
})
export class RegistroEmpleadoComponent implements OnInit {

  cuadrillas:cuadrillaInterface[];

  registroForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    apellido: new FormControl('',Validators.required),
    cedula: new FormControl('',Validators.required),
    nombreCuadrilla: new FormControl('',Validators.required)
  })

  constructor(private api1:CuadrillaService, private api2:EmpleadoService) { }

  errorForm:boolean = false;
  errorMensaje:any = "";

  ngOnInit(): void {
    this.api1.obtenerCuadrillas().subscribe(data=>{
      this.cuadrillas = data;
    });
  }

  registrarEmpleado(form:empleadoInterface){
    if(this.registroForm.invalid){
      this.errorForm = true;
      this.errorMensaje = "Revise los campos";
    }else{
      this.api2.crearEmpleado(form).subscribe(data=>{
        if(data.mensaje == "Registrado correctamente"){
          alert(data.mensaje);
          location.reload();
        }
      });
    }
  }

}
