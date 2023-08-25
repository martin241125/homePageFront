import logo from '../../assets/images/logo.svg'
import img3 from '../../assets/images/image-web-3-desktop.jpg'


function App() {
  

  return (
    <>
     <nav className='flex flex-auto'>
      
      <img src={logo} alt="logo" className='mr-auto pt-3 pl-3 '/>
      <ul className="flex flex-row justify-end pt-3 pr-3">
        <li className="m-2 hover:cursor-pointer hover:text-orange-400">Home</li>
        <li className="m-2 hover:cursor-pointer hover:text-orange-400">New</li>
        <li className="m-2 hover:cursor-pointer hover:text-orange-400">Popular</li>
        <li className="m-2 hover:cursor-pointer hover:text-orange-400">Trendig</li>
        <li className="m-2 hover:cursor-pointer hover:text-orange-400">Categories</li>
      </ul>
     </nav>
     <main className='flex flex-row bg-black '>
     <section>
      <div className=' '>
        <img src={img3} alt="formas geometricas" className='ml-2 mt-10'/>
      </div>
     </section>
     <section className=''>
        <div className='bg-slate-700 '>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam, quia facilis? Autem consequuntur iusto praesentium quas rerum dignissimos temporibus ipsa optio aperiam, iure sed exercitationem similique asperiores, tempora, itaque nihil.</p>
        </div>
     </section>
     </main>
        
    </>
  )
}

export default App
