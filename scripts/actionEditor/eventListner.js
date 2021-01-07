class EventEmitter {
    constructor() {
        //eventRegistry
        this._events = {};
        console.log(this._events)
    }
    on(evt, listener) { //adds to event register
        console.log(evt,listener);
        (this._events[evt] || (this._events[evt] = [])).push(listener);
        return this;
    }
    emit(evt, arg) {// emit a function from the event register;
        
        (this._events[evt] || []).slice().forEach(lsn => {
            console.log(lsn,arg)
            lsn(arg);});
    }
}

