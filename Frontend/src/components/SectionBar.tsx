import {MDBRow, MDBCol, MDBBreadcrumb, MDBBreadcrumbItem} from "mdb-react-ui-kit"

export default function SectionBar() {
    return (
        <MDBRow>
          <MDBCol>
            <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
              <MDBBreadcrumbItem>
                <a href='/'>Home</a>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem active>Fruit Information</MDBBreadcrumbItem>
            </MDBBreadcrumb>
          </MDBCol>
        </MDBRow>
    )
}