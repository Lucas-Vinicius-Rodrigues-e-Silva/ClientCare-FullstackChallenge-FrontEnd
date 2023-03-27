import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 15vh;

  background-color: var(--color-primary);

  border-bottom: 2px solid var(--color-grey-2);

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 80%;
    height: 100%;
  }

  > div > img {
    width: 10%;
    height: 30%;
  }
  > div > nav {
    display: flex;
    justify-content: space-between;

    width: 25%;
    height: 20%;
  }

  > div > nav > a {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0px 16px;
    gap: 10px;

    height: 100%;

    background-color: var(--color-grey-2);
    color: var(--color-grey-0);

    border-radius: 4px;
    text-decoration: none;
    transition: 0.25s;
  }

  > div > nav > a:hover {
    background-color: var(--color-grey-1);
    transition: 0.25s;
    color: var(--color-grey-4);
  }
`;
