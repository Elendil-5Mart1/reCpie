import './Banner.css';
import { useEffect, useState } from 'react';

export const Banner = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const URL = 'https://dummyjson.com/recipes';

    setLoading(true);
    fetch(URL)
      .then(res => {
        if (!res.ok) {
          throw new Error('Erreur lors du chargement des images');
        }
        return res.json();
      })
      .then(data => {
        const shuffled = data.recipes
          .sort(() => Math.random() - 0.5)
          .slice(0, 24)
          .map(recipe => recipe.image);
        setImages(shuffled);
        setError(null);
      })
      .catch(err => {
        console.error(err);
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="banner-container text-center banner-loading">Chargement de la bannière...</div>;
  if (error) return <div className="banner-container banner-error">Erreur : {error}</div>;

  return (
    <section className="banner-container">
      <div className="banner-images">
        {images.map((image, index) => (
          <div key={index} className="banner-image-item">
            <img src={image} alt={`Recipe ${index}`} />
          </div>
        ))}
      </div>
      <div className="banner-text-overlay">
        <h1>Explorateur de recettes</h1>
      </div>
    </section>
  );
}