import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-itsme',
  templateUrl: './itsme.component.html',
  styleUrls: ['./itsme.component.scss']
})
export class ItsmeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  endProcessItsMe() {
    var someObjValue = {
      'name': 'Client-1',
      'dni': '012345678'
    };

    window.localStorage.setItem("someKey", JSON.stringify(someObjValue));
    window.close();
  }

}
