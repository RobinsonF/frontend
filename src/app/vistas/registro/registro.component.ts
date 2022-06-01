import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/servicios/api/api.service';
import { usuarioInterface } from 'src/app/modelos/registro.interface';
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
      this.error = false;
      this.errorMsj = "";
      this.api.registrarUsuario(form).subscribe(data=>{
        alert('Usuario registrado correctamente');
        this.router.navigate(['login']);
      });
    }
  }

}
