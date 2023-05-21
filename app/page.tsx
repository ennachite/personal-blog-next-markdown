import Image from 'next/image'
import Posts from './components/Posts'

export default function Home() {
  return (
    <main className="px-6 mx-auto">
      <p className='my-12 text-3xl text-center dark:text-white'>
        Hello and Welcome 👋
        <span className='whitespace-nowrap'>
          I&apos;m <span className='font-bold'>Oussama</span>, a full-stack developer
        </span>
      </p>
      <Posts/>
    </main>
  )
}
