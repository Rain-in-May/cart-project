import React, { useContext, Fragment, useState } from 'react';
import { Route, NavLink, Link } from 'react-router-dom';
import isEmpty from 'lodash/isEmpty';
import {
  IoLogoTwitter,
  IoLogoFacebook,
  IoLogoInstagram,
  IoIosAdd,
} from 'react-icons/io';
import { Menu, Popover } from 'antd';
import { Container, Image, Heading, Text, Loader, ProfilePicLoader } from 'components/index';
import { AuthProvider, AuthContext } from 'context/index';
import { UserFavItemLists, ReviewList, UpdateUser, BookingList } from 'container/index';
import useDataApi from 'library/hooks/useDataApi';
import {
  USER_PROFILE_FAVOURITE,
  UPDATE_USER_PAGE,
  REVIEW_LIST_PAGE
} from 'settings/constant';
import AgentDetailsPage, {
  BannerSection,
  UserInfoArea,
  ProfileImage,
  ProfileInformationArea,
  ProfileInformation,
  NavigationArea,
} from 'container/user/MyPage/AccountDetails/UserDetails.style';
import { ButtonBox } from 'container/exhibition/ExhibitionDetail.style';
import { FileAddOutlined } from '@ant-design/icons';
import { FileInput } from 'container/index';
import axios from 'axios';
import { Button } from 'antd';

const ProfileNavigation = (props) => {
  const { match, className } = props;
  const { loggedIn } = useContext(AuthContext);
  return (
    <NavigationArea>
      <Container fluid={true}>
        <Menu className={className}>
          <Menu.Item key="0">
            <NavLink exact to={`${match.url}`}>
              내 예약목록
            </NavLink>
          </Menu.Item>
          <Menu.Item key="1">
            <NavLink to={`${match.url}${USER_PROFILE_FAVOURITE}`}>
              내가 찜한 전시
            </NavLink>
          </Menu.Item>
          <Menu.Item key="2">
            <NavLink to={`${match.url}${REVIEW_LIST_PAGE}`}>
              내가 쓴 리뷰
            </NavLink>
          </Menu.Item>
          <Menu.Item key="3">
            <NavLink to={`${match.url}${UPDATE_USER_PAGE}`}>
              회원정보수정
            </NavLink>
          </Menu.Item>
        </Menu>
      </Container>
    </NavigationArea>
  );
};

const ProfileRoute = (props) => {
  const { match } = props;
  return (
    <Container fluid={true}>
      <Route exact
        path={`${match.path}`}
        component={BookingList}
      />
      <Route
        path={`${match.path}${USER_PROFILE_FAVOURITE}`}
        component={UserFavItemLists}
      />
      <Route
        path={`${match.path}${REVIEW_LIST_PAGE}`}
        component={ReviewList}
      />
      <Route
        path={`${match.path}${UPDATE_USER_PAGE}`}
        component={UpdateUser}
      />
    </Container>
  );
};

const AgentProfileInfo = ({ match }) => {
  const { data, loading } = useDataApi('/data/agent.json');
  const [file, setFile] = useState({ 
		fileName: null, 
		fileURL: null 
	});

  if (isEmpty(data) || loading) return <Loader />;
  const {
    last_name,
    first_name,
    content,
    profile_pic,
    cover_pic,
    social_profile,
  } = data[0];

  const user = JSON.parse(localStorage.getItem("cartuser"))
  const URL = 'http://localhost:8080'
  const onFileChange = (file) => {
		setFile({
      fileName: file.name,
      fileURL: file.url,
    });
  }

  const onImageChange = e => {
    e.preventDefault()
    axios({
      url: URL+'/users/profileImage/'+user.userNum, 
      method: 'put',
      headers: {
        'Content-Type'  : 'application/json',
        'Authorization' : 'Bearer '+localStorage.getItem("token")
      },
      data: { userImage: file.fileURL }
    }) 
    .then(resp => {
      alert(`프로필사진이 수정되었습니다.`)
      getChangeUser()
    })
    .catch(err => {
      alert(`프로필사진 등록 실패`+err)
      throw err;
    })
  }
  const getChangeUser = () => {
    axios({
      url: URL+'/users/'+user.userNum, 
      method: 'get',
      headers: {
        'Content-Type'  : 'application/json',
        'Authorization' : 'Bearer '+localStorage.getItem("token")
      }
    }) 
    .then(resp => {
      localStorage.setItem("cartuser", JSON.stringify(resp.data))
      window.location.reload()
    })
    .catch(err => {
      alert(`프로필사진 등록 실패`+err)
      throw err;
    })
  }
  return (
    <Fragment>
      <BannerSection>
        <Image className="absolute" src={cover_pic.url} alt="Profile cover" />
      </BannerSection>
      <UserInfoArea>
        <Container fluid={true}>
          <ProfileImage>
            {user.userImage ? (
              <Image src={user.userImage} alt="Profile" />
            ) : (
              <Image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEXk5ueutLfn6eqrsbTp6+zg4uOwtrnJzc/j5earsbW0uby4vcDQ09XGyszU19jd3+G/xMamCvwDAAAFLklEQVR4nO2d2bLbIAxAbYE3sDH//7WFbPfexG4MiCAcnWmnrzkjIRaD2jQMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMw5wQkHJczewxZh2lhNK/CBOQo1n0JIT74/H/qMV0Z7GU3aCcVPuEE1XDCtVLAhgtpme7H0s1N1U7QjO0L8F7llzGeh1hEG/8Lo7TUmmuSrOfns9xnGXpXxsONPpA/B6OqqstjC6Ax/0ujkNdYQQbKNi2k64qiiEZ+ohi35X+2YcZw/WujmslYewiAliVYrxgJYrdwUmwXsU+RdApUi83oNIE27YvrfB/ZPg8+BJETXnqh9CVzBbTQHgojgiCvtqU9thFJg/CKz3VIMKMEkIXxIWqIpIg2SkjYj+xC816mrJae2aiWGykxRNsW0UwiJghJDljYI5CD8GRiCtIsJxizYUPQ2pzItZy5pcisTRdk/a9m4amtNNfBuQkdVhSaYqfpNTSFGfb9GRIakrE2Pm+GFLaCQPqiu0OpWP+HMPQQcgQMiQprWXNmsVwIjQjYi/ZrhAqNTCgr2gu0Jnz85RSSjso0HkMFZ0YZjKkc26a/jlmh9JiDyDxi9oeorTYAzZkwwoMz19pzj9bnH/GP/+qbchjSGflneWYhtTuKdMOmNKZcJ5TjInQKcYXnESd/jQxy0ENpULTNGOGgxpap/oyw9pbUAqhfx2Dbkhovvfgz4iUzoM9+GlK6/Mh4q29hyC1mwro30hpVVLPF9wYQr71RazOeM5/cw81iBRD+A03aM9/C/obbrKjbYSpCmIVG3qT/Q8oeUo3Rz0IL7vI1tEbCB9pSiu8I/aV8x3Kg/BGWrWp4ZVs0nZfmAoEG4h/61yHYIJiFSl6Q0Vk6tTW1N8kYp8hdOkfHYYMXd2Qft+8CYwqYDSKvqIh+MCF8Wgca2u/cwdgeW3TtuVn6+1oBs3yLo5C2JpK6CvQzGpfUkz9UG/87gCsi5o2LIXolxN0FbwAsjOLEr+YJmXn7iR6N0BCt5p5cMxm7eAsfS+/CACQf4CTpKjzgkvr2cVarVTf96372yut7XLJ1sa7lv6VcfgYrWaxqr3Wlo1S6pvStr22sxOtTNPLzdY3nj20bPP+ejFdJYkLsjGLdtPBEbe/mr2bQKiXWJDroA+vtzc0p9aahuwqHMDYrQEXHEw9jwQl3drMpts9JBU1SdktPe5FBRdJQ6bwXBpa57ib2A8kukQDzMjh++Uo7Fo6Wd02Pkf4fknqoo4HtvAIjsqUcjx6DIPgWCaOML9rKI/oqD9/lgNrn+eF+p7j8tnzHBiR7+kdUGw/+V1Kzkc75mMy6U+FMaxjPibiM1U1uGM+puInHpmALZCgP4pt7i840MV8+0R1zPsRB6UTcqpizncYwZ89syDydfyWCwXB1l8/zRNGWbTG/GHKUm9AkxHMc/EGSk3z2+ArEhPEV5TUBLEvUGFcjEUH80J/jveTGOAJEljJbILWGQT3zRYiwuKsUXN1EEJAzBhRJFll7mBUG7KD8EqPkKekBREaL8hMDZLQSG6AQjtHPYmvTQnX0TtpC1SYCe2YdkkyLP3jj5BSbKiuR585eQhTgoje6yIb0Yb0C+mV6EYvebqw5SDy2WmubogZiF2AVxPC2FpDf8H2Q9QWo6IkjUxTWVEI3WY/wrCeSuqJ+eRWzXR/JXwgVjUMozbCOfoEZiSiKVGepqv5CJ8RyR4D7xBeamqa7z3BJ/z17JxuBPdv93d/a2Ki878MMAzDMAzDMAzDMAzDMF/KP09VUmxBAiI3AAAAAElFTkSuQmCC" alt="Profile" />
            )}
          </ProfileImage>
          <label for="input-file">
            프로필사진 수정
          </label>
          <FileInput onFileChange={onFileChange} name={file.fileName}/>
          { file.fileURL != null ? <Button onClick={onImageChange}>수정</Button> : <></>}
          <ProfileInformationArea>
            <ProfileInformation>
              <Heading content={`${user.name} 님의 MY PAGE`} />
              <Text content={`${user.name}님! 찜한 전시회를 예약해보세요`} />
            </ProfileInformation>
          </ProfileInformationArea>
        </Container>
      </UserInfoArea>
    </Fragment>
  );
};

const UserDetailsPage = (props) => {
  return (
    <AgentDetailsPage>
      <AuthProvider>
        <AgentProfileInfo />
        <ProfileNavigation {...props} />
        <ProfileRoute {...props} />
      </AuthProvider>
    </AgentDetailsPage>
  );
}


export default UserDetailsPage;