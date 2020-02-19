import { Component, OnInit } from '@angular/core';
import * as M from 'materialize-css';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CocinaApp';

  OnInit() {
    document.addEventListener('DOMContentLoaded', function() {
      const elems = document.querySelectorAll('.carousel');
      const instances = M.Carousel.init(elems);
    });
  }
}
