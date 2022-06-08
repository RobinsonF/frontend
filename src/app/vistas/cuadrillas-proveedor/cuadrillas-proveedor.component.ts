import { Component, OnInit } from '@angular/core';
import { CuadrillaService } from 'src/app/servicios/api/cuadrilla.service';
import { cuadrillaInterface } from 'src/app/modelos/cuadrilla.interface';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/servicios/api/api.service';


@Component({
  selector: 'app-cuadrillas-proveedor',
  templateUrl: './cuadrillas-proveedor.component.html',
  styleUrls: ['./cuadrillas-proveedor.component.css']
})
export class CuadrillasProveedorComponent implements OnInit {

  pages: number = 1;
  usuario:any = "";
  cuadrillas:cuadrillaInterface[];
  cuadrilla1:cuadrillaInterface;

  constructor(private api:ApiService, private api2:CuadrillaService) { }

  ngOnInit(): void {
    this.usuario = localStorage.getItem('correo');
    this.api.obtenerIdPorCorreo(this.usuario).subscribe(data=>{
      this.api2.obtenerCuadrillaPorUsuario(data.mensaje).subscribe(data=>{
        console.log(data);
        this.cuadrillas = data;
      });
    });
   
  }

  eliminarCuadrilla(id:any){
    let data1:any = [];
    data1.idCuadrilla= id;
    this.cuadrilla1 = data1;
    if (!confirm('¿Desea eliminar esta cuadrilla?')) {
      return;
    }else{
      this.api2.eliminarCuadrilla(this.cuadrilla1).subscribe(data=>{
        location.reload();
      });
    }
  }

}
