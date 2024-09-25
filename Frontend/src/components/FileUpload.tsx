import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom'; // For redirection
import './FileUpload.css'; // Ensure to style your components (drag/drop, image preview, etc.)

const FileUpload: React.FC = () => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [imageTitle, setImageTitle] = useState<string>('');
  const [isUploading, setIsUploading] = useState<boolean>(false); // To track upload state
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate(); // Used for redirecting to classification page

  // Trigger the file input click when the "Add Image" button is clicked
  const handleAddImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // Read and display the uploaded image
  const readURL = (input: HTMLInputElement) => {
    if (input.files && input.files[0]) {
      const reader = new FileReader();

      reader.onload = (e: ProgressEvent<FileReader>) => {
        if (e.target && e.target.result) {
          setImageSrc(e.target.result as string);
          setImageTitle(input.files![0].name);
        }
      };

      reader.readAsDataURL(input.files[0]);
    }
  };

  // Function to handle image prediction via API
  const handlePrediction = async () => {
    if (!fileInputRef.current || !fileInputRef.current.files) return;

    const file = fileInputRef.current.files[0];
    const formData = new FormData();
    formData.append('file', file);

    try {
      setIsUploading(true);

      // Send the image to the backend API for prediction
      const response = await fetch('http://127.0.0.1:5000/api/predict', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (response.ok && data.index !== undefined) {
        // Redirect to the classification page with the predicted index
        navigate(`/fruit/${data.index}`);
        console.log(data);
      } else {
        console.error('Prediction failed:', data);
      }
    } catch (error) {
      console.error('Error uploading file:', error);
    } finally {
      setIsUploading(false);
    }
  };

  // Handle image removal
  const removeUpload = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    setImageSrc(null);
    setImageTitle('');
  };

  return (
    <div className="file-upload">
      {/* Button to trigger file input */}
      <button className="file-upload-btn" type="button" onClick={handleAddImageClick}>
        Add Image to Classify Fruit
      </button>

      {/* Image Upload Area */}
      <div className="image-upload-wrap">
        <input
          className="file-upload-input"
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={(e) => {
            if (e.target) {
              readURL(e.target as HTMLInputElement);
            }
          }}
        />
        <div className="drag-text">
          {/* If an image is uploaded, display the image title (file name) */}
          {imageTitle ? (
            <h3>{imageTitle}</h3>
          ) : (
            <h3>Drag and drop a file or select Add Image</h3>
          )}
        </div>
      </div>

      {/* Image Preview and Remove Button */}
      {imageSrc && (
        <div className="file-upload-content">
          <img className="file-upload-image" src={imageSrc} alt="Uploaded" />
          <div className="image-title-wrap">
            <button type="button" className="remove-image" onClick={removeUpload}>
              Remove <span className="image-title">{imageTitle}</span>
            </button>
          </div>
        </div>
      )}

      {/* Prediction Button */}
      {imageSrc && (
        <button onClick={handlePrediction} className="file-upload-btn" disabled={isUploading}>
          {isUploading ? 'Predicting...' : 'Let\'s AI Taste it!'}
        </button>
      )}
    </div>
  );
};

export default FileUpload;
