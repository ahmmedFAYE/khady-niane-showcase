import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const articles = [
  {
    title: "Inscriptions 2024-2025 Ouvertes",
    date: "15 Janvier 2025",
    category: "Annonce",
    excerpt:
      "Nous sommes ravis d'annoncer l'ouverture des inscriptions pour l'année scolaire 2024-2025. Places limitées, inscrivez-vous dès maintenant !",
    readTime: "2 min",
  },
  {
    title: "Résultats Exceptionnels au BFEM 2024",
    date: "20 Juin 2024",
    category: "Académique",
    excerpt:
      "Nos élèves ont brillé aux examens du BFEM avec un taux de réussite exceptionnel de 98%. Félicitations à tous nos lauréats !",
    readTime: "3 min",
  },
  {
    title: "Nouvelle Salle Informatique",
    date: "10 Septembre 2024",
    category: "Infrastructure",
    excerpt:
      "Inauguration de notre nouvelle salle informatique équipée de 30 ordinateurs dernière génération pour préparer nos élèves au monde digital.",
    readTime: "2 min",
  },
  {
    title: "Journée Portes Ouvertes le 15 Mars",
    date: "1 Mars 2025",
    category: "Événement",
    excerpt:
      "Venez découvrir notre établissement, rencontrer nos enseignants et visiter nos installations lors de notre journée portes ouvertes.",
    readTime: "2 min",
  },
  {
    title: "Partenariat avec l'Université de Dakar",
    date: "5 Novembre 2024",
    category: "Partenariat",
    excerpt:
      "Signature d'un partenariat stratégique avec l'Université Cheikh Anta Diop pour faciliter la transition de nos élèves vers l'enseignement supérieur.",
    readTime: "4 min",
  },
  {
    title: "Compétition Inter-écoles de Robotique",
    date: "12 Décembre 2024",
    category: "Technologie",
    excerpt:
      "Notre équipe de robotique remporte la première place à la compétition nationale inter-écoles. Une fierté pour toute notre communauté !",
    readTime: "3 min",
  },
];

const Actualites = () => {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-20 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
            <span className="gradient-text">Actualités</span> & Événements
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Restez informés des dernières nouvelles, événements et réalisations de notre
            communauté scolaire.
          </p>
        </div>

        {/* Featured Article */}
        <div className="max-w-5xl mx-auto mb-12">
          <Card className="group overflow-hidden glass hover:border-secondary/50 transition-all duration-300 animate-fade-in-up">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-12">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <Badge variant="secondary" className="font-semibold">
                    À la Une
                  </Badge>
                  <Badge variant="outline">{articles[0].category}</Badge>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground group-hover:text-secondary transition-colors">
                  {articles[0].title}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {articles[0].excerpt}
                </p>
                <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-secondary" />
                    <span>{articles[0].date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-accent" />
                    <span>{articles[0].readTime}</span>
                  </div>
                </div>
                <Button variant="premium" size="lg">
                  Lire la Suite
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
              <div className="relative aspect-square md:aspect-auto rounded-xl overflow-hidden bg-gradient-soft">
                <div className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-secondary/20">
                  {new Date(articles[0].date).getDate()}
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Articles Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.slice(1).map((article, index) => (
              <Card
                key={index}
                className="group bg-card hover:border-secondary/50 transition-all duration-300 hover:scale-105 cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-6 space-y-4">
                  {/* Category Badge */}
                  <Badge variant="outline" className="font-semibold">
                    {article.category}
                  </Badge>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground group-hover:text-secondary transition-colors leading-tight">
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3 text-secondary" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3 text-accent" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Newsletter CTA */}
        <div className="max-w-4xl mx-auto mt-20">
          <Card className="glass p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Restez Connectés
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Suivez nos actualités sur les réseaux sociaux ou contactez-nous pour plus
              d'informations sur nos programmes et événements.
            </p>
            <Button variant="premium" size="lg">
              Nous Contacter
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Actualites;
