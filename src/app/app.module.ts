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
import { RegistroEmpleadoComponent } from './vistas/registro-empleado/registro-empleado.component'

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
    RegistroEmpleadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, 
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
