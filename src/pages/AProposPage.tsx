import { motion } from 'framer-motion';
import { Award, Users, Home, TrendingUp, Target, Heart, Shield, Zap } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyCTA from '@/components/StickyCTA';
import CTASection from '@/components/CTASection';
import hero2 from '@/assets/hero-2.jpg';

const stats = [
  { value: '500+', label: 'Biens gérés', icon: Home },
  { value: '15+', label: "Années d'expérience", icon: Award },
  { value: '2000+', label: 'Clients satisfaits', icon: Users },
  { value: '98%', label: 'Taux de satisfaction', icon: TrendingUp },
];

const values = [
  {
    icon: Target,
    title: 'Excellence',
    description: 'Nous nous engageons à offrir un service de la plus haute qualité, en dépassant les attentes de nos clients.',
  },
  {
    icon: Heart,
    title: 'Passion',
    description: "L'immobilier est notre passion. Nous mettons tout notre cœur pour vous trouver le bien parfait.",
  },
  {
    icon: Shield,
    title: 'Intégrité',
    description: 'La transparence et l\'honnêteté sont au cœur de notre approche. Vous pouvez nous faire confiance.',
  },
  {
    icon: Zap,
    title: 'Réactivité',
    description: 'Nous comprenons l\'urgence de vos besoins et agissons rapidement pour y répondre.',
  },
];

const AProposPage = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${hero2})` }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 hero-overlay" />
        {/* Gradient fade to white section */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white" />
        
        <div className="relative container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white text-sm font-semibold mb-6 backdrop-blur-sm border border-white/20">
              À Propos de Nous
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              Votre Partenaire Immobilier de{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-primary/90 to-secondary">Confiance</span>
            </h1>
            <p className="text-lg text-white/90 max-w-2xl drop-shadow-md leading-relaxed">
              Depuis plus de 15 ans, nous accompagnons nos clients dans leurs projets
              immobiliers avec expertise, passion et dévouement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-gradient-to-b from-white via-muted/10 to-white">
        <div className="container-custom">
          {/* Mobile Layout - Card Style */}
          <div className="lg:hidden mb-8">
            <div className="text-center mb-8">
              <span className="text-primary text-sm font-bold tracking-[0.2em] uppercase border-b-2 border-primary pb-2">
                Notre Histoire
              </span>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden aspect-[3/5] shadow-2xl"
            >
              <img 
                src={hero2} 
                alt="Notre histoire depuis 2008" 
                className="absolute inset-0 w-full h-full object-cover scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h2 className="text-4xl font-serif font-bold text-white mb-2 leading-none">
                  Une Passion <br/>
                  <span className="text-white/90 text-2xl font-sans font-medium tracking-wide">pour</span> <br/>
                  <span className="text-primary">l'Immobilier</span>
                </h2>
                 <div className="flex items-center gap-3 my-4">
                  <div className="h-px bg-white/30 flex-1" />
                  <span className="text-white/90 font-serif italic text-xl">depuis 2008</span>
                  <div className="h-px bg-white/30 flex-1" />
                </div>
                
                <p className="text-white/80 text-sm leading-relaxed mb-4">
                  Fondée en 2008, Immo Oran est née d'une vision simple : rendre
                  l'expérience immobilière plus humaine, transparente et efficace.
                </p>
                <div className="flex items-center gap-2 text-primary/90 text-xs font-bold uppercase tracking-wider">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Leader à Oran
                </div>
              </div>
            </motion.div>
          </div>

          {/* Desktop Layout - Original Grid */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4 border border-primary/20">
                Notre Histoire
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Une Passion pour l'Immobilier depuis{' '}
                <span className="text-gradient">2008</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Fondée en 2008, Immo Oran est née d'une vision simple : rendre
                  l'expérience immobilière plus humaine, transparente et efficace.
                </p>
                <p>
                  Aujourd'hui, nous sommes fiers d'être devenus une référence dans le
                  secteur de la location immobilière.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden shadow-lg shadow-primary/10">
                <img
                  src={hero2}
                  alt="Notre équipe"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
              </div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-4 md:-bottom-6 -left-4 md:-left-6 p-4 md:p-6 rounded-2xl bg-gradient-to-br from-primary to-primary/80 text-white shadow-lg shadow-primary/20 border border-white/10"
              >
                <div className="text-3xl md:text-4xl font-bold">15+</div>
                <div className="text-xs md:text-sm opacity-90 font-medium">Années d'expérience</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-gradient-to-b from-white via-muted/20 to-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4 border border-primary/20"
            >
              Nos Valeurs
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-foreground"
            >
              Ce Qui Nous <span className="text-gradient">Guide</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-6 rounded-2xl bg-white border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center mx-auto mb-5 transition-colors">
                  <value.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-16 bg-gradient-to-br from-[#0A1929] via-[#1e3a52] to-[#0f1f2e] overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        </div>
        
        <div className="relative container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/20 backdrop-blur-sm mb-4 group-hover:bg-primary/30 transition-all duration-300">
                  <stat.icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-secondary transition-colors">
                  {stat.value}
                </div>
                <div className="text-white/70 text-sm font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
      <StickyCTA />
    </div>
  );
};

export default AProposPage;
