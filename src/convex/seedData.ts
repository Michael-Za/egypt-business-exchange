import { action } from "./_generated/server";
import { internal } from "./_generated/api";

export const seed = action({
  args: {},
  handler: async (ctx) => {
    const sampleBusinesses = [
      {
        name: "Cairo Coffee House",
        description: "Established coffee shop in the heart of Zamalek with loyal customer base. Features outdoor seating, premium coffee equipment, and a prime location near embassies and hotels.",
        category: "restaurant",
        price: 2500000,
        revenue: 800000,
        profit: 250000,
        location: "Zamalek, Cairo",
        employees: 8,
        yearEstablished: 2018,
        reason: "Owner relocating abroad for family reasons",
        images: ["https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800"],
        contactEmail: "owner@cairocoffee.eg",
        contactPhone: "+20 100 123 4567",
      },
      {
        name: "Alexandria Seafood Restaurant",
        description: "Popular seafood restaurant on the Corniche with stunning Mediterranean views. Fully equipped kitchen, established supplier relationships, and excellent reputation.",
        category: "restaurant",
        price: 4500000,
        revenue: 1800000,
        profit: 600000,
        location: "Alexandria",
        employees: 15,
        yearEstablished: 2015,
        reason: "Owner pursuing other business ventures",
        images: ["https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800"],
        contactEmail: "contact@alexseafood.eg",
        contactPhone: "+20 100 234 5678",
      },
      {
        name: "Fashion Boutique - New Cairo",
        description: "Trendy fashion boutique in a premium mall location. Strong social media presence, established brand, and loyal customer base. Includes inventory and fixtures.",
        category: "retail",
        price: 1800000,
        revenue: 1200000,
        profit: 350000,
        location: "New Cairo",
        employees: 5,
        yearEstablished: 2019,
        reason: "Owner starting new business in different industry",
        images: ["https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800"],
        contactEmail: "info@fashionboutique.eg",
        contactPhone: "+20 100 345 6789",
      },
      {
        name: "Digital Marketing Agency",
        description: "Full-service digital marketing agency with 20+ active clients including major Egyptian brands. Experienced team, proven track record, and recurring revenue model.",
        category: "services",
        price: 3200000,
        revenue: 2400000,
        profit: 800000,
        location: "Maadi, Cairo",
        employees: 12,
        yearEstablished: 2017,
        reason: "Founder retiring",
        images: ["https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800"],
        contactEmail: "hello@digitalagency.eg",
        contactPhone: "+20 100 456 7890",
      },
      {
        name: "Gym & Fitness Center",
        description: "Modern gym with 300+ active members in Heliopolis. Includes all equipment, group class studio, and personal training services. Strong membership retention rate.",
        category: "services",
        price: 5500000,
        revenue: 2200000,
        profit: 750000,
        location: "Heliopolis, Cairo",
        employees: 10,
        yearEstablished: 2016,
        reason: "Owner moving to another city",
        images: ["https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800"],
        contactEmail: "info@fitnesscenter.eg",
        contactPhone: "+20 100 567 8901",
      },
      {
        name: "Printing & Packaging Factory",
        description: "Established printing facility with modern equipment serving corporate clients. Long-term contracts with major companies, skilled workforce, and growth potential.",
        category: "manufacturing",
        price: 8000000,
        revenue: 5000000,
        profit: 1500000,
        location: "6th of October City",
        employees: 25,
        yearEstablished: 2012,
        reason: "Partnership dissolution",
        images: ["https://images.unsplash.com/photo-1590859808308-3d2d9c515b1a?w=800"],
        contactEmail: "sales@printingfactory.eg",
        contactPhone: "+20 100 678 9012",
      },
    ];

    console.log("Seeding database with sample businesses...");
    
    for (const business of sampleBusinesses) {
      await ctx.runMutation(internal.businessesInternal.createInternal, business);
    }

    console.log(`Successfully seeded ${sampleBusinesses.length} businesses!`);
    return { success: true, count: sampleBusinesses.length };
  },
});
