import { Database } from "bun:sqlite";

export type StaffMember = {
  id?: number;
  name: string;
  position: string;
};

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
      .query(`INSERT INTO staff (name, position) VALUES (?, ?) RETURNING id`)
      .get(member.name, member.position) as StaffMember;
  }

  // Update a member
  async updateStaffMember(id: number, member: StaffMember) {
    return this.db.run(
      `UPDATE staff SET name = '${member.name}', position = '${member.position}' WHERE id = ${id}`
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
