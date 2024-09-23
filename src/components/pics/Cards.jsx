import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function GroupExample() {
  return (
    <CardGroup>
    <Card>
      <Card.Img variant="top" src="https://images.pexels.com/photos/1275393/pexels-photo-1275393.jpeg?auto=compress&cs=tinysrgb&w=400" />
      <Card.Body className='bg-success'>
        <Card.Title>{GroupExample.id}</Card.Title>
        <Card.Title>{GroupExample.name}</Card.Title>
        <Card.Text>{GroupExample.email}</Card.Text>
      </Card.Body>
      <Card.Footer className='bg-secondary'>
        <small className="text-muted ">Last updated 3 mins ago</small>
      </Card.Footer>
    </Card>
    <Card>
      <Card.Img variant="top" src="https://images.pexels.com/photos/386009/pexels-photo-386009.jpeg?auto=compress&cs=tinysrgb&w=400" />
      <Card.Body className='bg-success'>
      <Card.Title>{GroupExample.id}</Card.Title>
        <Card.Title>{GroupExample.name}</Card.Title>
        <Card.Text>{GroupExample.email}</Card.Text>
      </Card.Body>
      <Card.Footer className='bg-secondary' >
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Footer>
    </Card>
    <Card>
      <Card.Img variant="top" src="https://images.pexels.com/photos/307008/pexels-photo-307008.jpeg?auto=compress&cs=tinysrgb&w=400" />
      <Card.Body className='bg-success'>
      <Card.Title>{GroupExample.id}</Card.Title>
        <Card.Title>{GroupExample.name}</Card.Title>
        <Card.Text>{GroupExample.email}</Card.Text>
      </Card.Body>
      <Card.Footer className='bg-secondary'>
        <small className="text-muted ">Last updated 3 mins ago</small>
      </Card.Footer>
    </Card>
  </CardGroup>
  );
}

export default GroupExample;