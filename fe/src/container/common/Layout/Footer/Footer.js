import React from 'react';
import { Logo, Footer } from 'components/index';
import { FooterMenu } from 'container/index';

const Footers = () => {
  return (
    <Footer
      logo={
        <Logo
          withLink
          linkTo="/"
          src="/images/cartlogo.png"
          title=""
        />
      }
      menu={<FooterMenu />}
      copyright={`Copyright @ ${new Date().getFullYear()} RedQ, Inc.`}
    />
  );
};

export default Footers;
