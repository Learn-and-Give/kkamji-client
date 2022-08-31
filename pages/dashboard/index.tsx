import { useQuery } from "@tanstack/react-query";
import React from "react";
import api from "../../api/my-api";
import ChallengeList from "../../components/challenges/challenge-list";
import { Challenge } from "../../types/Challenge";

function Dashboard() {
  const { data: myChallenges } = useQuery<Challenge[]>(
    ["myChallenges"],
    async () => {
      const { data } = await api.get("/my/challenges");
      return data;
    }
  );

  return (
    <div className="flex flex-col gap-10 w-2/3 m-auto py-10">
      <div className="text-2xl">내 챌린지</div>
      {myChallenges && <ChallengeList challenges={myChallenges} />}
    </div>
  );
}

export default Dashboard;