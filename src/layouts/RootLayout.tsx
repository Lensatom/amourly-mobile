import UserProvider from '@/providers/UserProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import { TamaguiProvider } from 'tamagui';
import config from '../../tamagui.config';

export const queryClient = new QueryClient();   

function RootLayout() {
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
    Inknut: require('../../assets/fonts/Inknut_Antiqua/InknutAntiqua-Medium.ttf')
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);


  if (!loaded) return null
  return (
    <QueryClientProvider client={queryClient}>
      <TamaguiProvider config={config} defaultTheme='light'>
        <UserProvider>
            {/* <StatusBar /> */}
            {/* <SafeAreaView style={{ flex: 1 }}> */}
              <Stack screenOptions={{headerShown: false}} />
            {/* </SafeAreaView> */}
        </UserProvider>
      </TamaguiProvider>
    </QueryClientProvider>
  );
}

export default RootLayout