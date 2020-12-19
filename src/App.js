import React from "react";
import { UnitsConverter } from "./UnitConverter/UnitConverter";
import { Input } from "./Input";
import { Output } from "./Output";
import "./App.scss";

const App = () => (
  <UnitsConverter>
    <Input />
    <Output />
  </UnitsConverter>
);

export default App;
