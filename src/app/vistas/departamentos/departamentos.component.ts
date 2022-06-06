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

  pages: number = 1;

  departamentos:departamentoInterface[];
  departamento1:departamentoInterface;

  constructor(private api:DepartamentoService, private router:Router) { }

  ngOnInit(): void {
    this.api.obtenerDepartamentos().subscribe(data=>{
      this.departamentos = data;
    });
  }

  eliminarDepartamento(id:any){
    let data1:any = [];
    data1.idDepartamento = id;
    this.departamento1 = data1;
    if (!confirm('¿Desea eliminar este departamento?')) {
      return;
    }else{
      this.api.eliminarDepartamento(this.departamento1).subscribe(data=>{
        location.reload();
      });
    }
  }

}
