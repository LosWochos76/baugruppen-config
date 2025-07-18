import { Component, Input, OnInit } from '@angular/core';
import { Baugruppe } from '../model/baugruppe';

@Component({
  selector: 'app-bg-summary',
  templateUrl: './bg-summary.component.html',
  styleUrls: ['./bg-summary.component.css']
})
export class BgSummaryComponent implements OnInit {
  @Input() baugruppe?: Baugruppe;

  constructor() { }

  ngOnInit(): void {
  }

}
