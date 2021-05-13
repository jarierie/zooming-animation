import React, { useRef } from "react";
import styled from "styled-components";
import image from "../assets/parkboram.jpg";
import Card from "./Card";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Main = () => {
  const containerRef = useRef(null);
  return (
    <>
      <Container ref={containerRef}>
        <Card containerRef={containerRef} image={image} />
      </Container>
    </>
  );
};

export default Main;
