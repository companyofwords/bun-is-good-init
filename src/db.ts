import { Database } from "bun:sqlite";

// export interface Book {
//   id?: number;
//   name: string;
//   author: string;
// }

// export class BooksDatabase {
//   private db: Database;

//   constructor() {
//     this.db = new Database("books.db");
//     // Initialize the database
//     this.init()
//       .then(() => console.log("Database initialized"))
//       .catch(console.error);
//   }

//   // Get all books
//   async getBooks() {
//     return this.db.query("SELECT * FROM books").all();
//   }

//   // Add a book
//   async addBook(book: Book) {
//     // q: Get id type safely
//     return this.db
//       .query(`INSERT INTO books (name, author) VALUES (?, ?) RETURNING id`)
//       .get(book.name, book.author) as Book;
//   }

//   // Update a book
//   async updateBook(id: number, book: Book) {
//     return this.db.run(
//       `UPDATE books SET name = '${book.name}', author = '${book.author}' WHERE id = ${id}`
//     );
//   }

//   // Delete a book
//   async deleteBook(id: number) {
//     return this.db.run(`DELETE FROM books WHERE id = ${id}`);
//   }

//   // Initialize the database
//   async init() {
//     return this.db.run(
//       "CREATE TABLE IF NOT EXISTS books (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, author TEXT)"
//     );
//   }
// }

export interface StaffMember {
  id?: number;
  name: string;
  position: string;
}

export class StaffMembersDatabase {
  private db: Database;

  constructor() {
    this.db = new Database("staff.db");
    // Initialize the database
    this.init()
      .then(() => console.log("Staff Member Database initialized"))
      .catch(console.error);
  }

  // Get all members
  async getStaffMembers() {
    return this.db.query("SELECT * FROM staff").all();
  }

  // Add a member
  async addStaffMember(member: StaffMember) {
    // q: Get id type safely
    return this.db
      .query(`INSERT INTO staff (name, author) VALUES (?, ?) RETURNING id`)
      .get(member.name, member.position) as StaffMember;
  }

  // Update a member
  async updateStaffMember(id: number, member: StaffMember) {
    return this.db.run(
      `UPDATE staff SET name = '${member.name}', author = '${member.position}' WHERE id = ${id}`
    );
  }

  // Delete a member
  async deleteStaffMember(id: number) {
    return this.db.run(`DELETE FROM staff WHERE id = ${id}`);
  }

  // Initialize the database
  async init() {
    return this.db.run(
      "CREATE TABLE IF NOT EXISTS staff (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, position TEXT)"
    );
  }
}
