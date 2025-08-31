from fastapi import FastAPI, UploadFile, File
from services import resume_service, job_service, apply_service

app = FastAPI()

@app.post("/resume/upload")
async def upload_resume(file: UploadFile = File(...)):
    return await resume_service.process_resume(file)

@app.get("/jobs/match")
async def match_jobs():
    return await job_service.find_matching_jobs()

@app.post("/jobs/apply/{job_id}")
async def apply_to_job(job_id: str):
    return await apply_service.apply_to_job(job_id)