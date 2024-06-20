import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';

const DataContext = createContext();

const AppProvider = ({ children }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function getApi() {
            try {
                const response = await fetch('http://localhost:4000/categories');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const dataApi = await response.json();
                setData(dataApi);
            } catch (error) {
                console.log('Error fetching categories:', error);
            }
        }
        getApi();
    }, []);

    return (
        <DataContext.Provider value={{ data }}>
            {children}
        </DataContext.Provider>
    );
};

AppProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export { AppProvider, DataContext };
