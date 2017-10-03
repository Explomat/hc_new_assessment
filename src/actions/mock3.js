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
<<<<<<< HEAD
						'type': 'halfYear',
						'title': 'Категория - PA',
						'bossFullname': 'Мельник Светлана Александровна',
						'halves': [
							{
								'id': 'new_halves_0',
								'pas': [
									{
										'id': '6447215975931669071',
										'isEdit': false,
										'title': 'Данные за первое полугодие',
										'blockFields': [ 'fact' ],
										'tasksHeader': {
											'name': 'Наименование',
											'unit': 'eд.изм-я',
											'weight': 'вес, %',
											'fact': 'ФАКТ',
											'percent': '% выполнения'
										},
										'tasks': [
											{
												'id': 'wl_standart_comand_KPI_14385',
												'name': 'Итоговое выполнение бонусного плана СПА',
												'threshold': null,
												'plan': '',
												'challenge': null,
												'fact': '',
												'mark': '6055.5',
												'weight': '10000',
												'isEdit': false,
												'unit': '%',
												'percent': '0'
											},
											{
												'id': 'wl_standart_comand_KPI_8488',
												'name': 'Выполнение личного плана подбора',
												'threshold': '80',
												'plan': '100',
												'challenge': '100',
												'fact': '100',
												'mark': '10000',
												'weight': '5000',
												'isEdit': false,
												'unit': '%',
												'percent': '100'
											},
											{
												'id': 'wl_standart_comand_KPI_3164',
												'name': 'Выполнение норматива',
												'threshold': null,
												'plan': '30',
												'challenge': null,
												'fact': '6.33',
												'mark': '2111',
												'weight': '5000',
												'isEdit': false,
												'unit': 'шт.',
												'percent': '0'
											}
										],
										'calcs': [
											{
												'id': 'calc_0',
												'name': 'Суммарный вес индивидуальных показателей',
												'value': '20000'
											},
											{
												'id': 'calc_1',
												'name': 'Процент выполнения',
												'value': '6055.5'
											}
										]
									},
									{
										'id': '6447213970346096472',
										'isEdit': false,
										'title': 'Результат за январь 2017',
										'blockFields': [ 'fact' ],
										'tasksHeader': {
											'name': 'Наименование',
											'unit': 'eд.изм-я',
											'weight': 'вес, %',
											'fact': 'ФАКТ',
											'percent': '% выполнения'
										},
										'tasks': [
											{
												'id': 'wl_standart_comand_KPI_7790',
												'name': 'Выполнение личного плана подбора',
												'threshold': '80',
												'plan': '100',
												'challenge': '100',
												'fact': '100',
												'mark': '10000',
												'weight': '5000',
												'isEdit': false,
												'unit': '%',
												'percent': '100'
											},
											{
												'id': 'wl_standart_comand_KPI_7193',
												'name': 'Выполнение норматива',
												'threshold': null,
												'plan': '30',
												'challenge': null,
												'fact': '4',
												'mark': '1333',
												'weight': '5000',
												'isEdit': false,
												'unit': 'шт.',
												'percent': '0'
											}
										],
										'calcs': [
											{
												'id': 'calc_0',
												'name': 'Суммарный вес индивидуальных показателей',
												'value': '10000'
											},
											{
												'id': 'calc_1',
												'name': 'Процент выполнения',
												'value': '5666.5'
											}
										]
									}
								],
								'title': 'Первое полугодие',
								'bossFullname': 'Мельник Светлана Александровна'
							},
							{
								'id': 'new_halves_1',
								'pas': [],
								'title': 'Второе полугодие',
								'bossFullname': 'Мельник Светлана Александровна'
							}
						]
					},
					{
						'id': 'type_1',
						'type': 'halfYear',
						'title': 'Категория - PA',
						'bossFullname': 'Люзина Ольга Алексеевна',
						'halves': [
							{
								'id': 'new_halves_0',
								'pas': [
									{
										'id': '6447213964171935828',
										'isEdit': false,
										'title': 'Результат за февраль 2017',
										'blockFields': [ 'fact' ],
										'tasksHeader': {
											'name': 'Наименование',
											'unit': 'eд.изм-я',
											'weight': 'вес, %',
											'fact': 'ФАКТ',
											'percent': '% выполнения'
										},
										'tasks': [
											{
												'id': 'wl_standart_comand_KPI_16376',
												'name': 'Выполнение личного плана подбора',
												'threshold': '80',
												'plan': '100',
												'challenge': '100',
												'fact': '100',
												'mark': '10000',
												'weight': '5000',
												'isEdit': false,
												'unit': '%',
												'percent': '100'
											},
											{
												'id': 'wl_standart_comand_KPI_13431',
												'name': 'Выполнение норматива',
												'threshold': null,
												'plan': '30',
												'challenge': null,
												'fact': '12',
												'mark': '4000',
												'weight': '5000',
												'isEdit': false,
												'unit': 'шт.',
												'percent': '0'
											}
										],
										'calcs': [
											{
												'id': 'calc_0',
												'name': 'Суммарный вес индивидуальных показателей',
												'value': '10000'
											},
											{
												'id': 'calc_1',
												'name': 'Процент выполнения',
												'value': '7000'
											}
										]
									},
									{
										'id': '6447213969419214830',
										'isEdit': false,
										'title': 'Результат за март 2017',
										'blockFields': [ 'fact' ],
										'tasksHeader': {
											'name': 'Наименование',
											'unit': 'eд.изм-я',
											'weight': 'вес, %',
											'fact': 'ФАКТ',
											'percent': '% выполнения'
										},
										'tasks': [
											{
												'id': 'wl_standart_comand_KPI_7851',
												'name': 'Выполнение личного плана подбора',
												'threshold': '80',
												'plan': '100',
												'challenge': '100',
												'fact': '100',
												'mark': '10000',
												'weight': '5000',
												'isEdit': false,
												'unit': '%',
												'percent': '100'
											},
											{
												'id': 'wl_standart_comand_KPI_4469',
												'name': 'Выполнение норматива',
												'threshold': null,
												'plan': '30',
												'challenge': null,
												'fact': '3',
												'mark': '1000',
												'weight': '5000',
												'isEdit': false,
												'unit': 'шт.',
												'percent': '0'
											}
										],
										'calcs': [
											{
												'id': 'calc_0',
												'name': 'Суммарный вес индивидуальных показателей',
												'value': '10000'
											},
											{
												'id': 'calc_1',
												'name': 'Процент выполнения',
												'value': '5500'
											}
										]
									}
								],
								'title': 'Первое полугодие',
								'bossFullname': 'Люзина Ольга Алексеевна'
							},
							{
								'id': 'new_halves_1',
								'pas': [],
								'title': 'Второе полугодие',
								'bossFullname': 'Люзина Ольга Алексеевна'
							}
						]
					},
					{
						'id': 'type_2',
						'type': 'quarter',
						'title': 'Категория - S',
						'bossFullname': 'Болотских Софья Жановна',
						'pas': [
							{
								'id': '6447207745862773255',
								'isEdit': false,
								'title': 'Итоги за второй квартал 2017',
								'blockFields': [ 'fact' ],
=======
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
>>>>>>> origin/master
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
<<<<<<< HEAD
										'id': '2',
										'name': 'Процент премии',
										'value': '11.91'
									}
								]
							},
							{
								'id': '6447207746937950240',
								'isEdit': true,
								'title': 'Итоги за четвертый квартал 2017',
								'blockFields': [ 'fact' ],
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
										'id': 'wl_standart_comand_KPI_8732',
										'name': 'Активные клиенты Банк/Дирекция',
										'threshold': '2810354',
										'plan': '3512942',
										'challenge': '4215530',
										'fact': '',
=======
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
>>>>>>> origin/master
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