/**
 * Achievements Section - Carrière Professionnelle
 * Design: Timeline avec badges doré
 * - Animations au scroll
 * - Hover effects
 */
export default function Achievements() {
  const achievements = [
    {
      year: "2025 - Présent",
      title: "CR Belouizdad",
      description: "Joueur clé du club, apportant leadership et mentalité gagnante",
      logo: "https://res.cloudinary.com/dghbmtjou/image/upload/v1774904412/t%C3%A9l%C3%A9chargement_rlbtnh.png",
    },
    {
      year: "2015 - 2025",
      title: "AC Paradou",
      description: "Développement professionnel et expérience de haut niveau",
      logo: "https://res.cloudinary.com/dghbmtjou/image/upload/v1774904094/t%C3%A9l%C3%A9chargement_1_qdcovz.jpg",
    },
  ];

  return (
    <section id="achievements" className="relative py-24 bg-background">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-in fade-in duration-1000">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full" />
            <span className="text-accent font-semibold uppercase tracking-widest">Parcours</span>
            <div className="w-12 h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full" />
          </div>

          <h2 className="text-5xl md:text-6xl font-bold font-display">
            <span className="text-accent">Carrière</span>
            <br />
            <span className="text-foreground">Professionnelle</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Ligne centrale */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent via-accent/50 to-transparent" />

          {/* Achievements */}
          <div className="space-y-12">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`flex gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Contenu */}
                <div className="flex-1 md:flex-1">
                  <div className="bg-card border border-border rounded-xl p-6 hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/20">
                    <div className="flex items-start gap-4">
                      <img
                        src={achievement.logo}
                        alt={achievement.title}
                        className="w-14 h-14 object-cover rounded-full border border-border"
                      />
                      <div className="flex-1">
                        <div className="text-accent font-bold text-lg mb-2">
                          {achievement.year}
                        </div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">
                          {achievement.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Point sur la timeline */}
                <div className="hidden md:flex items-center justify-center">
                  <div className="w-6 h-6 bg-accent rounded-full border-4 border-background shadow-lg shadow-accent/50" />
                </div>

                {/* Espace vide */}
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}