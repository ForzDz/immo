import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { motion } from "framer-motion";
import { Building2, Award, Users, TrendingUp, Home, Shield, Globe, Zap, Leaf } from "lucide-react";

import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import property4 from "@/assets/property-4.jpg";
import aboutTeam from "@/assets/about-team.jpg";
import aboutBuilding from "@/assets/about-building.jpg";

const TimelineSection = () => {
  const data = [
    {
      title: "2018",
      content: (
        <div>
          <p className="text-foreground text-xs md:text-sm font-normal mb-4">
            Fondation d'Immo Oran avec une vision claire : révolutionner l'immobilier de prestige à Oran et offrir un service d'exception.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-muted-foreground text-xs md:text-sm mb-4">
              <Building2 className="w-4 h-4 text-primary" />
              Ouverture du premier bureau à Oran
            </div>
            <div className="flex gap-2 items-center text-muted-foreground text-xs md:text-sm mb-4">
              <Users className="w-4 h-4 text-primary" />
              Constitution de l'équipe fondatrice
            </div>
            <div className="flex gap-2 items-center text-muted-foreground text-xs md:text-sm mb-4">
              <Award className="w-4 h-4 text-primary" />
              Premiers clients prestigieux
            </div>
            <div className="flex gap-2 items-center text-muted-foreground text-xs md:text-sm">
              <TrendingUp className="w-4 h-4 text-primary" />
              Développement du réseau partenaires
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <motion.img
              src={aboutBuilding}
              alt="Nos débuts"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
            <motion.img
              src={property4}
              alt="Premier projet"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <p className="text-foreground text-xs md:text-sm font-normal mb-4">
            Transformation digitale complète de nos services avec le lancement de notre plateforme en ligne et visites virtuelles 360°.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-muted-foreground text-xs md:text-sm mb-4">
              <Home className="w-4 h-4 text-primary" />
              Lancement des visites virtuelles
            </div>
            <div className="flex gap-2 items-center text-muted-foreground text-xs md:text-sm mb-4">
              <Shield className="w-4 h-4 text-primary" />
              Certification qualité obtenue
            </div>
            <div className="flex gap-2 items-center text-muted-foreground text-xs md:text-sm">
              <Building2 className="w-4 h-4 text-primary" />
              Partenariats avec promoteurs de luxe
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <motion.img
              src={property3}
              alt="Villa contemporaine"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
            <motion.img
              src={aboutTeam}
              alt="Notre équipe"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <p className="text-foreground text-xs md:text-sm font-normal mb-4">
            Expansion majeure avec l'ouverture de nouveaux bureaux et le lancement de services premium pour nos clients les plus exigeants.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-muted-foreground text-xs md:text-sm mb-4">
              <Award className="w-4 h-4 text-primary" />
              Leader du marché immobilier à Oran
            </div>
            <div className="flex gap-2 items-center text-muted-foreground text-xs md:text-sm mb-4">
              <Users className="w-4 h-4 text-primary" />
              +500 clients satisfaits cette année
            </div>
            <div className="flex gap-2 items-center text-muted-foreground text-xs md:text-sm">
              <TrendingUp className="w-4 h-4 text-primary" />
              Croissance de 40% du portefeuille
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <motion.img
              src={property1}
              alt="Propriété premium 2024"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
            <motion.img
              src={property2}
              alt="Appartement moderne"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      ),
    },
    {
      title: "2026",
      content: (
        <div>
          <p className="text-foreground text-xs md:text-sm font-normal mb-4">
            Vision Futuriste : Vers un immobilier intelligent et durable. Intégration de l'IA et ouverture vers le marché international.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-muted-foreground text-xs md:text-sm mb-4">
              <Globe className="w-4 h-4 text-primary" />
              Expansion Internationale & Partenariats
            </div>
            <div className="flex gap-2 items-center text-muted-foreground text-xs md:text-sm mb-4">
              <Zap className="w-4 h-4 text-primary" />
              Innovation Technologique (IA & Big Data)
            </div>
            <div className="flex gap-2 items-center text-muted-foreground text-xs md:text-sm">
              <Leaf className="w-4 h-4 text-primary" />
              Focus sur l'Immobilier Éco-responsable
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <motion.img
              src={property4}
              alt="Projet Futuriste"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
            <motion.img
              src={property3}
              alt="Architecture Durable"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-white via-muted/30 to-white">
      <Timeline data={data} />
    </section>
  );
};

export default TimelineSection;
