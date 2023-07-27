import { Component } from '@angular/core';
import { Navbar } from './navbar';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  navbar : Navbar = {
    imgUrl: '/assets/img/icon.png',
    name : 'Pokemon Guess',
  }
}
