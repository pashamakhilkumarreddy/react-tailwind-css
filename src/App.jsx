import React, { useState, useEffect } from 'react';

import ImageSearch from './components/ImageSearch';

import ImageCard from './components/ImageCard';

function App() {
  const [images, setImages] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const getImages = async () => {
      try {
        const allImages = await fetch(` https://cors-anywhere.herokuapp.com/https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY || '16393526-c67aed8a8d358c9ce9d50e5e7'}&q=${searchTerm}&image_type=photo&pretty=true`);
        const formattedImagesData = await allImages.json();
        if (allImages.status === 200 && allImages.ok) {
          setImages(formattedImagesData.hits);
        }
        setIsLoading(false);
      } catch(err) {
        console.error(err);
      }
    }
    getImages();
  }, [searchTerm]);

  return (
    <div className="container mx-auto">
      <ImageSearch searchText={ text => setSearchTerm(text)} />
      <div className="grid grid-cols-3 gap-4">
        {
          isLoading && !images.length && <h1 className="text-5xl text-center mx-auto mt-32">No images found </h1>
        }
        {
          !isLoading && images.length ? images.map((image, index) => <ImageCard key={index.toString()} image={image} />) : <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1>
        }
      </div>
    </div>
  );
}

export default App;
