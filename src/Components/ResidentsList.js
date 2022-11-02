import React from 'react';

export const List = [{}]

function ResidentsList() {
	return (
		<div className="pa-10 mt-10 w-75">
			<div className="font-weight-bold text-center">Residents List</div>
			<ul className="mt-10 styled w-50 mx-auto" data-testid="residentsNameList">
				{
					List.length === 0 ? (
						<div>No Student in the dormitory yet</div>
					) : (
						List.map((props, index) => {
							return (
							<li key={index} className="slide-up-fade-in" style={{
								textTransform: "capitalize"
							}}>
								{props.name}
							</li>
							)
						})
					)
				}
			</ul>
		</div>
	);
}

export default ResidentsList;