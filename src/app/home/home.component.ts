import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  isVisibleModal = false;

  showModal() {
    this.isVisibleModal = true;
  }

  listenEventCloseModal(value: any) {
    console.log('AppComponent: Recibo evento de cerrar modal')
    this.isVisibleModal = value;
  }


}
