import styled from "styled-components";

export const StyleLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  min-width: 100vw;
  filter: blur(100%);
  position: fixed;
  z-index: 1;
  background-color: var(--color-grey-3);

  > p {
    text-transform: uppercase;
    letter-spacing: 5px;
    color: var(--color-1);
    animation: showLetters 2s infinite ease-in-out alternate-reverse;
    overflow: hidden;
    color: var(--color-grey-0);
  }

  @keyframes showLetters {
    0% {
      width: 0;
    }

    100% {
      width: 195px;
    }
  }
`;
