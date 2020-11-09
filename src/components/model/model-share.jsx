import React from 'react';
import useClipboard from "react-use-clipboard";
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';

//  Share Icons
import Facebook from '../../assets/share-icons/facebook.svg'
import Twitter from '../../assets/share-icons/twitter.svg'
import Email from '../../assets/share-icons/envelope.svg'
import WhatsApp from '../../assets/share-icons/whatsapp.svg'
import EmbedHtml from '../../assets/share-icons/html-coding.svg'
import PrintPoster from '../../assets/share-icons/printer.svg'

const shareArr = [ 
    {icon:`${Facebook}`, name: 'Facebook'},
    {icon:`${Twitter}`, name: 'Twitter'},
    {icon:`${Email}`, name: 'Email'},
    {icon:`${WhatsApp}`, name: 'WhatsApp'},
    {icon:`${EmbedHtml}`, name: 'EmbedHtml'},
    {icon:`${PrintPoster}`, name: 'PrintPoster'},
     ]
    
const ModelShare = (props) => {
    const [isCopied, setCopied] = useClipboard("https://gf.me/u/y6ja4k");

    return (
        <Modal
      {...props}
      size="md"
      centered
    >
      <Modal.Header closeButton>
        <div>
        <Modal.Title>
         <b> Help by sharing</b>
        </Modal.Title>
        <p className='small my-1'>Fundraisers shared on social networks raise up to 5 times more!</p>
        </div>
      </Modal.Header>
      <Modal.Body>
        <Row>
        { shareArr.map((shareArr) => ( 
            <Col xs={6} md={3} className='text-center my-2'>
                <Button variant='link'>
                    <img height={23} width={23} src={shareArr.icon} alt={shareArr.name}/>
                   <div className='mt-2 small'>{shareArr.name}</div>
                </Button>
            </Col>
        ))}
        </Row>
      </Modal.Body>
      <Modal.Footer>
      <Form className='w-100'>
      <Form.Label className='px-1 small font-weight-bold'>Copy link</Form.Label>
      <Form.Row>
       <Col xs={9}>
      <Form.Control value='https://gf.me/u/y6ja4k'/>
      </Col>
       <Col>
       <Button className='px-1' block variant='success' onClick={setCopied}>Copy</Button>
      </Col>
      <div className='p-2 text-success'>{isCopied ? "✔ Copied!" : ""}</div>
      </Form.Row>
      </Form>
      </Modal.Footer>
    </Modal>
    
    );
}

export default ModelShare;