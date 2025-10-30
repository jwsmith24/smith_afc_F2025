package dev.jake.capstone_backend.widget.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import dev.jake.capstone_backend.widget.controller.dto.requests.AddNewRatingRequest;
import dev.jake.capstone_backend.widget.controller.dto.requests.CreateNewWidgetRequest;
import dev.jake.capstone_backend.widget.controller.dto.responses.RatingDto;
import dev.jake.capstone_backend.widget.controller.dto.responses.WidgetDto;
import dev.jake.capstone_backend.widget.models.Rating;
import dev.jake.capstone_backend.widget.models.Widget;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.bean.override.mockito.MockitoBean;
import org.springframework.test.web.servlet.MockMvc;

import java.time.Instant;
import java.util.List;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(WidgetController.class)
class WidgetControllerTest {

    @Autowired
    MockMvc mockMvc;

    @Autowired
    ObjectMapper objectMapper;

    @MockitoBean
    private WidgetService widgetService;

    private final String BASE_PATH = "/api/v1/widgets";

    private static List<WidgetDto> mockWidgetDtoList;

    private static Widget mockWidget;

    private static WidgetDto mockWidgetDto;


    public WidgetControllerTest() {

    }

    @BeforeAll
    static void setup() {
        Widget mock = new Widget();
        mock.setId(99L);
        mock.setName("Test Widget");
        mock.setDescription("Sample widget for testing");
        mock.setRatings(List.of(new Rating(mock, 3, "Simply fantastic")));

        mockWidget = mock;
        mockWidgetDto = new WidgetDto(mock.getId(), mock.getName(), mock.getDescription(), 3.0);


        mockWidgetDtoList = List.of(
                new WidgetDto(1L, "t1", "t1 desc", 5.0),
                new WidgetDto(2L, "t2", "t2 desc", 2.4),
                new WidgetDto(3L, "t3", "t3 desc", 4.3)

        );
    }

    @Test
    void addWidget_ShouldReturnCreatedAndLocation() throws Exception {
        CreateNewWidgetRequest request = new CreateNewWidgetRequest("Test Widget", "Sample widget" +
                " for testing", "#00000", 3);

        when(widgetService.createWidget(any(CreateNewWidgetRequest.class)))
                .thenReturn(mockWidget);


        mockMvc.perform(post(BASE_PATH)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(request))
                )
                .andExpect(status().isCreated())
                .andExpect(header().string("Location",
                        "http://localhost/api/v1/widgets/" + mockWidget.getId()))
                .andExpect(jsonPath("$.name").value("Test Widget"))
                .andExpect(jsonPath("$.description").value("Sample widget for testing"));

        verify(widgetService).createWidget(any(CreateNewWidgetRequest.class));
    }

    @Test
    void getAllWidgets_ShouldReturnAllWidgets() throws Exception {
        when(widgetService.getAllWidgets()).thenReturn(mockWidgetDtoList);

        mockMvc.perform(get(BASE_PATH))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$").isArray())
                .andExpect(jsonPath("$.length()").value(3));

        verify(widgetService).getAllWidgets();

    }

    @Test
    void getWidgetById_ShouldReturnTargetWidgetDto() throws Exception {
        when(widgetService.getWidgetById(any(Long.class))).thenReturn(mockWidgetDto);

        mockMvc.perform(get(BASE_PATH + "/99"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.name").value("Test Widget"))
                .andExpect(jsonPath("$.description").value("Sample widget for testing"))
                .andExpect(jsonPath("$.averageRating").value(3.0));

        verify(widgetService).getWidgetById(99L);

    }


    @Test
    void rateWidget_ShouldAddRating() throws Exception {

        AddNewRatingRequest request = new AddNewRatingRequest(4, "Excellent!");
        Rating mockRating = new Rating(mockWidget, 4, "Excellent!");
        mockRating.setId(100L);


        when(widgetService.addRating(eq(99L), any(AddNewRatingRequest.class)))
                .thenReturn(mockRating);

        mockMvc.perform(post(BASE_PATH + "/99/ratings")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(request))

                )
                .andExpect(status().isCreated())
                .andExpect(header().string("Location",
                        "http://localhost/api/v1/widgets/99/ratings/" + mockRating.getId()))
                .andExpect(jsonPath("$.score").value(4))
                .andExpect(jsonPath("$.comment").value("Excellent!"));


        verify(widgetService).addRating(eq(99L), any(AddNewRatingRequest.class));


    }

    @Test
    void getRatings_ShouldReturnRatingDtos() throws Exception {
        RatingDto mockRatingDto = new RatingDto(1L, 4, "Superb!", Instant.now(), Instant.now());

        when(widgetService.getRatings(any(Long.class))).thenReturn(
                List.of(mockRatingDto)
        );

        mockMvc.perform(get(BASE_PATH + "/99/ratings"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.length()").value(1));
    }


}