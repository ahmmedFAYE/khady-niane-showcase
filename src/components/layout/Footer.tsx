import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/logo.png";

const currentYear = new Date().getFullYear();

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3">
              <img
                src={logo}
                alt="Groupe Scolaire Keur Khady Niane"
                className="h-12 w-12 object-contain"
              />
              <div>
                <div className="text-base font-bold text-foreground">
                  Groupe Scolaire
                </div>
                <div className="text-sm gradient-text font-semibold">Keur Khady Niane</div>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground">
              Excellence académique et formation de qualité depuis 2003. Former les leaders de demain.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-lg bg-foreground/5 hover:bg-secondary/20 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-lg bg-foreground/5 hover:bg-secondary/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-lg bg-foreground/5 hover:bg-secondary/20 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/presentation"
                  className="text-sm text-muted-foreground hover:text-secondary transition-colors"
                >
                  Présentation
                </Link>
              </li>
              <li>
                <Link
                  to="/programmes"
                  className="text-sm text-muted-foreground hover:text-secondary transition-colors"
                >
                  Programmes
                </Link>
              </li>
              <li>
                <Link
                  to="/vie-scolaire"
                  className="text-sm text-muted-foreground hover:text-secondary transition-colors"
                >
                  Vie Scolaire
                </Link>
              </li>
              <li>
                <Link
                  to="/actualites"
                  className="text-sm text-muted-foreground hover:text-secondary transition-colors"
                >
                  Actualités
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-muted-foreground hover:text-secondary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Nos Programmes</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">Maternelle</li>
              <li className="text-sm text-muted-foreground">Élémentaire</li>
              <li className="text-sm text-muted-foreground">Collège</li>
              <li className="text-sm text-muted-foreground">Activités Parascolaires</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                <span className="text-sm text-muted-foreground">
                  Dakar, Sénégal
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-secondary shrink-0" />
                <a
                  href="tel:+221123456789"
                  className="text-sm text-muted-foreground hover:text-secondary transition-colors"
                >
                  +221 12 345 67 89
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-secondary shrink-0" />
                <a
                  href="mailto:contact@keurkhady.sn"
                  className="text-sm text-muted-foreground hover:text-secondary transition-colors"
                >
                  contact@keurkhady.sn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © 2003-{currentYear} Groupe Scolaire Keur Khady Niane. Tous droits réservés.
            </p>
            <div className="flex space-x-6">
              <Link
                to="/apropos"
                className="text-sm text-muted-foreground hover:text-secondary transition-colors"
              >
                À Propos
              </Link>
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-secondary transition-colors"
              >
                Mentions Légales
              </a>
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-secondary transition-colors"
              >
                Politique de Confidentialité
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
