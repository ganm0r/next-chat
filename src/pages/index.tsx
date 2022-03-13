import styled from "styled-components";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import React from "react";

import { MainContainer } from "../components/MainContainer";
import { Navbar } from "../components/Navbar";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

const Flex = styled.div`
  display: flex;
`;

const Users: NextPage = () => {

  const router = useRouter();

  const [username, setUsername] = useState('');

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
          <Input title="Type in a cool username" onChange={(event) => { setUsername(event.target.value); }} />
          <Button children="Let's go!" onClick={() => { router.push('/' + username); }}/>
        </Flex>
      </Flex>
    </MainContainer>
  );
};

export default Users;
