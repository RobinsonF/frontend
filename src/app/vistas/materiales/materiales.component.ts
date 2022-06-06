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

  pages: number = 1;

  materiales:materialInterface[];
  material1:materialInterface;

  ngOnInit(): void {
    this.api.obtenerMateriales().subscribe(data=>{
      console.log(data);
      this.materiales = data;
    });
  }

  eliminarMaterial(id:any){
    let data1:any = [];
    data1.idMaterial=id;
    this.material1 = data1;
    if (!confirm('¿Desea eliminar este material?')) {
      return;
    }else{
      this.api.eliminarMaterial(this.material1).subscribe(data=>{
        location.reload();
      });
    }
  }

  editarMaterial(id:any){
    this.router.navigate(['editarMaterial',id]);
  }

}
