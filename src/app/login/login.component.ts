import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
import * as M from 'materialize-css';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  constructor(private router: Router) { }

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

  login() {
    // TODO add logic service and login
   this.router.navigate(['/products']);
  }

}
