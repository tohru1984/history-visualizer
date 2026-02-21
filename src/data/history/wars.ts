import { HumanEvent } from './types';

export const warEvents: HumanEvent[] = [
    {
        id: 'trojan_war',
        name: 'トロイア戦争 (伝承)',
        year: -1194,
        lat: 39.95, lon: 26.23,
        description: 'ギリシア神話に語られる、アカイア人（ギリシア人）とトロイアの間の戦争。歴史的事実としてもこの時期に破壊の跡がある。',
        type: 'war'
    },
    {
        id: 'greco_persian_wars',
        name: 'ペルシア戦争',
        year: -499, year_end: -449,
        lat: 37.98, lon: 23.72,
        description: 'アケメネス朝ペルシアと古代ギリシアの都市国家群との間で勃発した戦争。マラトンやサラミスの海戦が有名。',
        type: 'war'
    },
    {
        id: 'punic_wars',
        name: 'ポエニ戦争',
        year: -264, year_end: -146,
        lat: 36.85, lon: 10.33,
        description: '地中海の覇権を巡って、古代ローマとカルタゴの間で3度にわたり行われた戦争。ハンニバルのアルプス越えが著名。',
        type: 'war'
    },
    {
        id: 'battle_of_red_cliffs',
        name: '赤壁の戦い',
        year: 208,
        lat: 29.88, lon: 113.88,
        description: '中国後漢末期。曹操軍と孫権・劉備の連合軍が長江の赤壁で激突した、三国志において最も有名な水上戦。',
        type: 'war'
    },
    {
        id: 'crusades',
        name: '十字軍の遠征',
        year: 1096, year_end: 1291,
        lat: 31.76, lon: 35.21,
        description: '西欧のキリスト教諸国が、聖地エルサレムをイスラム教国から奪還するために派遣した遠征軍。',
        type: 'war'
    },
    {
        id: 'mongol_invasions',
        name: 'モンゴル帝国の征服戦争',
        year: 1206, year_end: 1368,
        lat: 47.92, lon: 106.91,
        description: 'チンギス・カンに始まるモンゴル帝国が、ユーラシア大陸の大部分を征服した一連の戦争。',
        type: 'war'
    },
    {
        id: 'onin_war',
        name: '応仁の乱',
        year: 1467, year_end: 1477,
        lat: 35.01, lon: 135.76,
        description: '日本の室町時代。将軍家の家督争いから発展し、京都が焼け野原となった。戦国時代の幕開けとされる。',
        type: 'war'
    },
    {
        id: 'battle_of_sekigahara',
        name: '関ヶ原の戦い',
        year: 1600,
        lat: 35.36, lon: 136.46,
        description: '日本の美濃国（岐阜県）で行われた天下分け目の戦い。徳川家康率いる東軍が石田三成らの西軍を破った。',
        type: 'war'
    },
    {
        id: 'thirty_years_war',
        name: '三十年戦争',
        year: 1618, year_end: 1648,
        lat: 50.08, lon: 14.42,
        description: '神聖ローマ帝国（ドイツ）を舞台として勃発した宗教戦争であり、ヨーロッパ各国が介入する国際戦争に発展した。',
        type: 'war'
    },
    {
        id: 'american_revolution',
        name: 'アメリカ独立戦争',
        year: 1775, year_end: 1783,
        lat: 39.95, lon: -75.16,
        description: '北米のイギリス13植民地が、イギリス本国の支配に対して独立を求めて起こした戦争。',
        type: 'war'
    },
    {
        id: 'napoleonic_wars',
        name: 'ナポレオン戦争',
        year: 1803, year_end: 1815,
        lat: 48.85, lon: 2.35,
        description: 'ナポレオン・ボナパルト率いるフランス帝国と、イギリスを中心とするヨーロッパ対仏大同盟諸国との一連の戦争。',
        type: 'war'
    },
    {
        id: 'american_civil_war',
        name: 'アメリカ南北戦争',
        year: 1861, year_end: 1865,
        lat: 38.89, lon: -77.03,
        description: '奴隷制と州の権限を巡り、アメリカ合衆国（北部）とアメリカ連合国（南部）の間で戦われた内戦。',
        type: 'war'
    },
    {
        id: 'boshin_war',
        name: '戊辰戦争',
        year: 1868, year_end: 1869,
        lat: 35.01, lon: 135.76,
        description: '日本の幕末から明治初期。新政府軍と旧幕府軍の間で行われた内戦。鳥羽・伏見の戦いから箱館戦争まで。',
        type: 'war'
    },
    {
        id: 'sino_japanese_war',
        name: '日清戦争',
        year: 1894, year_end: 1895,
        lat: 38.91, lon: 121.60,
        description: '朝鮮半島の権益を巡る大日本帝国と清（中国）との間の戦争。',
        type: 'war'
    },
    {
        id: 'russo_japanese_war',
        name: '日露戦争',
        year: 1904, year_end: 1905,
        lat: 38.80, lon: 121.26,
        description: '満州と朝鮮半島の支配権を巡る大日本帝国とロシア帝国との間の戦争。',
        type: 'war'
    },
    {
        id: 'world_war_1',
        name: '第一次世界大戦',
        year: 1914, year_end: 1918,
        lat: 43.85, lon: 18.41,
        description: 'サラエボ事件を契機に勃発。協商国（英仏露など）と中央同盟国（独墺など）が世界規模で衝突した凄惨な戦争。',
        type: 'war'
    },
    {
        id: 'world_war_2',
        name: '第二次世界大戦',
        year: 1939, year_end: 1945,
        lat: 52.52, lon: 13.40,
        description: '枢軸国（独伊日など）と連合国（米英ソなど）の間で戦われた、人類史上最大の世界的戦争。およそ6千万人が犠牲となった。',
        type: 'war'
    },
    {
        id: 'korean_war',
        name: '朝鮮戦争',
        year: 1950, year_end: 1953,
        lat: 38.00, lon: 127.00,
        description: '朝鮮半島の主権を巡る、大韓民国（南）と朝鮮民主主義人民共和国（北）の内戦。米ソ・中が介入し国際紛争化。現在も休戦状態。',
        type: 'war'
    },
    {
        id: 'vietnam_war',
        name: 'ベトナム戦争',
        year: 1955, year_end: 1975,
        lat: 14.05, lon: 108.27,
        description: '南北ベトナムの統一を巡る戦争。北をソ連・中国が、南をアメリカが支援し、冷戦の代理戦争となった。',
        type: 'war'
    },
    {
        id: 'iraq_war',
        name: 'イラク戦争',
        year: 2003, year_end: 2011,
        lat: 33.31, lon: 44.36,
        description: 'アメリカ合衆国やイギリスなどが、「大量破壊兵器の保持」を理由にイラクへ侵攻。フセイン政権が崩壊した。',
        type: 'war'
    },
    {
        id: 'russo_ukrainian_war',
        name: 'ロシア・ウクライナ戦争',
        year: 2014, year_end: 2026,
        lat: 50.45, lon: 30.52,
        description: 'ロシアによるクリミア併合から始まり、2022年の全面侵攻へと至った軍事衝突。現在も継続中。',
        type: 'war'
    }
];
