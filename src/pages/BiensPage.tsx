import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyCTA from '@/components/StickyCTA';
import PropertyCard from '@/components/PropertyCard';
import { properties } from '@/components/PropertiesSection';
import hero2 from '@/assets/hero-2.jpg';

const propertyTypes = ['Tous', 'Appartement', 'Maison', 'Studio', 'Duplex', 'Loft', 'Commercial'];
const priceRanges = [
  { label: 'Tous les prix', min: 0, max: Infinity },
  { label: '< 1 000 €', min: 0, max: 1000 },
  { label: '1 000 - 2 000 €', min: 1000, max: 2000 },
  { label: '2 000 - 3 000 €', min: 2000, max: 3000 },
  { label: '> 3 000 €', min: 3000, max: Infinity },
];

const BiensPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('Tous');
  const [selectedPriceRange, setSelectedPriceRange] = useState(priceRanges[0]);
  const [showFilters, setShowFilters] = useState(false);

  const filteredProperties = properties.filter((property) => {
    const matchesSearch =
      property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = selectedType === 'Tous' || property.type === selectedType;
    const matchesPrice =
      property.price >= selectedPriceRange.min && property.price < selectedPriceRange.max;
    return matchesSearch && matchesType && matchesPrice;
  });

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${hero2})` }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 hero-overlay" />
        {/* Gradient fade to white */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white" />
        
        <div className="relative container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
              Nos <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-white via-primary/90 to-secondary">Biens</span> Disponibles
            </h1>
            <p className="text-white/90 text-lg drop-shadow-md">
              Découvrez notre sélection de biens immobiliers de qualité,
              soigneusement choisis pour répondre à vos attentes.
            </p>
          </motion.div>

          {/* Search & Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-4xl mx-auto"
          >
            {/* Search Bar */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <div className="flex-1 relative min-w-0">
                <Search className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-muted-foreground z-10" />
                <input
                  type="text"
                  placeholder="Rechercher..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 md:pl-12 pr-3 md:pr-4 py-3 md:py-4 rounded-2xl bg-white/95 backdrop-blur-sm border border-white/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm md:text-base shadow-md shadow-primary/5"
                />
              </div>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`px-4 md:px-6 py-3 md:py-4 rounded-2xl border transition-all flex items-center justify-center gap-2 whitespace-nowrap shadow-lg ${
                  showFilters
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'bg-white/95 backdrop-blur-sm border-white/20 hover:border-primary hover:bg-white'
                }`}
              >
                <SlidersHorizontal className="w-4 h-4 md:w-5 md:h-5" />
                <span className="hidden sm:inline md:inline">Filtres</span>
              </button>
            </div>

            {/* Filters Panel */}
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="p-6 rounded-2xl bg-white/95 backdrop-blur-sm border border-white/20 shadow-lg shadow-primary/5 mb-8"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Type Filter */}
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-foreground mb-3">
                      Type de bien
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {propertyTypes.map((type) => (
                        <button
                          key={type}
                          onClick={() => setSelectedType(type)}
                          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                            selectedType === type
                              ? 'bg-primary text-primary-foreground'
                              : 'bg-white/80 backdrop-blur-sm text-foreground border border-border hover:bg-primary/10 hover:text-primary hover:border-primary/30'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Price Filter */}
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-foreground mb-3">
                      Budget mensuel
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {priceRanges.map((range) => (
                        <button
                          key={range.label}
                          onClick={() => setSelectedPriceRange(range)}
                          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                            selectedPriceRange.label === range.label
                              ? 'bg-primary text-primary-foreground'
                              : 'bg-white/80 backdrop-blur-sm text-foreground border border-border hover:bg-primary/10 hover:text-primary hover:border-primary/30'
                          }`}
                        >
                          {range.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Reset Filters */}
                <button
                  onClick={() => {
                    setSelectedType('Tous');
                    setSelectedPriceRange(priceRanges[0]);
                    setSearchQuery('');
                  }}
                  className="mt-4 text-sm text-primary font-medium hover:underline flex items-center gap-1"
                >
                  <X className="w-4 h-4" />
                  Réinitialiser les filtres
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="section-padding pt-0">
        <div className="container-custom">
          {/* Results Count */}
          <div className="mb-8">
            <p className="text-muted-foreground">
              <span className="font-semibold text-foreground">{filteredProperties.length}</span>{' '}
              bien{filteredProperties.length > 1 ? 's' : ''} trouvé{filteredProperties.length > 1 ? 's' : ''}
            </p>
          </div>

          {/* Grid */}
          {filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredProperties.map((property) => (
                <PropertyCard key={property.id} {...property} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg mb-4">
                Aucun bien ne correspond à vos critères.
              </p>
              <button
                onClick={() => {
                  setSelectedType('Tous');
                  setSelectedPriceRange(priceRanges[0]);
                  setSearchQuery('');
                }}
                className="text-primary font-semibold hover:underline"
              >
                Réinitialiser les filtres
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
      <StickyCTA />
    </div>
  );
};

export default BiensPage;
