import { MDBCard, MDBCardBody, MDBCardText } from "mdb-react-ui-kit"
import Fruit from "../models/Fruit"

interface Prop {
    data : Fruit
}

export default function FruitHistory(prop: Prop) {
    return (
        <MDBCard className="mb-4">
            <MDBCardBody>
                <MDBCardText style={{ textIndent: '20px' }}>
                    <h4>{prop.data.fruit_name}</h4>
                    <p>
                        {prop.data.fruit_history}
                    </p>
                </MDBCardText>
            </MDBCardBody>
        </MDBCard>
    )
}