import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from 'src/app/servicios/api/empleado.service';
import { empleadoInterface } from 'src/app/modelos/empleado.interface';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/servicios/api/api.service';
import { AuditoriaService } from 'src/app/servicios/api/auditoria.service';

@Component({
  selector: 'app-empleados-proveedor',
  templateUrl: './empleados-proveedor.component.html',
  styleUrls: ['./empleados-proveedor.component.css']
})
export class EmpleadosProveedorComponent implements OnInit {

  pages: number = 1;

  empleados:empleadoInterface[];
  linkPdf:string;
  linkExcel:string;
  empleado1:empleadoInterface;
  usuario:any = "";
  id:any;

  constructor(private api:EmpleadoService, private api2:ApiService, private api3:AuditoriaService,private router:Router) { }

  ngOnInit(): void {
    this.usuario = localStorage.getItem('correo');
    this.linkPdf = "http://localhost:8080/reporte/empleados2?usuario="+ this.usuario +"&tipo=PDF";
    this.linkExcel = "http://localhost:8080/reporte/empleados2?usuario="+ this.usuario +"&tipo=EXCEL";
    this.api2.obtenerIdPorCorreo(this.usuario).subscribe(data=>{
      this.id = data.mensaje;
      this.api.obtenerEmpleadosPorUsuario(data.mensaje).subscribe(data=>{
        console.log(data);
        this.empleados = data;
      });
    });
  }

  eliminarEmpleado(id:any, nombre:any, apellido:any){
    let data1:any = [];
    data1.idEmpleado = id;
    this.empleado1 = data1;
    if (!confirm('¿Desea eliminar este empleado?')) {
      return;
    }else{
      this.api.eliminarEmpleado(this.empleado1).subscribe(data=>{
        let auditoria:any = [];
            auditoria.id_usuario = this.id;
            auditoria.evento = "Elimino el empleado con el nombre: " + nombre + " " + apellido;
            this.api3.crearAuditoria(auditoria).subscribe(data89=>{
            });
        location.reload();
      });
    }
    }

    editarEmpleado(id:any){
      this.router.navigate(['editarEmpleado',id]);
    }

    pdf(){
      window.location.href = this.linkPdf;
    }
  
    excel(){
      window.location.href = this.linkExcel;
    }
  

}
