import React from "react";
import RecruitDetail from "../components/Tuyen-dung/RecruitDetail";
import { useRouter } from "next/dist/client/router";
export default function RecruitmentDetail() {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      <RecruitDetail />
    </div>
  );
}
