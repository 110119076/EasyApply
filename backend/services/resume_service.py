import os
from fastapi import UploadFile
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

async def process_resume(file: UploadFile):
    contents = await file.read()
    file_path = f"./uploads/{file.filename}"
    os.makedirs("./uploads", exist_ok=True)
    with open(file_path, "wb") as f:
        f.write(contents)

    text = contents.decode("utf-8", errors="ignore")

    vectorstore.add_texts([text], ids=[file.filename])

    return {"status": "uploaded", "filename": file.filename}