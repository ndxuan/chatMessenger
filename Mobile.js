class Mobile {
    status;
    battery;


    constructor(status,battery) {
        this.status = status;
        this.battery = battery;
    }
    setStatus(){
        this.status = !this.status;
    }
    getStatus(){
        return this.status;
    }
    setBattery(battery){
        this.battery = battery;
    }
    getBattery(){
        return this.battery;
    }
    setInbox(inbox){
        this.inBox = inbox;
    }
    getInbox(){
        return this.inBox;
    }
    setOutbox(outbox){
        this.outBox = outbox;
    }
    getOutbox(){
        return this.outBox;
    }
}
