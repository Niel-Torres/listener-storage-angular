import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'AppComponent';
/*   valuePadre = '¡¡¡ Este texto se ha enviado desde el componente PADRE !!!!!';
  
  valueDesdeHijo = '';

  recibirDato(e: any) {
    console.log(e);
    this.valueDesdeHijo = e;
  } */

  isVisibleModal = false;

  showModal() {
    this.isVisibleModal = true;
  }

  listenEventCloseModal(value: any) {
    console.log('AppComponent: Recibo evento de cerrar modal')
    this.isVisibleModal = value;
  }
}
