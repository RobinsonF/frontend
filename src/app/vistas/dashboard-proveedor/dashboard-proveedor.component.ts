import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-proveedor',
  templateUrl: './dashboard-proveedor.component.html',
  styleUrls: ['./dashboard-proveedor.component.css']
})
export class DashboardProveedorComponent implements OnInit {

  constructor() { }

  usuario:any = "";
  linkPdf:string;

  ngOnInit(): void {
    this.usuario = localStorage.getItem('correo');
    this.linkPdf = "http://localhost:8080/reporte/graficaCuadrillas2?usuario="+ this.usuario +"&tipo=PDF";
  }

  pdf(){
    window.location.href = this.linkPdf;
  }

}
