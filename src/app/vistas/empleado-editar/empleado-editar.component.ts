import { Component, OnInit } from '@angular/core';
import { empleadoInterface } from 'src/app/modelos/empleado.interface';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EmpleadoService } from 'src/app/servicios/api/empleado.service';


@Component({
  selector: 'app-empleado-editar',
  templateUrl: './empleado-editar.component.html',
  styleUrls: ['./empleado-editar.component.css']
})
export class EmpleadoEditarComponent implements OnInit {

  constructor(private activerouter:ActivatedRoute, private api:EmpleadoService) { }

  datosEmpleado: empleadoInterface;
  error:boolean = false;
  errorMsj:any = "";

  editarForm = new FormGroup({
    nombre: new FormControl('',Validators.required),
    apellido: new FormControl('', Validators.required),
    cedula: new FormControl('', Validators.required),
    idEmpleado: new FormControl('')
  });

  ngOnInit(): void {
    let empleadoId = this.activerouter.snapshot.paramMap.get('id');
    this.api.obtenerPorId(empleadoId).subscribe(data=>{
      this.datosEmpleado = data;
      this.editarForm.setValue({
        'nombre': this.datosEmpleado.nombre,
        'apellido': this.datosEmpleado.apellido,
        'cedula': this.datosEmpleado.cedula,
        'idEmpleado': empleadoId
      });
    });

  }

  editarEmpleado(form:empleadoInterface){
    if(this.editarForm.invalid){
      this.error = true;
      this.errorMsj = "Revise los campos";
    }else{
      this.api.editarEmpleado(form).subscribe(data=>{
        if(data.mensaje == "La cedula ya se encuentra registrada"){
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
