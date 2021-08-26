import styled from "styled-components";

export const QuoteGeneratorStyle = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
text-align:center;

.quote-header {
    font-family: "Neucha", cursive;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width:98%;
  }

  .quote-nav {
    display: flex;
    align-items: center;
    justify-content:space-between;
    margin-top: 5%;
    border: 3px double sandybrown;
    margin-bottom:10%;
    width:90%;
    padding:1%;
  }
  .quote-nav .quote-nav-link {
    font-size: 2rem;
    color: antiquewhite;
    text-decoration: none;
  }
  .quote-nav .quote-nav-link:hover {
    transform: scale(1.1);
    color: limegreen;
  }
  .page-top {
    margin-bottom: 5%;
    color: antiquewhite;
    font-size: 1.5rem;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    width:90%;
  }
  .quoteSection {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5%;
    color: antiquewhite;
    width: 75%;
    background-color: sandybrown;
    border: 5px solid gold;
    font-size: 1.5rem;
  }
  button {
    background-color: sandybrown;
    border: solid 2px gold;
  }
  .insideQuoteSection {
    border: solid gold 5px;
    background-color: black;
    padding: 5%;
    width: 80%;
  }
  .quote-first-header {
    font-size: 2rem;
    color:sandybrown;
  }
  @media (max-width: 800px) {
    .quote-nav .quote-nav-link {
      font-size: 1.4rem;
    }
    .page-top h1 {
      font-size: 1.3rem;
    }
    .page-top p {
      font-size: 1rem;
    }
    .insideQuoteSection {
      font-size: 1rem;
    }
  }
  @media (max-width: 500px) {
    .quote-nav {
      flex-direction: column;
      border: none;
    }
    .quote-nav .quote-nav-link {
      margin-bottom: 2%;
      font-size: 1.5rem;
    }
    .page-top h1 {
      font-size:1.5rem;
    }
    .page-top p {
      font-size: 1rem;
    }
    .insideQuoteSection {
      font-size: 1rem;
    }
  }
`;
