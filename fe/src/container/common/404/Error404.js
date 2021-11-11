import React from 'react';
import {Image, Heading, TextLink} from 'components/index'
import NotFoundWrapper, { ContentWrapper } from 'container/common/404/404.style';

const NotFoundPage = ({ staticContext = {} }) => {
  staticContext.status = 404;
  return (
    <NotFoundWrapper>
      <ContentWrapper>
        <Image src="/images/404@2x.png" alt="404" />
        <Heading as="h2" content="Something Went Wrong" />
        <TextLink link="/" content="Go Back" />
      </ContentWrapper>
    </NotFoundWrapper>
  );
};

export default NotFoundPage;
