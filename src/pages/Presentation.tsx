import { Card } from "@/components/ui/card";
import {
  Target,
  Eye,
  Heart,
  Award,
  Users,
  Shield,
  BookOpen,
  GraduationCap,
  Trophy,
} from "lucide-react";

// Importation des images réelles
import heroSchool from "../assets/hero-school.jpg";
import classe from "../assets/presentation/classe-primaire.png";
import lycee from "../assets/presentation/lycee.png";
import parents from "../assets/presentation/parents.png";
import sport from "../assets/presentation/sport.png";
import ceremonie from "../assets/presentation/ceremonie.png";


const Presentation = () => {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* SECTION HERO */}
        <section className="relative mb-16 overflow-hidden rounded-3xl shadow-lg">
          <img
            src={heroSchool}
            alt="Façade du Groupe Scolaire Keur Khady Niane"
            className="w-full h-[360px] md:h-[460px] object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
            <div className="max-w-3xl text-white">
              <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight">
                Présentation du{" "}
                <span className="text-accent">Groupe Scolaire Keur Khady Niane</span>
              </h1>
              <p className="mt-4 text-base md:text-lg text-white/85 leading-relaxed">
                Fondé en <strong>2003</strong> par <strong>Oustaz Ousseynou Faye</strong>, 
                le Groupe Scolaire Keur Khady Niane est un établissement privé sénégalais 
                de la <strong>Maternelle à la Terminale</strong>, dédié à l’excellence, 
                à la discipline et à la réussite de chaque élève.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION MISSION & VISION */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          <Card className="glass p-7 lg:col-span-2 hover:border-secondary/50 transition-all duration-300">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-br from-secondary/20 to-accent/20">
                <Target className="h-7 w-7 text-secondary" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Notre Mission
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Offrir à chaque élève un cadre d’apprentissage moderne, sécurisé et 
                  bienveillant, où le savoir, la discipline et les valeurs morales sont au cœur 
                  de la réussite. Nous accompagnons nos apprenants dans le développement de 
                  leurs compétences intellectuelles, sociales et spirituelles.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-accent/20 to-accent-warm/20">
                <Eye className="h-7 w-7 text-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Notre Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Être une référence nationale dans l’enseignement privé, 
                  reconnue pour la rigueur académique, la qualité de son encadrement et 
                  la formation d’élèves responsables, respectueux et performants, 
                  fiers de leur identité et ouverts sur le monde.
                </p>
              </div>
            </div>
          </Card>

          <Card className="overflow-hidden shadow-md">
            <img
              src={classe}
              alt="Salle de classe - Primaire"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </Card>
        </section>

        {/* SECTION PÉDAGOGIE */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-10">
            Une <span className="gradient-text">Pédagogie équilibrée</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: BookOpen,
                title: "Socles fondamentaux",
                text: "Maîtrise du français, des mathématiques, de la lecture et de l’expression orale.",
              },
              {
                icon: Users,
                title: "Encadrement personnalisé",
                text: "Un suivi rigoureux des élèves avec un dialogue permanent entre parents et enseignants.",
              },
              {
                icon: GraduationCap,
                title: "Réussite aux examens",
                text: "Préparation exigeante aux examens du CFEE, BFEM et BAC avec des taux de réussite élevés.",
              },
              {
                icon: Heart,
                title: "Valeurs morales",
                text: "Respect, discipline, responsabilité, solidarité et foi guident notre quotidien éducatif.",
              },
              {
                icon: Shield,
                title: "Sécurité & bienveillance",
                text: "Un environnement serein, encadré et adapté au rythme de chaque élève.",
              },
              {
                icon: Trophy,
                title: "Épanouissement global",
                text: "Promotion des talents à travers les activités culturelles, sportives et citoyennes.",
              },
            ].map(({ icon: Icon, title, text }, i) => (
              <Card
                key={i}
                className="group bg-card hover:border-secondary/50 transition-all hover:translate-y-[-2px]"
              >
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-background to-muted">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* SECTION MOSAÏQUE */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-10">
            Une <span className="gradient-text">vie scolaire active</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[lycee, parents, sport, ceremonie].map((src, idx) => (
              <div
                key={idx}
                className="relative overflow-hidden rounded-2xl shadow-md group"
              >
                <img
                  src={src}
                  alt="Activité scolaire"
                  className="w-full h-40 md:h-48 object-cover scale-100 transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          <p className="mt-4 text-center text-muted-foreground text-sm">
            Réunions parents-enseignants, compétitions sportives, cérémonies de distinctions et activités parascolaires enrichissent la vie du campus.
          </p>
        </section>

        {/* SECTION HISTOIRE — version enrichie */}
<section>
  <Card className="glass p-8 md:p-12">
    <h2 className="text-3xl font-bold text-foreground mb-6">
      Notre Histoire
    </h2>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Texte long à gauche */}
      <div className="lg:col-span-2 space-y-4 text-muted-foreground leading-relaxed">
        <p>
          En <strong>2003</strong>, <strong>Oustaz Ousseynou Faye</strong> fonde le
          <strong> Groupe Scolaire Keur Khady Niane</strong> avec une ambition claire :
          offrir aux familles une école privée exigeante, bienveillante et
          enracinée dans nos valeurs. Dès l’origine, l’établissement se distingue par
          la <em>discipline</em>, la <em>rigueur pédagogique</em> et l’attention portée à chaque élève.
        </p>

        <p>
          Au fil des années, l’école se structure progressivement : ouverture de
          la <strong>Maternelle</strong> puis du <strong>Primaire</strong>, consolidation du
          <strong> Collège</strong> et du <strong>Lycée</strong>. L’encadrement se renforce, les
          méthodes se modernisent, et la relation école–famille devient un pilier
          de la réussite. Notre approche vise des <strong>socles fondamentaux solides</strong>
          (lecture, expression, mathématiques) et une préparation efficace aux
          examens nationaux (<strong>CFEE</strong>, <strong>BFEM</strong>, <strong>BAC</strong>).
        </p>

        <p>
          Cette croissance s’accompagne d’une culture de l’exemplarité : 
          respect, assiduité, sens de l’effort, esprit de service. Les
          <strong> cérémonies de distinctions</strong> valorisent l’excellence et les progrès.
          Nombre de nos anciens poursuivent des études supérieures avec succès et
          s’engagent dans la vie professionnelle au Sénégal et à l’international.
        </p>

        <p>
          Aujourd’hui, le Groupe Scolaire Keur Khady Niane continue d’évoluer :
          amélioration continue des pratiques de classe, accompagnement
          individualisé, communication régulière avec les parents, et
          <strong> amélioration de l’environnement d’apprentissage</strong>. Notre ligne de force
          demeure la même : <strong>former des jeunes responsables, fiers de leur identité,
          performants et utiles à leur communauté</strong>.
        </p>
      </div>

      {/* visuel à droite */}
      <div className="rounded-2xl overflow-hidden shadow-lg">
        <img
          src={ceremonie}
          alt="Cérémonie de distinctions au Groupe Scolaire Keur Khady Niane"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
    </div>

    {/* Timeline des étapes clés */}
    <div className="mt-10">
      <h3 className="text-xl font-semibold text-foreground mb-4">
        Étapes clés
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            year: "2003",
            text:
              "Création de l’établissement par Oustaz Ousseynou Faye : lancement des premiers cycles et pose des fondamentaux (discipline, rigueur, valeurs).",
          },
          {
            year: "2008–2013",
            text:
              "Structuration des cycles Maternelle, Élémentaire, Collège ; renforcement de l’encadrement et des méthodes d’évaluation.",
          },
          {
            year: "2016–2019",
            text:
              "Consolidation du Lycée ; préparation intensive aux examens nationaux, accompagnement méthodologique et suivi famille–école.",
          },
          {
            year: "2020–2023",
            text:
              "Modernisation des pratiques pédagogiques, mise en place d’outils de suivi, amélioration de l’environnement d’apprentissage.",
          },
          {
            year: "2024–2025",
            text:
              "Pérennisation de la culture de la réussite : cérémonies de distinctions, communication renforcée avec les parents, orientations post-BAC.",
          },
          {
            year: "Aujourd’hui",
            text:
              "Un établissement de référence locale : excellence académique, encadrement, valeurs morales et ouverture à la communauté.",
          },
        ].map((item, i) => (
          <Card key={i} className="p-5 hover:border-secondary/50 transition-all">
            <div className="text-accent font-bold text-lg">{item.year}</div>
            <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{item.text}</p>
          </Card>
        ))}
      </div>
    </div>
  </Card>
</section>

      </div>
    </div>
  );
};

export default Presentation;
