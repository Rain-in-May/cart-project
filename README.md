# ๐ ์ํธ๋ฅผ ๋ด๋ค, C:ART
> ์ ์ํ ์๊ฐ ๋ฐ ํ๊ฐ ์๋น์ค
> 

</br>

## 1. ์ ์ ๊ธฐ๊ฐ & ์ฐธ์ฌ ์ธ์
- 2020๋ 1์ ~ 4์
- 3๋ช

</br>

## 2. ์ฌ์ฉ ๊ธฐ์ 
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

## 3. ERD ์ค๊ณ
![ERD](https://user-images.githubusercontent.com/94033656/141424672-5d2417a7-d574-43fc-bb11-5b04904c3c24.jpg)


## 4. ๊ธฐ๋ฅ
์์ธ์๋ฆฝ๋ฏธ์ ๊ด์ ์ ์๋ฅผ ์๊ฐํ๊ณ  ์ ์ ๋ค๋ผ๋ฆฌ ๋ฆฌ๋ทฐ๋ฅผ ๊ณต์ ํ  ์ ์๋ ์๋น์ค์๋๋ค.

<details>
<summary><b>ํต์ฌ ๊ธฐ๋ฅ ์ค๋ช ํผ์น๊ธฐ</b></summary>
<div markdown="1">

### 4.1. ๋ฆฌ๋ทฐ ๊ธฐ๋ฅ
- **๋ฆฌ๋ทฐ ์์ฑ(Axios ์์ฒญ)** :pushpin: [์ฝ๋ ํ์ธ](https://github.com/Rain-in-May/cart-project/blob/main/fe/src/container/review/ReviewForm.js)
  - ๋ฆฌ๋ทฐ๋ฅผ ๋ฑ๋กํ๋ POST ์์ฒญ์ ๋น๋๊ธฐ๋ก ๋ณด๋๋๋ค.
- **๋ฆฌ๋ทฐ ๋ชฉ๋ก(Axios ์์ฒญ)** :pushpin: [์ฝ๋ ํ์ธ](https://github.com/Rain-in-May/cart-project/blob/main/fe/src/container/review/ReviewList.js)
  - ๋ฆฌ๋ทฐ๋ฅผ ์กฐํํ๋ GET ์์ฒญ์ ๋น๋๊ธฐ๋ก ๋ณด๋๋๋ค.
- **๋ฆฌ๋ทฐ ์์  ๋ฐ ์ญ์ (Axios ์์ฒญ)** :pushpin: [์ฝ๋ ํ์ธ](https://github.com/Rain-in-May/cart-project/blob/main/fe/src/container/review/ReviewDetail.js)
  - ๋ฆฌ๋ทฐ๋ฅผ ์์  ํน์ ์ญ์ ํ๋ PUT/DELETE ์์ฒญ์ ๋น๋๊ธฐ๋ก ๋ณด๋๋๋ค.
- **์์ฒญ ์ฒ๋ฆฌ** 
:pushpin: [Controller ์ฝ๋ ํ์ธ](https://github.com/Rain-in-May/cart-project/blob/main/be/src/main/java/org/KwonEunbi/api/review/controller/ReviewController.java)
:pushpin: [Service ์ฝ๋ ํ์ธ](https://github.com/Rain-in-May/cart-project/blob/main/be/src/main/java/org/KwonEunbi/api/review/service/ReviewServiceImpl.java)
  - Controller์์๋ ๋์ด์จ ์์ฒญ์ ๋ฐ๊ณ , Service์์ ๋ก์ง์ ์ฒ๋ฆฌํฉ๋๋ค.
  
### 4.2. ๊ฒ์ ๊ธฐ๋ฅ
- **ํค์๋ ๊ฒ์(Axios ์์ฒญ)** :pushpin: [์ฝ๋ ํ์ธ](https://github.com/Rain-in-May/cart-project/blob/main/fe/src/container/exhibition/Listing/SearchListing.js)
  - ๊ฒ์ํ ํค์๋์ ํด๋นํ๋ ๋ชฉ๋ก์ ๊ฐ์ ธ์ค๋ GET ์์ฒญ์ ๋น๋๊ธฐ๋ก ๋ณด๋๋๋ค.
- **์์ฒญ ์ฒ๋ฆฌ** 
:pushpin: [Controller ์ฝ๋ ํ์ธ](https://github.com/Rain-in-May/cart-project/blob/main/be/src/main/java/org/KwonEunbi/api/exhibition/controller/ExhbnController.java)
:pushpin: [Repository ์ฝ๋ ํ์ธ](https://github.com/Rain-in-May/cart-project/blob/main/be/src/main/java/org/KwonEunbi/api/exhibition/repository/ExhbnRepositoryImpl.java)
  - Controller์์๋ ๋์ด์จ ์์ฒญ์ ๋ฐ๊ณ , Service์์ ๋ก์ง์ ์ฒ๋ฆฌํฉ๋๋ค.
  - Repository์์ QueryDSL๋ฅผ ์ฌ์ฉํ์ฌ ํค์๋ ๊ฒ์์ ์คํํฉ๋๋ค.
  
### 4.3. ๋ง์ด ํ์ด์ง
- **๋ฆฌ๋ทฐ ๋ชฉ๋ก(Axios ์์ฒญ)** :pushpin: [์ฝ๋ ํ์ธ](https://github.com/Rain-in-May/cart-project/blob/main/fe/src/container/review/ReviewList.js)
  - ์ ์ ์ ๋ฆฌ๋ทฐ ๋ชฉ๋ก์ ๊ฐ์ ธ์ค๋ GET ์์ฒญ์ ๋น๋๊ธฐ๋ก ๋ณด๋๋๋ค.
- **์์ฝ ๋ชฉ๋ก(Axios ์์ฒญ)** :pushpin: [์ฝ๋ ํ์ธ](https://github.com/Rain-in-May/cart-project/blob/main/fe/src/container/booking/BookingList.js)
  - ์ ์ ์ ์์ฝ ๋ชฉ๋ก์ ๊ฐ์ ธ์ค๋ GET ์์ฒญ์ ๋น๋๊ธฐ๋ก ๋ณด๋๋๋ค.
- **์์ฒญ ์ฒ๋ฆฌ** 
:pushpin: [Controller ์ฝ๋ ํ์ธ](https://github.com/Rain-in-May/cart-project/blob/main/be/src/main/java/org/KwonEunbi/api/booking/controller/BookingController.java)
:pushpin: [Service ์ฝ๋ ํ์ธ](https://github.com/Rain-in-May/cart-project/blob/main/be/src/main/java/org/KwonEunbi/api/booking/service/BookingServiceImpl.java)
  - Controller์์๋ ๋์ด์จ ์์ฒญ์ ๋ฐ๊ณ , Service์์ ๋ก์ง์ ์ฒ๋ฆฌํฉ๋๋ค.
  
### 4.4. ๊ด๋ฆฌ์ ํ์ด์ง
- **์ ์ ๋ฑ๋ก(Axios ์์ฒญ)** :pushpin: [์ฝ๋ ํ์ธ](https://github.com/Rain-in-May/cart-project/blob/main/fe/src/container/exhibition/AddExhibition.js)
  - ์ ์๋ฅผ ๋ฑ๋กํ๋ POST ์์ฒญ์ ๋น๋๊ธฐ๋ก ๋ณด๋๋๋ค.
- **์ ์๊ด ๋ฑ๋ก(Axios ์์ฒญ)** :pushpin: [์ฝ๋ ํ์ธ](https://github.com/Rain-in-May/cart-project/blob/main/fe/src/container/hall/AddHall.js)
  - ์ ์๊ด์ ๋ฑ๋กํ๋ POST ์์ฒญ์ ๋น๋๊ธฐ๋ก ๋ณด๋๋๋ค.
- **์์ฒญ ์ฒ๋ฆฌ** 
:pushpin: [Controller ์ฝ๋ ํ์ธ](https://github.com/Rain-in-May/cart-project/tree/main/be/src/main/java/org/KwonEunbi/api/hall/controller)
:pushpin: [Service ์ฝ๋ ํ์ธ](https://github.com/Rain-in-May/cart-project/blob/main/be/src/main/java/org/KwonEunbi/api/hall/service/HallServiceImpl.java)
  - Controller์์๋ ๋์ด์จ ์์ฒญ์ ๋ฐ๊ณ , Service์์ ๋ก์ง์ ์ฒ๋ฆฌํฉ๋๋ค.
  
</div>
</details>

</br>

## 5. ํธ๋ฌ๋ธ ์ํ
<details>
<summary> JSON: Infinite recursion (StackOverflowError)</summary>
<div markdown="1">
  - @JsonIgnoreProperties ์ฌ์ฉ์ผ๋ก ํด๊ฒฐ        
</div>
</details>  

</br>

## 6. ํ๊ณ  / ๋๋์ 
>์ฒ์์ผ๋ก ์งํํด๋ณด๋ ํ๋ก์ ํธ์ธ ๋งํผ ๋ถ์กฑํ ๋ถ๋ถ์ด ๋งค์ฐ ๋ง์ต๋๋ค. ํ๋ก์ ํธ๋ฅผ ์งํํ  ๋น์์ ์ด ํ๋ก์ ํธ๊ฐ ์ ์ ํฌํธํด๋ฆฌ์ค์ ์ผ๋ถ๊ฐ ๋  ๊ฒ์ด๋ผ๋ ์๊ฐ์กฐ์ฐจ ์์ด ๋ฌด์์  ๊ฐ๋ฐ์๋ง ๋ชฐ๋ํ์๊ธฐ ๋๋ฌธ์ ํธ๋ฌ๋ธ์ํ ๊ธฐ๋ก๋ ์ ๋๋ก ๋จ๊ธฐ์ง ๋ชปํ์์ต๋๋ค. ๊ฒฐ๊ณผ๋ฌผ์ ๋ด๋ ๊ฒ์ ๊ธ๊ธํ์ฌ ์ฃผ์์ฒ๋ฆฌ๋ ํ์ง ์์์ต๋๋ค.(...) ๊ฒฐ๊ตญ ๋จ์ ๊ฑด ์ฝ๋๋ฟ์ธ ํ๋ก์ ํธ๊ฐ ๋์ด๋ฒ๋ ธ์ง๋ง ์ป์ ๊ฒ๋ ๋ง์์ต๋๋ค. ๋ง์ฃผํ๋ ๋ฌธ์ ๋ค์ ํด๊ฒฐํ๋ฉด์ ๋ง์ ๊ฐ๋์ ์ ๋๋ก ์ดํดํ  ์ ์์์ต๋๋ค. ๋ฌธ์ ๋ฅผ ํด๊ฒฐํด๋ด๋ ๊ฒ์ด ์ฌ๋ฐ๋ค๋ ๊ฑธ ๋ค์ ํ๋ฒ ๋๋ผ๊ณ  ์ฒ์ ๊ฐ๋ฐ์์ ๊ธธ๋ก ๋ค์ด์ฐ๋ ๋์ ๋ง์๊ฐ์ง์ ๋์๊ธธ ์ ์์์ต๋๋ค. ์์ฌ์ด ์ฒซ ํ๋ก์ ํธ์์ง๋ง ์ ์ ๋ฐ๊ฑฐ๋ฆ์ด ๋์๋ค๊ณ  ํ์ ํฉ๋๋ค.
