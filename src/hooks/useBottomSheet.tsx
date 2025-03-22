import { TrueSheet } from "@lodev09/react-native-true-sheet"
import { useRef } from "react"

const useBottomSheet = () => {

  const sheetRef = useRef<TrueSheet>(null)

  const present = async () => {
    await sheetRef.current?.present()
  }

  const dismiss = async () => {
    await sheetRef.current?.dismiss()
  }
  return {
    sheetRef,
    present,
    dismiss
  }
}

export default useBottomSheet