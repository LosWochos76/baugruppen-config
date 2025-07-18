import { Constraint } from "./constraint";
import { Step } from "./Step";

export class Baugruppe {
    constructor(
        public id: number,
        public name: string,
        public description: string,
        public image_url: string,
        public steps: Step[] = [],
        public constraints: Constraint[] = []
    ) {}

    getStep(position: number): Step | undefined {
        return this.steps[position];
    }
}