import { useState } from "react";
import { Eye, X } from "lucide-react";

interface GalleryProps {
  onImageSelect?: (image: string) => void;
}

/**
 * Gallery Section - Galerie de photos
 * Design: Grille masonry 3 colonnes
 * - Overlay doré au survol
 * - Lightbox au clic
 * - Animations fluides
 */
export default function Gallery({ onImageSelect }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Images d'exemple - Remplacer par vos URLs
  const images = [
    {
      id: 1,
      url: "https://d2xsxph8kpxj0f.cloudfront.net/310419663027551631/S6EKqboLJ2V9yToJQD3Ycs/gallery-action-1-XoSKq6543piQWZGmJAgit5.webp",
      title: "Match",
    },
    {
      id: 2,
      url: "https://d2xsxph8kpxj0f.cloudfront.net/310419663027551631/S6EKqboLJ2V9yToJQD3Ycs/gallery-portrait-iX8Zq7x95VK92t9fZqua9J.webp",
      title: "Célébration",
    },
    {
      id: 3,
      url: "https://d2xsxph8kpxj0f.cloudfront.net/310419663027551631/S6EKqboLJ2V9yToJQD3Ycs/gallery-action-1-XoSKq6543piQWZGmJAgit5.webp",
      title: "Entraînement",
    },
    {
      id: 4,
      url: "https://d2xsxph8kpxj0f.cloudfront.net/310419663027551631/S6EKqboLJ2V9yToJQD3Ycs/gallery-action-1-XoSKq6543piQWZGmJAgit5.webp",
      title: "Match",
    },
    {
      id: 5,
      url: "https://d2xsxph8kpxj0f.cloudfront.net/310419663027551631/S6EKqboLJ2V9yToJQD3Ycs/gallery-portrait-iX8Zq7x95VK92t9fZqua9J.webp",
      title: "Portrait",
    },
    {
      id: 6,
      url: "https://d2xsxph8kpxj0f.cloudfront.net/310419663027551631/S6EKqboLJ2V9yToJQD3Ycs/gallery-action-1-XoSKq6543piQWZGmJAgit5.webp",
      title: "Équipe",
    },
  ];

  const handleImageSelect = (url: string) => {
    setSelectedImage(url);
    if (onImageSelect) onImageSelect(url);
  };

  return (
    <>
      <section id="gallery" className="relative py-24 bg-black">
        <div className="container max-w-6xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16 animate-in fade-in duration-1000">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-1 bg-gradient-to-r from-transparent via-gold to-transparent rounded-full" />
              <span className="text-gold font-semibold uppercase tracking-widest">Galerie</span>
              <div className="w-12 h-1 bg-gradient-to-r from-transparent via-gold to-transparent rounded-full" />
            </div>

            <h2 className="text-5xl md:text-6xl font-bold font-display">
              <span className="text-gold">Moments</span>
              <br />
              <span className="text-white">Mémorables</span>
            </h2>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
            {images.map((image, index) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-xl cursor-pointer animate-in fade-in slide-in-from-bottom-4 duration-700"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => handleImageSelect(image.url)}
              >
                {/* Image */}
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-6">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {image.title}
                    </h3>
                    <p className="text-sm text-gray-300">
                      Cliquez pour agrandir
                    </p>
                  </div>

                  {/* Icon */}
                  <div className="bg-gold text-black p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <Eye size={24} />
                  </div>
                </div>

                {/* Ligne dorée */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16 animate-in fade-in duration-1000 delay-500">
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-black rounded-lg font-semibold hover:shadow-lg hover:shadow-gold/50 transition-all duration-300 hover:scale-105">
              Voir Plus de Photos
              <span className="text-xl">→</span>
            </button>
          </div>
        </div>

        {/* Divider */}
        <svg
          className="absolute bottom-0 left-0 right-0 w-full h-auto"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z"
            fill="currentColor"
            className="text-gray-900"
          />
        </svg>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-5xl">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-gold hover:text-yellow-400 transition-colors"
            >
              <X size={40} />
            </button>
            <img
              src={selectedImage}
              alt="Agrandie"
              className="w-full rounded-lg shadow-2xl shadow-gold/50"
            />
          </div>
        </div>
      )}
    </>
  );
}
