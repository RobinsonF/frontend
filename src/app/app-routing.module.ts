import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './vistas/login/login.component';
import { NuevoComponent } from './vistas/nuevo/nuevo.component';
import { EditarComponent } from './vistas/editar/editar.component';
import { DashboardComponent } from './vistas/dashboard/dashboard.component';
import { UsuariosComponent } from './vistas/usuarios/usuarios.component';
import { RegistroComponent } from './vistas/registro/registro.component';

const routes: Routes = [
    {path: '', redirectTo:'login',pathMatch:'full'},
    {path:'login', component:LoginComponent},
    {path:'nuevo', component:NuevoComponent},
    {path:'editar/:id', component:EditarComponent},
    {path:'dashboard', component:DashboardComponent},
    {path:'usuarios', component:UsuariosComponent},
    {path: 'registro', component:RegistroComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, DashboardComponent, NuevoComponent, EditarComponent, UsuariosComponent, RegistroComponent]