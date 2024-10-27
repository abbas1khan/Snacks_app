import React from 'react'
import { Image, ImageBackground, StyleSheet, TouchableOpacity, View } from 'react-native'
import Animated, { FadeInRight, SlideInDown } from 'react-native-reanimated'
import { colors, fontFamily, sizes } from '../utils/Theme'
import CustomText from './common/CustomText'
import { useNavigation } from '@react-navigation/native'
import { useAppSelector } from '../hooks/useAppSelector'
import { selectCartData } from '../redux/CartSlice'
import { horizontalScale, verticalScale } from '../utils/Scaling'
import CartSVG from '../assets/SVG_Components/CartSVG'

const itemSize = verticalScale(74)

const CartFooter = () => {

    const cartData = useAppSelector(selectCartData)

    const { navigate } = useNavigation()

    return (
        <Animated.View
            entering={SlideInDown.duration(600).springify().damping(18)}
            style={{ width: sizes.width, position: 'absolute', bottom: 0, alignItems: 'center', }}
        >
            <TouchableOpacity
                activeOpacity={1}
                onPressIn={() => { if (cartData?.length > 0) { navigate("CartScreen") } }}
            >
                <ImageBackground
                    resizeMode='stretch'
                    source={require("../assets/images/cartFooterImg.png")}
                    style={{ width: horizontalScale(394), height: verticalScale(126), paddingLeft: horizontalScale(37), paddingRight: horizontalScale(42) }}
                >

                    <View style={{ width: horizontalScale(44), height: 3, borderRadius: 10, backgroundColor: colors.lightGray4, position: "absolute", alignSelf: 'center', top: -1 }} />

                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', }}>

                        <View style={{ width: 44, height: 44, borderRadius: 44, backgroundColor: colors.lightYellow, justifyContent: 'center', alignItems: 'center', }}>
                            {cartData?.length > 0 ?
                                <CustomText fontSize={18} fontFamily={fontFamily.semibold}>
                                    {cartData?.length}
                                </CustomText>
                                :
                                <View style={{ marginBottom: -1 }}>
                                    <CartSVG size={17} color={colors.darkBlack} />
                                </View>
                            }
                        </View>

                        <View style={{ marginLeft: 20, flex: 1 }}>
                            <CustomText fontSize={20} fontFamily={fontFamily.bold} color={colors.white}>
                                {cartData?.length > 0 ? "Cart" : "Your cart is empty"}
                            </CustomText>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            {cartData?.slice(-3)?.map((item, index) => {
                                return (
                                    <Animated.View
                                        key={index}
                                        entering={FadeInRight.duration(600).springify().damping(10)}
                                        style={{ width: itemSize, height: itemSize, borderRadius: itemSize, marginLeft: index > 0 ? -itemSize * 0.4 : 0, backgroundColor: colors.white, justifyContent: 'center', alignItems: 'center', borderWidth: 3, borderColor: colors.darkBlack }}
                                    >
                                        <Image
                                            source={item?.picture}
                                            style={{ width: itemSize * 0.62, height: itemSize * 0.62, resizeMode: 'contain' }}
                                        />
                                    </Animated.View>
                                )
                            })}
                        </View>

                    </View>

                </ImageBackground>
            </TouchableOpacity>
        </Animated.View>
    )
}

export default CartFooter

const styles = StyleSheet.create({})