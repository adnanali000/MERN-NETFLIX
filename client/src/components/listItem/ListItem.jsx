import React,{useState} from 'react'
import './listitem.scss';
import {PlayArrow , Add ,ThumbUpAltOutlined, ThumbDownOutlined } from '@material-ui/icons';

const ListItem = ({index}) => {
    const [isHovered, setIsHovered] = useState(false);
    const trailer = 'https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761';

    return (
        <div className='listItem' 
            style={{left: isHovered && index * 225 - 50 + index * 2.5}}
            onMouseEnter={()=>setIsHovered(true)} 
            onMouseLeave={()=>setIsHovered(false)}
        >
            <img src = 'https://dailyresearchplot.com/wp-content/uploads/2020/11/Emily-in-Paris-1200x900.jpg' alt = '' />

            {/* video  */}
            {isHovered && (

            <>
            <video src = {trailer} autoPlay={true} loop />

            <div className="itemInfo">
                <div className="icons">
                    <PlayArrow className='icon' />
                    <Add className='icon'/>
                    <ThumbUpAltOutlined className='icon'/>
                    <ThumbDownOutlined className='icon'/>
                </div>
                <div className="itemInfoTop">
                    <span>1 hour 20 mins</span>
                    <span className='limit'>+16</span>
                    <span>1999</span>
                </div>
                <div className="desc">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae eaque explicabo.
                </div>
                <div className="genre">
                    Action
                </div>
            </div>
            </>
            )}
        </div>
    )
}

export default ListItem
