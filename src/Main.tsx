import { Redirect } from 'expo-router'
import React, { useContext } from 'react'
import { UserContext } from './contexts'

function Main() {
  const { user } = useContext(UserContext)
  const href = user?.email ? "/profile-setup" : "/login-register"

  console.log(user)
  
  return <Redirect href={href} />
}

export default Main