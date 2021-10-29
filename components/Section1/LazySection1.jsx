import React from "react";
import dynamic from "next/dynamic";

const Section1 = dynamic(() =>
    import(/*webpackChunkName: "Section1_DYNAMIC_IMPORT"*/'./Section1').then((mod) => mod.Section1)
)

export function LazySection1() {
    return (
        <Section1/>
    )
}