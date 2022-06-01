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
    login: new FormControl('', Validators.required),
    nombre: new FormControl('', Validators.required),
    direccion: new FormControl('', Validators.required),
    telefono: new FormControl('', Validators.required),
    correo: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    password2: new FormControl('', Validators.required),
    id_rol: new FormControl('')
  })
  correo:correoInterface;

  constructor(private api:ApiService, private router:Router) { }

  error:boolean = false;
  errorMsj:any = "";

  ngOnInit(): void {
    this.registroForm.patchValue({
      'id_rol':2
    });
  }

  registrarUsuario(form:usuarioInterface){
    if(form.password != form.password2){
      this.error = true;
      this.errorMsj = "Las contraseñas no coinciden";
      console.log(form);
    }else{
      let info:any = [];
      info.subject = "Bienvenido a NFS";
      info.to = form.correo;
      info.from = "";
      info.text = "Url = http://localhost:4200/login\nLogin = " + form.login + "\nContraseña = " + form.password;
      this.correo = info;
      console.log(this.correo);
      this.error = false;
      this.errorMsj = "";
      this.api.registrarUsuario(form).subscribe(data=>{
        this.api.enviarCorreo(this.correo).subscribe(data1 =>{ 
        });
        alert('Usuario registrado correctamente');
        this.router.navigate(['login']);
      });
    }
  }

}
