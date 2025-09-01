import {Link} from "react-router";

const Navbar = () => {
    return (
        <nav
            className="navbar relative bg-white/20 backdrop-blur-lg backdrop-saturate-150 border border-white/80 rounded-3xl shadow-lg shadow-white/30">
            <Link to="/">
                <p className="text-2xl font-bold text-gradient">HS HireSense</p>
            </Link>

            <Link to="/upload" className="relative px-6 py-3 rounded-full
    bg-white/20 border border-white/30
    backdrop-blur-xl backdrop-saturate-150
    shadow-lg shadow-white/10
    text-white font-medium tracking-wide
    overflow-hidden group transition-all duration-500
    hover:bg-white/30 hover:shadow-white/20 w-fit">

                <span className="relative z-10 text-black">Upload Resume</span>


        {/*        <span className="absolute inset-0 rounded-full*/}
        {/*bg-gradient-to-tr from-white/40 to-transparent*/}
        {/*opacity-50 blur-sm"></span>*/}


                <span className="absolute top-0 left-[-50%] w-[200%] h-full
        bg-gradient-to-r from-transparent via-white/40 to-transparent
        transform -skew-x-12 opacity-0
        group-hover:opacity-100
        animate-shimmer"></span>
            </Link>
        </nav>
    )
}
export default Navbar
