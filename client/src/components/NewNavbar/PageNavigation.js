import React, { useState } from 'react';
import NavTabs from './NewNavTabs';
import Home from '../Home';
import Resources from '../Resources'
import Visa from '../NomadVisas';
import LanguagePractice from '../Language Practice';
import "../NewNavbar/NewNav.css"
import FooterContainer from '../containers/footer';
import Login from '../../pages/Login';
import Register from '../Register';

export default function PageNavigation () {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        if (currentPage === 'Resources') {
            return <Resources />;
        }
        if (currentPage === 'Visa') {
            return <Visa />;
        }
        if (currentPage === 'Language Practice') {
            return <LanguagePractice />;
        }
        if (currentPage ==='Login'){
            return <Login/>
        }
        if (currentPage === 'Register'){
            return<Register/>
        }
        return <Home />;
    };
    
    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <div>
                <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
                {renderPage()}
            </div>
            <div>
                <FooterContainer />
            </div>
        </div>
    );
}