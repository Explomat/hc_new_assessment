export function assessments(){
	return [
		{
			'id': 'assessment_0',
			'type': 'prevAssessment',
			'title': 'Оценка - Карьерная лестница',
			'changes': [
				{
					'id': 'kl_0',
					'type': 'halfYear',
					'halves': [
						{
							'title': "Результаты по оценочной процедуре - Карьерная лестница'",
							'bossFullname': 'ФИО руководителя',
							'id': 'kl_halves_0',
							'pas': [
								{
									'id': '6441884232411778397',
									'isEdit': false,
									'title': 'Итоги за период',
									'tasksHeader': {
										'name': 'Наименование',
										'unit': 'eд.изм-я',
										'weight': 'вес, %',
										'fact': 'ФАКТ'
									},
									'tasks': [
										{
											'id': 'wl_standart_14485',
											'name': 'Средневзвешенное выполнение целевого значения Мой Кредит',
											'unit': '%',
											'weight': 'РќРµС‚',
											'fact': '125'
										},
										{
											'id': 'wl_standart_13189',
											'name': 'Проникновение СМС',
											'unit': '%',
											'weight': 'РќРµС‚',
											'fact': '88.8889'
										},
										{
											'id': 'wl_standart_9591',
											'name': 'НПС (рекомендации)',
											'unit': '%',
											'weight': 'РќРµС‚',
											'fact': '100'
										},
										{
											'id': 'wl_standart_15413',
											'name': 'Проникновение страховок',
											'unit': '%',
											'weight': 'РќРµС‚',
											'fact': '0'
										},
										{
											'id': 'wl_standart_11595',
											'name': 'Продажа комиссионных продуктов (коробочное страхование)BOX+ОПС',
											'unit': 'шт.',
											'weight': 'РќРµС‚',
											'fact': '0'
										},
										{
											'id': 'wl_standart_12687',
											'name': 'Продажи(POS)',
											'unit': 'руб.',
											'weight': 'РќРµС‚',
											'fact': '161899'
										}
									],
									'calcs': [
										{
											'name': '% выполнения',
											'value': 16
										},
										{
											'name': 'Суммарный вес индивидуальных показателей',
											'value': 75
										}
									]
								},
								{
									'id': '6441884241509181972',
									'isEdit': false,
									'title': 'Апрель 2017',
									'tasksHeader': {
										'name': 'Наименование',
										'unit': 'eд.изм-я',
										'weight': 'вес, %',
										'fact': 'ФАКТ'
									},
									'tasks': [
										{
											'id': 'wl_standart_5139',
											'name': 'Средневзвешенное выполнение целевого значения Мой Кредит',
											'unit': '%',
											'weight': 'РќРµС‚',
											'fact': '125'
										},
										{
											'id': 'wl_standart_1158',
											'name': 'Проникновение СМС',
											'unit': '%',
											'weight': 'РќРµС‚',
											'fact': '88.8889'
										},
										{
											'id': 'wl_standart_3787',
											'name': 'НПС (рекомендации)',
											'unit': '%',
											'weight': 'РќРµС‚',
											'fact': '100'
										},
										{
											'id': 'wl_standart_10389',
											'name': 'Проникновение страховок',
											'unit': '%',
											'weight': 'РќРµС‚',
											'fact': '0'
										},
										{
											'id': 'wl_standart_11628',
											'name': 'Продажа комиссионных продуктов (коробочное страхование)BOX+ОПС',
											'unit': 'шт.',
											'weight': 'РќРµС‚',
											'fact': '0'
										},
										{
											'id': 'wl_standart_10774',
											'name': 'Продажи(POS)',
											'unit': 'руб.',
											'weight': 'РќРµС‚',
											'fact': '161899'
										}
									],
									'calcs': [
										{
											'name': '% выполнения',
											'value': 16
										},
										{
											'name': 'Суммарный вес индивидуальных показателей',
											'value': 75
										}
									]
								}
							]
						}
					]
				}
			],
			'competenceStages': [
				{
					'id': 'stage_0',
					'title': 'Оценки по компетенциям',
					'tasksHeader': [
						'Название компетенции',
						'Оценка сотрудника',
						'Оценка руководителя',
						'Комментарий'
					],
					'competenceBlocks': [
						{
							'id': '6424034489453521534_stage_0',
							'title': 'Компетенции',
							'competences': [
								{
									'id': '6419152925503545596_stage_0',
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
													'payload': 0,
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
									'comment': {
										'isEdit': false,
										'value': 'Тупой кандидат'
									},
									'userMark': {
										'isEdit': false,
										'value': {
											'selectedPayload': '4t2sg',
											'items': [
												{
													'payload': 0,
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
								},
								{
									'id': '6419151482710924646_stage_0',
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
													'payload': 0,
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
									'comment': {
										'isEdit': false,
										'value': 'Тупой кандидат'
									},
									'userMark': {
										'isEdit': false,
										'value': {
											'selectedPayload': 'nsa2n',
											'items': [
												{
													'payload': 0,
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
									'id': '6419152530267334967_stage_0',
									'title': {
										'isEdit': false,
										'value': 'Навыки ведения переговоров'
									},
									'bossMark': {
										'isEdit': false,
										'value': {
											'selectedPayload': '0',
											'items': [
												{
													'payload': 0,
													'text': 'Выберите значение'
												},
												{
													'payload': 'ohs5x',
													'text': 'Требует развития'
												},
												{
													'payload': 'xr77v',
													'text': 'Соответствует'
												},
												{
													'payload': '6zkw9',
													'text': 'Превосходит ожидания'
												}
											]
										}
									},
									'comment': {
										'isEdit': false,
										'value': 'Тупой кандидат'
									},
									'userMark': {
										'isEdit': false,
										'value': {
											'selectedPayload': 'ohs5x',
											'items': [
												{
													'payload': 0,
													'text': 'Выберите значение'
												},
												{
													'payload': 'ohs5x',
													'text': 'Требует развития'
												},
												{
													'payload': 'xr77v',
													'text': 'Соответствует'
												},
												{
													'payload': '6zkw9',
													'text': 'Превосходит ожидания'
												}
											]
										}
									}
								}
							]
						},
						{
							'id': '6278653546418306073_stage_0',
							'title': 'Ценности',
							'competences': [
								{
									'id': '6278654528664719284_stage_0',
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
													'payload': 0,
													'text': 'Выберите значение'
												},
												{
													'payload': 'yhvvl',
													'text': 'Требует развития'
												},
												{
													'payload': '4litr',
													'text': 'Соответствует'
												},
												{
													'payload': 'lg0bb',
													'text': 'Превосходит ожидания'
												}
											]
										}
									},
									'comment': {
										'isEdit': false,
										'value': 'Тупой кандидат'
									},
									'userMark': {
										'isEdit': false,
										'value': {
											'selectedPayload': '4litr',
											'items': [
												{
													'payload': 0,
													'text': 'Выберите значение'
												},
												{
													'payload': 'yhvvl',
													'text': 'Требует развития'
												},
												{
													'payload': '4litr',
													'text': 'Соответствует'
												},
												{
													'payload': 'lg0bb',
													'text': 'Превосходит ожидания'
												}
											]
										}
									}
								},
								{
									'id': '6278654781813121860_stage_0',
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
													'payload': 0,
													'text': 'Выберите значение'
												},
												{
													'payload': 'h8v38',
													'text': 'Требует развития'
												},
												{
													'payload': '443n2',
													'text': 'Соответствует'
												},
												{
													'payload': 'pjo4m',
													'text': 'Превосходит ожидания'
												}
											]
										}
									},
									'comment': {
										'isEdit': false,
										'value': 'Тупой кандидат'
									},
									'userMark': {
										'isEdit': false,
										'value': {
											'selectedPayload': '443n2',
											'items': [
												{
													'payload': 0,
													'text': 'Выберите значение'
												},
												{
													'payload': 'h8v38',
													'text': 'Требует развития'
												},
												{
													'payload': '443n2',
													'text': 'Соответствует'
												},
												{
													'payload': 'pjo4m',
													'text': 'Превосходит ожидания'
												}
											]
										}
									}
								},
								{
									'id': '6278655028181488374_stage_0',
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
													'payload': 0,
													'text': 'Выберите значение'
												},
												{
													'payload': '4uizl',
													'text': 'Требует развития'
												},
												{
													'payload': 'jcqry',
													'text': 'Соответствует'
												},
												{
													'payload': '1sc6g',
													'text': 'Превосходит ожидания'
												}
											]
										}
									},
									'comment': {
										'isEdit': false,
										'value': 'Тупой кандидат'
									},
									'userMark': {
										'isEdit': false,
										'value': {
											'selectedPayload': 'jcqry',
											'items': [
												{
													'payload': 0,
													'text': 'Выберите значение'
												},
												{
													'payload': '4uizl',
													'text': 'Требует развития'
												},
												{
													'payload': 'jcqry',
													'text': 'Соответствует'
												},
												{
													'payload': '1sc6g',
													'text': 'Превосходит ожидания'
												}
											]
										}
									}
								},
								{
									'id': '6278653733685636108_stage_0',
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
													'payload': 0,
													'text': 'Выберите значение'
												},
												{
													'payload': 'pcya8',
													'text': 'Требует развития'
												},
												{
													'payload': '7ef7t',
													'text': 'Соответствует'
												},
												{
													'payload': '3ndwc',
													'text': 'Превосходит ожидания'
												}
											]
										}
									},
									'comment': {
										'isEdit': false,
										'value': 'Тупой кандидат'
									},
									'userMark': {
										'isEdit': false,
										'value': {
											'selectedPayload': '7ef7t',
											'items': [
												{
													'payload': 0,
													'text': 'Выберите значение'
												},
												{
													'payload': 'pcya8',
													'text': 'Требует развития'
												},
												{
													'payload': '7ef7t',
													'text': 'Соответствует'
												},
												{
													'payload': '3ndwc',
													'text': 'Превосходит ожидания'
												}
											]
										}
									}
								},
								{
									'id': '6278654180629831147_stage_0',
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
													'payload': 0,
													'text': 'Выберите значение'
												},
												{
													'payload': 'a2wkl',
													'text': 'Требует развития'
												},
												{
													'payload': 'yi8uz',
													'text': 'Соответствует'
												},
												{
													'payload': '1dux3',
													'text': 'Превосходит ожидания'
												}
											]
										}
									},
									'comment': {
										'isEdit': false,
										'value': 'Тупой кандидат'
									},
									'userMark': {
										'isEdit': false,
										'value': {
											'selectedPayload': 'yi8uz',
											'items': [
												{
													'payload': 0,
													'text': 'Выберите значение'
												},
												{
													'payload': 'a2wkl',
													'text': 'Требует развития'
												},
												{
													'payload': 'yi8uz',
													'text': 'Соответствует'
												},
												{
													'payload': '1dux3',
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
		},
		{
			'id': 'assessment_1',
			'type': 'curAssessment',
			'title': 'Результаты за 2017 год',
			'changes': [
				{
					'id': 'type_0',
					'type': 'year',
					'title': 'Категория - S',
					'bossFullname': 'Черкасова Марина Сергеевна',
					'pas': [
						{
							'id': '6436071536650501798',
							'isEdit': true,
							'title': 'Результаты за квартал',
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
									'id': '3946',
									'name': '',
									'threshold': '',
									'plan': '',
									'challenge': '',
									'fact': '',
									'mark': '',
									'weight': '',
									'isEdit': false,
									'unit': 'процент',
									'percent': 0
								},
								{
									'id': '7102',
									'name': '',
									'threshold': '',
									'plan': '',
									'challenge': '',
									'fact': '',
									'mark': '',
									'weight': '',
									'isEdit': true,
									'unit': 'процент',
									'percent': 0
								},
								{
									'id': '2584',
									'name': '',
									'threshold': '',
									'plan': '',
									'challenge': '',
									'fact': '',
									'mark': '',
									'weight': '',
									'isEdit': false,
									'unit': 'тыс.руб.',
									'percent': 0
								},
								{
									'id': '5185',
									'name': '',
									'threshold': '',
									'plan': '',
									'challenge': '',
									'fact': '',
									'mark': '',
									'weight': '',
									'isEdit': true,
									'unit': 'процент',
									'percent': 0
								},
								{
									'id': '5045',
									'name': '',
									'threshold': '',
									'plan': '',
									'challenge': '',
									'fact': '',
									'mark': '',
									'weight': '',
									'isEdit': false,
									'unit': 'процент',
									'percent': 0
								},
								{
									'id': '8554',
									'name': '',
									'threshold': '',
									'plan': '',
									'challenge': '',
									'fact': '',
									'mark': '',
									'weight': '',
									'isEdit': false,
									'unit': 'процент',
									'percent': 0
								},
								{
									'id': '5015',
									'name': '',
									'threshold': '',
									'plan': '',
									'challenge': '',
									'fact': '',
									'mark': '',
									'weight': '',
									'isEdit': false,
									'unit': 'процент',
									'percent': 0
								},
								{
									'id': '4403',
									'name': '',
									'threshold': '',
									'plan': '',
									'challenge': '',
									'fact': '',
									'mark': '',
									'weight': '',
									'isEdit': false,
									'unit': 'процент',
									'percent': 0
								},
								{
									'id': '6223',
									'name': '',
									'threshold': '',
									'plan': '',
									'challenge': '',
									'fact': '',
									'mark': '',
									'weight': '',
									'isEdit': false,
									'unit': 'процент',
									'percent': 0
								},
								{
									'id': '7421',
									'name': '',
									'threshold': '',
									'plan': '',
									'challenge': '',
									'fact': '',
									'mark': '',
									'weight': '',
									'isEdit': false,
									'unit': 'процент',
									'percent': 0
								},
								{
									'id': '4536',
									'name': '',
									'threshold': '',
									'plan': '',
									'challenge': '',
									'fact': '',
									'mark': '',
									'weight': '',
									'isEdit': false,
									'unit': 'процент',
									'percent': 0
								},
								{
									'id': '7508',
									'name': '',
									'threshold': '',
									'plan': '',
									'challenge': '',
									'fact': '',
									'mark': '',
									'weight': '',
									'isEdit': false,
									'unit': 'процент',
									'percent': 0
								},
								{
									'id': '3803',
									'name': '',
									'threshold': '',
									'plan': '',
									'challenge': '',
									'fact': '',
									'mark': '',
									'weight': '',
									'isEdit': false,
									'unit': 'процент',
									'percent': 0
								},
								{
									'id': '3293',
									'name': '',
									'threshold': '',
									'plan': '',
									'challenge': '',
									'fact': '',
									'mark': '',
									'weight': '',
									'isEdit': false,
									'unit': 'процент',
									'percent': 0
								},
								{
									'id': '5194',
									'name': '',
									'threshold': '',
									'plan': '',
									'challenge': '',
									'fact': '',
									'mark': '',
									'weight': '',
									'isEdit': false,
									'unit': 'процент',
									'percent': 0
								},
								{
									'id': '7409',
									'name': '',
									'threshold': '',
									'plan': '',
									'challenge': '',
									'fact': '',
									'mark': '',
									'weight': '',
									'isEdit': false,
									'unit': 'процент',
									'percent': 0
								},
								{
									'id': '8414',
									'name': '',
									'threshold': '',
									'plan': '',
									'challenge': '',
									'fact': '',
									'mark': '',
									'weight': '',
									'isEdit': false,
									'unit': 'процент',
									'percent': 0
								},
								{
									'id': '724',
									'name': '',
									'threshold': '',
									'plan': '',
									'challenge': '',
									'fact': '',
									'mark': '',
									'weight': '',
									'isEdit': false,
									'unit': 'процент',
									'percent': 0
								},
								{
									'id': '5491',
									'name': '',
									'threshold': '',
									'plan': '',
									'challenge': '',
									'fact': '',
									'mark': '',
									'weight': '',
									'isEdit': false,
									'unit': 'процент',
									'percent': 0
								},
								{
									'id': '3589',
									'name': '',
									'threshold': '',
									'plan': '',
									'challenge': '',
									'fact': '',
									'mark': '',
									'weight': '',
									'isEdit': false,
									'unit': 'процент',
									'percent': 0
								},
								{
									'id': '5122',
									'name': '',
									'threshold': '',
									'plan': '',
									'challenge': '',
									'fact': '',
									'mark': '',
									'weight': '',
									'isEdit': false,
									'unit': 'процент',
									'percent': 0
								},
								{
									'id': '8471',
									'name': '',
									'threshold': '',
									'plan': '',
									'challenge': '',
									'fact': '',
									'mark': '',
									'weight': '',
									'isEdit': false,
									'unit': 'процент',
									'percent': 0
								},
								{
									'id': '1804',
									'name': '',
									'threshold': '',
									'plan': '',
									'challenge': '',
									'fact': '',
									'mark': '',
									'weight': '',
									'isEdit': false,
									'unit': 'процент',
									'percent': 0
								},
								{
									'id': '6486',
									'name': '',
									'threshold': '',
									'plan': '',
									'challenge': '',
									'fact': '',
									'mark': '',
									'weight': '',
									'isEdit': false,
									'unit': 'процент',
									'percent': 0
								},
								{
									'id': '4417',
									'name': '',
									'threshold': '',
									'plan': '',
									'challenge': '',
									'fact': '',
									'mark': '',
									'weight': '',
									'isEdit': false,
									'unit': 'процент',
									'percent': 0
								},
								{
									'id': '145',
									'name': '',
									'threshold': '',
									'plan': '',
									'challenge': '',
									'fact': '',
									'mark': '',
									'weight': '',
									'isEdit': false,
									'unit': 'процент',
									'percent': 0
								},
								{
									'id': '8548',
									'name': '',
									'threshold': '',
									'plan': '',
									'challenge': '',
									'fact': '',
									'mark': '',
									'weight': '',
									'isEdit': false,
									'unit': 'процент',
									'percent': 0
								},
								{
									'id': '614',
									'name': '',
									'threshold': '',
									'plan': '',
									'challenge': '',
									'fact': '',
									'mark': '',
									'weight': '',
									'isEdit': false,
									'unit': 'процент',
									'percent': 0
								},
								{
									'id': '976',
									'name': '',
									'threshold': '',
									'plan': '',
									'challenge': '',
									'fact': '',
									'mark': '',
									'weight': '',
									'isEdit': false,
									'unit': 'процент',
									'percent': 0
								},
								{
									'id': '7560',
									'name': '',
									'threshold': '',
									'plan': '',
									'challenge': '',
									'fact': '',
									'mark': '',
									'weight': '',
									'isEdit': false,
									'unit': 'процент',
									'percent': 0
								},
								{
									'id': '4254',
									'name': '',
									'threshold': '',
									'plan': '',
									'challenge': '',
									'fact': '',
									'mark': '',
									'weight': '',
									'isEdit': false,
									'unit': 'процент',
									'percent': 0
								},
								{
									'id': '3962',
									'name': '',
									'threshold': '',
									'plan': '',
									'challenge': '',
									'fact': '',
									'mark': '',
									'weight': '',
									'isEdit': false,
									'unit': 'процент',
									'percent': 0
								}
							],
							'calcs': [
								{
									'name': '% выполнения',
									'value': 16
								},
								{
									'name': 'Суммарный вес индивидуальных показателей',
									'value': 75
								}
							]
						},
						{
							'id': '6436073987956561384',
							'isEdit': false,
							'title': 'Результаты за квартал',
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
									'id': '3593',
									'name': '',
									'threshold': '',
									'plan': '',
									'challenge': '',
									'fact': '',
									'mark': '',
									'weight': '',
									'isEdit': false,
									'unit': 'процент',
									'percent': 0
								},
								{
									'id': '561',
									'name': '',
									'threshold': '',
									'plan': '',
									'challenge': '',
									'fact': '',
									'mark': '',
									'weight': '',
									'isEdit': false,
									'unit': 'кол-во',
									'percent': 0
								}
							],
							'calcs': [
								{
									'name': '% выполнения',
									'value': 16
								},
								{
									'name': 'Суммарный вес индивидуальных показателей',
									'value': 75
								}
							]
						},
						{
							'id': '6436073993308614614',
							'isEdit': false,
							'title': 'Результаты за квартал',
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
									'id': '5208',
									'name': '',
									'threshold': '',
									'plan': '',
									'challenge': '',
									'fact': '',
									'mark': '',
									'weight': '',
									'isEdit': false,
									'unit': 'процент',
									'percent': 0
								},
								{
									'id': '5696',
									'name': '',
									'threshold': '',
									'plan': '',
									'challenge': '',
									'fact': '',
									'mark': '',
									'weight': '',
									'isEdit': false,
									'unit': 'процент',
									'percent': 0
								}
							],
							'calcs': [
								{
									'name': '% выполнения',
									'value': 16
								},
								{
									'name': 'Суммарный вес индивидуальных показателей',
									'value': 75
								}
							]
						},
						{
							'id': '6436073987748884764',
							'isEdit': false,
							'title': 'Результаты за квартал',
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
									'id': '7189',
									'name': '',
									'threshold': '',
									'plan': '',
									'challenge': '',
									'fact': '',
									'mark': '',
									'weight': '',
									'isEdit': false,
									'unit': 'процент',
									'percent': 0
								},
								{
									'id': '3615',
									'name': '',
									'threshold': '',
									'plan': '',
									'challenge': '',
									'fact': '',
									'mark': '',
									'weight': '',
									'isEdit': false,
									'unit': 'процент',
									'percent': 0
								}
							],
							'calcs': [
								{
									'name': '% выполнения',
									'value': 16
								},
								{
									'name': 'Суммарный вес индивидуальных показателей',
									'value': 75
								}
							]
						}
					]
				}
			],
			'competenceStages': [
				{
					'id': 'stage_1',
					'title': 'Компетенции за 1 полугодие',
					'tasksHeader': [
						'Название компетенции',
						'Оценка сотрудника',
						'Оценка руководителя',
						'Комментарий'
					],
					'competenceBlocks': [
						{
							'id': '5902276304526731044_stage_1',
							'title': 'Ценностный блок',
							'competences': [
								{
									'id': '5902276691411615042_stage_1',
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
													'payload': 0,
													'text': 'Выберите значение'
												},
												{
													'payload': 'c13j2',
													'text': '1'
												},
												{
													'payload': 'qxtph',
													'text': '2'
												},
												{
													'payload': '32bww',
													'text': '3'
												},
												{
													'payload': 'o87be',
													'text': '4'
												}
											]
										}
									},
									'comment': {
										'isEdit': false,
										'value': 'Тупой кандидат'
									},
									'userMark': {
										'isEdit': false,
										'value': {
											'selectedPayload': '0',
											'items': [
												{
													'payload': 0,
													'text': 'Выберите значение'
												},
												{
													'payload': 'c13j2',
													'text': '1'
												},
												{
													'payload': 'qxtph',
													'text': '2'
												},
												{
													'payload': '32bww',
													'text': '3'
												},
												{
													'payload': 'o87be',
													'text': '4'
												}
											]
										}
									}
								},
								{
									'id': '5902276910767873138_stage_1',
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
													'payload': 0,
													'text': 'Выберите значение'
												},
												{
													'payload': 'duuoj',
													'text': '1'
												},
												{
													'payload': 'pjeyf',
													'text': '2'
												},
												{
													'payload': '2sbkp',
													'text': '3'
												},
												{
													'payload': 'fh2kb',
													'text': '4'
												}
											]
										}
									},
									'comment': {
										'isEdit': false,
										'value': 'Тупой кандидат'
									},
									'userMark': {
										'isEdit': false,
										'value': {
											'selectedPayload': '0',
											'items': [
												{
													'payload': 0,
													'text': 'Выберите значение'
												},
												{
													'payload': 'duuoj',
													'text': '1'
												},
												{
													'payload': 'pjeyf',
													'text': '2'
												},
												{
													'payload': '2sbkp',
													'text': '3'
												},
												{
													'payload': 'fh2kb',
													'text': '4'
												}
											]
										}
									}
								},
								{
									'id': '5902277134221788307_stage_1',
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
													'payload': 0,
													'text': 'Выберите значение'
												},
												{
													'payload': 'z2twv',
													'text': '1'
												},
												{
													'payload': '8xjw0',
													'text': '2'
												},
												{
													'payload': 'guepa',
													'text': '3'
												},
												{
													'payload': '9v0vv',
													'text': '4'
												}
											]
										}
									},
									'comment': {
										'isEdit': false,
										'value': 'Тупой кандидат'
									},
									'userMark': {
										'isEdit': false,
										'value': {
											'selectedPayload': '0',
											'items': [
												{
													'payload': 0,
													'text': 'Выберите значение'
												},
												{
													'payload': 'z2twv',
													'text': '1'
												},
												{
													'payload': '8xjw0',
													'text': '2'
												},
												{
													'payload': 'guepa',
													'text': '3'
												},
												{
													'payload': '9v0vv',
													'text': '4'
												}
											]
										}
									}
								},
								{
									'id': '5902276171769663062_stage_1',
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
													'payload': 0,
													'text': 'Выберите значение'
												},
												{
													'payload': 'uv3b9',
													'text': '1'
												},
												{
													'payload': '6sca3',
													'text': '2'
												},
												{
													'payload': 'pp2rl',
													'text': '3'
												},
												{
													'payload': 'nsvgr',
													'text': '4'
												}
											]
										}
									},
									'comment': {
										'isEdit': false,
										'value': 'Тупой кандидат'
									},
									'userMark': {
										'isEdit': false,
										'value': {
											'selectedPayload': '0',
											'items': [
												{
													'payload': 0,
													'text': 'Выберите значение'
												},
												{
													'payload': 'uv3b9',
													'text': '1'
												},
												{
													'payload': '6sca3',
													'text': '2'
												},
												{
													'payload': 'pp2rl',
													'text': '3'
												},
												{
													'payload': 'nsvgr',
													'text': '4'
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
	];
}