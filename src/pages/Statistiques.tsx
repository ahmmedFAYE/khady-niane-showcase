import { Card } from "@/components/ui/card";
import { Counter } from "@/components/home/Counter";
import { TrendingUp, Users, Award, BookOpen, GraduationCap, Star } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState, useRef } from "react";

const stats = [
  { icon: Users, value: 500, suffix: "+", label: "Élèves Inscrits", color: "text-secondary" },
  { icon: TrendingUp, value: 98, suffix: "%", label: "Taux de Réussite BFEM", color: "text-accent" },
  { icon: Award, value: 30, suffix: "+", label: "Enseignants Qualifiés", color: "text-accent-warm" },
  { icon: BookOpen, value: 20, suffix: "+", label: "Années d'Excellence", color: "text-secondary" },
  { icon: GraduationCap, value: 1200, suffix: "+", label: "Diplômés Depuis 2003", color: "text-accent" },
  { icon: Star, value: 95, suffix: "%", label: "Satisfaction Parents", color: "text-accent-warm" },
];

const ProgressBar = ({ label, value, color }: { label: string; value: number; color: string }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          setIsVisible(true);
          hasAnimated.current = true;
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(() => {
      setProgress(value);
    }, 100);

    return () => clearTimeout(timer);
  }, [isVisible, value]);

  return (
    <div ref={ref} className="space-y-3">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-foreground">{label}</span>
        <span className={`text-sm font-bold ${color}`}>{value}%</span>
      </div>
      <Progress value={progress} className="h-3" />
    </div>
  );
};

const Statistiques = () => {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-20 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
            Nos <span className="gradient-text">Statistiques</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Des chiffres qui témoignent de notre engagement envers l'excellence éducative
            et la réussite de nos élèves.
          </p>
        </div>

        {/* Main Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden bg-card/80 backdrop-blur-sm hover:border-secondary/50 transition-all duration-300 hover:scale-105 hover:shadow-xl animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-8 text-center space-y-4">
                  <div className="flex justify-center">
                    <div className={`${stat.color} p-3 rounded-xl bg-gradient-to-br from-background to-muted`}>
                      <Icon className="h-8 w-8" />
                    </div>
                  </div>
                  <div className={`text-5xl font-bold ${stat.color}`}>
                    <Counter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-muted-foreground font-medium">{stat.label}</p>
                  <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-warm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </Card>
            );
          })}
        </div>

        {/* Performance Indicators */}
        <div className="max-w-5xl mx-auto mb-20">
          <Card className="glass p-8 md:p-12">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Indicateurs de <span className="gradient-text">Performance</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <ProgressBar label="Taux de Réussite BFEM" value={98} color="text-secondary" />
                <ProgressBar label="Poursuite d'Études Supérieures" value={95} color="text-accent" />
                <ProgressBar label="Maîtrise des Langues" value={92} color="text-accent-warm" />
                <ProgressBar label="Compétences Numériques" value={88} color="text-secondary" />
              </div>
              <div className="space-y-6">
                <ProgressBar label="Assiduité des Élèves" value={96} color="text-accent" />
                <ProgressBar label="Satisfaction des Parents" value={95} color="text-accent-warm" />
                <ProgressBar label="Participation Activités" value={90} color="text-secondary" />
                <ProgressBar label="Excellence Académique" value={94} color="text-accent" />
              </div>
            </div>
          </Card>
        </div>

        {/* Success Stories */}
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Témoignages de <span className="gradient-text">Réussite</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                name: "Fatou D.",
                role: "Promotion 2020 - Médecine",
                quote: "L'excellence académique et le soutien de mes professeurs m'ont permis de réaliser mon rêve de devenir médecin.",
              },
              {
                name: "Moussa S.",
                role: "Promotion 2019 - Ingénieur",
                quote: "Les bases solides acquises à Keur Khady Niane m'ont ouvert les portes des meilleures écoles d'ingénieurs.",
              },
              {
                name: "Aïcha N.",
                role: "Promotion 2021 - Entrepreneure",
                quote: "L'école m'a appris bien plus que les matières académiques. J'y ai développé confiance et leadership.",
              },
              {
                name: "Ibrahima F.",
                role: "Promotion 2018 - Enseignant",
                quote: "Je suis fier d'avoir été formé dans cette école. C'est naturellement que j'ai choisi d'enseigner à mon tour.",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="glass p-6 hover:border-secondary/50 transition-all duration-300 hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <p className="text-muted-foreground italic mb-4 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-warm flex items-center justify-center text-foreground font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistiques;
