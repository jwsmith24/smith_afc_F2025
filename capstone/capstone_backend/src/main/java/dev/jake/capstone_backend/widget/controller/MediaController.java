package dev.jake.capstone_backend.widget.controller;



import dev.jake.capstone_backend.widget.controller.dto.responses.MediaDto;
import dev.jake.capstone_backend.widget.controller.exceptions.WidgetNotFoundException;
import dev.jake.capstone_backend.widget.models.Media;
import dev.jake.capstone_backend.widget.models.Widget;
import dev.jake.capstone_backend.widget.repos.MediaRepository;
import dev.jake.capstone_backend.widget.repos.WidgetRepository;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/images")
@CrossOrigin
public class MediaController {


    // point to uploads folder in resources
    private static final String UPLOAD_DIR = "uploads/";

    private final MediaRepository mediaRepository;
    private final WidgetRepository widgetRepository;

    public MediaController(MediaRepository mediaRepository, WidgetRepository widgetRepository) {
        this.mediaRepository = mediaRepository;
        this.widgetRepository = widgetRepository;
    }

    @GetMapping()
    public ResponseEntity<List<MediaDto>> getAllMedia(@RequestParam Long widgetId) {
        List<MediaDto> results = mediaRepository.findAllByWidget_Id(widgetId)
                .stream().map(media ->
                     new MediaDto(widgetId, media.getUrl(), media.isPrimary())
                ).toList();

        return ResponseEntity.ok(results);
    }

    @GetMapping("/{filename}")
    public ResponseEntity<Resource> getImage(@PathVariable String filename) {

        try {
            Path filePath = Paths.get(UPLOAD_DIR).resolve(filename).normalize();
            Resource image = new UrlResource(filePath.toUri());

            if (!image.exists()) {
                return ResponseEntity.notFound().build();
            }

            String contentType = Files.probeContentType(filePath);

            return ResponseEntity.ok()
                    .contentType(MediaType.parseMediaType(contentType))
                    .body(image);

        } catch (IOException e) {
            return ResponseEntity.badRequest().build();
        }

    }

    @PostMapping("/upload")
    public ResponseEntity<String> uploadImage(@RequestParam MultipartFile file,
                                              @RequestParam Long widgetId) {
        try {
            File directory = new File(UPLOAD_DIR);
            if (!directory.exists()) {
                directory.mkdirs();
            }

            String fileName = System.currentTimeMillis() + "_" + file.getOriginalFilename();
            Path filePath = Paths.get(UPLOAD_DIR + fileName);
            Files.copy(file.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);


            Widget widget =
                    widgetRepository.findById(widgetId).orElseThrow(() -> new WidgetNotFoundException(widgetId));

            List<Media> existingMedia =
                    mediaRepository.findAllByWidget_Id(widgetId);

            // ensure existing entries are no longer primary
            Optional<Media> lastPrimary =
                    existingMedia.stream().filter(Media::isPrimary).findFirst();

            if(lastPrimary.isPresent()) {
                Media last = lastPrimary.get();
                last.setPrimary(false);
                mediaRepository.save(last);
            }


            Media newMedia = new Media();
            newMedia.setUrl(fileName);
            newMedia.setPrimary(true);

            widget.addMedia(newMedia); // helper for bidirectional mapping

            mediaRepository.save(newMedia);


            return ResponseEntity.ok("File uploaded successfully: " + fileName);
        } catch (IOException e) {

            System.out.println(e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Failed to upload image");
        }
    }
}
