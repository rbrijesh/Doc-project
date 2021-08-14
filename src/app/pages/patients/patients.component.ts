import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-patients',
  template: `<router-outlet></router-outlet>`,
  styles: []
})
export class PatientsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
