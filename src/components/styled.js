import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkHome = styled(Link)`
    display: block;
    width: 4rem;
    margin: 2rem auto;
    border: solid 2px black;
    border-radius: 10px;
    background-color: #ecebeb;
    color: black;
    font-weight: 900;
    padding: .5rem 0;
    text-decoration: none;
    :hover{
        background-color: black;
        color: white;
    }
`