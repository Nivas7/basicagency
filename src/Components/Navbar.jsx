const Navbar = () => {
    return ( 
        <div className="absolute flex w-[100%] py-[2rem] header p-[calc(1.5rem+2.5vw)] z-10 !justify-between  align-middle">
            <figure className="w-[16rem] h-[2.2rem]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 208.3 27.7" fill="#fff" className="block w-[100%] h-[100%]">
                    <path d="M0 24.1h11.7c5.5 0 8.7-2.3 8.7-6.8 0-2.8-1.7-4.5-4.1-5.3 2-.9 3.4-2.6 3.4-5.3 0-3.5-2.2-5.9-7.5-5.9H0v23.3zM13.1 7.9c0 1.6-1 2.4-3.2 2.4H6.4V5.5h3.5c2.2 0 3.2.8 3.2 2.4zm.7 9c0 1.7-1 2.4-3.3 2.4H6.4v-4.9h4.2c2.2 0 3.2.8 3.2 2.5zM38.2 24.1h6.7L36.8.7h-8.4l-8.1 23.4h6.5l1.2-3.8h9.1l1.1 3.8zM32.5 5.9l2.9 9.5h-5.9l3-9.5zM55.1 24.5c6.3 0 10.3-3 10.3-7.7 0-3.8-2.5-5.8-6.5-6.6l-5.1-1c-2-.4-2.6-1-2.6-2.1S52.4 5 54.5 5c2.4 0 4.1 1 4.2 3.1H65C65 2.5 60.3.3 54.5.3c-5.6 0-9.7 2.8-9.7 7.3 0 3.8 2.5 5.8 6.5 6.6l5.1 1c2 .4 2.6 1 2.6 2.1 0 1.5-1.4 2.3-3.7 2.3-2.6 0-4.5-1.3-4.6-3.8h-6.3c.2 5.5 3.7 8.7 10.7 8.7zM67.3 24.1h6.4V.7h-6.4v23.4zM82 12.4c0-3.9 2.1-6.8 5.6-6.8 2.9 0 4.7 1.7 5.1 3.7h6.7C98.8 3.2 93.6.2 87.7.2 80 .2 75.4 5 75.4 12.3s4.5 12.1 12.3 12.1c6 0 11.2-2.9 11.8-9.1h-6.7c-.4 2.1-2.1 3.7-5.1 3.7-3.6.2-5.7-2.7-5.7-6.6zM113.7 0h-5.2l-10 27.7h5.2l10-27.7zM137.8 12.4c0-6.6-3.6-11.7-12.8-11.7h-9.8v23.4h9.8c9.2 0 12.8-5.1 12.8-11.7zm-6.6 0c0 4.6-2.6 6.3-6.2 6.3h-3.3V6.1h3.3c3.6 0 6.2 1.7 6.2 6.3zM139.5 24.1H158v-5.3h-12.2v-4h10.7V9.7h-10.7V6.1h11.9V.7h-18.2v23.4zM180 8.9c0-5.9-3.8-8.1-9.6-8.1h-10.1v23.4h6.4V17h3.8c5.7 0 9.5-2.2 9.5-8.1zm-6.6 0c0 2.3-1.1 3.2-3.7 3.2h-3.1V5.6h3.1c2.6 0 3.7 1 3.7 3.3zM181 6.2h7.4v17.9h6.4V6.2h7.4V.7H181v5.5zM203.5 23.7c-2.6 0-4.8-2.1-4.8-4.8 0-2.6 2.1-4.8 4.8-4.8s4.8 2.1 4.8 4.8c0 2.6-2.2 4.8-4.8 4.8zm0-8.8c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z"></path>
                    <path d="M204 17.2h-1.4v1.6h1.4c.5 0 .7-.3.7-.8s-.3-.8-.7-.8zm-.1-.8c1.2 0 1.8.5 1.8 1.6 0 .6-.3 1.1-.9 1.3l1.2 1.8h-1.2l-1.1-1.6h-1.2v1.6h-1.1v-4.7h2.5z"></path>
                </svg>
            </figure>
            <ul className="list-none flex text-white">
                <li>
                    <a className="link" href="">Work</a>
                </li>
                <li>
                    <a href="" className="link">About</a>
                </li>
                <li>
                    <a href="" className="link">News</a>
                </li>
                <li>
                    <a href="" className="link">Thinking</a>
                </li>
                <li>
                    <a href="" className="link">Careers</a>
                </li>
                <li>
                    <a href="" className="link">Contact</a>
                </li>
            </ul>
            <button className="w-[1.5rem] h-[2rem] text-white align-top">
                <figure className="w-[2.2rem] h-[.7rem]"><svg className="block" fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 5"><circle cx="2.5" cy="2.5" r="2.5"></circle><circle cx="10.5" cy="2.5" r="2.5"></circle><circle cx="18.5" cy="2.5" r="2.5"></circle></svg></figure>
            </button>
        </div>
     );
}
 
export default Navbar;