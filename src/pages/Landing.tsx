import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useAuth } from "@/hooks/use-auth";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Building2, CheckCircle, Search, TrendingUp, Users, Shield, Clock, Award, Zap } from "lucide-react";
import { useNavigate } from "react-router";
import { useRef } from "react";

export default function Landing() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const features = [
    {
      icon: Shield,
      title: "Verified Listings",
      description: "All businesses are verified with transparent financial records and documentation",
    },
    {
      icon: TrendingUp,
      title: "Real Financial Data",
      description: "Access actual revenue, profit margins, and growth metrics for informed decisions",
    },
    {
      icon: Clock,
      title: "Quick Transactions",
      description: "Connect directly with sellers and close deals faster with our streamlined process",
    },
    {
      icon: Award,
      title: "Trusted Platform",
      description: "Egypt's most trusted marketplace for buying and selling established businesses",
    },
  ];

  const categories = [
    { name: "Restaurants & Cafes", count: "50+", icon: "🍽️" },
    { name: "Retail & Shops", count: "40+", icon: "🛍️" },
    { name: "Technology", count: "30+", icon: "💻" },
    { name: "Healthcare", count: "25+", icon: "🏥" },
    { name: "Education", count: "20+", icon: "📚" },
    { name: "Services", count: "60+", icon: "⚙️" },
  ];

  const stats = [
    { value: "500+", label: "Active Listings" },
    { value: "1000+", label: "Successful Deals" },
    { value: "50M+", label: "EGP Transacted" },
    { value: "95%", label: "Satisfaction Rate" },
  ];

  return (
    <div ref={containerRef} className="min-h-screen relative overflow-hidden">
      {/* Animated Background Pattern */}
      <motion.div 
        style={{ y: backgroundY }}
        className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
      >
        <div className="absolute top-0 -left-4 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-accent/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        
        {/* Floating Shapes */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-16 h-16 border-2 border-primary/20 rounded-lg"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-12 h-12 border-2 border-accent/20 rounded-full"
          animate={{
            y: [0, 30, 0],
            x: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/3 w-20 h-20 border-2 border-primary/20"
          animate={{
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Header */}
      <header className="border-b sticky top-0 bg-background/80 backdrop-blur-xl z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src="/logo.svg" alt="Logo" className="h-10 w-10" />
              <span className="font-bold text-2xl">Business Exchange</span>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" onClick={() => navigate("/browse")} className="text-base">
                Browse
              </Button>
              {isAuthenticated ? (
                <Button onClick={() => navigate("/list-business")} size="lg" className="text-base shadow-lg shadow-primary/20">
                  List Your Business
                </Button>
              ) : (
                <Button onClick={() => navigate("/auth")} size="lg" className="text-base shadow-lg shadow-primary/20">Get Started</Button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section - Enhanced */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="container mx-auto px-4 relative z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-5xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/20 to-accent/20 text-primary px-6 py-3 rounded-full mb-8 border border-primary/30 shadow-lg shadow-primary/10 backdrop-blur-sm"
            >
              <Zap className="h-5 w-5" />
              <span className="text-sm font-semibold">Egypt's #1 Business Marketplace</span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
              Buy & Sell Businesses
              <br />
              <span className="text-primary bg-clip-text bg-gradient-to-r from-primary to-accent">With Confidence</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
              Discover profitable opportunities across Egypt. Connect with verified sellers, access transparent financials, and grow your entrepreneurial portfolio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" onClick={() => navigate("/browse")} className="text-lg px-8 py-6 h-auto shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 transition-all hover:scale-105">
                Explore Businesses
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => navigate("/list-business")} className="text-lg px-8 py-6 h-auto border-2 shadow-lg hover:shadow-xl transition-all hover:scale-105">
                Sell Your Business
              </Button>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-16">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center bg-card/50 backdrop-blur-sm rounded-xl p-4 border border-border/50 shadow-lg"
                >
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Categories Section - Enhanced with 3D effect */}
      <section className="py-16 bg-muted/30 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Browse by Category
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Find the perfect business opportunity in your industry
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.08, y: -8 }}
                className="cursor-pointer"
                onClick={() => navigate("/browse")}
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/50 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <CardContent className="pt-6 pb-6 text-center relative z-10">
                    <motion.div 
                      className="text-4xl mb-3 filter drop-shadow-lg"
                      animate={{ 
                        y: [0, -5, 0],
                        rotate: [0, 2, 0, -2, 0]
                      }}
                      transition={{ 
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.2
                      }}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                    >
                      {category.icon}
                    </motion.div>
                    <h3 className="font-bold text-sm mb-1">{category.name}</h3>
                    <p className="text-xs text-muted-foreground">{category.count} listings</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Enhanced with 3D Icons */}
      <section className="py-20 bg-background relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Why Choose Business Exchange?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The most trusted and efficient platform for business transactions in Egypt
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/30 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <CardContent className="pt-8 pb-8 relative z-10">
                    <motion.div 
                      className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6 mx-auto shadow-xl shadow-primary/20 relative"
                      animate={{ 
                        scale: [1, 1.05, 1],
                        rotate: [0, 3, 0, -3, 0]
                      }}
                      transition={{ 
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.3
                      }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/30 to-transparent blur-md"></div>
                      <feature.icon className="h-8 w-8 text-primary relative z-10 drop-shadow-lg" />
                    </motion.div>
                    <h3 className="text-xl font-bold mb-3 text-center">{feature.title}</h3>
                    <p className="text-muted-foreground text-center leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - Enhanced */}
      <section className="py-20 bg-muted/30 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              How It Works
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Four simple steps to your next business opportunity
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { number: "01", title: "Browse Listings", description: "Explore hundreds of verified businesses across various industries and locations" },
              { number: "02", title: "Review Details", description: "Analyze comprehensive financials, operations data, and growth potential metrics" },
              { number: "03", title: "Contact Seller", description: "Connect directly with business owners and schedule meetings to discuss details" },
              { number: "04", title: "Close the Deal", description: "Negotiate terms, complete due diligence, and finalize your acquisition" },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="relative"
              >
                <Card className="h-full border-2 shadow-lg hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <CardContent className="pt-8 pb-8 relative z-10">
                    <div className="text-6xl font-bold bg-gradient-to-br from-primary/30 to-primary/10 bg-clip-text text-transparent mb-4 text-center drop-shadow-lg">{step.number}</div>
                    <h3 className="text-xl font-bold mb-3 text-center">{step.title}</h3>
                    <p className="text-muted-foreground text-center leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
                {index < 3 && (
                  <motion.div 
                    className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <ArrowRight className="h-8 w-8 text-primary/40 drop-shadow-lg" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary to-primary/80 text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <motion.div
          className="absolute top-10 right-10 w-32 h-32 border-2 border-primary-foreground/10 rounded-full"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-24 h-24 border-2 border-primary-foreground/10 rounded-lg"
          animate={{ rotate: [0, 90, 0], y: [0, -20, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl md:text-2xl mb-10 opacity-95 leading-relaxed">
              Join thousands of entrepreneurs buying and selling businesses across Egypt. Your next opportunity awaits.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                variant="secondary"
                onClick={() => navigate("/browse")}
                className="text-lg px-10 py-7 h-auto shadow-2xl hover:shadow-xl transition-all hover:scale-105"
              >
                Explore Businesses
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate(isAuthenticated ? "/list-business" : "/auth")}
                className="text-lg px-10 py-7 h-auto bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all hover:scale-105"
              >
                List Your Business
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 bg-muted/20 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <img src="/logo.svg" alt="Logo" className="h-8 w-8" />
              <span className="font-bold text-xl">Business Exchange</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 Business Exchange. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}