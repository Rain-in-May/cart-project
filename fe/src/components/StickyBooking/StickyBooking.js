import React from 'react';
import useWindowSize from 'components/StickyBooking/useWindowSize';
import StickyBookingWrapper, {
  ExhibitionInfo,
  InfoArea,
  Title,
  Logo,
  ExhibitionAction,
  Price,
  ActionBtn,
  ExhibitionRating,
} from 'components/StickyBooking/StickyBooking.style';

const StickyBooking = ({ logo, title, price, rating, action, className }) => {
  const addAllClasses = ['sticky_booking'];
  const windowSize = useWindowSize();
  const windowInnerWidth = process.browser && windowSize.innerWidth;

  if (className) {
    addAllClasses.push(className);
  }

  return (
    <StickyBookingWrapper className={addAllClasses.join(' ')}>
      <ExhibitionInfo className="exhibition_info">
        {windowInnerWidth > 767 && (
          <>{logo && <Logo src={logo} alt={title} />}</>
        )}

        {title || rating || price ? (
          <InfoArea>
            {windowInnerWidth > 767 ? (
              <>{title && <Title>{title}</Title>}</>
            ) : (
              <Price>
                <span>{price}</span> / 1매
              </Price>
            )}
            {rating && <ExhibitionRating>{rating}</ExhibitionRating>}
          </InfoArea>
        ) : (
          ''
        )}
      </ExhibitionInfo>

      <ExhibitionAction className="exhibition_action">
        {windowInnerWidth > 767 && (
          <Price>
            <span>{price}</span> / 1매
          </Price>
        )}
        <ActionBtn>{action}</ActionBtn>
      </ExhibitionAction>
    </StickyBookingWrapper>
  );
};

export default StickyBooking;
