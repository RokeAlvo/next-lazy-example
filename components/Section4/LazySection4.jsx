import React from "react";
import dynamic from "next/dynamic";

const Section4 = dynamic(() =>
    import(/*webpackChunkName: "Section4_DYNAMIC_IMPORT"*/'./Section4').then((module) => module.Section4)
)

export function LazySection4() {
    console.log('created LazySection4')
    return (
            <Section4 />
    )
}