import React, { useState } from 'react';

const ImageSearch = ({ searchText }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  }

  const handleChange = (e) => {
    setText(e.target.value);
  }

  return (
    <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
      <form action="" className="w-full max-w-sm" onSubmit={handleSubmit}>
        <div className="flex items-center border-b border-b-2 border-teal-500 py-2">
          <input type="text" className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" placeholder="Search for something awesome here" onChange={handleChange} />
          <button type="submit" className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded">
            Search
          </button>
        </div>
      </form>
    </div>
  )
}

export default ImageSearch;