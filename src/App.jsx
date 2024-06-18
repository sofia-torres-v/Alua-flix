import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import NewVideo from './pages/newVideo/NewVideo';
import NavBar from './components/navBar/NavBar';
import Footer from './components/footer/Footer';


function App() {
    return (
        <>
            <header className='header'>
                <NavBar />
            </header>
            
            <main>
                <section className='section'>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/newVideo" element={<NewVideo />} />
                    </Routes>
                </section>
            </main>
            <Footer />

        </>

    );
}

export default App;
