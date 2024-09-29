import React from 'react'

type Props = {
  children: React.ReactNode
}

export default ({ children }: Props) => {
  return <h1>{children}</h1>
}
