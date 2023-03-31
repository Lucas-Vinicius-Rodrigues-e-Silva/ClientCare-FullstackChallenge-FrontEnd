import styled from "styled-components";

export const StyledListClients = styled.ul`
  width: 90vw;
  min-width: 90vw;
  max-width: 90vw;
  max-height: 80%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: start;
  overflow-x: scroll;
  list-style: none;
  padding: 0;

  /* width */
  ::-webkit-scrollbar {
    width: 0.3rem;
    height: 0.3rem;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #91a7ff;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #748ffc;
  }
`;
