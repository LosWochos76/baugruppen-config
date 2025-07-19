import { Constraint } from "./constraint";
import { Step } from "./step";
import { Value } from "./value";
import { Parser } from 'expr-eval';

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

    setNumericValue(step: Step | undefined, value: Value | undefined, val: any): boolean {
        if (!step || !value) return false;

        if (value.on_change) {
            val = Number(val);
            const fn = new Function("baugruppe", "step", "value", "new_value", `"use strict"; ${value.on_change}`);
            fn(this, step, value, val);
        }
        
        value.value = val;
        return true;
    }

    setOptionValue(step: Step | undefined, value: Value | undefined, val: any): void {
        if (!step || !value) return;

        let groupName = value.group_name;
        for (let v of step.values || []) {
            if (v.group_name === groupName) {
                v.value = v.name === value.name ? val : 'unchecked';
            }
        }
    }
}