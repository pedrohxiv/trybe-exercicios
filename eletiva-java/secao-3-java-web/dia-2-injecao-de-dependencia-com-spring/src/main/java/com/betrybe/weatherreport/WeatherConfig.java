package com.betrybe.weatherreport;

import com.betrybe.weatherreport.interfaces.WeatherClient;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * Weather config component.
 */
@Configuration
public class WeatherConfig {
  @Bean
  WeatherClient weatherClient() {
    return new WeatherClientImpl();
  }
}
