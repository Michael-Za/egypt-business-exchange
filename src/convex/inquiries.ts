import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { getCurrentUser } from "./users";

export const create = mutation({
  args: {
    businessId: v.id("businesses"),
    name: v.string(),
    email: v.string(),
    phone: v.string(),
    message: v.string(),
  },
  handler: async (ctx, args) => {
    const inquiryId = await ctx.db.insert("inquiries", {
      ...args,
      status: "pending",
    });

    return inquiryId;
  },
});

export const getForBusiness = query({
  args: { businessId: v.id("businesses") },
  handler: async (ctx, args) => {
    const user = await getCurrentUser(ctx);
    if (!user) return [];

    const business = await ctx.db.get(args.businessId);
    if (!business || business.ownerId !== user._id) {
      return [];
    }

    return await ctx.db
      .query("inquiries")
      .filter((q) => q.eq(q.field("businessId"), args.businessId))
      .collect();
  },
});
