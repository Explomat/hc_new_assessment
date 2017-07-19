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

function CompetenceStage(){
	function Competence(){
		return {
			id: _getRandomArbitrary(0, 1000000),
			title: { isEdit: false, value: 'Партнёрство' },
			userMark: { 
				isEdit: false, 
				value: {
					selectedPayload: 0,
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
					selectedPayload: 0,
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
		competenceBlocks: [
			{
				id:  _getRandomArbitrary(0, 1000000),
				title: 'Ценности',
				competences: [Competence(), Competence()]
			}
		]
	};
}

// Квартальная 
function QuarterType(){
	return {
		id: _getRandomArbitrary(0, 1000000),
		type: 'quarter',
		title: 'QUARTER',
		bossFullname: 'Габдуллин Дамир Габдульбариевич',
		pas: [Pa(), Pa()]
	};
}

// Годовая
function YearType(){
	return {
		id: _getRandomArbitrary(0, 1000000),
		type: 'year',
		title: 'YEAR',
		bossFullname: 'Габдуллин Дамир Габдульбариевич',
		pas: [ Pa() ]
	};
}

// Полугодие с разбивкой по месяцам
function HalfYearType(){
	return {
		id: _getRandomArbitrary(0, 1000000),
		type: 'halfYear',
		title: 'HALF YEAR',
		bossFullname: 'Габдуллин Дамир Габдульбариевич',
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
			changes: [ HalfYearType() ],
			competenceStages: [CompetenceStage(), CompetenceStage()]
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
			competenceStages: [ CompetenceStage() ]
		}
	];
}

/*
assessments
	changes
		pas
			tasks
		
	competenceBlocks
		categoryCompetences
			competences
*/