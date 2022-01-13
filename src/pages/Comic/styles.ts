import styled from 'styled-components';

export const Container = styled.div`
`;
export const ComicMain = styled.main`
    background: transparent;
    border-radius: 8px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;

    @media only screen and (max-width: 800px) {
        display: flex;
        flex-direction: column;
        grid-template-columns: repeat(0, 1fr);
  }
`;

export const ComicHeader = styled.div`
    >h1{
        color: #fff;
        font-size: 1.5rem;
    }
`;

export const ComicBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5rem;
    color: #fff;
    font-size: 0.8rem;
    .price{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 8px;
    h6{
        color: red;
        font-size: 1rem;
    }
    .stock{
        color: green;
        font-size: 1.2rem;
        line-height: 1.8rem
    }
    
    button{
        background: #F7CA00;
        border: 0;
        width: 12rem;
        height: 1.8rem;
        border-radius: 15px;
    }
    }
    table {
    padding-top: 1.5rem;
    color: #333;
        td, th {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
        }

        td{ 
            background-color: #F3F3F3;
        }

        th{ 
            background-color: #FFFF;
        }

        tr:nth-child(even) {
        background-color: #dddddd;
        }
    }  
    
`;
