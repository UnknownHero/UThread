module UThread{

    export class UThreadTask{
        public static DefaultLoadRate : number;
        public Action;
        public Arguments;
        public Rang : number;
        private LoadRate : number = null;
        private Context : UThreadWorker;

        constructor(){};

        public SetDefaultLoadRate(rate : number) : void {
            self.DefaultLoadRate = rate;
        }

        public SetContext(context : UThreadWorker){
            this.Context = context;
        }

        public GetContext() : UThreadWorker{
            return this.Context;
        }

        public GetLoadRate() : number{
            return ( this.LoadRate == null ) ? self.DefaultLoadRate : this.LoadRate;
        }

        public End() : void{
            this.Context.EndTask(this);
        }

        public TaskCallback : () => void = function(){
            this.Action();
            this.End();
        };

        public Run() : void{
            setTimeout( this.TaskCallback.bind(this) , 1 );
        }

    }
}