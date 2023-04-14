import React, { useCallback, useState } from "react";
import store from "./store/store";
import { Provider } from "react-redux";
import { EffEx } from "./components/EffEx";
import { StateEx } from "./components/StateEx";
import { RefEx } from "./components/RefEx";
import { RedEx } from "./components/RedEx";
import { DispEx } from "./components/DispEx";
import { MemoEx } from "./components/MemoEx";
import { CallBackEx } from "./components/CallBackEx";

const App: React.FC = () => {
  // const handleItemClick = (item: string) => {
  //   console.log(`You clicked: ${item}`);
  // };

  return (
    <Provider store={store}>
      App
      {/* <StateEx /> */}
      {/* <EffEx /> */}
      {/* <RefEx /> */}
      {/* <RedEx /> */}
      <DispEx />
      {/* <MemoEx name="Ivan" age={73} /> */}
      {/* <CallBackEx items={["item", "book", "apple", "bike"]} /> */}
    </Provider>
  );
};

export default App;
