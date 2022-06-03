import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api/api.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { auditoriaInterface} from 'src/app/modelos/auditoria.interface'

@Component({
  selector: 'app-trazabilidad',
  templateUrl: './trazabilidad.component.html',
  styleUrls: ['./trazabilidad.component.css']
})
export class TrazabilidadComponent implements OnInit {


  trazabilidades:auditoriaInterface[];
  usuario:auditoriaInterface;

  constructor(private api:ApiService, private router:Router, private activerouter:ActivatedRoute) { }

  ngOnInit(): void {
    let usuarioId = this.activerouter.snapshot.paramMap.get('id');
    this.api.obtenerAuditorias(usuarioId).subscribe(data=>{
      this.trazabilidades = data;
      this.usuario = data[0];
      console.log(data[0]);
    });

  }


}
