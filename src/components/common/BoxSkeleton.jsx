import React from "react";
import styled from "styled-components";

const BoxSkeleton = ({ times }) => {
  const boxes = Array(times)
    .fill(0)
    .map((_, i) => {
      return (
        <SkeletonStyle>
          <div key={i}  className="skeleton load-flex">
            <div className="card is-loading">
              <div className="image"></div>
              <div className="content">
                <h2></h2>
                <p></p>
                <p></p>
                <span></span>
              </div>
            </div>
          </div>
        </SkeletonStyle>
      );
    });

  return boxes;
};

export default BoxSkeleton;

const SkeletonStyle = styled.div`
  /* display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 1em;
  align-items: center;
  justify-content: center; */
  .skeleton {
    /* grid-auto-flow: row; */
  }
  .card {
    margin: 10px;
    width: 300px;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);

    .content {
      padding: 20px 10px;
    }
  }
  @keyframes shine {
    to {
      background-position-x: -200%;
    }
  }
  .card.is-loading {
    .image,
    h2,
    p,
    span {
      background: #eee;
      background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
      border-radius: 5px;
      background-size: 200% 100%;
      animation: 1.5s shine linear infinite;
    }

    .image {
      height: 200px;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    h2 {
      height: 30px;
      margin: 0.2em 0;
      width: 100%;
    }

    p {
      height: 15px;
      margin: 0.2em 0;
    }
    span {
      height: 20px;
      width: 30px;
      margin: 0.2em 0;
    }
  }
`;
