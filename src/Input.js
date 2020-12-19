import React, { useContext } from "react";
import { UnitsContext } from "./UnitConverter/context";
import units from "./UnitConverter/units";
import types from "./UnitConverter/types";
import "./Input.scss";

export const Input = () => {
  const {
    unitType,
    setUnitType,
    inputUnit,
    setInputUnit,
    inputValue,
    setInputValue
  } = useContext(UnitsContext);

  return (
    <div>
      <select
        value={unitType}
        onChange={e => setUnitType(e.target.value)}
        className="typeSelect"
      >
        {types.map(option => (
          <option value={option}>{option}</option>
        ))}
      </select>

      <div className="input">
        <input
          value={inputValue}
          type="number"
          onChange={e => setInputValue(e.target.value)}
        />
      </div>

      <div className="selectBox">
        <select
          value={inputUnit}
          onChange={e => setInputUnit(e.target.value)}
          className="unitSelect"
        >
          {units[unitType].map(option => (
            <option value={option.name}>{option.name}</option>
          ))}
        </select>
      </div>
    </div>
  );
};
