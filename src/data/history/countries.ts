import { HumanEvent } from './types';

export const countryEvents: HumanEvent[] = [
    // ===== USA (20 events) =====
    {
        id: 'us_jamestown', name: 'ジェームズタウン植民地', name_ja: 'ジェームズタウン植民地', name_en: 'Jamestown Colony',
        year: 1607, year_end: 1699, lat: 37.2, lon: -76.8,
        description: '北米初の恒久的イギリス植民地。アメリカ合衆国の起源。',
        description_en: 'First permanent English settlement in North America. The origin of the United States.',
        type: 'civilization', importance: 3
    },
    {
        id: 'us_independence', name: 'アメリカ独立宣言', name_ja: 'アメリカ独立宣言', name_en: 'Declaration of Independence',
        year: 1776, year_end: 1783, lat: 39.9, lon: -75.2,
        description: '1776年7月4日、フィラデルフィアで独立宣言を採択。「すべての人間は平等に造られている」。',
        description_en: 'July 4, 1776: the Declaration of Independence proclaimed in Philadelphia. "All men are created equal."',
        type: 'modern', importance: 5
    },
    {
        id: 'us_constitution', name: 'アメリカ合衆国憲法制定', name_ja: 'アメリカ合衆国憲法制定', name_en: 'US Constitution Ratified',
        year: 1789, year_end: 1791, lat: 39.9, lon: -75.2,
        description: '世界初の成文憲法。三権分立と連邦制を確立。初代大統領ワシントン就任。',
        description_en: 'The world\'s first written constitution. Established separation of powers. George Washington inaugurated as first president.',
        type: 'modern', importance: 5
    },
    {
        id: 'us_louisiana', name: 'ルイジアナ買収', name_ja: 'ルイジアナ買収', name_en: 'Louisiana Purchase',
        year: 1803, year_end: 1804, lat: 38.6, lon: -90.2,
        description: 'フランスから約215万km²を購入。国土が一夜にして倍増した。',
        description_en: 'Purchased ~2.15 million km² from France. The nation doubled in size overnight.',
        type: 'modern', importance: 3
    },
    {
        id: 'us_civil_war_start', name: '南北戦争', name_ja: '南北戦争', name_en: 'American Civil War',
        year: 1861, year_end: 1865, lat: 39.8, lon: -77.2,
        description: '奴隷制と州権をめぐる内戦。約62万人が死亡。リンカーンの奴隷解放宣言。',
        description_en: 'Civil war over slavery and states\' rights. ~620,000 dead. Lincoln\'s Emancipation Proclamation.',
        type: 'war', importance: 5
    },
    {
        id: 'us_transcontinental_rr', name: '大陸横断鉄道完成', name_ja: '大陸横断鉄道完成', name_en: 'Transcontinental Railroad',
        year: 1869, year_end: 1870, lat: 41.6, lon: -112.5,
        description: '東海岸と西海岸を鉄道で結び、アメリカの西部開拓を加速させた。',
        description_en: 'Connected East and West coasts by rail, accelerating westward expansion.',
        type: 'modern', importance: 3
    },
    {
        id: 'us_spanish_war', name: '米西戦争', name_ja: '米西戦争', name_en: 'Spanish-American War',
        year: 1898, year_end: 1899, lat: 23.0, lon: -82.4,
        description: 'スペインに勝利し、フィリピン、グアム、プエルトリコを獲得。アメリカ帝国主義の始まり。',
        description_en: 'Victory over Spain gained Philippines, Guam, Puerto Rico. Dawn of American imperialism.',
        type: 'war', importance: 3
    },
    {
        id: 'us_ww1_entry', name: 'アメリカ第一次大戦参戦', name_ja: 'アメリカ第一次大戦参戦', name_en: 'US Enters World War I',
        year: 1917, year_end: 1918, lat: 48.9, lon: 2.3,
        description: '1917年、ドイツの無制限潜水艦戦を機に参戦。戦後の世界秩序を主導。',
        description_en: '1917: entered WWI after unrestricted submarine warfare. Shaped the postwar world order.',
        type: 'war', importance: 3
    },
    {
        id: 'us_wall_street_crash', name: 'ウォール街大暴落', name_ja: 'ウォール街大暴落', name_en: 'Wall Street Crash',
        year: 1929, year_end: 1933, lat: 40.7, lon: -74.0,
        description: '1929年10月24日「暗黒の木曜日」。世界大恐慌の引き金。',
        description_en: 'Oct 24, 1929: "Black Thursday." Triggered the Great Depression worldwide.',
        type: 'modern', importance: 5
    },
    {
        id: 'us_pearl_harbor', name: '真珠湾攻撃・参戦', name_ja: '真珠湾攻撃・参戦', name_en: 'Pearl Harbor / US Enters WWII',
        year: 1941, year_end: 1945, lat: 21.4, lon: -157.9,
        description: '1941年12月7日、日本軍の奇襲攻撃。アメリカの第二次世界大戦参戦。',
        description_en: 'Dec 7, 1941: Japan\'s surprise attack. "A date which will live in infamy." US enters WWII.',
        type: 'war', importance: 5
    },
    {
        id: 'us_atomic_bomb', name: '原爆投下', name_ja: '原爆投下（広島・長崎）', name_en: 'Atomic Bombings of Hiroshima & Nagasaki',
        year: 1945.6, year_end: 1945.7, lat: 34.4, lon: 132.5,
        description: '1945年8月6日広島、8月9日長崎。人類史上初の核兵器使用。戦争終結を決定づけた。',
        description_en: 'Aug 6 Hiroshima, Aug 9 Nagasaki. First use of nuclear weapons in history. Ended WWII.',
        type: 'war', importance: 5
    },
    {
        id: 'us_moon_landing', name: 'アポロ11号月面着陸', name_ja: 'アポロ11号月面着陸', name_en: 'Apollo 11 Moon Landing',
        year: 1969, year_end: 1969.6, lat: 28.6, lon: -80.6,
        description: '1969年7月20日、人類初の月面着陸。「これは一人の人間にとっては小さな一歩だが...」',
        description_en: 'July 20, 1969: first humans on the Moon. "One small step for man, one giant leap for mankind."',
        type: 'modern', importance: 5
    },
    {
        id: 'us_civil_rights', name: '公民権法成立', name_ja: '公民権法成立', name_en: 'Civil Rights Act',
        year: 1964, year_end: 1965, lat: 38.9, lon: -77.0,
        description: 'キング牧師の運動を経て、人種差別を法的に禁止。アメリカ社会の転換点。',
        description_en: 'Following MLK\'s movement, racial discrimination outlawed. A turning point in American society.',
        type: 'modern', importance: 5
    },
    {
        id: 'us_watergate', name: 'ウォーターゲート事件', name_ja: 'ウォーターゲート事件', name_en: 'Watergate Scandal',
        year: 1974, year_end: 1974.7, lat: 38.9, lon: -77.1,
        description: 'ニクソン大統領が辞任。政治不信の象徴的事件。',
        description_en: 'President Nixon resigned. An iconic symbol of political distrust.',
        type: 'modern', importance: 3
    },
    {
        id: 'us_cold_war_end', name: '冷戦終結', name_ja: '冷戦終結', name_en: 'End of the Cold War',
        year: 1991, year_end: 1991.9, lat: 55.8, lon: 37.6,
        description: 'ソ連崩壊。アメリカが唯一の超大国に。「歴史の終わり」と評された。',
        description_en: 'USSR dissolved. America became the sole superpower. Fukuyama declared "the end of history."',
        type: 'modern', importance: 5
    },
    {
        id: 'us_911', name: '9.11同時多発テロ', name_ja: '9.11同時多発テロ', name_en: 'September 11 Attacks',
        year: 2001, year_end: 2001.8, lat: 40.7, lon: -74.0,
        description: '2001年9月11日。ワールドトレードセンター崩壊。対テロ戦争の始まり。',
        description_en: 'Sep 11, 2001: World Trade Center collapsed. The War on Terror begins.',
        type: 'modern', importance: 5
    },
    {
        id: 'us_obama', name: 'オバマ大統領就任', name_ja: 'オバマ大統領就任', name_en: 'Barack Obama Inaugurated',
        year: 2009, year_end: 2017, lat: 38.9, lon: -77.0,
        description: '初のアフリカ系アメリカ人大統領。「Yes We Can」。',
        description_en: 'First African American president. "Yes We Can."',
        type: 'modern', importance: 3
    },
    {
        id: 'us_trump', name: 'トランプ大統領就任', name_ja: 'トランプ大統領就任', name_en: 'Donald Trump Inaugurated',
        year: 2017, year_end: 2021, lat: 38.9, lon: -77.0,
        description: '「アメリカ・ファースト」。政治的分断の象徴。',
        description_en: '"America First." A symbol of political polarization.',
        type: 'modern', importance: 3
    },

    // ===== UK (20 events) =====
    {
        id: 'uk_norman_conquest', name: 'ノルマン・コンクエスト', name_ja: 'ノルマン・コンクエスト', name_en: 'Norman Conquest',
        year: 1066, year_end: 1071, lat: 50.9, lon: 0.5,
        description: 'ウィリアム征服王がヘイスティングスの戦いで勝利。イングランドの歴史が一変。',
        description_en: 'William the Conqueror won the Battle of Hastings. England\'s history transformed forever.',
        type: 'civilization', importance: 5
    },
    {
        id: 'uk_magna_carta', name: 'マグナ・カルタ', name_ja: 'マグナ・カルタ', name_en: 'Magna Carta',
        year: 1215, year_end: 1216, lat: 51.4, lon: -0.6,
        description: '国王の権力を制限する憲章。立憲主義の原点。',
        description_en: 'Charter limiting the king\'s power. The foundation of constitutionalism.',
        type: 'civilization', importance: 5
    },
    {
        id: 'uk_hundred_years', name: '百年戦争', name_ja: '百年戦争', name_en: 'Hundred Years\' War',
        year: 1337, year_end: 1453, lat: 49.4, lon: 1.1,
        description: 'イングランドとフランスのフランス王位をめぐる断続的な戦争。',
        description_en: 'Intermittent war between England and France over the French crown.',
        type: 'war', importance: 3
    },
    {
        id: 'uk_henry_viii', name: 'ヘンリー8世の宗教改革', name_ja: 'ヘンリー8世の宗教改革', name_en: 'Henry VIII\'s Reformation',
        year: 1534, year_end: 1547, lat: 51.5, lon: -0.1,
        description: 'ローマ教皇から独立しイングランド国教会を設立。',
        description_en: 'Broke from the Pope and established the Church of England.',
        type: 'civilization', importance: 5
    },
    {
        id: 'uk_spanish_armada', name: 'アルマダ海戦', name_ja: 'アルマダ海戦', name_en: 'Spanish Armada Defeated',
        year: 1588, year_end: 1589, lat: 50.4, lon: -4.2,
        description: 'スペイン無敵艦隊を撃破。イギリス海洋帝国の始まり。エリザベス1世の黄金期。',
        description_en: 'Defeated the Spanish Armada. Birth of the British naval empire. Elizabeth I\'s golden age.',
        type: 'war', importance: 5
    },
    {
        id: 'uk_glorious_revolution', name: '名誉革命', name_ja: '名誉革命', name_en: 'Glorious Revolution',
        year: 1688, year_end: 1689, lat: 51.5, lon: -0.1,
        description: '議会主権の確立と権利章典の制定。立憲君主制の原型。',
        description_en: 'Established parliamentary sovereignty and the Bill of Rights. Model for constitutional monarchy.',
        type: 'modern', importance: 5
    },
    {
        id: 'uk_act_of_union', name: 'グレートブリテン王国成立', name_ja: 'グレートブリテン王国成立', name_en: 'Act of Union (Great Britain)',
        year: 1707, year_end: 1708, lat: 55.9, lon: -3.2,
        description: 'イングランドとスコットランドが合同。グレートブリテン王国の成立。',
        description_en: 'England and Scotland united. The Kingdom of Great Britain formed.',
        type: 'modern', importance: 3
    },
    {
        id: 'uk_industrial_revolution', name: '産業革命', name_ja: '産業革命', name_en: 'Industrial Revolution',
        year: 1760, year_end: 1840, lat: 53.5, lon: -2.2,
        description: 'マンチェスター。蒸気機関と工場制。世界を根本から変えた経済革命。',
        description_en: 'Manchester. Steam power and the factory system. An economic revolution that changed the world.',
        type: 'modern', importance: 5
    },
    {
        id: 'uk_trafalgar', name: 'トラファルガー海戦', name_ja: 'トラファルガー海戦', name_en: 'Battle of Trafalgar',
        year: 1805, year_end: 1806, lat: 36.2, lon: -6.1,
        description: 'ネルソン提督がナポレオンの艦隊を撃破。「英国は各人がその義務を果たすことを期待する」',
        description_en: 'Admiral Nelson defeated Napoleon\'s fleet. "England expects that every man will do his duty."',
        type: 'war', importance: 3
    },
    {
        id: 'uk_victoria', name: 'ヴィクトリア朝', name_ja: 'ヴィクトリア朝', name_en: 'Victorian Era',
        year: 1837, year_end: 1901, lat: 51.5, lon: -0.1,
        description: 'イギリス帝国の最盛期。世界の4分の1を支配。「太陽の沈まない帝国」。',
        description_en: 'Peak of the British Empire. Ruled a quarter of the world. "The empire on which the sun never sets."',
        type: 'modern', importance: 5
    },
    {
        id: 'uk_ww1', name: 'イギリス第一次大戦参戦', name_ja: 'イギリス第一次大戦参戦', name_en: 'Britain in World War I',
        year: 1914, year_end: 1918, lat: 50.4, lon: 2.9,
        description: 'ソンムの戦いなど甚大な犠牲。帝国の衰退の始まり。',
        description_en: 'Battle of the Somme and devastating losses. The beginning of imperial decline.',
        type: 'war', importance: 5
    },
    {
        id: 'uk_ww2_blitz', name: 'ロンドン大空襲', name_ja: 'ロンドン大空襲 (ブリッツ)', name_en: 'The Blitz',
        year: 1940.6, year_end: 1941.4,
        lat: 51.5, lon: -0.1,
        description: 'ドイツ軍による大規模な都市爆撃。市民が地下鉄に避難しながらも抗戦を続けた。',
        description_en: 'A prolonged bombing campaign by the German Luftwaffe. Londoners took shelter in the Underground while resisting.',
        type: 'ww2',
        importance: 3
    },
    {
        id: 'uk_nhs', name: '国民保健サービス(NHS)創設', name_ja: 'NHS 創設', name_en: 'NHS Founded',
        year: 1948, year_end: 1949, lat: 51.5, lon: -0.1,
        description: '無料の国民皆保険制度。福祉国家の象徴。',
        description_en: 'Free universal healthcare. A symbol of the welfare state.',
        type: 'modern', importance: 3
    },
    {
        id: 'uk_brexit', name: 'EU離脱 (ブレグジット)', name_ja: 'EU離脱 (ブレグジット)', name_en: 'Brexit',
        year: 2016, year_end: 2020, lat: 51.5, lon: -0.1,
        description: '2016年国民投票でEU離脱を決定。2020年1月31日に正式離脱。',
        description_en: '2016 referendum voted to leave the EU. Officially left on January 31, 2020.',
        type: 'modern', importance: 5
    },
    {
        id: 'uk_elizabeth_ii_death', name: 'エリザベス2世崩御', name_ja: 'エリザベス2世崩御', name_en: 'Death of Queen Elizabeth II',
        year: 2022, year_end: 2022.7, lat: 57.0, lon: -3.2,
        description: '2022年9月8日。在位70年。チャールズ3世即位。',
        description_en: 'Sep 8, 2022. 70 years on the throne. King Charles III accedes.',
        type: 'modern', importance: 3
    },

    // ===== France (20 events) =====
    {
        id: 'fr_charlemagne', name: 'シャルルマーニュ戴冠', name_ja: 'シャルルマーニュ戴冠', name_en: 'Charlemagne Crowned Emperor',
        year: 800, year_end: 814, lat: 41.9, lon: 12.5,
        description: '800年クリスマス、ローマ教皇から西ローマ皇帝の冠を受ける。西欧統一の象徴。',
        description_en: 'Christmas 800: crowned Emperor of the West by the Pope. Symbol of European unity.',
        type: 'civilization', importance: 5
    },
    {
        id: 'fr_joan_of_arc', name: 'ジャンヌ・ダルク', name_ja: 'ジャンヌ・ダルク', name_en: 'Joan of Arc',
        year: 1429, year_end: 1431, lat: 47.9, lon: 1.9,
        description: '百年戦争で神の啓示を受けた少女がフランスを救う。1431年に火刑。',
        description_en: 'A teenage girl claiming divine visions saved France in the Hundred Years\' War. Burned at the stake in 1431.',
        type: 'civilization', importance: 5
    },
    {
        id: 'fr_edict_nantes', name: 'ナントの勅令', name_ja: 'ナントの勅令', name_en: 'Edict of Nantes',
        year: 1598, year_end: 1685, lat: 47.2, lon: -1.6,
        description: 'アンリ4世がプロテスタントに信仰の自由を認めた。宗教戦争の終結。',
        description_en: 'Henry IV granted religious freedom to Protestants. Ended the Wars of Religion.',
        type: 'modern', importance: 3
    },
    {
        id: 'fr_versailles', name: 'ヴェルサイユ宮殿建設', name_ja: 'ヴェルサイユ宮殿建設', name_en: 'Palace of Versailles Built',
        year: 1682, year_end: 1710, lat: 48.8, lon: 2.1,
        description: 'ルイ14世「太陽王」が建造。絶対王政の象徴。',
        description_en: 'Built by Louis XIV, the "Sun King." Symbol of absolute monarchy.',
        type: 'civilization', importance: 3
    },
    {
        id: 'fr_revolution', name: 'フランス革命', name_ja: 'フランス革命', name_en: 'French Revolution',
        year: 1789, year_end: 1799, lat: 48.9, lon: 2.3,
        description: '1789年7月14日バスティーユ襲撃。「自由・平等・友愛」。近代民主主義の原点。',
        description_en: 'July 14, 1789: Storming of the Bastille. "Liberté, Égalité, Fraternité." Origin of modern democracy.',
        type: 'modern', importance: 5
    },
    {
        id: 'fr_napoleon_emperor', name: 'ナポレオン皇帝即位', name_ja: 'ナポレオン皇帝即位', name_en: 'Napoleon Crowned Emperor',
        year: 1804, year_end: 1815, lat: 48.9, lon: 2.3,
        description: '自ら帝冠を戴き、ヨーロッパ大陸を制覇。ナポレオン法典で近代法を確立。',
        description_en: 'Crowned himself Emperor, conquered continental Europe. Napoleonic Code established modern law.',
        type: 'modern', importance: 5
    },
    {
        id: 'fr_waterloo', name: 'ワーテルローの戦い', name_ja: 'ワーテルローの戦い', name_en: 'Battle of Waterloo',
        year: 1815, year_end: 1815.5, lat: 50.7, lon: 4.4,
        description: 'ナポレオンの最終的な敗北。セントヘレナ島に流刑。',
        description_en: 'Napoleon\'s final defeat. Exiled to Saint Helena.',
        type: 'war', importance: 5
    },
    {
        id: 'fr_commune', name: 'パリ・コミューン', name_ja: 'パリ・コミューン', name_en: 'Paris Commune',
        year: 1871, year_end: 1871.5, lat: 48.9, lon: 2.3,
        description: '世界初の社会主義政権の試み。「血の一週間」で鎮圧。',
        description_en: 'First attempt at a socialist government. Crushed during "Bloody Week."',
        type: 'modern', importance: 3
    },
    {
        id: 'fr_dreyfus', name: 'ドレフュス事件', name_ja: 'ドレフュス事件', name_en: 'Dreyfus Affair',
        year: 1894, year_end: 1906, lat: 48.9, lon: 2.3,
        description: 'ユダヤ人将校の冤罪事件。ゾラ「我弾劾す！」。人権問題の転換点。',
        description_en: 'Jewish officer falsely convicted. Zola\'s "J\'accuse!" A turning point for human rights.',
        type: 'modern', importance: 3
    },
    {
        id: 'fr_ww1_verdun', name: 'ヴェルダンの戦い', name_ja: 'ヴェルダンの戦い', name_en: 'Battle of Verdun',
        year: 1916, year_end: 1917, lat: 49.2, lon: 5.4,
        description: '10ヶ月で70万人以上の死傷者。「彼らは通さじ」。フランスの不屈の象徴。',
        description_en: '10 months, 700,000+ casualties. "Ils ne passeront pas!" Symbol of French resilience.',
        type: 'war', importance: 5
    },
    {
        id: 'fr_vichy', name: 'ヴィシー政権/占領', name_ja: 'ヴィシー政権/ナチス占領', name_en: 'Vichy France / Nazi Occupation',
        year: 1940, year_end: 1944, lat: 46.1, lon: 3.4,
        description: 'ナチス・ドイツに降伏。ドゴールのロンドンからの抵抗呼びかけ。',
        description_en: 'Surrendered to Nazi Germany. De Gaulle\'s call to resist from London.',
        type: 'war', importance: 5
    },
    {
        id: 'fr_fifth_republic', name: '第五共和政・ドゴール', name_ja: '第五共和政・ドゴール', name_en: 'Fifth Republic / De Gaulle',
        year: 1958, year_end: 1969, lat: 48.9, lon: 2.3,
        description: 'ドゴール大統領が新憲法を制定。現在のフランス政治体制の基礎。',
        description_en: 'President de Gaulle established a new constitution. Foundation of modern French politics.',
        type: 'modern', importance: 5
    },
    {
        id: 'fr_may_68', name: '五月革命', name_ja: '五月革命 (1968)', name_en: 'May 1968 Protests',
        year: 1968, year_end: 1968.5, lat: 48.8, lon: 2.3,
        description: '学生運動とゼネスト。フランス社会の価値観を根本から変えた。',
        description_en: 'Student protests and general strike. Fundamentally changed French social values.',
        type: 'modern', importance: 3
    },
    {
        id: 'fr_charlie_hebdo', name: 'シャルリ・エブド事件', name_ja: 'シャルリ・エブド襲撃事件', name_en: 'Charlie Hebdo Attack',
        year: 2015, year_end: 2015.1, lat: 48.9, lon: 2.4,
        description: '風刺新聞社への銃撃テロ。「Je suis Charlie」運動が世界に広がる。',
        description_en: 'Terrorist attack on satirical newspaper. "Je suis Charlie" movement spread worldwide.',
        type: 'modern', importance: 3
    },

    // ===== Germany (20 events) =====
    {
        id: 'de_charlemagne_hre', name: '神聖ローマ帝国成立', name_ja: '神聖ローマ帝国成立', name_en: 'Holy Roman Empire Founded',
        year: 962, year_end: 1806, lat: 50.9, lon: 6.96,
        description: 'オットー1世が教皇から皇帝冠を受ける。「神聖でもなく、ローマ的でもなく、帝国でもない」。',
        description_en: 'Otto I crowned Emperor by the Pope. "Neither holy, nor Roman, nor an empire."',
        type: 'civilization', importance: 5
    },
    {
        id: 'de_gutenberg', name: 'グーテンベルク印刷術', name_ja: 'グーテンベルク印刷術', name_en: 'Gutenberg\'s Printing Press',
        year: 1440, year_end: 1455, lat: 50.0, lon: 8.3,
        description: '活版印刷術の発明。情報革命の始まり。宗教改革と科学革命の触媒。',
        description_en: 'Invention of moveable type printing. Start of the information revolution.',
        type: 'civilization', importance: 5
    },
    {
        id: 'de_luther_reformation', name: 'ルターの宗教改革', name_ja: 'ルターの宗教改革', name_en: 'Luther\'s Reformation',
        year: 1517, year_end: 1555, lat: 51.9, lon: 11.7,
        description: '95か条の論題をヴィッテンベルクに掲げる。プロテスタントの誕生。',
        description_en: '95 Theses posted at Wittenberg. Birth of Protestantism.',
        type: 'civilization', importance: 5
    },
    {
        id: 'de_thirty_years', name: '三十年戦争', name_ja: '三十年戦争', name_en: 'Thirty Years\' War',
        year: 1618, year_end: 1648, lat: 50.1, lon: 14.4,
        description: 'ヨーロッパを荒廃させた宗教戦争。ウェストファリア条約で主権国家体制を確立。',
        description_en: 'Devastating religious war across Europe. Treaty of Westphalia established the sovereign state system.',
        type: 'war', importance: 5
    },
    {
        id: 'de_prussian_rise', name: 'プロイセン王国建国', name_ja: 'プロイセン王国建国', name_en: 'Kingdom of Prussia Founded',
        year: 1701, year_end: 1871, lat: 52.5, lon: 13.4,
        description: 'フリードリヒ1世がプロイセン国王を宣言。後のドイツ統一の原動力。',
        description_en: 'Frederick I proclaimed King. Prussia later unified Germany.',
        type: 'modern', importance: 3
    },
    {
        id: 'de_unification', name: 'ドイツ帝国統一', name_ja: 'ドイツ帝国統一', name_en: 'German Unification',
        year: 1871, year_end: 1918, lat: 48.8, lon: 2.3,
        description: 'ビスマルクの鉄血政策。ヴェルサイユ宮殿でヴィルヘルム1世がドイツ皇帝即位。',
        description_en: 'Bismarck\'s "blood and iron" policy. Wilhelm I proclaimed German Emperor at Versailles.',
        type: 'modern', importance: 5
    },
    {
        id: 'de_ww1_defeat', name: 'ドイツ第一次大戦敗北', name_ja: 'ドイツ第一次大戦敗北', name_en: 'Germany Defeated in WWI',
        year: 1918, year_end: 1919, lat: 52.5, lon: 13.4,
        description: '帝政崩壊。ヴェルサイユ条約で巨額の賠償金。ヴァイマル共和政の成立。',
        description_en: 'Empire collapsed. Versailles Treaty imposed massive reparations. Weimar Republic formed.',
        type: 'war', importance: 5
    },
    {
        id: 'de_hyperinflation', name: 'ハイパーインフレーション', name_ja: 'ハイパーインフレーション', name_en: 'Hyperinflation',
        year: 1923, year_end: 1924, lat: 52.5, lon: 13.4,
        description: 'パン一斤が4兆マルク。経済崩壊がナチス台頭の土壌を作った。',
        description_en: 'A loaf of bread cost 4 trillion marks. Economic collapse laid ground for Nazi rise.',
        type: 'modern', importance: 3
    },
    {
        id: 'de_nazi_rise', name: 'ヒトラー政権掌握', name_ja: 'ヒトラー政権掌握', name_en: 'Hitler Seizes Power',
        year: 1933, year_end: 1939, lat: 52.5, lon: 13.4,
        description: '1933年、ヒトラーが首相に就任。全権委任法で独裁体制を確立。',
        description_en: '1933: Hitler became Chancellor. Enabling Act established dictatorship.',
        type: 'modern', importance: 5
    },
    {
        id: 'de_ww2_europe', name: '第二次世界大戦（欧州）', name_ja: '第二次世界大戦（欧州戦線）', name_en: 'WWII European Theater',
        year: 1939.67, year_end: 1945.3,
        lat: 52.5, lon: 13.4,
        description: 'ポーランド侵攻から始まり、ヨーロッパ全土を巻き込んだ未曾有の大戦。ホロコーストという悲劇も生んだ。',
        description_en: 'Began with the invasion of Poland and engulfed all of Europe. Resulted in unprecedented destruction and the tragedy of the Holocaust.',
        type: 'ww2',
        importance: 5
    },
    {
        id: 'de_berlin_wall_up', name: 'ベルリンの壁建設', name_ja: 'ベルリンの壁建設', name_en: 'Berlin Wall Built',
        year: 1961, year_end: 1989, lat: 52.5, lon: 13.4,
        description: '1961年8月13日。東西冷戦の象徴が出現。東ドイツ市民の自由を封じた。',
        description_en: 'Aug 13, 1961: the Cold War\'s most iconic symbol erected. Freedom sealed for East Germans.',
        type: 'modern', importance: 5
    },
    {
        id: 'de_berlin_wall_down', name: 'ベルリンの壁崩壊', name_ja: 'ベルリンの壁崩壊', name_en: 'Fall of the Berlin Wall',
        year: 1989, year_end: 1990, lat: 52.5, lon: 13.4,
        description: '1989年11月9日。冷戦終結の象徴。翌年ドイツ再統一。',
        description_en: 'Nov 9, 1989: symbol of the Cold War\'s end. Germany reunified the following year.',
        type: 'modern', importance: 5
    },
    {
        id: 'de_reunification', name: 'ドイツ再統一', name_ja: 'ドイツ再統一', name_en: 'German Reunification',
        year: 1990, year_end: 1991, lat: 52.5, lon: 13.4,
        description: '1990年10月3日。東西ドイツが統一。ヨーロッパの地政学が一変。',
        description_en: 'Oct 3, 1990: East and West Germany unified. European geopolitics transformed.',
        type: 'modern', importance: 5
    },
    {
        id: 'de_euro_adoption', name: 'ユーロ導入', name_ja: 'ユーロ導入', name_en: 'Euro Adoption',
        year: 2002, year_end: 2002.5, lat: 50.1, lon: 8.7,
        description: 'ドイツがマルクを廃止しユーロを採用。欧州統合の象徴。',
        description_en: 'Germany replaced the Deutsche Mark with the Euro. Symbol of European integration.',
        type: 'modern', importance: 3
    },
    {
        id: 'de_merkel', name: 'メルケル首相就任', name_ja: 'メルケル首相就任', name_en: 'Angela Merkel Becomes Chancellor',
        year: 2005, year_end: 2021, lat: 52.5, lon: 13.4,
        description: '初の女性首相。16年間にわたりEUを牽引。「ヨーロッパの盟主」。',
        description_en: 'First female chancellor. Led the EU for 16 years. "Leader of Europe."',
        type: 'modern', importance: 3
    },
    {
        id: 'de_refugee_crisis', name: '難民危機', name_ja: '難民危機 (100万人受入)', name_en: 'Refugee Crisis',
        year: 2015, year_end: 2016, lat: 48.1, lon: 11.6,
        description: 'メルケル「我々はこれを成し遂げる」。100万人以上の難民を受け入れ。',
        description_en: 'Merkel: "Wir schaffen das." Germany accepted over 1 million refugees.',
        type: 'modern', importance: 3
    }
];
