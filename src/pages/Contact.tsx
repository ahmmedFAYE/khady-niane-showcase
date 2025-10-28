import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Contact = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        navigate("/merci");
      } else {
        toast.error("Une erreur s'est produite. Veuillez réessayer.");
      }
    } catch (error) {
      toast.error("Impossible d'envoyer le message. Vérifiez votre connexion.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-20 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
            <span className="gradient-text">Contactez</span>-Nous
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Nous sommes à votre écoute pour répondre à toutes vos questions concernant
            les inscriptions, nos programmes et notre établissement.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="glass p-6 hover:border-secondary/50 transition-all duration-300 animate-fade-in-up">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-secondary/20 to-accent/20 shrink-0">
                  <MapPin className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Adresse</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Rue 123, Quartier Exemple<br />
                    Dakar, Sénégal<br />
                    BP 12345
                  </p>
                </div>
              </div>
            </Card>

            <Card className="glass p-6 hover:border-secondary/50 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-accent/20 to-accent-warm/20 shrink-0">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Téléphone</h3>
                  <p className="text-sm text-muted-foreground">
                    +221 12 345 67 89<br />
                    +221 98 765 43 21
                  </p>
                </div>
              </div>
            </Card>

            <Card className="glass p-6 hover:border-secondary/50 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-accent-warm/20 to-secondary/20 shrink-0">
                  <Mail className="h-6 w-6 text-accent-warm" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Email</h3>
                  <p className="text-sm text-muted-foreground">
                    contact@keurkhady.sn<br />
                    info@keurkhady.sn
                  </p>
                </div>
              </div>
            </Card>

            <Card className="glass p-6 hover:border-secondary/50 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: "300ms" }}>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-secondary/20 to-accent/20 shrink-0">
                  <Clock className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Horaires</h3>
                  <p className="text-sm text-muted-foreground">
                    Lundi - Vendredi<br />
                    8h00 - 17h00<br />
                    Samedi: 9h00 - 13h00
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="glass p-8 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Envoyez-nous un Message
              </h2>
              <form
                action="https://formspree.io/f/YOUR_FORM_ID"
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* Anti-bot field (hidden) */}
                <input type="text" name="_gotcha" style={{ display: "none" }} />
                
                {/* Redirect after success */}
                <input type="hidden" name="_redirect" value={`${window.location.origin}/merci`} />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="nom">Nom Complet *</Label>
                    <Input
                      id="nom"
                      name="nom"
                      type="text"
                      placeholder="Votre nom"
                      required
                      className="bg-background/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="votre@email.com"
                      required
                      className="bg-background/50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="telephone">Téléphone *</Label>
                    <Input
                      id="telephone"
                      name="telephone"
                      type="tel"
                      placeholder="+221 XX XXX XX XX"
                      required
                      className="bg-background/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="objet">Objet *</Label>
                    <Input
                      id="objet"
                      name="objet"
                      type="text"
                      placeholder="Sujet de votre message"
                      required
                      className="bg-background/50"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Écrivez votre message ici..."
                    rows={6}
                    required
                    className="bg-background/50 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  variant="premium"
                  disabled={isSubmitting}
                  className="w-full md:w-auto"
                >
                  {isSubmitting ? "Envoi en cours..." : "Envoyer le Message"}
                </Button>

                <p className="text-xs text-muted-foreground">
                  * Champs obligatoires. Vos données sont protégées et ne seront pas partagées.
                </p>
              </form>
            </Card>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="max-w-6xl mx-auto mt-12">
          <Card className="glass overflow-hidden h-96">
            <div className="w-full h-full bg-gradient-soft flex items-center justify-center">
              <div className="text-center space-y-4">
                <MapPin className="h-16 w-16 text-secondary mx-auto" />
                <p className="text-lg font-semibold text-foreground">Notre Emplacement</p>
                <p className="text-sm text-muted-foreground max-w-md">
                  Venez nous rendre visite à Dakar, Sénégal. Nous serons ravis de vous accueillir
                  et de vous faire découvrir notre établissement.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
