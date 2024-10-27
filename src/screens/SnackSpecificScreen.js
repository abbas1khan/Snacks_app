import React, { useEffect, useState } from 'react'
import { Image, ImageBackground, StyleSheet, TouchableOpacity, View } from 'react-native'
import CustomStatusBar from '../components/common/CustomStatusBar'
import { colors, fontFamily } from '../utils/Theme'
import { setBackgroundColorAsync } from 'expo-navigation-bar'
import useOnScreenBlur from '../hooks/useOnScreenBlur'
import { useAppSelector } from '../hooks/useAppSelector'
import { addToCart, decreaseQuantity, deleteItemFromCart, increaseQuantity, selectCartData } from '../redux/CartSlice'
import { useAppDispatch } from '../hooks/useAppDispatch'
import { useNavigation, useRoute } from '@react-navigation/native'
import { horizontalScale, verticalScale } from '../utils/Scaling'
import CustomText from '../components/common/CustomText'
import ChevronLeftSVG from '../assets/SVG_Components/ChevronLeftSVG'
import Animated, { FadeIn, FadeInLeft, FadeInRight, SlideInDown, SlideInLeft, SlideInRight } from 'react-native-reanimated'
import PlusSVG from '../assets/SVG_Components/PlusSVG'
import MinusSVG from '../assets/SVG_Components/MinusSVG'
import CartSVG from '../assets/SVG_Components/CartSVG'
import DeleteSVG from '../assets/SVG_Components/DeleteSVG'

const SnackSpecificScreen = () => {


    const route = useRoute()
    const snackId = route?.params?.snackId || ""
    const item = route?.params?.item || ""

    const allCartData = useAppSelector(selectCartData)
    const cartData = allCartData?.find((item) => item?._id === snackId) || null
    const data = cartData || item

    const [isInCart, setIsInCart] = useState(!!cartData)
    const [quantity, setQuantity] = useState(cartData?.quantity ?? 1)


    const dispatch = useAppDispatch()
    const navigation = useNavigation()



    function addItemToCart() {
        setIsInCart(true)
        dispatch(addToCart({ ...data, quantity: quantity }))
    }

    function removeFromCart() {
        setIsInCart(false)
        dispatch(deleteItemFromCart(snackId))
    }



    useEffect(() => {
        setBackgroundColorAsync(colors.lightGray3)
    }, [])
    useOnScreenBlur(() => {
        setBackgroundColorAsync(colors.white)
    })

    return (
        <View style={{ flex: 1, backgroundColor: colors.lightGray3, }}>
            <CustomStatusBar backgroundColor={colors.lightGray3} />


            {/* Title */}
            <View style={{ marginTop: 16, marginBottom: 16, marginLeft: horizontalScale(37), marginRight: horizontalScale(30), }}>
                <View style={{ marginBottom: 4, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Animated.View
                        entering={FadeInLeft.delay(100).duration(600).springify().damping(14)}
                    >
                        <CustomText fontSize={36}>
                            {data?.title?.split(" ")[0]}{"\n"}
                            <CustomText fontSize={36} fontFamily={fontFamily.bold}>
                                {data?.title?.split(" ")[1]}
                            </CustomText>
                        </CustomText>
                    </Animated.View>

                    <Animated.View
                        entering={FadeInRight.duration(600).springify().damping(16)}
                    >
                        <TouchableOpacity
                            activeOpacity={1}
                            onPress={() => { navigation.goBack() }}
                            style={{ width: 55, height: 80, borderWidth: 4, borderColor: colors.lightGray, borderRadius: 80, justifyContent: 'center', alignItems: 'center', }}
                        >
                            <ChevronLeftSVG />
                        </TouchableOpacity>
                    </Animated.View>
                </View>

                <Animated.View
                    entering={FadeInLeft.delay(100).duration(600).springify().damping(14)}
                >
                    <CustomText fontSize={18} color={colors.rgbaBlack(0.4)}>
                        {data?.subTitle}
                    </CustomText>
                </Animated.View>
            </View>


            {/* Image */}
            <View style={{ marginTop: verticalScale(20) }}>
                <Animated.View
                    entering={SlideInDown.duration(1000).springify().damping(16)}
                >
                    <Image
                        source={data?.picture}
                        style={{ width: "100%", height: verticalScale(380), resizeMode: 'contain', alignSelf: 'center' }}
                    />
                </Animated.View>
            </View>


            <View style={{ flexDirection: 'row', marginTop: -8 }}>
                <Animated.View
                    entering={SlideInLeft.duration(600).springify().damping(16)}
                >
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={() => {
                            if (isInCart) {
                                dispatch(increaseQuantity(snackId))
                            }
                            setQuantity(quantity + 1)
                        }}
                    >
                        <ImageBackground
                            source={require("../assets/images/incrementBackgroundImg.png")}
                            resizeMode='stretch'
                            style={{ width: horizontalScale(88), height: verticalScale(210), justifyContent: 'center', alignItems: 'center', paddingTop: 8 }}
                        >
                            <PlusSVG />
                        </ImageBackground>
                    </TouchableOpacity>
                </Animated.View>

                <Animated.View
                    entering={SlideInDown.duration(1000).springify().damping(16)}
                    style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}
                >
                    <CustomText fontSize={verticalScale(46)} fontFamily={fontFamily.bold}>
                        {quantity < 10 ? "0" + quantity : quantity}
                    </CustomText>

                    <View style={{ width: horizontalScale(150), height: verticalScale(65), marginTop: 2, marginBottom: -4, borderRadius: 80, backgroundColor: colors.lightYellow, justifyContent: 'center', alignItems: 'center', }}>
                        <CustomText fontSize={verticalScale(24)} fontFamily={fontFamily.bold}>
                            {`$ ${(Number(data?.price) * quantity).toFixed(2).padStart(5, '0')}`}
                        </CustomText>
                    </View>
                </Animated.View>

                <Animated.View
                    entering={SlideInRight.duration(600).springify().damping(16)}
                >
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={() => {
                            if (isInCart) {
                                if (quantity > 1) {
                                    dispatch(decreaseQuantity(snackId))
                                } else {
                                    removeFromCart()
                                }
                            }
                            setQuantity(quantity > 1 ? quantity - 1 : 1)
                        }}
                    >
                        <ImageBackground
                            source={require("../assets/images/incrementBackgroundImg.png")}
                            resizeMode='stretch'
                            style={{ width: horizontalScale(88), height: verticalScale(210), transform: [{ scaleX: -1 }], justifyContent: 'center', alignItems: 'center', paddingTop: 8 }}
                        >
                            <MinusSVG />
                        </ImageBackground>
                    </TouchableOpacity>
                </Animated.View>
            </View>


            <Animated.View
                entering={SlideInDown.duration(1000).springify().damping(16)}
                style={{ width: horizontalScale(356), height: 90, paddingLeft: !isInCart ? horizontalScale(47) : 0, backgroundColor: colors.white, borderRadius: 90, alignSelf: 'center', overflow: 'hidden', zIndex: 2 }}
            >
                <View style={{ flex: 1, flexDirection: 'row', ...(!isInCart && { justifyContent: 'space-between' }) }}>
                    {isInCart ?
                        <Animated.View
                            entering={SlideInRight.duration(100).springify().damping(18)}
                            style={{ height: '100%', paddingVertical: 7, paddingLeft: 8, zIndex: 2 }}
                        >
                            <TouchableOpacity
                                activeOpacity={1}
                                onPress={() => { removeFromCart() }}
                                style={{ width: horizontalScale(90), flex: 1, backgroundColor: colors.lightYellow, borderRadius: 50, justifyContent: 'center', alignItems: 'center', }}
                            >
                                <View style={{}}>
                                    <DeleteSVG size={verticalScale(26)} />
                                </View>
                            </TouchableOpacity>
                        </Animated.View>
                        : null
                    }

                    <View style={{ height: '100%', justifyContent: 'center', ...(isInCart && { marginLeft: 20 }) }}>
                        {isInCart ?
                            <Animated.View
                                layout={FadeIn.delay(100).duration(800)}
                            >
                                <CustomText fontSize={18} fontFamily={fontFamily.bold}>
                                    Remove From Cart
                                </CustomText>
                            </Animated.View>
                            :
                            <Animated.View
                                layout={FadeIn.delay(100).duration(800)}
                            >
                                <CustomText fontSize={20} fontFamily={fontFamily.bold}>
                                    Add To Cart
                                </CustomText>
                            </Animated.View>
                        }
                    </View>

                    {!isInCart ?
                        <Animated.View
                            entering={SlideInLeft.duration(100).springify().damping(18)}
                            style={{ height: '100%', paddingVertical: 7, paddingHorizontal: 8, zIndex: 2 }}
                        >
                            <TouchableOpacity
                                activeOpacity={1}
                                onPress={() => { addItemToCart() }}
                                style={{ width: horizontalScale(104), flex: 1, backgroundColor: colors.lightYellow, borderRadius: 50, justifyContent: 'center', alignItems: 'center', }}
                            >
                                <CartSVG size={horizontalScale(32)} color={colors.darkBlack} />
                            </TouchableOpacity>
                        </Animated.View>
                        : null
                    }
                </View>
            </Animated.View>


        </View>
    )
}

export default SnackSpecificScreen

const styles = StyleSheet.create({})