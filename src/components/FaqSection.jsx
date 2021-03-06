import React from "react";
import styled from "styled-components";
import { About } from "../styles";

const FaqSection = () => {
  return (
    <Faq>
      <h2>
        Any Question <span>FAQ</span>
      </h2>
      <div className="questions">
        <div className="question">
          <h4>How Do I Start?</h4>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
              sit? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Accusamus ratione debitis ullam totam, quidem exercitationem
              incidunt illum dicta culpa iusto.
            </p>
          </div>
        </div>
        <div className="faq-line" />
        <div className="question">
          <h4>Daily Schedule</h4>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
              sit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
              voluptatum neque labore quam quaerat unde rem facere ipsum omnis
              repellat.
            </p>
          </div>
        </div>
        <div className="faq-line" />
        <div className="question">
          <h4>Diffrent Payment Methods</h4>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
              sit? Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Iure, cupiditate! Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Libero, nesciunt.
            </p>
          </div>
        </div>
      </div>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
