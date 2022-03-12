import styled from "styled-components";

import { NextPage } from "next";
import { useRouter } from "next/router";

import { MainContainer } from "../components/MainContainer";
import { Navbar } from "../components/Navbar";
import { Card } from "../components/Card";

const Flex = styled.div`
  display: flex;
`;

const User: NextPage = () => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <MainContainer>
            <Navbar username={id} />
            <Flex
                style={{
                    height: "70%",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexDirection: "row",
                }}
            >
                <Flex 
                    style={{
                        height: "120%",
                        width: "30%",
                        flexDirection: "column",
                        backgroundColor: "#EF9A9A",
                        marginTop: "242px",
                        marginLeft: "40px",
                        borderRadius: "10px",
                    }}
                >
                    <Card backgroundColor="purple-1">
                        
                    </Card>
                </Flex>
            </Flex>
        </MainContainer>
    );
}

export default User;