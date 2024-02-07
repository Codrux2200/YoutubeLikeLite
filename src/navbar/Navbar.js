import './Navbar.css';
import searchicon from "../search.png";
import micro from "../microphone.png"
import persona from '../persona.png'
export const Navbar = () => {

    return(
        <div className='navbar'>
            <div className='section-1'>
                <div className='menu'>
                    <div className='line'></div>
                    <div className='line'></div>
                    <div className='line'></div>
                </div>

                <>
                    <img 
                        src = {"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/640px-Logo_of_YouTube_%282015-2017%29.svg.png"}
                        className='img'
                        >

                    </img>
                </>
            </div>
            <div className='section-2'>

                <div className='search-bar'>
                    <input placeholder='Rechercher'></input>
                    <button>
                        <img src = {searchicon}
                        ></img>
                    </button>
                </div>

                <button className='Microphone'>
                    <img src={micro}
                    >

                    </img>

                </button>
            </div>



            
            <div className='section-3'>

                <div className='menu2'>
                    . . .
                </div>

                <button className='connextion'>
                    <img src={persona}
                    >
                    </img>
                    Se Connecter
                </button>

            </div>
        </div>
    );


};