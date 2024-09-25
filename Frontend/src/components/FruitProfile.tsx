import { MDBCard, MDBCardImage } from "mdb-react-ui-kit"

interface Prop {
    data: string
}

export default function FruitProfile(props: Prop) {
    return (
        <MDBCard className="mb-4">
            <MDBCardImage
                src={props.data} // The image source
                alt="Uploaded image"
                position="top"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} // Ensure the image fills the card
            />
        </MDBCard>
    )
}