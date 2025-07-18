import { Component, OnInit } from '@angular/core';
import { BgRepositoryService } from './services/bg-repository.service';
import { Baugruppe } from './model/baugruppe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public baugruppen: Baugruppe[] = [];

  constructor(public service: BgRepositoryService) {
  }

  ngOnInit() {
    this.baugruppen = this.service.getAll();
    this.service.changed.subscribe((baugruppen: Baugruppe[]) => {
      this.baugruppen = baugruppen;
    });
  }
}
