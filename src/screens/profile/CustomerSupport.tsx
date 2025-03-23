import { Button } from '@/components/base'
import { Container, Header } from '@/components/inc'
import React from 'react'
import { Image } from 'react-native'
import { Text } from 'tamagui'
const CustomerSupportImage = require("../../../assets/images/customer-support.png")

function CustomerSupport() {
  return (
    <>
      <Header title='Customer Support' />
      <Container ai="center" gap="$2">
        <Image source={CustomerSupportImage} style={{width: 300, height: 300, resizeMode: "contain"}} />
        <Text fos="$6" ta="center">Need Help? We're Here For You</Text>
        <Text fos="$3" color="$grey.8" ta="center" lh={18}>
          Got a question, concern, or feedback? Our support team is ready to assist you. Whether it's account issues, subscription inquiries, or just a little guidance, we’re happy to help!
        </Text>
        <Button text="Contact Support" pill w="$full" mt="$6" />
      </Container>
    </>
  )
}

export default CustomerSupport