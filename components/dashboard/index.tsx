import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";
import dynamic from "next/dynamic";
import React, { Suspense, useEffect } from "react";
import styled from "styled-components";
import { api } from "../../api/myApi";
import { media } from "../../styles/media";
import { firebaseConfig } from "../../utils/FirebaseConfig";
import HeadTitle from "../common/HeadTitle";
import ChallengeListSkeleton from "../skeletons/ChallengeListSkeleton";
import DeferredComponent from "../skeletons/DeferredComponent";
import MyPointBlock from "./blocks/MyPointBlock";
import MissionStackedCountContainer from "./containers/MissionStackedCountContainer";
import { authorizationHeader } from "../../api/authHeader";
import { getJwtToken } from "../../api/getJwtToken";
const ChallengeListContainer = dynamic(
  () => import("./containers/ChallengeListContainer"),
  {
    suspense: true,
    ssr: false,
  }
);

const sentences = [
  "벼락치기를 하고 있는 전국의 50%의 대학생들을 앞서고 있습니다! 조금만 더 화이팅!",

  "지금 공부하는 1시간이 시험 기간에 다른 학생들과 격차를 벌릴 수 있는 1시간입니다! 계속 화이팅해봐요!",

  "여러분들은 지금까지 1달 동안 꾸준히 공부를 해오셨습니다! 시험 기간까지 조금만 더 화이팅해요!",
];
const random_index = Math.floor(Math.random() * sentences.length);

function DashboardPage() {
  useEffect(() => {
    const app = initializeApp(firebaseConfig);

    const messaging = getMessaging();

    getToken(messaging, {
      vapidKey: process.env.NEXT_PUBLIC_FIREBASE_VAPID_KEY,
    })
      .then((currentToken) => {
        api.post(
          "/notification/register",
          {
            platform: navigator.platform,
            fcmToken: currentToken,
          },
          authorizationHeader
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <HeadTitle name="내 챌린지 : 깜지" />
      <Frame>
        <Title>내 챌린지</Title>
        <HighlightBar>📢 {sentences[random_index]}</HighlightBar>
        <LayoutBlock>
          <MissionStackedCountContainer />
          <MyPointBlock />
        </LayoutBlock>
        <Suspense
          fallback={
            <DeferredComponent>
              <ChallengeListSkeleton />
            </DeferredComponent>
          }
        >
          <ChallengeListContainer />
        </Suspense>
      </Frame>
    </>
  );
}

export default DashboardPage;

const Frame = styled.div`
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: center;

  width: 1040px;
  padding: 80px;
  margin: 0 auto;

  ${media.medium`
    width: 100%;
    padding: 88px 20px;
    gap: 20px;
  `}
`;

const Title = styled.h1`
  display: flex;
  align-items: flex-start;

  width: 100%;

  font-weight: 700;
  font-size: 24px;
  line-height: 29px;

  color: #111827;
`;

const HighlightBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 16px;
  gap: 10px;

  width: 100%;

  background: #000000;
  border-radius: 8px;

  font-weight: 500;
  font-size: 14px;
  line-height: 17px;

  text-align: center;

  color: #ffffff;

  ${media.medium`
    line-height: 21px;
    text-align: start;
  `}
`;

const LayoutBlock = styled.div`
  display: flex;
  justify-content: flex-end;

  width: 100%;

  ${media.medium`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  `}
`;
