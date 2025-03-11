import { Component } from '@angular/core';
import { OrdenesService } from '../../../../_services/ordenes.service';

@Component({
  selector: 'app-orden-finalizada',
  imports: [],
  templateUrl: './orden-finalizada.component.html',
  styleUrl: './orden-finalizada.component.css'
})
export class OrdenFinalizadaComponent {

  ordenesTerminadas: any;
  ordenSeleccionada: any=null;

  constructor(private ordenesService: OrdenesService) {
        this.ordenesService.getOrdenesTerminadas()
          .subscribe(result => this.ordenesTerminadas = result);
    }
  
    seleccionarOrden(orden: any) {
      console.log(orden);
      this.ordenSeleccionada = orden;
    }

}
