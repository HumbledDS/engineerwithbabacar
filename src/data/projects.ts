import { Database, Cloud, Cpu, LineChart } from 'lucide-react';

export type Project = {
  id: string;
  slug: string;
  title: string;
  category: {
    id: string;
    name: string;
    icon: any;
  };
  description: string;
  image: string;
  duration: string;
  team: string;
  impact: string;
  challenge: {
    title: string;
    description: string;
    points: string[];
  };
  solution: {
    title: string;
    description: string;
    points: string[];
  };
  architecture: {
    title: string;
    description: string;
    components: {
      title: string;
      description: string;
      icon: any;
    }[];
  };
  technologies: {
    name: string;
    description: string;
    version: string;
  }[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
    company: string;
    image: string;
  };
  related: string[];
};

export const categories = [
  {
    id: 'all',
    name: 'Tous les Projets',
    icon: Database,
  },
  {
    id: 'data-engineering',
    name: 'Data Engineering',
    icon: Database,
  },
  {
    id: 'cloud',
    name: 'Cloud & Infrastructure',
    icon: Cloud,
  },
  {
    id: 'mlops',
    name: 'MLOps',
    icon: Cpu,
  },
  {
    id: 'analytics',
    name: 'Analytics & BI',
    icon: LineChart,
  },
];

export const projects: Project[] = [
  {
    id: 'realtime-pipeline',
    slug: 'pipeline-temps-reel',
    title: 'Pipeline de Données en Temps Réel',
    category: categories[1],
    description: 'Mise en place d\'un pipeline de données en temps réel pour une application de trading, réduisant la latence de 80% et améliorant la fiabilité.',
    image: '/projects/realtime-pipeline.jpg',
    duration: '3 mois',
    team: '5 personnes',
    impact: '80% réduction de latence',
    challenge: {
      title: 'Le Défi',
      description: 'Le client, une entreprise de trading à haute fréquence, faisait face à des problèmes critiques de latence dans leur pipeline de données. Les délais de traitement des données de marché causaient des pertes d\'opportunités de trading et des risques opérationnels.',
      points: [
        'Latence excessive dans le traitement des données de marché',
        'Fiabilité insuffisante du pipeline existant',
        'Coûts d\'infrastructure élevés',
        'Difficulté à scaler avec l\'augmentation du volume de données',
      ],
    },
    solution: {
      title: 'Notre Solution',
      description: 'Nous avons conçu et implémenté un pipeline de données en temps réel basé sur une architecture event-driven, utilisant les dernières technologies de streaming et de traitement distribué.',
      points: [
        'Architecture event-driven avec Apache Kafka pour le streaming',
        'Traitement distribué avec Apache Spark pour la scalabilité',
        'Infrastructure cloud-native sur AWS pour la flexibilité',
        'Monitoring en temps réel et alerting proactif',
      ],
    },
    architecture: {
      title: 'Architecture Technique',
      description: 'Une architecture event-driven basée sur des microservices pour garantir la scalabilité et la fiabilité du pipeline.',
      components: [
        {
          title: 'Ingestion des Données',
          description: 'Apache Kafka pour la collecte et le streaming des données de marché en temps réel.',
          icon: Database,
        },
        {
          title: 'Traitement',
          description: 'Apache Spark pour le traitement distribué des données avec une latence minimale.',
          icon: Cloud,
        },
        {
          title: 'Orchestration',
          description: 'Apache Airflow pour l\'orchestration des workflows et la gestion des dépendances.',
          icon: LineChart,
        },
        {
          title: 'Monitoring',
          description: 'Prometheus et Grafana pour le monitoring en temps réel des performances.',
          icon: Cpu,
        },
      ],
    },
    technologies: [
      {
        name: 'Apache Kafka',
        description: 'Message broker pour le streaming de données',
        version: '3.2.0',
      },
      {
        name: 'Apache Spark',
        description: 'Moteur de traitement distribué',
        version: '3.3.0',
      },
      {
        name: 'Apache Airflow',
        description: 'Orchestration des workflows',
        version: '2.5.0',
      },
      {
        name: 'AWS EKS',
        description: 'Kubernetes managé pour le déploiement',
        version: '1.24',
      },
    ],
    testimonial: {
      quote: 'La mise en place du pipeline de données en temps réel a transformé nos opérations de trading. La réduction de 80% de la latence nous a permis de prendre des décisions plus rapides et plus précises, résultant en une augmentation significative de nos performances.',
      author: 'Jean Dupont',
      role: 'CTO',
      company: 'Trading Solutions SA',
      image: '/testimonials/trading-solutions.jpg',
    },
    related: ['platforme-mlops', 'migration-data-mesh'],
  },
  {
    id: 'mlops-platform',
    slug: 'platforme-mlops',
    title: 'Plateforme MLOps Complète',
    category: categories[3],
    description: 'Développement d\'une plateforme MLOps end-to-end permettant le déploiement automatisé et le monitoring de modèles ML en production.',
    image: '/projects/mlops-platform.jpg',
    duration: '6 mois',
    team: '8 personnes',
    impact: '90% réduction du temps de déploiement',
    challenge: {
      title: 'Le Défi',
      description: 'Une entreprise de e-commerce cherchait à industrialiser ses modèles de ML pour la recommandation de produits, mais rencontrait des difficultés dans le déploiement et le monitoring de ses modèles en production.',
      points: [
        'Déploiement manuel des modèles ML',
        'Absence de versioning des modèles',
        'Monitoring insuffisant des performances',
        'Difficulté à reproduire les expériences',
      ],
    },
    solution: {
      title: 'Notre Solution',
      description: 'Nous avons développé une plateforme MLOps complète permettant l\'automatisation du cycle de vie des modèles ML, de l\'expérimentation au déploiement en production.',
      points: [
        'Pipeline CI/CD pour les modèles ML avec Kubeflow',
        'Gestion des versions avec MLflow',
        'Monitoring des performances en production',
        'Infrastructure Kubernetes pour la scalabilité',
      ],
    },
    architecture: {
      title: 'Architecture Technique',
      description: 'Une plateforme MLOps complète permettant l\'automatisation du cycle de vie des modèles ML.',
      components: [
        {
          title: 'Expérimentation',
          description: 'Kubeflow pour la gestion des expériences ML et le versioning des modèles.',
          icon: Cpu,
        },
        {
          title: 'Feature Store',
          description: 'Feast pour la gestion et le versioning des features.',
          icon: Database,
        },
        {
          title: 'Serving',
          description: 'Seldon Core pour le déploiement et le serving des modèles.',
          icon: Cloud,
        },
        {
          title: 'Monitoring',
          description: 'Evidently pour le monitoring des modèles en production.',
          icon: LineChart,
        },
      ],
    },
    technologies: [
      {
        name: 'Kubeflow',
        description: 'Plateforme MLOps sur Kubernetes',
        version: '1.7.0',
      },
      {
        name: 'MLflow',
        description: 'Gestion du cycle de vie des modèles',
        version: '2.3.0',
      },
      {
        name: 'Seldon Core',
        description: 'Serving des modèles ML',
        version: '1.15.0',
      },
      {
        name: 'Kubernetes',
        description: 'Orchestration des conteneurs',
        version: '1.24',
      },
    ],
    testimonial: {
      quote: 'La plateforme MLOps a révolutionné notre approche du machine learning. Nous pouvons maintenant déployer et maintenir nos modèles en production avec une efficacité sans précédent, tout en garantissant leur qualité et leur performance.',
      author: 'Marie Laurent',
      role: 'Directrice Data Science',
      company: 'E-Commerce Plus',
      image: '/testimonials/ecommerce-plus.jpg',
    },
    related: ['pipeline-temps-reel', 'plateforme-analytics'],
  },
  {
    id: 'data-mesh',
    slug: 'migration-data-mesh',
    title: 'Migration vers Data Mesh',
    category: categories[1],
    description: 'Transformation d\'une architecture data monolithique en une architecture data mesh pour une meilleure scalabilité et gouvernance.',
    image: '/projects/data-mesh.jpg',
    duration: '8 mois',
    team: '12 personnes',
    impact: '60% réduction des coûts',
    challenge: {
      title: 'Le Défi',
      description: 'Une grande entreprise financière cherchait à moderniser son architecture data monolithique pour améliorer la scalabilité et la gouvernance de ses données.',
      points: [
        'Architecture data monolithique difficile à maintenir',
        'Gouvernance des données centralisée inefficace',
        'Difficulté à scaler avec la croissance des données',
        'Manque d\'autonomie des équipes métier',
      ],
    },
    solution: {
      title: 'Notre Solution',
      description: 'Nous avons orchestré la migration vers une architecture data mesh, permettant une meilleure distribution des responsabilités et une gouvernance plus efficace.',
      points: [
        'Définition des domaines data avec les équipes métier',
        'Mise en place d\'une infrastructure data mesh',
        'Automatisation des pipelines avec dbt et Airflow',
        'Gouvernance distribuée avec Azure Purview',
      ],
    },
    architecture: {
      title: 'Architecture Technique',
      description: 'Une architecture data mesh moderne pour une meilleure gouvernance et scalabilité.',
      components: [
        {
          title: 'Data Products',
          description: 'dbt pour la transformation et la documentation des données.',
          icon: Database,
        },
        {
          title: 'Orchestration',
          description: 'Apache Airflow pour l\'orchestration des pipelines data.',
          icon: LineChart,
        },
        {
          title: 'Gouvernance',
          description: 'Azure Purview pour la gouvernance et le catalogage des données.',
          icon: Cloud,
        },
        {
          title: 'Infrastructure',
          description: 'Terraform pour l\'infrastructure as code.',
          icon: Cpu,
        },
      ],
    },
    technologies: [
      {
        name: 'dbt',
        description: 'Transformation des données',
        version: '1.4.0',
      },
      {
        name: 'Apache Airflow',
        description: 'Orchestration des pipelines',
        version: '2.5.0',
      },
      {
        name: 'Azure Purview',
        description: 'Gouvernance des données',
        version: '1.0',
      },
      {
        name: 'Terraform',
        description: 'Infrastructure as Code',
        version: '1.3.0',
      },
    ],
    testimonial: {
      quote: 'La migration vers une architecture data mesh a considérablement amélioré notre gouvernance des données et notre capacité à scaler. Les équipes métier sont maintenant plus autonomes et peuvent accéder aux données dont elles ont besoin de manière plus efficace.',
      author: 'Pierre Martin',
      role: 'Directeur Data',
      company: 'Finance Group',
      image: '/testimonials/finance-group.jpg',
    },
    related: ['pipeline-temps-reel', 'plateforme-analytics'],
  },
  {
    id: 'analytics-platform',
    slug: 'plateforme-analytics',
    title: 'Plateforme Analytics Self-Service',
    category: categories[4],
    description: 'Création d\'une plateforme d\'analytics self-service permettant aux équipes business d\'accéder et d\'analyser les données en autonomie.',
    image: '/projects/analytics-platform.jpg',
    duration: '4 mois',
    team: '6 personnes',
    impact: '70% d\'autonomie accrue',
    challenge: {
      title: 'Le Défi',
      description: 'Une entreprise de retail cherchait à démocratiser l\'accès aux données pour ses équipes business, tout en maintenant la qualité et la cohérence des analyses.',
      points: [
        'Dépendance excessive vis-à-vis de l\'équipe data',
        'Manque de cohérence dans les analyses',
        'Temps d\'attente long pour les requêtes data',
        'Difficulté à scaler les besoins en analytics',
      ],
    },
    solution: {
      title: 'Notre Solution',
      description: 'Nous avons développé une plateforme d\'analytics self-service permettant aux équipes business d\'accéder et d\'analyser les données en autonomie, tout en maintenant la qualité des données.',
      points: [
        'Data warehouse moderne avec Snowflake',
        'Transformation des données avec dbt',
        'Visualisation avec Tableau',
        'Formation et documentation des utilisateurs',
      ],
    },
    architecture: {
      title: 'Architecture Technique',
      description: 'Une plateforme analytics moderne pour l\'autonomie des équipes business.',
      components: [
        {
          title: 'Data Warehouse',
          description: 'Snowflake pour le stockage et le traitement des données.',
          icon: Database,
        },
        {
          title: 'Transformation',
          description: 'dbt pour la transformation et la documentation des données.',
          icon: Cpu,
        },
        {
          title: 'Visualisation',
          description: 'Tableau pour la visualisation et l\'analyse des données.',
          icon: LineChart,
        },
        {
          title: 'Gouvernance',
          description: 'Collibra pour la gouvernance et le catalogage des données.',
          icon: Cloud,
        },
      ],
    },
    technologies: [
      {
        name: 'Snowflake',
        description: 'Data warehouse cloud',
        version: '6.0',
      },
      {
        name: 'dbt',
        description: 'Transformation des données',
        version: '1.4.0',
      },
      {
        name: 'Tableau',
        description: 'Visualisation des données',
        version: '2022.3',
      },
      {
        name: 'Collibra',
        description: 'Gouvernance des données',
        version: '5.0',
      },
    ],
    testimonial: {
      quote: 'La plateforme analytics self-service a démocratisé l\'accès aux données dans notre entreprise. Les équipes business peuvent maintenant prendre des décisions basées sur les données de manière autonome, ce qui a considérablement amélioré notre réactivité et notre performance.',
      author: 'Sophie Dubois',
      role: 'Directrice Marketing',
      company: 'Retail Solutions',
      image: '/testimonials/retail-solutions.jpg',
    },
    related: ['platforme-mlops', 'migration-data-mesh'],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getRelatedProjects(slug: string): Project[] {
  const project = getProjectBySlug(slug);
  if (!project) return [];
  return project.related
    .map((relatedSlug) => getProjectBySlug(relatedSlug))
    .filter((project): project is Project => project !== undefined);
}

export function getProjectsByCategory(categoryId: string): Project[] {
  if (categoryId === 'all') return projects;
  return projects.filter((project) => project.category.id === categoryId);
}

export function getProjectsByTechnology(technology: string): Project[] {
  return projects.filter((project) =>
    project.technologies.some((tech) =>
      tech.name.toLowerCase().includes(technology.toLowerCase())
    )
  );
} 