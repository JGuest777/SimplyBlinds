import sanityClient from '@sanity/client'

export default sanityClient({
	projectId: 'lg07vys7',
	dataset: 'production',
	useCdn: true
})
