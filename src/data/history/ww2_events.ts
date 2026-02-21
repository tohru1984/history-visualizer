import { HumanEvent } from './types';

export const ww2Events: HumanEvent[] = [
    // 1939 - 開戦期
    {
        id: 'ww2_invasion_poland', name: 'ドイツ軍ポーランド侵攻', name_ja: 'ドイツ軍ポーランド侵攻', name_en: 'Invasion of Poland',
        year: 1939.67, lat: 52.2, lon: 21.0,
        description: '1939年9月1日。ドイツ軍がポーランドに侵攻。これに対しイギリスとフランスが宣戦布告し、第二次世界大戦が開戦した。',
        description_en: 'September 1, 1939. Germany invades Poland, prompting the UK and France to declare war, marking the start of WWII.',
        type: 'ww2', importance: 5
    },
    // 1940
    {
        id: 'ww2_fall_of_france', name: 'フランス降伏', name_ja: 'フランス降伏 (パリ陥落)', name_en: 'Fall of France',
        year: 1940.45, lat: 48.8, lon: 2.3,
        description: '1940年6月。ドイツの電撃戦によりパリが陥落し、フランスが降伏。ヨーロッパ大陸の大半が枢軸国の支配下に入った。',
        description_en: 'June 1940. Paris falls to German Blitzkrieg and France surrenders, leaving most of continental Europe under Axis control.',
        type: 'ww2', importance: 5
    },
    // 1941
    {
        id: 'ww2_operation_barbarossa', name: 'バルバロッサ作戦', name_ja: 'バルバロッサ作戦 (独ソ戦開始)', name_en: 'Operation Barbarossa',
        year: 1941.5, lat: 53.9, lon: 27.5,
        description: '1941年6月22日。ドイツ軍が不可侵条約を破りソ連に侵攻。史上最大の陸戦である独ソ戦が幕を開けた。',
        description_en: 'June 22, 1941. Germany breaks the non-aggression pact and invades the Soviet Union, starting the largest land war in history.',
        type: 'ww2', importance: 5
    },
    {
        id: 'ww2_pearl_harbor', name: '真珠湾攻撃', name_ja: '真珠湾攻撃', name_en: 'Attack on Pearl Harbor',
        year: 1941.92, lat: 21.3, lon: -157.9,
        description: '1941年12月7日(日本時間8日)。日本軍によるハワイ・真珠湾への奇襲攻撃。これにより太平洋戦争が開戦し、アメリカが参戦した。',
        description_en: 'December 7, 1941. Surprise attack by the Japanese Navy on Pearl Harbor, bringing the US into the war and opening the Pacific theater.',
        type: 'ww2', importance: 5
    },
    // 1942 - 転換期
    {
        id: 'ww2_battle_of_midway', name: 'ミッドウェー海戦', name_ja: 'ミッドウェー海戦', name_en: 'Battle of Midway',
        year: 1942.4, lat: 28.2, lon: -177.3,
        description: '1942年6月。アメリカ軍が日本海軍の空母4隻を撃沈し大勝。太平洋戦線における重要な転換点となった。',
        description_en: 'June 1942. US Navy sinks four Japanese aircraft carriers in a decisive victory, marking the turning point of the Pacific War.',
        type: 'ww2', importance: 5
    },
    {
        id: 'ww2_battle_of_stalingrad', name: 'スターリングラード攻防戦', name_ja: 'スターリングラード攻防戦', name_en: 'Battle of Stalingrad',
        year: 1942.6, year_end: 1943.1, lat: 48.7, lon: 44.5,
        description: '約200万人の死傷者を出した凄惨な市街戦。ソ連がドイツ第6軍を包囲・降伏させ、独ソ戦の決定的な転換点となった。',
        description_en: 'A horrific urban battle with ~2 million casualties. The Soviet victory encircled the German 6th Army, turning the tide of the war in Europe.',
        type: 'ww2', importance: 5
    },
    {
        id: 'ww2_el_alamein', name: 'エル・アラメインの戦い', name_ja: 'エル・アラメインの戦い', name_en: 'Battle of El Alamein',
        year: 1942.8, lat: 30.8, lon: 28.9,
        description: '1942年。北アフリカ戦線で英軍がロンメル率いるドイツ・アフリカ軍団を破り、枢軸国のアフリカ支配を食い止めた。',
        description_en: '1942. British forces defeat Rommel\'s Afrika Korps, halting Axis expansion in North Africa.',
        type: 'ww2', importance: 4
    },
    // 1943
    {
        id: 'ww2_italy_surrender', name: 'イタリア降伏', name_ja: 'イタリア降伏', name_en: 'Italy Surrenders',
        year: 1943.7, lat: 41.9, lon: 12.5,
        description: '1943年9月。ムッソリーニ政権が崩壊し、イタリアが連合国に無条件降伏。枢軸国の一角が崩落した。',
        description_en: 'September 1943. Mussolini\'s regime falls and Italy uncoditionally surrenders to the Allies.',
        type: 'ww2', importance: 4
    },
    // 1944
    {
        id: 'ww2_normandy', name: 'ノルマンディー上陸作戦', name_ja: 'ノルマンディー上陸作戦', name_en: 'Normandy Landings (D-Day)',
        year: 1944.4, lat: 49.3, lon: -0.8,
        description: '1944年6月6日(D-Day)。連合軍による史上最大の水陸両用作戦。西ヨーロッパ奪還の足がかりとなり、ドイツを東西から挟み撃ちにした。',
        description_en: 'June 6, 1944 (D-Day). The largest amphibious invasion in history. The Allies gain a foothold in Western Europe to push towards Germany.',
        type: 'ww2', importance: 5
    },
    {
        id: 'ww2_leyte_gulf', name: 'レイテ沖海戦', name_ja: 'レイテ沖海戦', name_en: 'Battle of Leyte Gulf',
        year: 1944.8, lat: 10.8, lon: 125.4,
        description: '1944年10月。史上最大の海戦。日本海軍の連合艦隊は事実上壊滅し、神風特別攻撃隊が初めて編成された。',
        description_en: 'October 1944. The largest naval battle in history. The Japanese Imperial Navy was effectively destroyed, and kamikaze tactics were first used.',
        type: 'ww2', importance: 4
    },
    // 1945
    {
        id: 'ww2_yalta', name: 'ヤルタ会談', name_ja: 'ヤルタ会談', name_en: 'Yalta Conference',
        year: 1945.1, lat: 44.4, lon: 34.1,
        description: '1945年2月。米英ソの首脳が戦後のヨーロッパ秩序や国際連合設立、ソ連の対日参戦について協議した密約。',
        description_en: 'February 1945. US, UK, and Soviet leaders discuss Europe\'s post-war reorganization, the UN, and Soviet entry against Japan.',
        type: 'ww2', importance: 4
    },
    {
        id: 'ww2_berlin_fall', name: 'ベルリンの戦い・ドイツ降伏', name_ja: 'ベルリン陥落 / ドイツ無条件降伏', name_en: 'Fall of Berlin / German Surrender',
        year: 1945.3, lat: 52.5, lon: 13.4,
        description: '1945年5月8日。ソ連軍がベルリンを制圧（ヒトラーは自殺）。ドイツが無条件降伏し、ヨーロッパ戦線が終結。',
        description_en: 'May 8, 1945. Soviet forces capture Berlin (Hitler commits suicide). Germany unconditionally surrenders, ending the war in Europe.',
        type: 'ww2', importance: 5
    },
    {
        id: 'ww2_atomic_bomb', name: '原爆投下（広島・長崎）', name_ja: '原爆投下（広島・長崎）', name_en: 'Atomic Bombings',
        year: 1945.6, lat: 34.4, lon: 132.5,
        description: '1945年8月6日広島、8月9日長崎。人類史上初の核兵器使用。数十万人が犠牲となり、凄まじい被害をもたらした。',
        description_en: 'Aug 6 Hiroshima, Aug 9 Nagasaki. First use of nuclear weapons, causing hundreds of thousands of casualties and immense destruction.',
        type: 'ww2', importance: 5
    },
    {
        id: 'ww2_japan_surrender', name: '日本の降伏', name_ja: '日本の無条件降伏 (ポツダム宣言受諾)', name_en: 'Japan Surrenders',
        year: 1945.62, lat: 35.7, lon: 139.7,
        description: '1945年8月15日(玉音放送)、9月2日(文書調印)。日本がポツダム宣言を受諾し降伏。約6年に及ぶ第二次世界大戦が完全に終結した。',
        description_en: 'August 15 (broadcast) & Sept 2 (signing), 1945. Japan accepts the Potsdam Declaration, bringing an end to the six-year global conflict.',
        type: 'ww2', importance: 5
    }
];
