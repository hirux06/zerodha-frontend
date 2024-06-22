import Awards from "./Awards";
import Education from "./Education";
import Hero from "./Hero";
import Pricing from "./Pricing";
import Stats from "./Stats";
import OpenAccount from "../../OpenAccount"

export default function HomPage() {
    return ( 
        <>

            <Hero />
            <Awards />
            <Stats />
            <Pricing />
            <Education />
            <OpenAccount />

        </>
     );
}

