import Link from "next/link"

const Header = () => {
  return (
    <header className='flex justify-between items-center p-4'>
    <Link className='text-primary font-semibold text-2xl font-dank' href="">Pizza.com</Link>
    <nav className='flex items-center gap-4 text-green-500 font-semibold'>
      <Link href={""}>Home</Link>
      <Link href={""}>Menu</Link>
      <Link href={""}>About</Link>
      <Link href={""}>Contact</Link>
      <Link href={""} className='bg-primary text-white px-4 py-1 rounded-lg'>Login</Link>
    </nav>
  </header>
  )
}
export default Header