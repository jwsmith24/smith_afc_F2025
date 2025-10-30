package dev.jake.capstone_backend.widget.controller;

import dev.jake.capstone_backend.widget.controller.dto.requests.*;
import dev.jake.capstone_backend.widget.controller.dto.responses.RatingDto;
import dev.jake.capstone_backend.widget.controller.dto.responses.VariantDto;
import dev.jake.capstone_backend.widget.controller.dto.responses.WidgetDto;
import dev.jake.capstone_backend.widget.controller.dto.util.WidgetMapper;
import dev.jake.capstone_backend.widget.models.Rating;
import dev.jake.capstone_backend.widget.models.Variant;
import dev.jake.capstone_backend.widget.models.Widget;
import dev.jake.capstone_backend.widget.repos.MediaRepository;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/api/v1/widgets")
public class WidgetController {

    private final WidgetService widgetService;
    private final WidgetMapper widgetMapper;
    private final MediaRepository mediaRepository;

    public WidgetController(WidgetService service, MediaRepository mediaRepository) {
        this.widgetService = service;
        this.mediaRepository = mediaRepository;
        this.widgetMapper = new WidgetMapper(mediaRepository);
    }


    @PostMapping
    public ResponseEntity<WidgetDto> addWidget(@Valid @RequestBody CreateNewWidgetRequest request) {

        // create and persist new widget
        Widget savedWidget = widgetService.createWidget(request);

        // build resource location for RESTful post
        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(savedWidget.getId())
                .toUri();

        WidgetDto response = widgetMapper.toDto(savedWidget);

        return ResponseEntity.created(location).body(response);

    }

    @GetMapping()
    public ResponseEntity<List<WidgetDto>> getAllWidgets() {
        List<WidgetDto> response = widgetService.getAllWidgets();
        return ResponseEntity.ok(response);
    }

    @GetMapping("/{id}")
    public ResponseEntity<WidgetDto> getWidgetById(@PathVariable Long id) {
        WidgetDto widget = widgetService.getWidgetById(id);

        return ResponseEntity.ok(widget);
    }

    // ratings
    @PostMapping("/{id}/ratings")
    public ResponseEntity<RatingDto> addRating(@PathVariable Long id,
                                            @Valid @RequestBody AddNewRatingRequest request) {
        Rating saved = widgetService.addRating(id, request);

        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{ratingId}")
                .buildAndExpand(saved.getId())
                .toUri();

        RatingDto dto = new RatingDto(
                saved.getId(),
                saved.getScore(),
                saved.getComment(),
                saved.getCreatedAt(),
                saved.getUpdatedAt()
        );

        return ResponseEntity.created(location).body(dto);

    }

    @DeleteMapping("/{widgetId}")
    public ResponseEntity<String> deleteWidget(@PathVariable Long widgetId) {
        widgetService.deleteWidget(widgetId);
        return ResponseEntity.ok("Widget with id: " + widgetId + " deleted");
    }


    @PatchMapping("/{widgetId}/ratings/{ratingId}")
    public ResponseEntity<RatingDto> updateRating(@PathVariable Long widgetId,
                                                  @PathVariable Long ratingId,
                                                  @Valid @RequestBody UpdateRatingRequest request) {

        Rating updated = widgetService.updateRating(widgetId, ratingId, request);
        RatingDto dto = new RatingDto(
                updated.getId(),
                updated.getScore(),
                updated.getComment(),
                updated.getCreatedAt(),
                updated.getUpdatedAt()
        );

        return ResponseEntity.ok(dto);
    }

    @DeleteMapping("/{widgetId}/ratings/{ratingId}")
    public ResponseEntity<String> deleteRating(@PathVariable Long widgetId,
                                               @PathVariable Long ratingId) {

        widgetService.deleteRating(widgetId, ratingId);
        return ResponseEntity.ok("Rating with id: " + ratingId + " deleted successfully");
    }

    @GetMapping("/{widgetId}/ratings")
    public ResponseEntity<List<RatingDto>> getRatingsForWidget(@PathVariable Long widgetId) {
        List<RatingDto> ratings = widgetService.getRatings(widgetId);

        return ResponseEntity.ok(ratings);
    }

    // VARIANTS

    @GetMapping("/{widgetId}/variants")
    public ResponseEntity<List<VariantDto>> getVariantsForWidget(@PathVariable Long widgetId) {

        List<VariantDto> variants = widgetService.getVariants(widgetId);

        return ResponseEntity.ok(variants);

    }

    @PostMapping("/{widgetId}/variants")
    public ResponseEntity<VariantDto> createWidgetVariant(@PathVariable Long widgetId,
                                                          @RequestBody CreateVariantRequest request) {
       Variant variant = widgetService.createVariant(widgetId, request);

       URI location = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{variantId}")
                .buildAndExpand(variant.getId())
                .toUri();


       return ResponseEntity.created(location).body(widgetMapper.toDto(variant));

    }

    @DeleteMapping("/{widgetId}/variants/{variantId}")
    public ResponseEntity<String> deleteVariant(@PathVariable Long widgetId,
                                                @PathVariable Long variantId) {
        widgetService.deleteVariant(widgetId, variantId);

        return ResponseEntity.ok("Variant with id " + variantId + " deleted");
    }

    @PatchMapping("/{widgetId}/variants/{variantId}")
    public ResponseEntity<VariantDto> updateVariant(@PathVariable Long widgetId,
                                                    @PathVariable Long variantId,
                                                    @RequestBody UpdateVariantRequest request) {
        VariantDto updatedVariant = widgetService.updateVariant(variantId, request);

        return ResponseEntity.ok(updatedVariant);
    }

}
