import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
/* auth disabled: removed getCurrentUser import */

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
    // Auth is disabled; return all inquiries for this business using the index
    return await ctx.db
      .query("inquiries")
      .withIndex("by_business", (q) => q.eq("businessId", args.businessId))
      .collect();
  },
});
