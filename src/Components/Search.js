import React, { useContext } from 'react';
import { Context } from '../context';
import { STUDENTS } from '../studentsList';
import { List } from './ResidentsList';

// `joiningDate` && `validityDate` format "yyyy-mm-dd"

function checkValidity(joiningDate, validityDate) {
	const now = new Date();
	const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
	const [year, month, day] = joiningDate.split('-');
	const [yyyy, mm, dd] = validityDate.split('-');
	const maxValid = new Date(yyyy, mm - 1, dd);
	const selected = new Date(year, month - 1, day);
	return (maxValid >= selected) && (maxValid >= today);
}

function Search() {
	const {setName, name, date, setDate, setError} = useContext(Context)

	function addStudent () {
		STUDENTS.findIndex(el =>{
			if(el.name.toLocaleLowerCase() === name.toLocaleLowerCase()){
				if(checkValidity(date, el.validityDate)){
					List.push({name: name})
					setError("")
					}else{
						setError(`Sorry, ${name}'s validity has Expired!`)
					}
			}else {
				setError(`Sorry, ${name} is not a verified student!`)
			}
		})
		setDate("")
		setName("")
	}

	// function addStudent(){
	// 	try {
	// 		STUDENTS.findIndex((el) =>{
	// 			if(el.name.toLocaleLowerCase() === name.toLocaleLowerCase()){
	// 				STUDENTS.findIndex((ele) =>{
	// 					if(checkValidity(date, ele.validityDate)){
	// 						List.push({name: name})
	// 						setDate("")
	// 						setName("")
	// 					}else{
	// 						setError(`Sorry, ${name}'s validity has Expired!`)
	// 					}
	// 				})
	// 			}else{
	// 				setError(`Sorry, ${name} is not a verified student!`)
	// 			}
	// 		})
	// 	} catch (error) {
	// 		setError(error)
	// 	}
	// }

	return (
		<div className="my-50 layout-row align-items-end justify-content-end">
			<label htmlFor="studentName">Student Name:
				<div>
					<input onChange={(e) =>{
						setName(e.target.value)
					}} value={name} id="studentName" data-testid="studentName" type="text" className="mr-30 mt-10"/>
				</div>
			</label>
			<label htmlFor="joiningDate">Joining Date:
				<div>
					<input onChange={(e) =>{
						setDate(e.target.value)
					}} value={date} id="joiningDate" data-testid="joiningDate" type="date" className="mr-30 mt-10"/>
				</div>
			</label>
			{name && date !== "" ? (
				<button onClick={addStudent}  type="button" data-testid="addBtn" className="small mb-0">Add</button>
			) : (
				<button type="button" data-testid="addBtn" className="small mb-0" disabled op="true">Add</button>
			)}
		</div>
	);
}

export default Search;
