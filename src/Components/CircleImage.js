import React from 'react';
import {Image, Dimensions} from 'react-native';
import BlurImage from './BlurImage';

export const CircleImage = ({image, uri, styles}) => {
  return (
    <BlurImage
      uri={image}
      // uri={props?.uri ? {uri: props?.image} : props?.image}
      styles={{
        borderRadius: Math.round(
          Dimensions.get('window').width + Dimensions.get('window').height,
        ),
        width: Dimensions.get('window').width * 0.11,
        height: Dimensions.get('window').width * 0.11,
        ...styles,
      }}
      isURI={uri}
      radius={Math.round(
        Dimensions.get('window').width + Dimensions.get('window').height,
      )}
    />
  );
};
