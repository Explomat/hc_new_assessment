import { schema } from 'normalizr';

const task = new schema.Entity('tasks');
const pa = new schema.Entity('pas', { tasks: [ task ] });

const quarterType = new schema.Entity('quarters', { pas: [ pa ] });
const yearType = new schema.Entity('years', { pas: [ pa ] });
const halfYearType = new schema.Entity('halfYears', { pas: [ pa ] });

const taskCompetence = new schema.Entity('taskCompetences');
const block = new schema.Entity('blocks', {
	taskCompetences: [ taskCompetence ]
});
const competenceBlock = new schema.Entity('competences', {
	blocks: [ block ]
});

const prevAssessment = new schema.Entity('assessments',
	{
		changes: new schema.Array({
			quarter: quarterType,
			year: yearType,
			halfYear: halfYearType
		}, 'type'),
		competences: [ competenceBlock ]
	}
);
const curAssessment = new schema.Entity('assessments',
	{
		changes: new schema.Array({
			quarter: quarterType,
			year: yearType,
			halfYear: halfYearType
		}, 'type'),
		competences: [ competenceBlock ]
	}
);

const assessment = new schema.Array({
	prevAssessment,
	curAssessment
}, 'type');
export default assessment;


/*
assessments
	quarters
		pas
			tasks
	years
		pas
			tasks
	halfYears
		pas
			tasks
	competences
		blocks
			taskCompetences
*/