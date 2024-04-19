import { useContext, useEffect ,useState } from 'react';
import style from '../CSS/navBar.module.css';
import { useMediaQuery } from '@mui/material';
import image from '../imgs/image.png'
import newsContext from '../Context/NewsContext';

export default function NavBar() {
    const {setCategory,setCountry,setData,setPage}=useContext(newsContext)
    const matches = useMediaQuery('(min-width:700px)');
    const [displayMenu, setDisplayMenu] = useState(matches);

    useEffect(() => { 
        setDisplayMenu(matches);
    }, [matches]);

    const changeLocation = (e) => {
        e.preventDefault();
        let country  = e.target.value
        setPage(1);
        setData(()=>[])
        setCountry(country);
    };

    const changeCategory = (e) => {
        e.preventDefault()
        let category = e.target.value
        setPage(1);
        setData(()=>[])
        setCategory(category);
    };

    const menu = () => {
        setDisplayMenu((prevDisplayMenu) => !prevDisplayMenu);
    };

    return (
        <div className={style.nav}>
            <a href='#home'>
             Home
            </a>
           
            <div className={style.options} style={{ display: displayMenu ? 'flex' : 'none' }}>
                <li>
                    <select id="search" onChange={changeLocation}>
                        <option value="in">India</option>
                        <option value="us">United States</option>
                        <option value="ae">UAE</option>
                        <option value="gb">UK</option>
                        <option value="ua">Ukraine</option>
                    </select>
                </li>
                <li>
                    <select id="category" onChange={changeCategory}>
                        <option>Business</option>
                        <option>Entertainment</option>
                        <option>General</option>
                        <option>Health</option>
                        <option>Science</option>
                        <option>Sports</option>
                        <option>Technology</option>
                    </select>
                </li>
                <li>About Us</li>
            </div>
            <a href='#img' id={style.last}>
                <img
                    src={image}
                    alt=""
                    onClick={menu}
                />
            </a>
        </div>
    );
}
