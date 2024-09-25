import { MDBCard, MDBCardBody, MDBCardText } from "mdb-react-ui-kit"
import Nutrition from "../models/Nutrition"

interface Prop {
    data: Nutrition
}

export default function FruitNutrition1(prop: Prop) {
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
                <MDBCardText style={{ fontSize: '1rem', fontWeight: 'bold' }}>Calories:</MDBCardText>
                <MDBCardText style={{ fontSize: '1rem', textAlign: 'right' }}>{prop.data.calories} kcal</MDBCardText>
                </div>

                <div className="d-flex justify-content-between mb-2">
                <MDBCardText style={{ fontSize: '1rem', fontWeight: 'bold' }}>Total Fat:</MDBCardText>
                <MDBCardText style={{ fontSize: '1rem', textAlign: 'right' }}>{prop.data.total_fat} g</MDBCardText>
                </div>

                <div className="d-flex justify-content-between mb-2">
                <MDBCardText style={{ fontSize: '1rem', fontWeight: 'bold' }}>Saturated Fat:</MDBCardText>
                <MDBCardText style={{ fontSize: '1rem', textAlign: 'right' }}>{prop.data.saturated_fat} g</MDBCardText>
                </div>

                <div className="d-flex justify-content-between mb-2">
                <MDBCardText style={{ fontSize: '1rem', fontWeight: 'bold' }}>Cholesterol:</MDBCardText>
                <MDBCardText style={{ fontSize: '1rem', textAlign: 'right' }}>{prop.data.cholesterol} mg</MDBCardText>
                </div>

                <div className="d-flex justify-content-between mb-2">
                <MDBCardText style={{ fontSize: '1rem', fontWeight: 'bold' }}>Sodium:</MDBCardText>
                <MDBCardText style={{ fontSize: '1rem', textAlign: 'right' }}>{prop.data.sodium} mg</MDBCardText>
                </div>

                <div className="d-flex justify-content-between mb-2">
                <MDBCardText style={{ fontSize: '1rem', fontWeight: 'bold' }}>Potassium:</MDBCardText>
                <MDBCardText style={{ fontSize: '1rem', textAlign: 'right' }}>{prop.data.potassium} mg</MDBCardText>
                </div>

                <div className="d-flex justify-content-between mb-2">
                <MDBCardText style={{ fontSize: '1rem', fontWeight: 'bold' }}>Carbohydrates:</MDBCardText>
                <MDBCardText style={{ fontSize: '1rem', textAlign: 'right' }}>{prop.data.carbohydrates} g</MDBCardText>
                </div>

                <div className="d-flex justify-content-between mb-2">
                <MDBCardText style={{ fontSize: '1rem', fontWeight: 'bold' }}>Dietary Fiber:</MDBCardText>
                <MDBCardText style={{ fontSize: '1rem', textAlign: 'right' }}>{prop.data.dietary_fiber} g</MDBCardText>
                </div>

                <div className="d-flex justify-content-between mb-2">
                <MDBCardText style={{ fontSize: '1rem', fontWeight: 'bold' }}>Sugar:</MDBCardText>
                <MDBCardText style={{ fontSize: '1rem', textAlign: 'right' }}>{prop.data.sugar} g</MDBCardText>
                </div>
            </MDBCardBody>
        </MDBCard>
    )
}