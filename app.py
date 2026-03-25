from flask import Flask, request, jsonify
from flask_cors import CORS
from model import *

# ------------------------
# CREATE FLASK APP
# ------------------------
app = Flask(__name__)
CORS(app)  # allow frontend requests

# ------------------------
# MAIN API ROUTE
# ------------------------
@app.route('/analyze', methods=['POST'])
def analyze():
    try:
        # Get data from frontend
        file = request.files['resume']
        jd_text = request.form['jd']

        # Process text
        resume_text = extract_text_from_pdf(file)
        resume_text = clean_text(resume_text)
        jd_text = clean_text(jd_text)

        # ML logic
        score = calculate_similarity(resume_text, jd_text)
        matched, missing = compare_skills(resume_text, jd_text)

        # Return response
        return jsonify({
            "score": score,
            "matched_skills": matched,
            "missing_skills": missing
        })

    except Exception as e:
        return jsonify({"error": str(e)}), 500


# ------------------------
# RUN SERVER
# ------------------------
if __name__ == '__main__':
    app.run(debug=True)