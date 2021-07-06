import styled from '@emotion/styled';
import React from 'react';

const Container = styled.div`
  display: flex;
  width: 25%;
  height: 100%;
  transform: translate3d(0, 0, 0);
  position: relative;
  color: #fff;
  overflow: hidden;
  transition: width 0.5s ease;

  .tl-content {
    transform: translate3d(0, 0, 0) translateY(25px);
    position: relative;
    z-index: 1;
    text-align: center;
    margin: 0 1.618em;
    top: 55%;
    opacity: 0;

    h1 {
      font-family: 'Pathway Gothic One', Helvetica Neue, Helvetica,
        Arial, sans-serif;
      text-transform: uppercase;
      color: #1779cf;
      font-size: 1.44rem;
      font-weight: normal;
    }
  }

  .tl-year {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    z-index: 1;
    border-top: 1px solid #fff;
    border-bottom: 1px solid #fff;

    p {
      font-family: 'Pathway Gothic One', Helvetica Neue, Helvetica,
        Arial, sans-serif;
      font-size: 1.728rem;
    }
  }

  .tl-bg {
    transform: translate3d(0, 0, 0);
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-size: cover;
    background-position: center center;
    transition: filter 0.5s ease;
    filter: grayscale(100%);
  }

  &:before,
  &:after {
    transform: translate3d(0, 0, 0);
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }

  &:after {
    background: rgba(3, 22, 37, 0.85);
    opacity: 1;
    transition: opacity 0.5s ease;
  }

  &:before {
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 75%
    );
    z-index: 1;
    opacity: 0;
    transform: translate3d(0, 0, 0) translateY(50%);
    transition: opacity 0.5s ease, transform 0.5s ease;
  }

  &:hover {
    width: 30% !important;

    &:after {
      opacity: 0;
    }

    &:before {
      opacity: 1;
      transform: translate3d(0, 0, 0) translateY(0);
      transition: opacity 1s ease, transform 1s ease 0.25s;
    }

    .tl-content {
      opacity: 1;
      transform: translateY(0);
      transition: all 0.75s ease 0.5s;
    }

    .tl-bg {
      filter: grayscale(0);
    }
  }
`;

interface Props {}

const Location: React.FC<Props> = () => {
  return (
    <Container>
      <div
        className="tl-bg"
        style={{
          backgroundImage:
            'url(' + 'https://placeimg.com/801/801/nature' + ')',
        }}
      ></div>

      <div className="tl-year">
        <p className="f2 heading--sanSerif">2011</p>
      </div>

      <div className="tl-content">
        <h1>Lorem ipsum dolor sit</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit.
        </p>
      </div>
    </Container>
  );
};

export default Location;
