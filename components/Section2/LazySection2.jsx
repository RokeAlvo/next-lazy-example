import React from "react";
import dynamic from "next/dynamic";

const Section2 = dynamic(() =>
    import(/*webpackChunkName: "Section2_DYNAMIC_IMPORT"*/'./Section2').then((module) => module.Section2)
)

export function LazySection2() {
    console.log('created LazySection2')
    return (
        <Section2/>
    )
}