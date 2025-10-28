import { Award, Lightbulb, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";

const pillars = [
  {
    icon: Award,
    title: "Excellence Académique",
    description:
      "Des programmes rigoureux conformes aux standards nationaux et internationaux, encadrés par des enseignants hautement qualifiés.",
    color: "text-secondary",
  },
  {
    icon: Lightbulb,
    title: "Compétences d'Avenir",
    description:
      "Formation aux technologies, langues, sciences et arts pour préparer nos élèves aux défis du 21e siècle.",
    color: "text-accent",
  },
  {
    icon: Heart,
    title: "Valeurs & Citoyenneté",
    description:
      "Développement du caractère, respect, intégrité et engagement communautaire au cœur de notre projet éducatif.",
    color: "text-accent-warm",
  },
];

export const Pillars = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Les Piliers de Notre <span className="gradient-text">Excellence</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Notre approche éducative repose sur trois fondements essentiels qui garantissent
            le succès et l'épanouissement de chaque élève.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden bg-card border-border hover:border-secondary/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-secondary/10 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="p-8 space-y-4">
                  {/* Icon */}
                  <div className={`${pillar.color} mb-6`}>
                    <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-background to-muted">
                      <Icon className="h-10 w-10" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-secondary transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>

                  {/* Decorative Element */}
                  <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-warm opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500 rounded-full" />
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
