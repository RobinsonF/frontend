import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api/api.service';
import { Router, RouterLink } from '@angular/router';
import { listaUsuariosInterface } from 'src/app/modelos/listaUsuarios.interface';
import { eliminarUsuarioInterface } from 'src/app/modelos/eliminarUsuario.interface';
import { window } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  pages: number = 1;

  filtro:any;

  usuarios:listaUsuariosInterface[];
  usuario:eliminarUsuarioInterface;
  dataSource:any;
  
  constructor(private api:ApiService, private router:Router) { }
  
  ngOnInit(): void {
    this.api.obtenerUsuarios().subscribe(data=>
      {
        this.usuarios = data;
        this.dataSource = new MatTableDataSource(data);
      });
  }

  filtrar(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
  }  
  
  editarUsuario(id:any){
    this.router.navigate(['editar', id]);
  }

  trazabilidadUsuario(id:any){
    this.router.navigate(['trazabilidad', id]);
  }

  eliminarUsuario(id:string){
    if (!confirm('¿Desea eliminar este usuario?')) {
      return;
    }else{
      let data:any = [];
      data.id_usuario = id;
      this.usuario = data;
      this.api.eliminarUsuario(this.usuario).subscribe(data=>{
        if(data.mensaje=="No es posible eliminar al usuario porque cuanta con cuadrillas activas"){
          alert(data.mensaje);
        }else{
          location.reload();
        }
      });
    }
  }
  desbloquearUsuario(id:string, correo:string){
    let datos:any = [];
    datos.id_usuario = id;
    datos.correo = correo;
    this.api.obtenerIntentos(datos).subscribe(data=>{
      if(Number(data)<3){
        alert("Este usuario no se encuentra bloqueado");
      }else{
        if(!confirm('¿Desea desbloquear este usuario?')){
          return;
        }else{
          this.api.desbloquearUsuario(datos).subscribe(data=>{
          });
        }
      }
    });
  }



}
