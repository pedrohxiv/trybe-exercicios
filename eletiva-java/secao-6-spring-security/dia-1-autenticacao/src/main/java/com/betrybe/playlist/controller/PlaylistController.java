package com.betrybe.playlist.controller;

import com.betrybe.playlist.controller.dto.PlaylistCreationDto;
import com.betrybe.playlist.entity.Music;
import com.betrybe.playlist.entity.Playlist;
import com.betrybe.playlist.service.PlaylistService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

/** Playlist controller class. */
@RestController
@RequestMapping("/playlists")
public class PlaylistController {

  /** Attributes. */
  private final PlaylistService playlistService;

  /** Constructor method. */
  @Autowired
  public PlaylistController(PlaylistService playlistService) {
    this.playlistService = playlistService;
  }

  /** POST playlist method. */
  @PostMapping
  @ResponseStatus(HttpStatus.CREATED)
  public Playlist create(@RequestBody PlaylistCreationDto dto) {
    return playlistService.create(dto.toEntity());
  }

  /** GET playlists method. */
  @GetMapping
  public List<Playlist> findAll() {
    return playlistService.findAll();
  }

  /** GET playlist method. */
  @GetMapping("/{playlistId}")
  public Playlist findById(@PathVariable long playlistId) {
    return playlistService.findById(playlistId);
  }

  /** PATCH playlist method. */
  @PatchMapping("/{playlistId}")
  public Playlist update(@PathVariable long playlistId, @RequestBody PlaylistCreationDto dto) {
    return playlistService.update(playlistId, dto.toEntity());
  }

  /** DELETE playlist method. */
  @DeleteMapping("/{playlistId}")
  public void delete(@PathVariable long playlistId) {
    playlistService.delete(playlistId);
  }

  /** POST music in playlist method. */
  @PostMapping("/{playlistId}/{musicId}")
  @ResponseStatus(HttpStatus.CREATED)
  public Playlist addMusic(@PathVariable long playlistId,
      @PathVariable long musicId) {
    return playlistService.addMusicToPlaylist(musicId, playlistId);
  }

  /** GET musics in playlist method. */
  @GetMapping("/{playlistId}/musics")
  public List<Music> getMusics(@PathVariable Long playlistId) {
    return playlistService.findById(playlistId).getMusics();
  }
}
