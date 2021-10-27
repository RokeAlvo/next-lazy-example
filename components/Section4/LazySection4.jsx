import React,{lazy} from "react";
import dynamic from "next/dynamic";


export function LazySection4() {
    console.log('created LazySection4')
    const LazySection = lazy(() =>
        import(/*webpackChunkName: "Section4"*/'./Section4').then((module) => module.Section4)
    )
    return (
            <LazySection />
    )
}