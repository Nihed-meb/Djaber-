import { useState } from "react";
import { ChevronLeft, ChevronRight, X, Play, Grid3x3 } from "lucide-react";

/**
 * MediaGallery Section - Galerie moderne avec affichage progressif
 * Design: Affiche 1 photo et 1 vidéo au début, puis grille au clic
 * - Animations fluides
 * - Design ultra moderne
 * - 14 PHOTOS + 4 VIDÉOS CORRECTES
 */
export default function MediaGallery() {
  const [activeTab, setActiveTab] = useState<"photos" | "videos">("photos");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [showGrid, setShowGrid] = useState(false);

  // 14 photos pour la galerie
  const photos = [
    { id: 1, src: "https://res.cloudinary.com/dghbmtjou/image/upload/v1774823571/photo_2026-03-30_00-32-25_ybcw0q.jpg", alt: "Photo 1" },
    { id: 2, src: "https://res.cloudinary.com/dghbmtjou/image/upload/v1774823388/3_kdqcrf.jpg", alt: "Photo 2" },
    { id: 3, src: "https://res.cloudinary.com/dghbmtjou/image/upload/v1774823564/photo_2026-03-30_00-32-32_s88ihd.jpg", alt: "Photo 3" },
    { id: 4, src: "https://res.cloudinary.com/dghbmtjou/image/upload/v1774823533/77_ftgwzu.jpg", alt: "Photo 4" },
    { id: 5, src: "https://res.cloudinary.com/dghbmtjou/image/upload/v1774823528/15_ffaqup.jpg", alt: "Photo 5" },
    { id: 6, src: "https://res.cloudinary.com/dghbmtjou/image/upload/v1774823523/8_kevfs3.jpg", alt: "Photo 6" },
    { id: 7, src: "https://res.cloudinary.com/dghbmtjou/image/upload/v1774823517/5_ea2ltc.jpg", alt: "Photo 7" },
    { id: 8, src: "https://res.cloudinary.com/dghbmtjou/image/upload/v1774824378/photo_2026-03-30_00-44-29_fiwqk1.jpg", alt: "Photo 8" },
    { id: 9, src: "https://res.cloudinary.com/dghbmtjou/image/upload/v1774824395/photo_2026-03-30_00-45-47_tszqqi.jpg", alt: "Photo 9" },
    { id: 10, src: "https://res.cloudinary.com/dghbmtjou/image/upload/v1774999637/photo_2026-04-01_01-26-13_gm6nbn.jpg", alt: "Photo 10" },
    { id: 11, src: "https://res.cloudinary.com/dghbmtjou/image/upload/v1774999625/photo_2026-04-01_01-26-09_jzlday.jpg", alt: "Photo 11" },
    { id: 12, src: "https://res.cloudinary.com/dghbmtjou/image/upload/v1774999608/photo_2026-04-01_01-26-04_iegruh.jpg", alt: "Photo 12" },
    { id: 13, src: "https://res.cloudinary.com/dghbmtjou/image/upload/v1774998004/photo_2026-04-01_00-59-13_mrjcya.jpg", alt: "Photo 13" },
    { id: 14, src: "https://res.cloudinary.com/dghbmtjou/image/upload/v1774998066/photo_2026-04-01_01-00-54_bosipl.jpg", alt: "Photo 14" },
  ];

  // Couverture vidéo principale
  const videoCover = "https://res.cloudinary.com/dghbmtjou/image/upload/v1774993084/photo_2026-03-31_23-37-45_roc3tg.jpg";

  // 4 VIDÉOS SEULEMENT avec couvertures différentes
  const videos = [
    { 
      id: 1, 
      title: "Son parcours au AC Paradou", 
      thumbnail: "https://img.youtube.com/vi/xNj7VqVjni8/maxresdefault.jpg", 
      embedUrl: "https://www.youtube.com/embed/xNj7VqVjni8",
      isVideo: false 
    },
    { 
      id: 2, 
      title: "Vidéo 2", 
      thumbnail: "https://res.cloudinary.com/dghbmtjou/image/upload/v1774998094/photo_2026-04-01_00-56-22_xvgzvh.jpg", 
      embedUrl: "https://res.cloudinary.com/dghbmtjou/video/upload/v1774993409/IMG_8311_l7bb6t.mp4", 
      isVideo: true 
    },
    { 
      id: 3, 
      title: "Vidéo 3", 
      thumbnail: "https://res.cloudinary.com/dghbmtjou/image/upload/v1774993084/photo_2026-03-31_23-37-45_roc3tg.jpg", 
      embedUrl: "https://res.cloudinary.com/dghbmtjou/video/upload/v1774993758/IMG_8728_ma7ew7.mp4", 
      isVideo: true 
    },
    { 
      id: 4, 
      title: "Vidéo 4", 
      thumbnail: "https://res.cloudinary.com/dghbmtjou/image/upload/v1774999637/photo_2026-04-01_01-26-13_gm6nbn.jpg", 
      embedUrl: "https://res.cloudinary.com/dghbmtjou/video/upload/v1774997850/IMG_8733_hohtok.mp4", 
      isVideo: true 
    },
  ];

  const currentItems = activeTab === "photos" ? photos : videos;

  const handlePrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex > 0 ? selectedIndex - 1 : currentItems.length - 1);
    }
  };

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex < currentItems.length - 1 ? selectedIndex + 1 : 0);
    }
  };

  const handleClose = () => {
    setSelectedIndex(null);
  };

  const handleTabChange = (tab: "photos" | "videos") => {
    setActiveTab(tab);
    setSelectedIndex(null);
    setShowGrid(false);
  };

  const handleGridClick = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <section id="gallery" className="relative py-32 bg-gradient-to-b from-background via-background to-card">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20 animate-in fade-in duration-1000">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-1 w-16 bg-gradient-to-r from-transparent to-accent rounded-full" />
            <span className="text-accent font-bold uppercase tracking-widest text-sm">Galerie</span>
            <div className="h-1 w-16 bg-gradient-to-r from-accent to-transparent rounded-full" />
          </div>

          <h2 className="text-6xl md:text-7xl font-bold font-display mb-4">
            <span className="bg-gradient-to-r from-accent via-accent to-accent/60 bg-clip-text text-transparent animate-text-reveal delay-100">
              Photos
            </span>
            <br />
            <span className="text-foreground animate-text-reveal delay-300">& Vidéos</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-6 max-w-2xl mx-auto">Découvrez les meilleurs moments de ma carrière</p>
        </div>

        {/* Onglets */}
        <div className="flex justify-center gap-4 mb-16">
          <button
            onClick={() => handleTabChange("photos")}
            className={`px-8 py-3 rounded-xl font-bold transition-all duration-500 transform hover:scale-105 ${
              activeTab === "photos"
                ? "bg-gradient-to-r from-accent to-accent/80 text-accent-foreground shadow-2xl shadow-accent/50 scale-105"
                : "bg-card text-foreground border-2 border-border hover:border-accent/50"
            }`}
          >
            Photos
          </button>
          <button
            onClick={() => handleTabChange("videos")}
            className={`px-8 py-3 rounded-xl font-bold transition-all duration-500 transform hover:scale-105 ${
              activeTab === "videos"
                ? "bg-gradient-to-r from-accent to-accent/80 text-accent-foreground shadow-2xl shadow-accent/50 scale-105"
                : "bg-card text-foreground border-2 border-border hover:border-accent/50"
            }`}
          >
            Vidéos
          </button>
        </div>

        {/* Vue principale - Photo/Vidéo unique */}
        {!showGrid && (
          <div className="mb-12 animate-in fade-in duration-700">
            {activeTab === "photos" && (
              <div className="relative group animate-blur-fade-in">
                <div className="relative aspect-video md:aspect-square max-w-xl mx-auto overflow-hidden rounded-3xl shadow-2xl shadow-accent/30 bg-background hover:shadow-2xl hover:shadow-accent/50 transition-all duration-500">
                  <img
                    src={photos[0].src}
                    alt={photos[0].alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 animate-zoom-in"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Bouton afficher plus */}
                  <button
                    onClick={() => setShowGrid(true)}
                    className="absolute bottom-6 right-6 bg-accent text-accent-foreground p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 group-hover:opacity-100 opacity-0"
                  >
                    <Grid3x3 size={24} />
                  </button>
                </div>
                
                {/* Ligne dorée */}
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full" />
              </div>
            )}

            {activeTab === "videos" && (
              <div className="relative group animate-blur-fade-in">
                <div className="relative aspect-video max-w-xl mx-auto overflow-hidden rounded-3xl shadow-2xl shadow-accent/30 bg-background hover:shadow-2xl hover:shadow-accent/50 transition-all duration-500">
                  <img
                    src={videoCover}
                    alt="Couverture Vidéos"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 animate-zoom-in"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="bg-accent text-accent-foreground p-6 rounded-full group-hover:scale-125 group-hover:animate-heartbeat transition-transform duration-300 shadow-2xl shadow-accent/50">
                      <Play size={40} fill="currentColor" />
                    </div>
                  </div>

                  {/* Bouton afficher plus */}
                  <button
                    onClick={() => setShowGrid(true)}
                    className="absolute bottom-6 right-6 bg-accent text-accent-foreground p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 group-hover:opacity-100 opacity-0"
                  >
                    <Grid3x3 size={24} />
                  </button>
                </div>

                {/* Ligne dorée */}
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full" />
              </div>
            )}
          </div>
        )}

        {/* Grille - Affichée au clic */}
        {showGrid && (
          <div className="animate-in fade-in duration-500">
            <button
              onClick={() => setShowGrid(false)}
              className="mb-8 px-6 py-2 bg-card border border-border rounded-lg text-foreground hover:border-accent transition-colors"
            >
              ← Retour
            </button>

            {activeTab === "photos" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {photos.map((photo, index) => (
                  <div
                    key={photo.id}
                    className="group relative overflow-hidden rounded-2xl cursor-pointer animate-cascade hover:animate-pulse-glow transform hover:scale-105"
                    style={{ animationDelay: `${index * 100}ms` }}
                    onClick={() => handleGridClick(index)}
                  >
                    <div className="relative aspect-square overflow-hidden bg-background shadow-lg shadow-accent/20 group-hover:shadow-2xl group-hover:shadow-accent/40 transition-all duration-500">
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-500 animate-zoom-in"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                        <div className="text-accent text-5xl font-bold">+</div>
                      </div>
                    </div>
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                ))}
              </div>
            )}

            {activeTab === "videos" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {videos.map((video, index) => (
                  <div
                    key={video.id}
                    className="group relative overflow-hidden rounded-2xl cursor-pointer animate-cascade hover:animate-pulse-glow transform hover:scale-105"
                    style={{ animationDelay: `${index * 100}ms` }}
                    onClick={() => handleGridClick(index)}
                  >
                    <div className="relative aspect-video overflow-hidden bg-background shadow-lg shadow-accent/20 group-hover:shadow-2xl group-hover:shadow-accent/40 transition-all duration-500">
                      {video.thumbnail && (
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-500 animate-zoom-in"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                        <div className="bg-accent text-accent-foreground p-4 rounded-full group-hover:scale-125 group-hover:animate-heartbeat transition-transform duration-300 shadow-lg shadow-accent/50">
                          <Play size={32} fill="currentColor" />
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div 
          className="fixed inset-0 bg-black/98 z-50 flex items-center justify-center p-4 backdrop-blur-lg overflow-auto"
          onClick={handleClose}
        >
          <div className="relative max-w-5xl w-full max-h-[90vh] flex items-center" onClick={(e) => e.stopPropagation()}>
            {/* Photo */}
            {activeTab === "photos" && (
              <img
                src={photos[selectedIndex].src}
                alt={photos[selectedIndex].alt}
                className="w-full h-auto rounded-2xl max-h-[85vh] object-contain"
              />
            )}

            {/* Vidéo MP4 */}
            {activeTab === "videos" && videos[selectedIndex]?.isVideo && (
              <video
                width="100%"
                controls
                autoPlay
                className="rounded-2xl max-h-[85vh] object-contain"
              >
                <source src={videos[selectedIndex].embedUrl} type="video/mp4" />
                Votre navigateur ne supporte pas la lecture de vidéo.
              </video>
            )}

            {/* Vidéo YouTube/Iframe */}
            {activeTab === "videos" && !videos[selectedIndex]?.isVideo && (
              <iframe
                width="100%"
                height="700"
                src={videos[selectedIndex].embedUrl}
                title={videos[selectedIndex].title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-2xl max-h-[85vh]"
              />
            )}

            {/* Navigation Précédent */}
            <button
              onClick={handlePrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-accent text-accent-foreground p-4 rounded-full hover:bg-opacity-80 transition-all hover:scale-125 shadow-2xl shadow-accent/50 z-10"
            >
              <ChevronLeft size={32} />
            </button>

            {/* Navigation Suivant */}
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-accent text-accent-foreground p-4 rounded-full hover:bg-opacity-80 transition-all hover:scale-125 shadow-2xl shadow-accent/50 z-10"
            >
              <ChevronRight size={32} />
            </button>

            {/* Fermer */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 bg-accent text-accent-foreground p-3 rounded-full hover:bg-opacity-80 transition-all hover:scale-110 shadow-2xl shadow-accent/50 z-10"
            >
              <X size={28} />
            </button>

            {/* Compteur */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/80 backdrop-blur-md text-accent px-6 py-3 rounded-full text-sm font-bold border border-accent/30 z-10">
              {activeTab === "photos" ? "Photo" : "Vidéo"} {selectedIndex + 1} / {currentItems.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
