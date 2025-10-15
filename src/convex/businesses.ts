import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const list = query({
  args: {
    category: v.optional(v.string()),
    searchQuery: v.optional(v.string()),
    minPrice: v.optional(v.number()),
    maxPrice: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    let businesses = await ctx.db.query("businesses").collect();

    if (args.category && args.category !== "all") {
      businesses = businesses.filter((b) => b.category === args.category);
    }

    if (args.searchQuery) {
      const query = args.searchQuery.toLowerCase();
      businesses = businesses.filter(
        (b) =>
          b.name.toLowerCase().includes(query) ||
          b.description.toLowerCase().includes(query) ||
          b.location.toLowerCase().includes(query)
      );
    }

    if (args.minPrice !== undefined) {
      businesses = businesses.filter((b) => b.price >= args.minPrice!);
    }

    if (args.maxPrice !== undefined) {
      businesses = businesses.filter((b) => b.price <= args.maxPrice!);
    }

    return businesses.sort((a, b) => b._creationTime - a._creationTime);
  },
});

export const getById = query({
  args: { id: v.id("businesses") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  },
});

export const create = mutation({
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
    // Create a default owner ID for all listings
    const defaultOwnerId = "default_owner" as any;

    const businessId = await ctx.db.insert("businesses", {
      ...args,
      ownerId: defaultOwnerId,
      status: "active",
      views: 0,
    });

    return businessId;
  },
});

export const incrementViews = mutation({
  args: { id: v.id("businesses") },
  handler: async (ctx, args) => {
    const business = await ctx.db.get(args.id);
    if (!business) return;

    await ctx.db.patch(args.id, {
      views: (business.views || 0) + 1,
    });
  },
});

export const getMyListings = query({
  args: {},
  handler: async (ctx) => {
    // Without authentication, return all listings so the page functions correctly
    const businesses = await ctx.db.query("businesses").collect();
    return businesses.sort((a, b) => b._creationTime - a._creationTime);
  },
});
