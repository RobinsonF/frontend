import { Component, OnInit } from '@angular/core';
import { CiudadService } from 'src/app/servicios/api/ciudad.service';
import { ciudadInterface } from 'src/app/modelos/ciudad.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ciudades',
  templateUrl: './ciudades.component.html',
  styleUrls: ['./ciudades.component.css']
})
export class CiudadesComponent implements OnInit {

  pages: number = 1;

  ciudades:ciudadInterface[];
  ciudad1:ciudadInterface;

  constructor(private api:CiudadService, private router:Router) { }

  ngOnInit(): void {
    this.api.obtenerCiudades().subscribe(data=>{
      this.ciudades = data;
    });
  }

  eliminarCiudad(id:any){
    let data1:any = [];
    data1.idCiudad = id;
    this.ciudad1 = data1;
    if (!confirm('¿Desea eliminar esta ciudad?')) {
      return;
    }else{
      this.api.eliminarCiudad(this.ciudad1).subscribe(data=>{
        location.reload();
      });
    }
  } 

}
