import pfp from '../src/assets/pfp.jpeg';
import { Link } from 'react-router';

function Navbar () {
	return (
		<>
			<nav className="flex justify-between fixed z-50 w-full border-b-2 border-white items-center h-20 bg-black">
				<div className="nav-left text-4xl p-4 text-shadow-white font-bold font-mono text-center select-none hover:opacity-80 transition">
					<h2>For <span className="text-yellow-500">U</span></h2>
				</div>
				<div className="nav-right">
					<ul className="flex items-center justify-end gap-6 p-4 text-md font-mono font-bold">
						<li><input type="text" placeholder="Search" 
						className="border-b-2 border-white p-2 bg-gray-950 rounded-lg outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-4 focus:ring-offset-slate-950 hover:border-yellow-500 focus:border-b-yellow-500 transition-all duration-200 ease-in-out" maxLength={36}/></li>

						<li className="border-b-2 hover:border-yellow-500 p-2 border-transparent transition- duration-150 ease-in-out"><Link to="/">Home</Link></li>

						<li className="border-b-2 hover:border-yellow-500 p-2 border-transparent transition-all duration-150 ease-in-out"><Link to="/cart">Cart</Link></li>

						<li className="border-b-2 hover:border-yellow-500 p-2 border-transparent transition-all duration-150 ease-in-out"><Link to="/contact">Contact</Link></li>
						<div className=""></div>

						<li>
								<img className='h-10 w-10 rounded-full cursor-pointer hover:ring-2 hover:ring-offset-2 hover:ring-offset-slate-950 hover:ring-yellow-500 transition-all duration-150 ease-in-out' src={pfp} alt="pfp" />
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
}

export default Navbar;