import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import dataStore from "../data/stores.json";
import Product from "./Product";

const RightContent = ({ show }) => {
  const { pathname } = useLocation();
  const id = pathname.split("-")[1];
  /* Sort */
  const [sortShow, setSortShow] = useState(false);
  const [sortValue, setSortValue] = useState("");
  const sortOptions = ["name", "price"];
  /* Checkbox */
  const [checked, setChecked] = useState();
  const [checkboxValue, setCheckboxValue] = useState("");
  const toppings = [
    "Milk Foam",
    "White pearl",
    "Cheese choco",
    "Vera",
    "Peach",
    "Pearl",
  ];

  const handleSortShow = () => {
    setSortShow(!sortShow);
  };

  const handleSort = (e) => {
    setSortValue(e.target.value);
  };

  const handleCheckbox = (e) => {
    console.log(e.target.value);
    setCheckboxValue(e.target.value);
  };

  return (
    <>
      {show && (
        <div className="rightContent">
          <div className="title">
            {dataStore.stores
              .filter((store) => store.id === parseInt(id))
              .map((store) => (
                <h3 key={store.id}>{store.name}</h3>
              ))}
          </div>
          <div className="sort container">
            <div className="filter">
              <button onClick={handleSortShow}>Filter</button>
            </div>
            <div className="sortName">
              <label htmlFor="sort">Sort By</label>
              <select name="toppings" id="sort" onChange={handleSort}>
                <option>Select Value</option>
                {sortOptions.map((option, index) => (
                  <option value={option} key={index}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {sortShow && (
            <div className="toppings container">
              <h4>Toppings:</h4>
              <div className="toppingsCheck">
                {toppings.map((topping, index) => (
                  <div key={index} className="singgleToppingCheck">
                    <input
                      type="checkbox"
                      checked={checked === index}
                      onClick={() => setChecked(index)}
                      value={topping}
                      onChange={handleCheckbox}
                    />
                    <label>{topping}</label>
                  </div>
                ))}
              </div>
            </div>
          )}
          <div className="products container">
            <Product checkboxValue={checkboxValue} sortValue={sortValue} />
          </div>
        </div>
      )}
    </>
  );
};

export default RightContent;
