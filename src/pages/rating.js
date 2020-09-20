import React from 'react';
import StarFillIcon from '../assets/svgs/Star-fill';
import StarIcon from '../assets/svgs/Star';

const rating = () => {
    return(
        <div className='d-flex flex-column pb-2 mb-2'>
                    <div className='small mb-2'>
                      <small className='font-weight-bold'>Rating</small>
                    </div>
                    <span className='d-flex align-items-baseline mb-1'>
                      <span className='text-warning mr-1 w-50 d-flex justify-content-between'>
                        <StarFillIcon height={13} />
                        <StarFillIcon height={13} />
                        <StarFillIcon height={13} />
                        <StarFillIcon height={13} />
                        <StarFillIcon height={13} />
                      </span>
                    </span>
                    <span className='d-flex align-items-baseline'>
                      <span className='text-warning mr-1 w-50 d-flex justify-content-between'>
                        <StarFillIcon height={13} />
                        <StarFillIcon height={13} />
                        <StarFillIcon height={13} />
                        <StarFillIcon height={13} />
                        <StarIcon height={13} />
                      </span>
                      <small>
                        <small className='text-capitalize'>and up</small>
                      </small>
                    </span>
                    <span className='d-flex align-items-baseline'>
                      <span className='text-warning mr-1 w-50 d-flex justify-content-between'>
                        <StarFillIcon height={13} />
                        <StarFillIcon height={13} />
                        <StarFillIcon height={13} />
                        <StarIcon height={13} />
                        <StarIcon height={13} />
                      </span>
                      <small>
                        <small className='text-capitalize'>and up</small>
                      </small>
                    </span>
                    <span className='d-flex align-items-baseline'>
                      <span className='text-warning mr-1 w-50 d-flex justify-content-between'>
                        <StarFillIcon height={13} />
                        <StarFillIcon height={13} />
                        <StarIcon height={13} />
                        <StarIcon height={13} />
                        <StarIcon height={13} />
                      </span>
                      <small>
                        <small className='text-capitalize'>and up</small>
                      </small>
                    </span>
                    <span className='d-flex align-items-baseline'>
                      <span className='text-warning mr-1 w-50 d-flex justify-content-between'>
                        <StarFillIcon height={13} />
                        <StarIcon height={13} />
                        <StarIcon height={13} />
                        <StarIcon height={13} />
                        <StarIcon height={13} />
                      </span>
                      <small>
                        <small className='text-capitalize'>and up</small>
                      </small>
                    </span>
                  </div>
    )
}
export default rating;