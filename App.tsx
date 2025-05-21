import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';

import FeedPost from './src/components/FeedPost';
const App = () => {
  return (
    <ScrollView style={styles.app}>
      <FeedPost />
      <FeedPost />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  app: {},
});
export default App;
