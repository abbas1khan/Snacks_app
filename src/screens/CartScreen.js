import { Image, ImageBackground, StyleSheet, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors, fontFamily, sizes } from '../utils/Theme'
import CustomText from '../components/common/CustomText'
import { useAppSelector } from '../hooks/useAppSelector'
import { deleteAllItemsFromCart, selectCartData } from '../redux/CartSlice'
import { useNavigation } from '@react-navigation/native'
import Animated, { FadeInDown, FadeInLeft, SlideInLeft } from 'react-native-reanimated'
import { FlatList } from 'react-native-gesture-handler'
import TripleArrowSVG from '../assets/SVG_Components/TripleArrowSVG'
import { horizontalScale, verticalScale } from '../utils/Scaling'
import useOnScreenFocus from '../hooks/useOnScreenFocus'
import { useAppDispatch } from '../hooks/useAppDispatch'

const CartScreen = () => {

    const cartData = useAppSelector(selectCartData)

    const navigation = useNavigation()
    const { navigate } = useNavigation()
    const dispatch = useAppDispatch()



    const RenderCartItem = ({ item, index }) => {

        const containerSize = 77

        return (
            <Animated.View
                entering={FadeInDown.delay(index * 100).duration(600).springify().damping(12)}
            >
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => { navigate("SnackSpecificScreen", { snackId: item?._id, item }) }}
                    style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: horizontalScale(32), marginBottom: 26 }}
                >

                    <View style={{ width: containerSize, height: containerSize, borderRadius: containerSize, backgroundColor: colors.white, justifyContent: 'center', alignItems: 'center', }}>
                        <Image
                            source={item.picture}
                            style={{ width: containerSize * 0.59, height: containerSize * 0.59, resizeMode: 'contain' }}
                        />
                    </View>

                    <View style={{ flex: 1, marginHorizontal: horizontalScale(20) }}>
                        <CustomText fontSize={16} fontFamily={fontFamily.bold} color={colors.white} numberOfLines={1}>
                            {item.title}
                        </CustomText>
                        <CustomText fontSize={13} color={colors.rgbaWhite(0.4)} numberOfLines={1} style={{ marginTop: 3 }}>
                            {item.subTitle}
                        </CustomText>
                    </View>

                    <View style={{ paddingHorizontal: 14, paddingTop: 6.44, paddingBottom: 7.2, backgroundColor: colors.white, borderRadius: 50, justifyContent: 'center', alignItems: 'center', }}>
                        <CustomText fontSize={14} fontFamily={fontFamily.bold}>
                            {`$ ${(Number(item?.price) * (item?.quantity)).toFixed(2).padStart(5, '0')}`}
                        </CustomText>
                    </View>

                </TouchableOpacity>
            </Animated.View>
        )
    }

    const RenderTotalAmount = () => {

        const totalAmount = (cartData?.reduce((total, item) => total + (item?.price * item?.quantity), 0) + 4)?.toFixed(2)

        return (
            <>
                {cartData?.length > 0 ?
                    <View style={{ alignItems: 'center', }}>

                        <Animated.View
                            entering={FadeInDown.delay(cartData?.length * 100).duration(1000).springify().damping(14)}
                        >
                            <ImageBackground
                                source={require("../assets/images/totalAmountBackgroundImg.png")}
                                resizeMode='stretch'
                                style={{ width: horizontalScale(375), height: 188, marginTop: verticalScale(24), borderRadius: horizontalScale(50), overflow: 'hidden', justifyContent: 'center', }}
                            >
                                <View style={{ paddingHorizontal: horizontalScale(35), zIndex: 2 }}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                                        <CustomText>
                                            Delivery Amount
                                        </CustomText>

                                        <CustomText fontSize={18} fontFamily={fontFamily.bold}>
                                            $04.00
                                        </CustomText>
                                    </View>

                                    <View style={{ height: 1, borderRadius: 5, backgroundColor: colors.rgbaBlack(0.3), marginTop: 12, marginBottom: 18 }} />

                                    <CustomText fontSize={20} style={{ marginBottom: 2, zIndex: 1 }}>
                                        Total Amount
                                    </CustomText>

                                    <CustomText fontSize={34} fontFamily={fontFamily.bold}>
                                        USD  {totalAmount}
                                    </CustomText>
                                </View>

                                {/* <View style={{ position: "absolute", zIndex: 1, right: 0, bottom: -20, flexDirection: 'row' }}>
                                    {cartData?.slice(0, 3)?.map((item, index, array) => (
                                        <View key={index}
                                            style={{ zIndex: array?.length - index }}
                                        >
                                            <Image
                                                source={item.picture}
                                                style={{ width: horizontalScale(85), height: verticalScale(123), resizeMode: 'contain', marginLeft: -horizontalScale(70) }}
                                            />
                                        </View>
                                    ))}
                                </View> */}
                            </ImageBackground>
                        </Animated.View>

                        <Animated.View
                            entering={FadeInDown.delay(cartData?.length * 100).duration(600).springify().damping(14)}
                            style={{ width: horizontalScale(375), height: 90, marginTop: verticalScale(50), marginBottom: verticalScale(34), paddingLeft: horizontalScale(47), backgroundColor: colors.white, borderRadius: 90, flexDirection: 'row', justifyContent: 'space-between', overflow: 'hidden' }}
                        >
                            <Animated.View
                                entering={FadeInLeft.delay(cartData?.length - 1 * 200).duration(1000).springify().damping(12)}
                                style={{ height: '100%', justifyContent: 'center', }}
                            >
                                <CustomText fontSize={20} fontFamily={fontFamily.bold}>
                                    Make Payment
                                </CustomText>
                            </Animated.View>

                            <Animated.View
                                entering={SlideInLeft.delay(cartData?.length - 1 * 100).duration(600).springify().damping(18)}
                                style={{ height: '100%', paddingVertical: 7, paddingHorizontal: 8 }}
                            >
                                <TouchableOpacity
                                    activeOpacity={1}
                                    onPress={() => {
                                        navigation.goBack()
                                        ToastAndroid.show("Payment Successful", ToastAndroid.SHORT)
                                        dispatch(deleteAllItemsFromCart())
                                    }}
                                    style={{ width: horizontalScale(104), flex: 1, backgroundColor: colors.lightYellow, borderRadius: 50, justifyContent: 'center', alignItems: 'center', }}
                                >
                                    <TripleArrowSVG size={horizontalScale(40)} />
                                </TouchableOpacity>
                            </Animated.View>
                        </Animated.View>

                    </View>
                    : null
                }
            </>
        )
    }



    useOnScreenFocus(() => {
        if (cartData?.length <= 0) {
            navigation.goBack()
        }
    }, [cartData])

    return (
        <View style={{ flex: 1, backgroundColor: colors.white, }}>

            <View style={{ flex: 1, paddingLeft: horizontalScale(37), paddingRight: horizontalScale(42), paddingBottom: 8, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <CustomText fontSize={42} fontFamily={fontFamily.bold}>
                    Cart
                </CustomText>

                <View style={{ width: 44, height: 44, borderRadius: 44, backgroundColor: colors.lightYellow, justifyContent: 'center', alignItems: 'center', }}>
                    <CustomText fontSize={18} fontFamily={fontFamily.semibold}>
                        {cartData?.length}
                    </CustomText>
                </View>
            </View>

            <ImageBackground
                source={require("../assets/images/cartBackgroundImg.png")}
                style={{ width: '100%', height: verticalScale(785) }}
                resizeMode='stretch'
            >

                <View style={{ width: horizontalScale(44), height: 3, borderRadius: 10, backgroundColor: colors.lightGray4, position: "absolute", alignSelf: 'center', top: -2, zIndex: 10 }} />

                <FlatList
                    data={cartData}
                    keyExtractor={(item, index) => item?._id}
                    nestedScrollEnabled={true}
                    showsVerticalScrollIndicator={false}
                    renderItem={RenderCartItem}
                    ListFooterComponent={RenderTotalAmount}
                    contentContainerStyle={{ paddingTop: 34 }}
                />

            </ImageBackground>
        </View>
    )
}

export default CartScreen

const styles = StyleSheet.create({})