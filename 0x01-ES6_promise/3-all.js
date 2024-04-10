import { uploadPhoto, createUser } from "./utils.js";

export default async function handleProfileSignup() {
	await createUser()
		.then(async ({ firstName, lastName }) => {
			return await uploadPhoto()
				.then(({ body }) => {
					console.log(body, firstName, lastName)
				})
		})
		.catch(() => console.log("Signup system offline"))
}
