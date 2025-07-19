import { Component, Input, OnInit } from '@angular/core';
import { Value } from '../model/value';
import { Step } from '../model/step';
import { Baugruppe } from '../model/baugruppe';

@Component({
  selector: 'app-bg-value',
  templateUrl: './bg-value.component.html',
  styleUrls: ['./bg-value.component.css']
})
export class BgValueComponent implements OnInit {
  @Input() value: Value | undefined;
  @Input() step: Step | undefined;
  @Input() baugruppe: Baugruppe | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  onValueChange(value: Value | undefined, event: any): void {
    this.baugruppe?.setNumericValue(this.step, value, event.target.value);
  }

  onOptionSet(value: Value | undefined, wert: any): void {
    this.baugruppe?.setOptionValue(this.step, value, wert);
  }
}
