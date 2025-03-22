export const getTime = (timestamp:any) => {
  const time = new Date(timestamp).toLocaleTimeString(
    [],
    {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    }
  )

  return time
}