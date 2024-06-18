import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react"

const AppContext = createContext();

const AppProvider = ({children}) => {
    const [data, setData] = useState([]);

    useEffect(()=>{
        async function getApi() {
            try {
                const response = await fetch('http://localhost:4000/products')
                const dataApi = await response.json();
                setData(dataApi);
            } catch (error) {
                console.log(error)
            }
        }
        getApi();
    },[])
    
  return (
    <AppContext.Provider value ={{data}}>
        {children}
    </AppContext.Provider>
    
  )
}

export { AppProvider, AppContext };

AppProvider.propTypes ={
    children: PropTypes.node.isRequired,
}

