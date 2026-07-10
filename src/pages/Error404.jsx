import { useLocation, useNavigate } from 'react-router-dom';
import './Error404.css';

export const Error404 = () => {

  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  }

  return (
    <>
      <div className="error404">
        <h1 className="alert alert-danger display-1 text-center mb-3">404</h1>
        <h2 className="alert text-danger text-center mb-4">Page non trouvée</h2>
        <p className="text-center">Chemin de la tentative : <code>{location.pathname}</code></p>
        <button className="btn btn-success m-3" onClick={handleClick}>Retour </button>
      </div>
    </>
  )
}