import { useEffect } from "react";
import { useRouter } from "next/router";

const Page = () => {
  const { push } = useRouter();

  useEffect(() => {
    push("/product-list");
  }, [push]);

  return null;
};
export default Page;
