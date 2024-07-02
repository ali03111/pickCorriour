import React, {memo, useCallback} from 'react';
import {FlatList, View, StyleSheet} from 'react-native';
import {CircleImage} from '../../Components/CircleImage';
import {TextComponent} from '../../Components/TextComponent';
import {Colors, FontSize} from '../../Theme/Variables';
import {hp, wp} from '../../Config/responsive';
import ThemeButton from '../../Components/ThemeButton';
import {HeaderComponent} from '../../Components/HeaderComponent';
import ImageBgComp from '../../Components/ImageBgComp';

const TripHistory = ({navigation}) => {
  const tripData = [
    {
      id: '1',
      driverName: 'GTY 1024',
      vehicle: 'Scania R730',
      task: 'Chemical Delivery',
      tripCompleted: '20 JUNE, 02:05PM',
      distance: '125km',
      location: 'Hemiltone',
      image:
        'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: '1',
      driverName: 'GTY 1024',
      vehicle: 'Scania R730',
      task: 'Chemical Delivery',
      tripCompleted: '20 JUNE, 02:05PM',
      distance: '125km',
      location: 'Hemiltone',
      image:
        'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    // Add more trip data here
  ];

  const renderItem = useCallback(
    ({item}) => (
      <View style={styles.itemContainer}>
        <View style={styles.driverInfo}>
          <CircleImage uri image={item.image} styles={styles.driverImage} />
          <View style={styles.driverTextContainer}>
            <TextComponent text={item.driverName} styles={styles.driverName} />
            <TextComponent text={item.vehicle} styles={styles.vehicle} />
          </View>
          <TextComponent
            text={`${item.location} (${item.distance})`}
            styles={styles.location}
          />
        </View>
        <View style={styles.tripDetails}>
          <View>
            <TextComponent text="Task" styles={styles.label} />
            <TextComponent text={item.task} styles={styles.task} />
          </View>
          <View>
            <TextComponent text="Trip Completed" styles={styles.label} />
            <TextComponent
              text={item.tripCompleted}
              styles={styles.tripCompleted}
            />
          </View>
        </View>
      </View>
    ),
    [],
  );

  return (
    <ImageBgComp
      childern={
        <View style={styles.container}>
          <FlatList
            data={tripData}
            keyExtractor={item => item.id}
            renderItem={renderItem}
            contentContainerStyle={styles.listContent}
          />
        </View>
      }
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: hp('3'),
  },
  itemContainer: {
    backgroundColor: Colors.white,
    marginVertical: hp('0.8'),
    borderRadius: hp('2'),
    margin: 15,
  },
  driverInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 7,
    backgroundColor: Colors.grayBorder,
    borderTopLeftRadius: wp('2'),
    borderTopRightRadius: wp('2'),
  },
  driverImage: {
    aspectRatio: 1,
    height: hp('4'),
  },
  driverTextContainer: {
    flex: 1,
    marginLeft: wp('2'),
  },
  driverName: {
    fontSize: FontSize.scale12,
    fontWeight: 'bold',
    color: Colors.black,
  },
  vehicle: {
    fontSize: FontSize.small,
    color: Colors.darkGray,
  },
  location: {
    fontSize: FontSize.scale12,
    color: Colors.textGreen,
    fontWeight: 'bold',
  },
  tripDetails: {
    padding: 10,
    marginBottom: hp('2'),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: FontSize.scale16,
    color: Colors.darkGray,
  },
  task: {
    fontSize: FontSize.medium,
    fontWeight: 'bold',
    color: Colors.black,
  },
  tripCompleted: {
    fontSize: FontSize.medium,
    fontWeight: 'bold',
    color: Colors.black,
  },
});

export default memo(TripHistory);
