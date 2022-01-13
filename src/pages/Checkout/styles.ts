import styled from 'styled-components';

export const Container = styled.div`
`;

export const ProductList = styled.div`
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40rem;
    >p{
        font-size: 1.5rem;
    }

`;

export const Purchased = styled.div`
        display: flex;
        justify-content: space-between; ;
        width: 100%;
        .content{
            display: flex;
            flex-direction: column;
            padding-top: 10rem;
        }
        .price{
            padding-top: 20rem;
            display: flex;
            justify-content:center;
            align-items: center;
            flex-direction: column;
            h6{
            color: red;
            font-size: 5rem;
            }
            button{
                background: #F7CA00;
                border: 0;
                width: 12rem;
                height: 1.8rem;
                border-radius: 15px;
            }
    }

`;