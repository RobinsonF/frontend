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

  pages: number = 1;

  empleados:empleadoInterface[];
  empleado1:empleadoInterface;

  constructor(private api:EmpleadoService, private router:Router) { }

  ngOnInit(): void {
    this.api.obtenerEmpleados().subscribe(data=>{
      this.empleados = data;
    });
  }

  eliminarEmpleado(id:any){
    let data1:any = [];
    data1.idEmpleado = id;
    this.empleado1 = data1;
    if (!confirm('¿Desea eliminar este empleado?')) {
      return;
    }else{
      this.api.eliminarEmpleado(this.empleado1).subscribe(data=>{
        location.reload();
      });
    }
  }

  editarEmpleado(id:any){
    this.router.navigate(['editarEmpleado',id]);
  }

}
