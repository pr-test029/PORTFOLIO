import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Lamuka242',
    shortDescription: 'Plateforme d\'engagement citoyen et d\'information.',
    fullDescription: 'Lamuka242 est une solution numérique moderne dédiée à la sensibilisation et à la mobilisation. Elle centralise les informations essentielles et les ressources pour favoriser l\'éveil de la conscience collective et la participation active au développement local.',
    pitch: 'Une solution numérique moderne dédiée à la sensibilisation et à la mobilisation.',
    category: 'web',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Netlify'],
    icon: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=800&auto=format&fit=crop',
    link: 'https://lamuka242.netlify.app',
    features: [
      'Diffusion de Contenus : Système de gestion et d\'affichage d\'articles ou de communiqués thématiques.',
      'Interface Responsive : Expérience utilisateur optimisée pour une consultation fluide sur mobile et desktop.',
      'Interactivité : Intégration de formulaires ou de boutons d\'appel à l\'action pour engager la communauté.',
      'Navigation Intuitive : Architecture de l\'information pensée pour un accès rapide aux sections clés du projet.'
    ],
    stack: {
      frontend: 'Développé avec React et TypeScript, garantissant une interface robuste, typée et performante.',
      deployment: 'Hébergement et déploiement continu via Netlify, assurant une haute disponibilité.',
      other: ['Application Single Page (SPA) pour une navigation fluide sans rechargement de page.']
    },
    highlights: [
      'Identité Visuelle Marquante : Utilisation de codes visuels forts en adéquation avec le message du projet.',
      'Accessibilité : Lisibilité accrue et hiérarchie visuelle claire.',
      'Performance : Optimisation des assets pour un affichage instantané.'
    ]
  },
  {
    id: 2,
    title: 'PR-Transcribe',
    shortDescription: 'L\'outil ultime de numérisation et de conversion de documents.',
    fullDescription: 'PR-Transcribe est une application de pointe capable d\'extraire le texte de n\'importe quel support visuel tout en préservant l\'intégrité de la mise en page originale, pour une transition fluide vers un format éditable.',
    pitch: 'Donnez une seconde vie numérique à vos contenus, qu\'ils soient imprimés, audio ou manuscrits.',
    category: 'app',
    tags: ['React', 'TypeScript', 'AI/OCR', 'Deep Learning', 'Office API'],
    icon: 'https://images.unsplash.com/photo-1568667256549-094345857637?q=80&w=800&auto=format&fit=crop',
    link: 'https://pr-transcribe.netlify.app/',
    features: [
      'Reconnaissance Manuscrite (HTR) : Conversion de notes prises à la main en texte numérique.',
      'Préservation de Mise en Forme : Capacité unique à conserver la structure du document source.',
      'Moteur de Tableaux & Symboles : Extraction et reconstruction de tableaux complexes et formules mathématiques.',
      'Export natif Microsoft Word (.docx) : Génération de fichiers entièrement modifiables.',
      'Transcription Multimédia : Prise en charge des flux audio et vidéo.'
    ],
    stack: {
      frontend: 'Architecture React & TypeScript pour une interface de gestion de fichiers fluide.',
      ai: 'Intégration de modèles d\'OCR et de Deep Learning pour le traitement des manuscrits.',
      deployment: 'Déploiement optimisé sur Netlify.'
    },
    highlights: [
      'Fidélité de Rendu : Le document Word ressemble exactement à l\'image source.',
      'Efficacité Professionnelle : Gain de temps massif pour les secteurs académiques et juridiques.',
      'Interface Clean : Focus sur la zone de dépôt de fichiers.'
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
  }
];
