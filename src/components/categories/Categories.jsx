import PropTypes from 'prop-types';
const Categories = ({categorie}) => {
  
  return (
    <div className="content-grid">
        <button style={{background:categorie.backgroundColor}}>{categorie.title}</button>
        <div className="box-categories">
          {

          }
        </div>
      
    </div>
  )
}

Categories.propTypes = {
  categorie: PropTypes.shape({
    backgroundColor: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Categories;
