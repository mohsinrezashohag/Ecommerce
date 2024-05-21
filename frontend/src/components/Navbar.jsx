import { Link } from 'react-router-dom'
import { navItems } from '@/static/data'

const Navbar = ({active}) => {
  console.log("mobile e pacche toh");
  return (
    <div className={`hidden md:flex justify-evenly items-center w-full pt-6`}>
         {
            navItems && navItems.map((i,index) => (
                <div key={index} className="flex">
                    <Link to={i.url}
                    className={`${active === index + 1 ? "text-[#17dd1f]" : "text-blue-400 800px:text-[#fff]"} pb-[30px] 800px:pb-0 font-[500] px-6 cursor-pointer text-yellow-600}`}
                    >
                    {i.title}
                    </Link>
                </div>
            ))
         }
    </div>
  )
}

export default Navbar