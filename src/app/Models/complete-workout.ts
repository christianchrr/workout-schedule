export class CompleteWorkout {
    constructor(
        public email: string,
        public submission: File,
        public day: string,
        public comments: string,
        public workout: string
    ){}
}