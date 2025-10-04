import { useContext } from 'react'
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom'
import { AuthContext } from './Context/AuthContext';

import { GiTakeMyMoney } from "react-icons/gi";

import { IoMdLogIn } from "react-icons/io";
import { FaUserPlus } from "react-icons/fa";
import { TbHomeStats } from "react-icons/tb";
import { GiReceiveMoney } from "react-icons/gi";
import { GiPayMoney } from "react-icons/gi";
import { LuLogOut } from "react-icons/lu";

export default function Header() {
    const { auth ,setAuth,setRegisterData} = useContext(AuthContext)
    const navigate = useNavigate()
    // console.log(auth);
    const handleLogOut = ()=>{
        setRegisterData([])
        setAuth(false)
        navigate('/login')
    }
    return (
        <>
            <div className="header">
                <nav>
                    <div className='nav_item logo'>
                        <Link to="/">
                            <i><GiTakeMyMoney /></i>
                            Expense Tracker
                        </Link>
                    </div>
                    <div className='navbar'>

                        {
                            auth ? (
                                <>
                                    <div className='nav_item'>
                                        <NavLink to="/home">
                                            <i><TbHomeStats /> </i>
                                            Home
                                        </NavLink>
                                    </div>
                                    <div className='nav_item'>
                                        <NavLink to="/income">
                                            <i><GiReceiveMoney /></i>
                                            Income
                                        </NavLink>
                                    </div>
                                    <div className='nav_item'>
                                        <NavLink to="/expense">
                                            <i>
                                                <GiPayMoney />
                                            </i>
                                            Expense
                                        </NavLink>
                                    </div>
                                    <div className='nav_item'>
                                        <NavLink to="/logout">
                                            
                                            <button onClick={handleLogOut}><i>
                                                <LuLogOut />
                                            </i> Log Out</button>
                                        </NavLink>
                                    </div>
                                </>

                            ) : (
                                <>
                                    <div className='nav_item'>
                                        <NavLink to="/login">
                                            <i><IoMdLogIn /></i>
                                            Login
                                        </NavLink>
                                    </div>
                                    <div className='nav_item'>
                                        <NavLink to="/register">
                                            <i><FaUserPlus /></i>
                                            Register
                                        </NavLink>
                                    </div>
                                </>
                            )
                        }

                    </div>


                </nav>
                <Outlet />
            </div>
        </>
    )
}