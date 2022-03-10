import { useRouter } from "next/router";

const MultipleNo = () => {
  const router = useRouter();
  const MultipleNo = router.query.Multiple
  return (
    <>
      <h1>Multiple Here {MultipleNo}</h1>
    </>
  );
}

export default MultipleNo;