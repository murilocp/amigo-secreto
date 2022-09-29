import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    width: 350px;
    height: 80px;
    font-size: 20px;
    box-shadow: 2px 2px 0px 1px #000000;
    border-radius: 45px;
    background-color: #fe652b;
    color: #fff;
    cursor: pointer;

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    &:hover {
      background-color: #4b69fd;
    }
  }

  @media screen and (max-width: 800px) {
    flex-direction: column;

    button {
      width: 220px;
      margin: 32px 0;
    }

    img {
      margin-top: 32px;
    }
  }
`;
