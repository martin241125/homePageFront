import logo from "../../assets/images/logo.svg";
import img3 from "../../assets/images/image-web-3-desktop.jpg";
import img01 from "../../assets/images/image-retro-pcs.jpg";
import img02 from "../../assets/images/image-top-laptops.jpg";
import img03 from "../../assets/images/image-gaming-growth.jpg";

function App() {
  return (
    <>
      <header>
        <nav className="flex flex-row">
          <img src={logo} alt="logo" className="mr-auto pt-3 pl-3 " />
          <ul className="flex flex-row justify-end pt-3 pr-3">
            <li className="m-2 hover:cursor-pointer hover:text-orange-400 hover:font-semibold">
              Home
            </li>
            <li className="m-2 hover:cursor-pointer hover:text-orange-400 hover:font-semibold">
              New
            </li>
            <li className="m-2 hover:cursor-pointer hover:text-orange-400 hover:font-semibold">
              Popular
            </li>
            <li className="m-2 hover:cursor-pointer hover:text-orange-400 hover:font-semibold">
              Trendig
            </li>
            <li className="m-2 hover:cursor-pointer hover:text-orange-400 hover:font-semibold">
              Categories
            </li>
          </ul>
        </nav>
      </header>
      <section className="flex flex-row ">
        <div className="flex flex-col">
          <img src={img3} alt="formas geometricas" className="p-1 mr-12" />
          <article className="flex flex-row items-center   ">
         <div>
         <h1 className=" font-haken font-extrabold text-8xl text-left text-blue-950 ml-12 mt-2">The Bright Future of Web 3.0?</h1>
         </div>

            <div className="ml-96">
              <p className="font-inter p-2 text-2xl mr-8 ">
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>
              
            <button className="bg-red-400 py-2 px-2 mt-6 text-white  font-inter">Read more</button>
            </div>
          </article>
        </div>
        
        <div className=" grid grid-cols-1 font-inter bg-blue-950 py-4 px-4 mt-1 mr-4">
          <h2 className="text-4xl text-yellow-400  mt-2 ml-2">New</h2>
          <article className="mt-1">
            <h3 className="text-white font-haken font-extrabold text-xl hover:cursor-pointer hover:text-orange-400">Hydrogen VS Electric Cars </h3>
            <p className="text-white font-inter text-xs py-2">Will hydrogen-fueled cars ever catch up to EVs?</p>
          </article>
          <article className="mt-1">
            <h3 className="text-white font-haken font-extrabold text-xl hover:cursor-pointer hover:text-orange-400">The Downsides of AI Artistry</h3>
            <p className="text-white font-inter text-xs py-2">
              What are the possible adverse effects of on-demand AI image
              generation?
            </p>
          </article>
          <article className="mt-1">
            <h3 className="text-white font-haken font-extrabold text-xl hover:cursor-pointer hover:text-orange-400">Is VC Funding Drying Up? </h3>
            <p className="text-white font-inter text-xs py-2">
              Private funding by VC firms is down 50% YOY. We take a look at
              what that means.
            </p>
          </article>
        </div>
      </section>
      <div className="flex flex-row justify-between pt-12 mb-2">
        <article className="flex flex-row ml-2 mr-2">
          <img src={img01} alt="" className="rounded-lg"/>
          <div >
            <span className="text-gray-400 text-4xl pl-4 hover:text-yellow-600 hover:cursor-pointer font-inter font-bold"> 01</span>
            <h3 className="text-blue-950 text-3xl font-extrabold font-haken pl-4 pt-4">Reviving Retro PCs</h3>
            <p className="text-xl font-haken text-justify pt-12 pl-4"> What happens when old PCs are given modern upgrades?</p>
          </div>
        </article>
        <article className="flex flex-row ml-2 mr-2">
          <img src={img02} alt="" className="rounded-lg"/>
          <div >
            <span className="text-gray-400 text-4xl pl-4 hover:text-yellow-600 hover:cursor-pointer font-inter font-bold"> 02</span>
            <h3 className="text-blue-950 text-3xl font-extrabold font-haken pl-4 pt-4">Top 10 Laptops of 2022</h3>
            <p className="text-xl font-haken text-justify pt-12 pl-4">Our best picks for various needs and budgets.</p>
          </div>
        </article>
        <article className="flex flex-row ml-2 mr-2">
          <img src={img03} alt="" className="rounded-lg"/>
          <div>
            <span className="text-gray-400 text-4xl pl-4 hover:text-yellow-600 hover:cursor-pointer font-inter font-bold">03 </span>
            <h3 className="text-blue-950 text-3xl font-extrabold font-haken pl-4 pt-4">The Growth of Gaming</h3>
            <p className="text-xl font-haken text-justify pt-12 pl-4"> How the pandemic has sparked fresh opportunities.</p>
          </div>
        </article>
      </div>
    </>
  );
}

export default App;
