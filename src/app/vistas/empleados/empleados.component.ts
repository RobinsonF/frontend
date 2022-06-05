import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from 'src/app/servicios/api/empleado.service';
import { empleadoInterface } from 'src/app/modelos/empleado.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  empleados:empleadoInterface[];

  constructor(private api:EmpleadoService, private router:Router) { }

  ngOnInit(): void {
    this.api.obtenerEmpleados().subscribe(data=>{
      this.empleados = data;
    });
  }

  eliminarEmpleado(id:any){

  }

  editarEmpleado(id:any){

  }

}
