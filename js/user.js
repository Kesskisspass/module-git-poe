export class User {
    constructor(id, firstName, lastName) {
      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    get firstName() {
      return this.firstName;
    }
  
    get lastName() {
      return this.lastName;
    }
  }