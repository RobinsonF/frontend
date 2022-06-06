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

  pages: number = 1;

  zonas:zonaInterface[];
  zona1:zonaInterface;

  constructor(private api:ZonaService, private router:Router) { }

  ngOnInit(): void {
    this.api.obtenerZonas().subscribe(data=>{
      this.zonas = data;
    });
  }

  eliminarZona(id:any){
    let data1:any = [];
    data1.idZona = id;
    this.zona1 = data1;
    if (!confirm('¿Desea eliminar esta zona?')) {
      return;
    }else{
      this.api.eliminarZona(this.zona1).subscribe(data=>{
        location.reload();
      });
    }
  }

  editarZona(id:any){
    this.router.navigate(['editarZona',id]);
  }

}
