import React from "react";
import "./App.css";
import { Avatar, Tab } from "@mui/material";
import { Twitter } from "@mui/icons-material";
import TabPanel from "./components/Tabs/Tabs";

export type Props = {
  text: string;
};

const App: React.VFC<Props> = (props) => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Tab />
        <Avatar />
        <Twitter />
        <TabPanel />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
