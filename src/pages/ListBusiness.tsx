import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { api } from "@/convex/_generated/api";
import { useAuth } from "@/hooks/use-auth";
import { motion } from "framer-motion";
import { Loader2, Building2, DollarSign, TrendingUp, Users, Calendar, MapPin, Mail, Phone, Image as ImageIcon } from "lucide-react";
import { useState, useEffect } from "react";
import { useMutation } from "convex/react";
import { useNavigate } from "react-router";
import { toast } from "sonner";

export default function ListBusiness() {
  const navigate = useNavigate();
  const { isLoading, isAuthenticated, signIn } = useAuth();
  const [submitting, setSubmitting] = useState(false);
  const [autoAuthenticating, setAutoAuthenticating] = useState(false);
  const createBusiness = useMutation(api.businesses.create);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
    revenue: "",
    profit: "",
    location: "",
    employees: "",
    yearEstablished: "",
    reason: "",
    images: "",
    contactEmail: "",
    contactPhone: "",
  });

  // Auto-authenticate as guest if not authenticated
  useEffect(() => {
    const autoSignIn = async () => {
      if (!isLoading && !isAuthenticated) {
        setAutoAuthenticating(true);
        try {
          await signIn("anonymous");
        } catch (error) {
          console.error("Auto guest sign-in failed:", error);
          toast.error("Failed to initialize. Please try again.");
        } finally {
          setAutoAuthenticating(false);
        }
      }
    };
    
    autoSignIn();
  }, [isLoading, isAuthenticated, signIn]);

  if (isLoading || autoAuthenticating) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <Loader2 className="h-12 w-12 animate-spin text-primary mx-auto mb-4" />
          <p className="text-muted-foreground">Preparing your listing form...</p>
        </motion.div>
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const images = formData.images
        .split("\n")
        .map((url) => url.trim())
        .filter((url) => url.length > 0);

      await createBusiness({
        name: formData.name,
        description: formData.description,
        category: formData.category,
        price: parseFloat(formData.price),
        revenue: parseFloat(formData.revenue),
        profit: parseFloat(formData.profit),
        location: formData.location,
        employees: parseInt(formData.employees),
        yearEstablished: parseInt(formData.yearEstablished),
        reason: formData.reason,
        images,
        contactEmail: formData.contactEmail,
        contactPhone: formData.contactPhone,
      });

      toast.success("Business listed successfully!");
      navigate("/browse");
    } catch (error) {
      toast.error("Failed to list business");
      setSubmitting(false);
    }
  };

  const categories = [
    { value: "restaurant", label: "Restaurant & Cafe" },
    { value: "retail", label: "Retail & Shop" },
    { value: "manufacturing", label: "Manufacturing" },
    { value: "services", label: "Services" },
    { value: "technology", label: "Technology" },
    { value: "healthcare", label: "Healthcare" },
    { value: "education", label: "Education" },
    { value: "real-estate", label: "Real Estate" },
    { value: "other", label: "Other" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-accent/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <header className="border-b sticky top-0 bg-background/80 backdrop-blur-xl z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/")}>
              <Building2 className="h-8 w-8 text-primary" />
              <span className="font-bold text-xl">Business Exchange</span>
            </div>
            <Button variant="outline" onClick={() => navigate("/browse")} className="shadow-sm">
              Cancel
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/20 to-accent/20 text-primary px-4 py-2 rounded-full mb-4 border border-primary/30"
            >
              <Building2 className="h-4 w-4" />
              <span className="text-sm font-semibold">List Your Business</span>
            </motion.div>
            <h1 className="text-4xl font-bold tracking-tight mb-3">Sell Your Business</h1>
            <p className="text-muted-foreground text-lg">Fill out the details below to reach thousands of potential buyers</p>
          </div>

          <Card className="border-2 shadow-2xl bg-card/50 backdrop-blur-sm">
            <CardHeader className="space-y-1 pb-6">
              <CardTitle className="text-2xl">Business Information</CardTitle>
              <CardDescription className="text-base">
                Provide accurate information to attract serious buyers
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Basic Information Section */}
                <div className="space-y-6">
                  <div className="flex items-center gap-2 text-sm font-semibold text-primary mb-4">
                    <Building2 className="h-5 w-5" />
                    <span>Basic Information</span>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-base">Business Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your business name"
                      className="h-12 text-base"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description" className="text-base">Description *</Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Describe your business, its operations, and what makes it unique..."
                      rows={6}
                      className="text-base resize-none"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="category" className="text-base">Category *</Label>
                      <Select
                        value={formData.category}
                        onValueChange={(value) => setFormData({ ...formData, category: value })}
                        required
                      >
                        <SelectTrigger className="h-12 text-base">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map((cat) => (
                            <SelectItem key={cat.value} value={cat.value}>
                              {cat.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="location" className="text-base flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        Location *
                      </Label>
                      <Input
                        id="location"
                        placeholder="Cairo, Egypt"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="h-12 text-base"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Financial Information Section */}
                <div className="space-y-6 pt-6 border-t">
                  <div className="flex items-center gap-2 text-sm font-semibold text-primary mb-4">
                    <DollarSign className="h-5 w-5" />
                    <span>Financial Information</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="price" className="text-base">Asking Price (EGP) *</Label>
                      <Input
                        id="price"
                        type="number"
                        value={formData.price}
                        onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                        placeholder="5000000"
                        className="h-12 text-base"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="revenue" className="text-base flex items-center gap-2">
                        <TrendingUp className="h-4 w-4" />
                        Annual Revenue (EGP) *
                      </Label>
                      <Input
                        id="revenue"
                        type="number"
                        value={formData.revenue}
                        onChange={(e) => setFormData({ ...formData, revenue: e.target.value })}
                        placeholder="2000000"
                        className="h-12 text-base"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="profit" className="text-base">Annual Profit (EGP) *</Label>
                      <Input
                        id="profit"
                        type="number"
                        value={formData.profit}
                        onChange={(e) => setFormData({ ...formData, profit: e.target.value })}
                        placeholder="500000"
                        className="h-12 text-base"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Business Details Section */}
                <div className="space-y-6 pt-6 border-t">
                  <div className="flex items-center gap-2 text-sm font-semibold text-primary mb-4">
                    <Users className="h-5 w-5" />
                    <span>Business Details</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="employees" className="text-base flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        Number of Employees *
                      </Label>
                      <Input
                        id="employees"
                        type="number"
                        value={formData.employees}
                        onChange={(e) => setFormData({ ...formData, employees: e.target.value })}
                        placeholder="15"
                        className="h-12 text-base"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="yearEstablished" className="text-base flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        Year Established *
                      </Label>
                      <Input
                        id="yearEstablished"
                        type="number"
                        placeholder="2020"
                        value={formData.yearEstablished}
                        onChange={(e) => setFormData({ ...formData, yearEstablished: e.target.value })}
                        className="h-12 text-base"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="reason" className="text-base">Reason for Selling *</Label>
                    <Textarea
                      id="reason"
                      value={formData.reason}
                      onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                      placeholder="Explain why you're selling this business..."
                      rows={4}
                      className="text-base resize-none"
                      required
                    />
                  </div>
                </div>

                {/* Media & Contact Section */}
                <div className="space-y-6 pt-6 border-t">
                  <div className="flex items-center gap-2 text-sm font-semibold text-primary mb-4">
                    <ImageIcon className="h-5 w-5" />
                    <span>Media & Contact</span>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="images" className="text-base">Image URLs (one per line)</Label>
                    <Textarea
                      id="images"
                      placeholder="https://example.com/image1.jpg&#10;https://example.com/image2.jpg"
                      value={formData.images}
                      onChange={(e) => setFormData({ ...formData, images: e.target.value })}
                      rows={4}
                      className="text-base resize-none font-mono text-sm"
                    />
                    <p className="text-sm text-muted-foreground">Add high-quality images to attract more buyers</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="contactEmail" className="text-base flex items-center gap-2">
                        <Mail className="h-4 w-4" />
                        Contact Email *
                      </Label>
                      <Input
                        id="contactEmail"
                        type="email"
                        value={formData.contactEmail}
                        onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                        placeholder="your@email.com"
                        className="h-12 text-base"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contactPhone" className="text-base flex items-center gap-2">
                        <Phone className="h-4 w-4" />
                        Contact Phone *
                      </Label>
                      <Input
                        id="contactPhone"
                        value={formData.contactPhone}
                        onChange={(e) => setFormData({ ...formData, contactPhone: e.target.value })}
                        placeholder="+20 123 456 7890"
                        className="h-12 text-base"
                        required
                      />
                    </div>
                  </div>
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="pt-6"
                >
                  <Button 
                    type="submit" 
                    className="w-full h-14 text-lg shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 transition-all" 
                    size="lg" 
                    disabled={submitting}
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Publishing Your Listing...
                      </>
                    ) : (
                      <>
                        <Building2 className="mr-2 h-5 w-5" />
                        Publish Business Listing
                      </>
                    )}
                  </Button>
                </motion.div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}