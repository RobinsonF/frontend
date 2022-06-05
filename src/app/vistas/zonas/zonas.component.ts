import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { zonaInterface } from 'src/app/modelos/zona.interface';
import { ZonaService } from 'src/app/servicios/api/zona.service';

@Component({
  selector: 'app-zonas',
  templateUrl: './zonas.component.html',
  styleUrls: ['./zonas.component.css']
})
export class ZonasComponent implements OnInit {

  zonas:zonaInterface[];

  constructor(private api:ZonaService, private router:Router) { }

  ngOnInit(): void {
    this.api.obtenerZonas().subscribe(data=>{
      this.zonas = data;
    });
  }

  eliminarZona(id:any){

  }

  editarZona(id:any){

  }

}
