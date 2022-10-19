import React from "react";

import { Icon } from "@iconify/react";
import Link from "next/link";
import { useQuizzesQuery } from "../../../api/quizzes/hooks";
import { useRecoilValue } from "recoil";
import { weekSelectState } from "../stores/weekFilter";

interface Props {
  challengeId: string;
  week?: string;
  page: "READABLE" | "MY" | "LIKED";
}

function QuizList({ challengeId, week, page }: Props) {
  const selected = useRecoilValue<boolean[]>(weekSelectState);

  const { data: quizzes } = useQuizzesQuery({
    challengeId,
    page,
    week,
    suspense: true,
  });

  // page에 따라 퀴즈 상세페이지로 이동하는 href를 설정해주는 함수이다.
  const getLinkByPage = (quizId: number) => {
    const LINK_HEAD = `/challenges/${challengeId}/quizzes/${quizId}`;
    switch (page) {
      case "MY":
        return `${LINK_HEAD}/my`;
      case "LIKED":
        return `${LINK_HEAD}/like`;
      case "READABLE":
        return `${LINK_HEAD}`;
    }
  };

  return (
    <div className="w-full overflow-x-scroll">
      <table className="w-full">
        <thead>
          <tr>
            <th className="px-4 py-3 text-sm font-normal bg-gray-200 sm:px-1">
              번호
            </th>
            <th className="px-4 py-3 text-sm font-normal bg-gray-200 sm:px-1">
              제목
            </th>
            <th className="px-4 py-3 text-sm font-normal bg-gray-200 sm:px-1">
              작성자
            </th>
            <th className="px-4 py-3 text-sm font-normal bg-gray-200 sm:px-1">
              주차
            </th>
            <th className="px-4 py-3 text-sm font-normal bg-gray-200 sm:px-1">
              좋아요
            </th>
            <th className="px-4 py-3 text-sm font-normal bg-gray-200 sm:px-1">
              해결
            </th>
          </tr>
        </thead>
        <tbody>
          {quizzes
            ?.filter((value) => selected[value.quizWeek - 1])
            ?.map((quiz) => (
              <Link href={getLinkByPage(quiz.quizId)} key={quiz.quizId}>
                {
                  <tr className="cursor-pointer sm:text-sm">
                    <td className="px-4 py-3">{quiz.quizId}</td>
                    <td className="px-4 py-3 overflow-hidden">
                      {quiz.quizTitle}
                    </td>
                    <td className="px-4 py-3">{quiz.writerName}</td>
                    <td className="px-4 py-3">{quiz.quizWeek}주</td>
                    <td className="flex items-center justify-start px-4 py-3">
                      <span className="flex items-center justify-center gap-1">
                        <Icon icon="icon-park-solid:good-two" />
                        <span className="">
                          {quiz.cntOfGood ? quiz.cntOfGood : 0}
                        </span>
                      </span>
                    </td>
                    {quiz.isSolved ? (
                      <td className="px-4 py-3">
                        <Icon
                          icon="bi:patch-check-fill"
                          color="#5c3cde"
                          height={24}
                        />
                      </td>
                    ) : (
                      <td className="px-4 py-3"></td>
                    )}
                  </tr>
                }
              </Link>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default QuizList;
