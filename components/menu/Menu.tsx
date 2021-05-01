import styled from "styled-components";
import Link from "next/link";
import { useRef } from "react";

export const Menu = () => {
  const ref = useRef(null);
  const handleMove = () => {
    ref.current.checked = false;
  };
  return (
    <HamburgerMenu>
      {/* <label>
        <input type="checkbox" ref={ref} />
        <span className="menu">
          <span className="hamburger"></span>
        </span>
        <ul>
          <li onClick={handleMove}>
            <Link href="/">Home</Link>
          </li>
          <li onClick={handleMove}>
            <Link href="/profile">Profile</Link>
          </li>
          <li onClick={handleMove}>
            <Link href="/oss">OSS</Link>
          </li>
        </ul>
      </label> */}
    </HamburgerMenu>
  );
};

const HamburgerMenu = styled.div`
  ul {
    font-size: 32px;
    font-family: ${(prop) => prop.theme.fontTitle};
    font-weight: ${(prop) => prop.theme.fontWeightBold};
    li:hover {
      transform: scale(1.2);
      transition: 0.6s;
    }
  }
  label .hamburger {
    position: absolute;
    top: 142px;
    right: 45px;
    width: 30px;
    height: 2px;
    background: #000;
    display: block;
    -webkit-transform-origin: center;
    transform-origin: center;
    -webkit-transition: 0.5s ease-in-out;
    transition: 0.5s ease-in-out;
  }

  label .hamburger:after,
  label .hamburger:before {
    -webkit-transition: 0.5s ease-in-out;
    transition: 0.5s ease-in-out;
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    background: #000;
  }

  label .hamburger:before {
    top: -10px;
  }

  label .hamburger:after {
    bottom: -10px;
  }

  label input {
    display: none;
  }

  label input:checked + .menu {
    box-shadow: 0 0 0 100vw #fff, 0 0 0 100vh #fff;
    border-radius: 0;
  }

  label input:checked + .menu .hamburger {
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  label input:checked + .menu .hamburger:after {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
    bottom: 0;
  }

  label input:checked + .menu .hamburger:before {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
    top: 0;
  }

  label input:checked + .menu + ul {
    opacity: 1;
  }
  label .menu {
    position: absolute;
    left: -100px;
    top: -100px;
    z-index: 100;
    width: 200px;
    height: 196px;
    background: #fff;
    border-radius: 50% 50% 50% 50%;
    -webkit-transition: 0.5s ease-in-out;
    transition: 0.5s ease-in-out;
    box-shadow: 0 0 0 0 #fff, 0 0 0 0 #fff;
    cursor: pointer;
  }

  label ul {
    z-index: 200;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    opacity: 0;
    -webkit-transition: 0.25s 0s ease-in-out;
    transition: 0.25s 0s ease-in-out;
  }

  label a {
    margin-bottom: 1em;
    display: block;
    color: #000;
    text-decoration: none;
  }
`;
