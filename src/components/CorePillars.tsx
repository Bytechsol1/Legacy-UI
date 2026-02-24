import { Card, CardContent } from "@/components/ui/card";
import { Zap, Layers, Tv2, Gem, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

const pillars = [
  {
    icon: Zap,
    title: "Sportsbook",
    description: "Premium odds on global sporting events.",
    link: "/sports",
    color: "text-legacy-gold-400"
  },
  {
    icon: Layers,
    title: "Casino",
    description: "World-class slots and table games.",
    link: "/casino",
    color: "text-legacy-gold-400"
  },
  {
    icon: Tv2,
    title: "Live Casino",
    description: "Immersive real-time dealer experience.",
    link: "/live-casino",
    color: "text-legacy-gold-400"
  },
  {
    icon: Gem,
    title: "VIP Club",
    description: "Exclusive rewards for elite players.",
    link: "/vip",
    color: "text-legacy-gold-400"
  }
];

export const CorePillars = () => {
  return (
    <section className="py-12 md:py-16 relative z-10 mt-6 md:mt-10 lg:-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link to={pillar.link}>
                <Card className="h-full bg-legacy-green-800/90 border-legacy-gold-500/10 hover:border-legacy-gold-500/50 transition-all duration-300 group hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
                  <CardContent className="p-8 flex flex-col items-center text-center h-full">
                    <div className="p-4 rounded-full bg-legacy-green-900/50 mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/5 group-hover:border-legacy-gold-500/30">
                      <pillar.icon className={`h-8 w-8 ${pillar.color}`} />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-white mb-3 tracking-wide">{pillar.title}</h3>
                    <p className="text-gray-400 text-sm mb-6 flex-grow">{pillar.description}</p>
                    <div className="flex items-center text-legacy-gold-400 text-xs font-bold uppercase tracking-widest group-hover:text-legacy-gold-300">
                      Learn More <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
