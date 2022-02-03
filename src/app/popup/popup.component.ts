import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {
  
/*   @Input() valueHijo: string = 'Texto desde el componente hijo';
  
  @Output() salida = new EventEmitter<string>(); */

  @Input() visible: boolean = false;
  @Output() close = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

/*   enviarDato() {
    this.salida.emit('Hola papá...');
  } */

  closeModal() {
    console.log('PopupComponent: Emitir evento de cerrar modal');
    this.close.emit(false);
  }

 

}
