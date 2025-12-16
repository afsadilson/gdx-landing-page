import { useEffect } from 'react';
import { useLanguage } from './LanguageContext';

interface SEOContent {
  title: string;
  description: string;
  keywords: string;
  ogTitle: string;
  ogDescription: string;
}

const SEO_CONTENT: Record<string, SEOContent> = {
  en: {
    title: "Gamedex - Your Game Collection Manager | Track, Organize, Discover Games",
    description: "Gamedex is the ultimate free game collection manager for iOS and Android. Track games across PC, PlayStation, Xbox, Nintendo, and Mobile. Organize your owned, wishlist, and beaten games in one place. Join 1,000+ gamers today.",
    keywords: "game collection, game tracker, video game manager, game library, gaming app, game organizer, backlog tracker",
    ogTitle: "Gamedex - Your Game Collection Manager",
    ogDescription: "Track games across all platforms. Organize your collection into owned, wishlist, and beaten. 100% Free. No Ads. Join 1,000+ gamers."
  },
  pt: {
    title: "Gamedex - Seu Gerenciador de Coleção de Jogos | Rastreie, Organize e Descubra",
    description: "Gamedex é o gerenciador definitivo e gratuito de coleção de jogos para iOS e Android. Acompanhe jogos em PC, PlayStation, Xbox, Nintendo e Mobile. Organize seus jogos em coleções de 'Tenho', 'Desejo' e 'Zerado'. Junte-se a mais de 1.000 gamers.",
    keywords: "coleção de jogos, rastreador de jogos, gerenciador de videogame, biblioteca de jogos, app gamer, organizador de jogos, backlog tracker",
    ogTitle: "Gamedex - Gerenciador de Coleção de Jogos",
    ogDescription: "Rastreie jogos em todas as plataformas. Organize sua coleção em tenho, desejo e zerado. 100% Grátis. Sem Anúncios."
  },
  es: {
    title: "Gamedex - Tu Gestor de Colección de Juegos | Rastrea, Organiza, Descubre",
    description: "Gamedex es el gestor gratuito definitivo para tu colección de juegos en iOS y Android. Rastrea juegos en PC, PlayStation, Xbox, Nintendo y Móvil. Organiza tus juegos en 'Tengo', 'Deseo' y 'Completado'. Únete a más de 1.000 gamers.",
    keywords: "colección de juegos, rastreador de juegos, gestor de videojuegos, biblioteca de juegos, app gaming, organizador de juegos",
    ogTitle: "Gamedex - Gestor de Colección de Juegos",
    ogDescription: "Rastrea juegos en todas las plataformas. Organiza tu colección. 100% Gratis. Sin Anuncios."
  },
  it: {
    title: "Gamedex - Gestore Collezione Giochi | Traccia, Organizza, Scopri",
    description: "Gamedex è il gestore gratuito definitivo per la tua collezione di giochi su iOS e Android. Traccia giochi su PC, PlayStation, Xbox, Nintendo e Mobile. Organizza in 'Posseduti', 'Desiderati' e 'Completati'. Unisciti a oltre 1.000 gamer.",
    keywords: "collezione giochi, tracker giochi, gestore videogiochi, libreria giochi, app gaming, organizzatore giochi",
    ogTitle: "Gamedex - Gestore Collezione Giochi",
    ogDescription: "Traccia giochi su tutte le piattaforme. Organizza la tua collezione. 100% Gratuito. Senza Pubblicità."
  },
  fr: {
    title: "Gamedex - Gestionnaire de Collection de Jeux | Suivez, Organisez, Découvrez",
    description: "Gamedex est le gestionnaire gratuit ultime pour votre collection de jeux sur iOS et Android. Suivez vos jeux sur PC, PlayStation, Xbox, Nintendo et Mobile. Organisez en 'Possédé', 'Souhaité' et 'Terminé'. Rejoignez plus de 1 000 gamers.",
    keywords: "collection de jeux, tracker de jeux, gestionnaire de jeux vidéo, bibliothèque de jeux, app gaming, organisateur de jeux",
    ogTitle: "Gamedex - Gestionnaire de Collection de Jeux",
    ogDescription: "Suivez vos jeux sur toutes les plateformes. Organisez votre collection. 100% Gratuit. Sans Publicité."
  },
  de: {
    title: "Gamedex - Dein Spielesammlungs-Manager | Verfolge, Organisiere, Entdecke",
    description: "Gamedex ist der ultimative kostenlose Spielesammlungs-Manager für iOS und Android. Verfolge Spiele auf PC, PlayStation, Xbox, Nintendo und Mobile. Organisiere in 'Besitz', 'Wunschliste' und 'Durchgespielt'. Schließe dich über 1.000 Gamern an.",
    keywords: "Spielesammlung, Spiele-Tracker, Videospiel-Manager, Spielebibliothek, Gaming-App, Spiele-Organizer",
    ogTitle: "Gamedex - Spielesammlungs-Manager",
    ogDescription: "Verfolge Spiele auf allen Plattformen. Organisiere deine Sammlung. 100% Kostenlos. Werbefrei."
  },
  ja: {
    title: "Gamedex - ゲームコレクション管理 | 追跡、整理、発見",
    description: "Gamedexは、iOSとAndroid向けの究極の無料ゲームコレクション管理アプリです。PC、PlayStation、Xbox、Nintendo、モバイルのゲームを追跡。「所有」「ウィッシュリスト」「クリア済み」に整理。1,000人以上のゲーマーが参加。",
    keywords: "ゲームコレクション, ゲームトラッカー, ビデオゲーム管理, ゲームライブラリ, ゲームアプリ, ゲーム整理",
    ogTitle: "Gamedex - ゲームコレクション管理",
    ogDescription: "すべてのプラットフォームでゲームを追跡。コレクションを整理。完全無料。広告なし。"
  }
};

export const SEOHead: React.FC = () => {
  const { language } = useLanguage();

  useEffect(() => {
    const content = SEO_CONTENT[language] || SEO_CONTENT.en;

    // Update document title
    document.title = content.title;

    // Update html lang attribute
    document.documentElement.lang = language;

    // Update meta tags
    updateMetaTag('name', 'title', content.title);
    updateMetaTag('name', 'description', content.description);
    updateMetaTag('name', 'keywords', content.keywords);

    // Update Open Graph
    updateMetaTag('property', 'og:title', content.ogTitle);
    updateMetaTag('property', 'og:description', content.ogDescription);
    updateMetaTag('property', 'og:locale', getOGLocale(language));
    updateMetaTag('property', 'og:url', `https://gamedex.app/#/${language}`);

    // Update Twitter Card
    updateMetaTag('name', 'twitter:title', content.ogTitle);
    updateMetaTag('name', 'twitter:description', content.ogDescription);

    // Update canonical
    updateCanonical(language);

  }, [language]);

  return null;
};

function updateMetaTag(attrName: string, attrValue: string, content: string) {
  let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
  if (element) {
    element.setAttribute('content', content);
  } else {
    element = document.createElement('meta');
    element.setAttribute(attrName, attrValue);
    element.setAttribute('content', content);
    document.head.appendChild(element);
  }
}

function updateCanonical(language: string) {
  let canonical = document.querySelector('link[rel="canonical"]');
  const url = language === 'en'
    ? 'https://gamedex.app/'
    : `https://gamedex.app/#/${language}`;

  if (canonical) {
    canonical.setAttribute('href', url);
  }
}

function getOGLocale(language: string): string {
  const localeMap: Record<string, string> = {
    en: 'en_US',
    pt: 'pt_BR',
    es: 'es_ES',
    it: 'it_IT',
    fr: 'fr_FR',
    de: 'de_DE',
    ja: 'ja_JP'
  };
  return localeMap[language] || 'en_US';
}
