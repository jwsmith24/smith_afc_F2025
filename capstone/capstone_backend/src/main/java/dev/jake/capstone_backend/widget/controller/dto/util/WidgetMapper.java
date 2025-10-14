package dev.jake.capstone_backend.widget.controller.dto.util;

import dev.jake.capstone_backend.widget.controller.dto.responses.RatingDto;
import dev.jake.capstone_backend.widget.controller.dto.responses.WidgetDto;
import dev.jake.capstone_backend.widget.models.Rating;
import dev.jake.capstone_backend.widget.models.Widget;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.List;

public class WidgetMapper {



    public static WidgetDto toDto(Widget widget) {

        double avgRating = widget.getRatings().stream()
                .mapToDouble(Rating::getScore)
                .average()
                .orElse(0.0);

        avgRating = BigDecimal.valueOf(avgRating)
                .setScale(1, RoundingMode.HALF_UP)
                .doubleValue();

        return new WidgetDto(widget.getId(), widget.getName(), widget.getDescription(), avgRating);
    }



    public static RatingDto toDto(Rating rating) {
        return new RatingDto(rating.getId(), rating.getScore(), rating.getComment());

    }
}
