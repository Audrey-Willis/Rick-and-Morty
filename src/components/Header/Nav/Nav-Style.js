import styled from 'styled-components';

export const NavStyle = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
width:98%;
.top-nav{
  display:flex;
  align-items:center;
  justify-content:space-between;
  width:90%;
}
  .top-nav .top-nav-link {
    color:black;
    text-decoration: none;
    width: 20%;
    padding: 1.5%;
    margin-bottom: 2%;
    font-size:1.5rem;
  }
  .top-nav .top-nav-link:hover {
    color: gold;
    font-size: 1.3rem;
  }

  @media (max-width: 800px) {
  .top-nav .top-nav-link{
    font-size: 1.2rem;
    width: 40%;
  }
  .top-nav .top-nav-link:hover {
    font-size: 1rem;
    color: darkgreen;
  }
  }
`;