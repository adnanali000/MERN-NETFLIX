import { InfoOutlined, PlayArrow } from '@material-ui/icons'
import './featured.scss'

export default function Featured(){
    return(
        <div className='featured'>
            <img src="https://wallpaperaccess.com/full/1885334.jpg" alt="" />
            <div className="info">
                <img src="https://occ-0-3587-58.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABfp5_exPnNUZnDZIPJsnSttBiba9tCC2-056d6YlKtS0ntsLFE4Wi2hd_fZXsbO_jXoztbMNX63wldZmThL1W6HDTyrB2PmtEO41ftM-A7sTZOzqPEqIXKKcNZ12_z6rNQTXuIMn-SY5aP80ByhYYeq-nXMSFcGyJntaHJDtm2iTCg.png?r=7c3" alt="" />
                {/* <img src="https://i.pinimg.com/originals/99/40/e0/9940e0840029eec5e83c9974210960d9.png" alt="" /> */}
                <span className='desc'>Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan.</span>
                <div className="buttons">
                    <button className='play'>
                        <PlayArrow /> 
                        <span>Play</span> 
                    </button>
                    <button className='more'>
                        <InfoOutlined />
                        <span>Info</span>
                    </button>
                </div>
            
            </div>        
        </div>
    )
}