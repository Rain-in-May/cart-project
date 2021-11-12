# 📍 아트를 담다, C:ART
> 전시회 소개 및 평가 서비스
> 

</br>

## 1. 제작 기간 & 참여 인원
- 2020년 1월 ~ 4월
- 3명

</br>

## 2. 사용 기술
#### `Back-end`
  - Java 8
  - Spring Boot
  - Gradle
  - Spring Data JPA
  - QueryDSL
  - MySQL
  - Spring Security
#### `Front-end`
  - React Hooks
  - nivo

</br>

## 3. ERD 설계
![ERD](https://user-images.githubusercontent.com/94033656/141424672-5d2417a7-d574-43fc-bb11-5b04904c3c24.jpg)


## 4. 기능
서울시립미술관의 전시를 소개하고 유저들끼리 리뷰를 공유할 수 있는 서비스입니다.

<details>
<summary><b>핵심 기능 설명 펼치기</b></summary>
<div markdown="1">

### 4.1. 리뷰 기능
- **리뷰 작성(Axios 요청)** :pushpin: [코드 확인](https://github.com/Rain-in-May/cart-project/blob/main/fe/src/container/review/ReviewForm.js)
  - 리뷰를 등록하는 POST 요청을 비동기로 보냅니다.
- **리뷰 목록(Axios 요청)** :pushpin: [코드 확인](https://github.com/Rain-in-May/cart-project/blob/main/fe/src/container/review/ReviewList.js)
  - 리뷰를 조회하는 GET 요청을 비동기로 보냅니다.
- **리뷰 수정 및 삭제(Axios 요청)** :pushpin: [코드 확인](https://github.com/Rain-in-May/cart-project/blob/main/fe/src/container/review/ReviewDetail.js)
  - 리뷰를 수정 혹은 삭제하는 PUT/DELETE 요청을 비동기로 보냅니다.
- **요청 처리** 
:pushpin: [Controller 코드 확인](https://github.com/Rain-in-May/cart-project/blob/main/be/src/main/java/org/KwonEunbi/api/review/controller/ReviewController.java)
:pushpin: [Service 코드 확인](https://github.com/Rain-in-May/cart-project/blob/main/be/src/main/java/org/KwonEunbi/api/review/service/ReviewServiceImpl.java)
  - Controller에서는 넘어온 요청을 받고, Service에서 로직을 처리합니다.
  
### 4.2. 검색 기능
- **키워드 검색(Axios 요청)** :pushpin: [코드 확인](https://github.com/Rain-in-May/cart-project/blob/main/fe/src/container/exhibition/Listing/SearchListing.js)
  - 검색한 키워드에 해당하는 목록을 가져오는 GET 요청을 비동기로 보냅니다.
- **요청 처리** 
:pushpin: [Controller 코드 확인](https://github.com/Rain-in-May/cart-project/blob/main/be/src/main/java/org/KwonEunbi/api/exhibition/controller/ExhbnController.java)
:pushpin: [Repository 코드 확인](https://github.com/Rain-in-May/cart-project/blob/main/be/src/main/java/org/KwonEunbi/api/exhibition/repository/ExhbnRepositoryImpl.java)
  - Controller에서는 넘어온 요청을 받고, Service에서 로직을 처리합니다.
  - Repository에서 QueryDSL를 사용하여 키워드 검색을 실행합니다.
  
### 4.3. 마이 페이지
- **리뷰 목록(Axios 요청)** :pushpin: [코드 확인](https://github.com/Rain-in-May/cart-project/blob/main/fe/src/container/review/ReviewList.js)
  - 유저의 리뷰 목록을 가져오는 GET 요청을 비동기로 보냅니다.
- **예약 목록(Axios 요청)** :pushpin: [코드 확인](https://github.com/Rain-in-May/cart-project/blob/main/fe/src/container/booking/BookingList.js)
  - 유저의 예약 목록을 가져오는 GET 요청을 비동기로 보냅니다.
- **요청 처리** 
:pushpin: [Controller 코드 확인](https://github.com/Rain-in-May/cart-project/blob/main/be/src/main/java/org/KwonEunbi/api/booking/controller/BookingController.java)
:pushpin: [Service 코드 확인](https://github.com/Rain-in-May/cart-project/blob/main/be/src/main/java/org/KwonEunbi/api/booking/service/BookingServiceImpl.java)
  - Controller에서는 넘어온 요청을 받고, Service에서 로직을 처리합니다.
  
### 4.4. 관리자 페이지
- **전시 등록(Axios 요청)** :pushpin: [코드 확인](https://github.com/Rain-in-May/cart-project/blob/main/fe/src/container/exhibition/AddExhibition.js)
  - 전시를 등록하는 POST 요청을 비동기로 보냅니다.
- **전시관 등록(Axios 요청)** :pushpin: [코드 확인](https://github.com/Rain-in-May/cart-project/blob/main/fe/src/container/hall/AddHall.js)
  - 전시관을 등록하는 POST 요청을 비동기로 보냅니다.
- **요청 처리** 
:pushpin: [Controller 코드 확인](https://github.com/Rain-in-May/cart-project/tree/main/be/src/main/java/org/KwonEunbi/api/hall/controller)
:pushpin: [Service 코드 확인](https://github.com/Rain-in-May/cart-project/blob/main/be/src/main/java/org/KwonEunbi/api/hall/service/HallServiceImpl.java)
  - Controller에서는 넘어온 요청을 받고, Service에서 로직을 처리합니다.
  
</div>
</details>

</br>

## 5. 트러블 슈팅
<details>
<summary> JSON: Infinite recursion (StackOverflowError)</summary>
<div markdown="1">
  - @JsonIgnoreProperties 사용으로 해결        
</div>
</details>  

</br>

## 6. 회고 / 느낀점
>처음으로 진행해보는 프로젝트인 만큼 부족한 부분이 매우 많습니다. 프로젝트를 진행할 당시엔 이 프로젝트가 저의 포트폴리오의 일부가 될 것이라는 자각조차 없이 무작정 개발에만 몰두하였기 때문에 트러블슈팅 기록도 제대로 남기지 못하였습니다. 결과물을 내는 것에 급급하여 주석처리도 하지 않았습니다.(...) 결국 남은 건 코드뿐인 프로젝트가 되어버렸지만 얻은 것도 많았습니다. 마주하는 문제들을 해결하면서 많은 개념을 제대로 이해할 수 있었습니다. 문제를 해결해내는 것이 재밌다는 걸 다시 한번 느끼고 처음 개발자의 길로 들어섰던 때의 마음가짐을 되새길 수 있었습니다. 아쉬운 첫 프로젝트였지만 저의 밑거름이 되었다고 확신합니다.
