import { StyleSheet } from "react-native";
import { moderateScale, moderateVerticalScale } from "react-native-size-matters";
import fonts from "../../theme/fonts";
import colors from "../../theme/colors";

const styles = StyleSheet.create({
    post: {},
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: moderateScale(10),
    },
    userAvatar: {
        width: moderateScale(40),
        height: moderateVerticalScale(40),
        borderRadius: moderateScale(20),
        marginRight: 10,
        aspectRatio: 1,
    },
    username: {
        fontWeight: fonts.weight.bold,
        color: colors.black,
    },
    threeDots: {
        marginLeft: 'auto',
        color: colors.black,
    },
    postImage: {
        width: '100%',
        aspectRatio: 1,
    },
    footer: {
        padding: moderateScale(10),
    },
    iconContainer: {
        flexDirection: 'row',
        paddingHorizontal: moderateScale(10),
        alignItems: 'center',
    },
    icon: {
        marginHorizontal: moderateScale(5),
    },
    liked: {
        color: colors.black,
        paddingVertical: moderateVerticalScale(10),
    },
    bold: {
        fontWeight: fonts.weight.bold,
    },
    text: {
        color: colors.black,
    },
    comments: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    commentText: {
        flex: 1,
    },
    viewAllComments: {
        marginTop: moderateVerticalScale(10),
        paddingBottom: 0,
    },
});

export default styles;