import { t } from "elysia";

export const staffMembers = t.Object({
  name: t.String(),
  position: t.String(),
});
