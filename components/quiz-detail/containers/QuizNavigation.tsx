import { Icon } from "@iconify/react";
import React from "react";
import styled from "styled-components";
import { useQuizzesQuery } from "../../../api/quizzes/hooks";
import { media } from "../../../styles/media";

interface Props {
  challengeId: string;
  quizId: string;
  page: "READABLE" | "MY" | "LIKED";
  week?: string;
}

function QuizNavigation({ challengeId, quizId, page, week }: Props) {
  const { data: quizzes } = useQuizzesQuery({ challengeId, week, page });

  const getQuizTitle = (move: string) => {
    if (!quizzes) {
      return;
    }
    for (let i = 0; i < quizzes.length; i++) {
      if (String(quizzes[i].quizId) === quizId) {
        if (move === "prev" && i - 1 >= 0) {
          return quizzes[i - 1].quizTitle;
        } else if (move === "next" && i + 1 < quizzes.length) {
          return quizzes[i + 1].quizTitle;
        }
      }
    }
    return "";
  };

  const onMoveQuizClick = (move: string) => {
    if (!quizzes) {
      return;
    }
    for (let i = 0; i < quizzes.length; i++) {
      if (String(quizzes[i].quizId) === quizId) {
        if (move === "prev" && i - 1 >= 0) {
          document.location.replace(
            `/challenges/${challengeId}/quizzes/${quizzes[i - 1].quizId}${
              page === "MY" ? "/my" : page === "LIKED" ? "/like" : ""
            }${page === "READABLE" ? `?week=${week}` : ""}`
          );
        } else if (move === "next" && i + 1 < quizzes.length) {
          document.location.replace(
            `/challenges/${challengeId}/quizzes/${quizzes[i + 1].quizId}${
              page === "MY" ? "/my" : page === "LIKED" ? "/like" : ""
            }${page === "READABLE" ? `?week=${week}` : ""}`
          );
        }
      }
    }
  };
  // 퀴즈가 첫 번째 혹은 마지막 순서인지 확인한다. 두 경우에는 각각 이전과 이후로 이동하지 못한다.
  const isDisabled = (move: string) => {
    if (!quizzes) {
      return;
    }

    for (let i = 0; i < quizzes.length; i++) {
      if (String(quizzes[i].quizId) === quizId) {
        if (move === "prev" && i == 0) {
          return true;
        } else if (move === "next" && i == quizzes.length - 1) {
          return true;
        }
      }
    }
    return false;
  };

  return (
    <>
      {quizzes && (
        <Containter>
          {!isDisabled("prev") && (
            <Button onClick={() => onMoveQuizClick("prev")}>
              <Icon icon="zondicons:cheveron-left" color={"#9CA3AF"} />
              <ColDiv align={"flex-end"}>
                <span>이전 문제</span>
                <span>{getQuizTitle("prev")}</span>
              </ColDiv>
            </Button>
          )}
          {!isDisabled("prev") && !isDisabled("next") && <Vertical />}
          {!isDisabled("next") && (
            <Button onClick={() => onMoveQuizClick("next")}>
              <ColDiv align={"flex-start"}>
                <span>다음</span>
                <span>{getQuizTitle("next")}</span>
              </ColDiv>
              <Icon icon="zondicons:cheveron-right" color={"#9CA3AF"} />
            </Button>
          )}
        </Containter>
      )}
    </>
  );
}

export default QuizNavigation;

const Containter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 0px;
  gap: 16px;

  width: 100%;

  background: #ffffff;

  border: 1px solid #f3f4f6;
  border-radius: 8px;
`;

const Vertical = styled.div`
  height: 42px;

  border: 1px solid #f3f4f6;
`;

const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px;
  gap: 8px;

  width: 100%;
  margin: 4px;

  border-radius: 4px;

  &:hover {
    background: #eef2ff;
  }

  ${media.medium`
    padding: 12px;
  `}
`;

const ColDiv = styled.div<{ align: "flex-end" | "flex-start" }>`
  display: flex;
  flex-direction: column;
  align-items: ${(p) => p.align};
  gap: 8px;

  span {
    &:first-child {
      font-weight: 400;
      font-size: 12px;
      line-height: 14px;

      color: #111827;
    }
    &:last-child {
      font-weight: 600;
      font-size: 14px;
      line-height: 17px;

      color: #4f46e5;

      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;

      ${media.medium`
        width: 28vw;
        text-align: ${(p: { align: "flex-end" | "flex-start" }) =>
          p.align === "flex-end" ? "right" : "left"};
      `}
    }
  }
`;
