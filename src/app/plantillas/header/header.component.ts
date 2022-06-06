import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  usuario:any = "";

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.usuario = localStorage.getItem('correo');
  }

  salir(){
    this.router.navigate(['login']);
  }

}
