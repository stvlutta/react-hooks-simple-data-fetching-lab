import React, { useState, useEffect } from "react";

function App() {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => setImageUrl(data.message))
      .catch((error) => console.error("Error fetching the dog image:", error));
  }, []);

  return (
    <div>
      {imageUrl ? (
        <img src={imageUrl} alt="A Random Dog" />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
