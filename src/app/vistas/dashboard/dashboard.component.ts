import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api/api.service';
import { Router } from '@angular/router';
import { listaUsuariosInterface } from 'src/app/modelos/listaUsuarios.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  usuarios:listaUsuariosInterface[];


  constructor(private api:ApiService, private router:Router) { }

  ngOnInit(): void {
    this.api.obtenerUsuarios().subscribe(data=>
      {
        this.usuarios = data;
      });
  }

  editarUsuario(id:any){
    this.router.navigate(['editar', id]);
  }


  
}
