// LoveLive! omikuji data. Keep this file UTF-8.
const LL_SERIES_INFO = {
  muse: {
    label: "μ's",
    jp: "μ's",
    short: "缪斯",
    cover: "data/covers/muse.jpg",
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
    cover: "data/covers/aqours.jpg",
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
    cover: "data/covers/nijigasaki.jpg",
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
    cover: "data/covers/liella.jpg",
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
    cover: "data/covers/hasunosora.jpg",
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
    cover: "data/covers/bluebird.jpg",
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

function makeFortuneText(character, seriesInfo) {
  const name = character.nameCn;
  const focus = character.focus;
  const seriesTheme = seriesInfo.theme;
  return {
    intro: `${name} 的关键词是“${focus}”。放在 ${seriesInfo.label} 的语境里，她的魅力不是单点标签，而是会把自己的节奏交给舞台、同伴和观众回应。\n${seriesTheme}`,
    lucky: `此签落在“${focus}”。今天可以借一点 ${name} 的方式：先做一个能被看见的小动作，再让后续自然接上。好运不一定轰轰烈烈，但会从你愿意开始的地方冒出来。`,
    oracle: `断曰：此签主“${focus}”。不急着求满分，先把最想完成的一步稳稳落下，今日之吉会自己显形。`,
    wishFortune: `愿望：顺着“${focus}”去做，先让愿望拥有一个具体动作。`,
    peopleFortune: `待人：多一点回应感。留言、问候、把感谢说清楚，都会让关系更顺。`,
    travelFortune: `出行：适合去熟悉但能放松的地方；路不必远，心情要能换气。`,
    studyFortune: `学业：把碎片信息整理成笔记，今天适合收束，不宜发散。`
  };
}

function makePoem(character) {
  const focus = (character.focus || "心愿").replace(/[，。、“”]/g, "");
  return [
    `今朝逢${character.nameCn}`,
    `一念${focus.slice(0, 4)}成星`,
    "同伴自有回音",
    "所愿终得其时"
  ];
}

window.LL_CHARACTERS = rawCharacters.map((character) => {
  const seriesInfo = LL_SERIES_INFO[character.seriesKey];
  const fortune = makeFortuneText(character, seriesInfo);
  return {
    ...character,
    series: seriesInfo.label,
    seriesColor: seriesInfo.color,
    seriesColor2: seriesInfo.color2,
    audio: character.audio || `assets/audio/${character.id}.mp3`,
    representative: REPRESENTATIVE_TRACKS[character.id] || null,
    avatarPosition: character.avatarPosition || AVATAR_FOCUS[character.id] || "center center",
    luckyMode: character.focus,
    trivia: character.tip,
    poemLines: makePoem(character),
    ...fortune
  };
});

window.LL_SERIES = Object.entries(LL_SERIES_INFO).map(([key, item]) => ({
  key,
  ...item
}));
