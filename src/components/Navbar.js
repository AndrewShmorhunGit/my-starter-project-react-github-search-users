import React from "react";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { isAuthenticated, loginWithRedirect, logout, user, isLoading } =
    useAuth0();

  const isUser = isAuthenticated && user;

  const checkUser = () => {
    if (user.name === "Andrii Danko") {
      return "мой синьор, я тебя узнал 😀";
      // ("мой синьор, я тебя узнал 😀");
    } else if (user.name === "Dmitry Mahovetsky") {
      return "Касатик 😉 Попался?)";
    } else if (user.name === "Andrew Shmorgun") {
      return "Проверка связи 😉";
    } else {
      return user.name.toUpperCase();
    }
  };

  return (
    <Wrapper>
      {isUser && user.picture && <img src={user.picture} alt={user.name} />}
      {isUser && user.name && <h4>Welcome, {checkUser()}</h4>}

      {!isUser ? (
        <button onClick={() => loginWithRedirect()}>Login</button>
      ) : (
        <button
          onClick={() => {
            logout();
          }}
        >
          LogOut
        </button>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  padding: 1.5rem;
  margin-bottom: 4rem;
  background: var(--clr-white);
  text-align: center;
  display: grid;
  grid-template-columns: auto auto 100px;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  h4 {
    margin-bottom: 0;
    font-weight: 400;
  }
  img {
    width: 35px !important;
    height: 35px;
    border-radius: 50%;
    object-fit: cover;
  }
  button {
    background: transparent;
    border: transparent;
    font-size: 1.2rem;
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
`;

export default Navbar;
