import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Baugruppe } from '../model/baugruppe';
import { Step } from '../model/step';
import { Value } from '../model/value';

@Injectable({
  providedIn: 'root'
})
export class BgRepositoryService {
  private data: Baugruppe[] = [];
  @Output() changed = new EventEmitter<Baugruppe[]>();

  constructor(private http: HttpClient) { 
    this.http
      .get<any[]>('assets/baugruppen.json')
      .subscribe({
        next: raw => {
          const err = this.setFromJson(JSON.stringify(raw));
          if (err) {
            console.error('Fehler beim Parsen der JSON:', err);
          }
        },
        error: err => {
          console.error('Fehler beim Laden der JSON-Datei:', err);
        },
        complete: () => {
          console.log('JSON erfolgreich geladen und gesetzt');
        }
      });
  }

  getAll(): Baugruppe[] {
    return this.data;
  }

  getById(id: string): Baugruppe | undefined {
    return this.data.find(baugruppe => baugruppe.id.toString() === id);
  }

  setFromJson(json: string): string {
    try
    {
      let tmp = JSON.parse(json);
      this.data = [];

      for (let bg of tmp) {
        let baugruppe = new Baugruppe(
          bg.id,
          bg.name,
          bg.description,
          bg.image_url,
          bg.steps.map((step: any) => new Step(
            step.name,
            step.description,
            step.image_url,
            step.values.map((value: any) => new Value(
              value.name,
              value.type,
              value.step_size,
              value.value,
              value.unit,
              value.enabled,
              value.minValue,
              value.maxValue,
              value.image_url,
              value.group_name,
              value.on_change
            ))
          ))
        );

        this.data.push(baugruppe);
      }
    }
    catch (e) {
      return e as string;
    }

    this.changed.emit(this.data);
    return "";
  }

  getAllAsJson(): string {
    return JSON.stringify(this.data, null, 3);
  }
}
