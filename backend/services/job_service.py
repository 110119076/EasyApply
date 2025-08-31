from langchain_chroma import Chroma
from langchain_huggingface import HuggingFaceEmbeddings
from dotenv import load_dotenv
load_dotenv()

embeddings = HuggingFaceEmbeddings(model_name="sentence-transformers/all-MiniLM-L6-v2")
vectorstore = Chroma(
    collection_name="resumes",
    embedding_function=embeddings,
    persist_directory="../chroma_db"
)

# Dummy job postings (later fetch dynamically)
JOBS = [
    {"id": "job1", "title": "Data Scientist", "desc": "Looking for ML engineer with NLP skills"},
    {"id": "job2", "title": "Frontend Developer", "desc": "ReactJS, Tailwind, APIs"},
    {"id": "job3", "title": "AI Engineer", "desc": "LLMs, RAG, VectorDBs experience"},
]

async def find_matching_jobs():
    job_texts = [job["desc"] for job in JOBS]
    job_ids = [job["id"] for job in JOBS]

    vectorstore.add_texts(job_texts, ids=job_ids)

    retriever = vectorstore.as_retriever(search_kwargs={"k": 2})
    matches = retriever.get_relevant_documents("resume text")  # TODO: replace with actual resume

    return {"matches": [doc.metadata for doc in matches]}