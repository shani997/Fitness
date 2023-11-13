import About from '../component/About/About'
import { cardObjOne } from '../Data/FeaturesData';

function AboutUs() {
    return (
        <>
            <About {...cardObjOne} />
        </>
    )
}
export default AboutUs