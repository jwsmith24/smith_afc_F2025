package dev.jake.capstone_backend.widget.controller;

import dev.jake.capstone_backend.widget.controller.dto.requests.*;
import dev.jake.capstone_backend.widget.controller.dto.responses.RatingDto;
import dev.jake.capstone_backend.widget.controller.dto.responses.VariantDto;
import dev.jake.capstone_backend.widget.controller.dto.responses.WidgetDto;
import dev.jake.capstone_backend.widget.controller.dto.util.WidgetMapper;
import dev.jake.capstone_backend.widget.controller.exceptions.RatingNotFoundException;
import dev.jake.capstone_backend.widget.controller.exceptions.VariantNotFoundException;
import dev.jake.capstone_backend.widget.controller.exceptions.WidgetNotFoundException;
import dev.jake.capstone_backend.widget.models.*;
import dev.jake.capstone_backend.widget.repos.RatingRepository;
import dev.jake.capstone_backend.widget.repos.VariantRepository;
import dev.jake.capstone_backend.widget.repos.WidgetRepository;
import jakarta.transaction.Transactional;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
public class WidgetService {

    private final WidgetRepository widgetRepository;
    private final RatingRepository ratingRepository;
    private final VariantRepository variantRepository;


    public WidgetService(WidgetRepository widgetRepository, RatingRepository ratingRepository, VariantRepository variantRepository) {
        this.widgetRepository = widgetRepository;
        this.ratingRepository = ratingRepository;
        this.variantRepository = variantRepository;
    }

    @Transactional
    public Widget createWidget(CreateNewWidgetRequest request) {
        Widget newWidget = new Widget();
        newWidget.setName(request.name());
        newWidget.setDescription(request.description());

        // create default variant
        Variant variant = new Variant();
        variant.setColor(request.baseColor());
        variant.setSize(request.size());

        // create inventory entry
        Inventory inventoryEntry = new Inventory();
        inventoryEntry.setVariant(variant);
        inventoryEntry.setQuantity(request.initialQuantity());
        inventoryEntry.setStatus(InventoryStatus.AVAILABLE);

        variant.setInventory(inventoryEntry);

        newWidget.addVariant(variant);


        return widgetRepository.save(newWidget);
    }

    @Transactional
    public void deleteWidget(Long widgetId) {
        if (widgetRepository.existsById(widgetId)) {
            widgetRepository.deleteById(widgetId);
        } else {
            throw new WidgetNotFoundException(widgetId);
        }
    }



    public List<WidgetDto> getAllWidgets() {

        List<Widget> widgets = widgetRepository.findAll();
        return widgets.stream().map(WidgetMapper::toDto).toList();
    }

    public WidgetDto getWidgetById(Long widgetId) {

        Widget widget = widgetRepository.findById(widgetId).orElseThrow(() -> new WidgetNotFoundException(widgetId));


        return WidgetMapper.toDto(widget);
    }

    @Transactional
    public Rating addRating(Long widgetId, AddNewRatingRequest request) {
        Widget widget =
                widgetRepository.findById(widgetId).orElseThrow(() -> new WidgetNotFoundException(widgetId));

        Rating rating = new Rating();
        rating.setWidget(widget);
        rating.setScore(request.score());
        rating.setComment(request.comment());

        widget.addRating(rating);

        ratingRepository.save(rating);
        return rating;
    }

    @Transactional
    public void deleteRating(Long widgetId, Long ratingId) {

        Widget widget = widgetRepository.findById(widgetId)
                .orElseThrow(() -> new WidgetNotFoundException(widgetId));

        Rating rating = widget.getRatings().stream()
                .filter(r -> r.getId().equals(ratingId))
                .findFirst()
                .orElseThrow(() -> new RatingNotFoundException(ratingId));

        widget.getRatings().remove(rating);
        widgetRepository.save(widget); // orphan removal will update the rating table
    }


    @Transactional
    public Rating updateRating(Long widgetId, Long ratingId, UpdateRatingRequest request) {
        Widget widget =
                widgetRepository.findById(widgetId).orElseThrow(() -> new WidgetNotFoundException(widgetId));

        Rating rating;

        if (widget.getRatings().isEmpty()) {
            rating = new Rating();
            widget.addRating(rating);
        } else {
            rating = widget.getRatings().stream()
                    .filter(r -> r.getId().equals(ratingId))
                    .findFirst()
                    .orElseThrow(() -> new RatingNotFoundException(ratingId));
        }

        if (request.score() != null) rating.setScore(request.score());
        if (request.comment() != null) rating.setComment(request.comment());


        ratingRepository.save(rating);

        return rating;
    }

    public List<RatingDto> getRatings(Long widgetId) {
        Widget widget =
                widgetRepository.findById(widgetId).orElseThrow(() -> new WidgetNotFoundException(widgetId));


        return widget.getRatings()
                .stream()
                .map(WidgetMapper::toDto)
                .toList();
    }

    public List<VariantDto> getVariants(Long widgetId) {

        List<Variant> variants =
                variantRepository.findAllByWidgetIdWithInventory(widgetId);

        return variants
                .stream()
                .map(WidgetMapper::toDto)
                .toList();
    }

    @Transactional
    public Variant createVariant(Long widgetId, CreateVariantRequest request) {
        Widget widget = widgetRepository.findById(widgetId).orElseThrow(() -> new WidgetNotFoundException(widgetId));

        Variant variant = new Variant();
        variant.setColor(request.color());
        variant.setSize(request.size());

        Inventory inventory = new Inventory();
        inventory.setVariant(variant);
        inventory.setQuantity(request.quantity());
        inventory.setStatus(InventoryStatus.AVAILABLE);

        variant.setInventory(inventory);

        widget.addVariant(variant);

        widgetRepository.save(widget);

        return variant;
    }


    @Transactional
    public void deleteVariant(Long widgetId, Long variantId) {
        Widget widget = widgetRepository.findById(widgetId)
                .orElseThrow(() -> new WidgetNotFoundException(widgetId));

        Variant variant = widget.getVariants().stream()
                .filter(r -> r.getId().equals(variantId))
                .findFirst()
                .orElseThrow(() -> new RatingNotFoundException(variantId));

        widget.getVariants().remove(variant);
        widgetRepository.save(widget);
    }

    @Transactional
    public VariantDto updateVariant(Long variantId, UpdateVariantRequest request) {
        Variant variant =
                variantRepository.findByIdWithInventory(variantId).orElseThrow(() -> new VariantNotFoundException(variantId));

        log.info("got request: {}", request);

        if (request.color() != null) {
            variant.setColor(request.color());
        }

        if (request.size() != null) {
            variant.setSize(request.size());
        }

        if (request.quantity() != null) {
            variant.getInventory().setQuantity(request.quantity());
        }

        variantRepository.save(variant);

        return WidgetMapper.toDto(variant);
    }
}
