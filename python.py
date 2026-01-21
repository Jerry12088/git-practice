# app.py - Simple Flask backend for the Corona Pandemic Story website
# Requirements: pip install flask

from flask import Flask, render_template_string, send_from_directory, current_app
import datetime
import os

app = Flask(__name__)

# Your original HTML content (with a small dynamic part added)
HTML_CONTENT = """
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>2020 — The Year the World Paused</title>
  <link rel="stylesheet" href="/static/style.css">
</head>
<body>

<div class="container">

<h1>2020<br>The Year the World Paused</h1>

<p style="text-align:center; color:#88ddff; margin-bottom:40px;">
  Looking back from <strong id="current-time">{{ current_time }}</strong>
</p>

<div class="chapter">
  <span class="date">December 2019 – Wuhan</span>
  <p>A few people in a wet market started coughing...<br>
  (your original content here – keep everything else the same)</p>
</div>

<!-- ... paste ALL your other .chapter, blockquote, .ending, .small sections here ... -->

<div class="small">
  January 2026 — looking back • Served with Python & Flask
</div>

</div>

<script src="/static/script.js"></script>

</body>
</html>
"""

@app.route('/')
def home():
    now = datetime.datetime.now().strftime("%B %d, %Y — %I:%M %p EAT")
    return render_template_string(HTML_CONTENT, current_time=now)


# Serve static files (CSS & JS)
@app.route('/static/<path:filename>')
def static_files(filename):
    static_folder = os.path.join(current_app.root_path, 'static')
    return send_from_directory(static_folder, filename)


if __name__ == '__main__':
    print("Starting Corona Pandemic Story server...")
    print("Open in browser: http://127.0.0.1:5000/")
    app.run(debug=True, host='0.0.0.0', port=5000)
