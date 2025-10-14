import { v } from "convex/values";
import { internalMutation } from "./_generated/server";

export const createInternal = internalMutation({
  args: {
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
  },
  handler: async (ctx, args) => {
    const users = await ctx.db.query("users").collect();
    const adminUser = users[0];

    if (!adminUser) {
      throw new Error("No users found to assign as owner");
    }

    const businessId = await ctx.db.insert("businesses", {
      ...args,
      ownerId: adminUser._id,
      status: "active",
      views: 0,
    });

    return businessId;
  },
});
