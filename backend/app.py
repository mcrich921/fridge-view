from flask import Flask, jsonify
from flask_cors import CORS
from import_data import import_data

# create app and allow all origins
app = Flask(__name__)
CORS(app)

# Create settings route, with GET method
@app.route("/settings", methods=["GET"])
def get_settings():
    data = import_data("data.json")
    return jsonify({"data": data})

if __name__=="__main__":
    app.run(debug=True)