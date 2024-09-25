import React from 'react';
import Grid2 from '@mui/material/Grid2'; // Import Grid2 from MUI
import FileUpload from "../components/FileUpload";
import './Homepage.css'; // Import CSS for styling
import Typewriter from 'typewriter-effect'; // Import typewriter effect

const Homepage: React.FC = () => {
    return (
        <div className="homepage-container">
            {/* Background Video */}
            <video className="background-video" autoPlay muted loop>
                <source src="/fruit2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Content */}
            <Grid2
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                sx={{ minHeight: '100vh', position: 'relative', zIndex: 1 }} // Ensure content appears above the video
            >
                {/* Typing Effect for Title */}
                <div className="title-container">
                    <Typewriter
                        options={{
                            strings: ["What type of fruit are you identifying?",
                                "If you're unsure, try this solution.",
                                "That's why we're here, right?"],
                            autoStart: true,
                            loop: true,
                            delay: 75, // Delay between each character typing
                        }}
                    />
                </div>

                {/* File Upload */}
                <FileUpload />

                <div className="supported-fruits-text">
                    <p>This tool supports identifying the following fruits: <br />
                        <strong>Apple, Avocado ,Banana, Cherry, Chickoo, Corn, Dragonfruit, Durian, <br/>Grapes, Kiwi, Mango, Orange, Pineapple, Strawberry, Watermelon</strong>
                    </p>
                </div>
            </Grid2>
        </div>
    );
};

export default Homepage;
