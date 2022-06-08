import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from 'src/app/servicios/api/empleado.service';
import { empleadoInterface } from 'src/app/modelos/empleado.interface';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/servicios/api/api.service';

@Component({
  selector: 'app-empleados-proveedor',
  templateUrl: './empleados-proveedor.component.html',
  styleUrls: ['./empleados-proveedor.component.css']
})
export class EmpleadosProveedorComponent implements OnInit {

  pages: number = 1;

  empleados:empleadoInterface[];
  empleado1:empleadoInterface;
  usuario:any = "";

  constructor(private api:EmpleadoService, private api2:ApiService,private router:Router) { }

  ngOnInit(): void {
    this.usuario = localStorage.getItem('correo');
    this.api2.obtenerIdPorCorreo(this.usuario).subscribe(data=>{
      this.api.obtenerEmpleadosPorUsuario(data.mensaje).subscribe(data=>{
        console.log(data);
        this.empleados = data;
      });
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

}
