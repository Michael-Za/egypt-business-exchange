import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useAuth } from "@/hooks/use-auth";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Shield, TrendingUp, Clock, Award, Zap } from "lucide-react";
import { useNavigate } from "react-router";
import { useRef } from "react";

export default function Landing() {
  const navigate = useNavigate();
  const { isAuthenticated, isLoading } = useAuth();

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const features = [
    {
      icon: Shield,
      title: "Verified Listings",
      description:
        "All businesses are verified with transparent financial records and documentation",
    },
    {
      icon: TrendingUp,
      title: "Real Financial Data",
      description:
        "Access actual revenue, profit margins, and growth metrics for informed decisions",
    },
    {
      icon: Clock,
      title: "Quick Transactions",
      description:
        "Connect directly with sellers and close deals faster with our streamlined process",
    },
    {
      icon: Award,
      title: "Trusted Platform",
      description:
        "Egypt's most trusted marketplace for buying and selling established businesses",
    },
  ];

  const iconVariants = {
    initial: {
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
      scale: 1,
      z: 0,
    },
    animate: {
      rotateX: [0, 15, -15, 0],
      rotateY: [0, 25, -25, 0],
      rotateZ: [0, 5, -5, 0],
      scale: [1, 1.1, 1],
      z: [0, 50, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
    hover: {
      rotateX: 25,
      rotateY: 25,
      rotateZ: 10,
      scale: 1.3,
      z: 100,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const categories = [
    { 
      name: "Restaurants & Cafes", 
      count: "50+", 
      illustration: (
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <motion.g
            animate={{
              y: [0, -3, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {/* Person eating */}
            <circle cx="50" cy="35" r="12" fill="currentColor" opacity="0.8" />
            <path d="M50 47 L45 65 L40 80" stroke="currentColor" strokeWidth="3" fill="none" opacity="0.8" />
            <path d="M50 47 L55 65 L60 80" stroke="currentColor" strokeWidth="3" fill="none" opacity="0.8" />
            <path d="M50 50 L35 55" stroke="currentColor" strokeWidth="3" opacity="0.8" />
            <motion.path 
              d="M50 50 L65 55" 
              stroke="currentColor" 
              strokeWidth="3" 
              opacity="0.8"
              animate={{
                d: ["M50 50 L65 55", "M50 50 L60 45", "M50 50 L65 55"],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            {/* Food */}
            <motion.circle 
              cx="65" 
              cy="45" 
              r="4" 
              fill="currentColor"
              animate={{
                opacity: [1, 0.5, 1],
                scale: [1, 0.8, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            />
          </motion.g>
        </svg>
      )
    },
    { 
      name: "Retail & Shops", 
      count: "40+", 
      illustration: (
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <motion.g
            animate={{
              x: [0, 2, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {/* Person shopping */}
            <circle cx="45" cy="30" r="10" fill="currentColor" opacity="0.8" />
            <path d="M45 40 L45 60 L40 75" stroke="currentColor" strokeWidth="3" fill="none" opacity="0.8" />
            <path d="M45 60 L50 75" stroke="currentColor" strokeWidth="3" fill="none" opacity="0.8" />
            <motion.path 
              d="M45 45 L60 50" 
              stroke="currentColor" 
              strokeWidth="3" 
              opacity="0.8"
              animate={{
                d: ["M45 45 L60 50", "M45 45 L65 48", "M45 45 L60 50"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
            {/* Shopping bag */}
            <motion.rect 
              x="58" 
              y="48" 
              width="12" 
              height="15" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
              animate={{
                y: [48, 50, 48],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
          </motion.g>
        </svg>
      )
    },
    { 
      name: "Technology", 
      count: "30+", 
      illustration: (
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <motion.g>
            {/* Person at computer */}
            <circle cx="50" cy="30" r="10" fill="currentColor" opacity="0.8" />
            <path d="M50 40 L50 55" stroke="currentColor" strokeWidth="3" opacity="0.8" />
            <motion.path 
              d="M50 45 L35 50" 
              stroke="currentColor" 
              strokeWidth="3" 
              opacity="0.8"
              animate={{
                d: ["M50 45 L35 50", "M50 45 L35 55", "M50 45 L35 50"],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            />
            <motion.path 
              d="M50 45 L65 50" 
              stroke="currentColor" 
              strokeWidth="3" 
              opacity="0.8"
              animate={{
                d: ["M50 45 L65 50", "M50 45 L65 48", "M50 45 L65 50"],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: 0.3,
              }}
            />
            {/* Computer */}
            <rect x="30" y="55" width="40" height="25" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.8" />
            <motion.line 
              x1="35" 
              y1="60" 
              x2="50" 
              y2="60" 
              stroke="currentColor" 
              strokeWidth="2"
              animate={{
                x2: [50, 65, 50],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
          </motion.g>
        </svg>
      )
    },
    { 
      name: "Healthcare", 
      count: "25+", 
      illustration: (
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <motion.g
            animate={{
              y: [0, -2, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            {/* Doctor */}
            <circle cx="50" cy="32" r="11" fill="currentColor" opacity="0.8" />
            <path d="M50 43 L50 62 L45 78" stroke="currentColor" strokeWidth="3" fill="none" opacity="0.8" />
            <path d="M50 62 L55 78" stroke="currentColor" strokeWidth="3" fill="none" opacity="0.8" />
            <path d="M50 48 L35 52" stroke="currentColor" strokeWidth="3" opacity="0.8" />
            <motion.path 
              d="M50 48 L65 52" 
              stroke="currentColor" 
              strokeWidth="3" 
              opacity="0.8"
              animate={{
                d: ["M50 48 L65 52", "M50 48 L68 50", "M50 48 L65 52"],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
              }}
            />
            {/* Medical cross */}
            <motion.g
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
              }}
            >
              <line x1="68" y1="45" x2="68" y2="55" stroke="currentColor" strokeWidth="3" />
              <line x1="63" y1="50" x2="73" y2="50" stroke="currentColor" strokeWidth="3" />
            </motion.g>
          </motion.g>
        </svg>
      )
    },
    { 
      name: "Education", 
      count: "20+", 
      illustration: (
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <motion.g>
            {/* Teacher/Student */}
            <circle cx="45" cy="35" r="10" fill="currentColor" opacity="0.8" />
            <path d="M45 45 L45 60 L40 75" stroke="currentColor" strokeWidth="3" fill="none" opacity="0.8" />
            <path d="M45 60 L50 75" stroke="currentColor" strokeWidth="3" fill="none" opacity="0.8" />
            <motion.path 
              d="M45 50 L60 45" 
              stroke="currentColor" 
              strokeWidth="3" 
              opacity="0.8"
              animate={{
                d: ["M45 50 L60 45", "M45 50 L65 48", "M45 50 L60 45"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
            {/* Book */}
            <motion.rect 
              x="58" 
              y="42" 
              width="15" 
              height="12" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
              animate={{
                rotateZ: [0, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
            <motion.line 
              x1="65" 
              y1="42" 
              x2="65" 
              y2="54" 
              stroke="currentColor" 
              strokeWidth="2"
              animate={{
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
          </motion.g>
        </svg>
      )
    },
    { 
      name: "Services", 
      count: "60+", 
      illustration: (
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <motion.g
            animate={{
              x: [0, 3, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
            }}
          >
            {/* Service person */}
            <circle cx="48" cy="33" r="10" fill="currentColor" opacity="0.8" />
            <path d="M48 43 L48 60 L43 75" stroke="currentColor" strokeWidth="3" fill="none" opacity="0.8" />
            <path d="M48 60 L53 75" stroke="currentColor" strokeWidth="3" fill="none" opacity="0.8" />
            <motion.path 
              d="M48 48 L62 52" 
              stroke="currentColor" 
              strokeWidth="3" 
              opacity="0.8"
              animate={{
                d: ["M48 48 L62 52", "M48 48 L65 48", "M48 48 L62 52"],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            />
            {/* Tool/Wrench */}
            <motion.g
              animate={{
                rotate: [0, 15, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
              style={{ originX: "65px", originY: "50px" }}
            >
              <rect x="62" y="48" width="8" height="15" fill="none" stroke="currentColor" strokeWidth="2" />
              <circle cx="66" cy="46" r="3" fill="none" stroke="currentColor" strokeWidth="2" />
            </motion.g>
          </motion.g>
        </svg>
      )
    },
  ];

  const stats = [
    { value: "500+", label: "Active Listings" },
    { value: "1000+", label: "Successful Deals" },
    { value: "50M+", label: "EGP Transacted" },
    { value: "95%", label: "Satisfaction Rate" },
  ];

  return (
    <div ref={containerRef} className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <motion.div
        style={{ y: backgroundY }}
        className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
      >
        <div className="absolute top-0 -left-4 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-accent/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />

        <motion.div
          className="absolute top-1/4 left-1/4 w-16 h-16 border-2 border-primary/20 rounded-lg"
          animate={{ y: [0, -20, 0], rotate: [0, 90, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-12 h-12 border-2 border-accent/20 rounded-full"
          animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/3 w-20 h-20 border-2 border-primary/20"
          animate={{ rotate: [0, 180, 360], scale: [1, 1.1, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Header */}
      <header className="border-b sticky top-0 bg-background/80 backdrop-blur-xl z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => navigate("/")}
            >
              <span className="font-bold text-2xl">Business Exchange</span>
            </div>
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                onClick={() => navigate("/browse")}
                className="text-base"
              >
                Browse
              </Button>
              <Button
                onClick={() => navigate("/list-business")}
                size="lg"
                className="text-base shadow-lg shadow-primary/20"
              >
                List Your Business
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
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
              <span className="text-sm font-semibold">
                Egypt&apos;s #1 Business Marketplace
              </span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
              Buy & Sell Businesses
              <br />
              <span className="text-primary bg-clip-text bg-gradient-to-r from-primary to-accent">
                With Confidence
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
              Discover profitable opportunities across Egypt. Connect with
              verified sellers, access transparent financials, and grow your
              entrepreneurial portfolio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                onClick={() => navigate("/browse")}
                className="text-lg px-8 py-6 h-auto shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 transition-all hover:scale-105"
              >
                Explore Businesses
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate("/list-business")}
                className="text-lg px-8 py-6 h-auto border-2 shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                Sell Your Business
              </Button>
            </div>

            {/* Stats */}
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
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Categories */}
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
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -6, rotateY: 5, rotateX: 5 }}
                className="cursor-pointer"
                onClick={() => navigate("/browse")}
                style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/50 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <CardContent className="pt-6 pb-6 text-center relative z-10">
                    <div className="h-16 w-16 mx-auto mb-3 text-primary">
                      {category.illustration}
                    </div>
                    <h3 className="font-bold text-sm mb-1">{category.name}</h3>
                    <p className="text-xs text-muted-foreground">
                      {category.count} listings
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/20 relative">
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
              The most trusted and efficient platform for business transactions
              in Egypt
            </p>
          </motion.div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
            style={{ perspective: "1000px" }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/50 bg-gradient-to-br from-card via-card to-primary/5 backdrop-blur-sm relative overflow-hidden group">
                  <CardContent className="pt-10 pb-10 relative z-10">
                    <motion.div
                      className="h-24 w-24 mx-auto mb-8 flex items-center justify-center relative"
                      style={{
                        transformStyle: "preserve-3d",
                        perspective: "1000px",
                      }}
                    >
                      <motion.div
                        className="absolute inset-0 rounded-2xl bg-primary/20 blur-xl"
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.2,
                        }}
                      />
                      <motion.div
                        className="absolute inset-0 rounded-2xl bg-accent/20 blur-lg"
                        animate={{
                          scale: [1.2, 1, 1.2],
                          opacity: [0.2, 0.5, 0.2],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.3,
                        }}
                      />

                      <motion.div
                        className="relative z-10 h-20 w-20 flex items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-accent/20 border-2 border-primary/30 shadow-2xl"
                        variants={iconVariants}
                        initial="initial"
                        animate="animate"
                        whileHover="hover"
                        style={{ transformStyle: "preserve-3d" }}
                      >
                        <motion.div
                          className="absolute inset-0 rounded-2xl bg-primary/10"
                          style={{ transform: "translateZ(-20px)" }}
                        />
                        <motion.div
                          animate={{
                            filter: [
                              "drop-shadow(0 0 8px rgba(var(--primary), 0.5))",
                              "drop-shadow(0 0 20px rgba(var(--primary), 0.8))",
                              "drop-shadow(0 0 8px rgba(var(--primary), 0.5))",
                            ],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: index * 0.25,
                          }}
                        >
                          <feature.icon
                            className="h-10 w-10 text-primary relative z-20"
                            style={{ transform: "translateZ(30px)" }}
                          />
                        </motion.div>

                        {[...Array(4)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-1.5 h-1.5 bg-primary/60 rounded-full"
                            animate={{
                              x: [0, Math.cos((i * Math.PI) / 2) * 30, 0],
                              y: [0, Math.sin((i * Math.PI) / 2) * 30, 0],
                              opacity: [0, 1, 0],
                              scale: [0, 1.5, 0],
                            }}
                            transition={{
                              duration: 4,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: i * 0.5 + index * 0.2,
                            }}
                          />
                        ))}
                      </motion.div>
                    </motion.div>

                    <h3 className="text-xl font-bold mb-4 text-center">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-center leading-relaxed text-sm">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
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
              {
                number: "01",
                title: "Browse Listings",
                description:
                  "Explore hundreds of verified businesses across various industries and locations",
              },
              {
                number: "02",
                title: "Review Details",
                description:
                  "Analyze comprehensive financials, operations data, and growth potential metrics",
              },
              {
                number: "03",
                title: "Contact Seller",
                description:
                  "Connect directly with business owners and schedule meetings to discuss details",
              },
              {
                number: "04",
                title: "Close the Deal",
                description:
                  "Negotiate terms, complete due diligence, and finalize your acquisition",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -6 }}
              >
                <Card className="h-full border-2 shadow-lg hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm relative overflow-hidden group">
                  <CardContent className="pt-8 pb-8 relative z-10">
                    <div className="text-6xl font-bold bg-gradient-to-br from-primary/30 to-primary/10 bg-clip-text text-transparent mb-4 text-center drop-shadow-lg">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-center">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-center leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary to-primary/80 text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:14px_24px]" />

        {[...Array(50)].map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          />
        ))}

        {[...Array(18)].map((_, i) => (
          <motion.div
            key={`fall-${i}`}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 60 - 30],
              opacity: [0, 1, 1, 0],
              scale: [0, 1, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          />
        ))}

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
              Join thousands of entrepreneurs buying and selling businesses
              across Egypt. Your next opportunity awaits.
            </p>
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
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
                onClick={() => navigate("/list-business")}
                className="text-lg px-10 py-7 h-auto bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all hover:scale-105"
              >
                List Your Business
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 bg-muted/20 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
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