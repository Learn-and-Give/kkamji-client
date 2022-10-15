import { useQuery } from "@tanstack/react-query";
import React from "react";
import styled from "styled-components";
import { fetchMyChallenge } from "../../../api/challenges";
import { getToken } from "../../../api/getToken";
import { media } from "../../../styles/media";
import { Challenge } from "../../../types/Challenge";
import ChallengeListElement from "../blocks/ChallengeListElement";

function ChallengeListContainer() {
  const { data: challenges } = useQuery<Challenge[]>(
    ["myChallenge"],
    fetchMyChallenge,
    {
      enabled: !!getToken(),
      suspense: true,
    }
  );

  return (
    <Container>
      {challenges?.map((challenge) => (
        <ChallengeListElement
          key={challenge.challengeId}
          challenge={challenge}
        />
      ))}
    </Container>
  );
}

export default ChallengeListContainer;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 36px;
  column-gap: 16px;

  width: 100%;

  ${media.medium`
    display: flex;
    flex-direction: column;
    gap: 35px;
  `}
`;
