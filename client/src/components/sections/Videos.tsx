import { useState } from "react";
import { Play, ChevronLeft, ChevronRight, X } from "lucide-react";

/**
 * Videos Section - Galerie de vidéos
 * Design: Grille de vidéos YouTube
 * - Navigation fluide
 * - Lightbox au clic
 */
export default function Videos() {
  const [selectedVideoIndex, setSelectedVideoIndex] = useState<number | null>(null);

  // 9 vidéos pour la galerie
  const videos = [
    {
      id: 1,
      title: "Vidéo 1",
      thumbnail: "https://res.cloudinary.com/doc0kcfdm/image/upload/ar_1:1,b_gen_fill,c_pad/e_enhance/r_20/5_mzpf3e",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 2,
      title: "Vidéo 2",
      thumbnail: "https://res.cloudinary.com/doc0kcfdm/image/upload/ar_1:1,b_gen_fill,c_pad/e_enhance/r_20/5_mzpf3e",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 3,
      title: "Vidéo 3",
      thumbnail: "https://res.cloudinary.com/doc0kcfdm/image/upload/ar_1:1,b_gen_fill,c_pad/e_enhance/r_20/5_mzpf3e",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 4,
      title: "Vidéo 4",
      thumbnail: "https://res.cloudinary.com/doc0kcfdm/image/upload/ar_1:1,b_gen_fill,c_pad/e_enhance/r_20/5_mzpf3e",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 5,
      title: "Vidéo 5",
      thumbnail: "https://res.cloudinary.com/doc0kcfdm/image/upload/ar_1:1,b_gen_fill,c_pad/e_enhance/r_20/5_mzpf3e",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 6,
      title: "Vidéo 6",
      thumbnail: "https://res.cloudinary.com/doc0kcfdm/image/upload/ar_1:1,b_gen_fill,c_pad/e_enhance/r_20/5_mzpf3e",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 7,
      title: "Vidéo 7",
      thumbnail: "https://res.cloudinary.com/doc0kcfdm/image/upload/ar_1:1,b_gen_fill,c_pad/e_enhance/r_20/5_mzpf3e",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 8,
      title: "Vidéo 8",
      thumbnail: "https://res.cloudinary.com/doc0kcfdm/image/upload/ar_1:1,b_gen_fill,c_pad/e_enhance/r_20/5_mzpf3e",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 9,
      title: "Vidéo 9",
      thumbnail: "https://res.cloudinary.com/doc0kcfdm/image/upload/ar_1:1,b_gen_fill,c_pad/e_enhance/r_20/5_mzpf3e",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
  ];

  const handlePrevious = () => {
    if (selectedVideoIndex !== null) {
      setSelectedVideoIndex(selectedVideoIndex > 0 ? selectedVideoIndex - 1 : videos.length - 1);
    }
  };

  const handleNext = () => {
    if (selectedVideoIndex !== null) {
      setSelectedVideoIndex(selectedVideoIndex < videos.length - 1 ? selectedVideoIndex + 1 : 0);
    }
  };

  const handleClose = () => {
    setSelectedVideoIndex(null);
  };

  return (
    <section id="videos" className="relative py-24 bg-card">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-in fade-in duration-1000">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full" />
            <span className="text-accent font-semibold uppercase tracking-widest">Vidéos</span>
            <div className="w-12 h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full" />
          </div>

          <h2 className="text-5xl md:text-6xl font-bold font-display">
            <span className="text-accent">Vidéos</span>
            <br />
            <span className="text-foreground">Exclusives</span>
          </h2>
        </div>

        {/* Videos Grid - 3 colonnes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {videos.map((video, index) => (
            <div
              key={video.id}
              className="group relative overflow-hidden rounded-xl cursor-pointer animate-in fade-in slide-in-from-bottom-4 duration-700"
              style={{ animationDelay: `${index * 150}ms` }}
              onClick={() => setSelectedVideoIndex(index)}
            >
              {/* Thumbnail */}
              <div className="relative aspect-video overflow-hidden bg-background shadow-lg shadow-accent/20 group-hover:shadow-xl group-hover:shadow-accent/40 transition-all duration-500">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <div className="bg-accent text-accent-foreground p-4 rounded-full group-hover:scale-125 transition-transform duration-300 shadow-lg shadow-accent/50">
                    <Play size={32} fill="currentColor" />
                  </div>
                </div>
              </div>

              {/* Title */}
              <div className="bg-background p-4 group-hover:bg-card transition-colors duration-300">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                  {video.title}
                </h3>
              </div>

              {/* Ligne dorée */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox avec navigation */}
      {selectedVideoIndex !== null && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={handleClose}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            {/* Video */}
            <iframe
              width="100%"
              height="600"
              src={videos[selectedVideoIndex].embedUrl}
              title={videos[selectedVideoIndex].title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
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
              {selectedVideoIndex + 1} / {videos.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
