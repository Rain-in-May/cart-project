package org.KwonEunbi.api.review.domain;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.ArrayList;
import java.util.List;

public class CrawlerTest {
    /*
    public static void main(String[] args) {
        String FILE_PATH = "C:\\Users\\User\\WonyoungCode\\finalProject\\be\\src\\main\\resources\\";
        WebDriverManager.chromedriver().setup();
        ChromeDriver driver = new ChromeDriver();
        driver.get("http://www.google.com");
        String reviewURL = "https://search.naver.com/";
        List<Reviewer> reviews = new ArrayList<>();
        Crawler crawler = new Crawler();

        crawler.placeAutoUrl(reviews, driver,reviewURL+"search.naver?where=nexearch&sm=tab_etc&mra=bjBC&pkid=360&os=14449717&qvt=0&query=팀랩%3A%20라이프%20(teamLab%3A%20LIFE)%20평점","1"); //팀랩
        crawler.placeAutoUrl(reviews, driver,reviewURL+"search.naver?where=nexearch&sm=tab_etc&mra=bjBC&pkid=360&os=16084077&qvt=0&query=앙리%20마티스%20탄생%20150주년%20기념%20<마티스%20특별전%20%3A%20재즈와%20연극>%20평점","2");      //앙리마티스
        crawler.placeAutoUrl(reviews, driver,reviewURL+"search.naver?where=nexearch&sm=tab_etc&mra=bjBC&pkid=360&os=16918427&qvt=0&query=신의%20예술가%2C%20미켈란젤로%20특별전%20평점","3"); //신의 예술가, 미켈란젤로 특별전 평점
        crawler.placeAutoUrl(reviews, driver,reviewURL+"search.naver?where=nexearch&sm=tab_etc&mra=bjBC&pkid=360&os=16938253&qvt=0&query=무민%20오리지널%20%3A%20무민%2075주년%20특별%20원화전%20평점","4");      //무민 오리지널 : 무민 75주년 특별 원화전
        crawler.placeAutoUrl(reviews, driver,reviewURL+"search.naver?where=nexearch&sm=tab_etc&mra=bjBC&pkid=360&os=16889135&qvt=0&query=추상을%20말해요%2C%20칸딘스키%20평점","5");    //추상을 말해요, 칸딘스키 평점
        crawler.placeAutoUrl(reviews, driver,reviewURL+"search.naver?where=nexearch&sm=tab_etc&mra=bjBC&pkid=360&os=6231399&qvt=0&query=모네%20향기를%20만나다%20평점","6");      //모네 향기를 만나다 평점
        crawler.placeAutoUrl(reviews, driver,reviewURL+"search.naver?where=nexearch&sm=tab_etc&mra=bjBC&pkid=360&os=17979315&qvt=0&query=여행갈까요%20평점","7"); //여행갈까요 평점
        crawler.placeAutoUrl(reviews, driver,reviewURL+"search.naver?where=nexearch&sm=tab_etc&mra=bjBC&pkid=360&os=14334447&qvt=0&query=유미의%20세포들%20특별전%20평점","8");      //유미의 세포들 특별전 평점
        crawler.placeAutoUrl(reviews, driver,reviewURL+"search.naver?where=nexearch&sm=tab_etc&mra=bjBC&pkid=360&os=16934373&qvt=0&query=라스트%20북스토어%20평점","9");       //라스트 북스토어
    	crawler.placeAutoUrl(reviews, driver,reviewURL+"search.naver?where=nexearch&sm=tab_etc&mra=bjBC&pkid=360&os=16968052&qvt=0&query=뮤지엄%20오브%20컬러%20평점","10");     //뮤지엄 오브 컬러 평점
        crawler.placeAutoUrl(reviews, driver,reviewURL+"search.naver?where=nexearch&sm=tab_etc&mra=bjBC&pkid=360&os=14337045&qvt=0&query=수퍼%20네이처%20평점","11");      //수퍼 네이처 평점
        crawler.placeAutoUrl(reviews, driver,reviewURL+"search.naver?where=nexearch&sm=tab_etc&mra=bjBC&pkid=360&os=14447334&qvt=0&query=파랑새%20평점","12");     //파랑새
        crawler.placeAutoUrl(reviews, driver,reviewURL+"search.naver?where=nexearch&sm=tab_etc&mra=bjBC&pkid=360&os=17939172&qvt=0&query=도톨%20%3A%20눈부신%20계절%20따스한%20순간%20평점","13");      //도톨 : 눈부신 계절 따스한 순간 평점
    	crawler.placeAutoUrl(reviews, driver,reviewURL+"search.naver?where=nexearch&sm=tab_etc&mra=bjBC&pkid=360&os=17961174&qvt=0&query=신경균%20%3A%20Moonlight%20평점","14");   //신경균 : Moonlight 평점
        crawler.placeAutoUrl(reviews, driver,reviewURL+"search.naver?where=nexearch&sm=tab_etc&mra=bjBC&pkid=360&os=17933969&qvt=0&query=필립%20콜버트%20%3A%20넥스트%20아트%20팝%20아트와%20미디어%20아트로의%20예술여행%20평점","15");      //필립 콜버트 : 넥스트 아트 팝 아트와 미디어 아트로의 예술여행 평점
        crawler.placeAutoUrl(reviews, driver,reviewURL+"search.naver?where=nexearch&sm=tab_etc&mra=bjBC&pkid=360&os=17927804&qvt=0&query=STREET%20NOISE%20평점","16");     //STREET NOISE 평점
        crawler.placeAutoUrl(reviews, driver,reviewURL+"search.naver?where=nexearch&sm=tab_etc&mra=bjBC&pkid=360&os=17784552&qvt=0&query=헤르난%20바스%20%3A%20모험%2C%20나의%20선택%20평점","17");      //헤르난 바스 : 모험, 나의 선택 평점
    	crawler.placeAutoUrl(reviews, driver,reviewURL+"search.naver?where=nexearch&sm=tab_etc&mra=bjBC&pkid=360&os=17170563&qvt=0&query=아세안%20거리음식%20%3A%20호로록%20찹찹%20오물오물%20평점","18");     //아세안 거리음식 : 호로록 찹찹 오물오물
        crawler.placeAutoUrl(reviews, driver,reviewURL+"search.naver?where=nexearch&sm=tab_etc&mra=bjBC&pkid=360&os=18090901&qvt=0&query=하정우%20%3A%20At%20Home%20평점","19");   //하정우 : At Home 평점
        crawler.placeAutoUrl(reviews, driver,reviewURL+"search.naver?where=nexearch&sm=tab_etc&mra=bjBC&pkid=360&os=17718248&qvt=0&query=ANDY%20WARHOL%20%3A%20BEGINNING%20SEOUL%20평점","20");      //ANDY WARHOL : BEGINNING SEOUL 평점
        crawler.placeAutoUrl(reviews, driver,reviewURL+"search.naver?where=nexearch&sm=tab_etc&mra=bjBC&pkid=360&os=16985509&qvt=0&query=2021%20딜라이트%20서울%20평점","21");      //2021 딜라이트 서울 평점
        crawler.placeAutoUrl(reviews, driver,reviewURL+"search.naver?where=nexearch&sm=tab_etc&mra=bjBC&pkid=360&os=16968052&qvt=0&query=뮤지엄%20오브%20컬러%20평점","22");     //뮤지엄 오브 컬러 평점
        crawler.placeAutoUrl(reviews, driver,reviewURL+"search.naver?where=nexearch&sm=tab_etc&mra=bjBC&pkid=360&os=16934373&qvt=0&query=라스트%20북스토어%20평점","23");     //라스트 북스토어 평점
        crawler.placeAutoUrl(reviews, driver,reviewURL+"search.naver?where=nexearch&sm=tab_etc&mra=bjBC&pkid=360&os=14405323&qvt=0&query=유에민쥔(岳敏君)%20한%20시대를%20웃다!%20평점","25"); //유에민쥔(岳敏君) 한 시대를 웃다! 평점
        crawler.placeAutoUrl(reviews, driver,reviewURL+"search.naver?where=nexearch&sm=tab_etc&mra=bjBC&pkid=360&os=14381336&qvt=0&query=스위트%20팝%20평점","25");    //스위트 팝 평점
        crawler.placeAutoUrl(reviews, driver,reviewURL+"search.naver?where=nexearch&sm=tab_etc&mra=bjBC&pkid=360&os=17743282&qvt=0&query=비너스의%20진화%20평점","26");     //비너스의진화
        crawler.placeAutoUrl(reviews, driver,reviewURL+"search.naver?where=nexearch&sm=tab_etc&mra=bjBC&pkid=360&os=16928211&qvt=0&query=아이뮤지엄%20디지털명화%20%5B색채의%20마술사%20%3A%20앙리%20마티스%5D%20평점","27");     //아이뮤지엄 디지털명화 [색채의 마술사 : 앙리 마티스] 평점
        crawler.placeAutoUrl(reviews, driver,reviewURL+"search.naver?where=nexearch&sm=tab_etc&mra=bjBC&pkid=360&os=16970769&qvt=0&query=아이뮤지엄%20디지털전시%20<미디어%20포레스트>%20-%20여수%20평점","28");   //아이뮤지엄 디지털전시 <미디어 포레스트> - 여수 평점
        crawler.placeAutoUrl(reviews, driver,reviewURL+"search.naver?where=nexearch&sm=tab_etc&mra=bjBC&pkid=360&os=18058567&qvt=0&query=거울%20속의%20거울%20평점","29");      //거울 속의 거울 평점
        crawler.placeAutoUrl(reviews, driver,reviewURL+"search.naver?where=nexearch&sm=tab_etc&mra=bjBC&pkid=360&os=16936963&qvt=0&query=오프라인%20웹툰체험관%20평점","30");     //오프라인 웹툰체험관 평점
        crawler.placeAutoUrl(reviews, driver,reviewURL+"search.naver?where=nexearch&sm=tab_etc&mra=bjBC&pkid=360&os=14285241&qvt=0&query=이영란의%20감성체험%20가루나무모래흙%20서울%20평점","31");     //이영란의 감성체험 가루나무모래흙 서울 평점
        crawler.placeAutoUrl(reviews, driver,reviewURL+"search.naver?where=nexearch&sm=tab_etc&mra=bjBC&pkid=360&os=14287003&qvt=0&query=아이뮤지엄%20%5B로즈페탈%5D%20평점","32");      //아이뮤지엄 [로즈페탈] 평점
        crawler.placeAutoUrl(reviews, driver,reviewURL+"search.naver?where=nexearch&sm=tab_etc&mra=bjBC&pkid=360&os=9832872&qvt=0&query=헬로우%2C심쿵(hello%2C심쿵)展%20평점","33");     //헬로우,심쿵(hello,심쿵)展 평점
        crawler.placeAutoUrl(reviews, driver,reviewURL+"search.naver?where=nexearch&sm=tab_etc&mra=bjBC&pkid=360&os=14451387&qvt=0&query=뮤지엄%20오브%20일루전%20평점","34");      //뮤지엄 오브 일루전 평점
        crawler.placeAutoUrl(reviews, driver,reviewURL+"search.naver?where=nexearch&sm=tab_etc&mra=bjBC&pkid=360&os=14071658&qvt=0&query=빽투더래옹%20평점","35");     //빽투더래옹 평점
        crawler.placeAutoUrl(reviews, driver,reviewURL+"search.naver?where=nexearch&sm=tab_etc&mra=bjBC&pkid=360&os=8231998&qvt=0&query=푸룻푸룻동성로%20%3A%20푸룻토피아%20평점","36");     //푸룻푸룻동성로 : 푸룻토피아 평점
        crawler.placeAutoUrl(reviews, driver,reviewURL+"search.naver?where=nexearch&sm=tab_etc&mra=bjBC&pkid=360&os=13984115&qvt=0&query=그대%2C%20나의%20뮤즈%20%3A%20반%20고흐%20to%20마티스%20평점","37");     //그대, 나의 뮤즈 : 반 고흐 to 마티스 평점
        crawler.placeAutoUrl(reviews, driver,reviewURL+"search.naver?where=nexearch&sm=tab_etc&mra=bjBC&pkid=360&os=18101312&qvt=0&query=최랄라%20%3A%20FEEL%20LOST%20평점","38");     //최랄라 : FEEL LOST 평점
        crawler.placeAutoUrl(reviews, driver,reviewURL+"search.naver?where=nexearch&sm=tab_etc&mra=bjBC&pkid=360&os=18090905&qvt=0&query=봄의%20윤무%20Reigen%20평점","39");     //봄의 윤무 Reigen 평점
    	crawler.placeAutoUrl(reviews, driver,reviewURL+"search.naver?where=nexearch&sm=tab_etc&mra=bjBC&pkid=360&os=18088161&qvt=0&query=아르코예술극장%20개관%2040주년%20기념%20전시%20<없는%20극장>%20평점","40");   //아르코예술극장 개관 40주년 기념 전시 <없는 극장> 평점
        crawler.placeAutoUrl(reviews, driver,reviewURL+"search.naver?where=nexearch&sm=tab_etc&mra=bjBC&pkid=360&os=17559630&qvt=0&query=그대%2C%20나의%20뮤즈%20평점","41");     //그대, 나의 뮤즈 평점
    	crawler.placeAutoUrl(reviews, driver,reviewURL+"search.naver?where=nexearch&sm=tab_etc&mra=bjBC&pkid=360&os=14381168&qvt=0&query=미니언즈%20제주%20특별전%20평점","42");      //미니언즈 제주 특별전 평점
        crawler.placeAutoUrl(reviews, driver,reviewURL+"search.naver?where=nexearch&sm=tab_etc&mra=bjBC&pkid=360&os=18059025&qvt=0&query=The%20Secret%20Life%20평점","43");      //The Secret Life 평점
        crawler.placeAutoUrl(reviews, driver,reviewURL+"search.naver?where=nexearch&sm=tab_etc&mra=bjBC&pkid=360&os=18009395&qvt=0&query=박종규%20%3A%20~Kreuzen%20평점","44");      //박종규 : ~Kreuzen 평점
        crawler.placeAutoUrl(reviews, driver,reviewURL+"search.naver?where=nexearch&sm=tab_etc&mra=bjBC&pkid=360&os=16127540&qvt=0&query=Koo%20Jeong%20A%20%3A%202020%20평점","45");    //Koo Jeong A : 2020 평점
        crawler.placeAutoUrl(reviews, driver,reviewURL+"search.naver?where=nexearch&sm=tab_etc&mra=bjBC&pkid=360&os=13986378&qvt=0&query=신데렐라%20유니버스%20평점","46");      //신데렐라 유니버스 평점
        crawler.placeAutoUrl(reviews, driver,reviewURL+"search.naver?where=nexearch&sm=tab_etc&mra=bjBC&pkid=360&os=13986417&qvt=0&query=피카부(PEEK-A-BOO)%20평점","47");    //피카부(PEEK-A-BOO) 평점
        crawler.placeAutoUrl(reviews, driver,reviewURL+"search.naver?where=nexearch&sm=tab_etc&mra=bjBC&pkid=360&os=10483426&qvt=0&query=모빌을%20상상하다%20%3A%20알렉산더%20칼더전%20평점","48");     //모빌을 상상하다 : 알렉산더 칼더전 평점
        crawler.placeAutoUrl(reviews, driver,reviewURL+"search.naver?where=nexearch&sm=tab_etc&mra=bjBC&pkid=360&os=9385319&qvt=0&query=디어%20브레인%20평점","49");      //디어 브레인 평점
        crawler.placeAutoUrl(reviews, driver,reviewURL+"search.naver?where=nexearch&sm=tab_etc&mra=bjBC&pkid=360&os=9728631&qvt=0&query=오즈의%20미술관%20평점","50");     //오즈의 미술관 평점
        crawler.placeAutoUrl(reviews, driver,reviewURL+"search.naver?where=nexearch&sm=tab_etc&mra=bjBC&pkid=360&os=8745448&qvt=0&query=나의%20어린왕자에게%20평점","51");     //나의 어린왕자에게 평점
        crawler.placeAutoUrl(reviews, driver,reviewURL+"search.naver?where=nexearch&sm=tab_etc&mra=bjBC&pkid=360&os=9563488&qvt=0&query=프렌치%20팝%20아트%20%3A%20피에르와%20쥘의%20포트레이트%20평점","52");      //프렌치 팝 아트 : 피에르와 쥘의 포트레이트 평점
    	crawler.placeAutoUrl(reviews, driver,reviewURL+"search.naver?where=nexearch&sm=tab_etc&mra=bjBC&pkid=360&os=6510454&qvt=0&query=이상한%20나라의%20괴짜들%20%3A%20Geek%20Zone%20평점","53");     //이상한 나라의 괴짜들 : Geek Zone 평점
        crawler.placeAutoUrl(reviews, driver,reviewURL+"search.naver?where=nexearch&sm=tab_etc&mra=bjBC&pkid=360&os=9775780&qvt=0&query=슈퍼스타%20존%20버거맨%20평점","54");     //슈퍼스타 존 버거맨 평점
        crawler.placeAutoUrl(reviews, driver,reviewURL+"search.naver?where=nexearch&sm=tab_etc&mra=bjBC&pkid=360&os=8784573&qvt=0&query=러빙빈센트展%20(Loving%20Vincent%20Exhibition)%20평점","55");      //러빙빈센트展 (Loving Vincent Exhibition) 평점
        crawler.placeAutoUrl(reviews, driver,reviewURL+"search.naver?where=nexearch&sm=tab_etc&mra=bjBC&pkid=360&os=7707465&qvt=0&query=마르크%20샤갈%20특별전%20-%20영혼의%20정원%20평점","56");	     //마르크 샤갈 특별전 - 영혼의 정원 평점
        crawler.placeAutoUrl(reviews, driver,reviewURL+"search.naver?where=nexearch&sm=tab_etc&mra=bjBC&pkid=360&os=6482662&qvt=0&query=HI%2C%20POP%20-%20거리로%20나온%20예술%2C%20팝아트展%20평점","57");	 //HI, POP - 거리로 나온 예술, 팝아트展 평점
        crawler.placeAutoUrl(reviews, driver,reviewURL+"search.naver?where=nexearch&sm=tab_etc&mra=bjBC&pkid=360&os=6254123&qvt=0&query=The%20New%20Vision%20%3A%20from%20Bauhaus%20to%20A.I.%20평점","58");      //The New Vision : from Bauhaus to A.I. 평점

        MakeCsv.createCSV(reviews, "ReviewerList", FILE_PATH); //csv파일 생성
        driver.close();}

     */
}
