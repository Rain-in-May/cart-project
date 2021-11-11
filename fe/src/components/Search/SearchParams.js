// default data for filter elements
export const priceInit = {
  0: '$0',
  100: '$100',
};

export const calenderItem = {
  separator: '-',
  format: 'MM-DD-YYYY',
  locale: 'en',
};

export const getAmenities = {
  id: 1,
  name: '장르',
  identifier: 'genre',
  options: [
    { label: '회화', value: 'painting-art' },
    { label: '미디어', value: 'media-art' },
    { label: '조각', value: 'sculpture-art' },
    { label: '공예', value: 'craft-art' },
    { label: '설치', value: 'installation-art' },
  ],
};

export const getPropertyType = {
  id: 2,
  name: '전시관',
  identifier: 'property-type',
  options: [
    { label: '서소문본관', value: 'villa' },
    { label: '북서울미술관', value: 'exhibition' },
    { label: '남서울미술관', value: 'resort' },
    { label: '난지미술창작스튜디오', value: 'cottage' },
    { label: 'SeMA창고', value: 'duplex' },
    { label: '백남준기념관', value: 'landscape' },
    { label: 'SeMA벙커', value: 'landscape' },
  ],
};
