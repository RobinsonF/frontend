import { Component, OnInit } from '@angular/core';
import { ciudadInterface } from 'src/app/modelos/ciudad.interface';
import { CiudadService } from 'src/app/servicios/api/ciudad.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ZonaService } from 'src/app/servicios/api/zona.service';
import { zonaInterface} from 'src/app/modelos/zona.interface';


@Component({
  selector: 'app-registro-zona',
  templateUrl: './registro-zona.component.html',
  styleUrls: ['./registro-zona.component.css']
})
export class RegistroZonaComponent implements OnInit {

  ciudades:ciudadInterface[];

  registroForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    nombreCiudad: new FormControl('',Validators.required),
    limiteNorte: new FormControl('', Validators.required),
    limiteOccidente: new FormControl('', Validators.required),
    limiteOriente: new FormControl('', Validators.required),
    limiteSur: new FormControl('', Validators.required),

  })

  constructor(private api1:CiudadService, private api2:ZonaService) { }

  errorForm:boolean = false;
  errorMensaje:any = "";

  ngOnInit(): void {
    this.api1.obtenerCiudades().subscribe(data=>{
      this.ciudades = data;
    })
  }

  registrarZona(form:zonaInterface){
    if(this.registroForm.invalid){
      this.errorForm = true;
      this.errorMensaje = "Revise los campos";
    }else{
      this.api2.crearZona(form).subscribe(data=>{
        if(data.mensaje=="El nombre de la zona se encuentra en uso"){
          this.errorForm = true;
          this.errorMensaje = data.mensaje;
        }else{
          alert(data.mensaje);
          location.reload();
        }
      });
    }
  }

}
