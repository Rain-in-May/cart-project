  import React from 'react';
import PropTypes from 'prop-types';
import { Element } from 'react-scroll';
import { Heading, Text } from 'components/index';
import AdditionalWrapper from 'container/common/SinglePage/Additional/Additional.style';

const Additional = ({
  title,
  content,
  contentStyle,
  titleStyle,
}) => {

  return (
    <Element name="additional" className="additional">
      <AdditionalWrapper>
        <div className="graybox">
          <Heading as="h2" content="예매안내" {...titleStyle} />
          <ul>
            <li>상시 예매한 공연 날짜, 회차에 한해 이용가능합니다.</li>
            <li>예매, 환불 및 환불수수료 정책이 상이할 경우 상세페이지에 별도 공지하므로 반드시 상세페이지를 확인 부탁드립니다.</li>
          </ul>
          <br />
          <br />
          <br />
          <Heading as="h2" content="예매취소 안내" {...titleStyle} />
          <table>
            <thead>
              <tr>
                <th>취소일</th><th>취소수수료</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>관람일 10일 전</td><td>없음</td>
              </tr>
              <tr>
                <td>관람일 9일 ~ 1일 전</td><td>티켓 금액의 10%</td>
              </tr>
              <tr>
                <td rowSpan="2">관람 당일<br/>(상품별 상이)</td>
                <td>취소 불가</td>
              </tr>
              <tr>
                <td>티켓 금액의 90%</td>
              </tr>
            </tbody>
          </table>
          <br />
          <ul>
            <li>마이페이지 {'>'} 예매/취소내역에서 직접 취소 또는 고객센터를 통해서 예매를 취소할 수 있습니다.</li>
            <li>티켓이 배송된 이후에는 인터넷 취소가 불가하며, 취소마감 시간 이전에 티켓이 반송 완료되어야 취소가 가능합니다.</li>
            <li>취소수수료는 반송 티켓의 도착일자 기준으로 부과됩니다. 배송료는 환불되지 않습니다.</li>
          </ul>
          <br />
          <br />
          <br />
          <Heading as="h2" content="환불안내" {...titleStyle} />
          <strong>신용카드</strong>
          <ul>
            <li>취소요청 후 4~5일 후 카드사의 취소가 확인됩니다. (체크카드 동일)</li>
            <li>해당 카드사의 환불 기준에 따라 취소금액의 환급방법과 환급일은 차이가 있을 수 있습니다.</li>
            <li>최초 결제하셨던 동일카드로 취소 시점에 따라 취소수수료를 재승인 합니다.</li>
          </ul>
          <br />
          <strong>무통장(가상계좌입금)</strong>
          <ul>
            <li>취소요청 후 5~7일이 소요되며, 취소수수료를 제외한 금액이 환불됩니다.</li>
            <li>환불은 반드시 예매자 본인 명의의 계좌로만 받으실 수 있습니다.</li>
          </ul>
          <br />
          <br />
          <br />
          <Heading as="h2" content="티켓수령 안내" {...titleStyle} />
          <strong>예약 번호 입장</strong>
          <ul>
            <li>공연 당일 현장 교부처에서 예약번호 및 본인 확인 후 티켓을 수령하실 수 있습니다.</li>
            <li>현장 교부처가 매우 혼잡하오니 공연 30분 전에 티켓을 수령해주시기 바랍니다.</li>
          </ul>
          <br />
          <strong>우편 배송</strong>
          <ul>
            <li>예매완료(결제익일) 기준 4~5일 이내에 배송됩니다. (주말, 공휴일을 제외한 영업일 기준)</li>
            <li>배송 중 전달 불가사항이 발생할 시에는 반송되며, 본인 수령 불가 시 경우에 따라 대리 수령도 가능합니다.</li>
            <li>공연 3일 전까지 티켓을 배송받지 못 하신 경우 고객센터로 연락 주시기 바랍니다.</li>
            <li>반송이 확인되지 않은 티켓은 현장에서도 수령하실 수 없으며, 공연 관람 및 환불이 불가합니다.</li>
          </ul>
          <br />
          <br />
          <br />
        </div>
      </AdditionalWrapper>
    </Element>
  );
};

Additional.propTypes = {
  titleStyle: PropTypes.object,
  contentStyle: PropTypes.object,
};

Additional.defaultProps = {
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

export default Additional;