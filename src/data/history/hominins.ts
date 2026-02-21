import { HumanEvent } from './types';

// MapLibreのcircle表現で「ぼんやりとした勢力圏」を示すための座標データ
// lat, lonは彼らの主要な化石発掘拠点をベースにしています。
export const homininEvents: HumanEvent[] = [
    {
        id: 'hm_neanderthal',
        name: 'ネアンデルタール人 (Homo neanderthalensis)',
        year: -400000,
        year_end: -40000,
        lat: 51.2277, // ネアンデル谷 (ドイツ)
        lon: 6.9416,
        description: 'ヨーロッパから中東・中央アジアにかけて広く分布した旧人類。寒冷気候に極めて適応し、大きな脳と屈強な体を持っていた。約4万年前に現生人類（ホモ・サピエンス）との交雑の末に絶滅、または吸収された。',
        type: 'hominin',
        sourceUrl: 'https://ja.wikipedia.org/wiki/%E3%83%8D%E3%82%A2%E3%83%B3%E3%83%87%E3%83%AB%E3%82%BF%E3%83%BC%E3%83%AB%E4%BA%BA'
    },
    {
        id: 'hm_denisovan',
        name: 'デニソワ人 (Denisovans)',
        year: -400000,
        year_end: -30000,
        lat: 51.3970, // デニソワ洞窟 (ロシア・アルタイ山脈)
        lon: 84.6760,
        description: 'おもにアジア全域に分布していたと考えられる旧人類。ネアンデルタール人の近縁種。チベット高原などの高地適応遺伝子などを現生人類の一部に残した。約3万年前頃に姿を消したとされる。',
        type: 'hominin',
        sourceUrl: 'https://ja.wikipedia.org/wiki/%E3%83%87%E3%83%8B%E3%82%BD%E3%83%AF%E4%BA%BA'
    },
    {
        id: 'hm_erectus_asia',
        name: 'ホモ・エレクトス (アジア生息域)',
        year: -1800000,
        year_end: -100000,
        lat: 39.7289, // 周口店 (北京原人の発見地)
        lon: 115.9110,
        description: 'アフリカを出てユーラシア大陸各地に拡散した原人（ジャワ原人、北京原人など）。長期にわたって繁栄したが、最終的に現生人類などに置き換わり絶滅。',
        type: 'hominin',
        sourceUrl: 'https://ja.wikipedia.org/wiki/%E3%83%9B%E3%83%A2%E3%83%BB%E3%82%A8%E3%83%AC%E3%82%AF%E3%83%88%E3%82%B9'
    },
    {
        id: 'hm_floresiensis',
        name: 'ホモ・フローレシエンシス (ホビット)',
        year: -190000,
        year_end: -50000, // 近年の分析で5万年前と推測されている
        lat: -8.5333, // フローレス島 (インドネシア)
        lon: 120.4500,
        description: 'インドネシアのフローレス島で孤立し、島嶼化（とうしょか）によって身長約1mまで小型化した矮小な近縁人類。通称「ホビット」。現生人類が島に到達したことと絶滅時期が重なる。',
        type: 'hominin',
        sourceUrl: 'https://ja.wikipedia.org/wiki/%E3%83%9B%E3%83%A2%E3%83%BB%E3%83%95%E3%83%AD%E3%83%BC%E3%83%AC%E3%82%B7%E3%82%A8%E3%83%B3%E3%82%B7%E3%82%B9'
    },
    {
        id: 'hm_naledi',
        name: 'ホモ・ナレディ',
        year: -335000,
        year_end: -236000,
        lat: -25.9222, // ライジング・スター洞窟 (南アフリカ)
        lon: 27.7667,
        description: '脳容積は小さいにもかかわらず、死者を埋葬し火を使っていた可能性が示唆されている謎めいた人類種。現生人類の直接の祖先と同時期にアフリカに共存していた。',
        type: 'hominin',
        sourceUrl: 'https://ja.wikipedia.org/wiki/%E3%83%9B%E3%83%A2%E3%83%BB%E3%83%8A%E3%83%AC%E3%83%87%E3%82%A3'
    }
];
