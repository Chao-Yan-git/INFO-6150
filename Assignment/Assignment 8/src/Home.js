import React from 'react';
import { Button } from 'react-bootstrap'
import { Card, CardGroup } from "react-bootstrap";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonText: 'Red'
        }
    }

    handleClick = () => {
        this.props.history.push("/contact");
    }

    changeText = () => {
        this.setState({
            buttonText: "Yellow"
        })
    }
    render() {
        return (
            <div>
                <h2>Company Overview</h2>
                <br></br>
                <CardGroup>
                    <Card border="primary">
                        <Card.Body>
                            <Card.Title>Website Design</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">React + Bootstrap</Card.Subtitle>
                            <Card.Text>
                                We have many successful experience in designing homepages for our customers which are all very welcome!
                                Below are links to some sample. Our senario is very flexible, both the structure and logic can be customed.
                            </Card.Text>
                            <Card.Link href="#">Samples</Card.Link>
                            <Card.Link href="#">Price</Card.Link>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card border="success">
                        <Card.Body>
                            <Card.Title>API Design</Card.Title>
                            <Card.Text>
                                We can realize API what exactly customer needs. We can do the math abstraction of real-world problems.
                                We can also optimize existing API by minimize the complexity of time and space, using more advanced date
                                structure and models.
                            </Card.Text>
                            <Card.Link href="#">Samples</Card.Link>
                            <Card.Link href="#">Price</Card.Link>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card border="info">
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This card has even longer content than the first to
                                show that equal height action.
                            </Card.Text>
                            <Card.Link href="#">Samples</Card.Link>
                            <Card.Link href="#">Price</Card.Link>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                </CardGroup>
            </div>
        )
    }
}
export default Home;