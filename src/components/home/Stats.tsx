import { Card } from "@/components/ui/card";
import { Counter } from "./Counter";
import { Users, TrendingUp, Award, BookOpen } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: 500,
    suffix: "+",
    label: "Élèves Inscrits",
    color: "text-secondary",
  },
  {
    icon: TrendingUp,
    value: 98,
    suffix: "%",
    label: "Taux de Réussite",
    color: "text-accent",
  },
  {
    icon: Award,
    value: 30,
    suffix: "+",
    label: "Enseignants Qualifiés",
    color: "text-accent-warm",
  },
  {
    icon: BookOpen,
    value: 20,
    suffix: "+",
    label: "Années d'Excellence",
    color: "text-secondary",
  },
];

export const Stats = () => {
  return (
    <section className="py-20 bg-gradient-soft relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Notre Impact en <span className="gradient-text">Chiffres</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Des résultats qui témoignent de notre engagement envers l'excellence éducative.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden bg-card/80 backdrop-blur-sm border-border hover:border-secondary/50 transition-all duration-300 hover:scale-105 hover:shadow-xl animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-8 text-center space-y-4">
                  {/* Icon */}
                  <div className="flex justify-center">
                    <div className={`${stat.color} p-3 rounded-xl bg-gradient-to-br from-background to-muted`}>
                      <Icon className="h-8 w-8" />
                    </div>
                  </div>

                  {/* Counter */}
                  <div className={`text-5xl font-bold ${stat.color}`}>
                    <Counter target={stat.value} suffix={stat.suffix} />
                  </div>

                  {/* Label */}
                  <p className="text-muted-foreground font-medium">{stat.label}</p>

                  {/* Decorative gradient */}
                  <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-warm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
