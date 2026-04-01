/**
 * About Section - À propos du joueur
 * Design: Asymétrique avec texte à gauche et image à droite
 * - Badges doré pour les statistiques clés
 * - Animations au scroll
 */
export default function About() {
  const highlights = [
    { label: "Position", value: "Milieu de Terrain" },
    { label: "Pied Préféré", value: "Droite" },
    { label: "Nationalité", value: "Algérie" },
    { label: "Club Actuel", value: "CR Belouizdad" },
    { label: "Numéro de Maillot", value: "27" },
    { label: "Taille", value: "174 cm" },
  ];

  return (
    <section id="about" className="relative py-24 bg-background">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contenu texte */}
          <div className="animate-in fade-in slide-in-from-left-8 duration-1000">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-1 bg-gradient-to-r from-accent to-transparent rounded-full" />
              <span className="text-accent font-semibold uppercase tracking-widest">À Propos</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold mb-6 font-display">
              <span className="text-accent">Excellence</span>
              <br />
              <span className="text-foreground">Professionnelle</span>
            </h2>

            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
              Djaber Kaassis est un milieu de terrain professionnel algérien né le 3 mai 1999 à Constantine. Mesurant 1,74 m, il se distingue par sa technique, sa vision du jeu et son intelligence tactique. Formé à l’Académie du Paradou AC, il a développé un style de jeu moderne basé sur la maîtrise du ballon et la rapidité d’exécution. Cette formation d’élite lui a permis de s’imposer comme un élément clé du football algérien.
            </p>

            <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
              Actuellement joueur pour CR Belouizdad, Djaber apporte une vision de jeu remarquable, une capacité de récupération de ballon impressionnante et une présence défensive constante. Son pied droit naturel lui permet de créer des occasions et de contrôler le rythme du jeu.
            </p>
           <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
             
            Au-delà du terrain, Djaber est connu pour son professionnalisme, son engagement envers l'excellence et son désir constant de progresser. Il représente la nouvelle génération de talents du football algérien.
          </p>


            {/* Highlights */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-lg p-4 text-center hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/20"
                >
                  <div className="text-sm font-bold text-accent mb-2">{item.label}</div>
                  <div className="text-sm text-muted-foreground">{item.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="animate-in fade-in slide-in-from-right-8 duration-1000 delay-200">
            <div className="relative">
              {/* Cadre avec effet */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-transparent rounded-2xl transform -rotate-2" />
              
              <img
                src="https://res.cloudinary.com/doc0kcfdm/image/upload/ar_1:1,b_gen_fill,c_pad/e_enhance/r_20/2_ciaz55"
                alt="À propos"
                className="relative w-full h-auto rounded-2xl object-cover shadow-2xl"
              />

              {/* Ligne dorée */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-accent rounded-2xl opacity-50" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
