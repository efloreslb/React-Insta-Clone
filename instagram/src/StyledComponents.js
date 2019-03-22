import styled, {css} from 'styled-components';

const Container = styled.div`
    border: 1px solid lightgray; 
    border-radius: 8px;
    width: fit-content;
    padding: 10px;
    margin: 5px auto;
`;

const Form = styled.form`
    
`;

const Input = styled.input`
    width: 300px; 
    margin: 5px 0;  
    border-radius: 5px; 
    border: 1px solid lightgray;
    padding: .5em;

    ${props => props.block && css`
        display: block;
    `}

    ${props => props.expand && css`
        width: 100%;
    `}

    ${props => props.comment && css`
        border: 0px;
        border-top: 1px solid lightgray;
        border-radius: 0px;
        margin-top: 10px;
    `}
`;

const Button = styled.button`
    display: block;
    background: gray;
    border-radius: 5px;
    border: 1px solid gray;
    color: #fff;
    padding: .5em;
    margin: 5px 0;
    
    &:hover {
        opacity: .9;
    }

    ${ props => props.primary && css`
        background: dodgerblue;
        border-color: dodgerblue;
        color: #fff;
    `}

    ${ props => props.expand && css`
        width: 100%;
    `}
`;

const H1 = styled.h1`
    font-family: 'Oleo Script', cursive;
    text-align: center;
`;

const H2 = styled.h2`
    font-family: 'Oleo Script', cursive;
    text-align: center;
    max-width: 100px;
    width: 100%;

    @media (max-width: 600px) {
        font-size: 18px;
    }
`;

const Divider = styled.div`
    width: 15px;
    height: 30px;
    border-left: 1px solid gray;
`;

const Header = styled.header`
    display: flex;
    text-align: center;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    border-bottom: 1px solid gainsboro;
    margin-bottom: 15px;
`;

const RowContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: fit-content;
    align-items: center;

    i:nth-child(n) {
        padding-right: 15px;
    }

`;

const Thumbnail = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 1px solid #fff;
    margin-right: 8px;
`;


const Body = styled.div`
    width: fit-content;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
`;

const Card = styled.div`
    max-width: 600px;
    width: 100%;
    border: 1px solid lightgray;
    border-radius: 5px;
    margin: 5px 0;
`;

const CardImg = styled.img`
    width: 100%;
`;

const CardTitle = styled.div`
    display: flex;
    align-items: center;
    margin: 15px;
`;

const CardBody = styled.div`
    width: 100%;
    padding: 15px;
`;

const CardSubtitle = styled.text`
    width: fit-content;
    display: flex;
    justify-content: space-between;

    i:nth-child(n) {
        padding-right: 13px;
    }
`;

const CardText = styled.text`
    display: block;
    text-align: left;
    margin: .15em 0;
`;

const Strong = styled.text`
    font-weight: 700;

    ${props => props.midstrength && css`
        font-weight: 600;
    `}
`;

const CardFooter = styled.text`
    text-transform: uppercase;
    font-size: 11px;
    color: gray;
    display: flex;
    margin: 5px 0;
`;

export {Body, Container, Form, Input, Button, H1, H2, Header, Divider, RowContainer, Card, CardImg, CardTitle, CardText, CardBody, CardSubtitle, Thumbnail, Strong, CardFooter};