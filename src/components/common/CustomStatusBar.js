import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { Fragment } from 'react'
import { useIsFocused } from '@react-navigation/native'

const CustomStatusBar = ({ backgroundColor, textColor = "dark" }) => {

    const isFocused = useIsFocused()
    const barStyle = textColor === "dark" ? "dark-content" : "light-content"

    return (
        <Fragment>
            {isFocused &&
                <StatusBar backgroundColor={backgroundColor} barStyle={barStyle} />
            }
        </Fragment>
    )
}

export default CustomStatusBar

const styles = StyleSheet.create({})