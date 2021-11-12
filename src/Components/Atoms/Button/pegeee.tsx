import React from 'react'

export interface BrunoProps {
  yourName: string
}

export var Bruno = function ({ yourName }: BrunoProps) {
  return (
    <h1>
      Halo
      {yourName}
    </h1>
  )
}
