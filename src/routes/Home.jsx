import { useEffect } from "react";
import { Layout } from "../layouts/Layout";
import { Overview } from "../components/Overview";
import checkStore from "../utils/checkStore";

export const Home = () => {
  useEffect(() => {
    checkStore();
  }, []);

  return (
    <Layout>
      <Overview />
    </Layout>
  );
};
