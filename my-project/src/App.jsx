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
      <section className="border-2 border-rose-500 flex flex-row">
        <div className="flex flex-col">
          <img src={img3} alt="formas geometricas" className="p-1 border-2 border-red-400" />
          <article className="flex flex-row items-center border-2 border-red-400">
            <h1 className="border-2 border-red-400 font-haken font-extrabold text-8xl  text-blue-950 text-start">The Bright Future of Web 3.0?</h1>

            <div className="text-justify border-2 border-red-400">
              <p className="font-inter p-2 text-2xl">
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>
              
            <button className="bg-red-400 py-2 px-2 text-white  font-inter">Read more</button>
            </div>
          </article>
        </div>
        
        <div className="flex flex-col bg-slate-500">
          <h2>New</h2>
          <article>
            <h3>Hydrogen VS Electric Cars </h3>
            <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
          </article>
          <article>
            <h3>The Downsides of AI Artistry</h3>
            <p>
              What are the possible adverse effects of on-demand AI image
              generation?
            </p>
          </article>
          <article>
            <h3>Is VC Funding Drying Up? </h3>
            <p>
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
