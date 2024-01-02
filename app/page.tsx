import Feed from "@components/Feed";
const Home = () => {
  return (
    <section className="w1-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center"> AI Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Smart Prompt is an AI Powered prompting tool for modern world.
      </p>
      <Feed />
    </section>
  );
};

export default Home;
