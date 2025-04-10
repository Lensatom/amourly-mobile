import { Title } from '@/components/inc'
import React, { useState } from 'react'
import { Text, YStack } from 'tamagui'
import DateTimePicker from '@react-native-community/datetimepicker';
import { Button, Icon } from '@/components/base';
import { XStack } from 'tamagui';
import { Pressable } from 'react-native';
import { formatDate } from '@/helpers';

function Birthday() {
  const [datePickerOpen, setDatePickerOpen] = useState<boolean>(false);
  const [birthday, setBirthday] = useState(null)

  const today = new Date();
  const maxDate = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());

  const handleSelectDate = (date:any) => {
    setDatePickerOpen(false)
    setBirthday(date.nativeEvent.timestamp);
  }

  return (
    <YStack gap="$6" ai="flex-start">
      <Title text="When is your birthday?" />
      <Pressable onPress={() => setDatePickerOpen(true)}>
        <XStack gap="$2" alignItems="center" borderWidth={1} borderColor="$grey.7" py="$2.5" px="$4" borderRadius="$4">
          <Icon name="cake" padding={0} size={20} />
          <Text opacity={0.6} fos="$3">{birthday ? formatDate(birthday) : "DD / MM / YYYY"}</Text>
        </XStack>
      </Pressable>
      {datePickerOpen && (
        <DateTimePicker
          value={maxDate}
          maximumDate={maxDate}
          display='spinner'
          onChange={handleSelectDate}
        />
      )}
    </YStack>
  )
}

export default Birthday