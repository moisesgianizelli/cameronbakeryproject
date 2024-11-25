import { MainContent } from "./components/MainContent";
import { ExploreTopOptions } from "./components/ExploreTopOptions";
import { Heros } from "./components/Heros";

export const HomePage = () => {
  return (
    <>
      <ExploreTopOptions />
      <MainContent />
      <Heros />
    </>
  );
};
