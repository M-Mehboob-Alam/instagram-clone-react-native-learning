import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';

import FeedPost from './src/components/FeedPost';

const post = {
  id: '1',
  createdAt: '19 December 2021',
  image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic repellendus unde blanditiis.',
  user: {
    image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
    username: 'vadimnotjustdev',
  },
  noComments: 11,
  noLikes: 33,
  comments: [
    {
      id: '1',
      comment: 'Hello there',
      user: {username: 'vadimnotjustdev'},
    },
    {
      id: '2',
      comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      user: {username: 'vadimnotjustdev'},
    },
  ],
};
const post1 = {
  id: '1',
  createdAt: '19 December 2021',
  image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic repellendus unde blanditiis.',
  user: {
    image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
    username: 'vadimnotjustdev',
  },
  noComments: 12,
  noLikes: 33,
  comments: [
    {
      id: '1',
      comment: 'Hello there',
      user: {username: 'vadimnotjustdev'},
    },
    {
      id: '2',
      comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      user: {username: 'vadimnotjustdev'},
    },
  ],
};

const App = () => {
  return (
    <ScrollView style={styles.app}>
      <FeedPost post={post} />
      <FeedPost post={post1} />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  app: {},
});
export default App;
