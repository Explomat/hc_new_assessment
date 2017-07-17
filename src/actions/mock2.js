function _getRandomArbitrary(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function Pa(_obj) {
	function Task(_tobj){
		const obj = _tobj || {};
		const id = _getRandomArbitrary(0, 1000000);
		return {
			id,
			isEdit: obj.isEdit === undefined ? true : obj.isEdit,
			name: obj.name || 'Задача ' + id,
			unit: obj.unit || '1',
			weight: obj.weight || '2',
			min: obj.min || '3',
			targ: obj.targ || '4',
			max: obj.max || '5',
			fact: obj.fact || '6',
			percent: obj.percent || '22',
			comment: obj.comment || 'Комментарий'
		};
	}

	const obj = _obj || {};
	const id = _getRandomArbitrary(0, 1000000);
	return {
		id,
		isEdit: obj.isEdit === undefined ? true : obj.isEdit,
		title: 'Месяц ' + id,
		tasksHeader: {
			name: 'Наименование',
			unit: 'Ед. измерения',
			weight: 'Вес %',
			min: 'MIN',
			percent: '% выполнения'
		},
		tasks: [Task(), Task()],
		calcs: [
			{
				name: '% выполнения',
				value: 16
			},
			{
				name: 'Суммарный вес индивидуальных показателей',
				value: 75
			}
		]
	};	
}

function CompetenceBlock(){
	function TaskCompetence(){
		return {
			id: _getRandomArbitrary(0, 1000000),
			title: { isEdit: false, value: 'Партнёрство' },
			userMark: { 
				isEdit: false, 
				value: {
					selected: 0,
					items: [
						{
							payload: 0, 
							text: 'Соответствует'
						},
						{
							payload: 1, 
							text: 'Не соответствует'
						}
					]
				} 
			},
			bossMark: { 
				isEdit: false, 
				value: {
					selected: 0,
					items: [
						{
							payload: 0, 
							text: 'Соответствует'
						},
						{
							payload: 1, 
							text: 'Не соответствует'
						}
					]
				} 
			},
			comment: { isEdit: false, value: 'Умный кандидат' }
		};
	}

	return {
		id: _getRandomArbitrary(0, 1000000),
		title: 'Компетенции за 1 полугодие',
		tasksHeader: ['Название компетенции', 'Оценка сотрудника', 'Оценка руководителя', 'Комментарий'],
		blocks: [
			{
				id:  _getRandomArbitrary(0, 1000000),
				title: 'Ценности',
				taskCompetences: [TaskCompetence(), TaskCompetence()]
			}
		]
	};
}

// Квартальная 
function QuarterType(){
	return {
		id: _getRandomArbitrary(0, 1000000),
		type: 'quarter',
		pas: [Pa(), Pa()]
	};
}

// Годовая
function YearType(){
	return {
		id: _getRandomArbitrary(0, 1000000),
		type: 'year',
		pas: [ Pa() ]
	};
}

// Полугодие с разбивкой по месяцам
function HalfYearType(){
	return {
		id: _getRandomArbitrary(0, 1000000),
		type: 'halfYear',
		pas: [Pa(), Pa(), Pa()]
	};
}


export function assessments(){
	return [
		{
			id: 0,
			type: 'prevAssessment',
			title: 'Оценка по ',
			startDate: '1.01.2017',
			finishDate: '30.03.2017',
			changes: [ YearType() ],
			competences: [CompetenceBlock(), CompetenceBlock()]
		},
		{
			id: 1,
			type: 'curAssessment',
			title: 'Показатели за 2017 год',
			startDate: '1.01.2017',
			finishDate: '30.03.2017',
			changes: [
				QuarterType(),
				YearType(),
				HalfYearType(),
				QuarterType(),
				QuarterType()
			],
			competences: [ CompetenceBlock() ]
		}
	];
}

/*
assessments
	changes
		pas
			tasks
	competences
		blocks
			taskCompetences
*/