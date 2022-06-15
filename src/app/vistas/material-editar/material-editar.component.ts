import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MaterialService } from 'src/app/servicios/api/material.service';
import { materialInterface } from 'src/app/modelos/material.interface';

@Component({
  selector: 'app-material-editar',
  templateUrl: './material-editar.component.html',
  styleUrls: ['./material-editar.component.css']
})
export class MaterialEditarComponent implements OnInit {

  constructor(private api: MaterialService, private activerouter:ActivatedRoute) { }

  datosMaterial:materialInterface;
  error:boolean = false;
  errorMsj:any = "";

  editarForm = new FormGroup({
  nombreMaterial: new FormControl('',Validators.required),
  cantidad: new FormControl('', Validators.required),
  idMaterial: new FormControl('')
  });

  ngOnInit(): void {
    let idMaterial = this.activerouter.snapshot.paramMap.get('id');
    this.api.obtenerMaterialPorId(idMaterial).subscribe(data=>{
      this.datosMaterial = data;
      console.log(data);
      this.editarForm.setValue({
        'nombreMaterial': this.datosMaterial.nombreMaterial,
        'cantidad': this.datosMaterial.cantidad,
        'idMaterial':idMaterial,
      })
    });
  }

  editarMaterial(form:materialInterface){
    if(this.editarForm.invalid){
      this.error = true;
      this.errorMsj = "Revise los campos";
    }else{
      this.api.editarMaterial(form).subscribe(data=>{
        console.log(data);
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
