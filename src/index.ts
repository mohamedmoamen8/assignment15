class User {
    public id : number;
    public name : string;
    public email : string;
    private password : string;
    public phone : string;
    protected age : number;

    constructor(id: number, name: string, email: string, password: string, phone: string, age: number) {
        if(age<18||age>60) {
            throw new Error(" age must be between 18 and 60  ");
        }

        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.age = age;
    }
    displayInfo(): void {
    console.log(`User Info: ID=${this.id}, Name=${this.name}, Email=${this.email}, Phone=${this.phone}, Age=${this.age} `);
}  
}

class Admin extends User {
    constructor(id: number, name: string, email: string, password: string, phone: string, age: number) {
        super(id, name, email, password, phone, age);
    }
    manageNotes(): void {
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
    public id : number
    public title : string;
    public content : string
    public userId : number;
    constructor(id: number, title: string, content: string, userId: number) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.userId = userId;
    }
    preview(): string {
        return `${this.title}: ${this.content.substring(0, 20)}...`;
    }
}
class NoteBook {
  private notes: Note[] = [];

  addNote(note: Note): void {
    this.notes.push(note);
  }

  removeNote(noteId: number): void {
    this.notes = this.notes.filter(note => note.id !== noteId);
  }

  getNotes(): Note[] {
    return this.notes;
  }
}
class UserWithNotebook extends User {
  public notebooks: NoteBook[] = [];

  addNotebook(notebook: NoteBook): void {
    this.notebooks.push(notebook);
  }
}
class DataStorage<T> {
  private items: T[] = [];

  addItem(item: T): void {
    this.items.push(item);
  }

  removeItem(index: number): void {
    this.items.splice(index, 1);
  }

  getAllItems(): T[] {
    return this.items;
  }
}