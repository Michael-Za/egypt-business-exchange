import { query, QueryCtx, mutation } from "./_generated/server";
import { v } from "convex/values";

/**
 * Get the current signed in user. Returns null (authentication disabled).
 */
export const currentUser = query({
  args: {},
  handler: async (ctx) => {
    // Authentication disabled - always return null
    return null;
  },
});

/**
 * Internal helper - authentication disabled
 */
export const getCurrentUser = async (ctx: QueryCtx) => {
  // Authentication disabled - always return null
  return null;
};

export const list = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("users").collect();
  },
});

export const createSeedUser = mutation({
  args: {
    email: v.string(),
    name: v.string(),
  },
  handler: async (ctx, args) => {
    const userId = await ctx.db.insert("users", {
      email: args.email,
      name: args.name,
      emailVerificationTime: Date.now(),
      isAnonymous: false,
    });
    return userId;
  },
});