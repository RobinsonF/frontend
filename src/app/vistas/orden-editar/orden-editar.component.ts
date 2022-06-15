import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { OrdenService } from 'src/app/servicios/api/orden.service';
import { ordenInterface } from 'src/app/modelos/orden.interface';

@Component({
  selector: 'app-orden-editar',
  templateUrl: './orden-editar.component.html',
  styleUrls: ['./orden-editar.component.css']
})
export class OrdenEditarComponent implements OnInit {

  constructor(private api:OrdenService, private activerouter:ActivatedRoute) { }

  datosOrden:ordenInterface;
  error:boolean = false;
  errorMsj:any = "";

  editarForm = new FormGroup({
    nombreTrabajo: new FormControl('',Validators.required),
    direccion: new FormControl('',Validators.required),
    idTrabajo: new FormControl('')
  });

  ngOnInit(): void {
    let ordenId = this.activerouter.snapshot.paramMap.get('id');
    this.api.obtenerPorId(ordenId).subscribe(data=>{
      this.datosOrden = data;
      this.editarForm.setValue({
        'nombreTrabajo':this.datosOrden.nombreTrabajo,
        'direccion':this.datosOrden.direccion,
        'idTrabajo': ordenId
      })
    });
  }

  editarOrden(form:ordenInterface){
    if(this.editarForm.invalid){
      this.error = true;
      this.errorMsj = "Revise los campos";
    }else{
      this.api.editarOrden(form).subscribe(data=>{
        if(data.mensaje=="El nombre ya se encuentra registrado"){
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
