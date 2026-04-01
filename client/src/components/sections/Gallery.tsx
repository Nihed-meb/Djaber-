import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

/**
 * Gallery Section - Galerie de photos
 * Design: Grille masonry avec lightbox
 * - Navigation fluide
 * - Animations au scroll
 */
export default function Gallery() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  // 9 photos pour la galerie
  const images = [
    {
      id: 1,
      src: "https://res.cloudinary.com/doc0kcfdm/image/upload/ar_1:1,b_gen_fill,c_pad/e_enhance/r_20/5_mzpf3e",
      alt: "Photo 1",
    },
    {
      id: 2,
      src: "https://res.cloudinary.com/doc0kcfdm/image/upload/ar_1:1,b_gen_fill,c_pad/e_enhance/r_20/5_mzpf3e",
      alt: "Photo 2",
    },
    {
      id: 3,
      src: "https://res.cloudinary.com/doc0kcfdm/image/upload/ar_1:1,b_gen_fill,c_pad/e_enhance/r_20/5_mzpf3e",
      alt: "Photo 3",
    },
    {
      id: 4,
      src: "https://res.cloudinary.com/doc0kcfdm/image/upload/ar_1:1,b_gen_fill,c_pad/e_enhance/r_20/5_mzpf3e",
      alt: "Photo 4",
    },
    {
      id: 5,
      src: "https://res.cloudinary.com/doc0kcfdm/image/upload/ar_1:1,b_gen_fill,c_pad/e_enhance/r_20/5_mzpf3e",
      alt: "Photo 5",
    },
    {
      id: 6,
      src: "https://res.cloudinary.com/doc0kcfdm/image/upload/ar_1:1,b_gen_fill,c_pad/e_enhance/r_20/5_mzpf3e",
      alt: "Photo 6",
    },
    {
      id: 7,
      src: "https://res.cloudinary.com/doc0kcfdm/image/upload/ar_1:1,b_gen_fill,c_pad/e_enhance/r_20/5_mzpf3e",
      alt: "Photo 7",
    },
    {
      id: 8,
      src: "https://res.cloudinary.com/doc0kcfdm/image/upload/ar_1:1,b_gen_fill,c_pad/e_enhance/r_20/5_mzpf3e",
      alt: "Photo 8",
    },
    {
      id: 9,
      src: "https://res.cloudinary.com/doc0kcfdm/image/upload/ar_1:1,b_gen_fill,c_pad/e_enhance/r_20/5_mzpf3e",
      alt: "Photo 9",
    },
  ];

  const handlePrevious = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(selectedImageIndex > 0 ? selectedImageIndex - 1 : images.length - 1);
    }
  };

  const handleNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(selectedImageIndex < images.length - 1 ? selectedImageIndex + 1 : 0);
    }
  };

  const handleClose = () => {
    setSelectedImageIndex(null);
  };

  return (
    <section id="gallery" className="relative py-24 bg-background">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-in fade-in duration-1000">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full" />
            <span className="text-accent font-semibold uppercase tracking-widest">Galerie</span>
            <div className="w-12 h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full" />
          </div>

          <h2 className="text-5xl md:text-6xl font-bold font-display">
            <span className="text-accent">Photos</span>
            <br />
            <span className="text-foreground">Mémorables</span>
          </h2>
        </div>

        {/* Gallery Grid - 3 colonnes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-max">
          {images.map((image, index) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-xl cursor-pointer animate-in fade-in slide-in-from-bottom-4 duration-700"
              style={{ animationDelay: `${index * 150}ms` }}
              onClick={() => setSelectedImageIndex(index)}
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden bg-background shadow-lg shadow-accent/20 group-hover:shadow-xl group-hover:shadow-accent/40 transition-all duration-500">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <div className="text-accent text-4xl">+</div>
                </div>
              </div>

              {/* Ligne dorée */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox avec navigation */}
      {selectedImageIndex !== null && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={handleClose}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            {/* Image */}
            <img
              src={images[selectedImageIndex].src}
              alt={images[selectedImageIndex].alt}
              className="w-full h-auto rounded-lg max-h-[80vh] object-contain"
            />

            {/* Navigation Précédent */}
            <button
              onClick={handlePrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-accent text-accent-foreground p-3 rounded-full hover:bg-opacity-80 transition-all hover:scale-110"
            >
              <ChevronLeft size={32} />
            </button>

            {/* Navigation Suivant */}
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-accent text-accent-foreground p-3 rounded-full hover:bg-opacity-80 transition-all hover:scale-110"
            >
              <ChevronRight size={32} />
            </button>

            {/* Fermer */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 bg-accent text-accent-foreground p-2 rounded-full hover:bg-opacity-80 transition-all"
            >
              <X size={24} />
            </button>

            {/* Compteur */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/80 text-accent px-4 py-2 rounded-full text-sm font-semibold">
              {selectedImageIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
