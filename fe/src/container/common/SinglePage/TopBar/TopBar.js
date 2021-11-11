import React from 'react';
import Sticky from 'react-stickynode';
import { ScrollBar } from 'components/index';
import { TobBarWrapper } from 'container/exhibition/ExhibitionDetail.style';

const topBarMenu = [
  {
    name: '작품소개',
    target: 'overview',
  },
  {
    name: '이용정보',
    target: 'notice',
  },
  {
    name: '이용후기',
    target: 'reviews',
  },
  {
    name: '부가정보',
    target: 'additional',
  },
];

const TopBar = () => {
  return (
    <TobBarWrapper>
      <Sticky innerZ={9998} top={80} activeClass="isSticky">
        <ScrollBar
          menu={topBarMenu}
        />
      </Sticky>
    </TobBarWrapper>
  );
};

export default TopBar;