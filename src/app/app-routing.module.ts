import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './vistas/login/login.component';
import { NuevoComponent } from './vistas/nuevo/nuevo.component';
import { EditarComponent } from './vistas/editar/editar.component';
import { DashboardComponent } from './vistas/dashboard/dashboard.component';
import { UsuariosComponent } from './vistas/usuarios/usuarios.component';
import { CuadrillasComponent } from './vistas/cuadrillas/cuadrillas.component';
import { ZonasComponent } from './vistas/zonas/zonas.component';
import { DepartamentosComponent } from './vistas/departamentos/departamentos.component';
import { CiudadesComponent } from './vistas/ciudades/ciudades.component';
import { MaterialesComponent } from './vistas/materiales/materiales.component';
import { OrdenesComponent } from './vistas/ordenes/ordenes.component';
import { EmpleadosComponent } from './vistas/empleados/empleados.component';
import { RegistroComponent } from './vistas/registro/registro.component';
import { RegistroCiudadComponent } from './vistas/registro-ciudad/registro-ciudad.component';
import { RegistroCuadrillaComponent } from './vistas/registro-cuadrilla/registro-cuadrilla.component';
import { RegistroDepartamentoComponent } from './vistas/registro-departamento/registro-departamento.component';
import { RegistroEmpleadoComponent } from './vistas/registro-empleado/registro-empleado.component';
import { RegistroMaterialComponent } from './vistas/registro-material/registro-material.component';
import { RegistroMaterialOrdenTrabajoComponent } from './vistas/registro-material-orden-trabajo/registro-material-orden-trabajo.component';
import { RegistroProveedorComponent } from './vistas/registro-proveedor/registro-proveedor.component';
import { RegistroZonaComponent } from './vistas/registro-zona/registro-zona.component';
import { TrazabilidadComponent } from './vistas/trazabilidad/trazabilidad.component';
import { PasswordComponent } from './vistas/password/password.component';

const routes: Routes = [
    {path: '', redirectTo:'login',pathMatch:'full'},
    {path:'login', component:LoginComponent},
    {path:'nuevo', component:NuevoComponent},
    {path:'editar/:id', component:EditarComponent},
    {path:'dashboard', component:DashboardComponent},
    {path:'usuarios', component:UsuariosComponent},
    {path: 'cuadrillas', component:CuadrillasComponent},
    {path: 'zonas', component:ZonasComponent},
    {path: 'departamentos', component:DepartamentosComponent},
    {path: 'ciudades', component:CiudadesComponent},
    {path: 'materiales', component:MaterialesComponent},
    {path: 'ordenes', component:OrdenesComponent},
    {path: 'empleados', component:EmpleadosComponent},
    {path: 'registro', component:RegistroComponent},
    {path: 'registroCiudad', component:RegistroCiudadComponent},
    {path: 'registroCuadrilla', component:RegistroCuadrillaComponent},
    {path: 'registroDepartamento', component:RegistroDepartamentoComponent},
    {path: 'registroEmpleado', component:RegistroEmpleadoComponent},
    {path: 'registroMaterial', component:RegistroMaterialComponent},
    {path: 'registroTrabajo', component:RegistroMaterialOrdenTrabajoComponent},
    {path: 'registroProveedor', component:RegistroProveedorComponent},
    {path: 'registroZona', component:RegistroZonaComponent},
    {path: 'trazabilidad/:id', component:TrazabilidadComponent},
    {path: 'password', component:PasswordComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, DashboardComponent, NuevoComponent, EditarComponent, UsuariosComponent, RegistroComponent,
RegistroCiudadComponent, RegistroCuadrillaComponent, RegistroDepartamentoComponent, RegistroEmpleadoComponent, RegistroMaterialComponent, 
RegistroMaterialOrdenTrabajoComponent, RegistroProveedorComponent, RegistroZonaComponent, CuadrillasComponent, ZonasComponent,
DepartamentosComponent, CiudadesComponent, MaterialesComponent, OrdenesComponent, EmpleadosComponent, TrazabilidadComponent, PasswordComponent]