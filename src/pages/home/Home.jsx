import React from 'react';
import styled from 'styled-components';
import Header from '../../components/header/Header';
import Banner from '../../components/banner/Banner';
import Footer from '../../components/footer/Footer';
import Body from './components/product/product';

const StyleHome = styled.div`
    display: flex;
    flex-wrap: wrap;
`;
const StyleHeader = styled.div`
    width: 100%;

    position: relative;
`;

const StyleBody = styled.div`
    width: 100%;
    background-color: #e3f2fd;
`;
const StyleFooter = styled.div`
    width: 100%;
    background-color: white;
    margin-bottom: 20px;
`;
function Home() {
    return (
        <StyleHome>
            <StyleHeader>
                <Header />
            </StyleHeader>
            <StyleBody>
                <Banner />
                <Body />
            </StyleBody>

            <StyleFooter>
                <Footer />
            </StyleFooter>
        </StyleHome>
    );
}

export default Home;
