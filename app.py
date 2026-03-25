from flask import Flask, request, jsonify
from flask_cors import CORS
from model import *


app = Flask(__name__)
CORS(app) 

@app.route('/analyze', methods=['POST'])
def analyze():
    try:
        # ✅ SAFE ACCESS
        file = request.files.get('resume')
        jd_text = request.form.get('jd')

        if not file or not jd_text:
            return jsonify({"error": "Missing resume or job description"}), 400

        # Process
        resume_text = extract_text_from_pdf(file)
        resume_text = clean_text(resume_text)
        jd_text = clean_text(jd_text)

        # ML
        score = calculate_similarity(resume_text, jd_text)
        matched, missing = compare_skills(resume_text, jd_text)

        return jsonify({
            "score": float(score),
            "matched_skills": matched,
            "missing_skills": missing
        })

    except Exception as e:
        print(e)  # 👈 important for debugging
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)