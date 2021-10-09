import React, { useRef, useState } from 'react'
import './list.scss'
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons'
import ListItem from '../listItem/ListItem';

const List = () => {
    const [sliderNumber,setSliderNumber] = useState(0);
    const [isMoved,setIsMoved] = useState(false);
    const listRef = useRef();

    //function for left right arrow button
    const handleClick = (direction)=>{
        setIsMoved(true);
        let distance = listRef.current.getBoundingClientRect().x - 50; 
        if(direction === 'left' && sliderNumber > 0){
            setSliderNumber(sliderNumber - 1);
            listRef.current.style.transform = `translateX(${230 + distance}px)`;
        }
        if(direction === 'right' && sliderNumber < 5){
            setSliderNumber(sliderNumber + 1);
            listRef.current.style.transform = `translateX(${-230 + distance}px)`;
        }
    }
    return (
        <div className='list'>
            <span className="listTitle">Continue to watch</span>
            <div className="wrapper">
                <ArrowBackIosOutlined className='sliderArrow left' onClick={()=> handleClick("left")}
                    style={{display: !isMoved && 'none'}}
                />
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
