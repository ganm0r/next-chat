import styled from "styled-components";
import type { NextPage } from "next";

import { MainContainer } from "../components/MainContainer";
import { Navbar } from "../components/Navbar";

const Flex = styled.div`
  display: flex;
`;

const Users: NextPage = () => {
  return (
    <MainContainer>
      <Navbar username="" />
      <Flex
        style={{
          height: "70%",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "48px",
        }}
      >
      </Flex>
    </MainContainer>
  );
};

export default Users;
