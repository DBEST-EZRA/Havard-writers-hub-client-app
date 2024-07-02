import React from "react";
import styled from "styled-components";

const TaskCard = ({ task }) => {
  return (
    <Card>
      <Image src={task.image} alt={task.title} />
      <Content>
        <Title>{task.title}</Title>
        <Description>{task.description}</Description>
      </Content>
    </Card>
  );
};

export default TaskCard;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 20px;
  overflow: hidden;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;

  @media (min-width: 768px) {
    width: 200px;
    height: auto;
  }
`;

const Content = styled.div`
  padding: 20px;
`;

const Title = styled.h2`
  margin: 0;
`;

const Description = styled.p`
  margin: 10px 0 0;
`;
