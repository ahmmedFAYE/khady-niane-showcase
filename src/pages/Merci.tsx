import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Home, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Merci = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 flex items-center justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <Card className="glass p-12 text-center space-y-8 animate-scale-in">
            {/* Success Icon */}
            <div className="flex justify-center">
              <div className="p-6 rounded-full bg-gradient-to-br from-secondary/20 to-accent/20 animate-glow">
                <CheckCircle className="h-24 w-24 text-secondary" />
              </div>
            </div>

            {/* Title */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                Message Envoyé avec <span className="gradient-text">Succès</span> !
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg mx-auto leading-relaxed">
                Merci pour votre message. Notre équipe vous répondra dans les plus brefs délais,
                généralement sous 24 heures ouvrables.
              </p>
            </div>

            {/* Additional Info */}
            <div className="pt-6 border-t border-border">
              <div className="flex items-center justify-center space-x-3 text-muted-foreground">
                <Mail className="h-5 w-5 text-accent" />
                <p className="text-sm">
                  Vous recevrez également une copie de votre message par email
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button size="lg" variant="premium" asChild>
                <Link to="/">
                  <Home className="mr-2 h-5 w-5" />
                  Retour à l'Accueil
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/programmes">
                  Découvrir nos Programmes
                </Link>
              </Button>
            </div>

            {/* Contact Info */}
            <div className="pt-8 space-y-2">
              <p className="text-sm font-semibold text-foreground">
                Besoin d'une réponse urgente ?
              </p>
              <p className="text-sm text-muted-foreground">
                Appelez-nous au{" "}
                <a
                  href="tel:+221123456789"
                  className="text-secondary hover:underline font-semibold"
                >
                  +221 12 345 67 89
                </a>
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Merci;
