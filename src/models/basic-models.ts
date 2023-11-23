import { t } from "elysia";

export const staffMembers = t.Object(
  {
    name: t.String(),
    position: t.String(),
  },
  {
    description: "Expected a name and position",
  }
);

export const staffMembersIdParams = t.Object(
  {
    id: t.String(),
  },
  {
    description: "Expected id",
  }
);
