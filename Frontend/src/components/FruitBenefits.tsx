import { MDBCard, MDBCardBody, MDBListGroup, MDBListGroupItem, MDBIcon, MDBCardText } from "mdb-react-ui-kit"
import Benefit from "../models/Benefit"

interface Prop {
    data : Benefit
}

export default function FruitBenefits(prop : Prop) {
    return (
        <MDBCard className="mb-4 mb-lg-0">
            <MDBCardBody className="p-0">
                <MDBListGroup flush className="rounded-3">
                <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fas icon="leaf fa-lg text-success" />
                    <MDBCardText>{prop.data.one}</MDBCardText>
                </MDBListGroupItem>
                <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fas icon="apple-alt fa-lg text-warning" />
                    <MDBCardText>{prop.data.two}</MDBCardText>
                </MDBListGroupItem>
                <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fas icon="heart fa-lg text-danger" />
                    <MDBCardText>{prop.data.three}</MDBCardText>
                </MDBListGroupItem>
                <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fas icon="seedling fa-lg text-success" />
                    <MDBCardText>{prop.data.four}</MDBCardText>
                </MDBListGroupItem>
                <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                    <MDBIcon fas icon="smile fa-lg text-primary" />
                    <MDBCardText>{prop.data.five}</MDBCardText>
                </MDBListGroupItem>
                </MDBListGroup>
            </MDBCardBody>
        </MDBCard>
    )
}