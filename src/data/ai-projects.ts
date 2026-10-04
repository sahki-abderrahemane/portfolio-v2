export interface AIFocusArea {
  id: string;
  title: string;
  description: string;
  icon: string;
  tags: string[];
  color: 'violet' | 'cyan' | 'blue' | 'emerald';
}

export interface AIArchitectureDiagram {
  title: string;
  steps: { label: string; detail?: string }[];
}

export const aiFocusAreas: AIFocusArea[] = [
  {
    id: 'llm',
    title: 'LLM Engineering',
    description:
      'Prompt engineering, instruction tuning, evaluation frameworks, and building production LLM pipelines with structured output and tool use.',
    icon: '🧠',
    tags: ['Qwen2.5', 'GPT-4o', 'Mistral', 'Structured Output', 'Evals', 'MLflow'],
    color: 'violet',
  },
  {
    id: 'rag',
    title: 'RAG Systems',
    description:
      'Retrieval-augmented generation: document ingestion, chunking strategies, dense retrieval with sentence-transformers, hybrid search, and grounded generation with citations.',
    icon: '🔍',
    tags: ['sentence-transformers', 'FAISS', 'BAAI/bge-small-en-v1.5', 'LangChain', 'Citations'],
    color: 'cyan',
  },
  {
    id: 'fine-tuning',
    title: 'Fine-Tuning',
    description:
      'End-to-end fine-tuning pipeline for Qwen2.5 LLMs: dataset engineering, SFT/LoRA/QLoRA training via mentorai-cli, evaluation (ROUGE/BLEU/BERTScore/LLM-as-Judge), and deployment as the model backing MentorAI.',
    icon: '⚙️',
    tags: ['QLoRA', 'LoRA', 'PEFT', 'TRL', 'BitsAndBytes', 'Qwen2.5', 'MLflow'],
    color: 'blue',
  },
  {
    id: 'multimodal',
    title: 'Multimodal AI',
    description:
      'End-to-end multimodal product search engine: CLIP (ViT-B/32) embeddings + FAISS IndexFlatIP across 145,050 products, with zero-shot tagging, weighted fusion (60/40 image/text), offline recommendations, and Kafka-tracked search events feeding Airflow-scheduled daily reindex.',
    icon: '👁️',
    tags: ['CLIP (ViT-B/32)', 'FAISS', 'FastAPI', 'Kafka', 'Airflow', 'Zero-Shot Tagging', 'Streamlit'],
    color: 'emerald',
  },
  {
    id: 'ml',
    title: 'Machine Learning',
    description:
      'Supervised and unsupervised ML for classification, regression, risk scoring, anomaly detection, graph-based learning, and reinforcement learning. Production deployment with MLOps practices.',
    icon: '📊',
    tags: ['Scikit-learn', 'PyTorch', 'Node2Vec', 'MLflow', 'FinBERT'],
    color: 'violet',
  },
];

export const ragDiagram: AIArchitectureDiagram = {
  title: 'RAG Pipeline',
  steps: [
    { label: 'Documents', detail: 'PDF, Markdown, Code' },
    { label: 'Chunking', detail: '512 tokens + overlap' },
    { label: 'Embeddings', detail: 'BAAI/bge-small-en-v1.5' },
    { label: 'Vector Store', detail: 'FAISS IndexFlatIP' },
    { label: 'Retrieval', detail: 'Top-K dense search' },
    { label: 'LLM + Context', detail: 'Qwen2.5 (QLoRA fine-tuned)' },
    { label: 'Grounded Response', detail: 'With citations' },
  ],
};

export const fineTuningDiagram: AIArchitectureDiagram = {
  title: 'MentorAI Fine-Tuning Pipeline',
  steps: [
    { label: 'Knowledge Units', detail: 'Domain source material' },
    { label: 'Dataset Engineering', detail: 'Alpaca / ChatML / ShareGPT formats' },
    { label: 'Tokenization', detail: 'Reusable pipeline' },
    { label: 'Training', detail: 'SFT → LoRA → QLoRA (4-bit)' },
    { label: 'Evaluation', detail: 'ROUGE, BLEU, BERTScore, LLM-as-Judge' },
    { label: 'Model Export', detail: 'Adapter merge, Safetensors' },
    { label: 'Inference API', detail: 'FastAPI, feeds MentorAI' },
  ],
};

export const multimodalDiagram: AIArchitectureDiagram = {
  title: 'VisualMind Search Pipeline',
  steps: [
    { label: 'Query', detail: 'Image, text, or both' },
    { label: 'CLIP Encoder', detail: 'ViT-B/32, 512D embedding' },
    { label: 'Multimodal Fusion', detail: 'Weighted average (60/40 image/text)' },
    { label: 'FAISS IndexFlatIP', detail: '145,050 vectors, exact search' },
    { label: 'Results + Tags', detail: 'Zero-shot category/color/style' },
    { label: 'Kafka Events', detail: 'Search telemetry' },
    { label: 'Airflow Rebuild', detail: 'Daily index + recommendation refresh' },
  ],
};
