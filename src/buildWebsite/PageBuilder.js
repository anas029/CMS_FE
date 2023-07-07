import React, { useState } from 'react';
import { Button, Col, Container, ProgressBar, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import Header from './Header';
import Home from './Home';
import About from './About';
import Service from './Service';
import Feature from './Feature';
import Projects from './Projects';
import Footer from './Footer';

export default function PageBuilder(props) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    path: '',
    content: '',
    website: props.websiteID,
  });
  const navigate = useNavigate();

  const handleSave2 = (name, path, dataPage) => {
    const data = { name, path, ...dataPage, website: props.websiteID };
    Axios.post('/pagedetail', data)
      .then((res) => {
        setFormData({ ...formData, ...dataPage });
        setStep(step + 1);
        checkLastStep();
      })
      .catch((error) => console.log(error));
  };

  const handleSkip = () => {
    setStep(step + 1);
    checkLastStep();
  }

  const handleBack = () => {
    setStep(step - 1);
  };

  const checkLastStep = () => {
    if(step === 7){
      window.open(`/website/${props.websiteDomain}/`, '_blank');
      navigate('/profile');
    }
  }

  const renderForm = () => {
    switch (step) {
      case 1:
        return <Header handleSave={handleSave2} edit={true} />;
      case 2:
        return <Home handleSave={handleSave2} edit={true} />;
      case 3:
        return <About handleSave={handleSave2} edit={true} />;
      case 4:
        return <Service handleSave={handleSave2} edit={true} />;
      case 5:
        return <Feature handleSave={handleSave2} edit={true} />;
      case 6:
        return <Projects handleSave={handleSave2} edit={true} />;
      case 7:
        return <Footer handleSave={handleSave2} edit={true} />;
      default:
        return null;
    }
  };

  return (
    <Container>
      <Row className="mb-4">
        <Col>
          <ProgressBar now={(step / 7) * 100} />
        </Col>
      </Row>
      <Row>
        <Col md={2}>
          <div className="d-flex flex-column">
            <Button variant="link" onClick={() => setStep(1)} active={step === 1}>
              Header
            </Button>
            <Button variant="link" onClick={() => setStep(2)} active={step === 2}>
              Home
            </Button>
            <Button variant="link" onClick={() => setStep(3)} active={step === 3}>
              About
            </Button>
            <Button variant="link" onClick={() => setStep(4)} active={step === 4}>
              Service
            </Button>
            <Button variant="link" onClick={() => setStep(5)} active={step === 5}>
              Feature
            </Button>
            <Button variant="link" onClick={() => setStep(6)} active={step === 6}>
              Projects
            </Button>
            <Button variant="link" onClick={() => setStep(7)} active={step === 7}>
              Footer
            </Button>
          </div>
        </Col>
        <Col md={10}>
          {renderForm()}
          {step > 1 && (
            <>
              <Button className="mr-2" variant="secondary" onClick={handleBack}>
                Back
              </Button>{' '}
            </>
          )}
          <Button className="mr-2" variant="secondary" onClick={handleSkip}>
            Skip
          </Button>
        </Col>
      </Row>
    </Container>
  );
  
}