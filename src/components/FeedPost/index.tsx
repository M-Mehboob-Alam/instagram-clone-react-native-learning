import React from 'react';
import {Image, Text, View} from 'react-native';
import colors from '../../theme/colors';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';
import Comment from '../Comment';
import {IPost} from '../../types/models';

interface IFeedPost {
  post: IPost;
}

const App = ({post}: IFeedPost) => {
  return (
    <View style={styles.post}>
      <View style={styles.header}>
        <Image source={{uri: post.user.image}} style={styles.userAvatar} />
        <Text style={styles.username}>{post.user.username}</Text>
        <Icon name="ellipsis-h" style={styles.threeDots} size={16} />
      </View>
      <Image source={{uri: post.image}} style={styles.postImage} />
      <View style={styles.footer}>
        <View style={styles.iconContainer}>
          <Icon
            name="heart-o"
            size={24}
            color={colors.black}
            style={styles.icon}
          />
          <Icon
            name="comment-o"
            size={24}
            color={colors.black}
            style={styles.icon}
          />
          <Icon
            name="bookmark-o"
            size={24}
            color={colors.black}
            style={{marginLeft: 'auto'}}
          />
        </View>
        <Text style={styles.liked}>
          Liked by <Text style={styles.bold}>{post.user.username}</Text> and{' '}
          <Text style={styles.bold}>{post.noLikes} others</Text>
        </Text>
        <Text style={styles.text}>{post.description}</Text>
        {/* comments */}
        <Text style={styles.viewAllComments}>
          View All {post.noComments} Comments
        </Text>
        {post.comments.map(comment => (
          <Comment comment={comment} key={comment.id} />
        ))}

        <Text> {post.createdAt}</Text>
      </View>
    </View>
  );
};

export default App;
