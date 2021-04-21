export class CompleteWorkoutSub {
    constructor(
        
        public email: string,
        public submission: Blob,
        public day: string,
        public comments: string,
        public workout: string, 
    ){}
}