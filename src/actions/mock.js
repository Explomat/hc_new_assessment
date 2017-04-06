// import numberToWords from 'number-to-words';
// import filter from 'lodash/filter';
// import findIndex from 'lodash/findIndex';
// import uuid from '../utils/uuid';
// import indexOf from 'lodash/indexOf';

function getRandomArbitrary(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

const calculatedFields = {
	// Total weight of individual indicators - Общий вес индивидуальных показателей
	'twoii': true,
	// Percent complete - Процент выполнения
	'pc': true,
	// Position in rating - ПОЗИЦИЯ В РЕЙТИНГЕ
	'pir': false,
	// Accuracy rating - СООТВЕТСТВИЕ РЕЙТИНГУ
	'ar': false,
	// Bonus percent - % премии
	'bp': true
};


function Task(id){
	return {
		id,
		name: 'Задача ' + id,
		unit: '1',
		weight: '2',
		min: '3',
		targ: '4',
		max: '5',
		fact: '6',
		percent: '22',
		isEdit: getRandomArbitrary(0, 2)
	};
}

function _getDataForCategory(viewType){
	switch (viewType){
		case 0:
			return {
				devPaId: 1, // Id оценки деятельности
				quarters: [
					{
						title: 'Квартал',
						tasks: {
							header: {
								name: 'Наименование',
								unit: '...',
								weight: '...',
								min: '...'
							},
							body:  [Task(1), Task(2)]
						},
						calculatedFields
					}
				]
			};
		case 1:
			return {
				title: 'Месяц',
				devPaId: 1,  // Id оценки деятельности
				tasks: {
					header: {
						name: 'Наименование',
						unit: '...',
						weight: '...',
						min: '...'
					},
					body:  [ Task(1) ]
				},
				calculatedFields
			};
		case 2:
			return {
				title: 'Год',
						
				year: {
					title: '',
					devPaId: 1,
					
					tasks: {
						header: {
							name: 'Наименование',
							unit: '...',
							weight: '...',
							min: '...'
						},
						body:  [ Task(1) ]
					},
					calculatedFields
				},
				months: [
					{
						title: '',
						devPaId: 1,
						
						tasks: {
							header: {
								name: 'Наименование',
								unit: '...',
								weight: '...',
								min: '...'
							},
							body:  [ Task(1) ]
						},
						calculatedFields
					}
				]
			};
		case 3:
			return {
				title: 'Пол года',
						
				halfYear: {
					title: '',
					devPaId: 1,
					
					tasks: {
						header: {
							name: 'Наименование',
							unit: '...',
							weight: '...',
							min: '...'
						},
						body:  [ Task(1) ]
					},
					calculatedFields,
					tests: [
						{
							name: 'test',
							result: '0..1000000',
							status: 'пройден'
						}
					]
				},
				months: [
					{
						title: '',
						devPaId: 1,
						
						tasks: {
							header: {
								name: 'Наименование',
								unit: '...',
								weight: '...',
								min: '...'
							},
							body:  [ Task(1) ]
						},
						calculatedFields,
						
						tests: []
					}
				]
			};
		default:
			return {};
	}
}

function Assessment(){
	return {
		assId: getRandomArbitrary(1, 5),
		paId: getRandomArbitrary(1, 6),
		halves: [
			Half(1)
		]
	};
}

function Half(id){
	return {
		title: 'Полугодие ' + id,
		startDate: new Date(),
		endDate: new Date(),
		categories: [
			Category(0),
			Category(1),
			Category(2),
			Category(3)
		]
	};
}

function Category(_viewType){
	const data = _getDataForCategory(_viewType);
	return {
		title: '',
		startDate: new Date(),
		endDate: new Date(),
		bossFullname: '\'ФИО руководителя\'',
		isEdit: true,
		viewType: _viewType,
		data
	};
}

export function getMockAssessment(){
	return Assessment();
}