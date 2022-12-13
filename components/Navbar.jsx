import Link from 'next/link'


const Navbar = () => {
  return (
    <div className='px-10'>
           <div className='flex justify-between'> 
                <Link href='/'> <h1> SHOPPIN </h1> </Link>    
                 <Link href="/Cart"> <h1> cart </h1> </Link>   
            </div>
    </div>
  )
}

export default Navbar