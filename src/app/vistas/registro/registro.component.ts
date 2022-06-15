import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/servicios/api/api.service';
import { usuarioInterface } from 'src/app/modelos/registro.interface';
import { correoInterface } from 'src/app/modelos/correo.interface';
import { Router } from '@angular/router';
import { responseInterface } from 'src/app/modelos/response.interface';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  registroForm = new FormGroup({
    login: new FormControl('', [Validators.required,Validators.maxLength(8)]),
    nombre: new FormControl('', Validators.required),
    direccion: new FormControl('', Validators.required),
    telefono: new FormControl('', [Validators.required, Validators.pattern(/^[0-9,$]*$/)]),
    correo: new FormControl('', [Validators.required,Validators.pattern(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/)]),
    password: new FormControl('', [Validators.required,Validators.pattern(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{0,9}$/)]),
    password2: new FormControl('', [Validators.required,Validators.pattern(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{0,9}$/)]),
    id_rol: new FormControl('')
  })
  correo:correoInterface;

  constructor(private api:ApiService, private router:Router) { }

  errorForm:boolean = false;
  errorCorreo:boolean = false;
  errorMensaje:any = "";

  ngOnInit(): void {
    this.registroForm.patchValue({
      'id_rol':2
    });
  }

  registrarUsuario(form:usuarioInterface){
    if(this.registroForm.invalid){
      this.errorForm = true;
        this.errorMensaje = "Complete los campos";
    }else{
        if(form.password != form.password2){
        this.errorForm = true;
        this.errorMensaje = "Las contraseñas no coinciden";
        }else{
        let info:any = [];
        info.subject = "Bienvenido a NFS";
        info.to = form.correo;
        info.from = "";
        info.text = "Url = http://localhost:4200/login\nLogin = " + form.login + "\nContraseña = " + form.password;
        this.correo = info;
        this.api.registrarUsuario(form).subscribe(data=>{
        if(data.mensaje=="El correo ya se encuentra registrado"){
          this.errorForm = true;
          this.errorMensaje = data.mensaje;
        }else if (data.mensaje=="El login ya se encuentra registrado"){
          this.errorForm = true;
          this.errorMensaje = data.mensaje;
        }else if(data.mensaje=="El telefono ya se encuentra registrado"){
          this.errorForm = true;
          this.errorMensaje = data.mensaje;
        }else{
          this.api.enviarCorreo(this.correo).subscribe(data1 =>{ 
          });
          alert(data.mensaje);
          this.router.navigate(['login']);
        }
        });
        }
    }
    }
  }
