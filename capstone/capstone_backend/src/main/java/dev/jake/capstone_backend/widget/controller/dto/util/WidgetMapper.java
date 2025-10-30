package dev.jake.capstone_backend.widget.controller.dto.util;

import dev.jake.capstone_backend.widget.models.*;
import dev.jake.capstone_backend.widget.controller.dto.responses.RatingDto;
import dev.jake.capstone_backend.widget.controller.dto.responses.VariantDto;
import dev.jake.capstone_backend.widget.controller.dto.responses.WidgetDto;
import dev.jake.capstone_backend.widget.repos.MediaRepository;

import java.math.BigDecimal;
import java.math.RoundingMode;

public class WidgetMapper {


    private final MediaRepository mediaRepository;

    public WidgetMapper(MediaRepository mediaRepository) {
        this.mediaRepository = mediaRepository;
    }

    public WidgetDto toDto(Widget widget) {

        double avgRating = widget.getRatings().stream()
                .mapToDouble(Rating::getScore)
                .average()
                .orElse(0.0);

        avgRating = BigDecimal.valueOf(avgRating)
                .setScale(1, RoundingMode.HALF_UP)
                .doubleValue();

        Media primaryMedia = mediaRepository.findAllByWidget_Id(widget.getId())
                .stream()
                .filter(Media::isPrimary).findFirst().orElse(null);

        String imageUrl = (primaryMedia != null) ?
                primaryMedia.getUrl() :
                "react.svg";

        return new WidgetDto(widget.getId(), widget.getName(), widget.getDescription(), avgRating
                , imageUrl);
    }



    public RatingDto toDto(Rating rating) {
        return new RatingDto(rating.getId(), rating.getScore(), rating.getComment(),
                rating.getCreatedAt(), rating.getUpdatedAt());

    }

    public VariantDto toDto(Variant variant) {

        Inventory inventoryEntry = variant.getInventory();
        int quantity = (inventoryEntry != null) ? inventoryEntry.getQuantity() : 0;

        return new VariantDto(variant.getId(), variant.getWidget().getName(), variant.getColor(),
                variant.getSize(), quantity);
    }
}
