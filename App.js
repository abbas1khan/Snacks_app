import React from 'react'
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import { colors } from './src/utils/Theme'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import MainAppNavigation from './src/navigation/MainAppNavigation';
import { store } from './src/redux/store';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import persistStore from 'redux-persist/es/persistStore';
import { PersistGate } from 'redux-persist/integration/react';

let persister = persistStore(store)

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.white} barStyle='dark-content' />
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persister}>
              <GestureHandlerRootView>
                <NavigationContainer>
                  <MainAppNavigation />
                </NavigationContainer>
              </GestureHandlerRootView>
            </PersistGate>
          </Provider>
        </SafeAreaView>
      </SafeAreaProvider>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})