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
  }
  );

  constructor(private api:ZonaService, private activerouter:ActivatedRoute) { }

  ngOnInit(): void {
    let zonaId = this.activerouter.snapshot.paramMap.get('id');
    this.api.buscarPorId(zonaId).subscribe(data=>{
      this.datosZona = data;
      console.log(data);
      console.log(this.datosZona);
      this.editarForm.setValue({
        'nombre': this.datosZona.nombre,
        'limiteNorte': this.datosZona.limiteNorte,
        'limiteOccidente': this.datosZona.limiteOccidente,
        'limiteOriente': this.datosZona.limiteOriente,
        'limiteSur': this.datosZona.limiteSur,
      })
    });
  }

}
