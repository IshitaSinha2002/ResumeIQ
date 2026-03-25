from sentence_transformers import SentenceTransformer
from sklearn.metrics.pairwise import cosine_similarity
import pdfplumber
import re

model = SentenceTransformer('all-MiniLM-L6-v2')

def extract_text_from_pdf(file):
    text = ""
    with pdfplumber.open(file) as pdf:
        for page in pdf.pages:
            text += page.extract_text() or ""
    return text

def clean_text(text):
    text = text.lower()
    text = re.sub(r'[^a-z0-9\s]', ' ', text)
    return text

def calculate_similarity(resume_text, jd_text):
    resume_embedding = model.encode(resume_text)
    jd_embedding = model.encode(jd.text)
    score = cosine_similarity([resume_embedding], [jd_embedding])[0][0]
    return round(score * 100, 2)

SKILLS = ["python", "sql", "aws", "machine learning"]

def ectract_skills(text):
    return set([s for s in SKILLS if s in text])

def compare_skills(resume_text, jd_text):
    r = extract_skills(resume_text)
    j = extract_skills(jd_text)
    return list(r & j), list(j - r)