import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    padding-left: 14px;
    padding-right: 14px;
    margin-left: auto;
    margin-right: auto;

    @media screen and (min-width: 480px) {
        width: 480px;
    }

    @media screen and (min-width: 804px) {
        width: 804px;
    }

    @media screen and (min-width: 1200px) {
        width: 1200px;
    }

`

export const Footer = styled.footer`
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #8972be;
    color: white;
    font-family: 'Rajdhani';
    font-size: 24px;

`