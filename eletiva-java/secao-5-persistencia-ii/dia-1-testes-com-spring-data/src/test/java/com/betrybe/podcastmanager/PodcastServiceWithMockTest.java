package com.betrybe.podcastmanager;

import java.util.Optional;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.ArgumentMatchers;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.ActiveProfiles;

import com.betrybe.podcastmanager.entity.Podcast;
import com.betrybe.podcastmanager.exception.PodcastNotFoundException;
import com.betrybe.podcastmanager.repository.PodcastRepository;
import com.betrybe.podcastmanager.service.PodcastService;

@SpringBootTest
@ActiveProfiles("test")
public class PodcastServiceWithMockTest {
  @Autowired
  PodcastService podcastService;

  @MockBean
  PodcastRepository podcastRepository;

  @Test
  public void getExistentPodcastTest() {
    Podcast podcast = new Podcast();

    podcast.setId(1L);
    podcast.setName("Inteligência Ltda.");
    podcast.setUrl("https://www.youtube.com/channel/UCWZoPPW7u2I4gZfhJBZ6NqQ");

    Mockito.when(podcastRepository.findById(ArgumentMatchers.eq(1L))).thenReturn(Optional.of(podcast));

    Podcast returnedPodcast = podcastService.getPodcast(1L);

    Mockito.verify(podcastRepository).findById(ArgumentMatchers.eq(1L));

    Assertions.assertEquals(returnedPodcast.getId(), podcast.getId());
    Assertions.assertEquals(returnedPodcast.getName(), podcast.getName());
    Assertions.assertEquals(returnedPodcast.getUrl(), podcast.getUrl());
  }

  @Test
  public void getNonexistentPodcastTest() {
    Mockito.when(podcastRepository.findById(ArgumentMatchers.any())).thenReturn(Optional.empty());

    Assertions.assertThrows(PodcastNotFoundException.class, () -> podcastService.getPodcast(999L));

    Mockito.verify(podcastRepository).findById(ArgumentMatchers.eq(999L));
  }

  @Test
  public void createPodcastTest() {
    Podcast podcast = new Podcast();

    podcast.setName("Inteligência Ltda.");
    podcast.setUrl("https://www.youtube.com/channel/UCWZoPPW7u2I4gZfhJBZ6NqQ");

    Podcast podcastToReturn = new Podcast();

    podcastToReturn.setId(1L);
    podcastToReturn.setName(podcast.getName());
    podcastToReturn.setUrl(podcast.getUrl());

    Mockito.when(podcastRepository.save(ArgumentMatchers.any(Podcast.class))).thenReturn(podcastToReturn);

    Podcast createdPodcast = podcastService.createPodcast(podcast);

    Mockito.verify(podcastRepository).save(ArgumentMatchers.any(Podcast.class));

    Assertions.assertEquals(1L, createdPodcast.getId());
    Assertions.assertEquals(podcast.getName(), createdPodcast.getName());
    Assertions.assertEquals(podcast.getUrl(), createdPodcast.getUrl());
  }
}
