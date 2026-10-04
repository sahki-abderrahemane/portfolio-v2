export interface Project {
  slug: string;
  theme: string;
  title: string;
  description: string;
  longDescription: string;
  /** One-line problem statement */
  problem?: string;
  /** One-line solution */
  solution?: string;
  technologies: string[];
  /** Structured stack by domain */
  stack?: {
    frontend?: string[];
    backend?: string[];
    aiml?: string[];
    data?: string[];
    infra?: string[];
  };
  image: string;
  category: 'AI / ML' | 'Full-Stack Production' | 'Dashboards & Internal Tools' | 'Data / Graph' | 'Productivity';
  secondaryCategory?: string;
  links: {
    link?: string | null;
    github?: string | null;
  };
  status: 'Live' | 'Completed' | 'Private' | 'In Progress';
  highlights: string[];
  challenges?: string[];
  results?: string[];
  architecture?: string;
  /** Display order — lower = shown first */
  order: number;
  featured: boolean;
}

export const projects: Project[] = [
  // ─── AI / ML ──────────────────────────────────────────────────────────────
  {
    slug: 'visual-mind',
    order: 1,
    theme: 'Multimodal AI',
    title: 'VisualMind',
    description:
      'Multimodal visual product search and recommendation engine using CLIP embeddings and FAISS vector search.',
    problem:
      'Traditional text-based product search misses visual similarity — users can\'t find what they\'re looking for with words alone.',
    solution:
      'CLIP (ViT-B/32) embeddings + FAISS IndexFlatIP across 145,050 products, with zero-shot tagging, multimodal fusion, and offline recommendations.',
    longDescription:
      'VisualMind is a multimodal product discovery engine built on the Amazon Berkeley Objects dataset (145,050 products). It encodes product images using OpenAI CLIP (ViT-B/32) into 512D embeddings stored in a FAISS IndexFlatIP vector index. Users can search by text description, upload a reference image, or combine both via weighted multimodal fusion (60% image / 40% text). The system also provides zero-shot CLIP classification for automatic product tagging (category, color, style), precomputed nearest-neighbor recommendations, and a Streamlit analytics dashboard with UMAP embedding visualization. Search events are published to Apache Kafka, and Apache Airflow schedules daily FAISS index rebuilds and recommendation refreshes.',
    technologies: ['Python', 'CLIP', 'FAISS', 'FastAPI', 'Kafka', 'Airflow', 'Streamlit', 'SQLite', 'Docker'],
    stack: {
      aiml: ['CLIP (openai/clip-vit-base-patch32)', 'FAISS (IndexFlatIP)', 'PyTorch', 'HuggingFace Transformers'],
      backend: ['FastAPI', 'Python', 'SQLAlchemy', 'SQLite'],
      frontend: ['Streamlit', 'Plotly', 'UMAP'],
      data: ['Pandas', 'PyArrow', 'Pillow', 'NumPy'],
      infra: ['Docker', 'Docker Compose', 'Apache Kafka', 'Apache Airflow'],
    },
    image: '/visualmind.png',
    category: 'AI / ML',
    links: { link: null, github: null },
    status: 'Completed',
    highlights: [
      'Multimodal CLIP embeddings (image + text in shared 512D space)',
      'FAISS IndexFlatIP exact search over 145,050 product vectors',
      'Multimodal fusion with configurable weight (60% image / 40% text)',
      'Zero-shot CLIP classification for automatic product tagging (category, color, style)',
      'Precomputed nearest-neighbor recommendations served via REST API',
      'Kafka search event pipeline for analytics tracking',
      'Airflow DAGs for daily index rebuild and recommendation refresh',
      'Streamlit analytics dashboard with UMAP embedding visualization',
    ],
    challenges: [
      'Aligning text and image embedding distributions for consistent retrieval quality across modalities',
      'Designing weighted multimodal fusion that balances visual and textual relevance',
      'Building an event-driven pipeline (Kafka + Airflow) for continuous index freshness',
    ],
    results: [
      'Full pipeline: 8 steps from environment setup to Kafka+Streamlit analytics, all implemented',
      'Index covers 145,050 products across 573 categories (~167 MB SQLite database)',
      'Exact nearest-neighbor search via FAISS IndexFlatIP with sub-50ms latency',
    ],
    architecture:
      'Query (Image/Text/Both) → CLIP Encoder (ViT-B/32, 512D) → Multimodal Fusion (60/40) → FAISS IndexFlatIP (145,050 vectors) → Top-K Results → Zero-Shot Tags → FastAPI → Streamlit Dashboard',
    featured: true,
  },

  {
    slug: 'mentor-ai',
    order: 2,
    theme: 'RAG Platform',
    title: 'MentorAI',
    description:
      'RAG-powered learning assistant with fine-tuned LLMs, document grounding, and multi-service architecture.',
    problem:
      'Technical learners waste hours searching docs and tutorials when they need a specific, contextual answer grounded in their actual study material.',
    solution:
      'Full-stack RAG platform with custom document processing, dense retrieval via sentence-transformers + FAISS, and a fine-tuned Qwen2.5 LLM for grounded, cited responses.',
    longDescription:
      'MentorAI is a full-stack RAG-powered learning platform comprising a Next.js 16 frontend, NestJS backend, and three Python FastAPI microservices (inference, training, processing). Users upload educational documents (PDFs, research papers) which are processed through a custom pipeline: extraction, cleaning, section splitting, chunking, and knowledge-unit creation. Embeddings are generated using BAAI/bge-small-en-v1.5 via sentence-transformers and indexed in FAISS. At query time the system retrieves the top-K most relevant chunks and passes them as context to a fine-tuned Qwen2.5-0.5B/7B LLM (trained via QLoRA using the mentorai-finetuning package), producing answers that cite their sources. The platform includes a standalone fine-tuning CLI (mentorai-cli) supporting SFT, LoRA, and QLoRA with hardware-aware auto-planning.',
    technologies: ['Python', 'NestJS', 'Next.js', 'FastAPI', 'FAISS', 'Qwen2.5', 'sentence-transformers', 'Docker'],
    stack: {
      aiml: ['Qwen2.5-0.5B/7B (QLoRA fine-tuned)', 'sentence-transformers (BAAI/bge-small-en-v1.5)', 'FAISS', 'HuggingFace Transformers', 'PEFT', 'TRL'],
      backend: ['NestJS', 'TypeScript', 'TypeORM', 'FastAPI (3 microservices)', 'Python'],
      frontend: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS'],
      data: ['PostgreSQL', 'Redis'],
      infra: ['Docker', 'Swagger/OpenAPI'],
    },
    image: '/mentor-ai.png',
    category: 'AI / ML',
    links: { link: null, github: null },
    status: 'Completed',
    highlights: [
      'Custom document processing pipeline (PDF extraction, section detection, chunking, knowledge-unit creation)',
      'Dense retrieval with BAAI/bge-small-en-v1.5 embeddings + FAISS vector store',
      'Fine-tuned Qwen2.5 LLM (SFT / LoRA / QLoRA) via mentorai-cli',
      'Multi-service architecture: NestJS API + 3 FastAPI AI microservices',
      'Retrieval-augmented generation with source citations',
      'Hardware-aware auto-planning for GPU/CPU training',
      'Standalone fine-tuning package (mentorai-finetuning) with evaluation suite',
    ],
    challenges: [
      'Choosing optimal chunk size and overlap for technical documentation',
      'Fine-tuning a small model (0.5B) to produce quality responses with RAG grounding',
      'Coordinating 5 services (NestJS + 3 FastAPI + Next.js) in a coherent architecture',
    ],
    results: [
      'Full pipeline implemented: document processing → embedding → retrieval → fine-tuned generation',
      'Trained QLoRA adapters with evaluation via ROUGE, BLEU, BERTScore, and LLM-as-Judge',
      'Dataset of curated research papers (Attention Is All You Need, BERT, LLaMA, QLoRA, RAG, MLOps, CV)',
    ],
    architecture:
      'Documents → Processing Pipeline (extract, clean, section split, chunk) → Knowledge Units → sentence-transformers (bge-small-en-v1.5) → FAISS Index → Retrieval (Top-K) → Qwen2.5 (QLoRA) + Context → Grounded Response with Citations',
    featured: true,
  },

  {
    slug: 'llm-fine-tuning',
    order: 3,
    theme: 'LLM Engineering',
    title: 'MentorAI Fine-Tuning Pipeline',
    description:
      'End-to-end fine-tuning pipeline for Qwen2.5 LLMs: document processing → knowledge extraction → dataset generation → QLoRA training → evaluation.',
    problem:
      'No reusable, production-ready pipeline exists for fine-tuning open-source LLMs on domain-specific data — every project starts from scratch.',
    solution:
      'Standalone Python package (mentorai-finetuning) with CLI that automates the full cycle: raw documents → knowledge extraction → instruction dataset → QLoRA/LoRA fine-tuning → adapter merge → evaluation → FastAPI inference.',
    longDescription:
      'The MentorAI Fine-Tuning Pipeline is a standalone Python package (mentorai-finetuning) providing a reproducible pipeline for adapting Qwen2.5-0.5B/7B-Instruct to domain-specific tasks. It supports SFT, LoRA, and QLoRA via a unified CLI (mentorai-cli) with hardware-aware auto-planning that detects available GPU/CPU resources. The pipeline handles dataset engineering (Alpaca, ChatML, ShareGPT formats), tokenization, training with PEFT + TRL + Accelerate, and evaluation using ROUGE, BLEU, BERTScore, sacrebleu, and LLM-as-Judge. Training is tracked with MLflow. Adapters are merged and exported as Safetensors, served via a FastAPI inference server that feeds MentorAI\'s RAG pipeline.',
    technologies: ['Python', 'PyTorch', 'Qwen2.5', 'PEFT', 'TRL', 'MLflow', 'FastAPI'],
    stack: {
      aiml: ['Qwen2.5-0.5B/7B-Instruct', 'PyTorch', 'HuggingFace Transformers', 'PEFT / QLoRA / LoRA', 'TRL', 'BitsAndBytes', 'Accelerate', 'MLflow'],
      backend: ['FastAPI', 'Python', 'mentorai-cli'],
      data: ['Datasets (HuggingFace)', 'Pandas'],
      infra: ['Docker', 'CUDA'],
    },
    image: '/mentorai-finetuning.png',
    category: 'AI / ML',
    links: { link: null, github: null },
    status: 'Completed',
    highlights: [
      'Standalone Python package (mentorai-finetuning) with unified CLI',
      'Hardware-aware auto-planning (detects GPU/CPU, optimizes batch size)',
      'SFT / LoRA / QLoRA fine-tuning with 4-bit quantization via BitsAndBytes',
      'Dataset engineering: Alpaca, ChatML, ShareGPT format support',
      'Evaluation suite: ROUGE, BLEU, BERTScore, sacrebleu, LLM-as-Judge',
      'MLflow experiment tracking and model registry',
      'Adapter merge and Safetensors export for production deployment',
      'FastAPI inference server for real-time serving',
    ],
    challenges: [
      'Generating high-quality instruction-answer pairs from raw domain documents',
      'Preventing catastrophic forgetting while improving domain performance on a 0.5B model',
      'Hardware-aware auto-planning that gracefully handles varying GPU memory constraints',
    ],
    results: [
      'Trained QLoRA adapters for Qwen2.5-0.5B/7B with full evaluation metrics',
      'CLI reduces manual fine-tuning setup from days to a single command',
      'Inference server integrates directly with MentorAI\'s RAG pipeline',
    ],
    architecture:
      'Raw Documents → Knowledge Extraction → Dataset Engineering (Alpaca/ChatML/ShareGPT) → Tokenization → SFT → LoRA → QLoRA (4-bit) → Evaluation (ROUGE/BLEU/BERTScore/LLM-as-Judge) → Adapter Merge → Safetensors Export → FastAPI Inference',
    featured: true,
  },

  {
    slug: 'email-eu',
    order: 4,
    theme: 'Graph Machine Learning',
    title: 'Email EU Graph Platform',
    description:
      'Graph ML platform for analysing organisational email communication networks and predicting relationships.',
    problem:
      'Organisational communication patterns are invisible — email data contains rich relational structure that standard tools cannot exploit.',
    solution:
      'Full-stack graph analytics system with Node2Vec embeddings, link prediction, and interactive Cytoscape.js visualisation.',
    longDescription:
      'The Email EU Graph Platform is a full-stack graph analytics system built on the Email-EU-Core dataset. It enables exploration of organisational email communication networks through interactive visualisations and machine learning models. The platform supports node classification, link prediction, and graph embedding generation using algorithms such as Node2Vec. Users can visualise network structures, inspect nodes, and analyse communication patterns through a modern web interface.',
    technologies: ['Next.js', 'NestJS', 'FastAPI', 'Python', 'NetworkX', 'Node2Vec', 'Scikit-learn', 'UMAP', 'Cytoscape.js'],
    stack: {
      aiml: ['Node2Vec', 'Scikit-learn', 'UMAP', 'NetworkX'],
      backend: ['FastAPI', 'NestJS', 'Python'],
      frontend: ['Next.js', 'React', 'Cytoscape.js', 'Tailwind CSS'],
    },
    image: '/emaileu.png',
    category: 'Data / Graph',
    links: {
      link: 'https://email-eu-graph-platform.vercel.app/',
      github: 'https://github.com/sahki-abderrahemane/email-eu-graph-platform',
    },
    status: 'Completed',
    highlights: [
      'Graph-based email network analysis',
      'Node classification models',
      'Link prediction algorithms',
      'Interactive graph visualisation with Cytoscape.js',
      'Node2Vec graph embeddings',
      'Explainable ML insights',
    ],
    architecture:
      'Next.js Frontend → NestJS API Gateway → FastAPI ML Service → Graph ML Models (Node2Vec / NetworkX / Scikit-learn)',
    featured: true,
  },

  {
    slug: 'plant-biology-analysis',
    order: 5,
    theme: 'Statistical Data Science',
    title: 'Plant Biology Statistical Analytics Pipeline',
    description:
      'End-to-end statistical analysis and modeling pipeline for plant biology research data, producing publication-ready ANOVA, PCA, and correlation outputs for drought tolerance rankings.',
    problem:
      'Biological research experiments feature complex multivariate interactions across treatments and genotypes, requiring rigorous, reproducible statistical modeling to extract publication-grade insights.',
    solution:
      'Automated statistical pipeline executing Two-Way ANOVA, Principal Component Analysis (PCA), hierarchical clustering, correlation matrices, and drought tolerance ranking indices.',
    longDescription:
      'Conducted a full-cycle statistical analysis pipeline for a PhD researcher in plant biology evaluating plant responses to environmental stressors. The pipeline ingests multi-factorial experimental agronomic data, runs data cleaning and normality testing, and conducts Two-Way ANOVA with Tukey HSD post-hoc tests to identify statistically significant genotype-by-environment interactions. Dimensionality reduction via Principal Component Analysis (PCA) and hierarchical clustering revealed underlying phenotypic groupings and isolated key physiological markers for drought tolerance rankings, delivering publication-ready visualizations and statistical tables.',
    technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'SciPy', 'Statsmodels', 'Seaborn', 'Matplotlib'],
    stack: {
      aiml: ['PCA (Principal Component Analysis)', 'Hierarchical Clustering', 'Scikit-learn'],
      data: ['Two-Way ANOVA', 'Tukey HSD Test', 'Statsmodels', 'SciPy', 'Pandas', 'NumPy'],
      backend: ['Python'],
      frontend: ['Seaborn', 'Matplotlib', 'Publication Figures'],
    },
    image: '/plant-biology.png',
    category: 'Data / Graph',
    links: { link: null, github: null },
    status: 'Completed',
    highlights: [
      'Two-Way ANOVA with Tukey HSD post-hoc analysis',
      'Principal Component Analysis (PCA) for variance decomposition',
      'Hierarchical cluster analysis of genotype drought tolerance',
      'Multi-trait correlation matrices and interaction heatmaps',
      'Publication-ready statistical figures and summary tables',
      'Reproducible, modular Python data pipeline',
    ],
    challenges: [
      'Handling non-normal residual distributions and missing experimental values',
      'Disentangling multi-factorial treatment effects across multiple plant cultivars',
      'Generating high-resolution publication-quality plots conforming to journal submission standards',
    ],
    results: [
      'Identified top drought-resistant genotypes with statistically significant markers (p < 0.01)',
      'Reduced 15+ physiological traits into 2 principal components explaining >80% total variance',
      'Outputs directly integrated into doctoral research manuscript and presentations',
    ],
    architecture:
      'Raw Agronomic Data → Preprocessing & Normalization → Two-Way ANOVA (Statsmodels) → PCA & Clustering (Scikit-learn) → Correlation Matrices → Drought Ranking Index → Publication Figures (Seaborn/Matplotlib)',
    featured: true,
  },

  {
    slug: 'email-assistant',
    order: 6,
    theme: 'AI Email Automation',
    title: 'Smart Email Assistant',
    description:
      'AI-powered email assistant with DistilBERT classification, T5 reply generation, FAISS semantic search, and full Gmail integration.',
    problem:
      'Repetitive email work — classification, prioritisation, drafting standard replies — consumes hours that could be spent on meaningful work.',
    solution:
      'Multi-model ML pipeline that classifies emails into 6 categories, generates context-aware draft replies, scores priority, and enables semantic search — all integrated with Gmail via OAuth2.',
    longDescription:
      'The Smart Email Assistant is a full-stack AI-powered email management platform. A fine-tuned DistilBERT classifies incoming emails into 6 categories (promotions, spam, social_media, forum, verify_code, updates). A fine-tuned T5-small model generates context-aware draft replies. A heuristic priority scoring engine (0.0–1.0) weighs category confidence, urgency keywords, sender reputation, Gmail labels, and read status. Sentence-BERT (all-MiniLM-L6-v2) embeddings indexed in FAISS enable natural-language semantic search over the Gmail inbox. The system integrates with Gmail via OAuth2 (PKCE) for inbox fetching, real-time classification, bulk analysis, and draft reply creation. Built with Next.js 16 + React 19 frontend, FastAPI backend, and trained on Google Colab (T4 GPU).',
    technologies: ['Python', 'DistilBERT', 'T5-small', 'FAISS', 'FastAPI', 'Next.js', 'Gmail API', 'Docker'],
    stack: {
      aiml: ['DistilBERT (classification)', 'T5-small (reply generation)', 'Sentence-BERT/all-MiniLM-L6-v2 (embeddings)', 'FAISS', 'PyTorch', 'HuggingFace Transformers'],
      backend: ['FastAPI', 'Python', 'SQLAlchemy', 'Pydantic', 'JWT (python-jose)'],
      frontend: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS'],
      data: ['SQLite (dev)', 'PostgreSQL (Docker)'],
      infra: ['Docker', 'Docker Compose', 'Google OAuth2 (PKCE)'],
    },
    image: '/email-assistant.png',
    category: 'AI / ML',
    links: { link: null, github: null },
    status: 'Completed',
    highlights: [
      '6-category email classification with fine-tuned DistilBERT',
      'Context-aware reply generation with fine-tuned T5-small',
      'Heuristic priority scoring engine (category + urgency + sender + labels)',
      'FAISS semantic search via Sentence-BERT embeddings over Gmail inbox',
      'Full Gmail OAuth2 integration (inbox fetch, real-time classification, draft creation)',
      'Bulk email analysis with priority sorting',
      'Per-user analysis history with JWT authentication',
      '23 backend tests + 4 frontend tests',
    ],
    challenges: [
      'Fine-tuning DistilBERT for 6-class email classification with limited labelled data',
      'Building a priority scoring heuristic that balances multiple signal sources',
      'Integrating Gmail OAuth2 (PKCE) flow with real-time classification pipeline',
    ],
    results: [
      'Training pipeline: DistilBERT (~20 min), FAISS index (~5 min), T5 (~15 min) on Google Colab T4',
      'Full-stack integration: Next.js frontend → FastAPI backend → ML models → Gmail API',
      'Comprehensive test coverage: 23 backend + 4 frontend tests',
    ],
    architecture:
      'Gmail (OAuth2) → Email Ingestion → DistilBERT (6-class classification) + T5 (reply generation) + Sentence-BERT → FAISS Index (semantic search) + Priority Scorer → FastAPI → Next.js 16 Dashboard',
    featured: false,
  },

  {
    slug: 'sentinel',
    order: 7,
    theme: 'Financial Risk Research & Simulation',
    title: 'Sentinel-AI',
    description:
      'Modular multi-phase financial risk simulation platform combining classical ML, NLP, computer vision, multimodal fusion, RAG-grounded LLM explanations, and reinforcement learning.',
    problem:
      'Financial risk analysis requires integrating heterogeneous data sources — market OHLCV data, news sentiment, chart patterns, and regulatory filings — into a unified, explainable risk scoring system.',
    solution:
      'Five-phase research platform: LightGBM risk scoring → FinBERT + CNN multimodal fusion → RAG-grounded LLM explanations → RL simulation → Trust & explainability auditing.',
    longDescription:
      'Sentinel-AI is a modular, enterprise-grade financial risk research and simulation platform built as a 5-phase academic research project (631-page thesis, ESTIN Bejaia). Phase 1 ingests OHLCV market data, engineers features (log returns, volatility, momentum, RSI), applies PCA dimensionality reduction, and trains a LightGBM regressor for risk/volatility scoring tracked via MLflow. Phase 2 fuses tabular signals with FinBERT news-sentiment embeddings (NLP engine) and CNN candlestick chart-pattern recognition (vision engine) into a unified multimodal risk representation via a late-fusion PyTorch head. Phase 3 retrieves relevant SEC filings and financial news from a pgvector-backed vector store via LangChain and generates grounded natural-language risk explanations using an LLM. Phase 4 introduces a simulated market environment (Gymnasium) with Q-Learning and PPO agents for simulation-only portfolio management. Phase 5 covers SHAP/LIME explainability, adversarial robustness, differential privacy, subgroup bias auditing, and drift detection (PSI). Phases 1–2 are fully implemented with trained models; phases 3–5 are designed with service scaffolding.',
    technologies: ['Python', 'LightGBM', 'FinBERT', 'PyTorch', 'LangChain', 'MLflow', 'FastAPI', 'Docker'],
    stack: {
      aiml: ['LightGBM', 'Scikit-learn (PCA, StandardScaler)', 'FinBERT (ProsusAI/finbert)', 'PyTorch CNN', 'LangChain', 'SHAP', 'LIME'],
      backend: ['FastAPI', 'Python', 'Uvicorn', 'Pydantic'],
      data: ['NumPy', 'Pandas', 'PyArrow', 'pgvector', 'PostgreSQL'],
      infra: ['Docker', 'Kubernetes', 'Redis', 'Prometheus', 'MLflow'],
    },
    image: '/sentinel-ai.png',
    category: 'AI / ML',
    links: { link: null, github: null },
    status: 'In Progress',
    highlights: [
      '5-phase architecture: Core Engine → Multimodal → RAG+LLM → RL → Trust',
      'LightGBM risk scoring with PCA dimensionality reduction and MLflow tracking',
      'FinBERT sentiment embeddings + CNN chart-pattern recognition (late-fusion multimodal)',
      'pgvector + LangChain RAG for grounded LLM risk explanations',
      'Simulated market environment with Q-Learning and PPO (Gymnasium + Stable-Baselines3)',
      'SHAP/LIME explainability with adversarial robustness and drift detection',
      '6 independent microservices (data_engine, risk-engine, nlp_engine, vision-engine, multimodal-engine, rag-engine)',
    ],
    challenges: [
      'Fusing heterogeneous data modalities (tabular + text + image) into a coherent risk representation',
      'Ensuring the LLM explains risk scores without making financial predictions',
      'Balancing model complexity with inference latency for real-time risk scoring',
    ],
    results: [
      'Phases 1–2 fully implemented with trained models (MLflow runs, .pt and .safetensors artifacts)',
      '631-page academic thesis documenting full system design and evaluation',
      'Modular service architecture — each engine independently deployable via Docker',
    ],
    architecture:
      'OHLCV Data → Feature Engineering (log returns, volatility, RSI) → PCA → LightGBM (Phase 1) → Multimodal Fusion: FinBERT Sentiment + CNN Vision + Tabular (Phase 2) → pgvector + LangChain RAG → LLM Explanation (Phase 3) → Gymnasium RL Simulation (Phase 4) → SHAP/LIME Audit (Phase 5)',
    featured: false,
  },

  // ─── FULL-STACK PRODUCTION ────────────────────────────────────────────────
  {
    slug: 'da-mall-web',
    order: 7,
    theme: 'E-commerce Marketplace',
    title: 'DA-Mall Web Platform',
    description:
      'Large-scale multi-vendor e-commerce marketplace for the Algerian market supporting B2B and B2C commerce.',
    problem:
      'Algeria lacked a localised, full-featured multi-vendor marketplace supporting local logistics and payment providers.',
    solution:
      'Production Next.js + NestJS platform with modular vendor stores, local delivery (Yalidine), local payments (SATIM/Guiddini), and live streaming.',
    longDescription:
      'DA-Mall is a comprehensive multi-vendor e-commerce platform built to support both B2B and B2C commerce in Algeria. The system enables sellers to create stores, manage products, and track sales analytics while customers can browse products, place orders, and follow stores. The platform integrates local logistics and payment systems including Yalidine delivery and Guiddini/SATIM payment gateways. Additional features include live product streaming, affiliate marketing programs, moderation workflows, push notifications, and a scalable modular backend architecture.',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'NestJS', 'TypeScript', 'MySQL', 'Redis', 'Docker'],
    stack: {
      frontend: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
      backend: ['NestJS', 'TypeScript', 'Bull Queue', 'Socket.io'],
      data: ['MySQL', 'Redis'],
      infra: ['Docker', 'Firebase'],
    },
    image: '/damall.png',
    category: 'Full-Stack Production',
    links: { link: 'https://da-mall.dz', github: null },
    status: 'Live',
    highlights: [
      'Multi-vendor marketplace',
      'B2B & B2C commerce flows',
      'Yalidine delivery integration',
      'Affiliate marketing system',
      'Live product streaming',
      'Firebase push notifications',
      'SATIM/Guiddini payment gateway',
    ],
    architecture:
      'Next.js Frontend → NestJS Modular Backend → MySQL | Redis + Bull Queue | Yalidine Delivery API | Guiddini/SATIM Payments | Docker',
    featured: true,
  },

  {
    slug: 'healseek',
    order: 8,
    theme: 'Healthcare Platform',
    title: 'HealSeek',
    description:
      'Healthcare platform bridging patients and providers with smart doctor discovery and real-time booking.',
    problem:
      'Patients struggle to find the right doctor and book appointments — existing solutions are fragmented, slow, or English-only.',
    solution:
      'Full-stack healthcare platform with intelligent doctor search, real-time booking, in-app chat, and multilingual support.',
    longDescription:
      'HealSeek offers seamless doctor discovery with advanced filtering, intelligent appointment booking, comprehensive patient management, and secure real-time communication. Built with modern technologies to ensure scalability, security, and exceptional user experience. The platform supports multi-language, real-time notifications, and role-based dashboards for patients and doctors.',
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'JWT', 'Cloudinary'],
    stack: {
      frontend: ['React', 'TypeScript', 'Tailwind CSS'],
      backend: ['Express.js', 'Node.js', 'JWT', 'Socket.io'],
      data: ['MongoDB Atlas', 'Cloudinary'],
    },
    image: '/healseek.png',
    category: 'Full-Stack Production',
    links: { link: 'https://healseek.vercel.app/en', github: null },
    status: 'Live',
    highlights: [
      'Smart doctor discovery with filters',
      'Real-time appointment booking',
      'Role-based patient & doctor dashboards',
      'Medical records management',
      'Real-time in-app chat',
      'Multi-language support',
    ],
    architecture:
      'React SPA → Express REST API → MongoDB Atlas | Socket.io real-time | JWT Auth | Cloudinary storage',
    featured: true,
  },

  {
    slug: 'n7awsou',
    order: 9,
    theme: 'AI Travel Platform',
    title: 'N7awsou Platform',
    description:
      'Travel and tourism platform integrating full-stack web with AI-powered recommendations and conversational assistance.',
    longDescription:
      'N7awsou is a travel and tourism platform designed to help users explore destinations, plan trips, and interact with travel services through a modern web interface. The platform combines a full-stack web application with an AI service capable of assisting users through intelligent recommendations and conversational interaction. It integrates a TypeScript-based backend, a Next.js frontend, and a Python AI service for advanced features.',
    technologies: ['Next.js', 'React', 'NestJS', 'TypeScript', 'Python', 'FastAPI'],
    stack: {
      frontend: ['Next.js', 'React', 'TypeScript'],
      backend: ['NestJS', 'FastAPI', 'Python'],
    },
    image: '/n7awsou.png',
    category: 'Full-Stack Production',
    links: {
      link: 'https://n7awsou-platform.vercel.app/',
      github: 'https://github.com/sahki-abderrahemane/N7awsou-Platform',
    },
    status: 'Completed',
    highlights: [
      'Travel discovery platform',
      'AI-powered recommendations',
      'Trip planning tools',
      'Full-stack architecture',
      'AI service integration',
    ],
    architecture: 'Next.js Frontend → NestJS Backend API → Python AI Service → Database Layer',
    featured: false,
  },

  {
    slug: 'edu-plus',
    order: 10,
    theme: 'Educational Platform',
    title: 'Edu+',
    description:
      'Interactive learning platform with live sessions, skill tracking, and real-time instructor collaboration.',
    longDescription:
      'Edu+ features interactive courses, practice exercises, progress tracking, and collaborative learning tools. Students can join live sessions, track their skill progression, and communicate with instructors in real time. Built with Next.js for SSR performance and Socket.io for live collaboration.',
    technologies: ['Next.js', 'Express.js', 'MongoDB', 'Socket.io'],
    stack: {
      frontend: ['Next.js', 'React'],
      backend: ['Express.js', 'Node.js', 'Socket.io'],
      data: ['MongoDB'],
    },
    image: '/edu+.png',
    category: 'Full-Stack Production',
    links: {
      link: 'https://edu-plus-nine.vercel.app',
      github: 'https://github.com/Abdousa23/Edu-plus',
    },
    status: 'Live',
    highlights: [
      'Interactive courses',
      'Real-time chat',
      'Progress tracking',
      'Skill assessment',
      'Live sessions',
      'Instructor dashboard',
    ],
    architecture: 'Next.js Frontend → Express REST API → MongoDB | Socket.io for live sessions',
    featured: false,
  },

  {
    slug: 'da-mall-admin',
    order: 11,
    theme: 'Admin Dashboard',
    title: 'DA-Mall Admin Panel',
    description:
      'Administrative dashboard for managing the DA-Mall marketplace: users, stores, products, orders, and moderation.',
    longDescription:
      'The DA-Mall Admin Panel is a management dashboard built with Laravel and Filament that allows administrators to monitor and control the entire marketplace ecosystem. It provides tools to manage users, stores, orders, payments, and moderation workflows with analytics charts, role-based access control, and powerful CRUD interfaces.',
    technologies: ['Laravel', 'Filament', 'PHP', 'MySQL', 'Tailwind CSS'],
    image: '/damall-admin.png',
    category: 'Dashboards & Internal Tools',
    links: { link: null, github: null },
    status: 'Private',
    highlights: [
      'Marketplace administration',
      'Product moderation system',
      'User & seller management',
      'Analytics dashboard',
      'Role-based access control',
      'Order & payment monitoring',
    ],
    architecture: 'Laravel Backend → Filament Admin Dashboard → MySQL Database',
    featured: false,
  },

  {
    slug: 'orgtel',
    order: 12,
    theme: 'Hotel Management',
    title: 'OrgTel',
    description:
      'Hotel reservation system with booking management, room tracking, and automated invoicing.',
    longDescription:
      'OrgTel includes booking management, customer profiles, room availability tracking, and comprehensive reporting. The system supports real-time room status updates, automated invoicing, and a clean admin dashboard for hotel staff.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express.js'],
    image: '/orgtel.png',
    category: 'Full-Stack Production',
    links: { link: null, github: 'https://github.com/Abdousa23/OrgTel' },
    status: 'Completed',
    highlights: [
      'Reservation system',
      'Customer management',
      'Room tracking',
      'Analytics dashboard',
      'Automated invoicing',
      'Admin panel',
    ],
    architecture: 'React Frontend → Express REST API → MongoDB | Role-based auth',
    featured: false,
  },

  {
    slug: 'mon-atelier',
    order: 13,
    theme: 'Workshop Management',
    title: 'Mon Atelier',
    description:
      'Freelance project: comprehensive workshop management system with scheduling, supplier, and equipment tracking.',
    longDescription:
      'Mon Atelier handles employee scheduling, supplier relationships, equipment maintenance, and repair order workflows. Built for a real client, it supports multiple user roles, email notifications, and a full reporting module.',
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    image: '/monatelier.png',
    category: 'Full-Stack Production',
    links: { link: null, github: null },
    status: 'Private',
    highlights: [
      'Employee management',
      'Supplier integration',
      'Equipment tracking',
      'Order management',
      'Email notifications',
      'Reporting module',
    ],
    architecture: 'React Frontend → Express REST API → MongoDB | Multi-role auth',
    featured: false,
  },

  {
    slug: 'portfolio-v1',
    order: 14,
    theme: 'Developer Portfolio',
    title: 'Portfolio v1',
    description:
      'First version of my personal developer portfolio showcasing projects, skills, and experience.',
    longDescription:
      'Portfolio v1 is the first iteration of my personal developer portfolio. It presents my projects, technical skills, and background through a clean and modern web interface focused on performance, responsive design, and simple navigation.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    image: '/portfolio.png',
    category: 'Dashboards & Internal Tools',
    links: {
      link: 'https://saabderrahemaneportfolio.vercel.app/',
      github: 'https://github.com/sahki-abderrahemane/Portfolio',
    },
    status: 'Completed',
    highlights: [
      'Modern developer portfolio',
      'Project showcase',
      'Responsive UI design',
      'Performance optimised',
      'Clean component architecture',
    ],
    architecture: 'Next.js Application → React Components → Tailwind CSS → Vercel',
    featured: false,
  },
];

// Sort by order field
projects.sort((a, b) => a.order - b.order);

export const getProjectBySlug = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug);

export const getFeaturedProjects = (): Project[] =>
  projects.filter((p) => p.featured).sort((a, b) => a.order - b.order);

export const getProjectsByCategory = (
  category: Project['category']
): Project[] => projects.filter((p) => p.category === category);

export const getCategoryCount = (): Record<string, number> => {
  const counts: Record<string, number> = {};
  projects.forEach((p) => {
    counts[p.category] = (counts[p.category] || 0) + 1;
  });
  return counts;
};
