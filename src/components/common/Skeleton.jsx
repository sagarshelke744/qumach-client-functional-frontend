import React from "react";
import styled from "styled-components";

const Skeleton = ({ times }) => {
  const boxes = Array(times)
    .fill(0)
    .map((_, i) => {
      return (
        <SkeletonStyle>
          <div key={i} className="skeleton load-flex">
            <h1 class="skeleton skeleton-text"></h1>
            <div class="load"></div>
          </div>
        </SkeletonStyle>
      );
    });

  return boxes;
};

export default Skeleton;

const SkeletonStyle = styled.div`
  .skeleton {
    opacity: 0.7;
    animation: skeleton-loading 1s linear infinite alternate;
    margin: 0.2rem 0;
  }

  .skeleton-text {
    width: 100%;
    height: 0.5rem;
    margin-bottom: 0.25rem;
    border-radius: 0.125rem;
    margin: 0.5rem 0;
  }

  .skeleton-text:last-child {
    margin-bottom: 0;
    width: 80%;
  }

  @keyframes skeleton-loading {
    0% {
      background-color: hsl(200, 20%, 70%);
    }

    100% {
      background-color: hsl(200, 20%, 95%);
    }
  }
  .load-flex {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1em;
    grid-auto-flow: column;
  }
  .load {
    background-image: linear-gradient(90deg, lightgray, #9d9d9d, lightgray);
    animation: scroll 0.5s infinite;
    color: transparent;
    border-radius: 0.25rem;
    /*-webkit-background-clip: text;*/
  }

  div.load {
    display: flex;
  }

  .load * {
    z-index: 99;
  }

  @keyframes scroll {
    from {
      background-position: 0;
    }
    to {
      background-position: 100vw;
    }
  }
`;
