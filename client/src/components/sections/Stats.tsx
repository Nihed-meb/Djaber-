/**
 * Stats Section - Statistiques principales
 * Design: 4 cartes avec chiffres doré sur fond gris charbon
 * - Animations au scroll
 * - Hover effects
 */
export default function Stats() {
  const stats = [
    {
      label: "Buts Marqués",
      value: "3",
      subtext: "",
      icon: "⚽",
    },
    {
      label: "Passes Décisives",
      value: "7",
      subtext: "",
      icon: "🎯",
    },
    {
      label: "Titres Remportés",
      value: "0",
      subtext: "",
      icon: "🏆",
    },
    {
      label: "Matchs Joués",
      value: "112",
      subtext: "Carrière professionnelle",
      icon: "🏟️",
    },
  ];

  return (
    <section id="stats" className="relative py-24 bg-card">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-in fade-in duration-1000">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full" />
            <span className="text-accent font-semibold uppercase tracking-widest">Statistiques</span>
            <div className="w-12 h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full" />
          </div>

          <h2 className="text-5xl md:text-6xl font-bold font-display">
            <span className="text-accent">Chiffres</span>
            <br />
            <span className="text-foreground">Éloquents</span>
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group bg-background border border-border rounded-xl p-8 text-center hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-4 duration-700"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>

              {/* Value */}
              <div className="text-5xl font-bold text-accent mb-2 font-display">
                {stat.value}
              </div>

              {/* Label */}
              <div className="text-lg font-semibold text-foreground mb-3">
                {stat.label}
              </div>

              {/* Subtext */}
              <div className="text-sm text-muted-foreground">
                {stat.subtext}
              </div>

              {/* Ligne dorée au bas */}
              <div className="mt-6 h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>


    </section>
  );
}
