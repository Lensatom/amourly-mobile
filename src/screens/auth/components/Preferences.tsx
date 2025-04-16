import { MultiSelect, SingleSelect, Title } from '@/components/inc'
import React, { useEffect } from 'react'
import { Text, View } from 'tamagui'
import { YStack } from 'tamagui'
import MultiSlider from '@ptomasroos/react-native-multi-slider'
import { PADDING_X, SCREEN_WIDTH } from '@/constants'
import { Platform } from 'react-native'

function Preferences({data, changeData}:any) {

  const handleChangeAge = (values:number[]) => {
    changeData("age_min", values[0])
    changeData("age_max", values[1])
  }

  useEffect(() => {
    handleChangeAge([18, 85])
  }, [])

  return (
    <YStack gap="$6">
      <Title text="Preferences" />
      <YStack gap="$3">
        <Text fow="500">What is your gender?</Text>
        <SingleSelect opts={["male", "female"]} onChange={(value:string) => changeData("gender", value)} />
      </YStack>
      <YStack gap="$3">
        <Text fow="500">Who are you looking for?</Text>
        <MultiSelect opts={["Male", "Female"]} onChange={(value:string[]) => changeData("gender_pref", value)} />
      </YStack>
      <YStack flex={1} ai="center" gap="$2">
        <Text fow="500" w="$full">What age range are you interested in?</Text>
        <MultiSlider
          values={[18, 65]}
          sliderLength={SCREEN_WIDTH - (PADDING_X * 2) - 30}
          selectedStyle={{backgroundColor:'#CD5808', borderRadius: 99}}
          unselectedStyle={{backgroundColor:"#E2E8F0", borderRadius: 99}}
          containerStyle={{alignSelf:'center'}}
          onValuesChange={handleChangeAge}
          markerStyle={{
            ...Platform.select({
              android: {
                height: 25,
                width: 25,
                borderRadius: 50,
                backgroundColor: 'white',
                elevation: 5
              }
            })
          }}
          trackStyle={{
            height: 6
          }}
          min={18}
          max={65}
          step={1}
          enableLabel
        />
      </YStack>
    </YStack>
  )
}

export default Preferences