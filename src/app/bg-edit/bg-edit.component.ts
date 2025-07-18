import { Component, OnInit } from '@angular/core';
import { BgRepositoryService } from '../services/bg-repository.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bg-edit',
  templateUrl: './bg-edit.component.html',
  styleUrls: ['./bg-edit.component.css']
})
export class BgEditComponent implements OnInit {
  public json: string = '';
  public parse_error: string = '';

  constructor(
    public bgRepository: BgRepositoryService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.json = this.bgRepository.getAllAsJson();
  }

  onSave(json: string): void {
    let error = this.bgRepository.setFromJson(json);

    if (error) {
      this.parse_error = error;
      console.error('Error parsing JSON:', error);
      return;
    }

    this.router.navigate(['/']);
  }
}
