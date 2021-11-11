import React from 'react';
import PropTypes from 'prop-types';
import { Heading, Text, Container, GlideCarousel, GlideSlide } from 'components/index';
import { SearchForm } from 'container/index';
import BannerWrapper, { SearchWrapper } from 'container/common/Search/Search.style';

const SearchArea = ({ searchTitleStyle, searchDescriptionStyle }) => {
  return (
    <BannerWrapper>
      <GlideCarousel
        controls={false}
        options={{ gap: 0, autoplay: 5000, animationDuration: 1000 }}
        bullets={true}
        numberOfBullets={3}
      >
        <>
          <GlideSlide>
            <img src="/images/banner/1.jpg" alt="Banner 1" />
          </GlideSlide>
          <GlideSlide>
            <img src="/images/banner/2.jpg" alt="Banner 2" />
          </GlideSlide>
          <GlideSlide>
            <img src="/images/banner/3.jpg" alt="Banner 3" />
          </GlideSlide>
        </>
      </GlideCarousel>

      <Container>
        <SearchWrapper>
          <Heading
            {...searchTitleStyle}
            content="C:ART  | Seoul Museum of Art"
          />
          <Text
            {...searchDescriptionStyle}
            content="회화부터 미디어까지, 서울시립미술관(SeMA)의 다양한 전시들을 검색해보세요!"
          />
          <SearchForm />
        </SearchWrapper>
      </Container>
    </BannerWrapper>
  );
};

SearchArea.propTypes = {
  searchTitleStyle: PropTypes.object,
  searchDescriptionStyle: PropTypes.object,
};

SearchArea.defaultProps = {
  searchTitleStyle: {
    color: '#2C2C2C',
    fontSize: ['20px', '24px', '28px'],
    lineHeight: ['28px', '30px', '30px'],
    mb: '9px',
  },
  searchDescriptionStyle: {
    color: '#2C2C2C',
    fontSize: '15px',
    lineHeight: '24px',
    mb: '30px',
  },
};

export { SearchArea };
export default SearchArea;
