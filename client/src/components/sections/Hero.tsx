import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Hero Section - Section d'accueil principale
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
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(10, 10, 10, 0.7) 0%, rgba(10, 10, 10, 0.3) 50%, rgba(10, 10, 10, 0.7) 100%), url('https://res.cloudinary.com/dghbmtjou/image/upload/v1775141825/photo_2026-04-02_16-56-52_pbn2k7.jpg')`,
        }}
      />

      <div className="relative z-10 container max-w-6xl mx-auto px-4">
        <div className="flex items-center gap-8">
          <div className="hidden lg:block w-1 h-40 bg-gradient-to-b from-accent via-accent to-transparent rounded-full animate-pulse" />

          <div className="flex-1 animate-in fade-in slide-in-from-left-8 duration-1000">
            <h1 className="text-6xl md:text-8xl font-bold mb-4 font-display leading-none">
              <span className="text-accent">Djaber</span>
              <br />
              <span className="text-foreground">Kaassis</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-6 font-light">
              Site officiel de Djaber Kaassis
            </p>

            <p className="text-lg md:text-xl text-foreground/90 mb-4 max-w-2xl leading-relaxed">
              Joueur professionnel de football algérien et milieu de terrain.
            </p>

            <p className="text-lg text-foreground/80 mb-12 max-w-2xl leading-relaxed">
              Découvrez le parcours de Djaber Kaassis, ses clubs, ses statistiques,
              ses réalisations et ses actualités.
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

          <div className="flex-1 animate-in fade-in slide-in-from-right-8 duration-1000 delay-200">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent via-accent/50 to-transparent rounded-2xl transform rotate-3" />

              <img
                src="https://res.cloudinary.com/doc0kcfdm/image/upload/f_auto,q_auto/1_lft7p2"
                alt="Djaber Kaassis, joueur professionnel de football algérien"
                className="relative w-full h-auto rounded-2xl object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={handleScroll}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce"
        aria-label="Faire défiler vers la section suivante"
      >
        <ChevronDown className="text-accent" size={32} />
      </button>
    </section>
  );
}