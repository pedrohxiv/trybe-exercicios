package com.betrybe.playlist.util;

import java.beans.PropertyDescriptor;
import java.util.HashSet;
import java.util.Set;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.BeanWrapper;
import org.springframework.beans.BeanWrapperImpl;

/** Property mapper class. */
public class PropertyMapper {

  /** Copy non-null properties method. */
  public static void copyNonNullProperties(Object source, Object destination) {
    BeanUtils.copyProperties(source, destination, getNullPropertyNames(source));
  }

  /** Get null property names method. */
  private static String[] getNullPropertyNames(Object object) {
    final BeanWrapper src = new BeanWrapperImpl(object);
    PropertyDescriptor[] pds = src.getPropertyDescriptors();

    Set<String> emptyNames = new HashSet<>();
    for (PropertyDescriptor pd : pds) {
      Object srcValue = src.getPropertyValue(pd.getName());
      if (srcValue == null) {
        emptyNames.add(pd.getName());
      }
    }

    String[] result = new String[emptyNames.size()];
    return emptyNames.toArray(result);
  }
}
