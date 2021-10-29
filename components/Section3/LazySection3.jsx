import React from "react";
import dynamic from "next/dynamic";

const Section3 = dynamic(() =>
    import(/*webpackChunkName: "Section3_DYNAMIC_IMPORT"*/'./Section3').then((module) => module.Section3)
)

export function LazySection3() {
    console.log('created LazySection3')
    return (
            <Section3 />
    )
}