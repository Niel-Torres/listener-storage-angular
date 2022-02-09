import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {

  @Input() visible: boolean = false;
  @Output() close = new EventEmitter<boolean>();

  dataFromItsme:any;

  constructor() { }

  ngOnInit(): void {
    window.addEventListener("storage", this.storageEventHandler, false);
  }

  closeModal() {
    console.log('PopupComponent: Emitir evento de cerrar modal');
    this.close.emit(false);
  }

  storageEventHandler(event: any) {
    if(event.key === 'someKey') {
      this.dataFromItsme = localStorage.getItem("someKey");
      alert('storage updated');
      window.localStorage.removeItem("someKey");
      console.log('Datos desde la otra pestaña: '+this.dataFromItsme);
    }
  }

}
