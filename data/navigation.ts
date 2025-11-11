import { NavigationItem } from "@/types";

export const navigationData: NavigationItem[] = [
  {
    label: "Notre groupe",
    href: "/group",
    subItems: [
      { label: "About Us", href: "/group/about" },
      { label: "Leadership", href: "/group/leadership" },
      { label: "History", href: "/group/history" },
      { label: "Strategy", href: "/group/strategy" },
    ],
  },
  {
    label: "Notre présence mondiale",
    href: "/presence",
    subItems: [
      { label: "Worldwide", href: "/presence/worldwide" },
      { label: "Production Sites", href: "/presence/production" },
      { label: "Innovation", href: "/presence/innovation" },
    ],
  },
  {
    label: "Nos marques",
    href: "/marques",
    subItems: [
      { label: "Toutes les marques", href: "/marques" },
      { label: "Spiritueux premium", href: "/marques/spirits" },
      { label: "Vins", href: "/marques/wines" },
    ],
    featured: {
      title: "Discover Our Portfolio",
      description: "Explore our collection of premium brands",
      imageUrl: "/images/brands-featured.jpg",
    },
  },
  {
    label: "Nos engagements",
    href: "/engagements",
    subItems: [
      { label: "Durabilité", href: "/engagements/sustainability" },
      { label: "Consommation responsable", href: "/engagements/responsible" },
      { label: "Diversité et inclusion", href: "/engagements/diversity" },
    ],
  },
  {
    label: "Médias",
    href: "/medias",
    subItems: [
      { label: "Communiqués de presse", href: "/medias/press" },
      { label: "Actualités", href: "/medias/news" },
      { label: "Kit média", href: "/medias/kit" },
    ],
  },
  {
    label: "Investisseurs",
    href: "/investisseurs",
    subItems: [
      { label: "Informations financières", href: "/investisseurs/financials" },
      { label: "Rapports annuels", href: "/investisseurs/reports" },
      { label: "Informations boursières", href: "/investisseurs/stock" },
    ],
  },
  {
    label: "Carrières",
    href: "/carrieres",
    subItems: [
      { label: "Join Us", href: "/carrieres/jobs" },
      { label: "Life at Pernod Ricard", href: "/carrieres/life" },
      { label: "Benefits", href: "/carrieres/benefits" },
    ],
  },
];
