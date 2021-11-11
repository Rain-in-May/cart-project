import React from 'react';
import PropTypes from 'prop-types';
import { Element } from 'react-scroll';
import { Heading, Text } from 'components/index';
import NoticeWrapper from 'container/common/SinglePage/Notice/Notice.style';

const Notice = ({
  title,
  content,
  contentStyle,
  titleStyle,
}) => {
  
  return (
    <Element name="notice" className="notice">
      <NoticeWrapper>
        <Heading as="h2" content="공지사항" {...titleStyle} />
        <Text content="[코로나19 관련 전시장 관람객 이용 절차]" {...contentStyle} />
        <br />
        <Text content="- 입장 시 QR코드 확인을 진행하고 있습니다." {...contentStyle} />
        <br />
        <Text content="&emsp;1) 카카오톡 로그인 후 QR코드를 발급하세요." {...contentStyle} />
        <Text content="&emsp;&emsp;① 카카오톡 앱 실행 ② 정보제공 동의 ③ 최초 휴대폰 인증 ④ QR코드 발급" {...contentStyle} />
        <Text content="&emsp;2) QR코드를 직원에게 보여주세요 (QR코드는 1회용으로 발급되며, 입장 시 15초만 효력)" {...contentStyle} />
        <br />
        <Text content="- 전시장 입장 시 반드시 마스크를 착용해주십시오.(미착용 시 입장 불가)" {...contentStyle} />
        <br />
        <Text content="- 안전한 전시 관람을 위하여 전시장 내부 최대 인원을 제한하고 있습니다." {...contentStyle} />
        <Text content="&nbsp;&nbsp;&nbsp;이에 티켓 발권 시 번호표를 배부하고 순차적으로 입장 안내드리고 있습니다." {...contentStyle} />
        <br />
        <Text content="- 단체 관람 시, 내부에 인원이 많을 경우 한 번에 입장이 불가 할 수 있습니다." {...contentStyle} />
      </NoticeWrapper>
    </Element>
  );
};

Notice.propTypes = {
  titleStyle: PropTypes.object,
  contentStyle: PropTypes.object,
};

Notice.defaultProps = {
  titleStyle: {
    color: '#2C2C2C',
    fontSize: '23px',
    lineHeight: ['1.15', '1.2', '1.36'],
    mb: '4px',
    padding: '60px 0px 30px',
  },
  contentStyle: {
    fontSize: '14px',
    fontWeight: '400',
    color: '#2C2C2C',
    lineHeight: '1.6',
  },
};

export default Notice;