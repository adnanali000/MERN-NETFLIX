import React,{useState} from 'react'
import './listitem.scss';
import {PlayArrow , Add ,ThumbUpAltOutlined, ThumbDownOutlined } from '@material-ui/icons';

const ListItem = ({index}) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className='listItem' 
            style={{left: isHovered && index * 225 - 50 + index * 2.5}}
            onMouseEnter={()=>setIsHovered(true)} 
            onMouseLeave={()=>setIsHovered(false)}
        >
            <img src = 'https://dailyresearchplot.com/wp-content/uploads/2020/11/Emily-in-Paris-1200x900.jpg' alt = '' />
            <div className="itemInfo">
                <div className="icons">
                    <PlayArrow />
                    <Add />
                    <ThumbUpAltOutlined />
                    <ThumbDownOutlined />
                </div>
                <div className="itemIntoTop">
                    <span>1 hour 20 mins</span>
                    <span className='limit'>+16</span>
                    <span>1999</span>
                </div>
                <div className="desc">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae eaque explicabo laborum ad quisquam corporis hic sunt itaque, odit dolorem necessitatibus.
                </div>
                <div className="genre">
                    Action
                </div>
            </div>
        </div>
    )
}

export default ListItem
