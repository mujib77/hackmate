import { Link, useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem('token');
    navigate('/login');
  }

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-white font-sans selection:bg-purple-500/30 flex flex-col relative overflow-hidden">
      
     
        <div className="absolute top-[10%] left-[-5%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[5%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[130px] pointer-events-none" />

      
      <header className="flex justify-between items-center px-8 md:px-12 py-8 relative z-10">
        <div className="flex items-center gap-3">
          
          <div className="p-2 bg-gradient-to-br from-purple-500/20 to-transparent rounded-lg border border-purple-500/20">
            <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.5 8.5L19 5m0 0l-4-1m4 1l1 4m-11 1h3m-3 4h2m-2 4h1m-1-12a9 9 0 0118 0v1a5 5 0 01-5 5H6a5 5 0 01-5-5V9a9 9 0 019-9z" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-100">HackMate</h1>
        </div>
        
        <button 
          onClick={handleLogout}
          className="bg-red-900/30 border border-red-500/40 px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-red-200 hover:bg-red-800/50 transition-all shadow-[0_0_20px_rgba(239,68,68,0.15)]"
        >
          Logout
        </button>
      </header>

     
      <main className="flex-1 grid grid-cols-1 lg:grid-cols-2 px-8 md:px-12 items-center relative z-10">
        
        {/* LEFT SIDE: GLASS ILLUSTRATION */}
        <div className="hidden lg:flex justify-center items-center">
          <div className="relative p-10 border border-white/10 bg-white/[0.03] rounded-[40px] backdrop-blur-xl shadow-2xl">
            {/* Stable Placeholder Image */}
           <img src="./SVG.png" 
                alt="Team Illustration" 
                className="w-[450px] drop-shadow-[0_0_30px_rgba(168,85,247,0.3)] opacity-90"
           />
          </div>
        </div>

        
        <div className="flex flex-col items-start lg:pl-16 space-y-10 relative">
          
          
          <nav className="absolute -right-4 lg:right-0 top-0 flex flex-col items-end space-y-6 text-slate-400 font-semibold tracking-wide">
            <Link to="/listings" className="hover:text-purple-400 transition-colors cursor-pointer">Browse</Link>
            <Link to="/create-listing" className="hover:text-purple-400 transition-colors cursor-pointer">Post</Link>
            <Link to="/profile" className="hover:text-purple-400 transition-colors cursor-pointer">Profile</Link>
          </nav>

          <div className="space-y-6">
            <h2 className="text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight text-white">
              Find Your <br/>
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent italic">
                Dream Team
              </span>
            </h2>
            <p className="text-slate-400 text-lg md:text-xl max-w-md font-medium leading-relaxed">
              Connect with developers, designers and ML engineers for your next hackathon.
            </p>
          </div>

         
          <div className="flex flex-wrap gap-5 pt-4">
            <Link 
              to="/create-listing" 
              className="px-10 py-4 rounded-full bg-gradient-to-b from-slate-700 to-slate-900 border border-purple-500/50 text-white font-bold shadow-[0_10px_30px_rgba(168,85,247,0.2)] hover:scale-105 active:scale-95 transition-all"
            >
              Post Listing
            </Link>

            <Link 
              to="/listings" 
              className="px-10 py-4 rounded-full bg-slate-800/40 border border-slate-700 text-slate-200 font-bold hover:bg-slate-700/60 transition-all backdrop-blur-sm"
            >
              Browse Teams
            </Link>

            <button className="px-10 py-4 rounded-full bg-gradient-to-b from-yellow-700/20 to-black border border-yellow-600/30 text-yellow-500/80 font-bold hover:brightness-125 transition-all">
              Find a Mentor
            </button>
          </div>
        </div>
      </main>

      
      <footer className="p-10 flex justify-end gap-8 text-[11px] text-slate-600 font-bold uppercase tracking-[0.3em] relative z-10">
        <Link to="/about" className="hover:text-slate-400 transition-colors">About</Link>
        <Link to="/faq" className="hover:text-slate-400 transition-colors">FAQ</Link>
        <Link to="/terms" className="hover:text-slate-400 transition-colors">Terms</Link>
      </footer>

    </div>
  );
}

export default Dashboard;