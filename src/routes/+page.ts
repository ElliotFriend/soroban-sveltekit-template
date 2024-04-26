import helloWorld from '../contracts/hello_world'
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
    const { result } = await helloWorld.hello({ to: "you" })
	return {
        greeting: result,
	};
};
