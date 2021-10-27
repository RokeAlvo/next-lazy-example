import React from "react";
import dynamic from "next/dynamic";

const Section = dynamic(() =>
    import(/*webpackChunkName: "Section1"*/'./Section1').then((mod) => mod.Section1)
)

export function LazySection1() {
    return (
        <Section/>
    )
}