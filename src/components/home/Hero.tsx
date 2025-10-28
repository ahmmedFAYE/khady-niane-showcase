import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap } from "lucide-react";
import heroImage from "@/assets/hero-school.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Groupe Scolaire Keur Khady Niane"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-secondary/20 backdrop-blur-sm border border-secondary/30 rounded-full px-6 py-2">
            <GraduationCap className="h-5 w-5 text-secondary" />
            <span className="text-sm font-medium text-foreground">Excellence depuis 2003</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
            Former les{" "}
            <span className="gradient-text">Leaders</span>
            <br />
            de Demain
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-foreground/90 max-w-2xl mx-auto leading-relaxed">
            Le Groupe Scolaire Keur Khady Niane offre une éducation d'excellence alliant
            rigueur académique, valeurs morales et développement personnel depuis plus de 20 ans.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button size="xl" variant="hero" asChild>
              <Link to="/contact">
                Inscriptions 2024-2025
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="xl" variant="hero-outline" asChild>
              <Link to="/presentation">
                Découvrir Notre École
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 max-w-3xl mx-auto">
            {[
              { value: "20+", label: "Ans d'Excellence" },
              { value: "500+", label: "Élèves" },
              { value: "98%", label: "Taux de Réussite" },
              { value: "30+", label: "Enseignants Qualifiés" },
            ].map((stat, index) => (
              <div
                key={index}
                className="glass rounded-xl p-4 hover:scale-105 transition-transform duration-300"
              >
                <div className="text-3xl font-bold text-secondary mb-1">{stat.value}</div>
                <div className="text-sm text-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-secondary/50 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-secondary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};
