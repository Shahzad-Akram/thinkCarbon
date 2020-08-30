import React, { useState } from 'react';
import { Button, Collapse } from 'react-bootstrap';

export default function ToggleViewMore({ children, id, className }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Collapse className={className} in={open}>
        <div id={id}>{children}</div>
      </Collapse>
      <Button
        variant='link'
        className='p-0 text-left'
        onClick={() => setOpen(!open)}
        aria-controls={id}
        aria-expanded={open}
      >
        <small>
          <small>{open ? 'View Less' : 'View More'}</small>
        </small>
      </Button>
    </>
  );
}
