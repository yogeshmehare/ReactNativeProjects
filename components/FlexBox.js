/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const FlexBox = () => {
  return (
    <View style={styles.body}>
      <View style={styles.row1}>
        <View style={styles.text1}>
          <Text>1</Text>
        </View>
        <View style={styles.text2}>
          <Text>2</Text>
        </View>
        <View style={styles.text3}>
          <Text>3</Text>
        </View>
      </View>
      <View style={styles.row2}>
        <View style={styles.text4}>
          <Text>4</Text>
        </View>
        <View style={styles.text5}>
          <Text>5</Text>
        </View>
      </View>
      <View style={styles.col1}>
        <View style={styles.text6}>
          <Text>6</Text>
        </View>
        <View style={styles.text7}>
          <Text>7</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#22DD12',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  row1: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#FFAABB',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  text1: {
    flex: 1,
    backgroundColor: '#22DD12',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text2: {
    flex: 2,
    backgroundColor: '#BA1ACC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text3: {
    flex: 3,
    backgroundColor: '#EA4ACB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row2: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  text4: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5FDACB',
  },
  text5: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FACCCB',
  },
  col1: {
    flex: 5,
    flexDirection: 'row',
    backgroundColor: '#CACACB',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  text6: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2FFC32',
  },
  text7: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1422F2',
  },
});

export default FlexBox;
