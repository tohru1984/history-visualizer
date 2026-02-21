import { HumanEvent } from './types';

export const civilizationEvents: HumanEvent[] = [
    {
        id: 'gobekli_tepe',
        name: 'ギョベクリ・テペ (最古の神殿)',
        year: -9600, year_end: -8000,
        lat: 37.2, lon: 38.9,
        description: 'トルコ。農耕より先に大規模な宗教施設が作られた革命的遺跡。',
        type: 'civilization'
    },
    {
        id: 'jericho_walls',
        name: 'エリコの城壁',
        year: -8500, year_end: -2000,
        lat: 31.9, lon: 35.4,
        description: 'パレスチナ。世界最古の都市防衛施設と居住跡。',
        type: 'civilization'
    },
    {
        id: 'catalhoyuk',
        name: 'チャタル・ヒュユク',
        year: -7500, year_end: -5700,
        lat: 37.6, lon: 32.8,
        description: 'トルコ。道路のない密集型住居。最初期の「都市」の実験。',
        type: 'civilization'
    },
    {
        id: 'jiahu',
        name: '賈湖(カコ)遺跡',
        year: -7000, year_end: -5000,
        lat: 33.6, lon: 113.6,
        description: '中国。最古の笛や文字状の記号。文化の萌芽。',
        type: 'civilization'
    },
    {
        id: 'mehrgarh',
        name: 'メヘルガル遺跡',
        year: -7000, year_end: -2500,
        lat: 29.4, lon: 67.6,
        description: 'パキスタン。南アジアにおける農耕と都市化の起点。',
        type: 'civilization'
    },
    {
        id: 'china_rice_agri',
        name: '中国稲作農耕の確立',
        year: -6000, year_end: -3000,
        lat: 29.0, lon: 115.0,
        description: '長江流域。水田稲作による人口増が後の王朝を生む。',
        type: 'civilization'
    },
    {
        id: 'varna_gold',
        name: 'ヴァルナ黄金の墓',
        year: -4500, year_end: -4000,
        lat: 43.2, lon: 27.9,
        description: 'ブルガリア。最古の金製品加工。強力な階級社会の成立。',
        type: 'civilization'
    },
    {
        id: 'cuneiform_writing',
        name: '楔形文字の発明',
        year: -3200, year_end: -2500,
        lat: 31.0, lon: 46.0,
        description: 'メソポタミア。粘土板に刻む「文字」の誕生。歴史時代の始まり。',
        type: 'civilization'
    },
    {
        id: 'sumer_civilization',
        name: 'シュメール文明',
        year: -4000, year_end: -2000,
        lat: 31.0, lon: 46.0,
        description: 'メソポタミア。ウル、ウルクなどの都市国家。車輪、数学、暦の誕生。',
        type: 'civilization'
    },
    {
        id: 'sannai_maruyama',
        name: '三内丸山遺跡',
        year: -3900, year_end: -2200,
        lat: 40.8, lon: 140.6,
        description: '日本。縄文時代の巨大な定住集落。高度な組織社会と海を越えた交易。',
        type: 'civilization'
    },
    {
        id: 'hieroglyphs_egypt',
        name: 'ヒエログリフ (聖刻文字)',
        year: -3100, year_end: -2000,
        lat: 29.9, lon: 31.2,
        description: 'エジプト。パピルスに記される象形文字。強力な官僚機構の支え。',
        type: 'civilization'
    },
    {
        id: 'malta_temples',
        name: 'マルタ巨石神殿',
        year: -3600, year_end: -2500,
        lat: 36.0, lon: 14.5,
        description: 'マルタ。ピラミッドより古い自立型の石造建築。',
        type: 'civilization'
    },
    {
        id: 'egypt_unification',
        name: 'エジプト統一王朝',
        year: -3100, year_end: -30,
        lat: 29.9, lon: 31.2,
        description: 'ナイル川流域。不滅のファラオと巨大なピラミッド。',
        type: 'civilization'
    },
    {
        id: 'indus_valley',
        name: 'インダス文明 (モヘンジョダロ)',
        year: -2600, year_end: -1900,
        lat: 27.3, lon: 68.1,
        description: 'パキスタン。徹底した都市計画、標準化された煉瓦、排水システム。',
        type: 'civilization'
    },
    {
        id: 'zero_concept_india',
        name: '「0」の概念の誕生',
        year: -500, year_end: 500,
        lat: 25.3, lon: 83.0,
        description: 'インド。数学における「無」を「0」として定義。科学の土台を築く。',
        type: 'civilization'
    },
    {
        id: 'shang_dynasty',
        name: '殷(商)王朝',
        year: -1600, year_end: -1046,
        lat: 36.1, lon: 114.4,
        description: '中国。甲骨文字（漢字の原型）、精巧な青銅器。王権の確立。',
        type: 'civilization'
    },
    {
        id: 'alphabet_phoenician',
        name: 'フェニキア文字 (アルファベットの祖)',
        year: -1200, year_end: -800,
        lat: 33.9, lon: 35.5,
        description: 'レバノン。表音文字の普及。地中海貿易を通じて欧州へ伝播。',
        type: 'civilization'
    },
    {
        id: 'olmecs',
        name: 'オルメカ文明',
        year: -1200, year_end: -400,
        lat: 17.9, lon: -94.0,
        description: 'メソアメリカ。巨石人頭像。後のマヤ・アステカの母体。',
        type: 'civilization'
    },
    {
        id: 'yayoi_revolution',
        name: '弥生時代の到来',
        year: -1000, year_end: 250,
        lat: 33.5, lon: 130.4,
        description: '日本。水田稲作と鉄器・青銅器が伝来。階級社会と小国家の誕生。',
        type: 'civilization'
    },
    {
        id: 'qin_dynasty_unification',
        name: '秦の始皇帝 (中国統一)',
        year: -221, year_end: -206,
        lat: 34.2, lon: 108.9,
        description: '中国。度量衡、文字、貨幣の統一。万里の長城の建設開始。',
        type: 'civilization'
    },
    {
        id: 'han_silk_road',
        name: '漢王朝とシルクロード',
        year: -206, year_end: 220,
        lat: 34.6, lon: 112.4,
        description: '中国。東西の交易路「シルクロード」が開通。紙の発明（蔡倫）。',
        type: 'civilization'
    },
    {
        id: 'papermaking_cai_lun',
        name: '製紙術の発明 (蔡倫)',
        year: 105, year_end: 150,
        lat: 34.2, lon: 108.9,
        description: '中国。情報の記録と普及に革命をもたらし、文明を加速させた。',
        type: 'civilization'
    },
    {
        id: 'roman_empire_peak',
        name: 'ローマ帝国 (パクス・ロマーナ)',
        year: 27, year_end: 476,
        lat: 41.9, lon: 12.5,
        description: 'イタリア。地中海を「我らが海」とした巨大帝国。道路、法、建築。',
        type: 'civilization'
    },
    {
        id: 'himiko_yamatai',
        name: '卑弥呼と邪馬台国',
        year: 239, year_end: 248,
        lat: 33.3, lon: 130.4,
        description: '日本。魏志倭人伝に記された女王。初期の広域政治連合。',
        type: 'civilization'
    },
    {
        id: 'kofun_period_japan',
        name: '大仙陵古墳 (巨大前方後円墳)',
        year: 400, year_end: 600,
        lat: 34.5, lon: 135.5,
        description: '日本。中央集権国家(ヤマト王権)の確立を示す巨大な墓。',
        type: 'civilization'
    },
    {
        id: 'buddhism_japan_intro',
        name: '仏教伝来 (日本)',
        year: 538, year_end: 600,
        lat: 34.5, lon: 135.8,
        description: '日本。大陸の高度な文化、政治制度、思想が流入し国造りが進む。',
        type: 'civilization'
    },
    {
        id: 'tang_dynasty_golden',
        name: '唐王朝 (東アジアの黄金期)',
        year: 618, year_end: 907,
        lat: 34.2, lon: 108.9,
        description: '中国。国際色豊かな文化。律令制度が完成し、日本など周辺国に影響。',
        type: 'civilization'
    },
    {
        id: 'islam_golden_age',
        name: 'イスラム黄金時代',
        year: 750, year_end: 1258,
        lat: 33.3, lon: 44.4,
        description: 'バグダッド。知恵の館。代数学、医学、天文学の最先端を走る。',
        type: 'civilization'
    },
    {
        id: 'compass_invention',
        name: '羅針盤の発明',
        year: 1000, year_end: 1100,
        lat: 31.2, lon: 121.5,
        description: '中国。航海技術を飛躍させ、後の大航海時代を可能にした。',
        type: 'civilization'
    },
    {
        id: 'gunpowder_china',
        name: '火薬の発明',
        year: 800, year_end: 1000,
        lat: 32.0, lon: 118.8,
        description: '中国。錬金術の過程で偶然発見。軍事技術を根本から変えた。',
        type: 'civilization'
    },
    {
        id: 'murasaki_shikibu_genji',
        name: '源氏物語 (紫式部)',
        year: 1008, year_end: 1020,
        lat: 35.0, lon: 135.8,
        description: '日本。世界最古の長編小説。平安貴族文化の美意識の頂点。',
        type: 'civilization'
    },
    {
        id: 'song_dynasty_tech',
        name: '宋王朝と三大改革',
        year: 960, year_end: 1279,
        lat: 34.8, lon: 114.3,
        description: '中国。木版・活字印刷、羅針盤、火薬の普及。経済の高度化。',
        type: 'civilization'
    },
    {
        id: 'kamakura_shogunate',
        name: '鎌倉幕府の成立',
        year: 1185, year_end: 1333,
        lat: 35.3, lon: 139.5,
        description: '日本。源頼朝による武家政治の始まり。武士道の形成。',
        type: 'civilization'
    },
    {
        id: 'mongol_empire_expansion',
        name: 'モンゴル帝国 (チンギス・ハン)',
        year: 1206, year_end: 1368,
        lat: 47.9, lon: 106.9,
        description: '史上最大の陸上帝国。東西交流「タタールの平和」をもたらす。',
        type: 'civilization'
    },
    {
        id: 'black_death_europe',
        name: '黒死病 (ペスト) の大流行',
        year: 1347, year_end: 1351,
        lat: 48.8, lon: 2.3,
        description: '欧州。人口の3分の1が失われ、社会構造や封建制が崩壊する契機。',
        type: 'civilization'
    },
    {
        id: 'zheng_he_voyages',
        name: '鄭和の大航海',
        year: 1405, year_end: 1433,
        lat: 32.0, lon: 118.8,
        description: '中国（明）。巨大艦隊でアフリカ東岸まで到達。驚異的な航海術。',
        type: 'civilization'
    },
    {
        id: 'gutenberg_printing',
        name: '活版印刷術の発明 (グーテンベルク)',
        year: 1440, year_end: 1455,
        lat: 50.0, lon: 8.2,
        description: 'ドイツ。情報の大量生産が可能になり、宗教改革や科学革命の火種に。',
        type: 'civilization'
    },
    {
        id: 'columbus_discovery',
        name: 'コロンブス 新大陸到達',
        year: 1492, year_end: 1506,
        lat: 23.0, lon: -75.0,
        description: 'バハマ。世界が真に一つに繋がる「大接触」と世界システムの始まり。',
        type: 'migration'
    },
    {
        id: 'oda_nobunaga_unification',
        name: '織田信長と安土桃山時代',
        year: 1568, year_end: 1582,
        lat: 35.1, lon: 136.2,
        description: '日本。戦国乱世の終結に向けた革新。楽市楽座、キリスト教受容。',
        type: 'civilization'
    },
    {
        id: 'edo_shogunate_peace',
        name: '江戸幕府 (鎖国と泰平の世)',
        year: 1603, year_end: 1868,
        lat: 35.7, lon: 139.7,
        description: '日本。徳川家康が創設。独自の都市文化（浮世絵、歌舞伎）が隆盛。',
        type: 'civilization'
    },
    {
        id: 'grand_canal_china',
        name: '大運河の完成 (隋)',
        year: 605, year_end: 610,
        lat: 34.2, lon: 117.2,
        description: '中国。南北を繋ぐ物流の大動脈。中国の一体化を決定づけた。',
        type: 'civilization'
    },
    {
        id: 'shotoku_taishi_reforms',
        name: '聖徳太子の改革',
        year: 604, year_end: 622,
        lat: 34.5, lon: 135.8,
        description: '日本。十七条憲法、冠位十二階。天皇中心の国家体制の整備。',
        type: 'civilization'
    },
    {
        id: 'genpei_war',
        name: '源平合戦 (檀ノ浦の戦い)',
        year: 1180, year_end: 1185,
        lat: 33.9, lon: 130.9,
        description: '日本。平氏滅亡と、武士による本格的な政権誕生の画期。',
        type: 'civilization'
    },
    {
        id: 'onin_war',
        name: '応仁の乱',
        year: 1467, year_end: 1477,
        lat: 35.0, lon: 135.7,
        description: '日本。京都が焦土と化し、戦国時代の幕開けとなった大乱。',
        type: 'civilization'
    },
    {
        id: 'telescope_galileo',
        name: '望遠鏡と宇宙観の変革 (ガリレオ)',
        year: 1609, year_end: 1642,
        lat: 43.7, lon: 11.2,
        description: 'イタリア。地動説を実証し、神話的世界観から科学的宇宙観へ。',
        type: 'civilization'
    }
];
