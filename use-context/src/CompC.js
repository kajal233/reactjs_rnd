import React, { useContext } from 'react'
import { NameContext } from './App'

function CompC() {
   const myName = useContext(NameContext)
  return (
    <>
    <h1> Hi i am component C</h1>
    <h1>{myName}</h1>
    </>
  )
}

export default CompC