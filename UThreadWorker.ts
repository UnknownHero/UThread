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
    }

    public EndTask( task : UThreadTask ){
        this.state.RemoveLoad(task.GetLoadRate());
    }

    public GetLoading() : number {
        return state.GetLoading();
    }

    private Register(task : UThreadTask) : void{
        var rangName = "rang"+task.Rang;

        if(this.stack[rangName] == undefined){
            this.stack[rangName] = [];
        }

        this.stack[rangName].push(task);
    }

}

}