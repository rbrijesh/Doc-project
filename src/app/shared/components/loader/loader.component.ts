import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  shown = false;

  constructor() { }

  ngOnInit(): void {
  }

  show() {
		this.shown = true;
	}

	hide() {
		this.shown = false;
	}
}
