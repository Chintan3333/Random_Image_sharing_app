import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import {Helmet} from 'react-helmet';

function App() {

  const [imageUrl, setImageUrl] = useState('');
 

  useEffect(() => {
    fetch('https://picsum.photos/200')
      .then(response => {
        setImageUrl(response.url);
        
        
        console.log(imageUrl);
        
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  
  const handleShare = (platform) => {
    const shareUrl = encodeURIComponent(window.location.href);

    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${shareUrl}&text=Check%20out%20this%20image!&hashtags=randomimage`, '_blank');
        break;
      case 'whatsapp':
        window.open(`https://api.whatsapp.com/send?text=${shareUrl}`, '_blank');
        break;
      default:
        break;
    }
  };


  return (
    <div className="App">
      <header className="App-header">
        <h1>Random Image App</h1>
        <div>
      <img src={imageUrl} alt="Random" style={{ display: 'block', margin: '0 auto' }} />
<Helmet>
<title>Random Image Display and Share</title>
    
<meta property="og:image" content={imageUrl}  />
    <meta name="twitter:image" content={imageUrl} />
</Helmet>
      <div>
      
        <button onClick={() => handleShare('facebook')}>Share on Facebook</button>
        <button onClick={() => handleShare('twitter')}>Share on Twitter</button>
        <button onClick={() => handleShare('whatsapp')}>Share on WhatsApp</button>
      </div>
    </div>
      </header>
    </div>
  );
}

export default App;
