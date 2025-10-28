import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Baby, BookOpen, GraduationCap } from "lucide-react";

const programs = [
  {
    icon: Baby,
    title: "Maternelle",
    age: "3-6 ans",
    description:
      "Éveil et développement harmonieux de l'enfant dans un environnement ludique et sécurisé.",
    features: [
      "Apprentissage par le jeu",
      "Développement psychomoteur",
      "Initiation au français et à l'anglais",
      "Activités artistiques et créatives",
      "Socialisation et autonomie",
    ],
    color: "text-secondary",
    bgGradient: "from-secondary/20 to-accent/10",
  },
  {
    icon: BookOpen,
    title: "Élémentaire",
    age: "6-11 ans",
    description:
      "Acquisition des fondamentaux académiques et développement des compétences clés.",
    features: [
      "Programme national renforcé",
      "Mathématiques et sciences",
      "Langues (français, anglais, arabe)",
      "Technologies numériques",
      "Sport et activités culturelles",
    ],
    color: "text-accent",
    bgGradient: "from-accent/20 to-accent-warm/10",
  },
  {
    icon: GraduationCap,
    title: "Collège",
    age: "11-16 ans",
    description:
      "Préparation rigoureuse aux examens nationaux et orientation vers l'excellence.",
    features: [
      "Préparation BFEM optimale",
      "Sciences et mathématiques avancées",
      "Langues vivantes renforcées",
      "Méthodologie et autonomie",
      "Orientation et conseil",
    ],
    color: "text-accent-warm",
    bgGradient: "from-accent-warm/20 to-secondary/10",
  },
];

const Programmes = () => {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-20 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
            Nos <span className="gradient-text">Programmes</span> Éducatifs
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Un parcours complet de la maternelle au collège, conçu pour garantir la réussite
            et l'épanouissement de chaque élève à chaque étape de son développement.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden bg-card hover:border-secondary/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${program.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative p-8 space-y-6">
                  {/* Icon & Badge */}
                  <div className="flex items-center justify-between">
                    <div className={`${program.color}`}>
                      <div className="p-4 rounded-2xl bg-gradient-to-br from-background to-muted">
                        <Icon className="h-12 w-12" />
                      </div>
                    </div>
                    <Badge variant="secondary" className="text-xs font-semibold">
                      {program.age}
                    </Badge>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-secondary transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {program.description}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 pt-4 border-t border-border">
                    {program.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div className={`w-1.5 h-1.5 rounded-full ${program.color.replace("text-", "bg-")}`} />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="max-w-5xl mx-auto">
          <Card className="glass p-8 md:p-12">
            <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
              Une Pédagogie <span className="gradient-text">Innovante</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Méthodes Modernes</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Nous combinons les meilleures pratiques pédagogiques internationales avec
                  le programme sénégalais pour offrir une éducation complète et équilibrée.
                  Nos enseignants utilisent des méthodes actives qui placent l'élève au centre
                  de son apprentissage.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Suivi Personnalisé</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Chaque élève bénéficie d'un suivi individualisé pour identifier ses forces
                  et ses axes d'amélioration. Nous organisons régulièrement des rencontres
                  avec les parents pour assurer une collaboration étroite dans la réussite de
                  l'enfant.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Programmes;
