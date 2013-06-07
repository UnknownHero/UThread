module UThread {

export class UThreadWorker{

    private state : UThreadState;
    private settings : UThreadSettings;
    private stack;


    constructor( settings : UThreadSettings){
        this.settings = settings;
        this.state = new UThreadState;
    }

    Execute( task : UThreadTask ) : void {
        this.state.AddLoad(task.GetLoadRate());

        if(this.state.IsCan( task.GetLoadRate() )){
            this.RunTask(task);
        }else{
            this.Register(task);
        }

    }

    public EndTask( task : UThreadTask ){
        this.state.RemoveLoad(task.GetLoadRate());
        this.Next();
    }

    public GetLoading() : number {
        return state.GetLoading();
    }

    private Register(task : UThreadTask) : void{

        if(this.stack[ task.Rang] == undefined){
            this.stack[ task.Rang] = [];
            this.stack.sort(function(a,b){return a-b});
        }

        this.stack[task.Rang].push(task);
    }

    private Next() : void{
        var rangIndex;
        for( rangIndex in this.stack){
            var rang = this.stack[rangIndex];
            var taskIndex;
            for( taskIndex in rang){
                var task = rang[taskIndex];
                if(this.state.IsCan(task.GetLoadRate())){
                    this.RunTask(task);
                    delete this[rangIndex][taskIndex];
                }else{
                    return;
                }
            }
        }
    }

    private RunTask(task : UThreadTask) : void{
        task.Run();
    }
}


}