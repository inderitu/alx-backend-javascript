export default async function handleResponseFromAPI(promise) {
	return promise
		.then(() => {
			return {
				status: 200,
				body: 'Success'
			}
		})
		.catch(() => { throw new Error() })
		.then(() => console.log("Got a response from the API"));
}
