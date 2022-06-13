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
import { EditarCuadrillaComponent } from './vistas/editar-cuadrilla/editar-cuadrilla.component';
import { ZonaEditarComponent } from './vistas/zona-editar/zona-editar.component';
import { MaterialEditarComponent } from './vistas/material-editar/material-editar.component';
import { OrdenEditarComponent } from './vistas/orden-editar/orden-editar.component';
import { EmpleadoEditarComponent } from './vistas/empleado-editar/empleado-editar.component';
import { PerfilUsuarioComponent } from './vistas/perfil-usuario/perfil-usuario.component';
import { DashboardProveedorComponent } from './vistas/dashboard-proveedor/dashboard-proveedor.component';
import { RegistroCuadrillaProveedorComponent } from './vistas/registro-cuadrilla-proveedor/registro-cuadrilla-proveedor.component';
import { RegistroMaterialProveedorComponent } from './vistas/registro-material-proveedor/registro-material-proveedor.component';
import { RegistroOrdenProveedorComponent } from './vistas/registro-orden-proveedor/registro-orden-proveedor.component';
import { RegistroEmpleadoProveedorComponent } from './vistas/registro-empleado-proveedor/registro-empleado-proveedor.component';
import { CuadrillasProveedorComponent } from './vistas/cuadrillas-proveedor/cuadrillas-proveedor.component';
import { MaterialesProveedorComponent } from './vistas/materiales-proveedor/materiales-proveedor.component';
import { OrdenesProveedorComponent } from './vistas/ordenes-proveedor/ordenes-proveedor.component';
import { EmpleadosProveedorComponent } from './vistas/empleados-proveedor/empleados-proveedor.component';
import { VigilanteGuard } from './vigilante.guard';
import { VigilanteDashboardPGuard } from './vigilantes/vigilante-dashboard-p.guard';
import { VigilanteUsuariosGuard } from './vigilantes/vigilante-usuarios.guard';
import { VigilanteCuadrillasGuard } from './vigilantes/vigilante-cuadrillas.guard';
import { VigilanteZonasGuard } from './vigilantes/vigilante-zonas.guard';
import { VigilanteDepartamentosGuard } from './vigilantes/vigilante-departamentos.guard';
import { VigilanteCiudadesGuard } from './vigilantes/vigilante-ciudades.guard';
import { VigilanteMaterialesGuard } from './vigilantes/vigilante-materiales.guard';
import { VigilanteOrdenesGuard } from './vigilantes/vigilante-ordenes.guard';
import { VigilanteEmpleadosGuard } from './vigilantes/vigilante-empleados.guard';

const routes: Routes = [
    {path: '', redirectTo:'login',pathMatch:'full'},
    {path:'login', component:LoginComponent},
    {path:'nuevo', component:NuevoComponent},
    {path:'editar/:id', component:EditarComponent},
    {path:'dashboard', component:DashboardComponent,
    canActivate:[VigilanteGuard]
    },
    {path:'usuarios', component:UsuariosComponent,
    canActivate:[VigilanteUsuariosGuard]
    },
    {path: 'cuadrillas', component:CuadrillasComponent,
    canActivate:[VigilanteCuadrillasGuard]
    },
    {path: 'zonas', component:ZonasComponent,
    canActivate:[VigilanteZonasGuard]
    },
    {path: 'departamentos', component:DepartamentosComponent,
    canActivate:[VigilanteDepartamentosGuard]
    },
    {path: 'ciudades', component:CiudadesComponent,
    canActivate:[VigilanteCiudadesGuard]
    },
    {path: 'materiales', component:MaterialesComponent,
    canActivate:[VigilanteMaterialesGuard]
    },
    {path: 'ordenes', component:OrdenesComponent,
    canActivate:[VigilanteOrdenesGuard]
    },
    {path: 'empleados', component:EmpleadosComponent,
    canActivate:[VigilanteEmpleadosGuard]
    },
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
    {path: 'password', component:PasswordComponent},
    {path: 'editarCuadrilla/:id', component:EditarCuadrillaComponent},
    {path: 'editarZona/:id', component:ZonaEditarComponent},
    {path: 'editarMaterial/:id', component:MaterialEditarComponent},
    {path: 'editarOrden/:id', component:OrdenEditarComponent},
    {path: 'editarEmpleado/:id', component:EmpleadoEditarComponent},
    {path: 'perfilUsuario/:id',component:PerfilUsuarioComponent},
    {path: 'dashboardP', component:DashboardProveedorComponent,
    canActivate:[VigilanteDashboardPGuard]
    },
    {path: 'registroCuadrillaP', component: RegistroCuadrillaProveedorComponent},
    {path: 'registroMaterialP', component: RegistroMaterialProveedorComponent},
    {path: 'registroOrdenP', component: RegistroOrdenProveedorComponent},
    {path: 'registroEmpleadoP', component: RegistroEmpleadoProveedorComponent},
    {path: 'cuadrillasP', component: CuadrillasProveedorComponent},
    {path: 'materialesP', component: MaterialesProveedorComponent},
    {path: 'ordenesP', component: OrdenesProveedorComponent},
    {path: 'empleadosP', component: EmpleadosProveedorComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, DashboardComponent, NuevoComponent, EditarComponent, UsuariosComponent, RegistroComponent,
RegistroCiudadComponent, RegistroCuadrillaComponent, RegistroDepartamentoComponent, RegistroEmpleadoComponent, RegistroMaterialComponent, 
RegistroMaterialOrdenTrabajoComponent, RegistroProveedorComponent, RegistroZonaComponent, CuadrillasComponent, ZonasComponent,
DepartamentosComponent, CiudadesComponent, MaterialesComponent, OrdenesComponent, EmpleadosComponent, TrazabilidadComponent, PasswordComponent,
EditarCuadrillaComponent, ZonaEditarComponent, MaterialEditarComponent, OrdenEditarComponent, EmpleadoEditarComponent, PerfilUsuarioComponent,
DashboardProveedorComponent, RegistroOrdenProveedorComponent]