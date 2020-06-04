import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css'],
})
export class ProductsPageComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    document.addEventListener('DOMContentLoaded', () => {
      const elems = document.querySelectorAll('.collapsible');
      const options = {};
      const instances = m.Collapsible.init(elems, options);
    });
  }
}
