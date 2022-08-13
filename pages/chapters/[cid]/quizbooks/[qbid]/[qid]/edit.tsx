import { useMutation, useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/router";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  fetchQuizAnswer,
  IQuizAnswer,
} from "../../../../../../api/quizzes/quiz-answer";
import {
  fetchQuizDetail,
  IQuizDetail,
} from "../../../../../../api/quizzes/quiz-detail";

type EditValidForm = {
  answer: string;
  explanation: string;
  source: string;
};

interface QuizEdit {
  quizAnswer: string;
  quizExplanation: string;
  quizSource: string;
}

function QuizAnswerEdit() {
  const router = useRouter();
  const chapterId = String(router.query.cid);
  const quizbookId = String(router.query.qbid);
  const quizId = String(router.query.qid);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<EditValidForm>();
  const {
    data: quizDetail,
    error,
    isLoading,
  } = useQuery<IQuizDetail, AxiosError>(
    ["quizDetail", quizId],
    () => fetchQuizDetail({ chapterId, quizbookId, quizId }),
    {
      enabled: !!quizId,
    }
  );
  const { data: quizAnswer } = useQuery<IQuizAnswer>(
    ["quizAnswer", quizId],
    () => fetchQuizAnswer({ chapterId, quizbookId, quizId }),
    {
      enabled: !!quizId,
    }
  );

  const { mutate: mutateAnswerEdit } = useMutation(
    async (editBody: QuizEdit) => {
      return await axios.patch(
        "https://a61e9270-0366-4013-a651-fbc3d46384ab.mock.pstmn.io/v1/chapters/1/quizbooks/1/quizzes/1/answer",
        editBody
      );
    },
    {
      onSuccess: () => {
        router.push(`/chapters/${chapterId}/quizbooks/${quizbookId}/${quizId}`);
      },
    }
  );

  const onEditValid: SubmitHandler<EditValidForm> = (data) => {
    const { answer, explanation, source } = data;
    const editBody = {
      quizAnswer: answer,
      quizExplanation: explanation,
      quizSource: source,
    };
    mutateAnswerEdit(editBody);
  };

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // } else if (!quizDetail?.isMine) {
  //   return (
  //     <div className="flex justify-center items-center w-screen h-screen">
  //       접근 권한이 없습니다.
  //     </div>
  //   );
  // }
  return (
    <div className="grid grid-cols-5 gap-4 w-full lg:mt-20 m-auto sm:flex sm:flex-col sm:px-10">
      <div className="col-start-2 col-span-3 flex flex-col gap-8 py-10 sm:h-screen sm:justify-between sm:py-20">
        <div className="flex flex-col gap-5">
          <h2 className="text-2xl">{quizDetail?.quizTitle}</h2>
          <p className="flex flex-col gap-5 justify-between bg-white p-5 drop-shadow-md">
            {quizDetail?.quizContent}
            {quizDetail?.files.map((file, index) => (
              <img
                key={index}
                src={`http://drive.google.com/uc?export=download&id=${
                  file.filePath.split("?id=")[1]
                }`}
                width="300"
                alt={file.fileName}
              />
            ))}
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onEditValid)}
          className="flex flex-col gap-8 pb-10 items-end"
        >
          <div className="flex flex-col w-full gap-2">
            <label>
              정답을 입력하세요.
              <textarea
                {...register("answer", { required: true })}
                defaultValue={quizAnswer?.quizAnswer}
                className="shadow appearance-none border rounded w-full mt-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </label>
            {errors.answer && errors.answer.type === "required" && (
              <em>정답은 필수 입력값입니다.</em>
            )}
          </div>
          <div className="flex flex-col w-full gap-2">
            <label>
              해설을 입력하세요.
              <textarea
                rows={5}
                {...register("explanation", { required: true })}
                defaultValue={quizAnswer?.quizExplanation}
                className="shadow appearance-none border rounded w-full mt-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </label>
            {errors.explanation && errors.explanation.type === "required" && (
              <em>해설은 필수 입력값입니다.</em>
            )}
          </div>
          <div className="flex flex-col w-full gap-2">
            <label>
              해설에 대한 출처를 입력하세요. (선택)
              <span>* 예: 공학과컴퓨터2 교재 10p 3번째 줄</span>
              <textarea
                {...register("source")}
                defaultValue={quizAnswer?.quizSource}
                className="shadow appearance-none border rounded w-full mt-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </label>
          </div>
          <button
            type="submit"
            className="w-fit bg-[#5c3cde] hover:bg-[#4026ab] text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline cursor-pointer"
          >
            제출
          </button>
        </form>
      </div>
    </div>
  );
}

export default QuizAnswerEdit;
