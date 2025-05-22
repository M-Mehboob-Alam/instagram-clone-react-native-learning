import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import {IComment} from '../../types/models';
interface ICommentProps {
  comment: IComment;
}

const Comment = ({comment}: ICommentProps) => {
  return (
    <View style={styles.comments}>
      <Text style={[styles.text, styles.commentText]}>
        <Text style={styles.bold}>{comment.user.username}</Text>{' '}
        {comment.comment}
      </Text>
      <Icon name="heart-o" size={14} color="green" />
    </View>
  );
};
export default Comment;
