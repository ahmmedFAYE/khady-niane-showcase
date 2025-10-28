import { useState } from "react";
import { Card } from "@/components/ui/card";
import { X } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const images = [
  { src: gallery1, title: "Salle de Classe Moderne", category: "Académique" },
  { src: gallery2, title: "Activités Sportives", category: "Sport" },
  { src: gallery3, title: "Laboratoire de Sciences", category: "Académique" },
  { src: gallery4, title: "Cérémonie de Remise des Diplômes", category: "Événements" },
  { src: gallery5, title: "Atelier d'Arts Plastiques", category: "Activités" },
  { src: gallery6, title: "Salle Informatique", category: "Technologie" },
];

const Galerie = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-20 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
            Notre <span className="gradient-text">Galerie</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Découvrez en images la vie quotidienne de notre école, nos installations modernes
            et les moments forts de notre communauté scolaire.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden bg-card cursor-pointer hover:scale-105 transition-all duration-300 hover:shadow-2xl animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedImage(index)}
            >
              <div className="aspect-square relative">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                  <span className="text-xs font-semibold text-secondary uppercase tracking-wider mb-2">
                    {image.category}
                  </span>
                  <h3 className="text-lg font-bold text-foreground">{image.title}</h3>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 p-3 rounded-full bg-card/80 hover:bg-card transition-colors z-10"
              onClick={() => setSelectedImage(null)}
              aria-label="Close"
            >
              <X className="h-6 w-6 text-foreground" />
            </button>
            <div className="relative max-w-6xl w-full max-h-[90vh] animate-scale-in">
              <img
                src={images[selectedImage].src}
                alt={images[selectedImage].title}
                className="w-full h-full object-contain rounded-2xl"
                onClick={(e) => e.stopPropagation()}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-6 rounded-b-2xl">
                <p className="text-xs font-semibold text-secondary uppercase tracking-wider mb-1">
                  {images[selectedImage].category}
                </p>
                <p className="text-xl font-bold text-foreground">
                  {images[selectedImage].title}
                </p>
              </div>
              {/* Navigation */}
              <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none">
                {selectedImage > 0 && (
                  <button
                    className="pointer-events-auto p-3 rounded-full bg-card/80 hover:bg-card transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedImage(selectedImage - 1);
                    }}
                  >
                    ←
                  </button>
                )}
                {selectedImage < images.length - 1 && (
                  <button
                    className="pointer-events-auto p-3 rounded-full bg-card/80 hover:bg-card transition-colors ml-auto"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedImage(selectedImage + 1);
                    }}
                  >
                    →
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Galerie;
