package com.betrybe.weatherreport;

import com.betrybe.weatherreport.interfaces.WeatherClient;

/**
 * Weather client component.
 */
public class WeatherClientImpl implements WeatherClient {

  @Override
  public String getWeather(String city) {
    return "tempinho bom";
  }
}
