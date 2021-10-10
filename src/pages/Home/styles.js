import styled from 'styled-components';

export const Container = styled.div`
  margin: 0;
  padding:  0 20px;
  box-sizing: border-box;
  h1{
    text-align: center;
    font-size: 45px;
  }
`;

export const Repositories = styled.div`
  flex: 1;
  background: #fff;
  height: 20rem;
  position: relative;
  border-radius: 8px;
  border: 1px solid black;
  display: block;
  justify-content: space-between;
  padding: 3rem 5rem;
  margin: 0 auto;
  margin-top: 3rem;
  text-align: center;

  strong{
    font-size: 25px;
    background:#fff;
  }

  h1{
    font-size: 20px;
    background:#fff;
  }
  a{
    font-size: 15px;
    background:#fff;
  }

`;

export const Search = styled.button`

`;