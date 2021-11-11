import React from 'react'

export interface BrunoProps {
  yourName: string
}

export function Bruno({ yourName }: BrunoProps) {
  return (
    <h1>
      Halo
      {yourName}
    </h1>
  )
}
