// import { Component } from "react";
import "./search_box.styles.css"


const SearchBox = ({className, required, onChangeHandler}) => (
  <div>
    <input
    className={`search-box ${className}`}
    type="search"
    required={required}
    // placeholder={placeholder}
    onChange={onChangeHandler}
  />
  <span className="span" >Search Monsters</span>
  </div>
);


/*
class SearchBox extends Component {
    render() {
        return (
              <div>
                <input
                className={`search-box ${this.props.className}`}
                type="search"
                required={this.props.required}
                // placeholder={this.props.placeholder}
                onChange={this.props.onChangeHandler}
              />
              <span className="span" >Search Monsters</span>
              </div>
          );
    }
}
*/

export default SearchBox