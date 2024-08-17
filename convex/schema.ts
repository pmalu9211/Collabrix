import { v } from "convex/values";
import { defineSchema, defineTable } from "convex/server";

export default defineSchema({
  boards: defineTable({
    title: v.string(),
    orgId: v.string(),
    autherId: v.string(),
    autherName: v.string(),
    imageUrl: v.string(),
  })
    .index("by_org", ["orgId"])
    .searchIndex("by_title", {
      searchField: "title",
      filterFields: ["orgId"],
    }),
});
