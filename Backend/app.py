import os
os.environ['TF_ENABLE_ONEDNN_OPTS'] = '0'

from flask import Flask, request, jsonify, abort
import json
from flask_cors import CORS, cross_origin
from keras.models import load_model
from tensorflow.keras.preprocessing import image
from PIL import Image
import numpy as np
import cv2

app = Flask(__name__)
CORS(app, origins="http://localhost:5173")

my_model = load_model("fruit15_model.keras")

def prepare_image(img):
    """
    Process the PIL image into the format that the model expects.
    Assumes the model expects 224x224 pixel images as input.
    """
    img_resized = cv2.resize(img, (224, 224), interpolation=cv2.INTER_LINEAR)  # Ensure image is resized to match the model input
    img_array = np.array(img_resized, dtype=np.float32)
    img_array = np.expand_dims(img_array, axis=0)  # Add batch dimension
    img_array /= 255.0  # Normalize to [0, 1]
    return img_array

@app.route('/api/predict', methods=['POST'])
def predict():
    if 'file' not in request.files:
        return jsonify({'error': 'No file provided'}), 400

    file = request.files['file']  # Get the uploaded file
    try:
        img = Image.open(file)  # Open the image using PIL
        img_path = "temp_image.jpg"  # Temporary file path to save the image
        img.save(img_path)  # Save the image as a temporary file
    except Exception as e:
        return jsonify({'error': str(e)}), 400

    img_cv2 = cv2.imread(img_path)  # Load the saved image using OpenCV
    img_cv2 = cv2.resize(img_cv2, (224, 224))
    img_cv2 = img_cv2.astype(np.float32)
    img_cv2 = img_cv2 / 255.0
    img_cv2 = np.expand_dims(img_cv2, axis=0)

    if img_cv2 is None:
        return jsonify({'error': 'Failed to load image using OpenCV.'}), 500

    # Predict the breed
    predictions = my_model.predict(img_cv2)
    fruit_index = np.argmax(predictions)  
    class_labels = ["Apple", "Avocado","Banana", "Cherry", "Chickoo", "Corn", "Dragon", "Durian", 
                    "Grapes", "Kiwi", "Mango", "Orange", "Pineapple", "Strawberry", "Watermelon"]
    fruit = class_labels[fruit_index]  

    return jsonify({'index': int(fruit_index), 'fruit': fruit})

@app.route("/api/fruit/<int:fruit_id>", methods=["GET"])
def info(fruit_id):
    # Load the JSON data from the file
    with open('fruit_info.json', 'r', encoding='utf-8') as file:
        fruit_data = json.load(file)

    # Search for the fruit by ID
    fruit = next((fruit for fruit in fruit_data if fruit['fruit_id'] == fruit_id), None)
    
    # If the fruit with the given ID is not found, return 404
    if fruit is None:
        return abort(404, description="Fruit not found")
    
    # Return the found fruit as JSON response
    return jsonify(fruit)


if __name__ == '__main__':
    app.run(debug=True)
