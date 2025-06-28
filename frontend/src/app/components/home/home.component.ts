import { Component } from '@angular/core';
import { CarouselsectionComponent } from '../carouselsection/carouselsection.component';
import { ServicesectionComponent } from "../servicesection/servicesection.component";
import { CoursessectionComponent } from '../coursessection/coursessection.component';
import { FooterComponent } from "../footer/footer.component";
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-home',
  imports: [
    CarouselsectionComponent,
    ServicesectionComponent,
    CoursessectionComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
