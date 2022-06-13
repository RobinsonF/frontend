import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/servicios/api/api.service';
import { loginInterface } from 'src/app/modelos/login.interface';
import { usuarioInterface } from 'src/app/modelos/registro.interface';
import { Router } from '@angular/router';
import { responseInterface } from 'src/app/modelos/response.interface';
import { parametoInterface } from 'src/app/modelos/parametro.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    correo: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  })

  constructor(private api:ApiService, private router:Router) { }

  form2:usuarioInterface;
  error:boolean = false;
  error2:boolean = false;
  error3:boolean = false;

  errorMsj:any = "";
  
  ngOnInit(): void {
    //this.revisarToken();
  }

  revisarToken(){
    if(localStorage.getItem('token')){
      this.router.navigate(['dashboard']);
    }
  }

  onLogin(form:loginInterface){
    if(this.loginForm.invalid){
      this.error = true;
      this.errorMsj = "Revise los campos";
    }else{
        this.api.loginByEmail(form).subscribe(data=>{
              let dataRenponse:responseInterface = data;
              if(data.mensaje=="La cuenta se encuentra bloqueada"){
                this.error = true;
                this.error3 = false;
                this.errorMsj = data.mensaje;
              }else{
                if(dataRenponse.estado!='FAIL'){
                  if (data.mensaje=="Para poder iniciar sesión es necesario cambiar la contraseña"){
                     this.error3 = true;
                     this.error = false;
                     this.errorMsj = data.mensaje;
                   }else{
                     localStorage.setItem("correo",this.loginForm.get('correo')?.value);
                     alert('Logueado correctamente');
                     this.api.setearIntentoCero(form).subscribe(data2=>{
                     });
                     this.error = false;
                     this.error2 = false;
                     this.error3 = false;
                     if(data.rol=="Proveedor"){
                      this.router.navigate(['dashboardP']);
                     }else{
                      this.router.navigate(['dashboard']);
                     }
                   }
                 }else{
                   this.error = true;
                   this.error3 = false;
                   this.errorMsj = "Credenciales incorrectas";
                   this.api.aumentarIntento(form).subscribe(data1=>{
                   });
                 }
              }
      });
    }
  }
}
