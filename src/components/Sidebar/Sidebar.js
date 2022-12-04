import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.css'

const Sidebar = () => {

    const [selectedId, setSelectedId] = useState("home");

    const sidebarData = {
        miniSideTabs: [
            {
                head: "Home",
                icon: "home"
            },
            {
                head: "Shorts",
                icon: "bolt"
            },
            {
                head: "Subscriptions",
                icon: "subscriptions"
            },
            {
                head: "Library",
                icon: "video_library"
            }
        ],
        mainTabs: [
            {
                head: "Home",
                icon: "home"
            },
            {
                head: "Shorts",
                icon: "bolt"
            },
            {
                head: "Subscriptions",
                icon: "subscriptions"
            }
        ],
        externalTabs: [
            {
                head: "Library",
                icon: "video_library"
            },
            {
                head: "History",
                icon: "history"
            },
            {
                head: "Your Videos",
                icon: "smart_display"
            },
            {
                head: "Watch Later",
                icon: "browse_gallery"
            },
            {
                head: "Liked Videos",
                icon: "thumb_up_off"
            }
        ],
        channels: [
            {
                "logo": "https://yt3.ggpht.com/ytc/AMLnZu-CuXbTCBCt9gm_6MJ1t-jd2efxCucWWKel3jekDw=s176-c-k-c0x00ffffff-no-rj",
                "name": "Harshit vashishth",
                id: 'harshitvashishth'
            },
            {
                "logo": "https://yt3.ggpht.com/ytc/AMLnZu-cSoO0e2Shro4sYkaKYCumlgllLCTYYNf7bk7G_g=s176-c-k-c0x00ffffff-no-rj",
                "name": "Akshay Saine",
                id: 'akshaysaine'
            },
            {
                "logo": "https://yt3.ggpht.com/ytc/AMLnZu_nulu6hJZiT4KVNfc1DEMh2AqiqPx06z_bViTnYw=s176-c-k-c0x00ffffff-no-rj",
                "name": "Thapa Technical",
                id: 'ThapaTechnical'
            },
            {
                "logo": "https://yt3.ggpht.com/ytc/AMLnZu8Tecp0YJxjV0dn9z3_DmbLMGDXkpDkObiL11y-nA=s176-c-k-c0x00ffffff-no-rj",
                "name": "CarryisLive",
                id: 'CarryisLive'
            },
            {
                "logo": "https://yt3.ggpht.com/v_PwNTRdcmpaEU6zh9wytm0ERtq2BOAmBQvr1QyZstphlpcPUqjbX3wqIvSRR9bWIgSjmRUJcwE=s176-c-k-c0x00ffffff-no-rj",
                "name": "T-series",
                id: 'Tseries'
            },
            {
                "logo": "https://yt3.ggpht.com/ytc/AMLnZu9IYeoGpvwVTLqTQIrGLEiESRaNi46x2MrBLEFBZlU=s176-c-k-c0x00ffffff-no-rj",
                "name": "Zee News",
                id: 'ZeeNews'
            },
        ],
        explore: [
            {
                head: "Treading",
                icon: "local_fire_department"
            },
            {
                head: "Music",
                icon: "music_note"
            },
            {
                head: "Films",
                icon: "theaters"
            },
            {
                head: "Live",
                icon: "sensors"
            },
            {
                head: "Gaming",
                icon: "sports_esports"
            },
            {
                head: "News",
                icon: "feed"
            },
            {
                head: "Sports",
                icon: "sports_soccer"
            },
            {
                head: "Learning",
                icon: "lightbulb"
            },
            {
                head: "Fashion & Beauty",
                icon: "styler"
            },
        ],
        moreyutubes: [
            {
                "logo": "https://upload.wikimedia.org/wikipedia/commons/d/dd/YouTube_Premium_logo.svg",
                "name": "Youtube Premium"
            },
            {
                "logo": "https://img.icons8.com/color/2x/youtube-studio.png",
                "name": "Creator Studio"
            },
            {
                "logo": "https://img.icons8.com/color/2x/youtube-music.png",
                "name": "Youtube Music"
            },
            {
                "logo": "https://i.pinimg.com/originals/d1/f6/d8/d1f6d896536b25670e0adede6bc2ea50.png",
                "name": "Youtube Kids"
            },
            {
                "logo": "https://www.freepnglogos.com/uploads/youtube-tv-png/youtube-tv-youtube-watch-record-live-apk-download-from-moboplay-21.png",
                "name": "Youtube TV"
            }
        ],
        settings: [
            {
                head: "Settings",
                icon: "settings"
            },
            {
                head: "Report History",
                icon: "flag"
            },
            {
                head: "Help",
                icon: "help"
            },
            {
                head: "Send Feedback",
                icon: "sms_failed"
            }
        ]
    }



    return (
        <>
            <div className="sidebarSection close" id="sidebarContainer">
                <div className="miniSidebar" id="miniSidebar">
                    {sidebarData.miniSideTabs.map((tab, i) => {
                        return <div key={i} className={`miniSidebarTab ${tab.icon === selectedId && "active"}`} onClick={() => setSelectedId(tab.icon)}>
                            <span className="material-symbols-outlined" title={tab.head}>{tab.icon}</span>
                            <p>{tab.head}</p>
                        </div>
                    })}
                </div>
                <div className="sidebarContainer" id="sidebarContainer">
                    <div className="sidebarTabs">
                        <div className="tabContainer">
                            {sidebarData.mainTabs.map((tab, i) => {
                                return <div key={i} className={`sidebarTab ${tab.icon === selectedId && "active"}`} onClick={() => setSelectedId(tab.icon)}>
                                    <span className="material-symbols-outlined">{tab.icon}</span>
                                    {tab.head}
                                </div>
                            })}
                        </div>
                        <div className="horizontalLine" style={{ margin: '10px 0' }}></div>
                        <div className="tabContainer">
                            {sidebarData.externalTabs.map((tab, i) => {
                                return <div key={i} className={`sidebarTab ${tab.icon === selectedId && 'active'}`} onClick={() => setSelectedId(tab.icon)}>
                                    <span className="material-symbols-outlined">{tab.icon}</span>
                                    {tab.head}
                                </div>
                            })}
                        </div>
                        <div className="horizontalLine" style={{ margin: '10px 0' }}></div>
                        <div className="subscriptions">
                            <h2 className="mainSidebarHead">Subscriptions</h2>
                            {sidebarData.channels.map((tab) => {
                                return <div className="channelTab" key={tab.logo}>
                                    <img src={tab.logo} alt={tab.logo} />
                                    <p>{tab.name}</p>
                                </div>
                            })}
                        </div>
                        <div className="horizontalLine" style={{ margin: '10px 0' }}></div>
                        <div className="explore">
                            <h2 className="mainSidebarHead">Explore</h2>
                            {sidebarData.explore.map((tab) => {
                                return <div className="sidebarTab" key = {tab.head}>
                                    <span className="material-symbols-outlined">{tab.icon}</span>
                                    {tab.head}
                                </div>
                            })}
                        </div>
                        <div className="horizontalLine" style={{ margin: '10px 0' }}></div>
                        <div className="moreYoutube">
                            <h2 className="mainSidebarHead">More on Youtube</h2>
                            {sidebarData.moreyutubes.map((tab) => {
                                return <div className="youtubeTabs" key={tab.logo}>
                                    <img src={tab.logo} alt={tab.logo} />
                                    <p>{tab.name}</p>
                                </div>
                            })}
                        </div>
                        <div className="horizontalLine" style={{ margin: '10px 0' }}></div>
                        <div className="tabContainer">
                            {sidebarData.settings.map((tab, i) => {
                                return <div key={i} className={`sidebarTab ${tab.icon === selectedId && 'active'}`} onClick={() => setSelectedId(tab.icon)}>
                                    <span className="material-symbols-outlined">{tab.icon}</span>
                                    {tab.head}
                                </div>
                            })}
                        </div>
                        <div className="horizontalLine" style={{ margin: '10px 0' }}></div>

                        <div className="sidebarBottomLinks">
                            <Link to="/">About</Link>
                            <Link to="/">Press</Link>
                            <Link to="/">Copyright</Link>
                            <Link to="/">Contact</Link>
                            <Link to="/">Creator</Link>
                            <Link to="/">Advertise</Link>
                            <Link to="/">Developers</Link>
                        </div>

                        <div className="sidebarBottomLinks">
                            <Link to="/">Terms</Link>
                            <Link to="/">Privacy</Link>
                            <Link to="/">Policy &amp; Safety</Link>
                            <Link to="/">How Youtube works</Link>
                            <Link to="/">Test new features</Link>
                            <h3>&copy; Dhruv Hingol</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar