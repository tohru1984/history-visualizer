import { HumanEvent } from './types';

export const greatJourneyEvents: HumanEvent[] = [
    {
        id: 'toba_catastrophe',
        name: 'トバ火山の大噴火',
        year: -74000, year_end: -70000,
        lat: 2.6, lon: 98.8,
        description: 'スマトラ。気温激減。人類が数千人まで減少し、絶滅の危機に瀕した。近年では、この噴火が人類の遺伝的多様性に決定的なボトルネックをもたらしたとする説が有力です。',
        type: 'evolution',
        sourceUrl: 'https://ja.wikipedia.org/wiki/%E3%83%88%E3%83%90%E3%83%BB%E3%82%AB%E3%82%BF%E3%82%B9%E3%83%88%E3%83%AD%E3%83%95%E3%83%BB%E3%83%AC%E3%83%92%E3%83%BC%E3%83%AB'
    },
    {
        id: 'main_out_of_africa',
        name: '本格的な出アフリカ(第2波)',
        year: -70000, year_end: -50000,
        lat: 12.6, lon: 43.4,
        description: '紅海の南端「嘆きの門」を越え、現生人類が全世界へ広がり始める。少人数の集団移動により、アフリカ外の人類の遺伝的多様性が限定される「創始者効果」が生じました。',
        type: 'migration',
        sourceUrl: 'https://ja.wikipedia.org/wiki/%E3%82%A2%E3%83%95%E3%83%AA%E3%82%AB%E5%8D%98%E4%B8%80%E8%B5%B7%E6%BA%90%E8%AA%AC'
    },
    {
        id: 'luzonensis',
        name: 'ホモ・ルゾネンシス',
        year: -67000, year_end: -50000,
        lat: 17.6, lon: 121.8,
        description: 'フィリピン。東南アジアの島々で独自に進化した人類種。',
        type: 'evolution'
    },
    {
        id: 'sahul_entry',
        name: 'オーストラリア到達 (サフル大陸)',
        year: -65000, year_end: -45000,
        lat: -12.5, lon: 132.8,
        description: 'マジェドベベ。高度な航海術を駆使し、海を渡って未知の大陸に到達した。',
        type: 'migration'
    },
    {
        id: 'tam_pa_ling',
        name: 'タム・パー・リン (ラオス進出)',
        year: -63000, year_end: -50000,
        lat: 20.2, lon: 103.5,
        description: '東南アジアの内陸ジャングル地帯への順調な拡大を示す。',
        type: 'migration'
    },
    {
        id: 'manot_cave',
        name: 'マノット洞窟',
        year: -55000, year_end: -45000,
        lat: 33.0, lon: 35.2,
        description: 'イスラエル。欧州へ向かうサピエンスと、他の人類種との混流期。',
        type: 'migration'
    },
    {
        id: 'denisova_hybrid',
        name: 'デニソワ人との出会い',
        year: -50000, year_end: -40000,
        lat: 51.4, lon: 84.7,
        description: 'シベリア〜アジア。現生人類が他種の人類と出会い、遺伝子が混じり合う。',
        type: 'evolution'
    },
    {
        id: 'hobbits_flores',
        name: 'フローレス原人 (ホビット)',
        year: -50000, year_end: -40000,
        lat: -8.5, lon: 120.4,
        description: 'インドネシア。島で小型化した人類。サピエンスと同時期まで棲息。',
        type: 'evolution'
    },
    {
        id: 'ust_ishim',
        name: 'ウストア・イシムマン',
        year: -45000, year_end: -40000,
        lat: 57.0, lon: 71.0,
        description: 'シベリア。北極圏に近い寒冷地へサピエンスが到達した証拠。',
        type: 'migration'
    },
    {
        id: 'bacho_kiro',
        name: 'バチョ・キロ (欧州拡大)',
        year: -45000, year_end: -35000,
        lat: 42.9, lon: 25.4,
        description: 'ブルガリア。欧州における最古期のサピエンス定住。',
        type: 'migration'
    },
    {
        id: 'fumane',
        name: 'フマーネ洞窟',
        year: -45000, year_end: -35000,
        lat: 45.5, lon: 10.9,
        description: 'イタリア。オーニョ人(初期サピエンス)による欧州南部の開拓。',
        type: 'migration'
    },
    {
        id: 'sulawesi_art',
        name: 'スラウェシの洞窟壁画',
        year: -44000, year_end: -30000,
        lat: -5.0, lon: 119.7,
        description: 'インドネシア。世界最古級の具象的な壁画(イノシシなど)。',
        type: 'civilization'
    },
    {
        id: 'el_castillo',
        name: 'エル・カスティージョの壁画',
        year: -40000, year_end: -30000,
        lat: 43.3, lon: -4.0,
        description: 'スペイン。最古級のハンドステンシル（手形）が残る。',
        type: 'civilization'
    },
    {
        id: 'neanderthal_extinction',
        name: 'ネアンデルタール人の絶滅',
        year: -40000, year_end: -39000,
        lat: 36.1, lon: -5.3,
        description: '欧州全域。現生人類との競争や環境変化により姿を消したとされる。',
        type: 'evolution'
    },
    {
        id: 'japan_first_step',
        name: '日本列島への最初の到達',
        year: -38000, year_end: -30000,
        lat: 35.0, lon: 139.0,
        description: '石器から判明。世界最古級の黒曜石採取と海上運搬の広がり。',
        type: 'migration'
    },
    {
        id: 'altamira',
        name: 'アルタミラ洞窟壁画',
        year: -36000, year_end: -30000,
        lat: 43.4, lon: -4.1,
        description: 'スペイン。躍動感あふれるバイソンの壁画。高度な色彩表現。',
        type: 'civilization'
    },
    {
        id: 'venus_hohle_fels',
        name: 'ホーレ・フェルスのヴィーナス',
        year: -35000, year_end: -30000,
        lat: 48.4, lon: 9.8,
        description: 'ドイツ。最古の裸婦像（彫刻）。象徴性や多産の願いを示す。',
        type: 'civilization'
    },
    {
        id: 'sungir',
        name: 'スンギールの豪華な埋葬',
        year: -34000, year_end: -30000,
        lat: 56.2, lon: 40.5,
        description: 'ロシア。数千個のビーズで飾られた衣類。高い階層意識の芽生えか。',
        type: 'civilization'
    },
    {
        id: 'malta_buret',
        name: 'マルタ・ブレット居住跡',
        year: -24000, year_end: -20000,
        lat: 52.8, lon: 103.1,
        description: 'シベリア中部。極寒の地におけるテント状住居。ネイティブ・アメリカンの祖先層。',
        type: 'migration'
    },
    {
        id: 'bluefish_caves',
        name: 'ブルーフィッシュ洞窟',
        year: -24000, year_end: -20000,
        lat: 67.1, lon: -140.6,
        description: 'カナダ(ユーコン)。北米大陸への最初期の進入の痕跡。',
        type: 'migration'
    },
    {
        id: 'white_sands',
        name: 'ホワイトサンズの足跡',
        year: -23000, year_end: -21000,
        lat: 32.8, lon: -106.3,
        description: '米国ニューメキシコ。氷河期まっただ中の北米南部に人類がいた証拠。',
        type: 'migration'
    },
    {
        id: 'last_glacial_maximum',
        name: '最終氷期最盛期 (LGM)',
        year: -21000, year_end: -18000,
        lat: 50.0, lon: 10.0,
        description: '氷河期が最も厳しくなった時期。欧州や北アジアの人口が激減し、温暖な避難所に孤立しました。',
        type: 'evolution',
        sourceUrl: 'https://ja.wikipedia.org/wiki/%E6%9C%80%E7%B5%82%E6%B0%B7%E6%9C%9F'
    },
    {
        id: 'lascaux_cave',
        name: 'ラスコー洞窟壁画',
        year: -17000, year_end: -15000,
        lat: 45.1, lon: 1.2,
        description: 'フランス。氷河期芸術の最高峰。神話や物語性を予感させる構図。',
        type: 'civilization'
    },
    {
        id: 'jomon_pottery',
        name: '縄文土器の登場',
        year: -14500, year_end: -1000,
        lat: 40.8, lon: 140.6,
        description: '日本。世界最古級の土器の使用。定住生活への第一歩。',
        type: 'civilization'
    },
    {
        id: 'monte_verde',
        name: 'モンテ・ベルデ遺跡',
        year: -14500, year_end: -14000,
        lat: -41.5, lon: -73.2,
        description: 'チリ南部。南米の南端まで極めて短期間で拡散したことを示す。',
        type: 'migration'
    },
    {
        id: 'paisley_caves',
        name: 'ペズリー洞窟',
        year: -14300, year_end: -14000,
        lat: 42.7, lon: -120.6,
        description: '米国オレゴン。内陸部へのサピエンス拡大を証明。',
        type: 'migration'
    }
];
