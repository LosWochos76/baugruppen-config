import { Component, OnInit } from '@angular/core';
import { BgRepositoryService } from '../services/bg-repository.service';
import { Baugruppe } from '../model/baugruppe';
import { ActivatedRoute } from '@angular/router';
import { Step } from '../model/Step';

@Component({
  selector: 'app-bg-config',
  templateUrl: './bg-config.component.html',
  styleUrls: ['./bg-config.component.css']
})
export class BgConfigComponent implements OnInit {
  private baugruppe_id: string = '';
  public baugruppe: Baugruppe | undefined;
  public current_step: number = 0;
  public step: Step | undefined;

  constructor(
    private service: BgRepositoryService,
    private route: ActivatedRoute
  ) {
    this.service = service;
  }

  ngOnInit(): void {
    this.baugruppe_id = this.route.snapshot.paramMap.get('id')!;
    this.baugruppe = this.service.getById(this.baugruppe_id);
    this.step = this.baugruppe?.getStep(this.current_step);

    console.log(this.step?.image_url);
  }


}
