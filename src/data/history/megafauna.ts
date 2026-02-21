import { HumanEvent } from './types';

export const megafaunaEvents: HumanEvent[] = [
    {
        id: 'mf_mammoth',
        name: 'ケナガマンモス (Woolly Mammoth)',
        year: -400000,
        year_end: -1700,
        lat: 71.9833, // ウランゲリ島 (最後の生息地)
        lon: -179.5333,
        description: '寒冷適応した巨大な象。シベリアから北米にかけて広く分布したが、気候変動と人類の狩猟により数を減らし、約4000年前に北極海のウランゲリ島で完全に絶滅した。',
        type: 'megafauna',
        sourceUrl: 'https://ja.wikipedia.org/wiki/%E3%82%B1%E3%83%8A%E3%82%AC%E3%83%9E%E3%83%B3%E3%83%A2%E3%82%B9'
    },
    {
        id: 'mf_smilodon',
        name: 'スミロドン (サーベルタイガー)',
        year: -2500000,
        year_end: -10000,
        lat: 34.0628, // ラ・ブレア・タールピット (カリフォルニア)
        lon: -118.3550,
        description: '巨大な犬歯（牙）を持つネコ科の肉食獣。南北アメリカ大陸で繁栄し、マンモス等の大型草食獣を狩っていたが、氷河期終結と獲物の減少により絶滅した。',
        type: 'megafauna',
        sourceUrl: 'https://ja.wikipedia.org/wiki/%E3%82%B9%E3%83%9F%E3%83%AD%E3%83%89%E3%83%B3'
    },
    {
        id: 'mf_megatherium',
        name: 'メガテリウム (巨大ナマケモノ)',
        year: -400000,
        year_end: -8000,
        lat: -34.6037, // アルゼンチン・パンパ
        lon: -58.3816,
        description: '体長約6m、体重約4トンにもなる地上性の巨大なナマケモノ。南米のパンパ地域に生息し、後脚で立ち上がって高い木の葉を食べていた。人類の南米到達後に絶滅。',
        type: 'megafauna',
        sourceUrl: 'https://ja.wikipedia.org/wiki/%E3%83%A1%E3%82%AC%E3%83%86%E3%83%AA%E3%82%A6%E3%83%A0'
    },
    {
        id: 'mf_diprotodon',
        name: 'ディプロトドン',
        year: -1600000,
        year_end: -46000,
        lat: -28.0167, // オーストラリア
        lon: 137.4000, // カラボンナ湖周辺
        description: 'オーストラリア大陸に生息していた、史上最大の有袋類（サイほどの大きさ）。約5万年前に人類がオーストラリアに到達した数千年後に絶滅した。',
        type: 'megafauna',
        sourceUrl: 'https://ja.wikipedia.org/wiki/%E3%83%87%E3%82%A3%E3%83%97%E3%83%AD%E3%83%88%E3%83%89%E3%83%B3'
    },
    {
        id: 'mf_glyptodon',
        name: 'グリプトドン',
        year: -2500000,
        year_end: -10000,
        lat: -23.5505, // ブラジル・南米
        lon: -46.6333,
        description: 'アルマジロの近縁で、自動車ほどの巨大な甲羅を持つ哺乳類。南米で繁栄したが、人類による狩猟（甲羅をシェルターとして利用した痕跡あり）や環境変化により絶滅。',
        type: 'megafauna',
        sourceUrl: 'https://ja.wikipedia.org/wiki/%E3%82%B0%E3%83%AA%E3%83%97%E3%83%88%E3%83%89%E3%83%B3'
    },
    {
        id: 'mf_moa',
        name: 'ジャイアント・モア',
        year: -2500000,
        year_end: 1440,
        lat: -43.9802, // ニュージーランド・南島
        lon: 170.4357,
        description: 'ニュージーランド固有の、飛べない巨大な鳥類。体高は最大で3.6mを超えた。13世紀にマオリ族が島にやってきた後、集中的に狩猟され短期間で絶滅した。',
        type: 'megafauna',
        sourceUrl: 'https://ja.wikipedia.org/wiki/%E3%83%A2%E3%82%A2'
    },
    {
        id: 'mf_dodo',
        name: 'ドードー',
        year: -2500000,
        year_end: 1681,
        lat: -20.2802, // モーリシャス
        lon: 57.5522,
        description: 'モーリシャス島に生息していた飛べない鳥。天敵がいなかったため人間を恐れず、大航海時代に上陸した欧州人による乱獲と、持ち込まれた外来種によって絶滅。',
        type: 'megafauna',
        sourceUrl: 'https://ja.wikipedia.org/wiki/%E3%83%89%E3%83%BC%E3%83%89%E3%83%BC'
    }
];
