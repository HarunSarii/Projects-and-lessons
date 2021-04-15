class User{
    constructor(firstname, lastname, credit) {
        this.firstname = firstname
        this.lastname = lastname
        this.credit = credit
    }
    getFullName() {
        let fullname = `${this.firstname} ${this.lastname} is my full name`;
        return fullname;
    }
    editName(newname){
        const myname = newname.split(' ')
        this.firstname = myname[0]
        this.lastname = myname[1]
    }
}

const John = new User('John', 'Anderson', 34);
// console.log(John)
console.log(John.getFullName());

John.editName('Johnny Anderson');
console.log(John.getFullName());

// const Sammy = new User();
// console.log(Sammy)
