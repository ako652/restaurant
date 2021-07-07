 import { Row,Col, Card } from "react-bootstrap"
import books from "../data/fantasy.json"

 const LatestRelease = ()=>(

    <Row xs={1} md={2} className="g-4">
  {books.map((book) => (
    <Col>
      <Card>
        <Card.Img variant="top" src={book.img}/>
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>
           {book.category}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>
 )

 export default LatestRelease