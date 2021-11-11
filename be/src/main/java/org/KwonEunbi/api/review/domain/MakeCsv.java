package org.KwonEunbi.api.review.domain;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.util.List;

public class MakeCsv {
    public static long createCSV(List<Reviewer> list, String title, String filepath) {
        long resultCount = 0;
        try{
            BufferedWriter bw = new BufferedWriter(new FileWriter(filepath + "/" + title + ".csv", true));
            for(Reviewer dom:list) {bw.write(dom.getReviewNum()+","+dom.getReviewTitle()+","+
                    dom.getReviewContent()+","+dom.getScore()+","+dom.getRegDate()+";");
                bw.newLine();}
            bw.flush();
            bw.close();
        }catch (Exception e) {
            e.printStackTrace();}
        return (long) resultCount;}}
