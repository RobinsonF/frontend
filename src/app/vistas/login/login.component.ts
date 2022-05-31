import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/servicios/api/api.service';
import { loginInterface } from 'src/app/modelos/login.interface';

import { Router } from '@angular/router';
import { responseInterface } from 'src/app/modelos/response.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    correo: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  constructor(private api:ApiService, private router:Router) { }

  error:boolean = false;
  errorMsj:any = "";

  ngOnInit(): void {
    this.revisarToken();
  }

  revisarToken(){
    if(localStorage.getItem('token')){
      this.router.navigate(['dashboard']);
    }
  }

  onLogin(form:loginInterface){
    this.api.loginByEmail(form).subscribe(data=>{
      let dataRenponse:responseInterface = data;
      if(dataRenponse.estado!='FAIL'){
        localStorage.setItem("token",dataRenponse.estado);
        this.router.navigate(['dashboard']);
      }else{
        this.error = true;
        this.errorMsj = "Credenciales incorrectas";
      }
    });
  }

}
