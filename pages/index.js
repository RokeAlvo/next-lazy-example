import styles from '../styles/Home.module.css'
import {LazySection1} from "../components/Section1/LazySection1";
import LazyHydrate from "react-lazy-hydration";
import {LazySection4} from "../components/Section4/LazySection4";
import {LazySection3} from "../components/Section3/LazySection3";
import {LazySection2} from "../components/Section2/LazySection2";

export default function Home() {
    return (
        <div className={styles.container}>
            <LazyHydrate ssrOnly>
                <LazySection1/>
            </LazyHydrate>
            <LazySection2/>
            <LazyHydrate whenVisible>
                <LazySection3/>
            </LazyHydrate>
            <LazyHydrate whenVisible>
                <LazySection4/>
            </LazyHydrate>
        </div>
    )
}
