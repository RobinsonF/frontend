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
  error:boolean = false;
  errorMsj:any = "";

  editarForm = new FormGroup({
    login: new FormControl('',Validators.required),
    nombre: new FormControl('',Validators.required),
    direccion: new FormControl('', Validators.required),
    telefono: new FormControl('',[Validators.pattern(/^[0-9,$]*$/), Validators.required]),
    correo: new FormControl('',[Validators.required, Validators.pattern(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/)]),
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
    if(this.editarForm.invalid){
      this.error = true;
      this.errorMsj = "Revise los campos";
    }else{
      this.api.editarUsuario(form).subscribe(data=>{
        if(data.mensaje=="El correo ya se encuentra registrado"){
          this.error = true;
          this.errorMsj = data.mensaje;
        }else if(data.mensaje=="El login ya se encuentra registrado"){
          this.error = true;
          this.errorMsj = data.mensaje;
        }else if(data.mensaje=="El telefono ya se encuentra registrado"){
          this.error = true;
          this.errorMsj = data.mensaje;
        }else{
          alert(data.mensaje);
          location.reload();
        }
      });
    }
  }

}
