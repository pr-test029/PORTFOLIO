import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Lamuka242',
    shortDescription: 'Institution de la société civile pour les droits des femmes vivant avec handicap.',
    fullDescription: 'Le Collectif LAMUKA est une institution de la société civile congolaise pour les droits et l\'autonomisation des femmes vivant avec handicap en République du Congo. Elle est fondée sur les principes de l\'éthique, de l\'égalité et de l\'inclusion. Elle s\'engage dans le combat contre les multiples discriminations que subissent ces femmes, tant en raison de leur genre que de leur handicap.',
    pitch: 'Défendre les droits et favoriser l\'autonomisation des femmes vivant avec handicap.',
    category: 'web',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Netlify', 'Inclusion'],
    icon: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=800&auto=format&fit=crop',
    link: 'https://lamuka242.netlify.app',
    features: [
      'Plateforme d\'information et de sensibilisation sur les droits des femmes vivant avec handicap.',
      'Outils d\'autonomisation et ressources pour l\'inclusion sociale.',
      'Espace de lutte contre les discriminations basées sur le genre et le handicap.',
      'Interface accessible et inclusive.'
    ],
    stack: {
      frontend: 'Développé avec React et TypeScript, garantissant une interface robuste, typée et performante.',
      deployment: 'Hébergement et déploiement continu via Netlify, assurant une haute disponibilité.',
      other: ['Application Single Page (SPA) pour une navigation fluide sans rechargement de page.']
    },
    highlights: [
      'Institution engagée pour l\'éthique, l\'égalité et l\'inclusion.',
      'Combat contre les multiples discriminations.',
      'Site web créé pour amplifier la voix et l\'impact du collectif.'
    ]
  },
  {
    id: 2,
    title: 'PR-Transcribe',
    shortDescription: 'Application intelligente de transcription de texte (manuscrit et numérique).',
    fullDescription: 'PR-Transcribe est une application intelligente dédiée à la transcription de texte uniquement. Elle est capable de comprendre et de transcrire fidèlement le texte manuscrit et numérique. Elle reproduit avec précision la mise en forme originale (tableaux, styles de texte comme gras/italique, symboles mathématiques, scientifiques ou biologiques). Les fichiers transcrits peuvent être modifiés manuellement dans l\'application et exportés au format Word. Grâce à l\'IA, le processus de transcription est extrêmement rapide et peut traiter plusieurs fichiers simultanément.',
    pitch: 'Transcription intelligente, rapide et fidèle de vos documents manuscrits et numériques.',
    category: 'app',
    tags: ['React', 'TypeScript', 'IA', 'OCR', 'Transcription'],
    icon: 'https://images.unsplash.com/photo-1568667256549-094345857637?q=80&w=800&auto=format&fit=crop',
    link: 'https://pr-transcribe.netlify.app/',
    features: [
      'Transcription intelligente de texte manuscrit et numérique.',
      'Reproduction fidèle de la mise en forme (tableaux, styles, symboles).',
      'Prise en charge de symboles mathématiques, scientifiques et biologiques.',
      'Édition manuelle des textes transcrits.',
      'Exportation au format Microsoft Word (.docx).',
      'Traitement rapide par IA de plusieurs fichiers simultanément.'
    ],
    stack: {
      frontend: 'Architecture React & TypeScript pour une interface de gestion fluide.',
      ai: 'Moteur d\'IA pour la transcription rapide et la reconnaissance de mise en forme.',
      deployment: 'Déploiement optimisé sur Netlify.'
    },
    highlights: [
      'Transcription fidèle et intelligente.',
      'Gestion complexe de la mise en forme et des symboles.',
      'Gain de temps grâce au traitement par IA multi-fichiers.'
    ]
  },
  {
    id: 3,
    title: 'PR-SCL',
    shortDescription: 'Plateforme de gestion scolaire avec certification numérique des résultats.',
    fullDescription: 'PR-SCL sécurise le parcours académique des élèves. Bien plus qu\'un simple logiciel de gestion, l\'application automatise la production de documents scolaires officiels tout en garantissant leur inviolabilité grâce à un système de vérification par QR Code.',
    pitch: 'Sécurisez le parcours académique de vos élèves avec PR-SCL.',
    category: 'app',
    tags: ['React', 'TypeScript', 'QR Code', 'PDF Generation', 'Security'],
    icon: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800&auto=format&fit=crop',
    link: 'https://pr-scl.netlify.app',
    features: [
      'Génération Automatique de Bulletins : Calcul instantané des moyennes, rangs et mentions.',
      'Sécurisation par QR Code : Chaque bulletin comporte un QR Code unique pour confirmation d\'authenticité.',
      'Protection contre la Fraude : Système de certification numérique rendant les falsifications impossibles.',
      'Gestion Administrative Complète : Pilotage des inscriptions et archivage numérique.',
      'Espace Enseignant : Saisie simplifiée des notes avec validation hiérarchique.'
    ],
    stack: {
      frontend: 'Architecture React & TypeScript pour une interface métier réactive.',
      other: [
        'Moteur de Certification : Algorithmes de génération de QR Codes dynamiques.',
        'Gestion PDF : Librairies de génération de documents à la volée.'
      ],
      deployment: 'Infrastructure robuste sur Netlify.'
    },
    highlights: [
      'Fiabilité Institutionnelle : Design sobre et professionnel.',
      'Processus Automatisé : Passage de la saisie à l\'impression en quelques clics.',
      'Vérification Instantanée : Outil de scan intégré pour valider un bulletin.'
    ]
  },
  {
    id: 4,
    title: 'PR-Cluster',
    shortDescription: 'Plateforme de réseautage social dynamique et collaborative.',
    fullDescription: 'PR-Cluster redéfinit l\'interaction sociale en offrant un espace où la donnée est organisée par "clusters" thématiques, permettant une communication ciblée et une expérience utilisateur hautement personnalisée. Connectez, partagez et collaborez au sein d\'un écosystème numérique fluide.',
    pitch: 'Connectez, partagez et collaborez au sein d\'un écosystème numérique fluide.',
    category: 'web',
    tags: ['React', 'TypeScript', 'Firebase', 'Realtime', 'Netlify'],
    icon: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop',
    link: 'https://prcluster.netlify.app/',
    features: [
      'Flux d\'Actualités en Temps Réel : Système de publication et de mise à jour instantanée des contenus pour une interactivité maximale.',
      'Architecture par Clusters : Organisation des communautés et des discussions par centres d\'intérêt ou groupes spécifiques.',
      'Profils Utilisateurs Riches : Personnalisation avancée des espaces personnels et gestion des relations (amis, abonnés, connexions).',
      'Système d\'Interactions : Engagement via des commentaires, des réactions et des partages de contenus multimédias.',
      'Notifications Intelligentes : Alertes en temps réel sur l\'activité du réseau pour maintenir l\'engagement des utilisateurs.'
    ],
    stack: {
      frontend: 'Développé avec React et TypeScript, garantissant une interface ultra-réactive (SPA) et une maintenance simplifiée.',
      backend: 'Utilisation de Firebase (Firestore/Realtime Database) pour la synchronisation des données en direct.',
      deployment: 'Déploiement continu sur Netlify, optimisé pour les performances mondiales.',
      other: ['Gestion complexe des flux de données et des sessions utilisateurs.']
    },
    highlights: [
      'Interface Moderne : Design inspiré des standards actuels des réseaux sociaux, privilégiant la clarté et la rapidité de navigation.',
      'Expérience Mobile-First : Ergonomie parfaitement adaptée aux smartphones pour une utilisation nomade.',
      'Navigation Fluide : Transition sans rechargement entre les différents espaces du réseau (Profil, Feed, Groupes).'
    ]
  },
  {
    id: 5,
    title: 'Powerful Reach',
    shortDescription: 'Agence digitale spécialisée en solutions numériques innovantes.',
    fullDescription: 'Site web d\'une agence digitale basée à Brazzaville, Congo. Powerful Reach fusionne créativité et technologie pour propulser les entreprises vers de nouveaux sommets. L\'agence affiche +50 projets réalisés et propose une expertise 360° dans le domaine du digital.',
    pitch: 'L\'agence qui domine le digital.',
    category: 'web',
    tags: ['React', 'Netlify', 'UI/UX', 'Digital Agency'],
    icon: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    link: 'https://powerfulreach.netlify.app/',
    features: [
      'Développement Web : Sites vitrines, E-commerce, Blogs & Portfolios.',
      'Applications Mobiles : Apps natives iOS/Android, Web Apps PWA.',
      'Design & Infographie : Logos, Branding, Supports de communication.',
      'Référencement Local : Google Business Profile, SEO Local, Géolocalisation.'
    ],
    stack: {
      frontend: 'Développé avec React (SPA).',
      deployment: 'Hébergé sur Netlify.',
      other: ['Design moderne', 'Widget chat', 'Newsletter']
    },
    highlights: [
      '+50 projets réalisés.',
      'Expertise 360° dans le domaine du digital.',
      'Design moderne : dark/light mode, typographie bold.'
    ]
  }
];
