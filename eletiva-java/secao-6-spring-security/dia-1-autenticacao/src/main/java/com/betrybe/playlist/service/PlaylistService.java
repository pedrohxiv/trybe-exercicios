package com.betrybe.playlist.service;

import com.betrybe.playlist.entity.Music;
import com.betrybe.playlist.entity.Playlist;
import com.betrybe.playlist.repository.PlaylistRepository;
import com.betrybe.playlist.service.exception.PlaylistNotFoundException;
import com.betrybe.playlist.util.PropertyMapper;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/** Playlist service class. */
@Service
public class PlaylistService {

  /** Attributes. */
  private final PlaylistRepository playlistRepository;
  private final MusicService musicService;

  /** Constructor method. */
  @Autowired
  public PlaylistService(PlaylistRepository playlistRepository, MusicService musicService) {
    this.playlistRepository = playlistRepository;
    this.musicService = musicService;
  }

  /** Find all playlists method. */
  public List<Playlist> findAll() {
    return playlistRepository.findAll();
  }

  /** Create playlist method. */
  public Playlist create(Playlist playlist) {
    return playlistRepository.save(playlist);
  }

  /** Find playlist by ID method. */
  public Playlist findById(long id) {
    return playlistRepository.findById(id).orElseThrow(PlaylistNotFoundException::new);
  }

  /** Delete playlist method. */
  public void delete(long id) {
    playlistRepository.deleteById(id);
  }

  /** Update playlist method. */
  public Playlist update(long id, Playlist playlist) {
    Playlist playlistDb = findById(id);
    PropertyMapper.copyNonNullProperties(playlist, playlistDb);
    return playlistRepository.save(playlistDb);
  }

  /** Add music to playlist method. */
  public Playlist addMusicToPlaylist(long musicId, long playlistId) {

    Music music = musicService.findById(musicId);
    Playlist playlist = findById(playlistId);
    playlist.getMusics().add(music);
    music.setPlaylist(playlist);

    return playlistRepository.save(playlist);
  }

}
