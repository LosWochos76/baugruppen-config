export class Value {
    constructor(
        public name: string,
        public type: string,
        public step_size: number,
        public value: any,
        public unit: string,
        public enabled: boolean,
        public minValue?: number,
        public maxValue?: number,
        public image_url?: string
    ) {}
}