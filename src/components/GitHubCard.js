import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import DoubleG from './DoubleG.jpg';

function GitHubCard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={DoubleG} />
      <Card.Body>
        <Card.Title>Charlie Deavean Reyes</Card.Title>
        <Card.Text>
          Rookie developer trying to learn.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default GitHubCard;