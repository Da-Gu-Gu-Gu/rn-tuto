import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FlatList} from 'react-native-gesture-handler';

import {SIZES, constants} from '../../constants';

const Item_Width = 120;

const Walkthrough1 = () => {
  const [row1Images, setRow1Images] = React.useState([
    ...constants.walkthrough_01_01_images,
    ...constants.walkthrough_01_01_images,
    ,
  ]);
  const [currentPosition, setCurrentPosition] = React.useState(0);

  const [row2Images, setRow2Images] = React.useState([
    ...constants.walkthrough_01_02_images,
    ...constants.walkthrough_01_02_images,
    ,
  ]);
  const [row2currentPosition, setRow2CurrentPosition] = React.useState(0);

  const row1FlatListRef = React.useRef();
  const row2FlatListRef = React.useRef();

  return (
    <View>
      <FlatList
        ref={row1FlatListRef}
        decelerationRate="fast"
        horizontal
        showsHorizontalScrollIndicator={false}
        listKey="Slider1"
        keyExtractor={(_, index) => `SLider1_${index}`}
        data={row1Images}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                width: Item_Width,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={item}
                style={{
                  width: Item_Width,
                  height: Item_Width,
                }}
              />
            </View>
          );
        }}
      />
    </View>
  );
};

export default Walkthrough1;

const styles = StyleSheet.create({});
