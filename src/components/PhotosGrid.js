import React, { useState, useEffect } from 'react';

import '../css/photos-grid.scss';

const PhotosGrid = ({ imageTag }) => {

  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState([]);

  function fetchImages() {
    import('../core/images').then(m => {
      if (imageTag === 'mountain') {
        setImages(m.mountainImages);
      } else if (imageTag === 'bird') {
        setImages(m.birdImages);
      } else if (imageTag === 'beach') {
        setImages(m.beachImages);
      } else if (imageTag === 'food') {
        setImages(m.foodImages);
      } else {
        setImages([]);
      }
      setLoading(false);
    });
  }

  useEffect(() => {
    fetchImages();
  }, [imageTag]);

  const displayMessage = (str) => {
    return (
      <div style={{ maxWidth: '500px', margin: '0 auto', padding: '100px 0', fontWeight: 'bold', textAlign: 'center' }}>
        {str}
      </div>
    );
  }

  return (
    <div className="photo-grid-main">
      {
        loading === true ?
          displayMessage('Loading...') :
          (
            <div className="photo-card-wrapper">
              {images.length > 0 ?
                images.map((image, index) => (
                  <img src={image} className="photo-card" key={index} alt="" />
                )) :
                displayMessage('No Images to show')
              }
            </div>
          )
      }
    </div>
  );
}

export default PhotosGrid;
