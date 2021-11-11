package org.KwonEunbi.api.review.domain;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component @Data @RequiredArgsConstructor @AllArgsConstructor
class Reviewer {
    private String score;
    private String reviewTitle;
    private String reviewContent;
    private String regDate;
    private long reviewNum;

    @Override
    public String toString() {
        return "<"+reviewNum+">"+score+", "+reviewTitle+ ", "
                +reviewContent+", "+regDate;}
}