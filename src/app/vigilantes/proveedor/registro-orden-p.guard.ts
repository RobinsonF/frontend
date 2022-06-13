import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/servicios/api/api.service';

@Injectable({
  providedIn: 'root'
})
export class RegistroOrdenPGuard implements CanActivate {
  constructor(private router:Router, private api:ApiService){}

  usuario = localStorage.getItem('correo');

  verificarCorreo(correo:any){
    if(this.usuario == null){
      this.router.navigate(['login']);
    }else{
      this.api.obtenerRol(this.usuario).subscribe(data=>{
          if(data.mensaje!='Proveedor'){
            this.router.navigate(['dashboard']);
          }
      });
    }
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let param1 = this.verificarCorreo(this.usuario);  
    return true;
  }
  
}
