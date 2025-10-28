import { Hero } from "@/components/home/Hero";
import { Pillars } from "@/components/home/Pillars";
import { Stats } from "@/components/home/Stats";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Pillars />
      <Stats />
      
      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 glass rounded-3xl p-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
              Prêt à Rejoindre Notre Communauté ?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Donnez à votre enfant les meilleures chances de réussir dans un environnement
              stimulant et bienveillant. Les inscriptions pour l'année 2024-2025 sont ouvertes.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" variant="premium" asChild>
                <Link to="/contact">
                  Contactez-nous
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/programmes">
                  Découvrir nos Programmes
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
