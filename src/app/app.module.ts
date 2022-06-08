import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './plantillas/header/header.component';
import { FooterComponent } from './plantillas/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import {ReactiveFormsModule, FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http';
import { MenuComponent } from './plantillas/menu/menu.component';
import { UsuariosComponent } from './vistas/usuarios/usuarios.component';
import { RegistroComponent } from './vistas/registro/registro.component';
import { RegistroProveedorComponent } from './vistas/registro-proveedor/registro-proveedor.component';
import { RegistroCuadrillaComponent } from './vistas/registro-cuadrilla/registro-cuadrilla.component';
import { RegistroZonaComponent } from './vistas/registro-zona/registro-zona.component';
import { RegistroDepartamentoComponent } from './vistas/registro-departamento/registro-departamento.component';
import { RegistroCiudadComponent } from './vistas/registro-ciudad/registro-ciudad.component';
import { RegistroMaterialComponent } from './vistas/registro-material/registro-material.component';
import { RegistroMaterialOrdenTrabajoComponent } from './vistas/registro-material-orden-trabajo/registro-material-orden-trabajo.component';
import { RegistroEmpleadoComponent } from './vistas/registro-empleado/registro-empleado.component';
import { CuadrillasComponent } from './vistas/cuadrillas/cuadrillas.component';
import { ZonasComponent } from './vistas/zonas/zonas.component';
import { DepartamentosComponent } from './vistas/departamentos/departamentos.component';
import { CiudadesComponent } from './vistas/ciudades/ciudades.component';
import { MaterialesComponent } from './vistas/materiales/materiales.component';
import { OrdenesComponent } from './vistas/ordenes/ordenes.component';
import { EmpleadosComponent } from './vistas/empleados/empleados.component';
import { TrazabilidadComponent } from './vistas/trazabilidad/trazabilidad.component';
import { PasswordComponent } from './vistas/password/password.component';
import { EditarCuadrillaComponent } from './vistas/editar-cuadrilla/editar-cuadrilla.component';
import { ZonaEditarComponent } from './vistas/zona-editar/zona-editar.component';
import { MaterialEditarComponent } from './vistas/material-editar/material-editar.component';
import { OrdenEditarComponent } from './vistas/orden-editar/orden-editar.component';
import { EmpleadoEditarComponent } from './vistas/empleado-editar/empleado-editar.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { PerfilUsuarioComponent } from './vistas/perfil-usuario/perfil-usuario.component';
import { DashboardProveedorComponent } from './vistas/dashboard-proveedor/dashboard-proveedor.component';
import { MenuProveedorComponent } from './plantillas/menu-proveedor/menu-proveedor.component';
import { RegistroCuadrillaProveedorComponent } from './vistas/registro-cuadrilla-proveedor/registro-cuadrilla-proveedor.component';
import { RegistroMaterialProveedorComponent } from './vistas/registro-material-proveedor/registro-material-proveedor.component';
import { RegistroOrdenProveedorComponent } from './vistas/registro-orden-proveedor/registro-orden-proveedor.component';
import { RegistroEmpleadoProveedorComponent } from './vistas/registro-empleado-proveedor/registro-empleado-proveedor.component';
import { CuadrillasProveedorComponent } from './vistas/cuadrillas-proveedor/cuadrillas-proveedor.component';
import { MaterialesProveedorComponent } from './vistas/materiales-proveedor/materiales-proveedor.component';
import { OrdenesProveedorComponent } from './vistas/ordenes-proveedor/ordenes-proveedor.component';
import { EmpleadosProveedorComponent } from './vistas/empleados-proveedor/empleados-proveedor.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    routingComponents,
    MenuComponent,
    UsuariosComponent,
    RegistroComponent,
    RegistroProveedorComponent,
    RegistroCuadrillaComponent,
    RegistroZonaComponent,
    RegistroDepartamentoComponent,
    RegistroCiudadComponent,
    RegistroMaterialComponent,
    RegistroMaterialOrdenTrabajoComponent,
    RegistroEmpleadoComponent,
    CuadrillasComponent,
    ZonasComponent,
    DepartamentosComponent,
    CiudadesComponent,
    MaterialesComponent,
    OrdenesComponent,
    EmpleadosComponent,
    TrazabilidadComponent,
    PasswordComponent,
    EditarCuadrillaComponent,
    ZonaEditarComponent,
    MaterialEditarComponent,
    OrdenEditarComponent,
    EmpleadoEditarComponent,
    PerfilUsuarioComponent,
    DashboardProveedorComponent,
    MenuProveedorComponent,
    RegistroCuadrillaProveedorComponent,
    RegistroMaterialProveedorComponent,
    RegistroOrdenProveedorComponent,
    RegistroEmpleadoProveedorComponent,
    CuadrillasProveedorComponent,
    MaterialesProveedorComponent,
    OrdenesProveedorComponent,
    EmpleadosProveedorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, 
    FormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
