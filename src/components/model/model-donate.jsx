import React from 'react';
import { Button, Form, Modal,} from 'react-bootstrap';
import LoveIcon from '../../assets/svgs/Love';
     
const ModelDonate = (props) => {

    return (
        <Modal
      {...props}
      size="md"
      centered
    >
      <Modal.Header closeButton>
        <div>
        <Modal.Title>
         <b> Help by Donation</b>
        </Modal.Title>
        </div>
      </Modal.Header>
      <Modal.Body>
      <Form className='w-100'>
      <Form.Group>
                  <Form.Label className='small font-weight-bold'>Email</Form.Label>
                  <Form.Control placeholder='Please enter your email' type='email' name='email'/>
                </Form.Group>
        
                <Form.Group>
                <Form.Label className='small font-weight-bold'>Card Information</Form.Label>
                 <div className='d-flex align-items-center border rounded-lg'>
                 <span className='px-2 text-black-50 small'>  <img height={20} src='https://www.flaticon.com/svg/static/icons/svg/747/747156.svg' alt='card'/></span>
                 <Form.Control className='border-0' placeholder='Card number' name='donate' type='number'/>
                 </div>
                </Form.Group>

                <Form.Group>
                <Form.Label className='small font-weight-bold'>Card Information</Form.Label>
                 <div className='d-flex align-items-center border rounded-lg'>
                 <span className='px-3 text-black-50 small'>$</span>
                 <Form.Control className='border-0' placeholder='Enter The Amount' name='donate' type='number'/>
                 </div>
                </Form.Group>
               
               <Form.Group className='mt-4'>
               <Button block size='lg' variant='success' type='submit'>Donate Now</Button>
               </Form.Group>

      </Form>
      </Modal.Body>
    </Modal>
    
    );
}

export default ModelDonate;