import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors, fontFamily } from '../utils/Theme'
import { snacksData } from '../constants/SnacksData'
import SnackCard from '../components/SnackCard'
import { useNavigation, useRoute } from '@react-navigation/native'
import CustomText from '../components/common/CustomText'
import ChevronLeftSVG from '../assets/SVG_Components/ChevronLeftSVG'
import FilterSVG from '../assets/SVG_Components/FilterSVG'
import MasonryList from '@react-native-seoul/masonry-list'
import Animated, { FadeInUp } from 'react-native-reanimated'
import { horizontalScale } from '../utils/Scaling'

const AllCollectionsScreen = () => {

    const route = useRoute()
    const collectionName = route?.params?.collectionName || ""

    const navigation = useNavigation()

    return (
        <View style={{ flex: 1, backgroundColor: colors.white, }}>

            {/* Title */}
            <View style={{ marginHorizontal: horizontalScale(30), marginTop: 16, marginBottom: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>

                <CustomText fontSize={36} fontFamily={fontFamily.bold}>
                    {collectionName}{"\n"}
                    <CustomText fontSize={36}>
                        {"Collections"}
                    </CustomText>
                </CustomText>

                <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => { navigation.goBack() }}
                    style={{ width: 55, height: 80, borderWidth: 4, borderColor: colors.lightGray, borderRadius: 80, justifyContent: 'center', alignItems: 'center', }}
                >
                    <ChevronLeftSVG />
                </TouchableOpacity>

            </View>


            {/* Snacks List */}
            <MasonryList
                data={snacksData}
                numColumns={2}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderSnackCard}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 20 }}
            />

        </View>
    )
}

export default AllCollectionsScreen

const renderSnackCard = ({ item, i }) => {
    return (
        <Animated.View
            entering={FadeInUp.delay(i * 100).duration(600).springify().damping(12)}
        >
            {i == 1 &&
                <View style={{ height: 49, marginHorizontal: 9, marginVertical: 8, paddingRight: 3.73, paddingLeft: 20, backgroundColor: colors.lightGray, borderRadius: 40, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                    <CustomText fontFamily={fontFamily.bold}>
                        {"245 "}
                        <CustomText>
                            {"Items"}
                        </CustomText>
                    </CustomText>

                    <View style={{ width: 45, height: 41, borderRadius: 40, backgroundColor: colors.white, justifyContent: 'center', alignItems: 'center', }}>
                        <FilterSVG />
                    </View>
                </View>
            }

            <SnackCard
                item={item}
                index={i}
            />
        </Animated.View>
    )
}

const styles = StyleSheet.create({})