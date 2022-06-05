import { Component, OnInit } from '@angular/core';
import { MaterialService } from 'src/app/servicios/api/material.service';
import { materialInterface } from 'src/app/modelos/material.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-materiales',
  templateUrl: './materiales.component.html',
  styleUrls: ['./materiales.component.css']
})
export class MaterialesComponent implements OnInit {

  constructor(private api:MaterialService, private router:Router) { }

  materiales:materialInterface[];

  ngOnInit(): void {
    this.api.obtenerMateriales().subscribe(data=>{
      console.log(data);
      this.materiales = data;
    });
  }

  eliminarMaterial(id:any){

  }

  editarMaterial(id:any){

  }

}
