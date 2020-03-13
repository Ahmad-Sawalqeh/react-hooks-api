/* eslint-disable no-unused-vars */
import React from 'react';
import './pagination.scss';

const Pagination = ({ postsPerPage, totalPosts, paginate ,curent,}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const next = ()=>{
    if(curent + 1 <= pageNumbers.length) paginate(curent + 1);
  };
  const prev = ()=>{
    if(curent - 1 > 0) paginate(curent - 1);

  };

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a onClick={() => paginate(number)} href='!#' className='page-link'>{number}</a>
          </li>
        ))}
      </ul>
      <button onClick={prev} >Previous</button>
      <button onClick={next} className="right">Next</button>
    </nav>
  );
};

export default Pagination;
