import { staffMembers } from "../models/basic-models";
import { Elysia, t } from "elysia";

// Database
import { StaffMembersDatabase } from "../db.js";

// Company Information
export const dbController = new Elysia({
  prefix: "/sqlite-example",
})
  // You can add state to the context store
  .state("staff-version", 10001)
  // You can add extra values to the context
  .decorate("db", new StaffMembersDatabase())
  // You can group same routes together, even with the prefix as well above
  .group("/staff", (app) =>
    app
      .get(
        "/",
        ({ db }) => {
          // Calling the functions from the db file
          db.getStaffMembers();
        },
        // Adding details and tags so the API shows up in the swagger openAPI gui
        {
          detail: {
            summary: "Get all staff members",
            tags: ["Database Examples"],
          },
        }
      )
      .post(
        "/",
        async ({ db, body }) => {
          const id = (await db.addStaffMember(body)).id;
          console.log(id, "New Staff Member");
          return { success: true, id };
        },
        {
          body: staffMembers,
          detail: {
            summary: "Create new staff member",
            tags: ["Database Examples"],
          },
          //response: staffMembers,
        }
      )
      .put(
        "/:id",
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
          detail: {
            summary: "Update staff member",
            tags: ["Database Examples"],
          },
        }
      )
      .delete(
        "/:id",
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
          detail: {
            summary: "Delete staff member",
            tags: ["Database Examples"],
          },
        }
      )
  );
