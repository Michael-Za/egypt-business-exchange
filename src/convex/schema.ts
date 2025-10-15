import { defineSchema, defineTable } from "convex/server";
import { Infer, v } from "convex/values";

export const ROLES = {
  ADMIN: "admin",
  USER: "user",
  MEMBER: "member",
} as const;

export const roleValidator = v.union(
  v.literal(ROLES.ADMIN),
  v.literal(ROLES.USER),
  v.literal(ROLES.MEMBER),
);
export type Role = Infer<typeof roleValidator>;

const schema = defineSchema(
  {
    users: defineTable({
      name: v.optional(v.string()),
      image: v.optional(v.string()),
      email: v.optional(v.string()),
      emailVerificationTime: v.optional(v.number()),
      isAnonymous: v.optional(v.boolean()),
      role: v.optional(roleValidator),
    }).index("email", ["email"]),

    businesses: defineTable({
      name: v.string(),
      description: v.string(),
      category: v.string(),
      price: v.number(),
      revenue: v.number(),
      profit: v.number(),
      location: v.string(),
      employees: v.number(),
      yearEstablished: v.number(),
      reason: v.string(),
      images: v.array(v.string()),
      contactEmail: v.string(),
      contactPhone: v.string(),
      ownerId: v.id("users"),
      status: v.string(),
      views: v.number(),
    })
      .index("by_category", ["category"])
      .index("by_owner", ["ownerId"])
      .index("by_status", ["status"]),

    inquiries: defineTable({
      businessId: v.id("businesses"),
      name: v.string(),
      email: v.string(),
      phone: v.string(),
      message: v.string(),
      status: v.string(),
    }).index("by_business", ["businessId"]),
  },
  {
    schemaValidation: false,
  },
);

export default schema;