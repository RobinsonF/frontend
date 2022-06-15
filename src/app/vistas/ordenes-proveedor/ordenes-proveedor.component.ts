import { Component, OnInit } from '@angular/core';
import { OrdenService } from 'src/app/servicios/api/orden.service';
import { ordenInterface } from 'src/app/modelos/orden.interface';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/servicios/api/api.service';
import { AuditoriaService } from 'src/app/servicios/api/auditoria.service';

@Component({
  selector: 'app-ordenes-proveedor',
  templateUrl: './ordenes-proveedor.component.html',
  styleUrls: ['./ordenes-proveedor.component.css']
})
export class OrdenesProveedorComponent implements OnInit {

  constructor(private api:OrdenService, private api1:ApiService, private api2:AuditoriaService, private router:Router) { }

  pages: number = 1;

  ordenes:ordenInterface[];
  orden1:ordenInterface;
  linkPdf:string;
  linkExcel:string;
  usuario:any = "";
  id:any;

  ngOnInit(): void {
    this.usuario = localStorage.getItem('correo');
    this.linkPdf = "http://localhost:8080/reporte/ordenes2?usuario="+ this.usuario +"&tipo=PDF";
    this.linkExcel = "http://localhost:8080/reporte/ordenes2?usuario="+ this.usuario +"&tipo=EXCEL";
    this.api1.obtenerIdPorCorreo(this.usuario).subscribe(data=>{
      this.id = data.mensaje;
      this.api.obtenerOrdenesPorUsuario(data.mensaje).subscribe(data=>{
        console.log(data);
        this.ordenes = data;
      });
    });
  }

  elimimarOrden(id:any){
    let data1:any = [];
    data1.idTrabajo = id;
    this.orden1 = data1;
    if (!confirm('¿Desea eliminar esta orden?')) {
      return;
    }else{
      this.api.eliminarOrden(this.orden1).subscribe(data=>{
        let auditoria:any = [];
            auditoria.id_usuario = this.id;
            auditoria.evento = "Elimino una orden";
            this.api2.crearAuditoria(auditoria).subscribe(data89=>{
            });
        location.reload();
      });
    }
  }

  editarOrden(id:any){
    this.router.navigate(['editarOrden',id]);
  }

  pdf(){
    window.location.href = this.linkPdf;
  }

  excel(){
    window.location.href = this.linkExcel;
  }

}
