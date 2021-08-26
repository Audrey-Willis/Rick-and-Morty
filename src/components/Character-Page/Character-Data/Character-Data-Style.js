import styled from "styled-components";

export const CharacterDataStyle = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;

.character-header{
font-family: 'Neucha', cursive;
width:98%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
}

.character-nav{
  display:flex;
  align-items:center;
  justify-content:space-between;
  width:90%;
  margin-top:5%;
  border:3px double limegreen;
  padding:2%;
  
}
.character-nav .character-nav-link{
  font-size:2rem;
  color:antiquewhite;
  text-decoration:none;
}
.character-nav .character-nav-link:hover{
  transform:scale(1.1);
  color:limegreen;
}
  .characters {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  img {
    width: 70%;
    margin: 5%;
  }
  .character-page-top {
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
    text-align: center;
    margin-top:15%;
  }
  .searchAndPageButton {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  .searchBar {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  input {
    height: 20%;
    margin: 5%;
    margin-top: 1%;
    font-size:1.5rem;
  }
  .characterPageButton {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10%;
    font-size:1.5rem;
  }
  .characterPageButton button {
    margin-left: 5%;
    margin-right: 5%;
    font-size:1.2rem;
    padding:2%;
    
  }
  .character-page-top h1 {
    font-size: 3rem;
    color:limegreen;
  }
  h2 {
    font-size: 2rem;
    color:limegreen;
  }
  .character-page-top p{
    font-size:1rem;
    color:antiquewhite;
    width:60%;
  }
  @media(max-width:800px){
  .character-page-top h1{
    font-size:2rem;
  }
  .character-page-top p{
    font-size:1rem;
    width:70%;
  }
  .searchBar h2{
    font-size:1.5rem;
  }
  .character-nav .character-nav-link{
    font-size:1.4rem;
  }
  input{
    font-size:1rem;
  }
  .characterPageButton button{
    font-size:.8rem;
  }
  }
  @media(max-width:500px){
    .character-nav{
      flex-direction:column;
      border:none;
    }
    .character-nav .character-nav-link{
      margin-bottom:2%;
      font-size:1.5rem;
    }
  .characters{
    flex-direction:column;
    align-items:center;
    justify-content:center;
  }
  .characterPageButton button{
    font-size:1rem;
  }
  .character-page-top h1{
    font-size:1.5rem;
  }
  .character-page-top p{
    font-size:1rem;
    width:80%;
  }
  .searchBar h2{
    font-size:1.3rem;
  }
  input{
    font-size:1rem;
  }
  .characterPageButton{
    font-size:1rem;
  }
  }
`;
