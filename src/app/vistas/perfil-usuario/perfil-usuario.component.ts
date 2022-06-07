import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api/api.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import {listaUsuariosInterface} from 'src/app/modelos/listaUsuarios.interface';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent implements OnInit {

  constructor(private api:ApiService, private activaterouter:ActivatedRoute) { }

  datosUsuario:listaUsuariosInterface;

  editarForm = new FormGroup({
    login: new FormControl('',Validators.required),
    nombre: new FormControl('',Validators.required),
    direccion: new FormControl('', Validators.required),
    telefono: new FormControl('',[Validators.pattern(/^[0-9,$]*$/), Validators.required]),
    correo: new FormControl('',[Validators.required, Validators.pattern(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/)]),
    id_usuario: new FormControl('')
  });


  ngOnInit(): void {
    let usuarioId = this.activaterouter.snapshot.paramMap.get('id');
    this.api.obtenerUsuario(usuarioId).subscribe(data=>{
      console.log(data);
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

}
