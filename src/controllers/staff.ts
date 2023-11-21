import { staffMembers } from "./../models/basic-models";
import { Elysia, t } from "elysia";

// Database
import { StaffMembersDatabase } from "../db.js";

// Company Information
export const staffController = new Elysia()
  .state("staff-version", 10001)
  .decorate("db", new StaffMembersDatabase())
  .get("/staff", ({ db }) => db.getStaffMembers())
  .post(
    "/staff",
    async ({ db, body }) => {
      console.log(body);
      const id = (await db.addStaffMember(body)).id;
      console.log(id, "New Staff Member");
      return { success: true, id };
    },
    {
      body: staffMembers,
      //response: staffMembers,
    }
  )
  .put(
    "/staff/:id",
    ({ db, params, body }) => {
      try {
        db.updateStaffMember(parseInt(params.id), body);
        return { success: true };
      } catch (e) {
        return { success: false };
      }
    },
    {
      body: staffMembers,
      params: t.Object({
        id: t.String(),
      }),
    }
  )
  .delete(
    "/staff/:id",
    ({ db, params }) => {
      try {
        db.deleteStaffMember(parseInt(params.id));
        return { success: true };
      } catch (e) {
        return { success: false };
      }
    },
    {
      params: t.Object({
        id: t.String(),
      }),
    }
  );
