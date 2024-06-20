import PropTypes from 'prop-types';
import CardCategorie from './CardCategorie';
import './categorie.css';

const Categories = ({ category }) => {
  return (
    <div>
      <h2 className='categorie__title' >{category.title}</h2>
      <div className='categorie__content'>
        {category.videos.map(video => (
          <CardCategorie key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
};

Categories.propTypes = {
  category: PropTypes.shape({
    title: PropTypes.string.isRequired,
    videos: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default Categories;
