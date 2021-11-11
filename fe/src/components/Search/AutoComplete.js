import React, { useState, useRef } from 'react';
import { compose, withProps } from 'recompose';
import { withScriptjs } from 'react-google-maps';
import StandaloneSearchBox from 'react-google-maps/lib/components/places/StandaloneSearchBox';
import { Input } from 'antd';

const SearchInput = compose(
  withProps({
    loadingElement: <div style={{ height: '100%' }} />,
    containerElement: <div style={{ height: `400px` }} />,
  }),
  withScriptjs
)((props) => {
  const { getInputValue } = props;
  const [ exhbnTitle, setExhbnTitle ] = useState('')
  const handleOnChange = (event) => {
    if (event.which === '13') {
      event.preventDefault();
      event.stopPropagation();
    }
  };
  const refs = useRef({});
  const onPlacesChanged = () => {
    const places = refs.current.getPlaces();
  };

  return (
    <div className="map_autocomplete">
      <StandaloneSearchBox ref={refs} onPlacesChanged={onPlacesChanged}>
        <Input
          type="text"
          defaultValue=""
          placeholder="검색하기"
          size="large"
          onChange={e => {setExhbnTitle(`${ e.target.value }`)}}
        />
      </StandaloneSearchBox>
    </div>
  );
});

const AutoComplete = (props) => {
  const { updateValue } = props;
  return <SearchInput getInputValue={updateValue} />;
};

export default AutoComplete;
