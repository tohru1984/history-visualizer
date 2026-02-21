import { HumanEvent } from './types';

export const evolutionEvents: HumanEvent[] = [
    {
        id: 'nakalipithecus',
        name: 'ナカリピテクス (現代のアフリカ類人猿と人の共通祖先候補)',
        year: -9800000, year_end: -9500000,
        lat: 1.1, lon: 36.6,
        description: 'ケニア。ゴリラ、チンパンジー、人類の共通祖先の系統に近いとされる初期の類人猿。',
        type: 'evolution'
    },
    {
        id: 'chororapithecus',
        name: 'チョロラピテクス',
        year: -8000000, year_end: -7500000,
        lat: 9.3, lon: 40.2,
        description: 'エチオピア。ゴリラ系統へ分岐した最古の類の可能性があり、大きな歯を持つ。',
        type: 'evolution'
    },
    {
        id: 'sahelanthropus',
        name: 'サヘラントロプス (最古の人類候補)',
        year: -7000000, year_end: -6000000,
        lat: 16.3, lon: 18.0,
        description: 'チャド。トゥーマイ猿人。類人猿と人類の分岐点に近い最古の候補。',
        type: 'evolution'
    },
    {
        id: 'orrorin',
        name: 'オロリン',
        year: -6000000, year_end: -5000000,
        lat: 0.6, lon: 35.9,
        description: 'ケニア。大腿骨の特徴から、初期の直立二足歩行をしていた可能性が高い。',
        type: 'evolution'
    },
    {
        id: 'ardipithecus_kadabba',
        name: 'アルディピテクス・カダバ',
        year: -5600000, year_end: -5000000,
        lat: 11.5, lon: 40.5,
        description: 'エチオピア。森林環境で二足歩行を始めた最初期の人類のひとつ。',
        type: 'evolution'
    },
    {
        id: 'ardipithecus_ramidus',
        name: 'アルディピテクス・ラミダス',
        year: -4400000, year_end: -4000000,
        lat: 11.1, lon: 40.2,
        description: 'エチオピア。全身骨格「アルディ」。樹上生活と二足歩行の両立。',
        type: 'evolution'
    },
    {
        id: 'australopithecus_anamensis',
        name: 'アウストラロピテクス・アナメンシス',
        year: -4200000, year_end: -3900000,
        lat: 3.0, lon: 36.0,
        description: 'ケニア。アファール猿人の直接の祖先と考えられる初期の猿人。',
        type: 'evolution'
    },
    {
        id: 'kenyanthropus',
        name: 'ケニアントロプス・プラティオプス',
        year: -3500000, year_end: -3200000,
        lat: 3.9, lon: 35.9,
        description: 'ケニア。平たい顔を持つ、当時のアウストラロピテクスとは異なる系統。',
        type: 'evolution'
    },
    {
        id: 'laetoli_footprints',
        name: 'ラエトリの足跡',
        year: -3600000, year_end: -3000000,
        lat: -2.9, lon: 35.2,
        description: 'タンザニア。火山灰に残された3人分の足跡。二足歩行の決定的な証拠。',
        type: 'evolution'
    },
    {
        id: 'lomekwi_tools',
        name: 'ロメクウィ式石器 (最古の道具)',
        year: -3300000, year_end: -2500000,
        lat: 3.9, lon: 35.9,
        description: 'ケニア。ホモ属出現以前、猿人がすでに石器を使っていた証拠。',
        type: 'evolution'
    },
    {
        id: 'lucy',
        name: 'アウストラロピテクス (ルーシー)',
        year: -3200000, year_end: -2800000,
        lat: 11.1, lon: 40.5,
        description: 'エチオピア。40%の骨格が残る有名な標本。二足歩行の確立を示す。',
        type: 'evolution'
    },
    {
        id: 'australopithecus_africanus',
        name: 'アウストラロピテクス・アフリカヌス',
        year: -2500000, year_end: -2000000,
        lat: -24.7, lon: 27.5,
        description: '南アフリカ。「タウング坊や」。アフリカ南部で進化した猿人。',
        type: 'evolution'
    },
    {
        id: 'homo_habilis',
        name: 'ホモ・ハビリス (器用な人)',
        year: -2400000, year_end: -1400000,
        lat: -3.0, lon: 35.0,
        description: 'タンザニア。石器製作を本格化させ、脳が大型化し始めた初期ホモ属。',
        type: 'evolution'
    },
    {
        id: 'homo_rudolfensis',
        name: 'ホモ・ルドルフエンシス',
        year: -2400000, year_end: -1800000,
        lat: 4.0, lon: 36.0,
        description: 'ケニア。ハビリスと同時期に存在した、より顔の平らな別系統。',
        type: 'evolution'
    },
    {
        id: 'sediba',
        name: 'アウストラロピテクス・セディバ',
        year: -1980000, year_end: -1800000,
        lat: -25.9, lon: 27.8,
        description: '南アフリカ。猿人的な特徴とホモ属的な特徴が混在する重要な化石。',
        type: 'evolution'
    },
    {
        id: 'homo_erectus_origin',
        name: 'ホモ・エレクトス誕生 (ターカナ・ボーイ)',
        year: -1900000, year_end: -140000,
        lat: 3.5, lon: 36.2,
        description: 'ケニア。脚が長く、現代的な体型へと進化した。出アフリカの主役。',
        type: 'evolution'
    },
    {
        id: 'dmanisi',
        name: 'ドマニシ人 (最初の出アフリカ)',
        year: -1850000, year_end: -1000000,
        lat: 41.3, lon: 44.2,
        description: 'ジョージア。アフリカ以外で発見された最古の人類集団。',
        type: 'migration'
    },
    {
        id: 'acheulean_handaxe',
        name: 'アシュール型握槌',
        year: -1760000, year_end: -500000,
        lat: 4.0, lon: 36.0,
        description: '対称的な高級石器。人類の設計能力と知能の向上を示す。',
        type: 'evolution'
    },
    {
        id: 'java_man',
        name: 'ジャワ原人',
        year: -1500000, year_end: -500000,
        lat: -7.4, lon: 110.8,
        description: 'インドネシア。遥か東南アジアまで到達したホモ・エレクトス。',
        type: 'migration'
    },
    {
        id: 'fire_wonderwerk',
        name: '火のコントロール',
        year: -1000000, year_end: -300000,
        lat: -27.6, lon: 23.4,
        description: '南アフリカ。加熱調理により消化効率が上がり、脳がさらに発達した。',
        type: 'evolution'
    },
    {
        id: 'gran_dolina',
        name: 'ホモ・アンテセッサー',
        year: -800000, year_end: -500000,
        lat: 42.3, lon: -3.5,
        description: 'スペイン。西欧へ進出した最初期の人類種のひとつ。',
        type: 'migration'
    },
    {
        id: 'peking_man',
        name: '北京原人',
        year: -700000, year_end: -300000,
        lat: 39.7, lon: 115.9,
        description: '中国。極東での長期的な居住と適応を示す代表格。',
        type: 'migration'
    },
    {
        id: 'heidelbergensis',
        name: 'ホモ・ハイデルベルゲンシス',
        year: -600000, year_end: -200000,
        lat: 49.3, lon: 8.8,
        description: 'ドイツ。現生人類とネアンデルタール人の共通祖先と考えられる。',
        type: 'evolution'
    },
    {
        id: 'boxgrove',
        name: 'ボックスグローブの人骨',
        year: -500000, year_end: -400000,
        lat: 50.8, lon: -0.6,
        description: 'イギリス。極北に近い厳しい環境への最初期の進出。',
        type: 'migration'
    },
    {
        id: 'atapuerca_sima',
        name: 'シマ・デ・ロス・ウエス (死者の谷)',
        year: -430000, year_end: -300000,
        lat: 42.3, lon: -3.5,
        description: 'スペイン。初期の葬礼儀礼があった可能性を示唆する多数の骨。',
        type: 'evolution'
    },
    {
        id: 'naledi',
        name: 'ホモ・ナレディ',
        year: -335000, year_end: -236000,
        lat: -25.9, lon: 27.8,
        description: '南アフリカ。脳は小さいが、意図的な埋葬の形跡があり研究者を驚かせた。',
        type: 'evolution'
    },
    {
        id: 'schoningen_spears',
        name: 'シェーニンの投げ槍',
        year: -300000, year_end: -200000,
        lat: 52.2, lon: 10.9,
        description: 'ドイツ。最古の木製狩猟道具（投げ槍）。計画的な狩りが行われていた。',
        type: 'evolution'
    }
];
