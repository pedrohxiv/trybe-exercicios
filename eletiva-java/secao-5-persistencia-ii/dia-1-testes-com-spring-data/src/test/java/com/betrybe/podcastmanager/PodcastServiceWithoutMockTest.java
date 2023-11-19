package com.betrybe.podcastmanager;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import com.betrybe.podcastmanager.entity.Podcast;
import com.betrybe.podcastmanager.exception.PodcastNotFoundException;
import com.betrybe.podcastmanager.service.PodcastService;

@SpringBootTest
@ActiveProfiles("test")
public class PodcastServiceWithoutMockTest {
  @Autowired
  PodcastService podcastService;

  @Test
  public void getExistentPodcastTest() {
    Podcast podcast = new Podcast();

    podcast.setName("Inteligência Ltda.");
    podcast.setUrl("https://www.youtube.com/channel/UCWZoPPW7u2I4gZfhJBZ6NqQ");

    Long createdId = podcastService.createPodcast(podcast).getId();

    Podcast returnedPodcast = podcastService.getPodcast(createdId);

    Assertions.assertEquals(returnedPodcast.getId(), createdId);
    Assertions.assertEquals(returnedPodcast.getName(), podcast.getName());
    Assertions.assertEquals(returnedPodcast.getUrl(), podcast.getUrl());
  }

  @Test
  public void getNonexistentPodcastTest() {
    Assertions.assertThrows(PodcastNotFoundException.class, () -> podcastService.getPodcast(999L));
  }

  @Test
  public void createPodcastTest() {
    Podcast podcast = new Podcast();

    podcast.setName("Inteligência Ltda.");
    podcast.setUrl("https://www.youtube.com/channel/UCWZoPPW7u2I4gZfhJBZ6NqQ");

    Podcast createdPodcast = podcastService.createPodcast(podcast);

    Assertions.assertNotNull(createdPodcast.getId());
    Assertions.assertEquals(podcast.getName(), createdPodcast.getName());
    Assertions.assertEquals(podcast.getUrl(), createdPodcast.getUrl());
  }
}
