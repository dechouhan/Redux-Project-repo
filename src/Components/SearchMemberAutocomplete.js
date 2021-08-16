import axios from 'axios';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
//import './App.css'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { searchMemberAction } from '../Redux/Actions/memberAction';

function SearchMember() {
  const dispatch = useDispatch();

  const searchResult = useSelector(state=>state.Members.searchMember)

  const handleOnSearch =async (string, results) => {
    const res =await axios.get(`http://localhost:7000/members/${string}`);
    dispatch(searchMemberAction(res.data))
  };
  
  const handleOnHover = (result) => {
    // the item hovered
  }

  const handleOnSelect = (item) => {
    // the item selected
  }

  const handleOnFocus = () => {
    // console.log('Focused')
  }

  const formatResult = (item) => {
    return item;
   // return (<p dangerouslySetInnerHTML={{__html: '<strong>'+item+'</strong>'}}></p>); //To format result as html
  }

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ width: 400 }}>
          <ReactSearchAutocomplete
            items={searchResult}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
            formatResult={formatResult}
          />
        </div>
      </header>
    </div>
  )
}

export default SearchMember


