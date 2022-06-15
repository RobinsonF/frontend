import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { zonaInterface } from 'src/app/modelos/zona.interface';
import { ZonaService } from 'src/app/servicios/api/zona.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-zona-editar',
  templateUrl: './zona-editar.component.html',
  styleUrls: ['./zona-editar.component.css']
})
export class ZonaEditarComponent implements OnInit {

  datosZona:zonaInterface;
  error:boolean = false;
  errorMsj:any = "";

  editarForm = new FormGroup({
    nombre: new FormControl('',Validators.required),
    limiteNorte: new FormControl('',Validators.required),
    limiteOccidente: new FormControl('',Validators.required),
    limiteOriente: new FormControl('',Validators.required),
    limiteSur: new FormControl('',Validators.required),
    idZona: new FormControl('')
  });

  constructor(private api:ZonaService, private activerouter:ActivatedRoute) { }

  ngOnInit(): void {
    let zonaId = this.activerouter.snapshot.paramMap.get('id');
    this.api.buscarPorId(zonaId).subscribe(data=>{
      this.datosZona = data;
      this.editarForm.setValue({
        'nombre': this.datosZona.nombre,
        'limiteNorte': this.datosZona.limiteNorte,
        'limiteOccidente': this.datosZona.limiteOccidente,
        'limiteOriente': this.datosZona.limiteOriente,
        'limiteSur': this.datosZona.limiteSur,
        'idZona': zonaId
      });
    });
  }

  editarZona(form:zonaInterface){
    console.log(form);
    console.log(this.editarForm.invalid);
    console.log(this.editarForm.valid);
    if(!this.editarForm.invalid){
      this.error = true;
      this.errorMsj = 'Revise los campos';
    }else{
      this.api.editarZona(form).subscribe(data=>{
        if(data.mensaje == "El nombre ya se encuentra registrado"){
          this.error = true;
          this.errorMsj = data.mensaje;
        }else{
          alert(data.mensaje);
          location.reload();
        }
      });
    }
  }

}
