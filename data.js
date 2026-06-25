const portfolioData = {
  profile: {
    name: "Gagan C J",
    titles: ["Software Engineer", "Spring Boot Developer", "AWS Cloud Specialist"],
    avatar: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=400&h=400", // Retro avatar placeholder
    shortBio: "Result-driven Software Engineer with 6+ years of IT experience specializing in Core Java (8+) and the Spring Boot ecosystem.",
    resumeUrl: "#", // Add link to your resume/CV when ready
    socials: {
      github: "https://github.com/GaganCJ", // Add your github link
      linkedin: "https://linkedin.com/gaganjchandra-29011998", // Add your linkedin link
      twitter: "https://twitter.com/", // Add your twitter link
      email: "mailto:gaganjchandra2379@gmail.com"
    }
  },
  about: {
    description: "I am a result-driven Software Engineer with 6+ years of IT experience specializing in Core Java (8+) and the Spring Boot ecosystem. I am proficient in designing, building, and optimizing scalable enterprise applications, microservices, and event-driven architectures. I also have deep expertise in migrating legacy infrastructure to modern containerized environments and integrating analytics engines (Elastic Stack, OpenSearch) for real-time monitoring and anomaly detection.",
    stats: [
      { label: "XP Levels (Years)", value: "6+" },
      { label: "Boss Projects", value: "5" },
      { label: "AWS Services", value: "8+" }
    ]
  },
  skills: [
    // Languages
    { name: "Java 8", category: "Frontend", level: 95, icon: "fab fa-java" },
    { name: "Python", category: "Frontend", level: 80, icon: "fab fa-python" },
    { name: "JavaScript", category: "Frontend", level: 75, icon: "fab fa-js" },
    { name: "SQL", category: "Frontend", level: 88, icon: "fas fa-database" },
    // Frameworks & Libraries
    { name: "Spring Boot", category: "Backend", level: 95, icon: "fas fa-leaf" },
    { name: "Spring JPA", category: "Backend", level: 90, icon: "fas fa-network-wired" },
    { name: "Spring WebServices", category: "Backend", level: 85, icon: "fas fa-server" },
    { name: "Flask", category: "Backend", level: 70, icon: "fas fa-microchip" },
    { name: "React", category: "Backend", level: 65, icon: "fab fa-react" },
    // Cloud & DevOps
    { name: "AWS Cloud", category: "Tools", level: 88, icon: "fab fa-aws" },
    { name: "Docker", category: "Tools", level: 85, icon: "fab fa-docker" },
    { name: "Rancher", category: "Tools", level: 80, icon: "fas fa-cubes" },
    { name: "Jenkins & Maven", category: "Tools", level: 85, icon: "fas fa-tools" },
    { name: "Elastic & OpenSearch", category: "Tools", level: 82, icon: "fas fa-search" },
    { name: "BPMN 2.0 Orchestrator", category: "Tools", level: 80, icon: "fas fa-sitemap" }
  ],
  experience: [
    {
      role: "Associate (Java Developer)",
      company: "Cognizant Technology Solutions (Lumen Technologies)",
      duration: "Dec 2023 - Present",
      description: "Modernization of internal diagnostic tools for internet and voice service incidents.",
      points: [
        "Engineered and optimized backend microservices using Core Java and Spring Boot to enhance automated customer incident detection.",
        "Led the migration of legacy monolithic Java applications from WebLogic to containerized cloud environments using Rancher and Docker.",
        "Secured enterprise REST endpoints by integrating Azure Authentication (MSAL) for Single Sign-On (SSO) within the Spring Security layer.",
        "Designed complex asynchronous workflows using BPMN 2.0 standards, leveraging Java-based service tasks for scalable orchestration."
      ]
    },
    {
      role: "Associate (Integra Developer)",
      company: "Cognizant Technology Solutions (Agilent - Palmer Technologies)",
      duration: "Jul 2023 - Oct 2023",
      description: "Cloud-native solutions for large-scale product data ingestion and transformation on AWS.",
      points: [
        "Developed high-performance Java-based AWS Lambda functions utilizing multi-threading and modern stream APIs to parse complex XML files into structured formats.",
        "Architected event-driven workflows (S3, CloudWatch) and optimized hybrid storage systems across Amazon AuroraDB and DynamoDB using batch updates and query tuning."
      ]
    },
    {
      role: "Project Engineer (DIaaS Developer)",
      company: "Wipro Limited (Tapestry)",
      duration: "Aug 2022 - Nov 2022",
      description: "Retail supply chain analytics focused on inventory and transaction discrepancy reporting.",
      points: [
        "Built robust RESTful APIs using Spring Boot to automate high-throughput CSV data ingestion from SAP and Order Management Systems (OMS).",
        "Wrote complex, optimized SQL validation rules to detect transaction anomalies across ERP platforms."
      ]
    },
    {
      role: "Project Engineer (EIP Portal Developer)",
      company: "Wipro Limited (Simply Energy ANZ)",
      duration: "Aug 2021 - Jun 2022",
      description: "Serverless telemetry portal for renewable energy networks.",
      points: [
        "Developed serverless AWS Lambda functions to aggregate real-time telemetry data from renewable power sources.",
        "Built operational dashboards and configured granular automated alerting rules within Amazon OpenSearch."
      ]
    },
    {
      role: "Project Engineer (SOA Developer)",
      company: "Wipro Limited (XL Axiata)",
      duration: "Mar 2020 - Aug 2021",
      description: "SOA transaction monitoring and distributed log analytics pipelines.",
      points: [
        "Deployed and optimized the ELK Stack (Elasticsearch, Logstash, Kibana) to provide real-time visibility into Service-Oriented Architecture (SOA) transactions.",
        "Created custom Grok patterns for log parsing and secured external API endpoints using Role-Based Access Control (RBAC)."
      ]
    }
  ],
  projects: [
    {
      title: "Incident Diagnostics Modernizer",
      description: "Automated microservices diagnostics system built to capture and resolve core network and customer voice incident anomalies.",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600&h=400",
      tags: ["Java", "Spring Boot", "Rancher", "BPMN 2.0", "Azure MSAL"],
      liveLink: "#",
      githubLink: "#",
      details: {
        role: "Java Developer / Module Lead",
        timeline: "Dec 2023 - Present",
        overview: "Modernization project aimed at migrating bulky legacy monolith systems handling internet diagnostics into lightweight, reactive containerized microservices. The focus was on speeding up automated triage routines for Lumen voice networks.",
        features: [
          "WebLogic to Docker/Rancher containerization shift, boosting infrastructure efficiency.",
          "Asynchronous workflow orchestration leveraging Java BPMN 2.0 service task nodes.",
          "OAuth2 Single Sign-On integration using Microsoft Authentication Library (MSAL) on top of Spring Security."
        ],
        challenges: "Managing workflow failures during concurrent network calls without losing transaction state. Resolved by implementing retry bounds and fallback execution tasks in BPMN.",
        achievements: "Reduced manual lookup time for voice incident reports by automating 30% of standard ticket paths."
      }
    },
    {
      title: "Agilent product ingestion",
      description: "AWS cloud-native high-performance pipeline transforming structural XML feeds into document stores and relational databases.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600&h=400",
      tags: ["Java", "AWS Lambda", "S3", "AuroraDB", "DynamoDB"],
      liveLink: "#",
      githubLink: "#",
      details: {
        role: "Integra Developer",
        timeline: "Jul 2023 - Oct 2023",
        overview: "A high-capacity data integration system deployed to receive bulk catalog updates from suppliers. The system parses multi-gigabyte XML datasets into clean formats suitable for internal business processes.",
        features: [
          "Developed serverless multi-threaded parser routines inside AWS Lambda execution bounds.",
          "Configured bucket triggers in Amazon S3 for automated processing initiation.",
          "Hybrid database schema optimization utilizing DynamoDB and AuroraDB."
        ],
        challenges: "Avoiding AWS Lambda timeouts when parsing large structural XML trees. Resolved this by streaming input feeds and processing databases in custom-tuned batches.",
        achievements: "Ingested over 100,000 product records daily with sub-second API delivery speeds."
      }
    },
    {
      title: "Tapestry Supply Chain Analytics",
      description: "Spring Boot RESTful data pipeline parsing SAP ERP discrepancies and compiling inventory alerts.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&q=80&w=600&h=400",
      tags: ["Spring Boot", "SAP Integration", "SQL Validation", "Oracle"],
      liveLink: "#",
      githubLink: "#",
      details: {
        role: "DIaaS Developer",
        timeline: "Aug 2022 - Nov 2022",
        overview: "Inventory reporting engine designed to ingest large CSV exports from order management systems and SAP nodes to detect inventory leakage or transaction mismatches.",
        features: [
          "Developed Spring Boot file ingestion microservices handling automated transaction loading.",
          "Built high-speed SQL reporting rules searching for ledger discrepancies."
        ],
        challenges: "Synchronizing diverse warehouse formats containing inconsistent schema mapping definitions. Fixed by building a custom data mapper layer inside Spring JPA.",
        achievements: "Detected core stock anomalies across five warehouses, saving manual reporting cycles."
      }
    },
    {
      title: "Simply Energy ANZ Portal",
      description: "AWS serverless grid telemetry pipeline collecting active metrics from renewable power generators.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600&h=400",
      tags: ["AWS Lambda", "DynamoDB", "Amazon OpenSearch", "CloudWatch"],
      liveLink: "#",
      githubLink: "#",
      details: {
        role: "EIP Portal Developer",
        timeline: "Aug 2021 - Jun 2022",
        overview: "Real-time telemetry aggregation hub deployed to capture streaming energy logs from solar arrays and wind assets and ingest them into Amazon OpenSearch.",
        features: [
          "Serverless AWS Lambda nodes aggregating grid telemetry events.",
          "Custom visual OpenSearch dashboard generation with automated metric alarms."
        ],
        challenges: "Ingesting telemetry bursts during peak grid hours. Solved by batching telemetry writes and optimizing DynamoDB write thresholds.",
        achievements: "Created operational visibility that alerted grid operators to grid spikes within seconds."
      }
    },
    {
      title: "XL Axiata Log visibility",
      description: "Distributed ELK log monitoring pipeline parsing log files of Service-Oriented Architecture (SOA) systems.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600&h=400",
      tags: ["Elasticsearch", "Logstash", "Kibana", "Grok Parser", "RBAC"],
      liveLink: "#",
      githubLink: "#",
      details: {
        role: "SOA Developer",
        timeline: "Mar 2020 - Aug 2021",
        overview: "Enterprise observability project providing system administrators real-time transaction debugging dashboards across complex network architectures.",
        features: [
          "Grok log format extraction templates configuration.",
          "Logstash ingest configuration with robust Role-Based Access Control filters."
        ],
        challenges: "Parsing huge raw logs containing divergent formatting standards. Solved by writing optimized, multi-tier Grok regular expression filters.",
        achievements: "Improved mean time to repair (MTTR) for service outages by 40%."
      }
    }
  ]
};

// Export details for use in the script
if (typeof module !== 'undefined' && module.exports) {
  module.exports = portfolioData;
}
