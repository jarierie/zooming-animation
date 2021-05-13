import React, { useRef } from "react";
import styled from "styled-components";
import { gsap } from "gsap";

const Container = styled.div`
  width: 500px;
  height: 600px;
  display: flex;
  justify-content: center;
  overflow: hidden;
  padding: 1px;
  cursor: pointer;
  img {
  }
`;

const Card = ({ image, containerRef }) => {
  const ref = useRef(null);

  //animation

  const hoverAnimation = () => {
    const tl = gsap.timeline();
    tl.to(ref.current, { scale: 1.1 })
      .to(
        ref.current.childNodes[0],
        {
          scale: 1.1,
          delay: 0.3,
        },
        0
      )
      .to(containerRef.current, { backgroundColor: "black" }, 0.5);
  };

  const animationOut = () => {
    const tl = gsap.timeline();
    tl.to(ref.current.childNodes[0], { scale: 1 })
      .to(
        ref.current,
        {
          scale: 1,
        },
        0
      )
      .to(containerRef.current, { backgroundColor: "white" }, 0.5);
  };

  return (
    <>
      <Container
        onMouseOut={animationOut}
        onMouseOver={hoverAnimation}
        ref={ref}
      >
        <img src={image}></img>
      </Container>
    </>
  );
};

export default Card;
