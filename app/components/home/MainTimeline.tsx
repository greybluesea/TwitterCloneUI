import TweetComposer from "./TweetComposer";

type Props = {};

const MainTimeline = (props: Props) => {
  return (
    <div className="flex flex-col w-full h-full min-h-screen">
      <h1
        className={
          "text-xl font-bold p-6 " /* + " sticky top-0 bg-slate-900 " */
        }
      >
        Home
      </h1>
      <TweetComposer />
    </div>
  );
};

export default MainTimeline;
