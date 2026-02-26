import './index.css'; // Make sure this has @import "tailwindcss";
import {useState} from 'react';
import { ArrowLeft, ArrowRight, RotateCcw, FolderClosed, Star } from 'lucide-react';



function App() {
  const [currentDir, setCurrentDir]=useState('allFolder');
  return (

    <main className='app-container grid grid-cols-[250px_1fr] h-screen overflow-hidden bg-slate-950 text-slate-200'>
    

      {/* 1. Sidebar (List View) */}
      <aside className='side-bar bg-slate-900 border-r border-slate-800 flex flex-col'>
        <div className='flex flex-row h-14 items-center justify-center'>
          <ArrowLeft className="text-slate-400 hover:text-white cursor-pointer" />
          <ArrowRight className="text-slate-400 hover:text-white cursor-pointer ml-4" />
          <RotateCcw className="text-slate-400 hover:text-white cursor-pointer ml-4" />
        </div>
<div className='p-4 flex flex-row gap-4'>
  {/* Folder Button */}
  <button 
    onClick={() => setCurrentDir('allFolder')} 
    className={`p-2 rounded transition-all ${
      currentDir === "allFolder" ? "bg-slate-700 text-white" : "text-slate-400 hover:text-white"
    }`}
  >
    <FolderClosed size={20} />
  </button>

  {/* Star Button */}
  <button 
    onClick={() => setCurrentDir('favFolder')} 
    className={`p-2 rounded transition-all ${
      currentDir === "favFolder" ? "bg-slate-700 text-yellow-400" : "text-slate-400 hover:text-yellow-400"
    }`}
  >
    <Star size={20} />
  </button>
</div>
        <div className='list-view flex-1 overflow-y-auto px-2'>
          {/* Your list of categories will go here */}
          <div className='p-2 hover:bg-slate-800 rounded cursor-pointer'>React</div>
          <div className='p-2 hover:bg-slate-800 rounded cursor-pointer'>SQL</div>
        </div>
      </aside>

      {/* 2. Middle Container (Search + Content) */}
      <div className='middle-container flex flex-col'>
        <header className='search-ribbon h-14 border-b border-slate-800 flex items-center px-6'>
          <input 
            type='text' 
            placeholder='Search notes...' 
            className='bg-slate-800 border-none rounded-md px-4 py-1.5 w-full max-w-md focus:ring-1 focus:ring-sky-500 outline-none text-sm'
          />
        </header>

        <div className='notes-preview flex-1 overflow-y-auto p-8'>
           {/* Your main note content goes here */}
           <h1 className='text-3xl font-bold mb-4'>Welcome to Dev Notes</h1>
           <p className='text-slate-400'>Start writing or select a note from the sidebar.</p>
        </div>
      </div>
    </main>
  );
}

export default App;