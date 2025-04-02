import Career from '../components/sections/index/career';
import Color 		from '../components/utils/page.colors.util'
import colors 		from '../content/index/_colors.json'

//
export default function ExperiencePage() {

    return (
        <>
            <Color colors={colors} />
            <Career />
        </>
    );
}