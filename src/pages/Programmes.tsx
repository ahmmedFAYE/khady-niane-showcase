import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Baby,
  BookOpen,
  GraduationCap,
  School,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

// ⚠️ Si l'alias "@" n'est pas configuré dans vite.config.ts, utilise "../assets/programmes/hero.png"
import heroImg from "../assets/home/hero4.png";

type Program = {
  icon: any;
  title: string;
  age: string;
  description: string;
  features: string[];
  color: string; // ex: "text-secondary"
  bgGradient: string; // ex: "from-secondary/20 to-accent/10"
};

const programs: Program[] = [
  {
    icon: Baby,
    title: "Maternelle",
    age: "3–6 ans",
    description:
      "Éveil et développement harmonieux dans un environnement ludique, sécurisé et bienveillant.",
    features: [
      "Apprentissage par le jeu",
      "Développement psychomoteur",
      "Initiation au français & anglais",
      "Activités artistiques et créatives",
      "Socialisation & autonomie",
    ],
    color: "text-secondary",
    bgGradient: "from-secondary/20 to-accent/10",
  },
  {
    icon: BookOpen,
    title: "Élémentaire",
    age: "6–11 ans",
    description:
      "Acquisition solide des fondamentaux et développement des compétences clés.",
    features: [
      "Programme national renforcé",
      "Mathématiques & sciences",
      "Langues (français, anglais, arabe)",
      "Technologies numériques",
      "Sport & activités culturelles",
    ],
    color: "text-accent",
    bgGradient: "from-accent/20 to-accent-warm/10",
  },
  {
    icon: GraduationCap,
    title: "Collège",
    age: "11–16 ans",
    description:
      "Préparation rigoureuse aux examens et construction de l’autonomie.",
    features: [
      "Préparation optimale BFEM",
      "Sciences & mathématiques avancées",
      "Langues vivantes renforcées",
      "Méthodologie & autonomie",
      "Orientation progressive",
    ],
    color: "text-accent-warm",
    bgGradient: "from-accent-warm/20 to-secondary/10",
  },
  {
    icon: School,
    title: "Lycée",
    age: "16–19 ans",
    description:
      "Exigence, excellence et orientation post-bac pour réussir l’entrée dans le supérieur.",
    features: [
      "Préparation intensive BAC",
      "Méthodologie & gestion du temps",
      "Entraînements & sujets d’examens",
      "Accompagnement à l’orientation",
      "Dossiers post-BAC (parcours & choix)",
    ],
    color: "text-secondary",
    bgGradient: "from-secondary/20 to-accent/10",
  },
];

const Programmes = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* ========= HERO visuel ========= */}
      <section
        className="relative h-[42vh] sm:h-[50vh] md:h-[56vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImg})` }}
        aria-label="Programmes – image de couverture"
      >
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">
            Nos <span className="text-secondary">Programmes</span> Éducatifs
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            De la Maternelle au Lycée, un parcours continu et exigeant pour
            développer les compétences académiques, humaines et citoyennes.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-20">
        {/* ========= Intro courte ========= */}
        <div className="max-w-4xl mx-auto text-center mb-12 animate-fade-in">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Nos cycles s’articulent autour d’une pédagogie moderne et d’un suivi
            attentif, afin d’assurer la réussite et l’épanouissement de chaque élève.
          </p>
        </div>

        {/* ========= Grid des Programmes ========= */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden bg-card hover:border-secondary/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl animate-fade-in-up"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                {/* Gradient hover background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${program.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
                <div className="relative p-8 space-y-6">
                  {/* Header */}
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

                  {/* Features */}
                  <div className="space-y-3 pt-4 border-t border-border">
                    {program.features.map((feature, i) => (
                      <div key={i} className="flex items-center space-x-3">
                        <div
                          className={`w-1.5 h-1.5 rounded-full ${program.color.replace(
                            "text-",
                            "bg-"
                          )}`}
                        />
                        <span className="text-sm text-muted-foreground">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* ========= Encadré pédagogique ========= */}
        <div className="max-w-5xl mx-auto mb-16">
          <Card className="glass p-8 md:p-12">
            <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
              Une Pédagogie <span className="gradient-text">Innovante</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">
                  Méthodes Modernes
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Nous combinons les meilleures pratiques pédagogiques internationales
                  avec le programme sénégalais : cours structurés, entraînements
                  réguliers, évaluations formatives et remédiations ciblées.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">
                  Suivi Personnalisé
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Un accompagnement attentif de chaque élève : bilans périodiques,
                  entretiens famille–école, conseils d’orientation et soutien méthodologique.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* ========= CTA inscription ========= */}
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-10 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              Prêt à inscrire votre enfant ?
            </h3>
            <p className="text-muted-foreground mt-2 mb-6">
              Contactez-nous pour connaître les modalités d’admission et les places disponibles.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-xl px-6 py-3 bg-secondary text-secondary-foreground font-semibold hover:opacity-90 transition-opacity"
            >
              Déposer une demande <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Programmes;
