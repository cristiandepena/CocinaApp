import { Component, OnInit } from '@angular/core';
import * as M from 'materialize-css';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  constructor() { }

  ngOnInit() {
    document.addEventListener('DOMContentLoaded', function() {
      const elems = document.querySelector('.dropdown-trigger');
      const options = {
      'closeOnClick': false,
      'autoTrigger': true,
      'constrainWidth': false,
      'alignment': 'left',
      'coverTrigger': false
    };
      M.Dropdown.init(elems, options);
    });
  }

}
