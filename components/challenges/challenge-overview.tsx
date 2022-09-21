import Link from "next/link";
import React from "react";
import styled from "styled-components";
import useChallengeDetailQuery from "../../hooks/challenge-detail-query";
import { media } from "../../styles/media";
interface Props {
  challengeId: string;
}
function ChallengeOverview({ challengeId }: Props) {
  const { data: challengeDetail } = useChallengeDetailQuery({ challengeId });

  const getDescription = (
    university: string,
    department: string,
    professorName: string
  ): { countOfLine: number; description: string } => {
    const strings = [university, department, professorName, "교수님"];
    const totalLength = strings.reduce((sum, string) => {
      return sum + string.length;
    }, 0);
    if (window.innerWidth > 600 || totalLength < 25) {
      return { countOfLine: 1, description: strings.join(" ") };
    } else {
      return {
        countOfLine: 2,
        description: strings.slice(0, 2).join(" ") + "\n" + professorName,
      };
    }
  };

  return (
    <>
      {challengeDetail && (
        <Container
          bgImage={challengeDetail.imageUrl}
          className="w-[1036px] h-[140px] rounded-lg bg-black"
        >
          <Block
            countOfLine={
              getDescription(
                challengeDetail.university,
                challengeDetail.department,
                challengeDetail.professorName
              ).countOfLine
            }
          >
            <Link href={`/challenges/${challengeId}`}>
              <Title titleLength={challengeDetail.title.length}>
                {challengeDetail.title} {challengeDetail.chapter}기
              </Title>
            </Link>
            <Description>
              {getDescription(
                challengeDetail.university,
                challengeDetail.department,
                challengeDetail.professorName
              )
                .description.split("\n")
                .map((desc) => (
                  <>
                    {desc}
                    <br />
                  </>
                ))}
            </Description>
          </Block>
        </Container>
      )}
    </>
  );
}

export default ChallengeOverview;

const Container = styled.div<{ bgImage: string }>`
  position: relative;
  width: 100%;
  height: 140px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${(p) => p.bgImage});
  border-radius: 8px;

  ${media.medium`
    width: 100vw;
    height: 130px;
    border-radius: 0px;
  `}
`;

const Block = styled.div<{ countOfLine: number }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;

  position: relative;
  width: 412px;
  height: 63px;
  left: 24px;
  top: 57px;

  ${media.medium`
    width: 320px;
    height: 54px;
    left: 20px;
    top: ${(p: { countOfLine: number }) =>
      p.countOfLine === 1 ? "56px" : "44px"};
  `}
`;

const Title = styled.h1<{ titleLength: number }>`
  width: 412px;
  height: 38px;

  font-weight: 600;
  font-size: 32px;
  line-height: 38px;

  cursor: pointer;

  color: #ffffff;

  &:hover {
    color: #4f46e5;
    transition: 150ms;
  }

  ${media.medium`
    font-size: ${(p: { titleLength: number }) =>
      p.titleLength > 20 ? "24px" : "20px"};
    line-height: ${(p: { titleLength: number }) =>
      p.titleLength > 20 ? "29px" : "24px"};
  `}
`;

const Description = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;

  color: #ffffff;
  opacity: 0.8;

  ${media.medium`
    font-size: 14px;
    line-height: 17px;
  `}
`;
