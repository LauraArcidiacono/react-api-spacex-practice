import React from 'react';
import { Fragment } from 'react/cjs/react.development';

function SearchLaunche() {
//   const [searchKeyword, setSearchKeyword] = useState();
// TODO handel onSubmit y handel onChange
  return (
    <Fragment>
      <h2>Search</h2>
      <form>
        <input
          name="searchLaunch"
          type="text"
          placeholder="Search launch..."
        //   value={searchKeyword}
        //   onChange="handleChange"
        />
        <button type="button">Search Now</button>
      </form>
    </Fragment>
  );
}
export default SearchLaunche;
