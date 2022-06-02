import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {listaUsuariosInterface} from 'src/app/modelos/listaUsuarios.interface';
import { ApiService } from 'src/app/servicios/api/api.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  constructor(private activerouter:ActivatedRoute, private router:Router, private api:ApiService) { }

  datosUsuario:listaUsuariosInterface;
  editarForm = new FormGroup({
    login: new FormControl(''),
    nombre: new FormControl(''),
    direccion: new FormControl(''),
    telefono: new FormControl(''),
    correo: new FormControl(''),
    id_usuario: new FormControl('')
  });

  ngOnInit(): void {
    let usuarioId = this.activerouter.snapshot.paramMap.get('id');
    this.api.obtenerUsuario(usuarioId).subscribe(data=>{
      this.datosUsuario = data;
      this.editarForm.setValue({
        'nombre': this.datosUsuario.nombre,
        'login': this.datosUsuario.login,
        'direccion': this.datosUsuario.direccion,
        'telefono': this.datosUsuario.telefono,
        'correo': this.datosUsuario.correo,
        'id_usuario':this.datosUsuario.id_usuario
      })
    });
  }

  editarUsuario(form:listaUsuariosInterface){
    this.api.editarUsuario(form).subscribe(data=>{
    })
    alert('Guardado Correctamente');
  }

}
