import { schema } from 'normalizr';

const task = new schema.Entity('tasks');
const pa = new schema.Entity('pas', { tasks: [ task ] });

const changeType = new schema.Entity('changes', { pas: [ pa ] });

const competence = new schema.Entity('competences');
const competenceBlock = new schema.Entity('competenceBlocks', {
	competences: [ competence ]
});
const competenceStage = new schema.Entity('competenceStages', {
	competenceBlocks: [ competenceBlock ]
});

const prevAssessment = new schema.Entity('assessments',
	{
		changes: [ changeType ],
		competenceStages: [ competenceStage ]
	}
);
const curAssessment = new schema.Entity('assessments',
	{
		changes: [ changeType ],
		competenceStages: [ competenceStage ]
	}
);

const assessment = new schema.Array({
	prevAssessment,
	curAssessment
}, 'type');
export default assessment;


/*
assessments
	changes
		pas
			tasks
	competenceBlocks
		categoryCompetences
			competences
*/