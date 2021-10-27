import styles from '../styles/Home.module.css'
import {LazySection1} from "../components/Section1/LazySection1";
import {Section2} from "../components/Section2/Section2";
import {Section3} from "../components/Section3/Section3";
import {Section4} from "../components/Section4/Section4";
import LazyHydrate from "react-lazy-hydration";
import {LazySection4} from "../components/Section4/LazySection4";

export default function Home() {
  return (
    <div className={styles.container}>
        <LazyHydrate ssrOnly>
            <LazySection1 />
        </LazyHydrate>
        <LazyHydrate ssrOnly>
            <Section2 />
        </LazyHydrate>
        <LazyHydrate ssrOnly>
            <Section3 />
        </LazyHydrate>
        <LazyHydrate ssrOnly>
            <LazySection4 />
        </LazyHydrate>
    </div>
  )
}
