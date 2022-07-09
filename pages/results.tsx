import React from "react";
import { useRouter } from "next/router";

type Props = {};

const Results = (props: Props) => {
  const router = useRouter();
  const { searchValue } = router.query;

  return <div>{searchValue}</div>;
};

export default Results;
