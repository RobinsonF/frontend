import { Component, OnInit } from '@angular/core';
import { OrdenService } from 'src/app/servicios/api/orden.service';
import { ordenInterface } from 'src/app/modelos/orden.interface';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/servicios/api/api.service';

@Component({
  selector: 'app-ordenes-proveedor',
  templateUrl: './ordenes-proveedor.component.html',
  styleUrls: ['./ordenes-proveedor.component.css']
})
export class OrdenesProveedorComponent implements OnInit {

  constructor(private api:OrdenService, private api1:ApiService) { }

  pages: number = 1;

  ordenes:ordenInterface[];
  orden1:ordenInterface;
  usuario:any = "";

  ngOnInit(): void {
    this.usuario = localStorage.getItem('correo');
    this.api1.obtenerIdPorCorreo(this.usuario).subscribe(data=>{
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
        location.reload();
      });
    }
  }

}
