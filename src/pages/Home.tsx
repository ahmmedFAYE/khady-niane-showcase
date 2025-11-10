import { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  BookOpen,
  Users,
  School,
  Calendar,
  Award,
  Mail,
  MessageSquare,
  User,
  GraduationCap,
  Heart,
} from "lucide-react";

// ⚠️ Si l'alias "@" n'est pas configuré, remplacez par "../assets/home/xxx.png"
import heroImage from "@/assets/home/hero.png";
import cour from "@/assets/home/cour.png";
import classe from "@/assets/home/classe.png";
import sport from "@/assets/home/sport.png";
import ceremonie from "@/assets/home/ceremonie.png";

const Home = () => {
  // ----------------- Témoignages (avec icônes + auto-slide + animation) -----------------
  type Testimonial = {
    quote: string;
    author: string;
    role: "parent" | "eleve" | "famille";
    icon: any;
  };

  const testimonials = useMemo<Testimonial[]>(
    () => [
      {
        quote:
          "Une école sérieuse qui accompagne réellement les enfants. La discipline et le suivi font toute la différence.",
        author: "Parent d’élève — Primaire",
        role: "parent",
        icon: User,
      },
      {
        quote:
          "J’ai progressé en expression écrite et en méthodologie. Je me sens prêt pour le BAC.",
        author: "Élève — Terminale",
        role: "eleve",
        icon: GraduationCap,
      },
      {
        quote:
          "La relation école–famille est fluide. On sait où va l’enfant, étape par étape.",
        author: "Parent d’élève — Collège",
        role: "famille",
        icon: Heart,
      },
    ],
    []
  );

  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState<"enter" | "leave" | null>(null);
  const slideTimer = useRef<number | null>(null);

  // Auto-rotation
  useEffect(() => {
    const start = () => {
      slideTimer.current = window.setInterval(() => {
        setAnimating("leave");
        // laisse le temps à l'animation de sortie
        setTimeout(() => {
          setActive((i) => (i + 1) % testimonials.length);
          setAnimating("enter");
          // repasse à neutre après l'entrée
          setTimeout(() => setAnimating(null), 350);
        }, 350);
      }, 4500);
    };
    start();
    return () => {
      if (slideTimer.current) window.clearInterval(slideTimer.current);
    };
  }, [testimonials.length]);

  // Style d'animation (fade + slide)
  const slideClass =
    animating === "leave"
      ? "opacity-0 translate-y-2"
      : animating === "enter"
      ? "opacity-0 -translate-y-2 animate-[fadeInUp_0.35s_ease-out_forwards]"
      : "opacity-100 translate-y-0";

  // Couleur de pastille selon le rôle
  const badgeClass = (role: Testimonial["role"]) =>
    role === "parent"
      ? "bg-secondary/20"
      : role === "eleve"
      ? "bg-accent/20"
      : "bg-accent/10";

  return (
    <div className="min-h-screen bg-background">
      {/* ====================== HERO ====================== */}
      <section
        className="relative h-[80vh] md:h-[85vh] flex items-center justify-center bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${heroImage})` }}
        aria-label="Hero – Façade de l’école"
      >
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl sm:text-6xl font-extrabold mb-6 leading-tight">
            Bienvenue au{" "}
            <span className="text-secondary">Groupe Scolaire Keur Khady Niane</span>
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-white/90">
            De la <strong>Maternelle</strong> à la <strong>Terminale</strong>, une éducation
            exigeante, bienveillante et ancrée dans nos valeurs — fondée en 2003 par
            <strong> Oustaz Ousseynou Faye</strong>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="premium" asChild>
              <Link to="/presentation">
                Découvrir l’école <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/contact">Nous contacter</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* =============== ENGAGEMENTS (3 cartes image) =============== */}
      <section className="py-20 bg-muted/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-14">
            Nos <span className="gradient-text">Engagements</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                img: classe,
                title: "Excellence académique",
                desc: "Suivi exigeant, méthodes structurées et préparation efficace aux examens nationaux.",
                icon: BookOpen,
              },
              {
                img: sport,
                title: "Épanouissement global",
                desc: "Talents sportifs, artistiques et citoyens dans un cadre serein et encadré.",
                icon: Users,
              },
              {
                img: ceremonie,
                title: "Valeurs & discipline",
                desc: "Respect, responsabilité et assiduité — la base de notre réussite collective.",
                icon: Award,
              },
            ].map(({ img, title, desc, icon: Icon }, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden shadow-xl bg-card group hover:translate-y-[-4px] transition-transform"
              >
                <div className="relative">
                  <img
                    src={img}
                    alt={title}
                    className="h-56 w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 p-2 rounded-xl bg-black/45 backdrop-blur">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-foreground">{title}</h3>
                  <p className="text-muted-foreground">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CYCLES / PROGRAMMES ==================== */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4 mb-10">
            <h2 className="text-4xl font-bold">
              Nos <span className="gradient-text">Cycles</span>
            </h2>
            <Button variant="outline" asChild>
              <Link to="/programmes">Tout voir</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                title: "Maternelle",
                points: ["Éveil, langage, motricité", "Rythme adapté et bienveillance"],
              },
              {
                title: "Élémentaire",
                points: ["Socles fondamentaux solides", "Lecture, expression, calcul"],
              },
              {
                title: "Collège",
                points: ["Méthodologie & autonomie", "Prépa CFEE / BFEM structurée"],
              },
              {
                title: "Lycée",
                points: ["Exigence & orientation", "Prépa BAC et post-BAC"],
              },
            ].map(({ title, points }, i) => (
              <div
                key={i}
                className="glass p-6 rounded-2xl hover:border-secondary/50 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <School className="h-6 w-6 text-accent" />
                  <h3 className="text-xl font-semibold text-foreground">{title}</h3>
                </div>
                <ul className="space-y-2">
                  {points.map((p, j) => (
                    <li key={j} className="flex items-start gap-2 text-muted-foreground">
                      <CheckCircle2 className="h-5 w-5 mt-0.5 text-secondary" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== STATS ILLUSTRÉES ==================== */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Quelques <span className="gradient-text">Chiffres Clés</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
            {[
              { number: "500+", label: "Élèves accompagnés", img: cour },
              { number: "98%", label: "Réussite (sessions récentes)", img: ceremonie },
              { number: "20+", label: "Années d’expérience", img: classe },
            ].map(({ number, label, img }, i) => (
              <div key={i} className="relative rounded-2xl overflow-hidden group">
                <img
                  src={img}
                  alt={label}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white">
                  <div className="text-4xl font-extrabold">{number}</div>
                  <div className="text-lg">{label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA central */}
          <div className="max-w-4xl mx-auto text-center space-y-8 glass rounded-3xl p-10">
            <h3 className="text-3xl sm:text-4xl font-bold text-foreground">
              Prêt à Rejoindre Notre Communauté ?
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Donnez à votre enfant les meilleures chances de réussir dans un cadre
              stimulant et bienveillant. Les inscriptions pour l’année actuelle sont ouvertes.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" variant="premium" asChild>
                <Link to="/contact">
                  Contactez-nous <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/presentation">Découvrir l’école</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== ADMISSIONS – 3 ÉTAPES ==================== */}
      <section className="py-20 bg-muted/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4 mb-10">
            <h2 className="text-4xl font-bold">
              Admissions <span className="gradient-text">2024–2025</span>
            </h2>
            <Button asChild>
              <Link to="/contact">Déposer une demande</Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Calendar,
                title: "1. Prise de contact",
                text: "Remplissez le formulaire (Formspree) depuis la page Contact.",
              },
              {
                icon: Users,
                title: "2. Entretien & dossier",
                text: "Échanges avec la famille, vérification des pièces et du niveau.",
              },
              {
                icon: Award,
                title: "3. Inscription",
                text: "Validation administrative et intégration de l’élève par cycle.",
              },
            ].map(({ icon: Icon, title, text }, i) => (
              <div key={i} className="glass p-6 rounded-2xl hover:border-accent/40 transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <Icon className="h-6 w-6 text-accent" />
                  <h3 className="text-xl font-semibold text-foreground">{title}</h3>
                </div>
                <p className="text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== TÉMOIGNAGES (icônes + animation) ==================== */}
      <section className="py-20 bg-muted/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            Ils <span className="gradient-text">témoignent</span>
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="relative glass rounded-3xl p-10 md:p-12 text-center shadow-lg">
              {/* Icône */}
              <div className="flex justify-center mb-6">
                <div className={`p-4 rounded-full ${badgeClass(testimonials[active].role)}`}>
                  {(() => {
                    const Icon = testimonials[active].icon || MessageSquare;
                    return <Icon className="h-10 w-10 text-accent" />;
                  })()}
                </div>
              </div>

              {/* Texte animé */}
              <div
                className={`transition-all duration-300 will-change-transform ${slideClass}`}
                key={active}
              >
                <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-4 italic">
                  “{testimonials[active].quote}”
                </p>
                <div className="text-muted-foreground font-medium">
                  — {testimonials[active].author}
                </div>
              </div>

              {/* Bullets navigation */}
              <div className="mt-6 flex items-center justify-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setAnimating("leave");
                      setTimeout(() => {
                        setActive(i);
                        setAnimating("enter");
                        setTimeout(() => setAnimating(null), 350);
                      }, 350);
                    }}
                    className={`h-2.5 rounded-full transition-all ${
                      i === active ? "bg-accent w-6" : "bg-muted w-2.5"
                    }`}
                    aria-label={`Aller au témoignage ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FAQ ==================== */}
      <section className="py-20 bg-muted/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">FAQ</h2>

          <div className="max-w-4xl mx-auto space-y-4">
            {[
              {
                q: "Quels cycles proposez-vous ?",
                a: "Maternelle, Élémentaire, Collège et Lycée. Chaque cycle bénéficie d’un encadrement spécifique et d’objectifs clairs.",
              },
              {
                q: "Comment se déroule l’inscription ?",
                a: "Remplissez d’abord le formulaire de contact. Nous organisons ensuite un entretien et vérifions les pièces du dossier avant validation.",
              },
              {
                q: "Comment contacter l’établissement ?",
                a: "Via la page Contact : formulaire (Formspree), téléphone et e-mail. Nous répondons rapidement.",
              },
            ].map(({ q, a }, i) => (
              <details
                key={i}
                className="group rounded-2xl bg-card border p-5 open:shadow-md transition-all"
              >
                <summary className="flex cursor-pointer items-center justify-between text-left">
                  <span className="font-semibold text-foreground">{q}</span>
                  <span className="ml-4 text-muted-foreground group-open:hidden">+</span>
                  <span className="ml-4 text-muted-foreground hidden group-open:inline">−</span>
                </summary>
                <p className="mt-3 text-muted-foreground">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== BANDE CONTACT ==================== */}
      <section className="py-14">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                Une question ? Besoin d’informations ?
              </h3>
              <p className="text-muted-foreground">
                Notre équipe est à votre écoute. Contactez-nous pour les démarches
                d’inscription et les visites de l’établissement.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 items-center">
              <Button variant="outline" asChild>
                <Link to="/contact">
                  <Mail className="mr-2 h-5 w-5" />
                  Envoyer un email
                </Link>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full bg-[#25D366] text-white hover:bg-[#1EBE5D] border-transparent"
                asChild
              >
                <a
                  href="https://wa.me/770902566"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Contact WhatsApp"
                >
                  <MessageSquare className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
