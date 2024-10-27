import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { colors, fontFamily, sizes } from '../utils/Theme'
import { snacksData, snackTypes } from '../constants/SnacksData'
import HamburgerSVG from '../assets/SVG_Components/HamburgerSVG'
import Carousel from 'react-native-snap-carousel';
import SnackCard from '../components/SnackCard'
import ArrowSVG from '../assets/SVG_Components/ArrowSVG'
import CustomText from '../components/common/CustomText'
import { useNavigation } from '@react-navigation/native'
import Animated, { FadeInRight } from 'react-native-reanimated'
import ChocoSVG from '../assets/SVG_Components/ChocoSVG'
import ChipsSvg from '../assets/SVG_Components/ChipsSvg'
import CandySVG from '../assets/SVG_Components/CandySVG'
import CartFooter from '../components/CartFooter'
import { horizontalScale, verticalScale } from '../utils/Scaling'

const HomeScreen = () => {

    return (
        <View style={{ flex: 1, backgroundColor: colors.white, }}>

            {/* Header Title */}
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginLeft: horizontalScale(44), marginRight: horizontalScale(38), marginTop: 16 }}>
                <CustomText fontSize={30}>
                    {"Order From The\nBest Of "}
                    <CustomText fontSize={30} fontFamily={fontFamily.bold}>
                        {"Snacks"}
                    </CustomText>
                </CustomText>

                <View style={{ height: 85, borderRadius: 38, borderColor: colors.lightGray, justifyContent: 'center', alignItems: 'center' }}>
                    <HamburgerSVG />
                </View>
            </View>


            {/* Collections Types */}
            <RenderCollections />


            {/* Snacks Card Slider */}
            <View>
                <Carousel
                    data={snacksData}
                    keyExtractor={(item, index) => item?._id}
                    sliderWidth={sizes.width}
                    renderItem={renderSnackCard}
                    itemWidth={horizontalScale(336)}
                    contentContainerCustomStyle={{ alignItems: 'center', }}
                    inactiveSlideOpacity={1}
                    // autoplay={true}
                    autoplayInterval={2500}
                />
            </View>


            <CartFooter />

        </View>
    )
}

export default HomeScreen



const RenderCollections = () => {

    const [selectedTypeIndex, setSelectedTypeIndex] = useState(1)

    const navigation = useNavigation()
    const { navigate } = useNavigation()

    return (
        <>
            {/* Collections Types */}
            <View style={{ flexDirection: 'row', paddingLeft: horizontalScale(39), paddingRight: horizontalScale(33), gap: 8, marginTop: 22, marginBottom: 24 }}>
                {snackTypes.map((item, index) => {
                    const isSelected = selectedTypeIndex == index
                    return (
                        <Animated.View
                            key={index}
                            entering={FadeInRight.delay(index * 200).duration(1000).springify().damping(14)}
                            style={{ ...(!isSelected && { flex: 1 }) }}
                        >
                            <TouchableOpacity
                                activeOpacity={1}
                                disabled={isSelected}
                                onPress={() => setSelectedTypeIndex(index)}
                                style={{ height: 60, ...(isSelected ? { paddingHorizontal: index == 0 ? horizontalScale(28) : horizontalScale(22) } : { flex: 1 }), borderRadius: 38, backgroundColor: isSelected ? colors.darkBlack : colors.lightGray1, }}
                            >
                                <Animated.View
                                    {...(isSelected && { layout: FadeInRight.duration(200).springify().damping(14) })}
                                    style={{ height: '100%', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}
                                >
                                    {index == 1 ?
                                        <ChocoSVG color={isSelected ? colors.lightYellow : colors.black} />
                                        :
                                        index == 2 ?
                                            <ChipsSvg color={isSelected ? colors.lightYellow : colors.black} />
                                            :
                                            index == 3 ?
                                                <CandySVG color={isSelected ? colors.lightYellow : colors.black} />
                                                : null
                                    }

                                    {(index == 0 || isSelected) &&
                                        <CustomText
                                            fontFamily={fontFamily.medium}
                                            color={isSelected ? colors.white : colors.black}
                                            style={{ marginLeft: index == 0 ? 0 : 8 }}
                                        >
                                            {item}
                                        </CustomText>
                                    }
                                </Animated.View>
                            </TouchableOpacity>
                        </Animated.View>
                    )
                })}
            </View>


            {/* Collections Text */}
            <TouchableOpacity
                activeOpacity={1}
                onPress={() => { navigate("AllCollectionsScreen", { collectionName: snackTypes[selectedTypeIndex] }) }}
                hitSlop={{ left: 20, right: 20, top: 20, bottom: 20 }}
                style={{ marginLeft: horizontalScale(44), marginRight: horizontalScale(55), marginBottom: verticalScale(30), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}
            >
                <CustomText fontSize={25}>
                    {snackTypes[selectedTypeIndex]}{" "}
                    <CustomText fontSize={25} fontFamily={fontFamily.bold}>
                        {"Collections"}
                    </CustomText>
                </CustomText>

                <ArrowSVG />
            </TouchableOpacity>
        </>
    )
}



const renderSnackCard = ({ item, index }) => {
    return (
        <Animated.View
            entering={FadeInRight.delay(index * 200).duration(800).springify().damping(12)}
        >
            <SnackCard
                item={item}
                index={index}
                large={true}
            />
        </Animated.View>
    )
}



const styles = StyleSheet.create({})