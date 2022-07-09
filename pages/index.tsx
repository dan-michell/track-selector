import type { NextPage } from "next";
import Layout from "../components/Layout";
import TextInput from "../components/TextInput";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="flex flex-col w-full items-center">
        <TextInput />
      </div>
    </Layout>
  );
};

export default Home;
