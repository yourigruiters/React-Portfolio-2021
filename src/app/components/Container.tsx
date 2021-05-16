import styled from '@emotion/styled';
import React from 'react';

const Contain = styled.main`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 40px 40px 40px 130px;
`;

const Temp = styled.div`
  width: 100%;
  height: 100%;
  background-color: lightgray;
`;

interface Props {}

const Container: React.FC<Props> = ({ children }) => {
  return (
    <Contain>
      <Temp>{children}</Temp>
    </Contain>
  );
};

export default Container;