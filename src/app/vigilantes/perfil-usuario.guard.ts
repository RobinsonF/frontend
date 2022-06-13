import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ApiService } from '../servicios/api/api.service';

@Injectable({
  providedIn: 'root'
})
export class PerfilUsuarioGuard implements CanActivate {
  constructor(private router:Router, private api:ApiService){}

  usuario = localStorage.getItem('correo');

  verificarCorreo(correo:any){
    if(this.usuario == null){
      this.router.navigate(['login']);
    }
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let param1 = this.verificarCorreo(this.usuario);  
    return true;
  }
  
}
