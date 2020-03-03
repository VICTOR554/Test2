export class Homes {
    constructor(
        public id: string,
        public date: number,
        public title: string,
        public type: string,
        public start: string,
        public end: string,
        public lecturer: string,
        public location: string,

    ) {}
}

export class Note {
    constructor(
        public id: string,
        public title: string,
        public module: string,
        public description: string,
    ) {}
}

export class Task {
    constructor(
        public id: string,
        public date: string,
        public title: string,
        public module: string,
        public description: string,
    ) {}
}
