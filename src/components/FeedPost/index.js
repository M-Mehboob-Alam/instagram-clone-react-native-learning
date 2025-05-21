import React from 'react';
import { Image, Text, View } from 'react-native';
import colors from '../../theme/colors';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';
const App = () => {
    return (
        <View style={styles.post}>
            <View style={styles.header}>
                <Image
                    source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }}
                    style={styles.userAvatar}
                />
                <Text style={styles.username}>Alumi</Text>
                <Icon name="ellipsis-h" style={styles.threeDots} size={16} />
            </View>
            <Image
                source={{ uri: 'https://picsum.photos/200' }}
                style={styles.postImage}
            />
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
                        style={{ marginLeft: 'auto' }}
                    />
                </View>
                <Text style={styles.liked}>
                    123 liked by <Text style={styles.bold}>alumi</Text> and{' '}
                    <Text style={styles.bold}>65 others</Text>
                </Text>
                <Text style={styles.text}>
                    <Text style={styles.bold}>Lorem</Text> ipsum dolor sit amet
                    consectetur adipisicing elit. Magni at, totam qui tenetur quos
                    voluptate consectetur debitis voluptatum reprehenderit ab consequatur
                    officia illo, adipisci dolores labore facilis neque. Nam, esse.
                </Text>
                {/* comments */}
                <Text style={styles.viewAllComments}>View All 66 Comments</Text>
                <View style={styles.comments}>
                    <Text style={[styles.text, styles.commentText]}>
                        <Text style={styles.bold}>alumi</Text> Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Lorem, ipsum dolor sit amet explicabo.
                    </Text>
                    <Icon name="heart-o" size={14} color={{ color: 'green' }} />
                </View>
                <Text> 19 December 2021</Text>
            </View>
        </View>
    );
};

export default App;
