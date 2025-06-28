import { Component } from '@angular/core';
import { ContactComponent } from '../contact/contact.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [
    ContactComponent,
    RouterModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  menutoggle : boolean = true;

  public toggleMenu() {
      this.menutoggle = !this.menutoggle;
  }
}
