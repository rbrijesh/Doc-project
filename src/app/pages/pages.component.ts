import { Component } from '@angular/core';
import { CommonService } from 'app/shared/services/common.service';

import { MENU_ITEMS } from './pages-menu';
import { USER_MENU_ITEMS } from './user-menu';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagesComponent {

  menu = [];

  constructor(
    private common: CommonService
  ) {

    if(common.getSession('user').type === 'doctor') {
      this.menu = MENU_ITEMS;
    } else {
      this.menu = USER_MENU_ITEMS;
    }

  }



}
