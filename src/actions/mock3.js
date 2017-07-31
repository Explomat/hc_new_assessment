export function assessments(){
	return {
		'step': 'firstStep',
		'isBoss': false,
		'isCollaborator': true,
		'assessments': [
			{
				'id': 'assessment_1',
				'type': 'curAssessment',
				'title': 'Результаты за 2017 год',
				'changes': [
					{
						'id': 'type_0',
						'type': 'year',
						'category': 'N',
						'title': 'Категория премирования N ( Период с 01.01.2017 по  Текущую дату  )',
						'bossFullname': 'Оценивающий руководитель - Дьяконова Татьяна Ивановна',
						'pas': [
							{
								'id': '6448497924395448558',
								'type': 'year',
								'isEdit': true,
								'title': 'Результаты за год',
								'tasksHeader': {
									'name': 'Наименование',
									'unit': 'eд.изм-я',
									'weight': 'вес, %',
									'threshold': 'MIN',
									'plan': 'TARG',
									'challenge': 'MAX',
									'fact': 'ФАКТ',
									'percent': '% выполнения'
								},
								'tasks': [
									{
										'id': 'wl_standart_comand_KPI_12974',
										'name': 'Активные клиенты Банк/Дирекция',
										'threshold': null,
										'plan': '',
										'challenge': null,
										'fact': '',
										'mark': '0',
										'weight': '15',
										'isEdit': false,
										'unit': 'кол-во',
										'percent': '0'
									},
									{
										'id': 'wl_standart_comand_KPI_14593',
										'name': 'NPS рыночный Банк/Дирекция',
										'threshold': null,
										'plan': '',
										'challenge': null,
										'fact': '',
										'mark': '0',
										'weight': '15',
										'isEdit': false,
										'unit': 'процент',
										'percent': '0'
									},
									{
										'id': 'wl_standart_comand_KPI_1988',
										'name': 'P&L Банка/Дирекции',
										'threshold': null,
										'plan': '',
										'challenge': null,
										'fact': '',
										'mark': '0',
										'weight': '10',
										'isEdit': false,
										'unit': 'тыс.руб.',
										'percent': '0'
									},
									{
										'id': 'fy9vk',
										'name': 'Автоматизация оценочных процедур',
										'threshold': '80',
										'plan': '90',
										'challenge': '100',
										'fact': '0',
										'mark': '0',
										'weight': '20',
										'isEdit': true,
										'unit': '%',
										'percent': '0'
									},
									{
										'id': 'q6jgj',
										'name': 'Социальная сеть и моб. приложение',
										'threshold': '80',
										'plan': '90',
										'challenge': '100',
										'fact': '0',
										'mark': '0',
										'weight': '10',
										'isEdit': true,
										'unit': '%',
										'percent': '0'
									},
									{
										'id': '5qg2o',
										'name': 'Для примера',
										'threshold': '0.1',
										'plan': '0.2',
										'challenge': '0.3',
										'fact': '0',
										'mark': '0',
										'weight': '30',
										'isEdit': true,
										'unit': '%',
										'percent': '0'
									}
								],
								'calcs': [
									{
										'id': 'calc_0',
										'name': 'Суммарный вес показателей',
										'value': '100'
									},
									{
										'id': '1',
										'name': 'Процент выполнения',
										'value': '0'
									},
									{
										'id': '2',
										'name': 'Процент премии',
										'value': '0'
									}
								]
							}
						]
					}
				],
				'competenceStages': [
					{
						'id': 'stage_1',
						'title': 'Компетенции и ценности за 1 полугодие',
						'tasksHeader': [
							'Название компетенции',
							'Оценка сотрудника',
							'Оценка руководителя'
						],
						'competenceBlocks': [
							{
								'id': '6278653546418306073_stage_1',
								'title': 'Ценности',
								'competences': [
									{
										'id': '6307110834412945217_stage_1',
										'title': {
											'isEdit': false,
											'value': 'Ответственность'
										},
										'userMark': {
											'isEdit': true,
											'value': {
												'selectedPayload': 'l4agz',
												'items': [
													{
														'payload': '0',
														'text': 'Выберите значение'
													},
													{
														'payload': 'ckwtz',
														'text': 'Требует развития'
													},
													{
														'payload': 'o964j',
														'text': 'Соответствует'
													},
													{
														'payload': 'l4agz',
														'text': 'Превосходит ожидания'
													}
												]
											}
										},
										'bossMark': {
											'isEdit': false,
											'value': {
												'selectedPayload': '0',
												'items': [
													{
														'payload': '0',
														'text': 'Выберите значение'
													},
													{
														'payload': 'ckwtz',
														'text': 'Требует развития'
													},
													{
														'payload': 'o964j',
														'text': 'Соответствует'
													},
													{
														'payload': 'l4agz',
														'text': 'Превосходит ожидания'
													}
												]
											}
										}
									},
									{
										'id': '6307111560226615556_stage_1',
										'title': {
											'isEdit': false,
											'value': 'Открытость'
										},
										'userMark': {
											'isEdit': true,
											'value': {
												'selectedPayload': '4xcbx',
												'items': [
													{
														'payload': '0',
														'text': 'Выберите значение'
													},
													{
														'payload': '5pv0p',
														'text': 'Требует развития'
													},
													{
														'payload': '48c81',
														'text': 'Соответствует'
													},
													{
														'payload': '4xcbx',
														'text': 'Превосходит ожидания'
													}
												]
											}
										},
										'bossMark': {
											'isEdit': false,
											'value': {
												'selectedPayload': '0',
												'items': [
													{
														'payload': '0',
														'text': 'Выберите значение'
													},
													{
														'payload': '5pv0p',
														'text': 'Требует развития'
													},
													{
														'payload': '48c81',
														'text': 'Соответствует'
													},
													{
														'payload': '4xcbx',
														'text': 'Превосходит ожидания'
													}
												]
											}
										}
									},
									{
										'id': '6307112149464583575_stage_1',
										'title': {
											'isEdit': false,
											'value': 'Энергия'
										},
										'userMark': {
											'isEdit': true,
											'value': {
												'selectedPayload': '31q14',
												'items': [
													{
														'payload': '0',
														'text': 'Выберите значение'
													},
													{
														'payload': 'x9dn9',
														'text': 'Требует развития'
													},
													{
														'payload': 'wsceh',
														'text': 'Соответствует'
													},
													{
														'payload': '31q14',
														'text': 'Превосходит ожидания'
													}
												]
											}
										},
										'bossMark': {
											'isEdit': false,
											'value': {
												'selectedPayload': '0',
												'items': [
													{
														'payload': '0',
														'text': 'Выберите значение'
													},
													{
														'payload': 'x9dn9',
														'text': 'Требует развития'
													},
													{
														'payload': 'wsceh',
														'text': 'Соответствует'
													},
													{
														'payload': '31q14',
														'text': 'Превосходит ожидания'
													}
												]
											}
										}
									},
									{
										'id': '6307112793705101574_stage_1',
										'title': {
											'isEdit': false,
											'value': 'Партнерство'
										},
										'userMark': {
											'isEdit': true,
											'value': {
												'selectedPayload': 'dzcaz',
												'items': [
													{
														'payload': '0',
														'text': 'Выберите значение'
													},
													{
														'payload': 'uc4qu',
														'text': 'Требует развития'
													},
													{
														'payload': '1bxnn',
														'text': 'Соответствует'
													},
													{
														'payload': 'dzcaz',
														'text': 'Превосходит ожидания'
													}
												]
											}
										},
										'bossMark': {
											'isEdit': false,
											'value': {
												'selectedPayload': '0',
												'items': [
													{
														'payload': '0',
														'text': 'Выберите значение'
													},
													{
														'payload': 'uc4qu',
														'text': 'Требует развития'
													},
													{
														'payload': '1bxnn',
														'text': 'Соответствует'
													},
													{
														'payload': 'dzcaz',
														'text': 'Превосходит ожидания'
													}
												]
											}
										}
									},
									{
										'id': '6307113184888227055_stage_1',
										'title': {
											'isEdit': false,
											'value': 'Клиентоориентированность'
										},
										'userMark': {
											'isEdit': true,
											'value': {
												'selectedPayload': 'ytlxy',
												'items': [
													{
														'payload': '0',
														'text': 'Выберите значение'
													},
													{
														'payload': 'cd8un',
														'text': 'Требует развития'
													},
													{
														'payload': 'l00ao',
														'text': 'Соответствует'
													},
													{
														'payload': 'ytlxy',
														'text': 'Превосходит ожидания'
													}
												]
											}
										},
										'bossMark': {
											'isEdit': false,
											'value': {
												'selectedPayload': '0',
												'items': [
													{
														'payload': '0',
														'text': 'Выберите значение'
													},
													{
														'payload': 'cd8un',
														'text': 'Требует развития'
													},
													{
														'payload': 'l00ao',
														'text': 'Соответствует'
													},
													{
														'payload': 'ytlxy',
														'text': 'Превосходит ожидания'
													}
												]
											}
										}
									}
								]
							},
							{
								'id': '6424034489453521534_stage_1',
								'title': 'Компетенции',
								'competences': [
									{
										'id': '6419151482710924646_stage_1',
										'title': {
											'isEdit': false,
											'value': 'Ориентация на результат'
										},
										'userMark': {
											'isEdit': true,
											'value': {
												'selectedPayload': 'b6c61',
												'items': [
													{
														'payload': '0',
														'text': 'Выберите значение'
													},
													{
														'payload': 'nsa2n',
														'text': 'Требует развития'
													},
													{
														'payload': 'ft021',
														'text': 'Соответствует'
													},
													{
														'payload': 'b6c61',
														'text': 'Превосходит ожидания'
													}
												]
											}
										},
										'bossMark': {
											'isEdit': false,
											'value': {
												'selectedPayload': '0',
												'items': [
													{
														'payload': '0',
														'text': 'Выберите значение'
													},
													{
														'payload': 'nsa2n',
														'text': 'Требует развития'
													},
													{
														'payload': 'ft021',
														'text': 'Соответствует'
													},
													{
														'payload': 'b6c61',
														'text': 'Превосходит ожидания'
													}
												]
											}
										}
									},
									{
										'id': '6419152925503545596_stage_1',
										'title': {
											'isEdit': false,
											'value': 'Применение профессиональных знаний и технологий'
										},
										'userMark': {
											'isEdit': true,
											'value': {
												'selectedPayload': '3hox6',
												'items': [
													{
														'payload': '0',
														'text': 'Выберите значение'
													},
													{
														'payload': '7m5ic',
														'text': 'Требует развития'
													},
													{
														'payload': '4t2sg',
														'text': 'Соответствует'
													},
													{
														'payload': '3hox6',
														'text': 'Превосходит ожидания'
													}
												]
											}
										},
										'bossMark': {
											'isEdit': false,
											'value': {
												'selectedPayload': '0',
												'items': [
													{
														'payload': '0',
														'text': 'Выберите значение'
													},
													{
														'payload': '7m5ic',
														'text': 'Требует развития'
													},
													{
														'payload': '4t2sg',
														'text': 'Соответствует'
													},
													{
														'payload': '3hox6',
														'text': 'Превосходит ожидания'
													}
												]
											}
										}
									}
								]
							}
						]
					}
				]
			}
		]
	};
}