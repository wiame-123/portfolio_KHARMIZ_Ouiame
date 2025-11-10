
export const projectsData = [
    // Stage - PFA au Groupe OCP
    {
        id: 1,
        name: 'Cost Analysis Data Warehouse & Power BI Dashboard',
        description: "Stage de fin d'année (PFA) au Groupe OCP SA. Développement d'une solution de Business Intelligence complète. Collecte et intégration de données provenant de sources internes et externes, conception et implémentation d'un Data Warehouse en schéma en étoile, et création d'un tableau de bord Power BI interactif. Le tableau de bord fournit aux décideurs des indicateurs clés de performance (KPIs) et une analyse comparative des coûts pour la prise de décision stratégique.",
        tools: ['Power BI', 'SQL Server', 'SSIS', 'ETL', 'Data Warehouse', 'DAX', 'Power Query'],
        role: 'BI Developer',
        demo: '',
        date: 'Juillet - Septembre 2025',
        location: 'Groupe OCP SA, Casablanca, Maroc'
    }, 
    // Stage - PMP
    {
        id: 2,
        name: 'Public Procurement Management System',
        description: "Stage en développement web à la Présidence du ministère public (PMP). Développement d'une application web complète pour la gestion des processus d'achats publics. Le système gère la gestion des fournisseurs, le suivi des appels d'offres, les délais de soumission et l'évaluation des soumissions. Implémentation d'une authentification sécurisée, d'un contrôle d'accès basé sur les rôles et de notifications automatisées pour les étapes importantes des achats publics.",
        tools: ['Laravel', 'MySQL', 'PHP', 'Bootstrap', 'JavaScript', 'jQuery'],
        role: 'Full Stack Developer',
        demo: '',
        date: 'Août - Septembre 2024',
        location: 'Présidence du ministère public, Rabat, Maroc'
    },
    
    // Stage - EIGHT-id
    {
        id: 3,
        name: 'Carugati Automobiles Website',
        description: 'Stage chez EIGHT-id. Conception et développement d\'un site vitrine pour Carugati Automobiles, concessionnaire automobile de luxe à Genève. Le site présente de manière élégante leur inventaire de véhicules, les services de l\'entreprise et les informations de contact. Implémentation d\'un design responsive et optimisation des performances pour une expérience utilisateur exceptionnelle.',
        tools: ['WordPress', 'PHP', 'CSS', 'JavaScript', 'Elementor'],
        role: 'Web Developer',
        demo: '',
        date: 'Juillet 2024',
        location: 'EIGHT-id, Rabat, Maroc'
    },
    // Stage - AMDL
    {
        id: 4,
        name: 'Employee Management System',
        description: "Stage d'observation à l'Agence Marocaine de Développement de la Logistique (AMDL). Développement d'une application web interne pour la gestion des informations et des flux de travail des employés. Implémentation d'opérations CRUD pour les dossiers des employés, gestion des départements et suivi des congés. Développé avec le framework Symfony en suivant l'architecture MVC et les meilleures pratiques.",
        tools: ['Symfony', 'PHP', 'MySQL', 'Twig', 'Bootstrap', 'Doctrine ORM'],
        role: 'Full Stack Developer',
        demo: '',
        date: 'Août - Septembre 2023',
        location: 'AMDL, Rabat, Maroc'
    },
    {
        id: 5,
        name: 'Restaurent Reservation System',
        description: 'Built a full-stack hotel reservation platform with Django REST Framework backend and React frontend. Features include room availability search, booking management, payment integration, user authentication, and admin dashboard for hotel management. Implemented real-time availability updates and email notifications for booking confirmations.',
        tools: ['React', 'Django', 'Django REST Framework', 'PostgreSQL', 'Tailwind CSS', 'Redux', 'JWT'],
        role: 'Full Stack Developer',
        demo: '',
    },
    {
        id: 6,
        name: 'Inventory Management System',
        description: 'Developed a JavaScript-based inventory management application for tracking products, stock levels, and supplier information. Features include barcode scanning, low-stock alerts, purchase order generation, and comprehensive reporting. Implemented with vanilla JavaScript and modern ES6+ features for optimal performance.',
        tools: ['JavaScript', 'HTML5', 'CSS3', 'LocalStorage API', 'Chart.js', 'Bootstrap'],
        role: 'Full Stack Developer',
        demo: '',
    },
    // Projet Académique - PFA
    {
        id: 7,
        name: 'End-of-Year Project (PFA)',
        description: 'Projet de fin d\'année. Mise en place d\'une pipeline CI/CD pour une application web. Conception et implémentation d\'un pipeline complet pour le déploiement automatisé. Le pipeline comprend des tests automatisés, des vérifications de qualité de code, la conteneurisation avec Docker et le déploiement sur infrastructure cloud. Intégration avec GitHub pour le contrôle de version et les flux de travail automatisés.',
        tools: ['CI/CD', 'Docker', 'GitHub Actions', 'Azure DevOps', 'Jenkins', 'Kubernetes', 'Nginx'],
        role: 'DevOps Engineer',
        demo: '',
        date: 'Projet Académique PFA',
        location: 'EMSI Rabat, Maroc'
    },  
    {
        id: 8,
        name: 'Azure Data Pipeline Migration',
        description: 'Migrated legacy SSIS data pipeline to modern Azure Data Factory architecture. Implemented ETL processes for data integration from multiple sources, created star schema data warehouse, and built interactive Power BI dashboards for business intelligence. Achieved significant performance improvements and cost reduction.',
        tools: ['Azure Data Factory', 'Power BI', 'SQL Server', 'SSIS', 'Azure SQL Database', 'T-SQL'],
        role: 'Data Engineer',
        demo: '',
    },
    {
        id: 9,
        name: 'Real-time Data Streaming Platform',
        description: 'Developed a real-time data streaming solution using Azure Event Hub and Databricks. Implemented PySpark jobs to process JSON data streams and convert them to CSV format for analytics. The system handles high-volume data ingestion with low latency and includes monitoring and alerting capabilities.',
        tools: ['Azure Event Hub', 'Databricks', 'PySpark', 'Python', 'Azure Blob Storage', 'Apache Spark'],
        role: 'Data Engineer',
        demo: '',
    },
    // Projet Data Cloud (académique)
    {
        id: 10,
        name: 'Data Cloud Project',
        description: 'Projet académique - Migration d\'un pipeline SSIS vers Azure Data Factory et streaming de données JSON en temps réel depuis Azure Event Hub vers des fichiers CSV à l\'aide de PySpark sur Databricks. Projet combinant migration de pipeline legacy vers Azure Data Factory avec tableau de bord Power BI, et implémentation d\'un système de streaming de données en temps réel pour l\'analyse.',
        tools: ['Azure Data Factory', 'SSIS Migration', 'Power BI', 'Azure Event Hub', 'Databricks', 'PySpark', 'JSON Processing', 'CSV Export'],
        role: 'Data Engineer',
        demo: '',
        date: 'Projet Académique',
        location: 'EMSI Rabat, Maroc'
    },
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',

//     demo: '',
// },