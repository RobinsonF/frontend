import { Component, OnInit } from '@angular/core';
import { CuadrillaService } from 'src/app/servicios/api/cuadrilla.service';
import { cuadrillaInterface } from 'src/app/modelos/cuadrilla.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cuadrillas',
  templateUrl: './cuadrillas.component.html',
  styleUrls: ['./cuadrillas.component.css']
})
export class CuadrillasComponent implements OnInit {

  pages: number = 1;

  cuadrillas:cuadrillaInterface[];
  cuadrilla1:cuadrillaInterface;

  constructor(private api:CuadrillaService, private router:Router) { }

  ngOnInit(): void {
    this.api.obtenerCuadrillas().subscribe(data=>{
      console.log(data);
      this.cuadrillas = data;
    });
  }

  editarCuadrilla(id:any){
    this.router.navigate(['editarCuadrilla',id]);
  }

  eliminarCuadrilla(id:any){
    let data1:any = [];
    data1.idCuadrilla= id;
    this.cuadrilla1 = data1;
    if (!confirm('¿Desea eliminar esta cuadrilla?')) {
      return;
    }else{
      this.api.eliminarCuadrilla(this.cuadrilla1).subscribe(data=>{
        location.reload();
      });
    }
  }

}
