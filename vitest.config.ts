import { getViteConfig } from "astro/config"


export default getViteConfig({
    test: {
        coverage: {
            provider: 'istanbul'
        }
    }
})
