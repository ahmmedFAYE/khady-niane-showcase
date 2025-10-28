import { Card } from "@/components/ui/card";
import { Target, Eye, Heart, Award } from "lucide-react";

const Presentation = () => {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-20 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
            Présentation de Notre <span className="gradient-text">École</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Depuis 2003, le Groupe Scolaire Keur Khady Niane s'engage à offrir une éducation
            d'excellence qui forme des citoyens éclairés, responsables et performants.
          </p>
        </div>

        {/* Mission */}
        <div className="max-w-5xl mx-auto mb-16 animate-fade-in-up">
          <Card className="glass p-8 md:p-12 hover:border-secondary/50 transition-all duration-300">
            <div className="flex items-start space-x-4 mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-br from-secondary/20 to-accent/20">
                <Target className="h-8 w-8 text-secondary" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Notre Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Former des élèves compétents et épanouis, capables de réussir leurs études
                  supérieures et de contribuer positivement à la société sénégalaise et
                  internationale. Nous nous engageons à développer l'excellence académique,
                  les compétences du 21e siècle et les valeurs morales chez chaque élève.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Vision */}
        <div className="max-w-5xl mx-auto mb-16 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
          <Card className="glass p-8 md:p-12 hover:border-accent/50 transition-all duration-300">
            <div className="flex items-start space-x-4 mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-br from-accent/20 to-accent-warm/20">
                <Eye className="h-8 w-8 text-accent" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Notre Vision</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Être l'établissement de référence au Sénégal pour l'excellence éducative,
                  reconnu pour la qualité de son enseignement, l'innovation pédagogique et
                  la réussite exceptionnelle de ses élèves. Nous aspirons à former les leaders
                  de demain qui transformeront positivement leur communauté et le monde.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Nos <span className="gradient-text">Valeurs</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Award,
                title: "Excellence",
                description: "Viser la perfection dans tous les domaines académiques et personnels.",
                color: "text-secondary",
              },
              {
                icon: Heart,
                title: "Intégrité",
                description: "Agir avec honnêteté, respect et responsabilité en toutes circonstances.",
                color: "text-accent",
              },
              {
                icon: Target,
                title: "Innovation",
                description: "Adopter des méthodes pédagogiques modernes et créatives.",
                color: "text-accent-warm",
              },
              {
                icon: Eye,
                title: "Bienveillance",
                description: "Créer un environnement d'apprentissage chaleureux et inclusif.",
                color: "text-secondary",
              },
            ].map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="group bg-card hover:border-secondary/50 transition-all duration-300 hover:scale-105 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="p-6 text-center space-y-4">
                    <div className={`${value.color} flex justify-center`}>
                      <div className="p-4 rounded-xl bg-gradient-to-br from-background to-muted">
                        <Icon className="h-10 w-10" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{value.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* History */}
        <div className="max-w-5xl mx-auto">
          <Card className="glass p-8 md:p-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Notre Histoire</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Fondé en <span className="text-secondary font-semibold">2003</span>, le Groupe
                Scolaire Keur Khady Niane est né de la volonté de ses fondateurs d'offrir aux
                familles sénégalaises une éducation de qualité internationale, ancrée dans les
                valeurs africaines.
              </p>
              <p>
                Au fil des années, notre établissement s'est développé pour devenir l'un des
                piliers de l'éducation au Sénégal, accueillant aujourd'hui plus de 500 élèves
                de la maternelle au collège. Notre taux de réussite exceptionnel de 98% aux
                examens nationaux témoigne de l'excellence de notre approche pédagogique.
              </p>
              <p>
                Aujourd'hui, nous sommes fiers de compter parmi nos anciens élèves de nombreux
                professionnels qui excellent dans divers domaines et qui contribuent au
                développement du Sénégal et du monde.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
