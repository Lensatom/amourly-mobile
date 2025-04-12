import { useQueryUser } from '@/api/queries'
import { Loader } from '@/components/inc'
import { UserContext } from '@/contexts'
import React, { useEffect, useState } from 'react'

function UserProvider({children}:{children: React.ReactNode}) {
  const [user, setUser] = useState<any>(null)

  const { fetchUser } = useQueryUser()
  const { data, isLoading } = fetchUser

  useEffect(() => {
    setUser(data?.user)
  }, [data])

  if (isLoading) return <Loader />
  return (
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider