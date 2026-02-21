import { HumanEvent } from './types';

export const modernEvents: HumanEvent[] = [
    {
        id: 'principia_newton',
        name: 'ニュートンの力学 (万有引力)',
        year: 1687.5, year_end: 1750,
        lat: 52.2, lon: 0.1,
        description: 'イギリス。近代科学のバイブル。宇宙の法則を数式で解き明かした。',
        type: 'modern'
    },
    {
        id: 'industrial_revolution_watt',
        name: '産業革命 (ワットの蒸気機関)',
        year: 1769.1, year_end: 1840,
        lat: 55.8, lon: -4.3,
        description: 'イギリス。人力や畜力から機械動力へ。人類史最大の生産性向上。',
        type: 'modern',
        importance: 5
    },
    {
        id: 'periodic_table_mendeleev',
        name: '周期表の発明 (メンデレーエフ)',
        year: 1869.2, year_end: 1900,
        lat: 59.9, lon: 30.3,
        description: 'ロシア。物質の性質を体系化。現代化学の羅針盤。',
        type: 'modern'
    },
    {
        id: 'radio_marconi',
        name: '無線通信の成功 (マルコーニ)',
        year: 1895.9, year_end: 1920,
        lat: 44.4, lon: 11.3,
        description: 'イタリア。電波による通信。物理的な線を越えた情報伝達。',
        type: 'modern'
    },
    {
        id: 'television_baird',
        name: 'テレビジョンの公開 (ベアード)',
        year: 1926.1, year_end: 1940,
        lat: 51.5, lon: -0.1,
        description: 'イギリス。映像の遠距離転送。大衆メディア時代の幕開け。',
        type: 'modern'
    },
    {
        id: 'turing_machine_concept',
        name: '計算可能数 (チューリング)',
        year: 1936.4, year_end: 1950,
        lat: 52.2, lon: 0.1,
        description: 'イギリス。コンピュータの論理的基礎。ソフトウェア概念の誕生。',
        type: 'modern'
    },
    {
        id: 'vaccination_jenner',
        name: '種痘の開発 (ジェンナー)',
        year: 1796, year_end: 1820,
        lat: 51.7, lon: -2.5,
        description: 'イギリス。天然痘の克服に向けた最初の一歩。近代医療の幕開け。',
        type: 'modern'
    },
    {
        id: 'telegraph_morse',
        name: '電信機の発明 (モールス)',
        year: 1837, year_end: 1860,
        lat: 40.7, lon: -74.0,
        description: '米国。情報が「物理的移動」から「電気的送信」へ。世界が縮小し始める。',
        type: 'modern'
    },
    {
        id: 'origin_of_species_darwin',
        name: '『種の起源』(ダーウィン)',
        year: 1859.9, year_end: 1880,
        lat: 51.3, lon: 0.1,
        description: 'イギリス。進化論の提唱。人間自身の出自に関する認識を覆した。',
        type: 'modern'
    },
    {
        id: 'meiji_restoration',
        name: '明治維新 (改元)',
        year: 1868.811, year_end: 1912,
        lat: 35.7, lon: 139.7,
        description: '1868年10月23日（明治元年9月8日）。一世一元の制が定められ、日本が近代国家としての歩みを決定づけた改元。',
        type: 'modern'
    },
    {
        id: 'jp_first_railway',
        name: '日本初の鉄道開業',
        year: 1872.75, year_end: 1880,
        lat: 35.6, lon: 139.7,
        description: '新橋〜横浜間が開通。日本の近代化・蒸気文明の象徴。',
        type: 'modern'
    },
    {
        id: 'meiji_constitution',
        name: '大日本帝国憲法発布',
        year: 1889.1, year_end: 1900,
        lat: 35.7, lon: 139.7,
        description: 'アジア初の近代的憲法。立憲君主制国家としての体裁を整えた。',
        type: 'modern'
    },
    {
        id: 'russo_japanese_war',
        name: '日露戦争',
        year: 1904.1, year_end: 1905.7,
        lat: 38.8, lon: 121.2,
        description: '東アジアの小国が巨大帝国ロシアに勝利。世界の勢力図を塗り替えた。',
        type: 'modern'
    },
    {
        id: 'taisho_democracy',
        name: '大正デモクラシーの勃興',
        year: 1912.6, year_end: 1926,
        lat: 35.7, lon: 139.7,
        description: '政党政治、普通選挙運動など、自由で民主的な思潮が広がった時代。',
        type: 'modern'
    },
    {
        id: 'great_kanto_earthquake',
        name: '関東大震災',
        year: 1923.67, year_end: 1930,
        lat: 35.3, lon: 139.3,
        description: '1923年9月1日。首都圏を直撃した未曾有の災害。都市改造の契機に。',
        type: 'modern'
    },
    {
        id: 'telephone_bell',
        name: '電話の発明 (ベル)',
        year: 1876.2, year_end: 1890,
        lat: 42.4, lon: -71.1,
        description: '米国。音声によるリアルタイム送信。人類のコミュニケーションの距離をゼロに。',
        type: 'modern'
    },
    {
        id: 'lightbulb_edison',
        name: '白熱電球の商用化 (エジソン)',
        year: 1879.8, year_end: 1900,
        lat: 40.5, lon: -74.3,
        description: '米国。電化社会の始まり。夜を克服し、24時間活動が可能になった。',
        type: 'modern'
    },
    {
        id: 'first_flight_wright',
        name: 'ライト兄弟 初飛行',
        year: 1903.95, year_end: 1910,
        lat: 36.0, lon: -75.7,
        description: '米国。動力飛行機の誕生。3次元の移動を可能にし、地球規模の移動革命。',
        type: 'modern'
    },
    {
        id: 'einstein_relativity',
        name: '相対性理論 (アインシュタイン)',
        year: 1905.5, year_end: 1920,
        lat: 46.9, lon: 7.4,
        description: 'スイス。時間と空間の概念を再構築。原子力や現代物理学の基礎。',
        type: 'modern'
    },
    {
        id: 'world_war_one',
        name: '第一次世界大戦',
        year: 1914.5, year_end: 1918.8,
        lat: 50.8, lon: 4.4,
        description: '欧州。総力戦の時代。航空機や毒ガス、戦車などの近代兵器が登場。',
        type: 'modern',
        importance: 5
    },
    {
        id: 'penicillin_fleming',
        name: 'ペニシリンの発見 (フレミング)',
        year: 1928.7, year_end: 1945,
        lat: 51.5, lon: -0.2,
        description: 'イギリス。抗生物質の誕生。感染症による死者を劇的に減らした。',
        type: 'modern'
    },
    {
        id: 'great_depression',
        name: '世界恐慌',
        year: 1929.8, year_end: 1939,
        lat: 40.7, lon: -74.0,
        description: '米国発。世界経済の破綻。後の第二次大戦の遠因となった。',
        type: 'modern'
    },
    {
        id: 'world_war_two_start',
        name: '第二次世界大戦 開戦',
        year: 1939.67, year_end: 1945.6,
        lat: 52.2, lon: 21.0,
        description: 'ポーランド侵攻。地球規模の未曾有の破滅。',
        type: 'modern',
        importance: 5
    },
    {
        id: 'hiroshima_nagasaki',
        name: '原子爆弾投下',
        year: 1945.6, year_end: 1950,
        lat: 34.4, lon: 132.5,
        description: '日本。人類が同胞もろとも自らを滅ぼす力を手に入れた瞬間。',
        type: 'modern'
    },
    {
        id: 'transistor_invention',
        name: 'トランジスタの発明',
        year: 1947.9, year_end: 1960,
        lat: 40.7, lon: -74.4,
        description: '米国ベル研究所。電子工学の心臓部。現代IT社会の真の出発点。',
        type: 'modern',
        importance: 5
    },
    {
        id: 'dna_structure_watson_crick',
        name: 'DNAの二重らせん構造',
        year: 1953.3, year_end: 1970,
        lat: 52.2, lon: 0.1,
        description: 'イギリス。生命の設計図の解明。バイオテクノロジーの扉を開く。',
        type: 'modern'
    },
    {
        id: 'sputnik_space_age',
        name: 'スプートニク1号 (宇宙時代)',
        year: 1957.77, year_end: 1965,
        lat: 45.9, lon: 63.3,
        description: 'ソ連。人類初の人工衛星。宇宙開発競争の幕開け。',
        type: 'modern'
    },
    {
        id: 'apollo_11_moon_landing',
        name: 'アポロ11号 月面着陸',
        year: 1969.55, year_end: 1975,
        lat: 28.5, lon: -80.6,
        description: '1969年7月20日。「一人の人間にとっては小さな一歩だが、人類にとっては偉大な飛躍である」。',
        type: 'modern'
    },
    {
        id: 'tokyo_olympics_1964',
        name: '東京オリンピック (1964)',
        year: 1964.8, year_end: 1965,
        lat: 35.6, lon: 139.7,
        description: '戦後復興の完了を世界に宣言。新幹線開業とともに高度経済成長の象徴。',
        type: 'modern'
    },
    {
        id: 'osaka_expo_1970',
        name: '日本万国博覧会 (大阪万博)',
        year: 1970.2, year_end: 1970.7,
        lat: 34.8, lon: 135.5,
        description: '「人類の進歩と調和」。未来への憧憬を詰め込んだ世紀の祭典。',
        type: 'modern'
    },
    {
        id: 'pc_revolution_apple',
        name: 'パーソナルコンピュータ革命',
        year: 1977.3, year_end: 1990,
        lat: 37.3, lon: -122.0,
        description: 'アップルII。コンピュータが個人のツールとなり、生活を一変させた。',
        type: 'modern'
    },
    {
        id: 'berlin_wall_fall',
        name: 'ベルリンの壁崩壊',
        year: 1989.86, year_end: 1991,
        lat: 52.5, lon: 13.4,
        description: '1989年11月9日。冷戦の終結と世界の再統合。',
        type: 'modern'
    },
    {
        id: 'www_invention_cern',
        name: 'World Wide Web (WWW) の公開',
        year: 1991.6, year_end: 2000,
        lat: 46.2, lon: 6.0,
        description: 'CERN。情報の民主化。世界がウェブという巨大な神経系で繋がる。',
        type: 'modern',
        importance: 5
    },
    {
        id: 'smartphone_iphone',
        name: 'iPhone発売 (モバイル革命)',
        year: 2007.48, year_end: 2015,
        lat: 37.3, lon: -122.0,
        description: '2007年6月29日。手のひらの中に常時接続のインターネットがある世界の始まり。',
        type: 'modern',
        importance: 5
    },
    {
        id: 'great_east_japan_earthquake',
        name: '東日本大震災',
        year: 2011.2, year_end: 2015,
        lat: 38.3, lon: 142.4,
        description: '2011年3月11日。未曾有の震災と津波。日本の社会観・エネルギー観を激変させた。',
        type: 'modern'
    },
    {
        id: 'gpt3_release',
        name: 'GPT-3 の登場',
        year: 2020.4, year_end: 2022,
        lat: 37.7, lon: -122.4,
        description: '2020年5月。OpenAIが発表。1750億個のパラメータを持ち、AIが自然な文章を書く能力が飛躍的に向上し、大規模言語モデル(LLM)時代の幕開けとなった。',
        type: 'modern'
    },
    {
        id: 'stable_diffusion_release',
        name: '画像生成AIの爆発 (Stable Diffusion)',
        year: 2022.65, year_end: 2023,
        lat: 51.5, lon: -0.1,
        description: '2022年8月。テキストから高品質な画像を生成するAIが一般公開。クリエイティブの世界に衝撃を与えた。',
        type: 'modern'
    },
    {
        id: 'chatgpt_shock',
        name: 'ChatGPT 公開 (AIの民主化)',
        year: 2022.91, year_end: 2024,
        lat: 37.7, lon: -122.4,
        description: '2022年11月30日。対話型AIの衝撃。わずか5日で100万ユーザーに到達し、人類とAIの関係性を根本から変えた歴史的転換点。',
        type: 'modern',
        importance: 5
    },
    {
        id: 'gpt4_release',
        name: 'GPT-4 の衝撃',
        year: 2023.2, year_end: 2024,
        lat: 37.7, lon: -122.4,
        description: '2023年3月。司法試験の上位10%に入る知性を発揮。マルチモーダル化が進み、AIの実用性が極限まで高まった。',
        type: 'modern'
    },
    {
        id: 'claude_release',
        name: 'Claude 誕生 (Anthropic)',
        year: 2023.25, year_end: 2025,
        lat: 37.7, lon: -122.4,
        description: '2023年3月〜。より安全で倫理的なAIを目指すConstitutional AIの思想が注目を集める。長大な文脈を理解する能力でリード。',
        type: 'modern'
    },
    {
        id: 'gemini_release',
        name: 'Gemini 発表 (Google DeepMind)',
        year: 2023.95, year_end: 2026,
        lat: 37.4, lon: -122.1,
        description: '2023年12月〜2024年2月。ネイティブ・マルチモーダルAI。超長大な文脈（100万トークン以上）の処理を実現し、あらゆる情報の統合を加速。',
        type: 'modern'
    },
    {
        id: 'sora_announcement',
        name: '動画生成AI Sora の衝撃',
        year: 2024.12, year_end: 2026,
        lat: 37.7, lon: -122.4,
        description: '2024年2月。現実と見紛う高品質な1分間の動画を生成。汎用世界シミュレータとしてのAIの可能性を誇示した。',
        type: 'modern'
    },
    {
        id: 'future_ai_singularity',
        name: 'AIシンギュラリティへの展望',
        name_ja: 'AIシンギュラリティへの展望',
        name_en: 'AI Singularity Horizon',
        year: 2026, year_end: 2100,
        lat: 37.5, lon: -122.1,
        description: 'AIが人類の全知能を統合し、科学・技術・社会の進化速度が非連続的に加速する。人類の定義が再考される時代。',
        description_en: 'AI surpasses the combined human intellect, triggering an exponential acceleration of science, technology, and society.',
        type: 'modern'
    },

    // ===== 近現代 日本史 詳細トピックス =====

    // -- 明治時代 (1868-1912) --
    {
        id: 'jp_sino_japanese_war',
        name: '日清戦争',
        name_ja: '日清戦争',
        name_en: 'First Sino-Japanese War',
        year: 1894.6, year_end: 1895.3,
        lat: 38.9, lon: 121.6,
        description: '日本が清朝中国に勝利。台湾・遼東半島を獲得し、東アジアの勢力図が変動。',
        description_en: 'Japan defeats Qing China, gaining Taiwan and reshaping the balance of power in East Asia.',
        type: 'modern',
        importance: 3
    },
    {
        id: 'jp_annexation_korea',
        name: '韓国併合',
        name_ja: '韓国併合',
        name_en: 'Annexation of Korea',
        year: 1910.65, year_end: 1945,
        lat: 37.6, lon: 127.0,
        description: '日本が大韓帝国を併合。東アジア近代史の転換点。',
        description_en: 'Japan annexes the Korean Empire, a turning point in East Asian modern history.',
        type: 'modern',
        importance: 3
    },

    // -- 大正時代 (1912-1926) --
    {
        id: 'jp_taisho_enthronement',
        name: '大正改元',
        name_ja: '大正改元',
        name_en: 'Taishō Era Begins',
        year: 1912.58, year_end: 1926.98,
        lat: 35.7, lon: 139.7,
        description: '1912年7月30日、明治天皇崩御に伴い大正に改元。',
        description_en: 'July 30, 1912: The Taishō era begins upon the death of Emperor Meiji.',
        type: 'modern',
        importance: 5
    },
    {
        id: 'jp_rice_riots',
        name: '米騒動',
        name_ja: '米騒動',
        name_en: 'Rice Riots',
        year: 1918.6, year_end: 1918.8,
        lat: 36.7, lon: 137.2,
        description: '米価高騰に端を発した全国的な暴動。政党政治への転換を加速。',
        description_en: 'Nationwide riots over soaring rice prices, accelerating the shift to party politics.',
        type: 'modern',
        importance: 2
    },
    {
        id: 'jp_universal_suffrage',
        name: '普通選挙法成立',
        name_ja: '普通選挙法成立',
        name_en: 'Universal Male Suffrage Act',
        year: 1925.3, year_end: 1928,
        lat: 35.7, lon: 139.7,
        description: '25歳以上の男子全員に選挙権。大正デモクラシーの到達点。',
        description_en: 'Voting rights extended to all males over 25, a landmark of Taishō democracy.',
        type: 'modern',
        importance: 3
    },

    // -- 昭和時代 (1926-1989) --
    {
        id: 'jp_showa_enthronement',
        name: '昭和改元',
        name_ja: '昭和改元',
        name_en: 'Shōwa Era Begins',
        year: 1926.98, year_end: 1989.02,
        lat: 35.7, lon: 139.7,
        description: '1926年12月25日、大正天皇崩御に伴い昭和に改元。激動の64年が始まる。',
        description_en: 'December 25, 1926: The Shōwa era begins — 64 years of upheaval and transformation.',
        type: 'modern',
        importance: 5
    },
    {
        id: 'jp_manchurian_incident',
        name: '満州事変',
        name_ja: '満州事変',
        name_en: 'Manchurian Incident',
        year: 1931.7, year_end: 1932.2,
        lat: 41.8, lon: 123.4,
        description: '関東軍の暴走。満州国建国へ。日本の国際的孤立が決定的に。',
        description_en: 'The Kwantung Army provokes an incident leading to the puppet state of Manchukuo and Japan\'s international isolation.',
        type: 'modern',
        importance: 3
    },
    {
        id: 'jp_226_incident',
        name: '二・二六事件',
        name_ja: '二・二六事件',
        name_en: 'February 26 Incident',
        year: 1936.15, year_end: 1936.2,
        lat: 35.7, lon: 139.7,
        description: '陸軍青年将校によるクーデター未遂。軍部の政治介入が決定的に。',
        description_en: 'A failed coup by young army officers cements the military\'s grip on Japanese politics.',
        type: 'modern',
        importance: 2
    },
    {
        id: 'jp_pacific_war_start',
        name: '太平洋戦争開戦 (真珠湾攻撃)',
        name_ja: '太平洋戦争開戦 (真珠湾攻撃)',
        name_en: 'Pacific War Begins (Pearl Harbor)',
        year: 1941.92, year_end: 1945.6,
        lat: 21.4, lon: -157.9,
        description: '1941年12月8日。日本が米英に宣戦布告。太平洋全域を巻き込む戦争が始まる。',
        description_en: 'December 8, 1941: Japan attacks Pearl Harbor, igniting the Pacific War.',
        type: 'modern',
        importance: 5
    },
    {
        id: 'jp_surrender',
        name: '終戦 (玉音放送)',
        name_ja: '終戦 (玉音放送)',
        name_en: 'Japan\'s Surrender (Gyokuon Broadcast)',
        year: 1945.62, year_end: 1952,
        lat: 35.7, lon: 139.7,
        description: '1945年8月15日。天皇による終戦の詔。310万人の日本人が犠牲となった戦争が終結。',
        description_en: 'August 15, 1945: Emperor Hirohito announces Japan\'s surrender. 3.1 million Japanese lives lost.',
        type: 'modern',
        importance: 5
    },
    {
        id: 'jp_new_constitution',
        name: '日本国憲法施行',
        name_ja: '日本国憲法施行',
        name_en: 'Constitution of Japan Takes Effect',
        year: 1947.33, year_end: 2026,
        lat: 35.7, lon: 139.7,
        description: '1947年5月3日。国民主権、基本的人権の尊重、戦争放棄（憲法第9条）を掲げた新憲法。',
        description_en: 'May 3, 1947: The new constitution establishes popular sovereignty, human rights, and the renunciation of war (Article 9).',
        type: 'modern',
        importance: 5
    },
    {
        id: 'jp_sf_peace_treaty',
        name: 'サンフランシスコ講和条約',
        name_ja: 'サンフランシスコ講和条約',
        name_en: 'San Francisco Peace Treaty',
        year: 1951.67, year_end: 1952.3,
        lat: 37.8, lon: -122.4,
        description: '日本の主権回復。占領の終了と国際社会への復帰。',
        description_en: 'Japan regains sovereignty. End of Allied occupation and return to the international community.',
        type: 'modern',
        importance: 3
    },
    {
        id: 'jp_high_growth',
        name: '高度経済成長期',
        name_ja: '高度経済成長期',
        name_en: 'Japanese Economic Miracle',
        year: 1955, year_end: 1973,
        lat: 35.7, lon: 139.7,
        description: '年間10%以上のGDP成長。「もはや戦後ではない」。世界第2位の経済大国へ。',
        description_en: 'Over 10% annual GDP growth. Japan rises to become the world\'s second-largest economy.',
        type: 'modern',
        importance: 5
    },
    {
        id: 'jp_shinkansen',
        name: '東海道新幹線開業',
        name_ja: '東海道新幹線開業',
        name_en: 'Tōkaidō Shinkansen Opens',
        year: 1964.75, year_end: 1970,
        lat: 35.2, lon: 136.9,
        description: '1964年10月1日。東京〜新大阪間を4時間で結ぶ。世界初の高速鉄道。',
        description_en: 'October 1, 1964: The world\'s first high-speed rail connects Tokyo and Osaka in 4 hours.',
        type: 'modern',
        importance: 5
    },
    {
        id: 'jp_oil_shock',
        name: '第一次オイルショック',
        name_ja: '第一次オイルショック',
        name_en: 'First Oil Crisis',
        year: 1973.8, year_end: 1975,
        lat: 35.7, lon: 139.7,
        description: '中東戦争に端を発する石油危機。高度経済成長の終焉。トイレットペーパー騒動。',
        description_en: 'The oil crisis ends Japan\'s high-growth era. Panic buying of toilet paper becomes iconic.',
        type: 'modern',
        importance: 3
    },
    {
        id: 'jp_bubble_economy',
        name: 'バブル経済',
        name_ja: 'バブル経済',
        name_en: 'Bubble Economy',
        year: 1986, year_end: 1991,
        lat: 35.7, lon: 139.7,
        description: '資産価格の異常な高騰。東京の皇居の土地価格でカリフォルニア州全体が買えると言われた時代。',
        description_en: 'Asset prices soar to absurd levels. The Imperial Palace grounds were said to be worth more than all of California.',
        type: 'modern',
        importance: 5
    },
    {
        id: 'jp_bubble_burst',
        name: 'バブル崩壊',
        name_ja: 'バブル崩壊',
        name_en: 'Bubble Burst / Lost Decade',
        year: 1991.1, year_end: 2000,
        lat: 35.7, lon: 139.7,
        description: '株価・地価の暴落。「失われた10年（→30年）」の始まり。',
        description_en: 'Stock and land prices collapse. The beginning of Japan\'s "Lost Decade" (which became 30 years).',
        type: 'modern',
        importance: 5
    },

    // -- 平成時代 (1989-2019) --
    {
        id: 'jp_heisei_enthronement',
        name: '平成改元',
        name_ja: '平成改元',
        name_en: 'Heisei Era Begins',
        year: 1989.02, year_end: 2019.33,
        lat: 35.7, lon: 139.7,
        description: '1989年1月8日。昭和天皇崩御に伴い平成に改元。「内平外成」を意味する。',
        description_en: 'January 8, 1989: The Heisei era begins upon Emperor Shōwa\'s passing. Heisei means "achieving peace."',
        type: 'modern',
        importance: 5
    },
    {
        id: 'jp_hanshin_earthquake',
        name: '阪神・淡路大震災',
        name_ja: '阪神・淡路大震災',
        name_en: 'Great Hanshin Earthquake',
        year: 1995.04, year_end: 1996,
        lat: 34.7, lon: 135.2,
        description: '1995年1月17日。死者6,434名。都市直下型地震への防災意識を根本的に変えた。',
        description_en: 'January 17, 1995: 6,434 dead. Fundamentally changed earthquake preparedness in urban Japan.',
        type: 'modern',
        importance: 3
    },
    {
        id: 'jp_sarin_attack',
        name: '地下鉄サリン事件',
        name_ja: '地下鉄サリン事件',
        name_en: 'Tokyo Subway Sarin Attack',
        year: 1995.22, year_end: 1996,
        lat: 35.7, lon: 139.8,
        description: '1995年3月20日。オウム真理教による化学兵器テロ。戦後日本の安全神話が崩壊。',
        description_en: 'March 20, 1995: Aum Shinrikyo releases sarin nerve gas in the Tokyo subway. Japan\'s myth of absolute safety shatters.',
        type: 'modern',
        importance: 3
    },
    {
        id: 'jp_lehman_shock',
        name: 'リーマン・ショック',
        name_ja: 'リーマン・ショック',
        name_en: 'Lehman Shock (Global Financial Crisis)',
        year: 2008.7, year_end: 2010,
        lat: 40.7, lon: -74.0,
        description: '世界金融危機が日本経済を直撃。輸出産業が壊滅的打撃を受ける。',
        description_en: 'The global financial crisis hits Japan. Export industries suffer devastating losses.',
        type: 'modern',
        importance: 3
    },

    // -- 令和時代 (2019-) --
    {
        id: 'jp_reiwa_enthronement',
        name: '令和改元',
        name_ja: '令和改元',
        name_en: 'Reiwa Era Begins',
        year: 2019.33, year_end: 2026,
        lat: 35.7, lon: 139.7,
        description: '2019年5月1日。史上初の生前退位による改元。「美しい調和」を意味する。万葉集から採った初の和典年号。',
        description_en: 'May 1, 2019: First abdication-based succession in modern history. Reiwa means "beautiful harmony" — the first era name derived from Japanese literature.',
        type: 'modern',
        importance: 5
    },
    {
        id: 'jp_covid_emergency',
        name: 'COVID-19 緊急事態宣言',
        name_ja: 'COVID-19 緊急事態宣言',
        name_en: 'COVID-19 State of Emergency',
        year: 2020.25, year_end: 2021.7,
        lat: 35.7, lon: 139.7,
        description: '2020年4月7日。史上初の緊急事態宣言発令。社会・経済・働き方の構造転換。',
        description_en: 'April 7, 2020: Japan\'s first-ever state of emergency. A structural transformation of society, economy, and work.',
        type: 'modern',
        importance: 3
    },
    {
        id: 'jp_tokyo_olympics_2021',
        name: '東京オリンピック 2021',
        name_ja: '東京オリンピック 2021',
        name_en: 'Tokyo Olympics 2021',
        year: 2021.55, year_end: 2021.65,
        lat: 35.7, lon: 139.7,
        description: 'コロナ禍での無観客開催。1年延期という異例の五輪。',
        description_en: 'Held with no spectators due to COVID-19. An unprecedented one-year postponement.',
        type: 'modern',
        importance: 3
    },
    {
        id: 'jp_abe_assassination',
        name: '安倍晋三元首相 銃撃事件',
        name_ja: '安倍晋三元首相 銃撃事件',
        name_en: 'Assassination of Former PM Abe',
        year: 2022.52, year_end: 2022.6,
        lat: 34.7, lon: 135.8,
        description: '2022年7月8日。選挙応援演説中に銃撃され死亡。戦後民主主義の根幹を揺るがした。',
        description_en: 'July 8, 2022: Former PM Shinzō Abe is assassinated during a campaign speech. A shock to Japan\'s postwar democracy.',
        type: 'modern',
        importance: 3
    },
    {
        id: 'jp_expo_2025',
        name: '大阪・関西万博 2025',
        name_ja: '大阪・関西万博 2025',
        name_en: 'Osaka-Kansai Expo 2025',
        year: 2025.3, year_end: 2025.8,
        lat: 34.6, lon: 135.4,
        description: '「いのち輝く未来社会のデザイン」。1970年から55年ぶりの大阪万博。',
        description_en: '"Designing Future Society for Our Lives." Osaka hosts a World Expo 55 years after the iconic 1970 event.',
        type: 'modern',
        importance: 3
    },

    // ===== 中国 近現代 時代転換トピックス =====
    {
        id: 'cn_xinhai_revolution',
        name: '辛亥革命・中華民国成立',
        name_ja: '辛亥革命・中華民国成立',
        name_en: 'Xinhai Revolution / Republic of China Founded',
        year: 1912, year_end: 1912.5,
        lat: 30.6, lon: 114.3,
        description: '1911年10月の武昌蜂起に端を発し、清朝が崩壊。1912年1月1日、孫文が臨時大総統に就任し中華民国が成立。2000年以上続いた皇帝制の終焉。',
        description_en: 'The Wuchang Uprising of October 1911 toppled the Qing dynasty. On Jan 1, 1912, Sun Yat-sen became provisional president, founding the Republic of China and ending over 2,000 years of imperial rule.',
        type: 'modern',
        importance: 5
    },
    {
        id: 'cn_prc_founding',
        name: '中華人民共和国建国',
        name_ja: '中華人民共和国建国',
        name_en: 'Founding of the People\'s Republic of China',
        year: 1949, year_end: 1949.8,
        lat: 39.9, lon: 116.4,
        description: '1949年10月1日、毛沢東が天安門で建国を宣言。国共内戦に勝利した中国共産党が大陸を掌握。中華民国政府は台湾に移転。',
        description_en: 'On October 1, 1949, Mao Zedong proclaimed the PRC at Tiananmen. The CCP won the civil war; the ROC government retreated to Taiwan.',
        type: 'modern',
        importance: 5
    }
];
