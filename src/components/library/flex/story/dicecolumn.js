

import React from "react";
import styled from "styled-components";
import {Flex, FlexColumn, FlexRow} from "../index";


const Dot = styled.div`
  background-color: black;
  height: 10px;
  width: 10px;
  border-radius: 100%;
`;

const Dice = styled(FlexColumn)`
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

export function DiceColumn(props) {
    return (
        <Container>
            <Dice center>
                <Dot/>
            </Dice>

            <Dice justifyContent={"space-between"}>
                <FlexRow>
                    <Dot/>
                </FlexRow>
                <FlexRow justifyContent={"flex-end"}>
                    <Dot/>
                </FlexRow>
            </Dice>

            <Dice justifyContent={"space-between"}>
                <FlexRow>
                    <Dot/>
                </FlexRow>
                <FlexRow center>
                    <Dot/>
                </FlexRow>
                <FlexRow justifyContent={"flex-end"}>
                    <Dot/>
                </FlexRow>
            </Dice>

            <Dice justifyContent={"space-between"}>
                <FlexRow justifyContent={"space-between"}>
                    <Dot/>
                    <Dot/>
                </FlexRow>
                <FlexRow justifyContent={"space-between"}>
                    <Dot/>
                    <Dot/>
                </FlexRow>
            </Dice>

            <Dice justifyContent={"space-between"}>
                <FlexRow justifyContent={"space-between"}>
                    <Dot/>
                    <Dot/>
                </FlexRow>
                <FlexRow center>
                    <Dot/>
                </FlexRow>
                <FlexRow justifyContent={"space-between"}>
                    <Dot/>
                    <Dot/>
                </FlexRow>
            </Dice>

            <Dice justifyContent={"space-between"}>
                <FlexRow justifyContent={"space-between"}>
                    <Dot/>
                    <Dot/>
                </FlexRow>
                <FlexRow justifyContent={"space-between"}>
                    <Dot/>
                    <Dot/>
                </FlexRow>
                <FlexRow justifyContent={"space-between"}>
                    <Dot/>
                    <Dot/>
                </FlexRow>
            </Dice>
        </Container>
    );
}
