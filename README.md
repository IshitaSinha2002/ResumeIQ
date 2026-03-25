<h1>Resume IQ – ATS Resume Screening System</h1> <h3>Project Overview</h3> 
<p> Resume IQ is a full-stack NLP-based application designed to analyze resumes against job descriptions and determine how well a candidate matches a given role. The system processes both resume and job description text, applies semantic similarity techniques, and provides a match score along with skill-based insights. It helps users identify missing skills and improve their resumes to better align with job requirements. </p>
<h3>Dataset<h3>
<p>Resume Dataset: https://www.kaggle.com/datasets/snehaanbhawal/resume-dataset</p>
<p>Job Description: https://www.kaggle.com/datasets/kshitizregmi/jobs-and-job-description</p>
<h3>Features</h3> 
<ul> 
  <li>Upload resume in PDF format</li>
  <li>Input job description for comparison</li> 
  <li>Semantic similarity-based match score (0–100%)</li>
  <li>Skill extraction and comparison</li> 
  <li>Matched skills identification</li>
  <li>Missing skills detection</li> 
  <li>Real-time analysis with interactive UI</li>
</ul>
<h3>Tech Stack</h3>
<ul>
  <li><b>Front-end:</b> ReactJS, CSS</li> 
  <li><b>Back-end:</b> Python, Flask, Flask-CORS</li>
  <li><b>Natural Language Processing:</b> Sentence Transformers (all-MiniLM-L6-v2)</li>
  <li><b>Similarity Computation:</b> Cosine Similarity</li>
  <li><b>Libraries:</b> scikit-learn, pdfplumber, numpy, re</li>
</ul>
<h3>How It Works</h3> 
<ol> 
  <li><b>Resume Parsing:</b> 
    <ul> 
      <li>Extracts text from uploaded PDF using pdfplumber.</li> 
    </ul> </li> 
  <li><b>Text Preprocessing:</b> 
    <ul>
      <li>Converts text to lowercase.</li>
      <li>Removes special characters and noise.</li>
      <li>Cleans and normalizes text for processing.</li>
    </ul> 
  </li>
  <li><b>Embedding Generation:</b> 
    <ul> 
      <li>Uses Sentence Transformer model to convert resume and job description into vector embeddings.</li>
    </ul> 
  </li> 
  <li><b>Semantic Similarity Calculation:</b>
    <ul>
      <li>Computes cosine similarity between embeddings.</li>
      <li>Generates a match score representing relevance.</li> 
    </ul>
  </li> 
  <li><b>Skill Matching:</b> 
    <ul> 
      <li>Extracts predefined skills from both resume and job description.</li> 
      <li>Identifies matched and missing skills.</li>
    </ul> 
  </li>
  <li><b>Result Generation:</b>
    <ul>
      <li>Returns match score, matched skills, and missing skills.</li>
      <li>Displays results in a structured and user-friendly UI.</li>
    </ul> 
  </li> 
</ol>
