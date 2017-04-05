(function (module) {
	module
	.constant("TOKEN_HASH", "yobs_token")
	.constant("CURRENT_USER", "yobs_user")
	.constant("CURRENT_EMPLOYEE", "yobs_employee")
	.constant("CURRENT_EMPLOYEE_DETAILS", "yobs_employee_details")
	.constant("CURRENT_EMPLOYER", "yobs_employer")
	.constant('schoolConstants', [
		{
			listName: 'USC',
			alias: [
				'USC',
				'University of Southern California'
			],
			address: '3551 Trousdale Pkwy, Los Angeles, CA 90089',
			latlng: [34.0224, -118.2851]
		},
		{
			listName: 'UCLA',
			alias: [
				'UCLA',
				'University of California: Los Angeles',
				'University of California Los Angeles',
				'University of California, Los Angeles',
				'University California Los Angeles'
			],
			address: '405 Hilgard Avenue, Los Angeles, CA 90095',
			latlng: [34.073967, -118.437445]
		}
	])
	.constant('SOFTSKILL_QUESTIONS', [
		{ question: 1, text: 'I am the life of the party'},
		{ question: 2, text: 'I sympathize with others’ feelings'},
		{ question: 3, text: 'I get chores done right away'},
		{ question: 4, text: 'I have frequent mood swings'},
		{ question: 5, text: 'I have a vivid imagination'},
		{ question: 6, text: 'I dont talk a lot'},
		{ question: 7, text: 'I am not interested in other peoples problems'},
		{ question: 8, text: 'I often forget to put things back in their proper place'},
		{ question: 9, text: 'I am relaxed most of the time'},
		{ question: 10, text: 'I am not interested in abstract ideas'},
		{ question: 11, text: 'I talk to a lot of different people at parties'},
		{ question: 12, text: 'I feel others’ emotions'},
		{ question: 13, text: 'I like keeping my things in order'},
		{ question: 14, text: 'I get upset easily'},
		{ question: 15, text: 'I have difficulty understanding abstract ideas'},
		{ question: 16, text: 'I keep in the background'},
		{ question: 17, text: 'I am not really interested in others'},
		{ question: 18, text: 'I dont mind keeping things a bit messy'},
		{ question: 19, text: 'I seldom feel blue'},
		{ question: 20, text: 'I do not have a good imagination'}
	])
	.constant('SOFTSKILL_RESULTS', [
		{ "type": "extraversion" , "db_type": "Extraversion", "type_description": "something about openness", "score":"Low",  "score_description":"This indicates you are introverted, reserved, and quiet. You enjoy solitude and solitary activities. Your socializing tends to be restricted to a few close friends."},
		{ "type": "extraversion" , "db_type": "Extraversion", "type_description": "something about openness", "score":"Moderate", "score_description": "This indicates you are neither a subdued loner nor a jovial chatterbox. You enjoy time with others but also time alone."},
		{ "type": "extraversion" , "db_type": "Extraversion", "type_description": "something about openness", "score":"High", "score_description": "This indicates you are sociable, outgoing, energetic, and lively. You prefer to be around people much of the time."},
		{ "type": "agreeableness" , "db_type": "Agreeableness", "type_description": "something about openness", "score": "Low", "score_description": "This indicates less concern with others' needs than with your own. People see you as tough, critical, and uncompromising."},
		{ "type": "agreeableness" , "db_type": "Agreeableness", "type_description": "something about openness", "score": "Moderate", "score_description": "This indicates some concern with others' needs, but, generally, unwillingness to sacrifice yourself for others."},		
		{ "type": "agreeableness" , "db_type": "Agreeableness", "type_description": "something about openness", "score": "High", "score_description": "This indicates a strong interest in others' needs and well-being. You are pleasant, sympathetic, and cooperative."},

		{ "type": "conscientiousness" , "db_type": "Conscientiousness","type_description": "something about openness", "score": "Low", "score_description": "his indicates you like to live for the moment and do what feels good now. Your work tends to be careless and disorganized."},
		{ "type": "conscientiousness" , "db_type": "Conscientiousness", "type_description": "something about openness", "score": "Moderate", "score_description": "This means you are reasonably reliable, organized, and self-controlled."},
		{ "type": "conscientiousness" , "db_type": "Conscientiousness", "type_description": "something about openness", "score": "High", "score_description": "This means you set clear goals and pursue them with determination. People regard you as reliable and hard-working."},
		
		{ "type": "emotional_stability" , "db_type": "Emotional Stability", "type_description": "something about openness", "score": "Low", "score_description": "This indicates that you are exceptionally calm, composed and unflappable. You do not react with intense emotions, even to situations that most people would describe as stressful."},
		{ "type": "emotional_stability" , "db_type": "Emotional Stability", "type_description": "something about openness", "score": "Moderate", "score_description": "This indicates that your level of emotional reactivity is typical of the general population. Stressful and frustrating situations are somewhat upsetting to you, but you are generally able to get over these feelings and cope with these situations."},
		{ "type": "emotional_stability" , "db_type": "Emotional Stability", "type_description": "something about openness", "score": "High", "score_description": "This indicates that you are easily upset, even by what most people consider the normal demands of living. People consider you to be sensitive and emotional."},
		
		{ "type": "openness_to_experiences" ,"db_type": "Openness", "type_description": "something about openness", "score":"Low", "score_description": "This indicates you like to think in plain and simple terms. Others describe you as down-to-earth, practical, and conservative."},
		{ "type": "openness_to_experiences" , "db_type": "Openness", "type_description": "something about openness", "score":"Moderate", "score_description": "This indicates you enjoy tradition but are willing to try new things. Your thinking is neither simple nor complex. To others you appear to be a well-educated person but not an intellectual."},
		{ "type": "openness_to_experiences" , "db_type": "Openness", "type_description": "something about openness", "score":"High", "score_description": "This indicates you enjoy novelty, variety, and change. You are curious, imaginative, and creative."},
		
		
	])
	// .constant('SOFTSKILL_RESULTS_CODEX', {
    //   'C': 'Conscientiousness',
    //   'A': 'Agreeableness',
    //   'O': 'Openness',
    //   'E': 'Extraversion',
    //   'N': 'Emotional Stability'
    // })
	.constant('SOFTSKILL_RESULTS_CODEX', [
	  'Extraversion',
      'Agreeableness',
	  'Conscientiousness',
	  'Emotional Stability',
      'Openness'
       
       
	])

	.constant('SOFTSKILL_RESULTS_CODEX_DESCRIPTION', [
		'Extraversion tends to be manifested in outgoing, talkative, energetic behavior, whereas introversion is manifested in more reserved and solitary behavior. This does not mean that they are unfriendly or antisocial; rather, they are reserved in social situations',
		'Agreeableness is a personality trait manifesting itself in individual behavioral characteristics that are perceived as kind, sympathetic, cooperative, warm and considerate.',
		'Conscientiousness is the personality trait of being careful, or vigilant. Conscientiousness implies a desire to do a task well. Conscientious people are efficient and organized as opposed to easy-going and disorderly.',
		'Neuroticism is a personality trait characterized by anxiety, fear, moodiness, worry, envy, frustration and jealousy. Individuals who score high on neuroticism are more likely than average to experience such feelings as anxiety, anger, envy, guilt, and depressed mood.',
		'Openness to experience describes a dimension of personality that distinguishes imaginative, creative people from down-to-earth, conventional people.'
	])

	.constant('SOFTSKILL_ANSWER_CODEX', [
      { value: 1, answer: "Strongly Disagree"},
      { value: 2, answer: "Somewhat Disagree"},
      { value: 3, answer: "Neither Agree nor Disagree"},
      { value: 4, answer: "Somewhat Agree"},
      { value: 5, answer: "Strongly Agree"}
    ]);
}(angular.module('Clarity.Constants')));