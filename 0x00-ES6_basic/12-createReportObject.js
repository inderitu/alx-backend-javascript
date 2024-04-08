export default function createReportObject(employeesList) {
	return {
		allEmployees: employeesList,
		getNumberOfDepartments(list) {
			let count = 0
			for (let x in list) {
				//console.log(x)
				count++
			}
			return count
		}
	}
}
