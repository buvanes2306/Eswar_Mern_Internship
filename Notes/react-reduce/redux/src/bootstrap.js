import 'bootstrap/dist/css/bootstrap.min.css'
import { Button,Alert,Breadcrumb,Card } from 'react-bootstrap'


function Bootstrap(){
    return(
        <div>
            <Card style={{background:"red"}}>
                <Card.Title>
                    Title:Card
                </Card.Title>
                <Card.Text>
                    THIS IS React-BOOTSTRAP CAARD
                </Card.Text>
            </Card>
            <Alert>I am Alert</Alert>
            <Alert variant='warning'>I am Alert</Alert>
            <Alert variant='secondary'>I am Alert</Alert>
            <Alert variant='success'>I am Alert</Alert>
    <Button variant="primary" size="lg" block disabled>
        Button from bootstrap
    </Button>
    <button type="button"
    className="btn btn-primary btn-lg btn-block"
    data-toggle="button"
    aria-pressed="false"
    autocomplete="off"
    disabled>
    Button from custom button
    </button>
            <Breadcrumb>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>About</Breadcrumb.Item>
                <Breadcrumb.Item>Contact</Breadcrumb.Item>
            </Breadcrumb>
        </div>
    )
}
export default Bootstrap;