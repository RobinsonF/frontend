import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { departamentoInterface } from 'src/app/modelos/departamento.interface';
import { DepartamentoService } from 'src/app/servicios/api/departamento.service';

@Component({
  selector: 'app-departamentos',
  templateUrl: './departamentos.component.html',
  styleUrls: ['./departamentos.component.css']
})
export class DepartamentosComponent implements OnInit {

  departamentos:departamentoInterface[];

  constructor(private api:DepartamentoService, private router:Router) { }

  ngOnInit(): void {
    this.api.obtenerDepartamentos().subscribe(data=>{
      this.departamentos = data;
    });
  }

  eliminarDepartamento(id:any){

  }

  editarDepartamento(id:any){
    
  }

}
