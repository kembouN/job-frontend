import { Component } from '@angular/core';
import { DiplomeFormComponent } from "./diplome/components/diplome-form/diplome-form.component";

@Component({
  selector: 'app-root',
  imports: [DiplomeFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'jobfront';
}
