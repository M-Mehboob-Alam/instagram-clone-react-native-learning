import fonts from '../../theme/fonts';
import colors from '../../theme/colors';
import { moderateVerticalScale } from 'react-native-size-matters';
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
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