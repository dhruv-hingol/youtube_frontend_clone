import React from 'react'
import {useState} from 'react'
import './Navbar.css'
import {WhiteLogo,Avatar} from '../../Assets/images/imageIndex'

const Navbar = () => {

    const [isDarkTheme, setisDarkTheme] = useState(true);
    const [openNav, setOpenNav] = useState(false);
    const [search, setSearch] = useState("");

    const handleSidebar = () =>{
        const sidebarContainer = document.getElementById('sidebarContainer');
        const homeContainer = document.getElementById('homeContainer');

        homeContainer.classList.toggle('changePadding');
        sidebarContainer.classList.toggle('close');
    }
    
    const handleThemes =() =>{
        const rootElement = document.getElementById('root');
        rootElement.classList.toggle('dark-theme');
        setisDarkTheme(isDarkTheme);
    }

    return (
        <>
            <header>
                <div className="headerDiv">
                <div>
                        <div className="humburger">
                            <div onClick={handleSidebar}>
                                <span></span>
                                <span></span>
                                <span></span>   
                            </div>
                        </div>
                        <img src={WhiteLogo} alt="youtube logo" title="youtube" />
                    </div>
                    <div className="searchContainer">
                        <div className="searchBox"  >
                            <input type="text" placeholder='  Search' value={search} onChange={(e) => setSearch(e.target.value)} />
                           {search !== "" && <span class="material-symbols-outlined" onClick={()=> setSearch("")}>
                                close
                            </span>}
                        </div>
                        <div className="searchBtn">
                        <span class="material-symbols-outlined" title="Search">
                            search
                        </span>
                        </div>
                        <div className="searchMic">
                        <span class="material-symbols-outlined active" title="Search with your voice">
                            mic
                        </span>
                        </div>
                    </div>
                    <div className="profileContainer">
                        <span className="material-symbols-outlined" title="Create">
                            add_box
                        </span>
                        <span className="material-symbols-outlined" title="Notifications">
                            Notifications
                        </span>
                        <img src={Avatar} alt="profile avatar" title="Dhruv Hingol" onClick={ ()=> setOpenNav(!openNav)}/>
                    </div>
                </div>

                {openNav && <div className="profileBtns">
                    <div className="avatarInfo profileTab">
                        <img src={Avatar} alt="your avatar" title="avatar"/>
                        <p>Dhruv Hingol</p>
                    </div>
                    <div className="horizontalLine"></div>
                    <div className="profileTabs">
                        <div className="profileTab">
                            <span className="material-symbols-outlined">
                                account_box
                            </span>
                            <p>Your Channel</p>
                        </div>
                        <div className="profileTab">
                            <span className="material-symbols-outlined">
                               play_circle
                            </span>
                            <p>Youtube studio</p>
                        </div>
                        <div className="profileTab">
                            <span className="material-symbols-outlined">
                               logout
                            </span>
                            <p>Sign out</p>
                        </div>
                    </div>
                    <div className="horizontalLine"></div>
                    <div className="profileTabs">
                        <div className="profileTab">
                            <span className="material-symbols-outlined">
                                monetization_on
                            </span>
                            <p>Purchase and memberships</p>
                        </div>
                        <div className="profileTab">
                            <span className="material-symbols-outlined">
                               admin_panel_settings
                            </span>
                            <p>Your data on youtube</p>
                        </div> 
                    </div>
                    <div className="horizontalLine"></div>
                    <div className="profileTabs">
                        {isDarkTheme && <div className="profileTab" onClick={handleThemes}>
                            <span className="material-symbols-outlined">
                                light_mode
                            </span>
                            <p>Light mode</p>
                        </div>}
                        {isDarkTheme && <div className="profileTab" onClick={handleThemes}>
                            <span className="material-symbols-outlined">
                               bedtime
                            </span>
                            <p>Dark theme</p>
                        </div> }
                        <div className="profileTab">
                            <span className="material-symbols-outlined">
                               settings
                            </span>
                            <p>Settings</p>
                        </div> 
                    </div>
                    <div className="horizontalLine"></div>
                    <div className="profileTabs">
                        <div className="profileTab">
                            <span className="material-symbols-outlined">
                                help
                            </span>
                            <p>Help</p>
                        </div>
                        <div className="profileTab">
                            <span className="material-symbols-outlined">
                               sms_failed
                            </span>
                            <p>Send feedback</p>
                        </div> 
                    </div>
                </div>}
            </header>
        </>
    )
}

export default Navbar