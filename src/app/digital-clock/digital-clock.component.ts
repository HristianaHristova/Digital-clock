import {Component, Input, OnInit} from '@angular/core';
import {DatePipe, NgClass, NgIf, NgStyle} from "@angular/common";
import {DigitalSegmentComponent} from "../digital-segment/digital-segment.component";

@Component({
  selector: 'app-digital-clock',
  standalone: true,
  imports: [DatePipe, NgClass, DigitalSegmentComponent, NgIf, NgStyle],
  templateUrl: './digital-clock.component.html',
  styleUrl: './digital-clock.component.css'
})
export class DigitalClockComponent implements OnInit {
  @Input() format = 'HH mm';

  hours: string = '';
  minutes: string = '';
  seconds: string = '';
  ampmVisible = false;
  ampm: string = '';

  visible = false;
  blinkToggle = true;

  ngOnInit() {
    this.ampmVisible = this.format.endsWith('tt');
    setInterval(() => {
      let today = new Date();
      this.hours = today.getHours().toString();
      this.minutes = today.getMinutes().toString();
      this.seconds = today.getSeconds().toString();
      this.ampm = today.getHours() >= 12 ? 'pm' : 'am';

      // Format every second because of different Date() format
      this.formatHours();
      this.formatMinutes();

      this.blinkToggle = !this.blinkToggle;

      // Helps to hide the initial values
      this.visible = true;
    }, 1000);

  }

  dotColor(): string {
    return this.blinkToggle ? '#452727' : 'navajowhite';
  }

  formatHours() {
    const regex = /(\S+)\s+(\S+)/;
    const hours = this.format.match(regex)?.at(1);

    let numberInt = Number(this.hours);

    if (hours == 'HH' || hours == 'hh') {
      if (hours == 'hh') {
        numberInt = numberInt % 12 || 12;
      }
      if (numberInt < 10) {
        this.hours = '0' + numberInt;
      }
    } else if (hours === 'h') {
      numberInt = numberInt % 12 || 12;
      this.hours = numberInt.toString();
    }
  }

  formatMinutes() {
    const regex = /(\S+)\s+(\S+)/;
    const minutes = this.format.match(regex)?.at(2);
    if (minutes === 'mm' && Number(this.minutes) < 10) {
      this.minutes = '0' + this.minutes;
    }
  }
}
