package com.betrybe.playlist.service;

import com.betrybe.playlist.entity.Music;
import com.betrybe.playlist.repository.MusicRepository;
import com.betrybe.playlist.service.exception.MusicNotFoundException;
import com.betrybe.playlist.util.PropertyMapper;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/** Music service class. */
@Service
public class MusicService {

  /** Attributes. */
  private final MusicRepository musicRepository;

  /** Constructor method. */
  @Autowired
  public MusicService(MusicRepository musicRepository) {
    this.musicRepository = musicRepository;
  }

  /** Find all musics method. */
  public List<Music> findAll() {
    return musicRepository.findAll();
  }

  /** Create music method. */
  public Music create(Music music) {
    return musicRepository.save(music);
  }

  /** Find music by ID method. */
  public Music findById(long musicId) {
    return musicRepository.findById(musicId)
        .orElseThrow(MusicNotFoundException::new);
  }

  /** Delete music method. */
  public void delete(long musicId) {
    musicRepository.deleteById(musicId);
  }

  /** Update music method. */
  public Music update(long id, Music music) {
    Music musicDb = findById(id);
    PropertyMapper.copyNonNullProperties(music, musicDb);

    return musicRepository.save(musicDb);
  }

}
