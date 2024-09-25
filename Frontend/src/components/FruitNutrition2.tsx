import { MDBCard, MDBCardBody, MDBCardText } from "mdb-react-ui-kit";
import Nutrition from "../models/Nutrition";

interface Prop {
    data : Nutrition
}


export default function FruitNutrition(prop : Prop) {
    return (
        <MDBCard className="mb-4 mb-md-0">
            <MDBCardBody>
                <MDBCardText className="mb-4 text-center" style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
                Nutrition Facts
                </MDBCardText>
                <MDBCardText className="mb-3 text-center" style={{ fontSize: '1rem', fontStyle: 'italic' }}>
                Amount per 100 g
                </MDBCardText>

                <div className="d-flex justify-content-between mb-2">
                <MDBCardText style={{ fontSize: '1rem', fontWeight: 'bold' }}>Protein:</MDBCardText>
                <MDBCardText style={{ fontSize: '1rem', textAlign: 'right' }}>{prop.data.protein} g</MDBCardText>
                </div>

                <div className="d-flex justify-content-between mb-2">
                <MDBCardText style={{ fontSize: '1rem', fontWeight: 'bold' }}>Vitamin C:</MDBCardText>
                <MDBCardText style={{ fontSize: '1rem', textAlign: 'right' }}>{prop.data.vitamins.vitamin_C} mg</MDBCardText>
                </div>

                <div className="d-flex justify-content-between mb-2">
                <MDBCardText style={{ fontSize: '1rem', fontWeight: 'bold' }}>Calcium:</MDBCardText>
                <MDBCardText style={{ fontSize: '1rem', textAlign: 'right' }}>{prop.data.vitamins.calcium} mg</MDBCardText>
                </div>

                <div className="d-flex justify-content-between mb-2">
                <MDBCardText style={{ fontSize: '1rem', fontWeight: 'bold' }}>Iron:</MDBCardText>
                <MDBCardText style={{ fontSize: '1rem', textAlign: 'right' }}>{prop.data.vitamins.iron} mg</MDBCardText>
                </div>

                <div className="d-flex justify-content-between mb-2">
                <MDBCardText style={{ fontSize: '1rem', fontWeight: 'bold' }}>Vitamin D:</MDBCardText>
                <MDBCardText style={{ fontSize: '1rem', textAlign: 'right' }}>{prop.data.vitamins.vitamin_D} IU</MDBCardText>
                </div>

                <div className="d-flex justify-content-between mb-2">
                <MDBCardText style={{ fontSize: '1rem', fontWeight: 'bold' }}>Vitamin B6:</MDBCardText>
                <MDBCardText style={{ fontSize: '1rem', textAlign: 'right' }}>{prop.data.vitamins.vitamin_B6} mg</MDBCardText>
                </div>

                <div className="d-flex justify-content-between mb-2">
                <MDBCardText style={{ fontSize: '1rem', fontWeight: 'bold' }}>Vitamin B12:</MDBCardText>
                <MDBCardText style={{ fontSize: '1rem', textAlign: 'right' }}>{prop.data.vitamins.vitamin_B12} µg</MDBCardText>
                </div>

                <div className="d-flex justify-content-between mb-2">
                <MDBCardText style={{ fontSize: '1rem', fontWeight: 'bold' }}>Magnesium:</MDBCardText>
                <MDBCardText style={{ fontSize: '1rem', textAlign: 'right' }}>{prop.data.vitamins.magnesium} mg</MDBCardText>
                </div>
            </MDBCardBody>
        </MDBCard>
    );
}
