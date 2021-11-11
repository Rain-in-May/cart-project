package org.KwonEunbi.api.common.controller;

import java.io.File;
import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URI;
import java.net.URL;
import java.util.List;
import java.util.stream.Collectors;

import lombok.RequiredArgsConstructor;
import org.KwonEunbi.api.common.domain.FileInfo;
import org.KwonEunbi.api.common.exception.ResponseMessage;
import org.KwonEunbi.api.common.service.FilesStorageService;
import org.KwonEunbi.api.exhibition.domain.Exhbn;
import org.KwonEunbi.api.exhibition.service.ExhbnService;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.servlet.mvc.method.annotation.MvcUriComponentsBuilder;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;


@Controller @RequiredArgsConstructor @RequestMapping("/files")
@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
public class FilesController {
    final FilesStorageService storageService;
    final ExhbnService exhbnService;

    @PostMapping("/upload")
    public String uploadFile(@RequestParam("filename") MultipartFile file,
                             MultipartHttpServletRequest multipartHttpServletRequest) throws Exception {
        if(file != null){
            URL url;
            try {
                url = file.getResource().getURL();
                String message = url.toString();
                return message;
            } catch (MalformedURLException e){
                e.printStackTrace();;
            }
        }
        return null;
    }

    @GetMapping("/files")
    public ResponseEntity<List<FileInfo>> getListFiles() {
        List<FileInfo> fileInfos = storageService.loadAll().map(path -> {
            String filename = path.getFileName().toString();
            String url = MvcUriComponentsBuilder
                    .fromMethodName(FilesController.class, "getFile", path.getFileName().toString()).build().toString();

            return new FileInfo(filename, url);
        }).collect(Collectors.toList());

        return ResponseEntity.status(HttpStatus.OK).body(fileInfos);
    }

    @GetMapping("/files/{filename:.+}")
    public ResponseEntity<Resource> getFile(@PathVariable String filename) {
        Resource file = storageService.load(filename);
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + file.getFilename() + "\"").body(file);
    }
}