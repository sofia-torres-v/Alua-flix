import { useContext } from "react";
import Banner from "../../assets/BannerMainHome.png";
import Categories from "../../components/categories/Categories";
import "./home.css";
import { AppContext } from "../../components/AppContext/AppContext";

const Home = () => {
  const {data} = useContext(AppContext);
  console.log(data)
    
    const categories = [
        {
            title: "Front End",
            backgroundColor: "#6BD1FF",
        },
        {
            title: "Back End",
            backgroundColor: "#00C86F",
        },
        {
            title: "Innovacio y Gestión",
            backgroundColor: "#FFBA05",
        },
    ];

    return (
        <div className="home__content-image">
            <img src={Banner} alt="" />

              {
                categories.map((categorie) => {
                  return <Categories categorie={categorie} key={categorie.title} />
                })
              }

            </div>
    );
};

export default Home;
