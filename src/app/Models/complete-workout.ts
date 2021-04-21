export class CompleteWorkout {
    constructor(
        public id: number|any,
        public email: string,
        // public submission: File | any,
        public day: string,
        public comments: string,
        public workout: string, 
    ){}
}