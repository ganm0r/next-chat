import styled from "styled-components";

import { useState } from "react";

import { NextPage } from "next";
import { useRouter } from "next/router";

import { MainContainer } from "../components/MainContainer";
import { Navbar } from "../components/Navbar";
import { Card } from "../components/Card";
import { Input } from "../components/InputChat";
import { Button } from "../components/Button";

const Flex = styled.div`
  display: flex;
`;

const SubHeading = styled.h3(
    ({ theme }) => `
      margin: 0;
      width: 250px;
      font-weight: ${theme.fontWeights.bold};
      color: ${theme.colors["grey-1"]};
      font-size: 22px;
      line-height: 25px;
      padding-left: 20px;
    `
  );

const User: NextPage = () => {
    const router = useRouter();
    const { id } = router.query;

    const [isSelected, setIsSelected] = useState(false);

    function handleChatCardClick() {
        if(isSelected) {
            return;
        } else {
            setIsSelected(!isSelected);
            return isSelected;
        }
    }

    function handleSendMessageClick() {

    }

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
                    <Card backgroundColor={ isSelected ? "purple-2" : "purple-1"} >
                        <Flex
                            style={{
                                width: "100%",
                                height: "100%",
                                flexDirection: "row",
                                cursor: "pointer",
                            }}
                            onClick={handleChatCardClick}
                        >
                            <svg 
                                width="25" 
                                height="25" 
                                viewBox="0 0 75 75" fill="none" 
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path 
                                    d="M141.04 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM248.72 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM200.24 34c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9V5h9zM36.95 0L73.9 64H0L36.95 0zm92.38 5l-27.71 48L73.91 5H84.3l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10V51h-9V17h9v9.2c0-5.08 5.91-9.2 13.2-9.2z" 
                                    fill="#2B2B2B"
                                />
                            </svg>
                            <SubHeading>john doe</SubHeading>
                        </Flex>
                    </Card>
                    <hr     
                        style={{
                            margin: "0px",
                            width: "95%",
                            marginLeft: "2%"
                        }}
                        color="#2B2B2B"
                    />
                </Flex>

                { !isSelected && <Flex
                    style={{
                        height: "120%",
                        width: "64%",
                        backgroundColor: "#FFCDD2",
                        marginTop: "242px",
                        marginRight: "40px",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <SubHeading children="Please select a chat"/>
                </Flex> }

                { isSelected && <Flex 
                    style={{
                        height: "120%",
                        width: "64%",
                        flexDirection: "column",
                        backgroundColor: "#EF9A9A",
                        marginTop: "242px",
                        marginRight: "40px",
                        borderRadius: "10px",
                    }}
                >
                    <Card backgroundColor="purple-2" >
                        <Flex
                            style={{
                                width: "100%",
                                height: "100%",
                                flexDirection: "row",
                            }}
                        >
                            <svg 
                                width="25" 
                                height="25" 
                                viewBox="0 0 75 75" fill="none" 
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path 
                                    d="M141.04 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM248.72 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM200.24 34c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9V5h9zM36.95 0L73.9 64H0L36.95 0zm92.38 5l-27.71 48L73.91 5H84.3l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10V51h-9V17h9v9.2c0-5.08 5.91-9.2 13.2-9.2z" 
                                    fill="#2B2B2B"
                                />
                            </svg>
                            <SubHeading>john doe</SubHeading>
                        </Flex>
                    </Card>
                    <Flex
                        style={{
                            flexDirection: "column",
                            height: "78%"
                        }}
                    >

                    </Flex>
                    <Flex
                        style={{
                            flexDirection: "row",
                            height: "max-content",
                            margin: "2% 4% 2% 4%",
                            justifyContent: "space-between",
                        }}
                    >
                        <Input title="" />
                        <Button children="send message" onClick={handleSendMessageClick}/>
                    </Flex>
                </Flex> }
            </Flex>
        </MainContainer>
    );
}

export default User;