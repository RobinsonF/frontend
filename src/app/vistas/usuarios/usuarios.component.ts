import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api/api.service';
import { Router } from '@angular/router';
import { listaUsuariosInterface } from 'src/app/modelos/listaUsuarios.interface';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

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

  eliminarUsuario(id:any){
    this.api.eliminarUsuario(id).subscribe(data=>{
      console.log(data);
    });
  }
}
