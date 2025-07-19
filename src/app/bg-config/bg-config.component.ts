import { Component, OnInit } from '@angular/core';
import { BgRepositoryService } from '../services/bg-repository.service';
import { Baugruppe } from '../model/baugruppe';
import { ActivatedRoute, Router } from '@angular/router';
import { Step } from '../model/step';

@Component({
  selector: 'app-bg-config',
  templateUrl: './bg-config.component.html',
  styleUrls: ['./bg-config.component.css']
})
export class BgConfigComponent implements OnInit {
  private baugruppe_id: string = '';
  public baugruppe: Baugruppe | undefined;
  public current_step: number = 0;
  public max_steps: number = 0;
  public step: Step | undefined;

  constructor(
    private service: BgRepositoryService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.service = service;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.baugruppe_id = this.route.snapshot.paramMap.get('id')!;
      const stepParam = this.route.snapshot.paramMap.get('current_step');
      this.current_step = parseInt(stepParam ?? '0', 10);
      this.readData();
    });

    this.service.changed.subscribe(() => { this.readData(); });
  }

  readData() {
      this.baugruppe = this.service.getById(this.baugruppe_id);
      this.step = this.baugruppe?.getStep(this.current_step);
      this.max_steps = this.baugruppe?.steps.length!;
  }

  nextStep(): void {
    if (this.current_step >= this.max_steps)
      return;

    this.router.navigate(['/bg-config', 
      this.baugruppe_id, 
      this.current_step + 1]);
  }

  lastStep(): void {
    if (this.current_step === 0)
      return;

    this.router.navigate(['/bg-config', 
      this.baugruppe_id, 
      this.current_step - 1]);
  }
}
