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
<h3>Home Page</h3> 
<p> Designed a clean and interactive home page where users can upload their resume and input the job description for analysis. </p> 
<img src="https://github.com/IshitaSinha2002/ResumeIQ/blob/main/Screenshot%20(44).png" style="width: 500px; height: 400px; object-fit: cover;">
<h3>Results Page</h3>
<p> Created a results page that clearly presents: 
<ul> 
  <li><b>Match Score</b> (resume vs job description)</li> 
  <li><b>Matched Skills</b></li> <li><b>Missing Skills</b></li> 
<p>The UI highlights key insights to help users quickly understand their strengths and gaps.</p>
</ul> 
</p> <img src="https://github.com/IshitaSinha2002/ResumeIQ/blob/main/Screenshot%20(42).png" style="width: 500px; height: 400px; object-fit: cover;">
</p> <img src="https://github.com/IshitaSinha2002/ResumeIQ/blob/main/Screenshot%20(43).png" style="width: 500px; height: 400px; object-fit: cover;">
<h3>Implementation Details</h3> 
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
<h3>Backend Implementation</h3>
<ol> 
  <li><b>Framework and Setup:</b>
    <ul> 
      <li>Developed RESTful APIs using Flask.</li>
      <li>Enabled CORS to allow seamless frontend-backend communication.</li> 
      <li>Structured backend into modular components (API routes, NLP logic, utilities).</li>  
    </ul> 
  </li> 
  <li><b>File Handling and Input Processing:</b> 
    <ul>
      <li>Handled resume uploads in PDF format via API.</li> 
      <li>Extracted text from PDFs using pdfplumber.</li> 
      <li>Accepted job description input as raw text.</li> 
    </ul> 
  </li> 
  <li><b>Text Preprocessing Pipeline:</b> 
    <ul>
      <li>Converted text to lowercase for uniformity.</li>
      <li>Removed special characters and noise using regex.</li>
      <li>Ensured clean and consistent input for NLP processing.</li> 
    </ul>
  </li> 
  <li><b>Model Integration:</b> 
    <ul>
      <li>Integrated pre-trained Sentence Transformer model (all-MiniLM-L6-v2).</li> 
      <li>Generated embeddings for both resume and job description.</li> 
      <li>Ensured efficient inference for real-time analysis.</li>
    </ul>
  </li> 
  <li><b>Similarity and Scoring Logic:</b> 
    <ul> 
      <li>Computed cosine similarity between embeddings.</li> 
      <li>Converted similarity score into percentage format.</li> 
      <li>Handled NumPy outputs and converted them into JSON-serializable formats.</li>
    </ul> 
  </li>
  <li><b>Skill Extraction and Comparison:</b> 
    <ul> 
      <li>Defined a set of relevant technical skills.</li> 
      <li>Extracted skills from resume and job description text.</li> 
      <li>Compared skills to identify matched and missing ones.</li>
    </ul>
  </li> 
  <li><b>API Response Handling:</b> 
    <ul> 
      <li>Returned structured JSON response including score, matched skills, and missing skills.</li> <li>Implemented error handling for missing inputs and runtime exceptions.</li>
      <li>Ensured smooth integration with frontend UI.</li> 
    </ul> 
  </li> 
</ol>
