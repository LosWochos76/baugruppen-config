import { Component, Input, OnInit } from '@angular/core';
import { Value } from '../model/value';

@Component({
  selector: 'app-bg-value',
  templateUrl: './bg-value.component.html',
  styleUrls: ['./bg-value.component.css']
})
export class BgValueComponent implements OnInit {
  @Input() value?: Value;

  constructor() { }

  ngOnInit(): void {
    console.log(this.value?.type);
  }

  onValueChange(value: Value | undefined, event: any): void {
    if (this.value)
      this.value.value = event.target.value;
  }
}
