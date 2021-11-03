import Twitter from '../assets/img/twitter.svg';
import Discord from '../assets/img/discord.svg';
import Boat from '../assets/img/boat.svg';

const Header = () => {
  return (
    <div className="header bg-black mainContainer flex itemsCenter">
      <div className="bg-gray logo mr-60"></div>
      <div className="text-white fw-bold f-24 flex gap-40">
        <div>
          <a href="#home">Home</a>
        </div>
        <div>
          <a href="#mint">Mint</a>
        </div>
        <div>
          <a href="#loadmap">Loadmap</a>
        </div>
        <div>
          <a href="#faq">FAQ</a>
        </div>
      </div>
      <div className="flex text-white right-header gap-20 itemsCenter">
        <div>
          <a href="#">
            <img className="mt-10" src={Twitter} alt="Twitter" />
          </a>
        </div>
        <div>
          <a href="#">
            <img className="mt-14" src={Discord} alt="Discord" />{' '}
          </a>
        </div>
        <div>
          <a href="#">
            <img className="mt-14" src={Boat} alt="Boat" />
          </a>
        </div>
        <button className="landingYellowButton flex itemsCenter justifyCenter f-24 fw-400 text-white ff-kanit pointer">
          Mint Now!
        </button>
      </div>
    </div>
  );
};

export default Header;
