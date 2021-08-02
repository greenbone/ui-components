
import React from "react";
import styled from "styled-components";
import {Flex, FlexColumn} from "./Flex";


const Dot = styled.div`
  background-color: black;
  height: 10px;
  width: 10px;
  border-radius: 100%;
`;

const Dice = styled(Flex)`
  box-sizing: border-box;
  border: 1px solid grey;
  border-radius: 20%;
  height: 100px;
  width: 100px;
  padding: 20px;
  margin: 10px;
  flex-shrink: 0;
`;

const Container = styled(Flex)`
  flex-wrap: wrap;
`;

export function DiceRow(props) {
    return (
        <Container>
            <Dice justifyContent={"center"} alignItems={"center"}>
                <Dot/>
            </Dice>

            <Dice justifyContent={"space-between"}>
                <FlexColumn>
                    <Dot/>
                </FlexColumn>
                <FlexColumn alignItems={"flex-end"} justifyContent={"flex-end"}>
                    <Dot/>
                </FlexColumn>
            </Dice>

            <Dice justifyContent={"space-between"}>
                <FlexColumn>
                    <Dot/>
                </FlexColumn>
                <FlexColumn alignItems={"center"} justifyContent={"center"}>
                    <Dot/>
                </FlexColumn>
                <FlexColumn alignItems={"flex-end"} justifyContent={"flex-end"}>
                    <Dot/>
                </FlexColumn>
            </Dice>

            <Dice justifyContent={"space-between"}>
                <FlexColumn justifyContent={"space-between"}>
                    <Dot/>
                    <Dot/>
                </FlexColumn>
                <FlexColumn justifyContent={"space-between"}>
                    <Dot/>
                    <Dot/>
                </FlexColumn>
            </Dice>
            <Dice justifyContent={"space-between"}>
                <FlexColumn justifyContent={"space-between"}>
                    <Dot/>
                    <Dot/>
                </FlexColumn>
                <FlexColumn alignItems={"center"} justifyContent={"center"}>
                    <Dot/>
                </FlexColumn>
                <FlexColumn justifyContent={"space-between"}>
                    <Dot/>
                    <Dot/>
                </FlexColumn>
            </Dice>
            <Dice justifyContent={"space-between"}>
                <FlexColumn justifyContent={"space-between"}>
                    <Dot/>
                    <Dot/>
                    <Dot/>
                </FlexColumn>
                <FlexColumn justifyContent={"space-between"}>

                </FlexColumn>
                <FlexColumn justifyContent={"space-between"}>
                    <Dot/>
                    <Dot/>
                    <Dot/>
                </FlexColumn>
            </Dice>

        </Container>
    );
}
