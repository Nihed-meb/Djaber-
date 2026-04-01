import { useState } from "react";
import { ChevronRight, Play, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Stats from "@/components/sections/Stats";
import MediaGallery from "@/components/sections/MediaGallery";
import Achievements from "@/components/sections/Achievements";
import Navigation from "@/components/Navigation";

/**
 * Portfolio Noir & Doré - Page d'accueil principale
 * Design: Luxe Moderne Minimaliste
 * - Animations fluides au scroll
 * - Thème noir et doré
 * - Sections personnalisables
 */
export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <Hero />

      {/* À Propos */}
      <About />

      {/* Statistiques */}
      <Stats />

      {/* Galerie Photos & Vidéos */}
      <MediaGallery />

      {/* Carrière */}
      <Achievements />

      {/* Footer avec réseaux sociaux */}
      <footer className="py-12 bg-card border-t border-border">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-accent mb-2">Djaber Kaassis</h3>
              <p className="text-muted-foreground">Milieu de Terrain • CR Belouizdad</p>
            </div>

            {/* Réseaux Sociaux */}
            <div className="flex gap-6">
              <a 
                href="https://www.instagram.com/djaber_kaassis?igsh=MTd0NG5jMnljNnkxNQ==" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center text-accent-foreground hover:scale-125 transition-transform duration-300 shadow-lg shadow-accent/50 hover:shadow-2xl hover:shadow-accent/70"
                title="Instagram"
              >
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/>
                </svg>
              </a>
            </div>

            <p className="text-muted-foreground text-sm">© 2026 Djaber Kaassis</p>
          </div>
        </div>
      </footer>

      {/* Lightbox pour les images */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img 
              src={selectedImage} 
              alt="Galerie" 
              className="w-full h-auto rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-accent text-accent-foreground p-2 rounded-full hover:bg-opacity-80 transition-all"
            >
              <X size={24} />
            </button>
          </div>
        </div>
      )}

      {/* Lightbox pour les vidéos */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedVideo(null)}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <iframe
              width="100%"
              height="600"
              src={selectedVideo}
              title="Video Player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            />
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 bg-accent text-accent-foreground p-2 rounded-full hover:bg-opacity-80 transition-all"
            >
              <X size={24} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
