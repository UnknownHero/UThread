module UThread{
    export class UThreadState{

        private loading : number = 0;
        private max : number = -1;
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

        public IsCan( lvl : number) : bool{
            if(this.max == -1){
                return true;
            }else{
                return ( (this.loading + lvl) >= this.max ) ? false : true;
            }

        }

    }
}