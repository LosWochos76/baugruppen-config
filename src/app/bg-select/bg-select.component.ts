import { Component, OnInit } from '@angular/core';
import { Baugruppe } from '../model/baugruppe';
import { BgRepositoryService } from '../services/bg-repository.service';

@Component({
  selector: 'app-bg-select',
  templateUrl: './bg-select.component.html',
  styleUrls: ['./bg-select.component.css']
})
export class BgSelectComponent implements OnInit {
  private service: BgRepositoryService;
  public data: Baugruppe[] = [];

  constructor(service: BgRepositoryService) {
    this.service = service;
  }

  ngOnInit(): void {
    this.data = this.service.getAll();
    this.service.changed.subscribe(() => {
      this.data = this.service.getAll();
    });
  }
}