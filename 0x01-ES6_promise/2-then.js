export default async function handleResponseFromAPI(promise) {
	return await promise
		.then(() => {
			return {
				status: 200,
				body: 'Success'
			}
		})
		.catch(() => { return new Error() })
		.then(() => console.log("Got a response from the API"));
}
