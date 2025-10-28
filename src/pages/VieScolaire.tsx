import { Card } from "@/components/ui/card";
import { Palette, Music, Trophy, BookHeart, Globe, Code } from "lucide-react";

const activities = [
  {
    icon: Palette,
    title: "Arts Plastiques",
    description: "Développement de la créativité à travers la peinture, le dessin et la sculpture.",
    color: "text-secondary",
  },
  {
    icon: Music,
    title: "Musique & Chant",
    description: "Initiation aux instruments et formation d'une chorale scolaire.",
    color: "text-accent",
  },
  {
    icon: Trophy,
    title: "Sport",
    description: "Football, basketball, athlétisme et autres activités sportives.",
    color: "text-accent-warm",
  },
  {
    icon: Code,
    title: "Coding & Robotique",
    description: "Initiation à la programmation et aux nouvelles technologies.",
    color: "text-secondary",
  },
  {
    icon: BookHeart,
    title: "Club Lecture",
    description: "Découverte de la littérature et développement du goût de la lecture.",
    color: "text-accent",
  },
  {
    icon: Globe,
    title: "Langues",
    description: "Clubs d'anglais, d'arabe et d'autres langues vivantes.",
    color: "text-accent-warm",
  },
];

const events = [
  {
    period: "Septembre",
    title: "Rentrée Scolaire",
    description: "Cérémonie de rentrée et accueil des nouveaux élèves",
  },
  {
    period: "Novembre",
    title: "Journée Culturelle",
    description: "Célébration de la diversité culturelle avec spectacles et expositions",
  },
  {
    period: "Décembre",
    title: "Compétitions Sportives",
    description: "Tournois inter-classes et rencontres avec d'autres établissements",
  },
  {
    period: "Mars",
    title: "Journée Portes Ouvertes",
    description: "Visite de l'école et présentation des projets des élèves",
  },
  {
    period: "Mai",
    title: "Fête de l'Excellence",
    description: "Remise de prix et célébration des meilleurs résultats",
  },
  {
    period: "Juin",
    title: "Kermesse de Fin d'Année",
    description: "Grande fête avec jeux, spectacles et activités pour tous",
  },
];

const VieScolaire = () => {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-20 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
            Vie <span className="gradient-text">Scolaire</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Une vie scolaire riche et dynamique qui favorise l'épanouissement personnel,
            le développement des talents et la cohésion sociale.
          </p>
        </div>

        {/* Clubs & Activities */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Clubs et <span className="gradient-text">Ateliers</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((activity, index) => {
              const Icon = activity.icon;
              return (
                <Card
                  key={index}
                  className="group bg-card hover:border-secondary/50 transition-all duration-300 hover:scale-105 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="p-6 space-y-4">
                    <div className={`${activity.color}`}>
                      <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-background to-muted">
                        <Icon className="h-8 w-8" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-secondary transition-colors">
                      {activity.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {activity.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Events Timeline */}
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Événements <span className="gradient-text">Annuels</span>
          </h2>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-secondary via-accent to-accent-warm hidden md:block" />

            {/* Events */}
            <div className="space-y-8">
              {events.map((event, index) => (
                <div
                  key={index}
                  className="relative animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start space-x-6">
                    {/* Timeline Dot */}
                    <div className="hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-gradient-warm text-foreground font-bold text-sm shrink-0 shadow-lg z-10">
                      {event.period.substring(0, 3)}
                    </div>

                    {/* Content Card */}
                    <Card className="flex-1 glass p-6 hover:border-secondary/50 transition-all duration-300 hover:scale-105">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="text-xl font-bold text-foreground">{event.title}</h3>
                        <span className="text-sm font-semibold text-secondary md:hidden">
                          {event.period}
                        </span>
                      </div>
                      <p className="text-muted-foreground">{event.description}</p>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-20 max-w-5xl mx-auto">
          <Card className="glass p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Bien Plus qu'une École
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Au Groupe Scolaire Keur Khady Niane, nous croyons que l'éducation va au-delà des
              salles de classe. Nos activités parascolaires permettent à chaque élève de découvrir
              ses passions, de développer ses talents et de tisser des liens d'amitié durables dans
              un environnement bienveillant et stimulant.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default VieScolaire;
