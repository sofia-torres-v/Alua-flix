import { useContext } from "react";
import Banner from "../../assets/BannerMainHome.png";
import "./home.css";
import { DataContext } from "../../components/AppContext/AppContext";
import Categories from "../../components/categories/Categories";

const Home = () => {
    const { data } = useContext(DataContext);
    console.log(data);

    return (
        <>
            <div className="home__content-image">
                <img src={Banner} alt="" />
            </div>
            <div className="container">

              {data.map(category => (
              <Categories  key={category.id} category={category}/>
              ))}

            </div>
        </>
    );
};

export default Home;
