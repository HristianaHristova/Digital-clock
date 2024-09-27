import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {DigitalClockComponent} from "./digital-clock/digital-clock.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DigitalClockComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  format = 'HH mm tt';
  // hours --> HH/H/hh/h
  // minutes --> mm/m
  // AM/PM --> tt/
  // Example --> hh m/HH mm tt
}
