import { NavLink } from "react-router-dom";

function Footer() {
    return (
        <footer className="bg-black text-gray-300 mt-1">
            <div className="max-w-7xl mx-auto px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

                <div>
                    <h2 className="text-2xl font-bold text-white">
                        <NavLink
                            to='/'
                        >
                            Foodie
                        </NavLink>
                    </h2>
                    <p className="mt-3 text-sm text-gray-400">
                        Serving happiness on your plate since 2024.
                    </p>
                </div>

                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">
                        Quick Links
                    </h3>
                    <ul className="space-y-2">
                        <li><NavLink to="/" className="hover:text-red-400">Home</NavLink></li>
                        <li><NavLink to="/menu" className="hover:text-red-400">Menu</NavLink></li>
                        <li><NavLink to="/sales" className="hover:text-red-400">Sales</NavLink></li>
                        <li><NavLink to="/contact" className="hover:text-red-400">Contact</NavLink></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">
                        Contact Us
                    </h3>
                    <p className="text-sm">📍 New Delhi, India</p>
                    <p className="text-sm mt-1">📞 +91 98765 43210</p>
                    <p className="text-sm mt-1">✉️ foodie@gmail.com</p>
                </div>

            </div>

            <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-400">
                © {new Date().getFullYear()} Foodie. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;
