import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/servicios/api/api.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  usuario:any = "";
  id:any;

  constructor(private router:Router, private api:ApiService) { }

  ngOnInit(): void {
    this.usuario = localStorage.getItem('correo');
    this.api.obtenerIdPorCorreo(this.usuario).subscribe(data=>{
      this.id = data.mensaje;
    })
  }

  salir(){
    this.router.navigate(['login']);
  }

  perfilUsuario(){
    this.router.navigate(['perfilUsuario', this.id]);
  }

}
