import React from 'react';
import styled from 'styled-components';

const PageUl = styled.ul`
  float:left;
  list-style: none;
  text-align: center;
  border-radius:3px;
  color:#827c7c;
  padding:1px;
  border-top:2px solid #263A6C;
  border-bottom:2px solid #263A6C;
  margin-top: 20px;
  margin-left: 270px;
`;

const PageLi = styled.li`
  display:inline-block;
  font-size:14px;
  font-weight:600;
  padding:5px;
  border-radius:5px;
  width:25px;
  &:hover{
    cursor:pointer;
    color:white;
    background-color:#263A6C;
  }
  &:focus::after{
    color:white;
    background-color:#263A6C;
  }
`;

const PageSpan = styled.span`
  width: 3px;
  &:hover::after,
  &:focus::after{
    border-radius:100%;
    color:white;
    background-color:#263A6C;
  }
`;

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <nav>
        <PageUl className="pagination">
          {pageNumbers.map(number => (
            <PageLi key={number} className="page-item">
              <PageSpan onClick={() => paginate(number)} className="page-link">
                {number}
              </PageSpan>
            </PageLi>
          ))}
        </PageUl>
      </nav>
    </div>
  );
};

export default Pagination;