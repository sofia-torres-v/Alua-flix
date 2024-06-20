import PropTypes from 'prop-types';
import './cardCategorie.css';

const CardCategorie = ({ video }) => {
  return (
    <div className="card__content">
      <div>
        {/* <h2>{video.title}</h2> */}
        <img className='card__image' src={video.image} alt={video.title} />
      </div>
      <div>
        <button>Borrar</button>
        <button>Editar</button>
      </div>
    </div>
  );
};

CardCategorie.propTypes = {
  video: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string,
    video: PropTypes.string,
  }).isRequired,
};

export default CardCategorie;
