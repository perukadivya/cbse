export interface Chapter {
    id: string;
    name: string;
    keyTopics: string[];
}

export interface SubjectBook {
    bookName: string;
    chapters: Chapter[];
}

export interface Subject {
    id: string;
    name: string;
    icon: string;
    color: string;
    gradient: string;
    books: SubjectBook[];
}

export const subjects: Subject[] = [
    {
        id: 'mathematics',
        name: 'Mathematics',
        icon: '📐',
        color: 'text-blue-600',
        gradient: 'from-blue-500 to-cyan-500',
        books: [
            {
                bookName: 'NCERT Mathematics',
                chapters: [
                    { id: 'math-1', name: 'Real Numbers', keyTopics: ['Euclid\'s Division Lemma', 'Fundamental Theorem of Arithmetic', 'Irrational Numbers', 'Rational & Decimal Expansions'] },
                    { id: 'math-2', name: 'Polynomials', keyTopics: ['Zeroes of a Polynomial', 'Relationship between Zeroes & Coefficients', 'Division Algorithm'] },
                    { id: 'math-3', name: 'Pair of Linear Equations in Two Variables', keyTopics: ['Graphical Method', 'Substitution Method', 'Elimination Method', 'Cross-Multiplication Method'] },
                    { id: 'math-4', name: 'Quadratic Equations', keyTopics: ['Factorisation', 'Completing the Square', 'Quadratic Formula', 'Nature of Roots'] },
                    { id: 'math-5', name: 'Arithmetic Progressions', keyTopics: ['nth Term of AP', 'Sum of n Terms', 'Common Difference'] },
                    { id: 'math-6', name: 'Triangles', keyTopics: ['Similar Triangles', 'BPT (Basic Proportionality Theorem)', 'Pythagoras Theorem', 'AAA, SSS, SAS Criteria'] },
                    { id: 'math-7', name: 'Coordinate Geometry', keyTopics: ['Distance Formula', 'Section Formula', 'Area of Triangle', 'Midpoint Formula'] },
                    { id: 'math-8', name: 'Introduction to Trigonometry', keyTopics: ['Trigonometric Ratios', 'Trigonometric Identities', 'Ratios of Specific Angles', 'Complementary Angles'] },
                    { id: 'math-9', name: 'Some Applications of Trigonometry', keyTopics: ['Height & Distance', 'Angle of Elevation', 'Angle of Depression'] },
                    { id: 'math-10', name: 'Circles', keyTopics: ['Tangent to a Circle', 'Number of Tangents from a Point', 'Theorems on Tangents'] },
                    { id: 'math-11', name: 'Constructions', keyTopics: ['Division of Line Segment', 'Construction of Tangents', 'Similar Triangles Construction'] },
                    { id: 'math-12', name: 'Areas Related to Circles', keyTopics: ['Area of Sector', 'Area of Segment', 'Combination of Plane Figures'] },
                    { id: 'math-13', name: 'Surface Areas and Volumes', keyTopics: ['Combination of Solids', 'Conversion of Solids', 'Frustum of a Cone'] },
                    { id: 'math-14', name: 'Statistics', keyTopics: ['Mean', 'Median', 'Mode', 'Cumulative Frequency', 'Ogive'] },
                    { id: 'math-15', name: 'Probability', keyTopics: ['Classical Definition', 'Complementary Events', 'Impossible & Sure Events'] },
                ],
            },
        ],
    },
    {
        id: 'science',
        name: 'Science',
        icon: '🔬',
        color: 'text-green-600',
        gradient: 'from-green-500 to-emerald-500',
        books: [
            {
                bookName: 'NCERT Science',
                chapters: [
                    { id: 'sci-1', name: 'Chemical Reactions and Equations', keyTopics: ['Types of Reactions', 'Balancing Equations', 'Combination', 'Decomposition', 'Displacement', 'Redox'] },
                    { id: 'sci-2', name: 'Acids, Bases and Salts', keyTopics: ['pH Scale', 'Indicators', 'Neutralisation', 'Salts of Strong/Weak Acids & Bases'] },
                    { id: 'sci-3', name: 'Metals and Non-metals', keyTopics: ['Physical & Chemical Properties', 'Reactivity Series', 'Ionic Bonding', 'Corrosion'] },
                    { id: 'sci-4', name: 'Carbon and its Compounds', keyTopics: ['Covalent Bonding', 'Hydrocarbons', 'Functional Groups', 'Homologous Series', 'Ethanol & Ethanoic Acid'] },
                    { id: 'sci-5', name: 'Periodic Classification of Elements', keyTopics: ['Mendeleev\'s Table', 'Modern Periodic Table', 'Trends in Properties', 'Valency'] },
                    { id: 'sci-6', name: 'Life Processes', keyTopics: ['Nutrition', 'Respiration', 'Transportation', 'Excretion', 'Autotrophic & Heterotrophic'] },
                    { id: 'sci-7', name: 'Control and Coordination', keyTopics: ['Nervous System', 'Reflex Arc', 'Hormones', 'Plant Hormones'] },
                    { id: 'sci-8', name: 'How do Organisms Reproduce?', keyTopics: ['Asexual Reproduction', 'Sexual Reproduction', 'Reproductive Health', 'DNA Copying'] },
                    { id: 'sci-9', name: 'Heredity and Evolution', keyTopics: ['Mendel\'s Laws', 'Sex Determination', 'Evolution', 'Speciation', 'Fossils'] },
                    { id: 'sci-10', name: 'Light – Reflection and Refraction', keyTopics: ['Mirror Formula', 'Lens Formula', 'Magnification', 'Snell\'s Law', 'Power of Lens'] },
                    { id: 'sci-11', name: 'Human Eye and Colourful World', keyTopics: ['Defects of Vision', 'Prism', 'Dispersion', 'Scattering of Light', 'Tyndall Effect'] },
                    { id: 'sci-12', name: 'Electricity', keyTopics: ['Ohm\'s Law', 'Resistance', 'Series & Parallel Circuits', 'Electric Power', 'Heating Effect'] },
                    { id: 'sci-13', name: 'Magnetic Effects of Electric Current', keyTopics: ['Magnetic Field Lines', 'Right Hand Rule', 'Electromagnetic Induction', 'Fleming\'s Rules', 'Generator & Motor'] },
                    { id: 'sci-14', name: 'Sources of Energy', keyTopics: ['Fossil Fuels', 'Solar Energy', 'Nuclear Energy', 'Wind Energy', 'Biomass'] },
                    { id: 'sci-15', name: 'Our Environment', keyTopics: ['Ecosystem', 'Food Chains/Webs', 'Ozone Depletion', 'Biodegradable & Non-biodegradable'] },
                    { id: 'sci-16', name: 'Management of Natural Resources', keyTopics: ['3Rs', 'Forests & Wildlife', 'Water Management', 'Coal & Petroleum Conservation'] },
                ],
            },
        ],
    },
    {
        id: 'social-science',
        name: 'Social Science',
        icon: '🌍',
        color: 'text-amber-600',
        gradient: 'from-amber-500 to-orange-500',
        books: [
            {
                bookName: 'India and the Contemporary World – II (History)',
                chapters: [
                    { id: 'hist-1', name: 'The Rise of Nationalism in Europe', keyTopics: ['French Revolution', 'Unification of Italy & Germany', 'Nationalism', 'Romanticism'] },
                    { id: 'hist-2', name: 'Nationalism in India', keyTopics: ['Non-Cooperation Movement', 'Civil Disobedience', 'Salt March', 'Quit India', 'Gandhian Nationalism'] },
                    { id: 'hist-3', name: 'The Making of a Global World', keyTopics: ['Silk Route', 'Colonialism', 'Bretton Woods', 'Globalisation'] },
                    { id: 'hist-4', name: 'The Age of Industrialisation', keyTopics: ['Proto-industrialisation', 'Factory System', 'Labour Conditions', 'Indian Textiles'] },
                    { id: 'hist-5', name: 'Print Culture and the Modern World', keyTopics: ['Gutenberg', 'Print Revolution', 'Censorship', 'Impact on Society'] },
                ],
            },
            {
                bookName: 'Contemporary India – II (Geography)',
                chapters: [
                    { id: 'geo-1', name: 'Resources and Development', keyTopics: ['Types of Resources', 'Resource Planning', 'Land Use', 'Soil Types & Conservation'] },
                    { id: 'geo-2', name: 'Forest and Wildlife Resources', keyTopics: ['Biodiversity', 'Conservation', 'Flora & Fauna', 'Community Participation'] },
                    { id: 'geo-3', name: 'Water Resources', keyTopics: ['Dams', 'Rainwater Harvesting', 'Multi-purpose Projects', 'Water Scarcity'] },
                    { id: 'geo-4', name: 'Agriculture', keyTopics: ['Types of Farming', 'Cropping Patterns', 'Food Security', 'Institutional Reforms'] },
                    { id: 'geo-5', name: 'Minerals and Energy Resources', keyTopics: ['Metallic & Non-metallic Minerals', 'Conventional & Non-conventional Energy'] },
                    { id: 'geo-6', name: 'Manufacturing Industries', keyTopics: ['Industrial Location', 'Agro-based & Mineral-based Industries', 'Pollution Control'] },
                    { id: 'geo-7', name: 'Lifelines of National Economy', keyTopics: ['Roadways', 'Railways', 'Pipelines', 'Waterways', 'Airways', 'Trade'] },
                ],
            },
            {
                bookName: 'Democratic Politics – II (Political Science)',
                chapters: [
                    { id: 'pol-1', name: 'Power Sharing', keyTopics: ['Belgium & Sri Lanka', 'Forms of Power Sharing', 'Federalism Basics'] },
                    { id: 'pol-2', name: 'Federalism', keyTopics: ['Union, State & Concurrent Lists', 'Decentralisation', 'Panchayati Raj', 'Local Self Government'] },
                    { id: 'pol-3', name: 'Democracy and Diversity', keyTopics: ['Social Differences', 'Overlapping & Cross-cutting', 'Politics of Social Divisions'] },
                    { id: 'pol-4', name: 'Gender, Religion and Caste', keyTopics: ['Gender Inequality', 'Communalism', 'Caste in Politics'] },
                    { id: 'pol-5', name: 'Popular Struggles and Movements', keyTopics: ['Pressure Groups', 'Interest Groups', 'Bolivia Water War', 'Nepal Movement'] },
                    { id: 'pol-6', name: 'Political Parties', keyTopics: ['Functions', 'National & State Parties', 'Party System', 'Challenges'] },
                    { id: 'pol-7', name: 'Outcomes of Democracy', keyTopics: ['Accountability', 'Economic Growth', 'Inequality', 'Dignity & Freedom'] },
                    { id: 'pol-8', name: 'Challenges to Democracy', keyTopics: ['Foundational Challenges', 'Expansion Challenges', 'Deepening Challenges'] },
                ],
            },
            {
                bookName: 'Understanding Economic Development (Economics)',
                chapters: [
                    { id: 'eco-1', name: 'Development', keyTopics: ['Income & Goals', 'HDI', 'Comparison of Countries', 'Sustainability'] },
                    { id: 'eco-2', name: 'Sectors of the Indian Economy', keyTopics: ['Primary, Secondary, Tertiary', 'GDP', 'Employment', 'Organised & Unorganised Sectors'] },
                    { id: 'eco-3', name: 'Money and Credit', keyTopics: ['Barter System', 'Modern Banking', 'Formal & Informal Credit', 'SHGs'] },
                    { id: 'eco-4', name: 'Globalisation and the Indian Economy', keyTopics: ['MNCs', 'FDI', 'WTO', 'Impact on Workers', 'Fair Globalisation'] },
                    { id: 'eco-5', name: 'Consumer Rights', keyTopics: ['Consumer Protection Act', 'RTI', 'COPRA', 'Consumer Awareness'] },
                ],
            },
        ],
    },
    {
        id: 'english',
        name: 'English',
        icon: '📖',
        color: 'text-rose-600',
        gradient: 'from-rose-500 to-pink-500',
        books: [
            {
                bookName: 'First Flight (Prose & Poetry)',
                chapters: [
                    { id: 'eng-1', name: 'A Letter to God', keyTopics: ['Lencho\'s Faith', 'Irony', 'Post Office Staff', 'Themes'] },
                    { id: 'eng-2', name: 'Nelson Mandela: Long Walk to Freedom', keyTopics: ['Apartheid', 'Inauguration', 'Courage', 'Freedom'] },
                    { id: 'eng-3', name: 'Two Stories about Flying', keyTopics: ['His First Flight (Liam O\'Flaherty)', 'Black Aeroplane (Frederick Forsyth)'] },
                    { id: 'eng-4', name: 'From the Diary of Anne Frank', keyTopics: ['Anne\'s Diary', 'Mr Keesing', 'World War II', 'Personal Narrative'] },
                    { id: 'eng-5', name: 'The Hundred Dresses – I & II', keyTopics: ['Bullying', 'Wanda Petronski', 'Friendship', 'Regret'] },
                    { id: 'eng-6', name: 'Glimpses of India', keyTopics: ['A Baker from Goa', 'Coorg', 'Tea from Assam'] },
                    { id: 'eng-7', name: 'Mijbil the Otter', keyTopics: ['Gavin Maxwell', 'Pet Story', 'Basra to London', 'Human-Animal Bond'] },
                    { id: 'eng-8', name: 'Madam Rides the Bus', keyTopics: ['Valli\'s Journey', 'Curiosity', 'Coming of Age', 'Observation'] },
                    { id: 'eng-9', name: 'The Sermon at Benares', keyTopics: ['Gautama Buddha', 'Kisa Gotami', 'Death & Suffering', 'Life Lesson'] },
                    { id: 'eng-10', name: 'The Proposal (Play)', keyTopics: ['Anton Chekhov', 'Comedy', 'Lomov & Natalya', 'Marriage Proposal'] },
                ],
            },
            {
                bookName: 'Footprints Without Feet (Supplementary)',
                chapters: [
                    { id: 'eng-s1', name: 'A Triumph of Surgery', keyTopics: ['Tricki', 'Mrs Pumphrey', 'Mr Herriot', 'Overindulgence'] },
                    { id: 'eng-s2', name: 'The Thief\'s Story', keyTopics: ['Hari Singh', 'Anil', 'Trust & Conscience', 'Education'] },
                    { id: 'eng-s3', name: 'The Midnight Visitor', keyTopics: ['Ausable', 'Max', 'Spy Story', 'Quick Thinking'] },
                    { id: 'eng-s4', name: 'A Question of Trust', keyTopics: ['Horace Danby', 'Lady in Red', 'Crime & Deception'] },
                    { id: 'eng-s5', name: 'Footprints Without Feet', keyTopics: ['Griffin', 'Invisible Man', 'H.G. Wells', 'Science Fiction'] },
                    { id: 'eng-s6', name: 'The Making of a Scientist', keyTopics: ['Richard Ebright', 'Butterfly Research', 'Curiosity & Discovery'] },
                    { id: 'eng-s7', name: 'The Necklace', keyTopics: ['Matilda Loisel', 'Guy de Maupassant', 'Vanity', 'Irony'] },
                    { id: 'eng-s8', name: 'The Hack Driver', keyTopics: ['Oliver Lutkins', 'Deception', 'Small-Town Humor'] },
                    { id: 'eng-s9', name: 'Bholi', keyTopics: ['Education & Empowerment', 'Sulekha', 'Discrimination', 'Self-confidence'] },
                    { id: 'eng-s10', name: 'The Book That Saved the Earth', keyTopics: ['Science Fiction', 'Mother Goose Rhymes', 'Humor', 'Misunderstanding'] },
                ],
            },
        ],
    },
    {
        id: 'hindi',
        name: 'Hindi',
        icon: '📝',
        color: 'text-violet-600',
        gradient: 'from-violet-500 to-purple-500',
        books: [
            {
                bookName: 'क्षितिज भाग 2 (Kshitij)',
                chapters: [
                    { id: 'hin-1', name: 'सूरदास – पद', keyTopics: ['भ्रमरगीत', 'गोपियों का उद्धव से संवाद', 'कृष्ण भक्ति'] },
                    { id: 'hin-2', name: 'तुलसीदास – राम-लक्ष्मण-परशुराम संवाद', keyTopics: ['धनुष भंग', 'परशुराम का क्रोध', 'लक्ष्मण की वीरता'] },
                    { id: 'hin-3', name: 'देव – सवैया और कवित्त', keyTopics: ['श्रृंगार रस', 'प्रकृति चित्रण', 'रीतिकालीन काव्य'] },
                    { id: 'hin-4', name: 'जयशंकर प्रसाद – आत्मकथ्य', keyTopics: ['आत्मकथा', 'जीवन दर्शन', 'छायावाद'] },
                    { id: 'hin-5', name: 'सूर्यकान्त त्रिपाठी निराला – उत्साह, अट नहीं रही है', keyTopics: ['बादल', 'फागुन', 'छायावादी कविता'] },
                    { id: 'hin-6', name: 'नागार्जुन – यह दंतुरहित मुस्कान, फसल', keyTopics: ['शिशु की मुस्कान', 'किसान जीवन', 'प्रगतिवाद'] },
                    { id: 'hin-7', name: 'गिरिजाकुमार माथुर – छाया मत छूना', keyTopics: ['स्मृतियाँ', 'वर्तमान में जीना'] },
                    { id: 'hin-8', name: 'ऋतुराज – कन्यादान', keyTopics: ['माँ की सीख', 'बेटी की विदाई', 'स्त्री जागरण'] },
                    { id: 'hin-9', name: 'मंगलेश डबराल – संगतकार', keyTopics: ['सहयोगी कलाकार', 'विनम्रता', 'समर्पण'] },
                    { id: 'hin-10', name: 'स्वयं प्रकाश – नेताजी का चश्मा', keyTopics: ['देशभक्ति', 'कैप्टन', 'नेताजी की मूर्ति'] },
                    { id: 'hin-11', name: 'रामवृक्ष बेनीपुरी – बालगोबिन भगत', keyTopics: ['सन्यासी जीवन', 'कबीरपंथी', 'सामाजिक मर्यादा'] },
                    { id: 'hin-12', name: 'यशपाल – लखनवी अंदाज़', keyTopics: ['नवाबी शौक', 'व्यंग्य', 'लखनऊ की संस्कृति'] },
                    { id: 'hin-13', name: 'सर्वेश्वर दयाल सक्सेना – मानवीय करुणा की दिव्य चमक', keyTopics: ['फ़ादर कामिल बुल्के', 'करुणा', 'मानवता'] },
                    { id: 'hin-14', name: 'मन्नू भंडारी – एक कहानी यह भी', keyTopics: ['आत्मकथा', 'स्त्री शिक्षा', 'पिता का प्रभाव'] },
                    { id: 'hin-15', name: 'महावीर प्रसाद द्विवेदी – स्त्री शिक्षा के विरोधी कुतर्कों का खंडन', keyTopics: ['स्त्री शिक्षा', 'तर्क', 'समाज सुधार'] },
                    { id: 'hin-16', name: 'यतीन्द्र मिश्र – नौबतखाने में इबादत', keyTopics: ['बिस्मिल्ला खाँ', 'शहनाई', 'बनारस'] },
                    { id: 'hin-17', name: 'भदन्त आनन्द कौसल्यायन – संस्कृति', keyTopics: ['सभ्यता vs संस्कृति', 'मानवीय विकास'] },
                ],
            },
            {
                bookName: 'कृतिका भाग 2 (Kritika)',
                chapters: [
                    { id: 'hin-k1', name: 'माता का अँचल', keyTopics: ['बचपन', 'माँ-बेटा प्रेम', 'ग्रामीण जीवन'] },
                    { id: 'hin-k2', name: 'जॉर्ज पंचम की नाक', keyTopics: ['व्यंग्य', 'औपनिवेशिक मानसिकता', 'हास्य'] },
                    { id: 'hin-k3', name: 'साना-साना हाथ जोड़ि', keyTopics: ['सिक्किम यात्रा', 'प्रकृति', 'जीवन दर्शन'] },
                    { id: 'hin-k4', name: 'एही ठैयाँ झुलनी हेरानी हो रामा', keyTopics: ['दुलारी', 'टुन्नू', 'संगीत', 'देशभक्ति'] },
                    { id: 'hin-k5', name: 'मैं क्यों लिखता हूँ', keyTopics: ['लेखन प्रेरणा', 'अज्ञेय', 'साहित्य'] },
                ],
            },
        ],
    },
    {
        id: 'telugu',
        name: 'Telugu',
        icon: '✍️',
        color: 'text-teal-600',
        gradient: 'from-teal-500 to-cyan-600',
        books: [
            {
                bookName: 'తెలుగు వాచకం (Telangana Class 10)',
                chapters: [
                    { id: 'tel-1', name: 'దానశీలము', keyTopics: ['దానం', 'శీలం', 'నీతి', 'సమాజ సేవ'] },
                    { id: 'tel-2', name: 'ఎవరి భాష వాళ్ళకు వినసొంపు', keyTopics: ['భాషా ప్రాముఖ్యత', 'మాతృభాష', 'భాషాభిమానం'] },
                    { id: 'tel-3', name: 'వీర తెలంగాణ', keyTopics: ['తెలంగాణ చరిత్ర', 'తెలంగాణ ఉద్యమం', 'వీరత్వం'] },
                    { id: 'tel-4', name: 'కొత్తబాట', keyTopics: ['నూతన మార్గం', 'సామాజిక మార్పు', 'ఆధునికత'] },
                    { id: 'tel-5', name: 'నగర గీతం', keyTopics: ['నగర జీవనం', 'పట్టణ సంస్కృతి', 'కవిత్వం'] },
                    { id: 'tel-6', name: 'భాగ్యోదయం', keyTopics: ['భాగ్యం', 'కష్టాలు', 'విజయం', 'జీవిత పాఠాలు'] },
                    { id: 'tel-7', name: 'శతక మధురిమ', keyTopics: ['శతకం', 'నీతి పద్యాలు', 'సుమతి శతకం', 'వేమన'] },
                    { id: 'tel-8', name: 'లక్ష్య సిద్ధి', keyTopics: ['లక్ష్యం', 'సాధన', 'విజయ రహస్యం', 'పట్టుదల'] },
                    { id: 'tel-9', name: 'జీవనభాష్యం', keyTopics: ['జీవిత విలువలు', 'తత్వం', 'ఆధ్యాత్మికత'] },
                    { id: 'tel-10', name: 'గోలకొండ పట్టణము', keyTopics: ['గోలకొండ చరిత్ర', 'కుతుబ్‌షాహీ', 'చారిత్రక ప్రాముఖ్యత'] },
                    { id: 'tel-11', name: 'భిక్ష', keyTopics: ['త్యాగం', 'దానం', 'నాటకం', 'సామాజిక స్పృహ'] },
                    { id: 'tel-12', name: 'భూమిక', keyTopics: ['స్త్రీ సాధికారత', 'మహిళా చైతన్యం', 'సమానత్వం'] },
                ],
            },
            {
                bookName: 'ఉపవాచకం – రామాయణం',
                chapters: [
                    { id: 'tel-r1', name: 'బాలకాండ', keyTopics: ['రాముడి జననం', 'తాటకి వధ', 'విశ్వామిత్రుడు'] },
                    { id: 'tel-r2', name: 'అయోధ్యాకాండ', keyTopics: ['వనవాసం', 'కైకేయి', 'భరతుడు'] },
                    { id: 'tel-r3', name: 'అరణ్యకాండ', keyTopics: ['సీతాపహరణం', 'జటాయువు', 'శూర్పణఖ'] },
                    { id: 'tel-r4', name: 'కిష్కింధకాండ', keyTopics: ['సుగ్రీవుడు', 'వాలి వధ', 'హనుమంతుడు'] },
                    { id: 'tel-r5', name: 'సుందరకాండ', keyTopics: ['హనుమంతుడి లంక ప్రవేశం', 'సీతా దర్శనం'] },
                    { id: 'tel-r6', name: 'యుద్ధకాండ', keyTopics: ['రావణ వధ', 'సీతా స్వీకారం', 'పట్టాభిషేకం'] },
                ],
            },
            {
                bookName: 'పద విజ్ఞానం (Grammar)',
                chapters: [
                    { id: 'tel-g1', name: 'సంధులు', keyTopics: ['అచ్ సంధి', 'హల్ సంధి', 'విసర్గ సంధి', 'సంధి నియమాలు'] },
                    { id: 'tel-g2', name: 'సమాసాలు', keyTopics: ['తత్పురుష', 'ద్వంద్వ', 'బహువ్రీహి', 'కర్మధారయ'] },
                    { id: 'tel-g3', name: 'అలంకారాలు', keyTopics: ['ఉపమ', 'రూపకం', 'ఉత్ప్రేక్ష', 'శ్లేష'] },
                    { id: 'tel-g4', name: 'ఛందస్సు', keyTopics: ['పద్య లక్షణాలు', 'గణాలు', 'యతి', 'ప్రాస'] },
                    { id: 'tel-g5', name: 'వ్యాస రచన & లేఖా రచన', keyTopics: ['వ్యాసం', 'లేఖ', 'సారాంశం', 'భావ విస్తరణ'] },
                ],
            },
        ],
    },
];

export function getSubjectById(id: string): Subject | undefined {
    return subjects.find(s => s.id === id);
}

export function getChapterById(chapterId: string): { subject: Subject; book: SubjectBook; chapter: Chapter } | undefined {
    for (const subject of subjects) {
        for (const book of subject.books) {
            const chapter = book.chapters.find(c => c.id === chapterId);
            if (chapter) {
                return { subject, book, chapter };
            }
        }
    }
    return undefined;
}

export function getAllChaptersForSubject(subjectId: string): { book: SubjectBook; chapter: Chapter }[] {
    const subject = getSubjectById(subjectId);
    if (!subject) return [];
    const results: { book: SubjectBook; chapter: Chapter }[] = [];
    for (const book of subject.books) {
        for (const chapter of book.chapters) {
            results.push({ book, chapter });
        }
    }
    return results;
}
