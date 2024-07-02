import React, { useState } from "react";
import styled from "styled-components";
import SideNav from "./SideNav";
import TaskCard from "./TaskCard";

const tasks = [
  {
    title: "Task 1",
    description: "Description of Task 1",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Task 2",
    description: "Description of Task 2",
    image: "https://via.placeholder.com/150",
  },
];

const UserDashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (

    <div className="mx-12">user dashboard</div>
    // <Container>
    //   <SideNav isOpen={isOpen} />
    //   <Main>
    //     <Toggle onClick={() => setIsOpen(!isOpen)}>&#9776;</Toggle>
    //     <TaskContainer>
    //       {tasks.map((task, index) => (
    //         <TaskCard key={index} task={task} />
    //       ))}
    //     </TaskContainer>
    //   </Main>
    // </Container>
  );
};

export default UserDashboard;

const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex: 1;
  margin-left: ${({ isOpen }) => (isOpen ? "250px" : "0")};
  transition: margin-left 0.3s;
  padding: 20px;
`;

const Toggle = styled.span`
  font-size: 30px;
  cursor: pointer;
`;

const TaskContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
