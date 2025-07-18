export class Value {
    constructor(
        public name: string,
        public type: string,
        public step_size: number,
        public value: any,
        public unit?: string,
        public minValue?: number,
        public maxValue?: number,
    ) {}
}