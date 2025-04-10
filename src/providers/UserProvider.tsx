// import { useQueryUser } from '@/api/user/queries'
import { UserContext } from '@/contexts'
import React, { useEffect, useState } from 'react'

function UserProvider({children}:{children: React.ReactNode}) {
  const [user, setUser] = useState<any>(null)

  // const { fetchUser } = useQueryUser()
  // const { data, isLoading, refetch } = fetchUser

  console.log(user)

  // useEffect(() => {
  //   setUser(data)
  // }, [data])

  return (
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider