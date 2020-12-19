import React, { useContext } from "react";
import { UnitsContext } from "./UnitConverter/context";
import units from "./UnitConverter/units";
import "./Output.scss";

export const Output = () => {
  const { unitType, inputUnit, inputValue } = useContext(UnitsContext);
  const unitSelectType = units[unitType];
  const selectedUnit = unitSelectType.filter(unit => {
    if (typeof inputUnit === "string") {
      return unit.name === inputUnit;
    }
    return unit.name === inputUnit.name;
  });
  const baseValue = selectedUnit[0].toBase(inputValue);
  const result = unitSelectType.map(unit => (
    <li
      className={
        inputUnit.name === unit.name || inputUnit === unit.name
          ? "currentUnit"
          : ""
      }
    >
      {Math.round(unit.fromBase(baseValue) * 100) / 100} {unit.name}
    </li>
  ));

  return (
    <div className="selectType">
      <ul>{result}</ul>
    </div>
  );
};
