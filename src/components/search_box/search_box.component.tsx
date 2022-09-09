// import { Component } from "react";
import { ChangeEvent } from "react";
import "./search_box.styles.css"

type SearchBoxProps = {
  className: string;
  required: boolean;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox = ({className, required, onChangeHandler}: SearchBoxProps) => (
  <div>
    <input
    className={`search-box ${className}`}
    type="search"
    required={required}
    onChange={onChangeHandler}
  />
  <span className="span" >Search Monsters</span>
  </div>
);

export default SearchBox