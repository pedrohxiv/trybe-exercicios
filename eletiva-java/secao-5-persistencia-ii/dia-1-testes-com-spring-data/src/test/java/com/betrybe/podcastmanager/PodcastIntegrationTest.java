package com.betrybe.podcastmanager;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.DynamicPropertyRegistry;
import org.springframework.test.context.DynamicPropertySource;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.testcontainers.containers.MySQLContainer;
import org.testcontainers.junit.jupiter.Container;
import org.testcontainers.junit.jupiter.Testcontainers;

import com.betrybe.podcastmanager.entity.Podcast;
import com.betrybe.podcastmanager.repository.PodcastRepository;

@SpringBootTest
@AutoConfigureMockMvc
@Testcontainers
public class PodcastIntegrationTest {
  @Container
  public static MySQLContainer MYSQL_CONTAINER = new MySQLContainer("mysql:8.0.29").withDatabaseName("podcast");

  @DynamicPropertySource
  public static void overrideProperties(DynamicPropertyRegistry registry) {
    registry.add("spring.datasource.url", MYSQL_CONTAINER::getJdbcUrl);
    registry.add("spring.datasource.username", MYSQL_CONTAINER::getUsername);
    registry.add("spring.datasource.password", MYSQL_CONTAINER::getPassword);
  }

  @Autowired
  PodcastRepository podcastRepository;

  @Autowired
  MockMvc mockMvc;

  @Test
  public void getPodcastTest() throws Exception {
    Podcast podcast = new Podcast();

    podcast.setName("Inteligência Ltda.");
    podcast.setUrl("https://www.youtube.com/channel/UCWZoPPW7u2I4gZfhJBZ6NqQ");

    Podcast createdPodcast = podcastRepository.save(podcast);

    String podcastUrl = "/podcasts/%s".formatted(createdPodcast.getId());

    mockMvc.perform(MockMvcRequestBuilders.get(podcastUrl).accept(MediaType.APPLICATION_JSON))
        .andExpect(MockMvcResultMatchers.jsonPath("$.name").value("Inteligência Ltda."))
        .andExpect(
            MockMvcResultMatchers.jsonPath("$.url").value("https://www.youtube.com/channel/UCWZoPPW7u2I4gZfhJBZ6NqQ"));
  }
}
