import React from "react";
import Diaries from "./components/Diaries";
import AddDiary from "./components/AddDiary";

const App: React.FC = () => {
  return (
    <>
      <div>
        <Diaries />
        <AddDiary />
      </div>
    </>
  );
};

export default App;
