"use strict";
class User {
    constructor(id, name, email, password, phone, age) {
        if (age < 18 || age > 60) {
            throw new Error(" age must be between 18 and 60  ");
        }
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.age = age;
    }
    displayInfo() {
        console.log(`User Info: ID=${this.id}, Name=${this.name}, Email=${this.email}, Phone=${this.phone}, Age=${this.age} `);
    }
}
class Admin extends User {
    constructor(id, name, email, password, phone, age) {
        super(id, name, email, password, phone, age);
    }
    manageNotes() {
        console.log(`Admin ${this.name} is managing notes.`);
    }
}
/* // Examples//

    const user1 = new User(1, "mohamed", "mohamed272@gmail.com", "password123", "123-456-7890", 25);
    user1.displayInfo();
    const admin1 = new Admin(2, "moamen", "moamen@gmail.com", "adminpassword", "098-765-4321", 30);
    admin1.displayInfo();
    admin1.manageNotes();
 */
class Note {
    constructor(id, title, content, userId) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.userId = userId;
    }
    preview() {
        return `${this.title}: ${this.content.substring(0, 20)}...`;
    }
}
