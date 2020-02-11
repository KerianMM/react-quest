class Person {
    constructor(name, avatar, online = false){
        this.id = Person.generateId();
        this.name   = name;
        this.avatar = avatar;
        this.quote  = null;
        this.online = online;
    }

    static generatedId = 0;
    static generateId() {
        let generatedId = this.generatedId;

        this.generatedId++;

        return generatedId;
    }
}

export default Person;