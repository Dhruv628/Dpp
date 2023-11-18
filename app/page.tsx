import Image from 'next/image'
import connectToDB from './api/Db'

export default function Home() {
  connectToDB();
  return (
<div>
  THis
</div>
  )
}


