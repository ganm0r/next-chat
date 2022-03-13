import styled from "styled-components";
import type { NextPage } from "next";

import { MainContainer } from "../components/MainContainer";
import { Navbar } from "../components/Navbar";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

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
          justifyContent: "center",
          alignItems: "center",
          padding: "48px",
        }}
      >
        <Flex
          style={{ height: "max-content", width: "45%", flexDirection: "column" }}
        >
          <Input title="Type in a cool username" />
          <Button children="Let's go!" />
        </Flex>
      </Flex>
    </MainContainer>
  );
};

export default Users;
