// LoveLive! omikuji data. Keep this file UTF-8.
const LL_SERIES_INFO = {
  muse: {
    label: "μ's",
    jp: "μ's",
    short: "缪斯",
    cover: "data/covers_webp/muse.webp",
    posterFit: "cover",
    posterPosition: "center 42%",
    previewAudio: "assets/audio/previews/muse.mp3",
    hint: "音乃木坂的粉色初心",
    color: "#ff1493",
    color2: "#ff9fd4",
    tone: "粉色与舞台灯光",
    theme: "从“想守住学校”开始，把普通日常推成九个人共同完成的舞台。",
    coverSong: "僕らは今のなかで",
    coverAudio: "assets/audio/groups/muse.mp3"
  },
  aqours: {
    label: "Aqours",
    jp: "Aqours",
    short: "水团",
    cover: "data/covers_webp/aqours.webp",
    posterFit: "cover",
    posterPosition: "center 48%",
    previewAudio: "assets/audio/previews/aqours.mp3",
    hint: "沼津海风与天蓝色夏天",
    color: "#00bfff",
    color2: "#93e9ff",
    tone: "海蓝与阳光",
    theme: "把浦之星、海边小镇和追逐闪耀的心情连在一起，越不完美越有前进感。",
    coverSong: "Deep Blue",
    coverAudio: "assets/audio/groups/aqours.mp3"
  },
  nijigasaki: {
    label: "虹咲",
    jp: "虹ヶ咲学園スクールアイドル同好会",
    short: "虹团",
    cover: "data/covers_webp/nijigasaki.webp",
    posterFit: "cover",
    posterPosition: "center 48%",
    previewAudio: "assets/audio/previews/nijigasaki.mp3",
    hint: "每个人都拥有自己的颜色",
    color: "#ffd700",
    color2: "#fff1a8",
    tone: "彩虹与个人色",
    theme: "不把所有人压成同一种答案，而是让每个人用自己的方式发光。",
    coverSong: "TOKIMEKI Runners",
    coverAudio: "assets/audio/groups/nijigasaki.mp3"
  },
  liella: {
    label: "Liella!",
    jp: "Liella!",
    short: "星团",
    cover: "data/covers_webp/liella.webp",
    posterFit: "cover",
    posterPosition: "center 34%",
    previewAudio: "assets/audio/previews/liella.mp3",
    hint: "结丘学园的紫色星光",
    color: "#9932cc",
    color2: "#d9b2ec",
    tone: "紫色与星光",
    theme: "从一所新学校和一群新同伴开始，反复确认“我也可以唱出来”。",
    coverSong: "この街でいまキミと",
    coverAudio: "assets/audio/groups/liella.mp3"
  },
  hasunosora: {
    label: "莲之空",
    jp: "蓮ノ空女学院スクールアイドルクラブ",
    short: "莲团",
    cover: "data/covers_webp/hasunosora.webp",
    posterFit: "cover",
    posterPosition: "center 32%",
    previewAudio: "assets/audio/previews/hasunosora.mp3",
    hint: "实时展开的樱粉青春",
    color: "#ffc0cb",
    color2: "#ffe8ee",
    tone: "樱粉与学院空气",
    theme: "把学年、前后辈、直播与成长放在同一条时间线上，今天的选择会进入明天的故事。",
    coverSong: "On your mark",
    coverAudio: "assets/audio/groups/hasunosora.mp3"
  },
  bluebird: {
    label: "いきづらい部！",
    jp: "イキヅライブ！ LOVELIVE! BLUEBIRD",
    short: "人生不易部",
    cover: "data/covers_webp/bluebird.webp",
    posterFit: "cover",
    posterPosition: "center 30%",
    previewAudio: "assets/audio/previews/bluebird.mp3",
    hint: "来自 BLUEBIRD 企划的线上学园偶像部",
    color: "#2377FF",
    color2: "#9CEBFF",
    tone: "蓝色通知与线上回声",
    theme: "把分散在不同卫星校区的心情，变成能互相回应的线上通知。",
    coverSong: "Dou-Da DOING!",
    coverAudio: "assets/audio/groups/bluebird.mp3"
  }
};

const rawCharacters = [
  {
    id: "muse-honoka", seriesKey: "muse", nameCn: "高坂穗乃果", nameJp: "高坂穂乃果", roman: "Honoka Kosaka", cv: "新田惠海",
    traits: "元气发动机 / 和果子店女儿 / 先行动派", song: "START:DASH!!", color: "#E2732D", focus: "先开始，再把大家带起来",
    avatar: "data/icon/高坂穗乃果.png",
    tip: "穗乃果家经营和果子店“穗村”，她自己喜欢草莓，也常被粉丝记成“把日常甜味带上舞台”的发起人。"
  },
  {
    id: "muse-eli", seriesKey: "muse", nameCn: "绚濑绘里", nameJp: "絢瀬絵里", roman: "Eli Ayase", cv: "南条爱乃",
    traits: "学生会长 / 俄罗斯血统 / 舞蹈基础", song: "ありふれた悲しみの果て", color: "#36B3DD", focus: "把混乱整理成秩序",
    avatar: "data/icon/绚濑绘里.png",
    tip: "绘里有俄罗斯血统，招牌感叹“ハラショー”也因此特别有记忆点；她的舞蹈基础让 μ's 初期练习一下子专业起来。"
  },
  {
    id: "muse-kotori", seriesKey: "muse", nameCn: "南小鸟", nameJp: "南ことり", roman: "Kotori Minami", cv: "内田彩",
    traits: "温柔治愈 / 服装设计 / 女仆咖啡店传说", song: "ぶる〜べりぃ♡とれいん", color: "#8C9395", focus: "用温柔把细节缝好",
    avatar: "data/icon/南小鸟.png",
    tip: "小鸟不只是温柔担当，她还负责不少演出服设计；“ミナリンスキー”的女仆店经历也是老粉很熟的隐藏名场面。"
  },
  {
    id: "muse-umi", seriesKey: "muse", nameCn: "园田海未", nameJp: "園田海未", roman: "Umi Sonoda", cv: "三森铃子",
    traits: "认真克己 / 弓道 / 作词担当", song: "勇気のReason", color: "#1660A5", focus: "用自律稳住节奏",
    avatar: "data/icon/园田海未.png",
    tip: "海未常负责歌词，又有弓道与传统气质设定，所以她的“严格”其实很适合把九个人的热情写成可以练习的目标。"
  },
  {
    id: "muse-rin", seriesKey: "muse", nameCn: "星空凛", nameJp: "星空凛", roman: "Rin Hoshizora", cv: "饭田里穗",
    traits: "运动神经 / 猫系语尾 / 直率活泼", song: "恋のシグナルRin rin rin!", color: "#F1C51F", focus: "先让身体动起来",
    avatar: "data/icon/星空凛.png",
    tip: "凛的“にゃ”语尾很有辨识度；她关于“女孩子气”的成长线，也让穿裙装登台这件事变得格外可爱。"
  },
  {
    id: "muse-maki", seriesKey: "muse", nameCn: "西木野真姬", nameJp: "西木野真姫", roman: "Maki Nishikino", cv: "Pile",
    traits: "作曲担当 / 钢琴 / 傲娇才女", song: "Daring!!", color: "#CC3554", focus: "把隐藏实力拿出来",
    avatar: "data/icon/西木野真姬.png",
    tip: "真姬会弹钢琴并参与作曲，她那句“意味わかんない！”常常是害羞、别扭和才华同时出现的开关。"
  },
  {
    id: "muse-nozomi", seriesKey: "muse", nameCn: "东条希", nameJp: "東條希", roman: "Nozomi Tojo", cv: "楠田亚衣奈",
    traits: "塔罗 / 神秘包容 / 连接者", song: "純愛レンズ", color: "#8A50B4", focus: "顺着缘分连接别人",
    avatar: "data/icon/748UR-Tojo-Nozomi-Just-Stay-Still-for-Me-Animism-Messenger-NuYimq.png",
    tip: "希的塔罗牌设定和“缘分”主题非常贴合，她不像站在最前面的队长，却常常是把大家推到一起的人。"
  },
  {
    id: "muse-hanayo", seriesKey: "muse", nameCn: "小泉花阳", nameJp: "小泉花陽", roman: "Hanayo Koizumi", cv: "久保由利香",
    traits: "白米爱好者 / 偶像研究 / 害羞努力家", song: "なわとび", color: "#55C267", focus: "认真照顾微小热爱",
    avatar: "data/icon/691UR-Koizumi-Hanayo-Mmm-This-Is-So-Good-Happy-Sweet-Easter-basBE2.png",
    tip: "花阳对白米和偶像都很认真，“誰か助けて！”的求助感也让她从害羞粉丝变成偶像的瞬间特别打动人。"
  },
  {
    id: "muse-nico", seriesKey: "muse", nameCn: "矢泽妮可", nameJp: "矢澤にこ", roman: "Nico Yazawa", cv: "德井青空",
    traits: "偶像研究部 / 营业笑容 / 妹妹弟弟", song: "まほうつかいはじめました!", color: "#F171A8", focus: "把可爱当成专业坚持",
    avatar: "data/icon/300UR-Yazawa-Nico-Let-s-use-this-house-set-Welcome-to-the-World-of-Toys-LGykUl.png",
    tip: "“にっこにっこにー”不是单纯卖萌，它是妮可把偶像职业精神坚持到底的招牌动作。"
  },
  {
    id: "aqours-chika", seriesKey: "aqours", nameCn: "高海千歌", nameJp: "高海千歌", roman: "Chika Takami", cv: "伊波杏树",
    traits: "普通怪兽 / 旅馆女儿 / 追逐闪耀", song: "One More Sunshine Story", color: "#F28C2E", focus: "从普通里挤出闪耀",
    avatar: "data/icon/615UR-Takami-Chika-I-Watched-Videos-to-Study-Luxury-Christmas-GCCcgM.png",
    tip: "千歌总说自己普通，但 Aqours 的起点正是她想追上 μ's 的那股劲；她家旅馆“十千万”也成了水团很重要的日常坐标。"
  },
  {
    id: "aqours-riko", seriesKey: "aqours", nameCn: "樱内梨子", nameJp: "桜内梨子", roman: "Riko Sakurauchi", cv: "逢田梨香子",
    traits: "转学生 / 钢琴 / 作曲", song: "Pianoforte Monologue", color: "#F0A7B5", focus: "把不安谱成旋律",
    avatar: "data/icon/681UR-Sakurauchi-Riko-I-Think-I-Can-Write-One-Right-Now-Cherry-Blossom-Girl-UmLmFZ.png",
    tip: "梨子从音乃木坂转来浦之星，又会钢琴和作曲；她“怕狗”的反差经常给冷静外表补上一点生活感。"
  },
  {
    id: "aqours-kanan", seriesKey: "aqours", nameCn: "松浦果南", nameJp: "松浦果南", roman: "Kanan Matsuura", cv: "诹访奈奈香",
    traits: "潜水店 / 体力担当 / 旧三年级", song: "さかなかなんだか?", color: "#18B7A8", focus: "潜得更深，也抱得更稳",
    avatar: "data/icon/182Matsuura-Kanan-Maybe-we-should-dive-a-little-deeper-UR-E9Bm3r.png",
    tip: "果南家经营潜水店，她的“Hug”不只是亲密动作，也很像她照顾 Aqours 时那种沉稳可靠的保护感。"
  },
  {
    id: "aqours-dia", seriesKey: "aqours", nameCn: "黑泽黛雅", nameJp: "黒澤ダイヤ", roman: "Dia Kurosawa", cv: "小宫有纱",
    traits: "学生会长 / 黑泽家长女 / 偶像知识库", song: "WHITE FIRST LOVE", color: "#D8232F", focus: "用礼法守住热爱",
    avatar: "data/icon/447UR-Kurosawa-Dia-Cool-サカサマ世界-AClmQ8.png",
    tip: "黛雅看起来严厉，其实是资深学园偶像粉；她对 μ's 的知识量让“严肃大小姐”多了一层可爱的破防点。"
  },
  {
    id: "aqours-you", seriesKey: "aqours", nameCn: "渡边曜", nameJp: "渡辺曜", roman: "You Watanabe", cv: "齐藤朱夏",
    traits: "游泳健将 / 服装制作 / Yousoro", song: "Beginner's Sailing", color: "#56A7E5", focus: "向前方利落敬礼",
    avatar: "data/icon/585SR-Watanabe-You-Ehehe-My-Surprise-Was-a-Huge-Success-WATER-BLUE-NEW-WORL-yCYLev.png",
    tip: "曜的“ヨーソロー！”来自航海用语，她还会做演出服，运动系和手作系两个标签都很能打。"
  },
  {
    id: "aqours-yoshiko", seriesKey: "aqours", nameCn: "津岛善子", nameJp: "津島善子", roman: "Yoshiko Tsushima", cv: "小林爱香",
    traits: "堕天使约翰 / 中二病 / 网络感", song: "in this unstable world", color: "#7B6BAE", focus: "把黑历史也变成魔法",
    avatar: "data/icon/34Tsushima-Yoshiko-Angel-Sniper-UR-yQYDq8.png",
    tip: "善子坚持自称“ヨハネ”，这个堕天使人设越认真越可爱，也让她在直播和舞台上都特别容易被记住。"
  },
  {
    id: "aqours-hanamaru", seriesKey: "aqours", nameCn: "国木田花丸", nameJp: "国木田花丸", roman: "Hanamaru Kunikida", cv: "高槻加奈子",
    traits: "寺庙女儿 / 读书家 / ずら", song: "おやすみなさん!", color: "#E0B633", focus: "在书页里找到勇气",
    avatar: "data/icon/446UR-Kunikida-Hanamaru-Cool-Flower-Park-VrliQA.png",
    tip: "花丸的“ずら”语尾和寺庙、读书设定很搭；她从图书馆走上舞台的变化，是 Aqours 里很温柔的一条成长线。"
  },
  {
    id: "aqours-mari", seriesKey: "aqours", nameCn: "小原鞠莉", nameJp: "小原鞠莉", roman: "Mari Ohara", cv: "铃木爱奈",
    traits: "理事长 / 混血大小姐 / Shiny", song: "New winding road", color: "#A36AC7", focus: "把任性变成闪亮推力",
    avatar: "data/icon/427UR-Ohara-Mari-Cool-Peering-at-the-Distant-Moon-UZjOTl.png",
    tip: "鞠莉的“シャイニー！”和理事长身份很抢眼，但三年级旧事里那份不愿放手的执着才是她真正的重量。"
  },
  {
    id: "aqours-ruby", seriesKey: "aqours", nameCn: "黑泽露比", nameJp: "黒澤ルビィ", roman: "Ruby Kurosawa", cv: "降幡爱",
    traits: "害羞努力 / 黛雅妹妹 / Ganbaruby", song: "RED GEM WINK", color: "#E94483", focus: "小声也要好好努力",
    avatar: "data/icon/512UR-Kurosawa-Ruby-Mm-Mumble-Mumble-Sweet-Little-Angel-YgPGCN.png",
    tip: "露比的“がんばルビィ！”从口头禅变成粉丝暗号；她和姐姐黛雅的关系，也让害羞成长线更有家庭感。"
  },
  {
    id: "niji-yu", seriesKey: "nijigasaki", nameCn: "高咲侑", nameJp: "高咲侑", roman: "Yu Takasaki", cv: "矢野妃菜喜",
    traits: "支持者 / 作曲学习 / 连接同好会", song: "未来ハーモニー", color: "#111111", focus: "把喜欢说出口",
    avatar: "data/icon/高咲侑.jpg",
    tip: "侑是动画版加入的主角，她不是传统意义的舞台成员，却让“支持学园偶像的人也能发光”这件事变得很明确。"
  },
  {
    id: "niji-ayumu", seriesKey: "nijigasaki", nameCn: "上原步梦", nameJp: "上原歩夢", roman: "Ayumu Uehara", cv: "大西亚玖璃",
    traits: "青梅竹马 / 认真可爱 / 粉色初心", song: "夢への一歩", color: "#E88CB3", focus: "一步一步靠近梦想",
    avatar: "data/icon/53Uehara-Ayumu-食べ過ぎ注意報-SR-8S9XgT.png",
    tip: "步梦的第一首歌就叫《夢への一歩》，“一步”这个意象几乎写进了她的角色核心：慢，但不会停。"
  },
  {
    id: "niji-kasumi", seriesKey: "nijigasaki", nameCn: "中须霞", nameJp: "中須かすみ", roman: "Kasumi Nakasu", cv: "相良茉优",
    traits: "可爱研究 / 恶作剧 / かすみん", song: "無敵級*ビリーバー", color: "#F4E667", focus: "堂堂正正地可爱",
    avatar: "data/icon/710UR-Nakasu-Kasumi-I-m-Gonna-Be-the-Princess-A-Cute-Dream-Wonderland-MbYC4H.png",
    tip: "霞自称“かすみん”，爱搞小恶作剧，但她对“可爱”的研究是认真的；越被吐槽越能弹回来。"
  },
  {
    id: "niji-shizuku", seriesKey: "nijigasaki", nameCn: "樱坂雫", nameJp: "桜坂しずく", roman: "Shizuku Osaka", cv: "前田佳织里",
    traits: "戏剧部 / 表演欲 / 爱犬奥菲莉亚", song: "あなたの理想のヒロイン", color: "#9AC8E2", focus: "把真实演出来",
    avatar: "data/icon/907UR-Osaka-Shizuku-We-re-Going-Home-Together-Dream-Treasure-Tf8ryi.png",
    tip: "雫属于戏剧部，爱犬名叫奥菲莉亚；“理想女主角”和“真实自我”的拉扯，是她最有味道的角色点。"
  },
  {
    id: "niji-karin", seriesKey: "nijigasaki", nameCn: "朝香果林", nameJp: "朝香果林", roman: "Karin Asaka", cv: "久保田未梦",
    traits: "模特 / 性感成熟 / 路痴反差", song: "Starlight", color: "#485EC6", focus: "优雅地站到聚光灯下",
    avatar: "data/icon/196UR-Asaka-Karin-Did-I-make-your-heart-skip-a-beat-Celebrity-Blue-9bxvW4.png",
    tip: "果林有模特设定，舞台上很成熟；但她方向感差的反差，常把冷艳前辈瞬间拉回可爱日常。"
  },
  {
    id: "niji-ai", seriesKey: "nijigasaki", nameCn: "宫下爱", nameJp: "宮下愛", roman: "Ai Miyashita", cv: "村上奈津实",
    traits: "社交达人 / 双关语 / 下町气质", song: "めっちゃGoing!!", color: "#F29A2E", focus: "用一句玩笑打开气氛",
    avatar: "data/icon/184Miyashita-Ai-UMA-will-definitely-eat-it-too-UR-AGYbqK.png",
    tip: "爱姐喜欢说双关语，家里有下町商店街气质；她的亲和力不是“吵”，而是很会把别人拉进来。"
  },
  {
    id: "niji-kanata", seriesKey: "nijigasaki", nameCn: "近江彼方", nameJp: "近江彼方", roman: "Kanata Konoe", cv: "鬼头明里",
    traits: "睡眠系 / 姐姐力 / 遥的姐姐", song: "眠れる森に行きたいな", color: "#B66BCB", focus: "在慢节奏里补满能量",
    avatar: "data/icon/645UR-Konoe-Kanata-I-Made-Rose-Shaped-Chocolate-Sweet-Rose-l0v6Ox.png",
    tip: "彼方总是困，却是很会照顾妹妹遥的姐姐；睡眠系外壳下面藏着相当可靠的生活力。"
  },
  {
    id: "niji-setsuna", seriesKey: "nijigasaki", nameCn: "优木雪菜", nameJp: "優木せつ菜", roman: "Setsuna Yuki", cv: "林鼓子",
    traits: "热血 / 二次元爱好 / 中川菜菜", song: "CHASE!", color: "#E60033", focus: "让热爱烧起来",
    avatar: "data/icon/54Yuki-Setsuna-Please-teach-me-more-SR-ZNHd4J.png",
    tip: "雪菜的真实身份是学生会长中川菜菜；她把动画、漫画和学园偶像的“大好き”全部烧成了舞台能量。"
  },
  {
    id: "niji-emma", seriesKey: "nijigasaki", nameCn: "艾玛·维尔德", nameJp: "エマ・ヴェルデ", roman: "Emma Verde", cv: "指出毬亚",
    traits: "瑞士留学生 / 包容 / 田园感", song: "Evergreen", color: "#8BCB69", focus: "温柔地接住别人",
    avatar: "data/icon/858SR-Emma-Verde-Reminds-Me-of-Being-in-Switzerland-Eien-no-Isshun-rlCZOj.png",
    tip: "艾玛来自瑞士，角色关键词总和自然、牧歌感连在一起；她的温柔更像稳定的气候，而不是一时的安慰。"
  },
  {
    id: "niji-rina", seriesKey: "nijigasaki", nameCn: "天王寺璃奈", nameJp: "天王寺璃奈", roman: "Rina Tennoji", cv: "田中千惠美",
    traits: "璃奈板 / 电子系 / 表情传达", song: "ドキピポ☆エモーション", color: "#A7AEB6", focus: "换一种方式表达心情",
    avatar: "data/icon/733UR-Tennoji-Rina-Rina-chan-Board-Says-Hmm-Love-Rina-m9MBlz.png",
    tip: "“璃奈板”不是噱头，而是她努力把表情传达给大家的工具；越机械，反而越让人感到认真。"
  },
  {
    id: "niji-shioriko", seriesKey: "nijigasaki", nameCn: "三船栞子", nameJp: "三船栞子", roman: "Shioriko Mifune", cv: "小泉萌香",
    traits: "适性判断 / 学生会 / 端正认真", song: "決意の光", color: "#2FB596", focus: "找准适性再前进",
    avatar: "data/icon/462UR-Mifune-Shioriko-Pure-適性が備わっています-cXSXIt (1).png",
    tip: "栞子常把“适性”挂在嘴边，她的成长点不是放弃判断，而是学会把判断和自己的心愿放在一起。"
  },
  {
    id: "niji-mia", seriesKey: "nijigasaki", nameCn: "米娅·泰勒", nameJp: "ミア・テイラー", roman: "Mia Taylor", cv: "内田秀",
    traits: "纽约 / 天才作曲家 / 英语感", song: "I'm Still...", color: "#DAD7D5", focus: "把骄傲写成一首歌",
    avatar: "data/icon/729UR-Mia-Taylor-You-ll-Sing-My-Song-Marriage-Proposition-3XoOOO.png",
    tip: "米娅来自纽约，年纪小却有作曲天才设定；她的锋利感常常来自“太早知道自己厉害”。"
  },
  {
    id: "niji-lanzhu", seriesKey: "nijigasaki", nameCn: "钟岚珠", nameJp: "鐘嵐珠", roman: "Lanzhu Zhong", cv: "法元明菜",
    traits: "香港 / Solo气场 / 自信直球", song: "Queendom", color: "#F0C8D8", focus: "把自信开到满格",
    avatar: "data/icon/793UR-Lanzhu-Zhong-They-Will-All-Inspire-Someone-Full-Throttle-Cheer-Squad-WzPE4Y.png",
    tip: "岚珠来自香港，登场时的 Solo 气场极强；她不是不需要朋友，而是要学会把“我最强”变成“我们一起”。"
  },
  {
    id: "liella-kanon", seriesKey: "liella", nameCn: "涩谷香音", nameJp: "澁谷かのん", roman: "Kanon Shibuya", cv: "伊达小百合",
    traits: "歌唱恐惧 / 咖啡店女儿 / 领唱", song: "私のSymphony", color: "#FF7F2A", focus: "把害怕也唱出来",
    avatar: "data/icon/523UR-Shibuya-Kanon-Pure-ふたりでポーズ-xxioW8.png",
    tip: "香音一开始有唱歌恐惧，家里经营咖啡店；她的成长不是突然不怕，而是愿意在害怕里继续开口。"
  },
  {
    id: "liella-keke", seriesKey: "liella", nameCn: "唐可可", nameJp: "唐可可", roman: "Tang Keke", cv: "Liyuu",
    traits: "上海留学生 / 学园偶像厨 / 行动力", song: "Tiny Stars", color: "#76D7EA", focus: "用喜欢推动第一步",
    avatar: "data/icon/513UR-Tang-Keke-Pure-思い立ったが吉日-6JARuJ.png",
    tip: "可可来自上海，是把“学园偶像太好了！”直接行动化的人；没有她的猛推，Liella! 的起点会慢很多。"
  },
  {
    id: "liella-chisato", seriesKey: "liella", nameCn: "岚千砂都", nameJp: "嵐千砂都", roman: "Chisato Arashi", cv: "岬奈子",
    traits: "舞蹈 / 丸子头 / 章鱼烧", song: "勇気のカケラ", color: "#FF8FB4", focus: "把圆画完整",
    avatar: "data/icon/388UR-Arashi-Chisato-Smile-元気出して-QxhCiH.png",
    tip: "千砂都爱“丸”，发型、口头审美和舞蹈线都围着圆转；这份圆满感也让她很适合做舞蹈支柱。"
  },
  {
    id: "liella-sumire", seriesKey: "liella", nameCn: "平安名堇", nameJp: "平安名すみれ", roman: "Sumire Heanna", cv: "佩顿尚未",
    traits: "前童星 / 神社家 / Galaxy", song: "Nonfiction!!", color: "#74C476", focus: "把不甘心变成银河",
    avatar: "data/icon/515UR-Heanna-Sumire-Pure-一念天に通ず-zsbt3T.png",
    tip: "堇的“ギャラクシー！”背后有前童星的不甘心；她越嘴硬，越能看出想被看见的认真。"
  },
  {
    id: "liella-ren", seriesKey: "liella", nameCn: "叶月恋", nameJp: "葉月恋", roman: "Ren Hazuki", cv: "青山渚",
    traits: "学生会长 / 传统与校史 / 钢琴", song: "青空を待ってる", color: "#1F67B1", focus: "把传统交给未来",
    avatar: "data/icon/599UR-Hazuki-Ren-Cool-ありがとうの気持ちを-tGTXWF.png",
    tip: "恋和结丘的创校背景紧紧相连，她的严肃感来自想守住母亲留下的东西，后来才慢慢学会和大家一起守。"
  },
  {
    id: "liella-kinako", seriesKey: "liella", nameCn: "樱小路希奈子", nameJp: "桜小路きな子", roman: "Kinako Sakurakoji", cv: "铃原希实",
    traits: "北海道转学生 / 质朴 / っす", song: "ビタミンSUMMER!", color: "#E8D33F", focus: "慢慢适应新城市",
    avatar: "data/icon/474UR-Sakurakoji-Kinako-Smile-緊張の舞台袖-oXJdhh.png",
    tip: "希奈子从北海道来到东京，语尾“っす”很有记忆点；她的可爱常常来自“不太会装作很会”。"
  },
  {
    id: "liella-mei", seriesKey: "liella", nameCn: "米女芽衣", nameJp: "米女メイ", roman: "Mei Yoneme", cv: "薮岛朱音",
    traits: "偶像粉 / 凶脸反差 / 热血", song: "茜心", color: "#E53935", focus: "把喜欢从心里喊出来",
    avatar: "data/icon/424UR-Yoneme-Mei-Cool-金魚すくい-ubxZSt.png",
    tip: "芽衣外表有点凶，其实是学园偶像粉；她不擅长坦率，但一旦认真起来，热量很直。"
  },
  {
    id: "liella-shiki", seriesKey: "liella", nameCn: "若菜四季", nameJp: "若菜四季", roman: "Shiki Wakana", cv: "大熊和奏",
    traits: "科学系 / 寡言 / 芽衣的搭档", song: "ガラスボールリジェクション", color: "#60C1C7", focus: "用观察确认心情",
    avatar: "data/icon/425UR-Wakana-Shiki-Cool-メイのための百発百中-f6pvLt.png",
    tip: "四季常带着科学观察者气质，话不多但行动很准；她和芽衣的互补关系，是二期很有趣的化学反应。"
  },
  {
    id: "liella-natsumi", seriesKey: "liella", nameCn: "鬼塚夏美", nameJp: "鬼塚夏美", roman: "Natsumi Onitsuka", cv: "绘森彩",
    traits: "L-Tuber / 赚钱脑 / 鬼夏", song: "不可視なブルー", color: "#F39C12", focus: "把现实算盘打成舞台企划",
    avatar: "data/icon/475UR-Onitsuka-Natsumi-Smile-持ち前の情報収集能力-Kl6Zii.png",
    tip: "夏美以 L-Tuber 身份活动，嘴上总讲流量和收益，但这份现实感反而让 Liella! 的青春多了一点当代味。"
  },
  {
    id: "liella-wien", seriesKey: "liella", nameCn: "薇恩·玛格丽特", nameJp: "ウィーン・マルガレーテ", roman: "Wien Margarete", cv: "结那",
    traits: "奥地利 / 歌唱精英 / 强敌感", song: "Butterfly Wing", color: "#9E8BE8", focus: "把孤高化成同伴感",
    avatar: "data/icon/559UR-Margarete-Wien-Pure-デュエット-5Ho67W.png",
    tip: "薇恩来自奥地利，初登场时更像强敌；她加入后的看点，是孤高的歌声如何慢慢适应团队呼吸。"
  },
  {
    id: "liella-tomari", seriesKey: "liella", nameCn: "鬼塚冬毬", nameJp: "鬼塚冬毬", roman: "Tomari Onitsuka", cv: "坂仓花",
    traits: "夏美妹妹 / 冷静现实 / 企划脑", song: "ファイティングコール", color: "#7AC3E8", focus: "冷静地把计划落地",
    avatar: "data/icon/528UR-Onitsuka-Tomari-Cool-Jellyfish-lPHWFB.png",
    tip: "冬毬是夏美的妹妹，比姐姐更冷静也更会算；姐妹一起看时，一个像外放企划，一个像理性校准。"
  },
  {
    id: "hasu-kaho", seriesKey: "hasunosora", nameCn: "日野下花帆", nameJp: "日野下花帆", roman: "Kaho Hinoshita", cv: "楡井希实",
    traits: "转学生 / 元气 / 花开主题", song: "Dream Believers", color: "#F6A5B8", focus: "让今天先开一朵花",
    avatar: "data/icon/475UR-Kaho-Hinoshita-Cheerleader-6pH7mi.png",
    tip: "花帆的名字和“花开”意象非常直观，她像莲之空的起跑按钮，把转学后的不安变成想盛开的愿望。"
  },
  {
    id: "hasu-sayaka", seriesKey: "hasunosora", nameCn: "村野沙耶香", nameJp: "村野さやか", roman: "Sayaka Murano", cv: "野中ここな",
    traits: "花样滑冰 / 认真 / 纪律感", song: "眩耀夜行", color: "#74A9E8", focus: "把动作磨到发光",
    avatar: "data/icon/528UR-Sayaka-Murano-Moodmaker-eJbQBI.png",
    tip: "沙耶香有花样滑冰背景，舞台动作里的端正和控制感很合理；她的温柔常常藏在严格训练之后。"
  },
  {
    id: "hasu-kozue", seriesKey: "hasunosora", nameCn: "乙宗梢", nameJp: "乙宗梢", roman: "Kozue Otomune", cv: "花宫初奈",
    traits: "上级生 / 优雅 / Dollchestra", song: "ツキマカセ", color: "#A78BC6", focus: "优雅地承担前辈位置",
    avatar: "data/icon/523LR-Kozue-Otomune-Trickster-8j6MSr.png",
    tip: "梢的前辈感很强，Dollchestra 的舞台也偏精致克制；她像是在提醒后辈：优雅不是轻松，而是练出来的。"
  },
  {
    id: "hasu-tsuzuri", seriesKey: "hasunosora", nameCn: "夕雾缀理", nameJp: "夕霧綴理", roman: "Tsuzuri Yugiri", cv: "佐佐木琴子",
    traits: "天才型 / 表演者 / 独特语言", song: "DEEPNESS", color: "#C44B5A", focus: "相信自己的节奏",
    avatar: "data/icon/106UR-Tsuzuri-Yugiri-Performer-E1QOUc.png",
    tip: "缀理常被写成天才型表演者，语言节奏也很独特；她的“难懂”其实正是舞台吸引力的一部分。"
  },
  {
    id: "hasu-rurino", seriesKey: "hasunosora", nameCn: "大泽瑠璃乃", nameJp: "大沢瑠璃乃", roman: "Rurino Osawa", cv: "菅叶和",
    traits: "元气 / 电量感 / 归国子女", song: "ハクチューアラモード", color: "#62D2E8", focus: "给电量重新充满",
    avatar: "data/icon/378R-Rurino-Osawa-Trickster-e4uhBa.png",
    tip: "瑠璃乃的“电量”感很强，常给人一种把气氛重新点亮的感觉；她的活泼不是浅，而是很需要被回应。"
  },
  {
    id: "hasu-megumi", seriesKey: "hasunosora", nameCn: "藤岛慈", nameJp: "藤島慈", roman: "Megumi Fujishima", cv: "月音こな",
    traits: "直播感 / 前辈 / 表现欲", song: "Holiday∞Holiday", color: "#F2B4CF", focus: "把镜头前的笑容找回来",
    avatar: "data/icon/127SR-Megumi-Fujishima-Cheerleader-WGSFXy.png",
    tip: "慈很适合和直播、镜头、粉丝回应放在一起看；她的可爱更像懂得运营自己的舞台感。"
  },
  {
    id: "hasu-ginko", seriesKey: "hasunosora", nameCn: "百生吟子", nameJp: "百生吟子", roman: "Ginko Momose", cv: "樱井阳菜",
    traits: "后辈 / 端正 / 传统气质", song: "Sparkly Spot", color: "#8BC8A9", focus: "把礼貌变成自己的节奏",
    avatar: "data/icon/516SR-Ginko-Momose-Trickster-jpmSvk.png",
    tip: "吟子作为后加入的后辈，身上有端正和传统气质；她的看点是从“该怎么做”慢慢走向“我想怎么做”。"
  },
  {
    id: "hasu-kosuzu", seriesKey: "hasunosora", nameCn: "徒町小铃", nameJp: "徒町小鈴", roman: "Kosuzu Kachimachi", cv: "叶山风花",
    traits: "后辈 / 认真 / 支撑型", song: "レディバグ", color: "#D9C86A", focus: "把小小的认真攒起来",
    avatar: "data/icon/325R-Kosuzu-Kachimachi-Cheerleader-5o1dyt.png",
    tip: "小铃给人的第一印象不是压倒性强，而是很会积累；这种“把小事做好”的角色，常在长期故事里后劲很足。"
  },
  {
    id: "hasu-hime", seriesKey: "hasunosora", nameCn: "安养寺姬芽", nameJp: "安養寺姫芽", roman: "Hime Anyoji", cv: "来栖凛",
    traits: "游戏感 / 新成员 / 明亮", song: "レディバグ", color: "#F09BC2", focus: "把胜负心调成可爱模式",
    avatar: "data/icon/449BR-Hime-Anyoji-Trickster-KXNuXd.png",
    tip: "姬芽的名字本身就很“公主”，又带一点游戏和胜负感；她让莲之空后辈组的气氛更跳、更亮。"
  },
  {
    id: "hasu-ceras", seriesKey: "hasunosora", nameCn: "赛拉斯·柳田·莉莉恩菲尔德", nameJp: "セラス 柳田 リリエンフェルト", roman: "Ceras Yanagida Lilienfeld", cv: "三宅美羽",
    traits: "Edel Note / 海外感 / 新风", song: "十六夜セレーネ", color: "#8F78D8", focus: "把陌生风景带进同一首歌",
    avatar: "data/icon/402R-Ceras-Yanagida-Lilienfeld-Moodmaker-n5XZ5B.png",
    tip: "赛拉斯名字里带着混血与海外感，和 Edel Note 相关气质很强；她像是把莲之空的边界又往外推了一步。"
  },
  {
    id: "hasu-izumi", seriesKey: "hasunosora", nameCn: "桂城泉", nameJp: "桂城泉", roman: "Izumi Katsuragi", cv: "进藤天音",
    traits: "Edel Note / 冷静 / 新成员", song: "十六夜セレーネ", color: "#88A7D8", focus: "让冷静成为新的光",
    avatar: "data/icon/397R-Izumi-Katsuragi-Trickster-ZyklVT.png",
    tip: "泉和赛拉斯同样让莲之空的成员关系变得更开阔；冷静型角色进入实时成长企划，会给节奏带来新层次。"
  },
  {
    id: "bluebird-polka", seriesKey: "bluebird", nameCn: "高桥波尔卡", nameJp: "高橋ポルカ", roman: "Polka Takahashi", cv: "叶山阳和",
    traits: "大阪 / 喜剧节奏 / 线上气氛担当", song: "What is my LIFE?", color: "#FF76B8", focus: "把气氛先打亮",
    avatar: "data/icon/高桥波尔卡.png",
    tip: "波尔卡这个名字自带节奏感，她在 BLUEBIRD 里适合承担“把线上房间热起来”的位置：先开口，大家就有地方接话。"
  },
  {
    id: "bluebird-mai", seriesKey: "bluebird", nameCn: "麻布麻衣", nameJp: "麻布麻衣", roman: "Mai Azabu", cv: "远藤璃菜",
    traits: "东京 / 时尚感 / 都会派", song: "What is my LIFE?", color: "#F35D7F", focus: "把体面整理好再出发",
    avatar: "data/icon/麻布麻衣.png",
    tip: "麻衣的名字和“麻布”放在一起很有都会感；她的小 tip 适合记成：越在意呈现，越需要把心情也整理干净。"
  },
  {
    id: "bluebird-akira", seriesKey: "bluebird", nameCn: "五桐玲", nameJp: "五桐玲", roman: "Akira Goto", cv: "宫野芹",
    traits: "名古屋 / 酷感 / 稳定输出", song: "What is my LIFE?", color: "#6AC3FF", focus: "把冷静变成可靠",
    avatar: "data/icon/五桐玲.png",
    tip: "玲的角色气质适合“话不多但可靠”的方向；线上企划里，这种稳定输出的人常常是气氛不会散掉的关键。"
  },
  {
    id: "bluebird-hanabi", seriesKey: "bluebird", nameCn: "驹形花火", nameJp: "駒形花火", roman: "Hanabi Komagata", cv: "来栖美优",
    traits: "秋田 / 烟火意象 / 爽朗", song: "What is my LIFE?", color: "#FF934F", focus: "把一瞬间点亮",
    avatar: "data/icon/驹形花火.png",
    tip: "“花火”这个名字本身就像舞台提示：不是一直喧闹，而是在对的瞬间啪地亮起来，让人记住那一下。"
  },
  {
    id: "bluebird-miracle", seriesKey: "bluebird", nameCn: "金泽奇迹", nameJp: "金沢奇跡", roman: "Miracle Kanazawa", cv: "坂野爱羽",
    traits: "金泽 / 幸运感 / 企划记忆点", song: "What is my LIFE?", color: "#FFD35C", focus: "把好运亲手做出来",
    avatar: "data/icon/金泽奇迹.png",
    tip: "奇迹的名字很直接，但这类角色最好看的地方不是等好运，而是把偶然变成“我做到了”的证据。"
  },
  {
    id: "bluebird-noriko", seriesKey: "bluebird", nameCn: "调布乃理子", nameJp: "調布のりこ", roman: "Noriko Chofu", cv: "濑古梨爱",
    traits: "福井 / 动画宅 / 声优志望", song: "What is my LIFE?", color: "#B56DFF", focus: "从推活里回血",
    avatar: "data/icon/调布乃理子.png",
    tip: "乃理子的设定和动画、声优志望连在一起，所以她不是泛泛的“宅”，而是会把推活变成自己继续努力燃料的人。"
  },
  {
    id: "bluebird-yukuri", seriesKey: "bluebird", nameCn: "春宫悠可里", nameJp: "春宮ゆくり", roman: "Yukuri Harumiya", cv: "奥村优季",
    traits: "梅田 / 芭蕾 / 剧场梦想", song: "What is my LIFE?", color: "#C6A0FF", focus: "把姿态带上舞台",
    avatar: "data/icon/春宫悠可里.png",
    tip: "悠可里的关键词里有芭蕾和剧场感，适合记成“先站稳再发光”的角色；姿态本身就是她的语言。"
  },
  {
    id: "bluebird-aurora", seriesKey: "bluebird", nameCn: "此花辉夜", nameJp: "此花輝夜", roman: "Kaguya Konohana", cv: "天泽朱音",
    traits: "梅田 / 美妆视频 / 镜头感", song: "What is my LIFE?", color: "#F6C85F", focus: "整理形象并面对镜头",
    avatar: "data/icon/此花辉夜.png",
    tip: "辉夜和美妆、镜头、呈现感放在一起很顺；她的冷知识可以记成：会打理自己，也是在学习怎么把自己交给观众。"
  },
  {
    id: "bluebird-midori", seriesKey: "bluebird", nameCn: "山田真绿", nameJp: "山田真緑", roman: "Midori Yamada", cv: "小户森穗花",
    traits: "梅田 / 环保 / 露营自然", song: "What is my LIFE?", color: "#31B56A", focus: "去自然里回血",
    avatar: "data/icon/山田真绿.png",
    tip: "真绿的名字和自然感很合，环保、户外、露营这些词放在她身上不突兀；她像是给线上企划留一扇窗。"
  },
  {
    id: "bluebird-shion", seriesKey: "bluebird", nameCn: "佐佐木翔音", nameJp: "佐々木翔音", roman: "Shion Sasaki", cv: "凉濑葵音",
    traits: "仙台 / 直播者 / 单人分部", song: "What is my LIFE?", color: "#2D4CFF", focus: "一个人也先开播",
    avatar: "data/icon/佐佐木翔音.png",
    tip: "翔音的线上存在感很强，特别适合网络时代的学园偶像语境：哪怕一个人开播，也是在寻找能回应自己的声音。"
  }
];

const REPRESENTATIVE_TRACKS = {
  "muse-honoka": {
    title: "Snow halation",
    display: "《Snow halation》(Center) / 《Someday of my life》(Solo)",
    audio: "assets/audio/representative/snow_halation.mp3"
  },
  "muse-eli": {
    title: "Angelic Angel",
    display: "《Angelic Angel》(Center) / 《ありふれた悲しみの果て》(Solo)",
    audio: "assets/audio/representative/angelic_angel.mp3"
  },
  "muse-kotori": {
    title: "Wonder zone",
    display: "《Wonder zone》(Center) / 《ぶる〜べりぃ♡とれいん》(Solo)",
    audio: "assets/audio/representative/wonder_zone.mp3"
  },
  "muse-umi": {
    title: "だってだって噫無情",
    display: "《だってだって噫無情》(Center) / 《私たちは未来の花》(Solo)",
    audio: "assets/audio/representative/daddeda_utamusaware.mp3"
  },
  "muse-rin": {
    title: "Love wing bell",
    display: "《Love wing bell》(Center) / 《恋のシグナルRin rin rin!》(Solo)",
    audio: "assets/audio/representative/love_wing_bell.mp3"
  },
  "muse-maki": {
    title: "Music S.T.A.R.T!!",
    display: "《Music S.T.A.R.T!!》(Center) / 《Daring!!》(Solo)",
    audio: "assets/audio/representative/music_start.mp3"
  },
  "muse-nozomi": {
    title: "Dancing stars on me!",
    display: "《Dancing stars on me!》(Center) / 《純愛レンズ》(Solo)",
    audio: "assets/audio/representative/dancing_stars.mp3"
  },
  "muse-hanayo": {
    title: "なわとび",
    display: "《なわとび》(Solo)",
    audio: "assets/audio/representative/watashino_nanohashi.mp3"
  },
  "muse-nico": {
    title: "夏色えがおで1,2,Jump!",
    display: "《夏色えがおで1,2,Jump!》(Center) / 《にこぷり♡女子道》(Solo)",
    audio: "assets/audio/representative/natsuiro_egaka.mp3"
  },
  "aqours-chika": {
    title: "君のこころは輝いてるかい？",
    display: "《君のこころは輝いてるかい？》(Center) / 《One More Sunshine Story》(Solo)",
    audio: "assets/audio/representative/kimi_no_kokoro.mp3"
  },
  "aqours-riko": {
    title: "想いよひとつになれ",
    display: "《想いよひとつになれ》(Center) / 《Pianoforte Monologue》(Solo)",
    audio: "assets/audio/representative/omoi_yo_hitotsu.mp3"
  },
  "aqours-kanan": {
    title: "HAPPY PARTY TRAIN",
    display: "《HAPPY PARTY TRAIN》(Center) / 《さかなかなんだか？》(Solo)",
    audio: "assets/audio/representative/happy_party_train.mp3"
  },
  "aqours-dia": {
    title: "MY Mai☆TONIGHT",
    display: "《MY Mai☆TONIGHT》(Center) / 《WHITE FIRST LOVE》(Solo)",
    audio: "assets/audio/representative/my_mai_tonight.mp3"
  },
  "aqours-you": {
    title: "恋になりたいAQUARIUM",
    display: "《恋になりたいAQUARIUM》(Center) / 《Beginner's Sailing》(Solo)",
    audio: "assets/audio/representative/koi_naru_aquarium.mp3"
  },
  "aqours-yoshiko": {
    title: "Deep Resonance",
    display: "《Deep Resonance》(Center) / 《in this unstable world》(Solo)",
    audio: "assets/audio/representative/deep_resonance.mp3"
  },
  "aqours-hanamaru": {
    title: "未体験HORIZON",
    display: "《未体験HORIZON》(Center) / 《おやす！你们》(Solo)",
    audio: "assets/audio/representative/mitaiken_horizon.mp3"
  },
  "aqours-mari": {
    title: "New winding road",
    display: "《New winding road》(Solo) / 《Shiny Racers》(Solo)",
    audio: "assets/audio/representative/new_winding_road.mp3"
  },
  "aqours-ruby": {
    title: "Awaken the power",
    display: "《Awaken the power》(双Center之一) / 《コットンキャンディえいえいおー！》(Solo)",
    audio: "assets/audio/representative/awaken_the_power.mp3"
  },
  "niji-yu": {
    title: "わちゅごなどぅー",
    display: "《わちゅごなどぅー》(合唱/核心)",
    audio: "assets/audio/representative/wachugonadu.mp3"
  },
  "niji-ayumu": {
    title: "夢への一歩",
    display: "《夢への一歩》(Solo) / 《Awakening Promise》(Solo)",
    audio: "assets/audio/representative/yume_e_no_ish.mp3",
    videoUrl: "https://b23.tv/ySIgWvz",
    videoTitle: "Dream with You"
  },
  "niji-kasumi": {
    title: "無敵級*Believer",
    display: "《無敵級*Believer》(Solo/首张动画PV) / 《ダイアモンド》(Solo)",
    audio: "assets/audio/representative/mutekikyuu_believer.mp3",
    videoUrl: "https://b23.tv/MK7HRES",
    videoTitle: "無敵級*ビリーバー"
  },
  "niji-shizuku": {
    title: "あなたの理想のヒロイン",
    display: "《あなたの理想のヒロイン》(Solo) / 《Solitude Rain》(Solo)",
    audio: "assets/audio/representative/anata_no_riso.mp3",
    videoUrl: "https://b23.tv/6Di1nVA",
    videoTitle: "Solitude Rain"
  },
  "niji-karin": {
    title: "Wake Up!!",
    display: "《Wake Up!!》(Solo)",
    audio: "assets/audio/representative/wake_up.mp3",
    videoUrl: "https://b23.tv/MjVSIM7",
    videoTitle: "VIVID WORLD"
  },
  "niji-ai": {
    title: "友&愛",
    display: "《友&愛》(Solo) / 《めっちゃ Going!!》(Solo)",
    audio: "assets/audio/representative/yuai.mp3",
    videoUrl: "https://b23.tv/Fr0Zfhp",
    videoTitle: "Circle of Love"
  },
  "niji-kanata": {
    title: "眠れる森に行きたいな",
    display: "《眠れる森に行きたいな》(Solo) / 《Butterfly》(Solo)",
    audio: "assets/audio/representative/nemeru_mori.mp3",
    videoUrl: "https://b23.tv/GFeNJBc",
    videoTitle: "Daydream Mermaid"
  },
  "niji-setsuna": {
    title: "CHASE!",
    display: "《CHASE!》(Solo) / 《DIVE!》(Solo)",
    audio: "assets/audio/representative/chase.mp3",
    videoUrl: "https://b23.tv/ZwJc5PX",
    videoTitle: "CHASE!"
  },
  "niji-emma": {
    title: "声繋ごうよ",
    display: "《声繋ごうよ》(Solo) / 《La Bella Patria》(Solo)",
    audio: "assets/audio/representative/voice_go_yo.mp3",
    videoUrl: "assets/video/representative/【中字渣翻】鬼头明里：请告诉亚玖璃你是艾玛推.mp4",
    videoTitle: "你毫无疑问"
  },
  "niji-rina": {
    title: "ドキピポ☆エモーション",
    display: "《ドキピポ☆エモーション》(Solo) / 《ツナガルコネクト》(Solo)",
    audio: "assets/audio/representative/dokipopo_emotion.mp3",
    videoUrl: "https://b23.tv/5RRjWdx",
    videoTitle: "ツナガルコネクト"
  },
  "niji-shioriko": {
    title: "決意の光",
    display: "《決意の光》(Solo) / 《Ketsui no Hikari》(Solo)",
    audio: "assets/audio/representative/ketsui_no_hikari.mp3",
    videoUrl: "https://b23.tv/DkeUlHr",
    videoTitle: "いとしき夢よ いざないて"
  },
  "niji-mia": {
    title: "I'm Still...",
    display: "《I'm Still...》(Solo) / 《New World》(Solo)",
    audio: "assets/audio/representative/im_still.mp3",
    videoUrl: "https://b23.tv/W8vCXbS",
    videoTitle: "Like a Treasure"
  },
  "niji-lanzhu": {
    title: "Queendom",
    display: "《Queendom》(Solo) / 《Eutopia》(Solo)",
    audio: "assets/audio/representative/queendom.mp3",
    videoUrl: "https://b23.tv/QtgLMHA",
    videoTitle: "Eutopia"
  },
  "liella-kanon": {
    title: "始まりは君の空",
    display: "《始まりは君の空》(Center) / 《Tiny Stars》(w/ 可可)",
    audio: "assets/audio/representative/hajimari_kimi_no_sora.mp3"
  },
  "liella-keke": {
    title: "Tiny Stars",
    display: "《Tiny Stars》(双人神曲) / 《Sukini Kuretai》(Solo)",
    audio: "assets/audio/representative/tiny_stars.mp3"
  },
  "liella-chisato": {
    title: "常夏☆サンシャイン",
    display: "《常夏☆サンシャイン》(Solo) / 《Memories》(Solo)",
    audio: "assets/audio/representative/natsukasa_sunshine.mp3"
  },
  "liella-sumire": {
    title: "ノンフィクション!!",
    display: "《ノンフィクション!!》(Center) / 《Galaxy》(Solo)",
    audio: "assets/audio/representative/nonfiction.mp3"
  },
  "liella-ren": {
    title: "Wish Song",
    display: "《Wish Song》(Center) / 《Stella!》(Solo)",
    audio: "assets/audio/representative/wish_song.mp3"
  },
  "liella-kinako": {
    title: "WE WILL!!",
    display: "《WE WILL!!》(参与) / 《Vitamin Summer!》(Solo)",
    audio: "assets/audio/representative/we_will.mp3"
  },
  "liella-mei": {
    title: "Sing！Shine！Smile！",
    display: "《Sing！Shine！Smile！》(参与) / 《Second Sparkle》(Solo)",
    audio: "assets/audio/representative/sing_shine_smile.mp3"
  },
  "liella-shiki": {
    title: "Sing！Shine！Smile！",
    display: "《Sing！Shine！Smile！》(参与) / 《Second Sparkle》(Solo)",
    audio: "assets/audio/representative/sing_shine_smile.mp3"
  },
  "liella-natsumi": {
    title: "ビタミンSUMMER！",
    display: "《ビタミンSUMMER！》(Center) / 《WE WILL!!》(参与)",
    audio: "assets/audio/representative/vitamin_summer.mp3"
  },
  "liella-wien": {
    title: "エーデルシュタイン",
    display: "《エーデルシュタイン》(Solo) / 《Butterfly Wing》(Solo)",
    audio: "assets/audio/representative/edelstein.mp3"
  },
  "liella-tomari": {
    title: "Jump Into the New World",
    display: "《Jump Into the New World》(参与) / 《New World》(Solo)",
    audio: "assets/audio/representative/jump_into_new_world.mp3"
  },
  "hasu-rurino": {
    title: "Kokon Tozai (104th Version)",
    display: "《Kokon Tozai (104th Version)》(Mira-Cra Park！)",
    audio: "assets/audio/representative/kokon_tozai_104th.mp3"
  }
};

const AVATAR_FOCUS = {
  "hasu-kozue": "left center",
  "bluebird-polka": "center 18%",
  "bluebird-mai": "center 18%",
  "bluebird-akira": "center 18%",
  "bluebird-hanabi": "center 18%",
  "bluebird-miracle": "center 18%",
  "bluebird-noriko": "center 18%",
  "bluebird-yukuri": "center 18%",
  "bluebird-aurora": "center 18%",
  "bluebird-midori": "center 18%",
  "bluebird-shion": "center 18%"
};

const RESULT_PORTRAITS = {
  "muse-honoka": ["50% 24%", 1],
  "muse-eli": ["38% 22%", 1],
  "muse-kotori": ["53% 24%", 1],
  "muse-umi": ["58% 22%", 1],
  "muse-rin": ["56% 20%", 1],
  "muse-maki": ["47% 22%", 1],
  "muse-nozomi": ["54% 22%", 1],
  "muse-hanayo": ["48% 22%", 1],
  "muse-nico": ["38% 22%", 1],
  "aqours-chika": ["44% 22%", 1],
  "aqours-riko": ["31% 24%", 1],
  "aqours-kanan": ["40% 20%", 0.85],
  "aqours-dia": ["59% 22%", 1],
  "aqours-you": ["55% 22%", 1],
  "aqours-yoshiko": ["35% 20%", 1],
  "aqours-hanamaru": ["40% 22%", 1],
  "aqours-mari": ["55% 20%", 1],
  "aqours-ruby": ["42% 22%", 1],
  "niji-yu": ["50% 22%", 1],
  "niji-ayumu": ["59% 22%", 1],
  "niji-kasumi": ["52% 22%", 1],
  "niji-shizuku": ["49% 22%", 1],
  "niji-karin": ["42% 20%", 1],
  "niji-ai": ["44% 22%", 1],
  "niji-kanata": ["43% 22%", 1],
  "niji-setsuna": ["54% 20%", 1],
  "niji-emma": ["45% 22%", 1],
  "niji-rina": ["36% 22%", 1],
  "niji-shioriko": ["54% 20%", 1],
  "niji-mia": ["61% 22%", 1],
  "niji-lanzhu": ["44% 20%", 1],
  "liella-kanon": ["36% 22%", 1],
  "liella-keke": ["49% 24%", 1],
  "liella-chisato": ["64% 20%", 1],
  "liella-sumire": ["36% 22%", 1],
  "liella-ren": ["80% 22%", 0.85],
  "liella-kinako": ["44% 22%", 1],
  "liella-mei": ["59% 22%", 1],
  "liella-shiki": ["40% 22%", 1],
  "liella-natsumi": ["49% 20%", 1],
  "liella-wien": ["36% 22%", 1],
  "liella-tomari": ["80% 22%", 0.85],
  "hasu-kaho": ["30% 20%", 1],
  "hasu-sayaka": ["46% 20%", 1],
  "hasu-kozue": ["0% 20%", 0.8],
  "hasu-tsuzuri": ["15% 20%", 0.8],
  "hasu-rurino": ["49% 22%", 1],
  "hasu-megumi": ["30% 20%", 0.85],
  "hasu-ginko": ["34% 22%", 1],
  "hasu-kosuzu": ["50% 22%", 1],
  "hasu-hime": ["18% 24%", 0.8],
  "hasu-ceras": ["50% 22%", 1],
  "hasu-izumi": ["54% 22%", 1],
  "bluebird-polka": ["50% 18%", 2],
  "bluebird-mai": ["50% 18%", 2],
  "bluebird-akira": ["50% 18%", 2],
  "bluebird-hanabi": ["50% 18%", 2],
  "bluebird-miracle": ["50% 18%", 2],
  "bluebird-noriko": ["50% 18%", 2],
  "bluebird-yukuri": ["50% 18%", 2],
  "bluebird-aurora": ["50% 18%", 2],
  "bluebird-midori": ["50% 18%", 2],
  "bluebird-shion": ["50% 18%", 2]
};

const FORTUNE_COPY = {
  "muse-honoka": ["别等所有人准备好。你先举手，队伍自然会有方向。", "把拖了最久的小事开个头，只做十分钟。"],
  "muse-eli": ["复杂的局面不怕，先把轻重缓急排成一列。", "删掉一项无效安排，再处理最影响结果的那件。"],
  "muse-kotori": ["真正的体贴藏在针脚里，细节会替你说话。", "替常用物件做一次小修补，也顺手关心一个人。"],
  "muse-umi": ["克制不是紧绷，而是知道力气该落在哪里。", "给自己设一个清楚的截止点，到点就收工。"],
  "muse-rin": ["脑内预演太久会失去节拍，身体先动就对了。", "离开座位走一圈，回来立即完成第一步。"],
  "muse-maki": ["没必要把会做的事藏成偶然，实力值得被听见。", "公开一项最近完成的作品，不补谦虚前缀。"],
  "muse-nozomi": ["有些相遇不用设计，留一点空位给缘分。", "联系那位突然想到的人，只说一句近况。"],
  "muse-hanayo": ["小小的喜欢经得住认真，它会长成可靠的力量。", "为自己的爱好留出半小时，不和效率交换。"],
  "muse-nico": ["专业感来自反复练习，不来自假装毫不费力。", "把一个常用动作练三遍，直到表情也跟得上。"],
  "aqours-chika": ["普通不是限制，它只是闪耀开始前的真实底色。", "记录身边一件值得夸的小事，然后告诉当事人。"],
  "aqours-riko": ["不安有自己的旋律，听清它就能写出下一小节。", "把担心写成三个短句，再为每句补一个对策。"],
  "aqours-kanan": ["往深处走之前先把呼吸放稳，你比想象中更能扛。", "做一组舒展，喝满一杯水，再回答棘手消息。"],
  "aqours-dia": ["规则若能保护热爱，就值得认真维护。", "整理一个混乱文件夹，命名方式从今天统一。"],
  "aqours-you": ["方向明确时，干净利落的一步胜过十次犹豫。", "选定路线后立刻出发，途中不反复改计划。"],
  "aqours-yoshiko": ["曾经尴尬的部分也能成为只属于你的招牌。", "讲一次自己的小黑历史，但把结尾说得漂亮。"],
  "aqours-hanamaru": ["慢一点翻页没关系，你正在把理解扎得更深。", "读完四页真正想读的内容，留下两行批注。"],
  "aqours-mari": ["任性若指向真心，就会变成突破僵局的推力。", "为想做的事提出一个大胆但具体的版本。"],
  "aqours-ruby": ["声音小不代表决心弱，认真会慢慢被看见。", "在群聊或会议里主动说出一条自己的意见。"],
  "niji-yu": ["喜欢说出口之后，才有机会遇见同频的人。", "把最近循环的一首歌分享给最懂你的朋友。"],
  "niji-ayumu": ["靠近梦想不需要跨越式表演，脚下这一格就够。", "把大目标拆成今天能完成的一步并勾掉。"],
  "niji-kasumi": ["想赢并不失礼，坦率的野心也可以很可爱。", "争取一次展示机会，别用玩笑把请求带过。"],
  "niji-shizuku": ["演好角色的前提，是先承认自己此刻的情绪。", "对着镜子说出真实感受，不评价它对不对。"],
  "niji-karin": ["聚光灯不会替你站稳，姿态由你自己决定。", "换上最有精神的一套衣服，挺直背走出门。"],
  "niji-ai": ["好气氛不是天生的，一句恰到好处的话就能打开。", "给沉默的聊天抛一个容易回答的问题。"],
  "niji-kanata": ["休息不是掉队，充满电的人才有余裕照顾别人。", "午后闭眼十五分钟，醒来只做一项重点任务。"],
  "niji-setsuna": ["热爱不必降温，但可以找到更耐久的燃烧方式。", "为最喜欢的事安排一段不被通知打断的时间。"],
  "niji-emma": ["温柔不是没有边界，而是让靠近的人感到安全。", "先问对方需不需要建议，再分享你的想法。"],
  "niji-rina": ["表达方式没有标准答案，能被理解就是好方法。", "用图片、文字或语音中最舒服的一种说明心情。"],
  "niji-shioriko": ["适合自己的道路不一定热闹，但会越走越清楚。", "拒绝一个不合适的邀约，把时间还给自己。"],
  "niji-mia": ["天赋不是省略过程的借口，完成品仍要经得住推敲。", "把作品从头听或读一遍，只修最刺耳的三处。"],
  "niji-lanzhu": ["自信不需要等掌声批准，你可以先为自己鼓掌。", "完成后直接说我做得不错，不追加自我否定。"],
  "liella-kanon": ["害怕和想唱可以同时存在，声音会在途中变稳。", "先做一次不求漂亮的试录，保留它不要删除。"],
  "liella-keke": ["喜欢拥有推进现实的力气，热情也能成为行动表。", "为最想实现的企划写下第一条可执行事项。"],
  "liella-chisato": ["完整不是没有缺口，而是每一段都找到自己的弧度。", "收尾一件做到八成的事，不再追加新要求。"],
  "liella-sumire": ["不甘心很诚实，把它带上舞台比藏起来更有用。", "复盘一次落选或失误，只记录下次能改的两点。"],
  "liella-ren": ["珍惜传统不等于停在原地，接力本身就是更新。", "向长辈或前辈请教一个旧做法，并写下你的改法。"],
  "liella-kinako": ["陌生会慢慢退潮，允许自己从不熟练开始。", "独自去一家没去过的小店，点最想试的东西。"],
  "liella-mei": ["藏得太深的喜欢会变成别扭，直说反而轻松。", "认真夸一次朋友，具体说出你欣赏的地方。"],
  "liella-shiki": ["观察能带来答案，但别忘了把心也放进结论。", "列完利弊后，再写一句你真正更想选择什么。"],
  "liella-natsumi": ["现实感不是扫兴，它能把灵感做成真的企划。", "给一个点子补上时间、成本和最小版本。"],
  "liella-wien": ["强大不只属于独奏，愿意合唱也是一种成熟。", "向可靠的人求助一次，把需求说得明确。"],
  "liella-tomari": ["冷静让事情落地，余地让同伴愿意一起走。", "计划里空出二十分钟缓冲，不把行程塞满。"],
  "hasu-kaho": ["花不会因为开得晚就失去春天，先照顾眼前这朵。", "完成一件能立刻改善环境的小事，比如换水或通风。"],
  "hasu-sayaka": ["重复不会辜负你，动作会在某一遍突然变轻。", "把最不顺的部分单独练五次，而不是整套重来。"],
  "hasu-kozue": ["可靠不是把一切揽下，懂得分配也是前辈的从容。", "交出一项别人能完成的任务，并说明判断标准。"],
  "hasu-tsuzuri": ["你的节奏无需翻译成所有人的速度，保持准确就好。", "关掉背景噪音，按自己的顺序完成一件作品。"],
  "hasu-rurino": ["电量低时先充电，硬撑出来的热闹不会长久。", "暂停社交半小时，吃点东西再决定下一站。"],
  "hasu-megumi": ["镜头前的笑容也需要被真实生活重新点亮。", "今天拍一张不发布的照片，只留给自己。"],
  "hasu-ginko": ["礼貌是起点，不必把个性也一起收进鞘里。", "在得体的答案后面，多补一句你的真实偏好。"],
  "hasu-kosuzu": ["细小的认真会在关键时刻托住整个舞台。", "提前检查一次明天要用的物品，缺什么现在补。"],
  "hasu-hime": ["胜负心可以很明亮，享受过程不会削弱认真。", "给正在挑战的事设一个好玩的奖励条件。"],
  "hasu-ceras": ["陌生风景进入同一首歌，会让熟悉的旋律长出新边。", "尝试一种平时不用的表达方式，先做小样。"],
  "hasu-izumi": ["冷静不是退后，它让光线更集中。", "回应之前停三次呼吸，把最重要的一句放开头。"],
  "bluebird-polka": ["先把场子点亮的人，也有权决定自己的节奏。", "准备一个能让大家接话的开场，不独自撑全场。"],
  "bluebird-mai": ["体面不是伪装，是对自己选择的认真整理。", "清理包里不用的东西，再补上真正需要的那件。"],
  "bluebird-akira": ["可靠往往没有大动作，它藏在稳定的每次回应里。", "把答应过的一件小事按时交付，不临时加戏。"],
  "bluebird-hanabi": ["一瞬间也值得全力点亮，短暂不等于轻薄。", "抓住一个突发好念头，立即留下照片或备忘。"],
  "bluebird-miracle": ["好运不是等来的特效，它更像亲手布置的舞台。", "为期待的结果提前准备一个可用的条件。"],
  "bluebird-noriko": ["推活带来的能量是真的，别为快乐寻找辩护。", "重看一段最喜欢的现场，把手机调成勿扰。"],
  "bluebird-yukuri": ["姿态会先于语言抵达观众，身体知道你是否相信自己。", "站稳脚跟做三次深呼吸，再进入重要场合。"],
  "bluebird-aurora": ["面对镜头时不必完美，清楚自己想呈现什么更重要。", "拍三张不同角度，只选最像自己的那张。"],
  "bluebird-midori": ["自然不会催你回复，离开屏幕才能听见自己的速度。", "去户外走二十分钟，不戴耳机。"],
  "bluebird-shion": ["一个人开播也算正式开始，回声会在之后出现。", "发布一个最小版本，不等待完整设备和最佳时机。"]
};

const FORTUNE_META = {
  "muse-honoka": [["晨光先起", "众声随后"], "先做的愿望最容易找到同路人。", "主动招呼，冷场会被你的笑声打破。", "向热闹处走，临时改道也有惊喜。", "先答会做的题，思路会越写越顺。"],
  "muse-eli": [["冰面映光", "步步成章"], "把目标排出次序，最难的一项会先松动。", "讲清边界比勉强答应更受尊重。", "按计划出发，提前十分钟最从容。", "整理框架之后，细节自然归位。"],
  "muse-kotori": [["轻羽落肩", "针脚藏春"], "耐心修整的小愿望会呈现漂亮轮廓。", "温柔回应能接住一份没说完的心意。", "适合慢慢逛，在小店遇见好物。", "把笔记重新誊清，遗漏会自己露面。"],
  "muse-umi": [["弦音定心", "碧波守约"], "守住今日约定，所求会沿直线靠近。", "坦率提醒胜过默默承担全部。", "路线宜简，轻装会让脚步更稳。", "定时专注一轮，难点可一举拿下。"],
  "muse-rin": [["风追足尖", "笑跃晴空"], "动起来之后，想要的答案就在前方。", "一起做点有趣的事，比客套更亲近。", "适合步行和运动，转角会遇见新鲜事。", "边写边讲给自己听，记忆格外牢。"],
  "muse-maki": [["琴键含火", "红音破云"], "拿出真正水平，愿望会得到认真回应。", "别把关心藏进反话，直说更动人。", "独自出发也顺利，音乐会陪你走完全程。", "挑最挑剔的标准检查一次，作品会更亮。"],
  "muse-nozomi": [["星牌相引", "紫缘成环"], "不强求路径，绕来的机会反而更合心。", "久未联系的人会带来温暖回应。", "跟随直觉选方向，小偏离值得保留。", "把零散线索连起来，答案藏在关联里。"],
  "muse-hanayo": [["稻香入梦", "微愿生芽"], "认真照料的小愿望会悄悄长大。", "分享真正喜欢的事，会遇见懂你的人。", "去熟悉的地方最安心，也容易收获善意。", "慢读胜过扫过，今天适合吃透一页。"],
  "muse-nico": [["粉光登台", "笑意成星"], "把标准拉高一点，愿望会更接近理想造型。", "真诚夸奖别人，你的可爱也会被看见。", "适合去人多的场合，镜头运尤其好。", "反复练习同一小节，完成度会明显上升。"],
  "aqours-chika": [["橙阳越海", "普通发亮"], "从手边开始，平凡愿望也能掀起浪花。", "热情邀请一次，会有人愿意并肩。", "海风方向有好运，开阔路线最舒心。", "把问题当成第一次遇见，旧方法会有新解。"],
  "aqours-riko": [["樱声入谱", "潮汐和弦"], "把不安写下来，所愿便有了清晰旋律。", "安静倾听能换来一次真心坦白。", "适合文化场馆和安静街区，灵感会停驻。", "先列关键词再展开，长内容也能写顺。"],
  "aqours-kanan": [["深蓝换气", "拥抱靠岸"], "稳住呼吸再发力，愿望能越过深水。", "给人一个可靠回应，关系会更结实。", "亲水路线吉，注意休息就能尽兴。", "难题分段处理，每一段都比想象中轻。"],
  "aqours-dia": [["朱扇守礼", "赤心不移"], "遵循真正重要的规则，所求不会走偏。", "礼貌中保留直率，误会能及时止住。", "提前确认时间和票据，行程十分顺畅。", "按目录逐项复习，薄弱处会清楚显现。"],
  "aqours-you": [["白帆敬礼", "蓝线直航"], "选定方向立刻启程，愿望会加速靠港。", "爽快答复能赢得一份新的信任。", "交通运佳，越早出门越有余裕。", "先完成再微调，效率会带来好成绩。"],
  "aqours-yoshiko": [["黑羽遮月", "堕光成咒"], "大胆命名你的愿望，它会变成独门法术。", "展示真实怪趣味，反而能找到同类。", "夜景和小巷有灵感，记得结伴而行。", "用故事记知识点，古怪联想特别有效。"],
  "aqours-hanamaru": [["书页生风", "花丸见晴"], "慢慢读懂自己的心，愿望便不会写错。", "一句朴实关心，胜过华丽客套。", "书店与旧街最吉，适合留一点空白时间。", "温故会发现新意，旧笔记值得重看。"],
  "aqours-mari": [["紫浪飞吻", "闪耀越界"], "把大胆版本先说出口，愿望才有登场机会。", "热烈表达不会过量，今天适合主动拥抱。", "高处和远景带来好运，行程可以奢侈一点。", "换种语言或媒介学习，理解会突然打开。"],
  "aqours-ruby": [["红石微响", "勇气渐明"], "小声许下的愿望也会被认真听见。", "先说一句自己的意见，大家会温柔接住。", "和熟人同行最安心，途中有可爱收获。", "少量多次地复习，信心会一点点积满。"],
  "niji-yu": [["一声喜欢", "万色相逢"], "把喜欢说清楚，愿望会找到合适舞台。", "真心推荐会开启一段愉快对话。", "跟着音乐去新的地方，路上不会无聊。", "从兴趣切入难题，专注会自然延长。"],
  "niji-ayumu": [["粉路向前", "步步开花"], "每天靠近一点，远愿也会变成近景。", "稳定陪伴会得到同样温柔的回应。", "熟悉路线最吉，途中适合买束小花。", "按自己的节奏积累，不必追赶别人的页数。"],
  "niji-kasumi": [["霞光抢镜", "可爱夺冠"], "堂堂正正争取，愿望才知道该落向哪里。", "撒娇之外再加一句认真，效果最好。", "适合热闹商圈，意外发现很上镜的角落。", "设置小胜负，枯燥练习也会变有趣。"],
  "niji-shizuku": [["幕启见心", "真情入戏"], "承认真正所想，愿望才能演到结局。", "说出此刻感受，会换来更深的理解。", "剧场和展馆有好运，独行也能充实。", "代入具体情境，抽象内容会立刻鲜活。"],
  "niji-karin": [["红毯落步", "目光成冠"], "以最好姿态出现，愿望会主动看向你。", "保持分寸与自信，欣赏自然靠近。", "精心打扮后出门，目的地会有好消息。", "先展示成果再解释过程，更容易获得认可。"],
  "niji-ai": [["橙笑破冰", "双关开门"], "让气氛先亮起来，愿望会趁热加入。", "主动抛出轻松话题，新朋友很快接球。", "结伴出行最旺，临时聚会值得参加。", "把知识编成俏皮口诀，记得快也记得久。"],
  "niji-kanata": [["云枕充电", "梦醒花开"], "休息充足之后，愿望会用更省力的方式抵达。", "允许彼此安静相处，关系反而更亲密。", "短途慢游最合适，不宜塞满景点。", "睡饱再学，半小时胜过疲惫硬撑两小时。"],
  "niji-setsuna": [["赤焰高歌", "热爱不熄"], "集中火力投入一次，愿望会被热量点燃。", "分享热爱时留出回应空间，同伴会更投入。", "演出与活动场所大吉，记得提前补水。", "用最喜欢的主题练习，难度会失去威吓。"],
  "niji-emma": [["绿野拥抱", "故乡来风"], "用温柔方式坚持，愿望会在安心中成熟。", "先接住情绪再谈办法，彼此都更轻松。", "公园与郊外有好运，适合带上小点心。", "与同伴互相讲解，理解会变得扎实。"],
  "niji-rina": [["表情成屏", "心声连线"], "选择舒服的表达方式，愿望一样能被识别。", "用文字补充没说完的话，沟通格外准确。", "科技馆和安静室内场所最合拍。", "把步骤画成流程，复杂知识会变得清晰。"],
  "niji-shioriko": [["翠叶择路", "适性成光"], "选择真正适合的方向，愿望会减少绕行。", "拒绝不合适的请求，反而能守住好关系。", "按目的安排路线，少去一站会更满意。", "先确认擅长与短板，再决定投入顺序。"],
  "niji-mia": [["银拍落键", "天才复写"], "让作品经得住重听，愿望会以完成品回应。", "少一点逞强，多一次合作会有新火花。", "城市夜行有灵感，耳机音量记得放低。", "挑战高难题吉，但要留下检查时间。"],
  "niji-lanzhu": [["金光满格", "掌声先响"], "先认可自己，愿望便不再等待许可。", "坦率欣赏别人，自信不会因此减少。", "去最想去的地方，别用随便替代选择。", "瞄准最高目标，分阶段完成也算漂亮。"],
  "liella-kanon": [["歌穿胆怯", "涩谷回声"], "允许声音颤抖，愿望仍会听见完整旋律。", "说出紧张会得到温柔鼓励，不必独撑。", "熟悉街区有新发现，适合边走边哼歌。", "先交不完美初稿，修改比空想更有力量。"],
  "liella-keke": [["星从上海", "热爱启程"], "把热情写成第一步，愿望会立刻启动。", "热烈邀请很有感染力，会有人愿意加入。", "跨城与远行运佳，准备清单能减少慌乱。", "用喜欢的作品作例子，知识会记得更牢。"],
  "liella-chisato": [["白丸成环", "舞步无缺"], "把最后一段收圆，愿望便得到完整形状。", "轻松陪练会让彼此都更有信心。", "适合绕行散步，圆形路线会带来好心情。", "补齐遗漏比开启新章更有收获。"],
  "liella-sumire": [["银河转身", "聚光正中"], "把不甘心化成准备，愿望会给你主角位。", "别用玩笑掩住认真请求，对方会郑重回应。", "镜头与舞台运佳，临场变化也能接住。", "复盘一次失误，下一次表现会明显翻盘。"],
  "liella-ren": [["青藤续章", "旧谱新声"], "珍惜来处也敢于更新，愿望会接上未来。", "向前辈请教吉，也别忘了表达自己的判断。", "文化古迹与校园路线有好运。", "先理解原理再记结论，知识不会轻易松动。"],
  "liella-kinako": [["北风入城", "新芽认路"], "允许陌生存在，愿望会慢慢熟悉你的名字。", "礼貌求助一次，会得到超出预期的照顾。", "探索新店大吉，保留返程时间即可。", "从基础问题问起，进度会越来越顺。"],
  "liella-mei": [["红心解锁", "直声穿墙"], "把喜欢从心里放出来，愿望会停止绕圈。", "具体夸奖一个人，关系会快速升温。", "与朋友同行最旺，适合去共同喜欢的地方。", "大声读出重点，难记内容会变清楚。"],
  "liella-shiki": [["蓝镜观心", "数据有温"], "理性分析之后听一听偏爱，愿望才会完整。", "把观察到的体贴说出来，对方会很惊喜。", "路线可精确规划，也要允许一次临时停留。", "实验与验证运佳，记录细节会得到答案。"],
  "liella-natsumi": [["金算盘响", "企划开场"], "补齐现实条件，愿望就能从点子变项目。", "说清资源和回报，合作会更爽快。", "消费前做一次比较，能买到真正合适的东西。", "给目标设最小版本，今天就能完成一轮。"],
  "liella-wien": [["白雪独唱", "合声融冰"], "接受一次并肩，愿望会拥有更宽的音域。", "明确求助并不削弱强大，反而显得可靠。", "独行与结伴都顺，关键是提前说好节奏。", "把高标准拆成步骤，压力会转成进步。"],
  "liella-tomari": [["冬线清明", "余白可行"], "计划留有空隙，愿望才有落地空间。", "冷静说明理由，比简短拒绝更容易被理解。", "行程不宜过密，缓冲时间会救场。", "先处理必要项，额外任务留到完成之后。"],
  "hasu-kaho": [["花苞见日", "今朝先开"], "照顾眼前一朵，愿望会从最近处开放。", "分享一点小快乐，会收获自然的笑脸。", "有花草的地方最吉，适合轻松散步。", "先完成能看见结果的一题，状态会被带起来。"],
  "hasu-sayaka": [["冰刃复练", "动作生辉"], "专注磨好一处，愿望会在重复中发亮。", "认真回应约定，会让伙伴十分安心。", "按时出发最吉，运动前后注意伸展。", "专项练习有效，别把时间耗在已经会的部分。"],
  "hasu-kozue": [["梢头承露", "从容分光"], "懂得分配力量，愿望会稳稳保持优雅。", "给同伴清楚标准，也给她发挥空间。", "正式场合运佳，提前准备便无须紧张。", "先搭完整结构，再润色细节最省力。"],
  "hasu-tsuzuri": [["雾中自舞", "节拍唯一"], "相信自己的速度，愿望会按准确节奏出现。", "无需解释所有沉默，懂你的人会留下。", "避开嘈杂路线，安静空间更容易遇见灵感。", "按个人顺序完成，跳步反而会打乱思路。"],
  "hasu-rurino": [["黄灯回满", "笑声重启"], "先把能量补回来，愿望才有持续电力。", "暂停回应并不失礼，恢复后再相见更快乐。", "短距离出行最适合，累了就及时返程。", "分两轮完成任务，中间休息会提高准确率。"],
  "hasu-megumi": [["镜头含笑", "本心上镜"], "先让自己快乐，愿望会呈现最好表情。", "不营业的一面也值得被朋友喜欢。", "拍照运佳，随手记录比精心摆拍更自然。", "用录音复述重点，听回去会发现遗漏。"],
  "hasu-ginko": [["银铃守礼", "真声出鞘"], "在得体之外加上偏爱，愿望会更像你。", "礼貌表达不同意见，反而能建立信任。", "传统街区与安静小店有好运。", "先照规范完成，再加入自己的理解。"],
  "hasu-kosuzu": [["小铃积响", "认真成阵"], "把细节逐一备齐，愿望会在关键处托住你。", "及时确认小事，会减少彼此的不安。", "出门前检查随身物品，整日都会顺手。", "提前十分钟复习，临场会更有底气。"],
  "hasu-hime": [["粉局开赛", "乐胜同场"], "把挑战变得好玩，愿望会更愿意坚持到底。", "友好竞争能让关系升温，记得真心庆祝。", "游戏场与活动展区运佳，排队也有趣事。", "设置即时奖励，长任务会更容易推进。"],
  "hasu-ceras": [["异乡入歌", "新边成韵"], "带入陌生视角，愿望会长出新的轮廓。", "分享不同习惯，会开启一场有趣交换。", "没走过的路线大吉，先确认返程方式。", "尝试新的表达媒介，理解会突破旧边界。"],
  "hasu-izumi": [["泉面无波", "光束更清"], "先安定心绪，愿望会显出真正重点。", "把最重要的一句放在开头，沟通会更顺。", "安静路线最吉，少一点绕行更舒服。", "删去干扰信息，核心答案很快出现。"],
  "bluebird-polka": [["彩声开场", "全场接拍"], "主动点亮气氛，愿望会获得第一束灯。", "准备一个好接的话题，大家都会轻松加入。", "聚会与展会运佳，但别独自承担全部安排。", "先讲给别人听，知识会在互动中变牢。"],
  "bluebird-mai": [["衣角齐整", "步履有光"], "认真整理外在，愿望会感到你的郑重。", "体面表达需求，不必用迁就换和平。", "轻装出发最顺，包内留出收获的位置。", "桌面清爽之后，注意力会明显集中。"],
  "bluebird-akira": [["静灯长明", "回应可靠"], "稳定完成承诺，愿望会相信你的耐心。", "按时回复一件小事，会积累很深的信任。", "固定路线最稳，预留时间可避开匆忙。", "持续完成基础题，正确率会悄悄上升。"],
  "bluebird-hanabi": [["花火一闪", "此刻成诗"], "抓住最亮的一瞬，愿望不必等待漫长铺垫。", "即时分享喜悦，会得到同样鲜明的回应。", "夜景与节庆场所大吉，注意保管随身物品。", "灵感出现就立即记下，稍后再整理结构。"],
  "bluebird-miracle": [["奇迹布景", "好运亲制"], "先准备一个条件，愿望会找到登场入口。", "把机会告诉同伴，好事会成倍扩散。", "临时邀约有惊喜，确认安全后可以出发。", "主动寻找例题，抽象概念会迅速落地。"],
  "bluebird-noriko": [["应援回响", "电量复苏"], "允许快乐为你充电，愿望会恢复鲜活颜色。", "分享推活瞬间，很容易遇见同担。", "去喜欢的活动地点最旺，记得量力消费。", "用喜爱的角色作记忆锚点，复习会更轻松。"],
  "bluebird-yukuri": [["足尖定场", "身姿先言"], "先站稳再开口，愿望会相信你的气势。", "保持眼神与姿态，沉默也能传达尊重。", "正式场合和拍摄地点运佳，鞋子要舒适。", "起身演练一次，比坐着默背更有效。"],
  "bluebird-aurora": [["极光入镜", "真我成像"], "明确想呈现的自己，愿望会自动对焦。", "少一点迎合，真实形象更容易被记住。", "摄影与展览路线大吉，光线会格外友好。", "对照成品找差距，下一次调整会很精准。"],
  "bluebird-midori": [["绿风离屏", "山色回血"], "离开喧闹片刻，愿望会恢复自己的速度。", "一起散步比隔屏聊天更容易靠近。", "公园与水边路线最吉，天气合适就出门。", "换到自然光下阅读，疲惫感会减轻。"],
  "bluebird-shion": [["独声开播", "回音将至"], "先发布最小版本，愿望会在上线后继续完善。", "主动开场会引来第一位认真听众。", "一个人出发也顺利，及时分享位置即可。", "先完成能运行的答案，再逐步补足细节。"]
};

window.LL_CHARACTERS = rawCharacters.map((character, index) => {
  const seriesInfo = LL_SERIES_INFO[character.seriesKey];
  const [fortuneLine, todayAction] = FORTUNE_COPY[character.id] || [];
  const [poemLines, wishFortune, peopleFortune, travelFortune, studyFortune] = FORTUNE_META[character.id] || [];
  const resultPortrait = RESULT_PORTRAITS[character.id];
  return {
    ...character,
    series: seriesInfo.label,
    seriesColor: seriesInfo.color,
    seriesColor2: seriesInfo.color2,
    audio: character.audio || `assets/audio/${character.id}.mp3`,
    representative: REPRESENTATIVE_TRACKS[character.id] || null,
    avatarPosition: character.avatarPosition || AVATAR_FOCUS[character.id] || "center center",
    avatarZoom: character.seriesKey === "bluebird" ? 2.25 : 1,
    resultPortraitFit: resultPortrait ? "cover" : "contain",
    resultPortraitPosition: resultPortrait?.[0] || "center center",
    resultPortraitScale: resultPortrait?.[1] || 1,
    luckyMode: character.focus,
    trivia: character.tip,
    slipNo: `第 ${String(index + 1).padStart(2, "0")} 签`,
    fortuneRank: "大吉",
    poemLines,
    oracle: fortuneLine,
    wishFortune,
    peopleFortune,
    travelFortune,
    studyFortune,
    todayAction
  };
});

window.LL_SERIES = Object.entries(LL_SERIES_INFO).map(([key, item]) => ({
  key,
  ...item
}));
