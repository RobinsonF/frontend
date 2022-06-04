import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/servicios/api/api.service';
import { Router } from '@angular/router';
import { responseInterface } from 'src/app/modelos/response.interface';
import { usuarioInterface } from 'src/app/modelos/registro.interface';


@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {

  passForm = new FormGroup({
    correo: new FormControl('', [Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required,Validators.pattern(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{0,9}$/)]),
    password2: new FormControl('',[Validators.required,Validators.pattern(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{0,9}$/)])
  })

  constructor(private api:ApiService, private router:Router) { }

  error:boolean = false;
  errorMensaje:any = "";

  ngOnInit(): void {
  }

  cambiarPassword(form:usuarioInterface){
    if(this.passForm.invalid){
      this.error = true;
      this.errorMensaje = "Revise los campos";
    }else{
      if(form.password!=form.password2){
        this.error = true;
        this.errorMensaje = "Las contraseñas no coinciden";
      }else{
        this.api.cambiarPass(form).subscribe(data=>{
          if(data.mensaje == "No se puede colocar el mismo password"){
            this.error = true;
            this.errorMensaje = data.mensaje;
          }else{
            alert(data.mensaje);
            this.router.navigate(['login']);
          }
        });
      }
    }
  }

}
