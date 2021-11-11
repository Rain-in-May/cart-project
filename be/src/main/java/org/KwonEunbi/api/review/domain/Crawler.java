package org.KwonEunbi.api.review.domain;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import io.github.bonigarcia.wdm.WebDriverManager;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

@Component
public class Crawler {
    public List<Reviewer> placeAutoUrl(List<Reviewer> reviews, ChromeDriver driver, String url, String number) {
        Logger logger = LoggerFactory.getLogger(Crawler.class);
        driver.get(url);
        driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
        WebElement rev = driver.findElementByClassName("area_card_outer");
        List<WebElement> ls = rev.findElements(By.cssSelector("li"));

        for (int i = 0; i < ls.size(); i++) {
            String reviewTitle = ls.get(i).findElement(By.className("this_text_stress")).getText();
            String reviewContent = ls.get(i).findElement(By.className("desc")).getText().replaceAll(",","");
            String score = ls.get(i).findElement(By.className("area_text_box")).getText();
            score=score.substring(score.length()-1);
            String regDate = ls.get(i).findElement(By.className("this_text_normal")).getText();
            reviews.add(new Reviewer(reviewTitle, reviewContent, score, regDate, Long.parseLong(number)));
            logger.info(reviewTitle, reviewContent, score, regDate);
        }
        return reviews;
    }
}
