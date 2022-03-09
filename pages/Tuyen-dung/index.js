import React from "react";
import Recruit from "../components/Tuyen-dung/Recruit";
import { useRouter } from "next/dist/client/router";
export default function index() {
  const router = useRouter();
  const handleDetail = () => {
    router.push({ pathname: `/Tuyen-dung/detail` });
  };
  return (
    <div>
      <Recruit handleDetail={handleDetail} />
    </div>
  );
}
