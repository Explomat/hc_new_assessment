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
						'category': 'D',
						'title': 'Категория премирования D ( C 01.01.2017 по 01.05.2017 )',
						'bossFullname': 'Оценивающий руководитель - Митряков Алексей Александрович',
						'pas': [
							{
								'id': '6448496501415706196',
								'isEdit': false,
								'type': 'year',
								'title': 'Данные за 1 квартал',
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
										'id': 'wl_standart_individual_KPI_11242',
										'name': 'Контроль рыночного риска, репортинг в CadCalc',
										'threshold': '90',
										'plan': '100',
										'challenge': '110',
										'fact': '100',
										'mark': '100',
										'weight': '20',
										'isEdit': false,
										'unit': '%',
										'percent': '100'
									},
									{
										'id': 'wl_standart_individual_KPI_10558',
										'name': 'Аналитика портфеля ЦБ  с момента покупки с учетом возможности к рефинансированию',
										'threshold': '90',
										'plan': '100',
										'challenge': '110',
										'fact': '100',
										'mark': '100',
										'weight': '20',
										'isEdit': false,
										'unit': '%',
										'percent': '100'
									},
									{
										'id': 'wl_standart_individual_KPI_10323',
										'name': 'Репортинг, ежедневный контроль оборотов, спредов и позиций в каналах розничной конверсии; расчет и контроль ROE и RWA портфеля, P/L, комиссий',
										'threshold': '90',
										'plan': '100',
										'challenge': '110',
										'fact': '100',
										'mark': '100',
										'weight': '30',
										'isEdit': false,
										'unit': '%',
										'percent': '100'
									},
									{
										'id': 'wl_standart_individual_KPI_17585',
										'name': 'СashFlow c горизонтом планирования до 90 дней',
										'threshold': '4',
										'plan': '3',
										'challenge': '2',
										'fact': '3',
										'mark': '100',
										'weight': '30',
										'isEdit': false,
										'unit': 'срок',
										'percent': '100'
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
										'value': '100'
									},
									{
										'id': '2',
										'name': 'Процент премии',
										'value': '50'
									}
								]
							},
							{
								'id': '6448501243637158444',
								'isEdit': true,
								'type': 'year',
								'title': 'Данные за год',
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
										'id': 'wl_standart_comand_KPI_5827',
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
										'id': 'wl_standart_comand_KPI_7613',
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
										'id': 'wl_standart_comand_KPI_16131',
										'name': 'P&L Банка/Дирекции',
										'threshold': null,
										'plan': '',
										'challenge': null,
										'fact': '',
										'mark': '0',
										'weight': '20',
										'isEdit': false,
										'unit': 'тыс.руб.',
										'percent': '0'
									}
								],
								'calcs': [
									{
										'id': 'calc_0',
										'name': 'Суммарный вес показателей',
										'value': '50'
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
							},
							{
								'id': '6448496502888543667',
								'isEdit': false,
								'type': 'year',
								'title': 'Данные за 2 квартал',
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
										'id': 'wl_standart_individual_KPI_6990',
										'name': 'Депозиты. All-in-cost',
										'threshold': '7',
										'plan': '6',
										'challenge': '5',
										'fact': '6',
										'mark': '100',
										'weight': '30',
										'isEdit': false,
										'unit': 'срок',
										'percent': '100'
									},
									{
										'id': 'wl_standart_individual_KPI_8474',
										'name': 'Репортинг, ежедневный контроль оборотов, спредов и позиций в каналах розничной конверсии; расчет и контроль ROE и RWA портфеля, P/L, комиссий',
										'threshold': '90',
										'plan': '100',
										'challenge': '110',
										'fact': '100',
										'mark': '100',
										'weight': '30',
										'isEdit': false,
										'unit': '%',
										'percent': '100'
									},
									{
										'id': 'wl_standart_individual_KPI_10983',
										'name': 'Валютные и процентные риски',
										'threshold': '7',
										'plan': '6',
										'challenge': '5',
										'fact': '6',
										'mark': '100',
										'weight': '40',
										'isEdit': false,
										'unit': 'срок',
										'percent': '100'
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
										'value': '100'
									},
									{
										'id': '2',
										'name': 'Процент премии',
										'value': '50'
									}
								]
							}
						]
					},
					{
						'id': 'type_1',
						'type': 'year',
						'category': 'D',
						'title': 'Категория премирования D ( C 01.05.2017 по Текущую дату )',
						'bossFullname': 'Оценивающий руководитель - Рябчиков Александр Николаевич',
						'pas': [
							{
								'id': '6448501243637158444',
								'isEdit': true,
								'type': 'year',
								'title': 'Данные за год',
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
										'id': 'wl_standart_comand_KPI_5827',
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
										'id': 'wl_standart_comand_KPI_7613',
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
										'id': 'wl_standart_comand_KPI_16131',
										'name': 'P&L Банка/Дирекции',
										'threshold': null,
										'plan': '',
										'challenge': null,
										'fact': '',
										'mark': '0',
										'weight': '20',
										'isEdit': false,
										'unit': 'тыс.руб.',
										'percent': '0'
									}
								],
								'calcs': [
									{
										'id': 'calc_0',
										'name': 'Суммарный вес показателей',
										'value': '50'
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
							},
							{
								'id': '6448496502888543667',
								'isEdit': false,
								'type': 'year',
								'title': 'Данные за 2 квартал',
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
										'id': 'wl_standart_individual_KPI_6990',
										'name': 'Депозиты. All-in-cost',
										'threshold': '7',
										'plan': '6',
										'challenge': '5',
										'fact': '6',
										'mark': '100',
										'weight': '30',
										'isEdit': false,
										'unit': 'срок',
										'percent': '100'
									},
									{
										'id': 'wl_standart_individual_KPI_8474',
										'name': 'Репортинг, ежедневный контроль оборотов, спредов и позиций в каналах розничной конверсии; расчет и контроль ROE и RWA портфеля, P/L, комиссий',
										'threshold': '90',
										'plan': '100',
										'challenge': '110',
										'fact': '100',
										'mark': '100',
										'weight': '30',
										'isEdit': false,
										'unit': '%',
										'percent': '100'
									},
									{
										'id': 'wl_standart_individual_KPI_10983',
										'name': 'Валютные и процентные риски',
										'threshold': '7',
										'plan': '6',
										'challenge': '5',
										'fact': '6',
										'mark': '100',
										'weight': '40',
										'isEdit': false,
										'unit': 'срок',
										'percent': '100'
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
										'value': '100'
									},
									{
										'id': '2',
										'name': 'Процент премии',
										'value': '50'
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
										},
										'userMark': {
											'isEdit': true,
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
										},
										'userMark': {
											'isEdit': true,
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
										},
										'userMark': {
											'isEdit': true,
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
										},
										'userMark': {
											'isEdit': true,
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
										},
										'userMark': {
											'isEdit': true,
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
										},
										'userMark': {
											'isEdit': true,
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
										},
										'userMark': {
											'isEdit': true,
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