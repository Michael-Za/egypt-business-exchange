import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { api } from "@/convex/_generated/api";
import { motion } from "framer-motion";
import { ArrowLeft, Building2, Eye, Loader2, MapPin, TrendingUp } from "lucide-react";
import { useQuery } from "convex/react";
import { useNavigate } from "react-router";

export default function MyListings() {
  const navigate = useNavigate();
  const myListings = useQuery(api.businesses.getMyListings);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-EG", {
      style: "currency",
      currency: "EGP",
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b sticky top-0 bg-background/95 backdrop-blur z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => navigate("/")}
                className="hover:bg-muted"
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/")}>
                <span className="font-bold text-xl">Business Exchange</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" onClick={() => navigate("/browse")}>
                Browse
              </Button>
              <Button onClick={() => navigate("/list-business")}>
                List Your Business
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold tracking-tight mb-2">My Listings</h1>
          <p className="text-muted-foreground">Manage your business listings</p>
        </motion.div>

        {/* Results */}
        {myListings === undefined ? (
          <div className="flex justify-center py-12">
            <Loader2 className="h-8 w-8 animate-spin" />
          </div>
        ) : myListings.length === 0 ? (
          <div className="text-center py-12">
            <Building2 className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">No listings yet</h3>
            <p className="text-muted-foreground mb-4">Start by listing your first business</p>
            <Button onClick={() => navigate("/list-business")}>
              List Your Business
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {myListings.map((business, index) => (
              <motion.div
                key={business._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate(`/business/${business._id}`)}>
                  <div className="aspect-video relative overflow-hidden rounded-t-lg bg-muted">
                    {business.images[0] ? (
                      <img
                        src={business.images[0]}
                        alt={business.name}
                        className="object-cover w-full h-full"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full">
                        <Building2 className="h-12 w-12 text-muted-foreground" />
                      </div>
                    )}
                  </div>
                  <CardContent className="flex-1 pt-4">
                    <h3 className="font-bold text-lg mb-2 line-clamp-1">{business.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {business.description}
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{business.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <TrendingUp className="h-4 w-4" />
                        <span>Revenue: {formatPrice(business.revenue)}/year</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Eye className="h-4 w-4" />
                        <span>{business.views} views</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <div className="w-full">
                      <div className="text-2xl font-bold text-primary">
                        {formatPrice(business.price)}
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
