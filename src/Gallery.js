import React,{ useState, useEffect } from 'react';
import Pictures from './data/pictures'
import styles from './Gallery.module.css';

function Gallery (){
    // console.log(Pictures);

    const [index, setIndex] = useState(0)

    //using setTimeout 
    // useEffect(()=>{
    //     console.log(`index ${index}`)
    //     setTimeout(()=>{
    //         setIndex((index+1)%Pictures.length)
    //     },2000)

    //     //callback perform cleanup 
    //     return ()=>{
    //         clearInterval(interval);
    //     }
    // },[index])

    useEffect(()=>{
        console.log(`index ${index}`)
        const interval = setInterval(()=>{
            setIndex((index+1)%Pictures.length)
        },2000)

        //callback perform cleanup 
        return ()=>{
            clearInterval(interval);
        }
    },[index])

    return (
        <>
        <br/>
        <img 
            className={styles.Slider}
            src={Pictures[index].image} alt="Gallery Imag"
        /> 
        <br/>
        </>
    )
}
export default Gallery