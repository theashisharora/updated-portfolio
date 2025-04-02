import Technical 	from '../components/sections/index/technical'
import Color 		from '../components/utils/page.colors.util'
import colors 		from '../content/index/_colors.json'

//
export default function TechnicalPage() {

	return (
		<>
			<Color colors={colors} />
			<Technical />
		</>
	);
}