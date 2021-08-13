import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchMemberAction } from "../Redux/Actions/memberAction";

export default function SearchMember() {
  const dispatch = useDispatch();
  const Search =async (key) => {
    const res =await axios.get(`http://localhost:7000/members/${key}`);
    console.log(res.data);
    dispatch(searchMemberAction(res.data))
  };
  const searchResult = useSelector(state=>state.Members.searchMember)
  const searchResultData = searchResult.map((data)=>(
    <div>{data.name}</div>
  ))
  return (
    <div>
      <input
        type="text"
        onChange={(e) => Search(e.target.value)}
        name="search"
      />
      {searchResultData}
    </div>
  );
}

// import React from 'react';
// import TextField from '@material-ui/core/TextField';
// import Autocomplete from '@material-ui/lab/Autocomplete';

// const option = ['Option 1', 'Option 2','dev'];

// export default function ControllableStates() {
//   const [value, setValue] = React.useState(option[0]);
//   const [inputValue, setInputValue] = React.useState('');

//   return (
//     <div>
//       <div>{`value: ${value !== null ? `'${value}'` : 'null'}`}</div>
//       <div>{`inputValue: '${inputValue}'`}</div>
//       <br />
//       <Autocomplete
//         value={value}
//         onChange={(event, newValue) => {
//           setValue(newValue);
//         }}
//         inputValue={inputValue}
//         onInputChange={(event, newInputValue) => {
//             console.log(newInputValue)
//           setInputValue(newInputValue);
//         }}
//         id="controllable-states-demo"
//         options={option}
//         style={{ width: 300 }}
//         renderInput={(params) => <TextField {...params} label="Controllable" variant="outlined" />}
//       />
//     </div>
//   );
// }
