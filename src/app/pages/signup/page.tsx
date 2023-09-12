'use client'

import { useRouter } from 'next/router'
import { useState } from 'react'

export default function Signup() {
  const [check, setCheck] = useState<any>()

  return (
    <>
      signup
      <form>
        <input />
        <button>중복확인</button>
        <input />
        <input />
      </form>
    </>
  )
}
