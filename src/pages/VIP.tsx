import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Crown, Gem, Check } from "lucide-react";
import { motion } from "motion/react";

const tiers = [
  {
    name: "Bronze",
    color: "text-amber-700",
    bg: "bg-amber-700",
    benefits: ["Weekly Cashback 1%", "Birthday Bonus", "24/7 Support"],
    minXp: 0
  },
  {
    name: "Silver",
    color: "text-gray-300",
    bg: "bg-gray-300",
    benefits: ["Weekly Cashback 3%", "Higher Limits", "Exclusive Tournaments"],
    minXp: 1000
  },
  {
    name: "Gold",
    color: "text-yellow-400",
    bg: "bg-yellow-400",
    benefits: ["Weekly Cashback 5%", "Personal Account Manager", "Faster Withdrawals"],
    minXp: 5000
  },
  {
    name: "Platinum",
    color: "text-cyan-300",
    bg: "bg-cyan-300",
    benefits: ["Weekly Cashback 10%", "Luxury Gifts", "VIP Events Access"],
    minXp: 20000
  },
  {
    name: "Diamond",
    color: "text-blue-200",
    bg: "bg-blue-200",
    benefits: ["Weekly Cashback 15%", "Concierge Service", "Custom Rewards"],
    minXp: 50000
  }
];

export const VIP = () => {
  return (
    <Layout>
      {/* Hero */}
      <div className="relative py-20 overflow-hidden -mt-20 pt-40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-legacy-green-800 via-legacy-green-900 to-legacy-black" />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-6 inline-block"
          >
            <Crown className="h-20 w-20 text-legacy-gold-400 mx-auto mb-4 drop-shadow-[0_0_15px_rgba(212,175,55,0.5)]" />
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">
            THE <span className="text-gold-gradient">LEGACY CLUB</span>
          </h1>
          <p className="text-xl text-gray-300 mb-10 font-light">
            Ascend the tiers of royalty. Unlock exclusive privileges, personalized rewards, and elite experiences.
          </p>
          
          {/* Progress Bar */}
          <div className="max-w-2xl mx-auto bg-legacy-black/50 rounded-full h-4 relative overflow-hidden border border-legacy-gold-500/20 mb-4">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "35%" }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-legacy-gold-500 to-legacy-gold-300"
            />
          </div>
          <div className="flex justify-between max-w-2xl mx-auto text-xs text-gray-400 uppercase tracking-widest">
            <span>Current: Bronze</span>
            <span>Next: Silver (350/1000 XP)</span>
          </div>
        </div>
      </div>

      {/* Tiers Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`h-full bg-legacy-green-800/30 border-legacy-gold-500/10 hover:border-legacy-gold-500/30 transition-all duration-300 group ${index === 0 ? 'border-legacy-gold-500/50 bg-legacy-green-800/60' : ''}`}>
                <CardContent className="p-6 flex flex-col items-center text-center h-full">
                  <div className={`p-3 rounded-full bg-white/5 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Gem className={`h-8 w-8 ${tier.color}`} />
                  </div>
                  <h3 className={`text-xl font-serif font-bold mb-2 ${tier.color}`}>{tier.name}</h3>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-6">{tier.minXp} XP Required</p>
                  
                  <ul className="space-y-3 w-full text-left mb-6 flex-grow">
                    {tier.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start text-sm text-gray-300">
                        <Check className="h-4 w-4 text-legacy-gold-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    variant={index === 0 ? "gold" : "outline"} 
                    className="w-full text-xs uppercase tracking-wider"
                    disabled={index !== 0}
                  >
                    {index === 0 ? "Current Status" : "Locked"}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="py-20 text-center">
        <h2 className="text-3xl font-serif font-bold text-white mb-6">Ready to Build Your Legacy?</h2>
        <Button variant="gold" size="lg" className="px-12 py-6 text-lg shadow-[0_0_30px_rgba(212,175,55,0.3)]">
          Start Playing Now
        </Button>
      </div>
    </Layout>
  );
};
