import { Card } from "@/components/ui/card";
import { Users, Award, Heart, Target } from "lucide-react";

const team = [
  {
    name: "Dr. Amadou Diallo",
    role: "Directeur Général",
    description: "30 ans d'expérience dans l'éducation, Docteur en Sciences de l'Éducation",
  },
  {
    name: "Mme. Fatou Seck",
    role: "Directrice Pédagogique",
    description: "Spécialiste en innovation pédagogique, 20 ans d'expérience",
  },
  {
    name: "M. Ibrahima Fall",
    role: "Responsable du Collège",
    description: "Expert en préparation aux examens nationaux",
  },
  {
    name: "Mme. Aïcha Ndiaye",
    role: "Coordinatrice Maternelle & Élémentaire",
    description: "Spécialisée en pédagogie de la petite enfance",
  },
];

const partners = [
  "Université Cheikh Anta Diop",
  "Ministère de l'Éducation Nationale",
  "Institut Français de Dakar",
  "British Council Sénégal",
  "Alliance Française",
  "Fondation Orange",
];

const APropos = () => {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-20 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
            À <span className="gradient-text">Propos</span> de Nous
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Découvrez l'équipe passionnée et les partenaires qui font la force du Groupe
            Scolaire Keur Khady Niane.
          </p>
        </div>

        {/* Director's Message */}
        <div className="max-w-5xl mx-auto mb-20">
          <Card className="glass p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="shrink-0">
                <div className="w-32 h-32 rounded-full bg-gradient-warm flex items-center justify-center text-4xl font-bold text-foreground">
                  AD
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-2">Mot du Directeur</h2>
                  <p className="text-secondary font-semibold">Dr. Amadou Diallo</p>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Chers parents, chers élèves, chers partenaires,
                  </p>
                  <p>
                    C'est avec un immense plaisir que je vous accueille au Groupe Scolaire Keur
                    Khady Niane. Depuis notre création en 2003, nous avons placé l'excellence
                    éducative et l'épanouissement de chaque élève au cœur de notre mission.
                  </p>
                  <p>
                    Notre engagement est simple mais ambitieux : former des citoyens éclairés,
                    compétents et responsables, capables de relever les défis de notre époque
                    tout en restant ancrés dans nos valeurs culturelles et morales.
                  </p>
                  <p>
                    Nos résultats exceptionnels, avec un taux de réussite de 98% aux examens
                    nationaux, témoignent du dévouement de notre équipe pédagogique et de
                    l'engagement de nos élèves. Mais au-delà des chiffres, c'est le sourire
                    de nos élèves et leur épanouissement qui sont notre plus belle récompense.
                  </p>
                  <p>
                    Je vous invite à rejoindre notre grande famille et à contribuer ensemble
                    à former les leaders de demain.
                  </p>
                  <p className="font-semibold text-foreground">
                    Cordialement,<br />
                    Dr. Amadou Diallo<br />
                    Directeur Général
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Leadership Team */}
        <div className="max-w-6xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Notre <span className="gradient-text">Équipe</span> Dirigeante
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {team.map((member, index) => (
              <Card
                key={index}
                className="group bg-card hover:border-secondary/50 transition-all duration-300 hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-6 space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-warm flex items-center justify-center text-2xl font-bold text-foreground shrink-0">
                      {member.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-secondary transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-sm text-accent font-semibold">{member.role}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Core Values */}
        <div className="max-w-5xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Nos <span className="gradient-text">Valeurs</span> Fondamentales
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Award, title: "Excellence", color: "text-secondary" },
              { icon: Heart, title: "Bienveillance", color: "text-accent" },
              { icon: Target, title: "Innovation", color: "text-accent-warm" },
              { icon: Users, title: "Communauté", color: "text-secondary" },
            ].map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="bg-card p-6 text-center hover:border-secondary/50 transition-all duration-300 hover:scale-105"
                >
                  <div className={`${value.color} flex justify-center mb-4`}>
                    <div className="p-4 rounded-xl bg-gradient-to-br from-background to-muted">
                      <Icon className="h-10 w-10" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{value.title}</h3>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Partners */}
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Nos <span className="gradient-text">Partenaires</span>
          </h2>
          <Card className="glass p-8 md:p-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center p-4 rounded-lg bg-muted/10 hover:bg-muted/20 transition-colors text-center"
                >
                  <p className="text-sm font-semibold text-foreground">{partner}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default APropos;
