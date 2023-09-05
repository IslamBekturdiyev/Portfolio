'use client';
import React, { useEffect, useState } from 'react'
import { gsap } from 'gsap';
import {usePathname} from 'next/navigation';

const Cursor = () => {

    const pathname = usePathname();
   
    useEffect(() => {
        
        const cursor = document.getElementById('custom-cursor');
        const links = document.querySelectorAll('a');
        const cursorText = document.querySelector('.cursor-text');
        const smallgeryTexts = document.querySelectorAll('p');

        const onMouseMove = (event) => {
            const {clientX, clientY} = event;
            gsap.to(cursor,{x:clientX,y:clientY})
        }

        const onMouseEnterLink = (event) => {
            const link = event.target;
            if (link.classList.contains('open')) {
                gsap.to(cursor, {scale:4})
                cursorText.style.display = 'block';
            }else{
                gsap.to(cursor, {scale:4})
            }
        }

        const onMouseLeaveLink = () => {
            gsap.to(cursor, {scale:1})
            cursorText.style.display = 'none'
        }

        const defaultMove = () => {
            gsap.to(cursor, {scale:4})
        }



        document.addEventListener('mousemove', onMouseMove);
        links.forEach((link) => {
            link.addEventListener('mouseenter', onMouseEnterLink)
            link.addEventListener('mouseleave', onMouseLeaveLink)
        });

        smallgeryTexts.forEach((tetxs) => {
            tetxs.addEventListener('mouseenter', defaultMove);
            tetxs.addEventListener('mouseleave', onMouseLeaveLink);
        })
    }, [pathname])
  return (
    <div id='custom-cursor' className='custom-cursor'>
        <span className='cursor-text'>Open</span>
    </div>
  )
}

export default Cursor