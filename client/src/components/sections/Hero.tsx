import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Hero Section - Section d'accueil principale
 * Design: Image pleine largeur avec overlay noir dégradé
 * - Titre massif en doré
 * - Ligne dorée verticale
 * - Animations au scroll
 */
export default function Hero() {
  const handleScroll = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background Image - Remplacer par votre URL */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(10, 10, 10, 0.7) 0%, rgba(10, 10, 10, 0.3) 50%, rgba(10, 10, 10, 0.7) 100%), url('https://res.cloudinary.com/dghbmtjou/image/upload/v1774824412/photo_2026-03-30_00-45-53_fwda7g.jpg')`,
        }}
      />

      {/* Contenu */}
      <div className="relative z-10 container max-w-6xl mx-auto px-4">
        <div className="flex items-center gap-8">
          {/* Ligne dorée verticale */}
          <div className="hidden lg:block w-1 h-40 bg-gradient-to-b from-accent via-accent to-transparent rounded-full animate-pulse" />

          {/* Contenu texte */}
          <div className="flex-1 animate-in fade-in slide-in-from-left-8 duration-1000">
            <h1 className="text-6xl md:text-8xl font-bold mb-4 font-display">
              <span className="text-accent">Djaber</span>
              <br />
              <span className="text-foreground">Kaassis</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light">
              Joueur Professionnel de Football
            </p>

            <p className="text-lg text-foreground/80 mb-12 max-w-xl leading-relaxed">
              Découvrez mon parcours, mes statistiques, et mes réalisations. 
            
            </p>

            <div className="flex gap-4">
              <Button 
                onClick={handleScroll}
                className="bg-accent text-accent-foreground hover:bg-opacity-90 px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-accent/50"
              >
                Découvrir
              </Button>
             
            </div>
          </div>

          {/* Image à droite - Remplacer par votre URL */}
          <div className="flex-1 animate-in fade-in slide-in-from-right-8 duration-1000 delay-200">
            <div className="relative">
              {/* Cadre doré */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent via-accent/50 to-transparent rounded-2xl transform rotate-3" />
              
              <img
                src="https://res.cloudinary.com/doc0kcfdm/image/upload/f_auto,q_auto/1_lft7p2"
                alt="Joueur"
                className="relative w-full h-auto rounded-2xl object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={handleScroll}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce"
      >
        <ChevronDown className="text-accent" size={32} />
      </button>


    </section>
  );
}
