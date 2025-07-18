import { EventEmitter, Injectable, Output } from '@angular/core';
import { Baugruppe } from '../model/baugruppe';
import { min } from 'rxjs';
import { Step } from '../model/Step';
import { Value } from '../model/value';

@Injectable({
  providedIn: 'root'
})
export class BgRepositoryService {
  private data: Baugruppe[] = [];
  @Output() changed = new EventEmitter<Baugruppe[]>();

  constructor() { 
    this.data.push(
      new Baugruppe(
        1,
        'Linearführung', 
        'Beschreibung für Linearführung', 
        'https://www.lehrerfreund.de/medien/tec_artikel_bilder/3d-cad-32.png', 
        [
          new Step(
            'Welle', 
            'Konfiguration der Welle', 
            'https://www.thh-drehteile.de/cms/sites/default/files/styles/portfolio_view/public/Welle_Ausfallmuster.jpg', [
              new Value('Länge', 'range', 1, 100, 'mm', true, 50, 200),
              new Value('Durchmesser', 'range', 1, 10, 'mm', true, 5, 20),
              new Value('Anzahl', 'number', 1, 1, 'Stück', true, 1, 4)
            ]),
          new Step(
            'Lager', 
            'Konfiguration des Lagers',
            'https://www.toptools24.de/media/image/product/154884/lg/ent-00124-kugellager-d-19-mm-d-8-mm-h-6-mm.webp', [
              new Value('Innendurchmesser', 'range', 1, 100, 'mm', true, 50, 200),
              new Value('Außendurchmesser', 'range', 1, 10, 'mm', true, 5, 20),
              new Value('Anzahl', 'number', 1, 1, 'Stück', true, 1, 4)
            ])
        ]
    ));
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
              value.maxValue
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
