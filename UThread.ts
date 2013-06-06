module UThread {

export class UThreadWorker{

    private state : UThreadState;
    private settings : UThreadSettings;

    constructor( settings : UThreadSettings){
        this.settings = settings;
        this.state = new UThreadState;
    }

    execute( task : UThreadTask ) : void {

    }

    GetLoading() : number {

    }

}

}