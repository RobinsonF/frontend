import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormsModule } from '@angular/forms';
import { ApiService } from 'src/app/servicios/api/api.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { auditoriaInterface} from 'src/app/modelos/auditoria.interface';
import { listaUsuariosInterface } from 'src/app/modelos/listaUsuarios.interface';
import { filtroInterface } from 'src/app/modelos/filtro.interface';

@Component({
  selector: 'app-trazabilidad',
  templateUrl: './trazabilidad.component.html',
  styleUrls: ['./trazabilidad.component.css']
})
export class TrazabilidadComponent implements OnInit {

  pages: number = 1;
  trazabilidades:auditoriaInterface[];
  usuario:auditoriaInterface;
  usuario1:listaUsuariosInterface;

  constructor(private api:ApiService, private router:Router, private activerouter:ActivatedRoute) { }

  registroForm = new FormGroup({
    fecha1: new FormControl('', Validators.required),
    fecha2: new FormControl('',Validators.required),
    id_usuario: new FormControl('')
  })

  ngOnInit(): void {
    let usuarioId = this.activerouter.snapshot.paramMap.get('id');
    this.api.obtenerAuditorias(usuarioId).subscribe(data=>{
      this.trazabilidades = data;
      this.usuario = data[0];
      console.log(data[0]);
    });
    this.api.obtenerUsuario(usuarioId).subscribe(data=>{
      this.usuario1 = data;
    })
  }

  obtenerTrazabilidadPorFechas(form:filtroInterface){
    this.registroForm.setValue({
      'fecha1':form.fecha1,
      'fecha2':form.fecha2,
      'id_usuario': this.usuario1.id_usuario
    });
    this.api.obtenerAuditoriaFecha(form).subscribe(data=>{
      this.trazabilidades = data;
    })
  }
}
