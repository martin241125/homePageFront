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
            <li className="m-2 hover:cursor-pointer hover:text-orange-400">
              Home
            </li>
            <li className="m-2 hover:cursor-pointer hover:text-orange-400">
              New
            </li>
            <li className="m-2 hover:cursor-pointer hover:text-orange-400">
              Popular
            </li>
            <li className="m-2 hover:cursor-pointer hover:text-orange-400">
              Trendig
            </li>
            <li className="m-2 hover:cursor-pointer hover:text-orange-400">
              Categories
            </li>
          </ul>
        </nav>
      </header>
      <section className="flex flex-row ">
        <div className="flex flex-col">
          <img src={img3} alt="formas geometricas" className="p-1" />
          <article className=" grid grid-cols-2  border-2 border-red-400">
            <h1 className=" font-haken font-extrabold text-8xl text-left text-blue-950 ">The Bright Future of Web 3.0?</h1>

            <div className="text-justify">
              <p className="font-inter p-2 text-2xl">
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>
              
            <button className="bg-red-400 py-4 px-6 mt-6 text-white  font-inter">Read more</button>
            </div>
          </article>
        </div>
        
        <div className=" w-1/2 grid grid-cols-1 font-inter p-4 mt-1 bg-blue-950">
          <h1 className="text-4xl text-yellow-400">New</h1>
          <article className="mt-1">
            <h3 className="text-white font-haken font-extrabold text-xl">Hydrogen VS Electric Cars </h3>
            <p className="text-white font-inter text-xs py-2">Will hydrogen-fueled cars ever catch up to EVs?</p>
          </article>
          <article className="mt-1">
            <h3 className="text-white font-haken font-extrabold text-xl">The Downsides of AI Artistry</h3>
            <p className="text-white font-inter text-xs py-2">
              What are the possible adverse effects of on-demand AI image
              generation?
            </p>
          </article>
          <article className="mt-1">
            <h3 className="text-white font-haken font-extrabold text-xl">Is VC Funding Drying Up? </h3>
            <p className="text-white font-inter text-xs py-2">
              Private funding by VC firms is down 50% YOY. We take a look at
              what that means.
            </p>
          </article>
        </div>
      </section>
      <div>
        <article>
          <img src={img01} alt="" />
          <div>
            <span> 01</span>
            <h3>Reviving Retro PCs</h3>
            <p> What happens when old PCs are given modern upgrades?</p>
          </div>
        </article>
        <article>
          <img src={img02} alt="" />
          <div>
            <span> 02</span>
            <h3>Top 10 Laptops of 2022</h3>
            <p>Our best picks for various needs and budgets.</p>
          </div>
        </article>
        <article>
          <img src={img03} alt="" />
          <div>
            <span>03 </span>
            <h3>The Growth of Gaming</h3>
            <p> How the pandemic has sparked fresh opportunities.</p>
          </div>
        </article>
      </div>
    </>
  );
}

export default App;
