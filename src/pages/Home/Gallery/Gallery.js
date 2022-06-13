import React from 'react';
import './Gallery.css'
import gallery1 from '../../../images/gallery1.jpg'
import gallery2 from '../../../images/gallery2.jpg'
import gallery3 from '../../../images/gallery3.jpg'
import poster1 from '../../../images/poster1.png'
import poster2 from '../../../images/poster2.png'
import poster3 from '../../../images/poster3.png'

const Gallery = () => {
    return (
        <div className='gallery'>
            <h1>Explore Our Gallery</h1>
            <div className='gallery-item'>
                <div>
                    <img className='gallery-img' src={gallery1} alt="" />
                </div>
                <div>
                    <img className='gallery-img' src={poster1} alt="" />
                </div>
                <div>
                    <img className='gallery-img' src={gallery2} alt="" />
                </div>
                <div>
                    <img className='gallery-img' src={poster2} alt="" />
                </div>
                <div>
                    <img className='gallery-img' src={gallery3} alt="" />
                </div>
                <div>
                    <img className='gallery-img' src={poster3} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Gallery;