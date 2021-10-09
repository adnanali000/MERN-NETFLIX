import React, { useRef } from 'react'
import './list.scss'
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons'
import ListItem from '../listItem/ListItem';

const List = () => {

    const listRef = useRef();

    //function for left right arrow button
    const handleClick = (direction)=>{
        let distance = listRef.current.getBoundingClientRect().x - 50; 
        if(direction === 'left'){
            listRef.current.style.transform = `translateX(${230 + distance}px)`;
        }
        if(direction === 'right'){
            listRef.current.style.transform = `translateX(${-230 + distance}px)`;
        }
    }
    return (
        <div className='list'>
            <span className="listTitle">Continue to watch</span>
            <div className="wrapper">
                <ArrowBackIosOutlined className='sliderArrow left' onClick={()=> handleClick("left")} />
                <div className="container" ref={listRef}>
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                </div>
                <ArrowForwardIosOutlined className='sliderArrow right' onClick={()=> handleClick("right")}  />
            </div>
        </div>
    )
}

export default List
