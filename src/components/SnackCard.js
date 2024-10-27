import React from 'react'
import { Image, StyleSheet, ToastAndroid, TouchableOpacity, View } from 'react-native'
import { colors, fontFamily } from '../utils/Theme'
import CustomText from './common/CustomText'
import CartSVG from '../assets/SVG_Components/CartSVG'
import { useNavigation } from '@react-navigation/native'
import { useAppDispatch } from '../hooks/useAppDispatch'
import { addToCart } from '../redux/CartSlice'
import { horizontalScale, verticalScale } from '../utils/Scaling'

const SnackCard = ({ item, index = 0, large = false }) => {

    const cardWidth = large ? horizontalScale(336) : horizontalScale(172)
    const cardHeight = large ? verticalScale(422) : horizontalScale(217)


    const { navigate } = useNavigation()
    const dispatch = useAppDispatch()


    return (
        <TouchableOpacity
            activeOpacity={1}
            onPress={() => { navigate("SnackSpecificScreen", { snackId: item?._id, item }) }}
            style={{ width: cardWidth, height: cardHeight, borderRadius: large ? 47 : 29, backgroundColor: item.backgroundColor, overflow: 'hidden', ...(!large && { marginHorizontal: 9, marginVertical: 8 }) }}
        >

            <View style={{ marginLeft: cardWidth / 11, marginTop: cardHeight / 10.5, }}>
                <CustomText fontSize={large ? cardWidth / 9.3 : cardWidth / 8.01} fontFamily={fontFamily.bold}>
                    {item.title?.replace(" ", "\n")}
                </CustomText>

                <View style={{ marginTop: large ? 16 : 7, backgroundColor: colors.white, alignSelf: 'flex-start', height: large ? 37 : 19, paddingHorizontal: large ? 16 : 8, justifyContent: 'center', borderRadius: 50 }}>
                    <CustomText fontSize={large ? 13 : 7.15} color={colors.rgbaBlack(0.5)}>
                        {item.category}
                    </CustomText>
                </View>
            </View>

            <View style={{ width: large ? cardWidth - 42 : cardWidth - 20, height: large ? 77 : 39, borderWidth: 1, borderColor: colors.white, borderRadius: 80, position: "absolute", bottom: large ? 18 : 10, alignSelf: 'center', overflow: 'hidden' }}>
                <Image
                    source={item.picture}
                    blurRadius={15}
                    style={{ width: cardWidth / 1.31, height: cardHeight / 1.06, top: large ? -cardWidth / 1.378 : -cardWidth / 1.39, right: (large ? -cardWidth / 5 : -cardWidth / 3.5) + ((index == 1 || index == 2 || index == 9) ? (large ? -20 : -1) : index == 3 ? 20 : (index >= 4 && index <= 8) ? 10 : 0), resizeMode: 'contain', transform: [{ rotate: '32deg' }], position: "absolute", }}
                />

                <View style={{ width: '100%', height: '100%', backgroundColor: colors.rgbaWhite(0.6), position: 'absolute' }} />

                <View style={{ height: '100%', justifyContent: 'center', marginLeft: large ? 30 : 18 }}>
                    <CustomText fontSize={large ? 18.67 : 10.5} fontFamily={fontFamily.bold}>
                        $ {item.price}
                    </CustomText>
                </View>

                <TouchableOpacity
                    onPress={() => {
                        dispatch(addToCart(item))
                        if (!large) {
                            ToastAndroid.show(item?.title + " added to cart", ToastAndroid.SHORT)
                        }
                    }}
                    style={{ width: large ? 86 : 44, height: '100%', padding: large ? 5.83 : 2.98, position: 'absolute', right: 0, overflow: 'hidden', zIndex: 10 }}
                >
                    <View style={{ width: '100%', height: '100%', backgroundColor: colors.black, borderRadius: 80, justifyContent: 'center', alignItems: 'center', }}>
                        <CartSVG size={large ? 26.83 : 13.7} />
                    </View>
                </TouchableOpacity>
            </View>

            <Image
                source={item.picture}
                style={[styles.productImage, { width: cardWidth / 1.31, height: cardHeight / 1.06, right: -25 + ((index == 1 || index == 2 || index == 9) ? (large ? -20 : -1) : index == 3 ? 20 : (index >= 4 && index <= 8) ? 10 : 0), bottom: large ? -26 : -20 }]}
            />

        </TouchableOpacity>
    )
}

export default React.memo(SnackCard)

const styles = StyleSheet.create({
    productImage: {
        resizeMode: 'contain',
        transform: [{ rotate: '32deg' }],
        position: 'absolute',
        zIndex: -1,
        right: -70,
    },
})

