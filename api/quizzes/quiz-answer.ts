import api from "../my-api";
import { getCode } from "../session-code";
import { IFetchQuiz } from "../fetch-types";

export interface IQuizAnswer {
  quizId: number;
  quizAnswer: string;
  quizExplanation: string;
  quizSource: string;
}

export const fetchQuizAnswer = async (idData: IFetchQuiz) => {
  const { chapterId, quizbookId, quizId } = idData;

  api.defaults.headers.common["code"] = getCode() || "";

  const { data } = await api.get(
    `/chapters/${chapterId}/quizbooks/${quizbookId}/quizzes/${quizId}/answer`
  );
  return data;
};
