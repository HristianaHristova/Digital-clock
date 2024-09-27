import {Component, Input} from '@angular/core';
import {NgClass, NgIf} from "@angular/common";

@Component({
  selector: 'app-digital-segment',
  standalone: true,
  imports: [NgClass, NgIf],
  templateUrl: './digital-segment.component.html',
  styleUrl: './digital-segment.component.css'
})
export class DigitalSegmentComponent {
  @Input() segmentName: string = '';
  @Input() segmentElement: string = '';

  segmentMap: { [key: number]: string[] } = {
    0: ['a', 'b', 'c', 'd', 'e', 'f'],
    1: ['b', 'c'],
    2: ['a', 'b', 'g', 'e', 'd'],
    3: ['a', 'b', 'g', 'c', 'd'],
    4: ['f', 'g', 'b', 'c'],
    5: ['a', 'f', 'g', 'c', 'd'],
    6: ['a', 'f', 'e', 'd', 'c', 'g'],
    7: ['a', 'b', 'c'],
    8: ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
    9: ['a', 'b', 'c', 'd', 'f', 'g']
  };

  isSegmentOn(digit: number, segment: string): boolean {
    return this.segmentMap[digit].includes(segment);
  }

  getDigit(number: string, digitIndex: number): number {
    if (this.segmentName == "SECONDS" || this.isWithLeadingZeroes()) {
      const strNum = number.padStart(2, '0');
      return Number(strNum[digitIndex]);
    }
    return Number(number[0]);
  }

  isWithLeadingZeroes(): boolean {
    return this.segmentElement.toString().length == 2;
  }
}

