import { Value } from "./value";

export class Step {
    constructor(
        public name: string,
        public description: string,
        public image_url: string,
        public values: Value[] = []
    ) {}

    getValue(name: string): Value | undefined {
        return this.values.find(value => value.name === name);
    }
}