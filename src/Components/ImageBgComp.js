import {View, Text, ImageBackground, StyleSheet} from 'react-native';
import React from 'react';
import {bgImage} from '../Assets';

const ImageBgComp = ({childern}) => {
  return (
    <ImageBackground source={bgImage} style={styles.ImgBg}>
      {childern}
    </ImageBackground>
  );
};

export default ImageBgComp;

export const styles = StyleSheet.create({
  ImgBg: {
    flex: 1,
    justifyContent: 'center',
  },
});
