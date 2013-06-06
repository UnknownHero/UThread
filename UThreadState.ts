module UThread{
    export class UThreadState{

        private loading : number = 0;

        constructor(){};

        public AddLoad(rate : number ) : number{
            this.loading += rate;
        }

        public RemoveLoad(rate : number ) : number{
            this.loading -= rate;
        }

        public GetLoading() : number{
            return this.loading;
        }

    }
}