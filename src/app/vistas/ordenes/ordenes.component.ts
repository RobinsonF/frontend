import { Component, OnInit } from '@angular/core';
import { OrdenService } from 'src/app/servicios/api/orden.service';
import { ordenInterface } from 'src/app/modelos/orden.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ordenes',
  templateUrl: './ordenes.component.html',
  styleUrls: ['./ordenes.component.css']
})
export class OrdenesComponent implements OnInit {

  constructor(private api:OrdenService, private router:Router) { }

  ordenes:ordenInterface[];

  ngOnInit(): void {
    this.api.obtenerOrdenes().subscribe(data=>{
      console.log(data);
      this.ordenes = data;
    });
  }

  elimimarOrden(id:any){

  }

  editarOrden(id:any){

  }

}
