import { MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit';
import SectionBar from '../components/SectionBar';
import FruitProfile from '../components/FruitProfile';
import FruitBenefits from '../components/FruitBenefits';
import FruitHistory from '../components/FruitHistory';
import FruitNutrition1 from '../components/FruitNutrition1';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Fruit from '../models/Fruit';
import FruitNutrition2 from '../components/FruitNutrition2';

export default function Fruitpage() {
  const { id } = useParams<{ id: string }>(); // Get the index from the route params
  const [fruitData, setFruitData] = useState<Fruit | null>(null); // Store the fetched fruit data
  const [loading, setLoading] = useState(true); // Loading state to handle UI during fetch

  useEffect(() => {
    // Fetch fruit data from the backend
    const fetchFruitData = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:5000/api/fruit/${id}`); // Assume the backend endpoint is `/api/fruits/:index`
        const data = await response.json();
        setFruitData(data);
      } catch (error) {
        console.error('Error fetching fruit data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFruitData();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>; // Display a loading state while data is being fetched
  }

  if (!fruitData) {
    return <div>Fruit not found</div>; // Handle the case where no fruit data is returned
  }

  console.log(fruitData)

  return (
    <section style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Video Background */}
      <video 
        autoPlay 
        muted 
        loop 
        playsInline
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1,
          filter: 'brightness(50%)' // Optional: Adjust the brightness of the video
        }}
      >
        <source src="https://i.imgur.com/mYg0fuW.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <MDBContainer className="py-5">
        <SectionBar />
        <MDBRow>
          <MDBCol lg="4">
            {/* Pass the relevant parts of the fetched data to the components */}
            <FruitProfile data={fruitData.fruit_image} />
            <FruitBenefits  data={fruitData.fruit_benefit}/>
          </MDBCol>
          <MDBCol lg="8">
            <FruitHistory data={fruitData}/>
            <MDBRow>
              <MDBCol md="6">
                <FruitNutrition1 data={fruitData.fruit_nutritions} />
              </MDBCol>
              <MDBCol md="6">
                <FruitNutrition2 data={fruitData.fruit_nutritions}/>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
