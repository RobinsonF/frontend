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

  ciudades:ciudadInterface[];

  constructor(private api:CiudadService, private router:Router) { }

  ngOnInit(): void {
    this.api.obtenerCiudades().subscribe(data=>{
      this.ciudades = data;
    });
  }

  eliminarCiudad(id:any){

  } 

  editarCiudad(id:any){
    
  }

}
