import React from "react";
import style from './Section1.module.css'

export function Section1() {
    console.log('created Section1')
    return (
        <div className={style.section1}>
            <h2>Section1</h2>
        </div>
    )
}