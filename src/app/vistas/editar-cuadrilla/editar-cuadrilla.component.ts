import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { cuadrillaInterface } from 'src/app/modelos/cuadrilla.interface';
import { CuadrillaService } from 'src/app/servicios/api/cuadrilla.service';

@Component({
  selector: 'app-editar-cuadrilla',
  templateUrl: './editar-cuadrilla.component.html',
  styleUrls: ['./editar-cuadrilla.component.css']
})
export class EditarCuadrillaComponent implements OnInit {

  constructor(private api:CuadrillaService, private activerouter:ActivatedRoute) { }

  datosCuadrilla:cuadrillaInterface;
  error:boolean = false;
  errorMsj:any = "";

  editarForm = new FormGroup({
    nombreCuadrilla: new FormControl('', Validators.required),
    idCuadrilla: new FormControl('')
  });
  
  ngOnInit(): void {
    let idCuadrilla = this.activerouter.snapshot.paramMap.get('id');
    this.api.obtenerCuadrillaPorId(idCuadrilla).subscribe(data=>{
      this.datosCuadrilla = data;
      this.editarForm.setValue({
        'nombreCuadrilla': this.datosCuadrilla.nombreCuadrilla,
        'idCuadrilla': idCuadrilla,
      })
    });
  }

  editarCuadrilla(form:cuadrillaInterface){
    console.log(this.editarForm.invalid);
    if(this.editarForm.invalid){
      this.error = true;
      this.errorMsj = "Revise los campos";
    }else{
      this.api.editarCuadrilla(form).subscribe(data=>{
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
