export interface jobTypes  {
    title: string,
    link: string
}

export class Job implements jobTypes {
    constructor(
        public title: string, 
        public link: string
    ) {}
}