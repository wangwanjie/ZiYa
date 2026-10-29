/* 字芽主页脚本：三语、三态主题、翻字卡、首屏逐笔书写动画、滚动渐入 */
(function () {
  'use strict';

  var doc = document.documentElement;
  doc.classList.add('js');

  // ---------- 文案 ----------
  var I18N = {
    'zh-CN': {
      pageTitle: '字芽 ZiYa · 陪孩子一字一字认汉字',
      pageDesc: '字芽是给孩子的中文识字 App：楷体大字、拼音、组词造句朗读和笔顺动画，3500 个字从启蒙排到六年级。离线可用、无广告，支持 iPhone、iPad 与 Mac。',
      skip: '跳到正文', navAria: '页面导航', langAria: '语言', themeAria: '主题', ghAria: '在 GitHub 上查看', footAria: '页脚链接',
      'theme.light': '浅色', 'theme.dark': '深色', 'theme.system': '跟随系统',
      'nav.cards': '翻字卡', 'nav.learn': '怎么学', 'nav.parents': '给家长', 'nav.download': '下载',
      'hero.eyebrow': '中文识字启蒙 · iPhone / iPad / Mac',
      'hero.title': '一字一芽，<br>慢慢长大',
      'hero.lead': '字芽陪孩子认识常用汉字：看大大的楷体字，听读音、组词和造句，再看字形一笔一笔描出来。3500 个字从启蒙排到六年级，不联网、没有广告，家长可以放心交给孩子。',
      'hero.btnMac': '下载 Mac 版', 'hero.btnIOS': 'iPhone / iPad 安装说明',
      'hero.meta': '版本 1.2 · 免费 · 离线可用 · macOS 12+ · iOS 14.8+',
      'hero.replay': '再写一遍',
      'hero.artAria': '汉字「芽」按笔顺逐笔书写，写完后长出一棵小芽',
      'hero.stroke': '「芽」第 {n} 笔，共 7 笔',
      'hero.done': '芽 yá · 发芽 —— 写好啦，长出一棵小芽',
      'cards.kicker': '翻一翻', 'cards.title': '点一点字卡，看看背面',
      'cards.lead': '下面的字、组词和造句都来自字芽的字库。正面是字，背面是拼音、组词和一句小句子。',
      'cards.word': '组词', 'cards.sentence': '造句', 'cards.hint': '点我翻面', 'cards.aria': '字卡「{c}」，点击翻面',
      'learn.kicker': '学一个字', 'learn.title': '看字、听音、看笔顺，一次只学一个字',
      'learn.s1t': '看大字', 'learn.s1': '楷体大字配上拼音，字形规范清楚，适合刚开始认字的眼睛。',
      'learn.s2t': '听读音', 'learn.s2': '依次朗读字、组词和造句，可以重听，也可以慢速播放。部分常用字配有自然人声读音（AI 语音合成），其余使用系统离线语音。',
      'learn.s3t': '看笔顺', 'learn.s3': '朗读结束后自动播放笔顺动画，速度可以调，也可以关掉。',
      'learn.s4t': '记下来', 'learn.s4': '学过的字进入复习，隔一段时间再出现一次，慢慢记牢。',
      'learn.alt': '字芽 Mac 版学习页：大字「猫」、拼音 māo、组词小猫和造句',
      'lib.kicker': '字库', 'lib.title': '3500 个字，从启蒙排到六年级',
      'lib.lead': '按年级分成 46 个学习单元，也可以按身体、动物、植物、饮食、自然等 100 多个主题来学。字库页能用汉字、拼音或组词搜索，并按「未学 / 学习中 / 已会」筛选。',
      'lib.st1': '个常用字', 'lib.st2': '个学习单元', 'lib.st3': '个阶段：启蒙 + 一至六年级', 'lib.st4': '个主题分类',
      'lib.alt1': '分类页：按年级分组的学习单元', 'lib.alt2': '字库页：按年级与掌握状态筛选 3500 个字',
      'rev.kicker': '复习与小测', 'rev.title': '学过的字，隔几天再见一面',
      'rev.t1': '打乱复习', 'rev.p1': '把到期和学过的字打乱，从头到尾过一遍；也可以按类别或年级复习。',
      'rev.t2': '听音选字', 'rev.p2': '听读音，从几个字里选出对的那个。家长先定好题量（5–50 题）和难度（基础 / 进阶 / 挑战），题目只从孩子学过的字里出。',
      'rev.t3': '不急着纠错', 'rev.p3': '答错先记下来，不当场打断；做完一轮再一起看错题。',
      'rev.t4': '成长报告', 'rev.p4': '学了多少字、哪些还在学、哪些已经会了，错题记录也能回看。',
      'rev.alt1': '复习页：打乱复习、按类别或按年级复习', 'rev.alt2': '听音选字设置：题量、难度与错题讲解方式',
      'par.kicker': '给家长', 'par.title': '安静、干净，放心交给孩子',
      'par.t1': '离线使用', 'par.p1': '不需要账号，也不需要联网。学习记录只保存在这台设备上，不会上传。',
      'par.t2': '没有广告和内购', 'par.p2': '打开就是学习，没有广告，也没有付费解锁。',
      'par.t3': '楷体规范字', 'par.p3': '识字页使用系统楷体，笔画起收清楚，贴近课本字形。',
      'par.t4': '家长中心', 'par.p4': '设定每日学习目标、考试题量和复习方式，进度一目了然。',
      'par.t5': '五套皮肤', 'par.p5': '春芽、水墨、海屿、糖果、星夜，挑一个孩子喜欢的颜色。',
      'par.t6': 'Mac 上用键盘', 'par.p6': '空格播放或暂停，左右方向键换字，⌘F 查字，大屏幕陪读更方便。',
      'dl.kicker': '下载', 'dl.title': '免费下载',
      'dl.lead': '字芽没有在应用商店上架，安装包放在 GitHub 上分享。当前版本 1.2。',
      'dl.macT': 'Mac 版',
      'dl.mac1': '通用版本，Apple 芯片和 Intel 芯片的 Mac 都能用',
      'dl.mac2': '需要 macOS 12 或更新版本',
      'dl.mac3': '已用 Apple Developer ID 签名并通过公证，可以直接打开',
      'dl.mac4': '打开 DMG，把「字芽」拖进「应用程序」文件夹即可',
      'dl.macBtn': '下载 DMG（约 5 MB）',
      'dl.iosT': 'iPhone / iPad 版',
      'dl.ios1': '需要 iOS / iPadOS 14.8 或更新版本',
      'dl.ios2': '这个 IPA 是开发版签名，只能安装在已登记到开发者账号的设备上，其他设备会安装失败',
      'dl.ios3': '也可以试试用 AltStore、Sideloadly 等工具以自己的 Apple ID 重新签名安装，能否成功取决于工具和设备，无法保证',
      'dl.ios4': '当前安装包的签名有效期到 2027 年 4 月',
      'dl.iosBtn': '下载 IPA（约 5 MB）',
      'dl.note': 'App 的界面和字库都是简体中文。', 'dl.all': '查看所有版本',
      'foot.tag': '字芽 · 一字一芽，慢慢长大', 'foot.more': 'VanJay 的更多作品', 'foot.repo': 'GitHub 仓库', 'foot.issues': '问题反馈'
    },
    'zh-TW': {
      pageTitle: '字芽 ZiYa · 陪孩子一字一字認漢字',
      pageDesc: '字芽是給孩子的中文識字 App：楷體大字、拼音、組詞造句朗讀和筆順動畫，3500 個字從啟蒙排到六年級。離線可用、沒有廣告，支援 iPhone、iPad 與 Mac。',
      skip: '跳到正文', navAria: '頁面導覽', langAria: '語言', themeAria: '主題', ghAria: '在 GitHub 上查看', footAria: '頁尾連結',
      'theme.light': '淺色', 'theme.dark': '深色', 'theme.system': '跟隨系統',
      'nav.cards': '翻字卡', 'nav.learn': '怎麼學', 'nav.parents': '給家長', 'nav.download': '下載',
      'hero.eyebrow': '中文識字啟蒙 · iPhone / iPad / Mac',
      'hero.title': '一字一芽，<br>慢慢長大',
      'hero.lead': '字芽陪孩子認識常用漢字：看大大的楷體字，聽讀音、組詞和造句，再看字形一筆一筆描出來。3500 個字從啟蒙排到六年級，不需要網路、沒有廣告，家長可以放心交給孩子。',
      'hero.btnMac': '下載 Mac 版', 'hero.btnIOS': 'iPhone / iPad 安裝說明',
      'hero.meta': '版本 1.2 · 免費 · 離線可用 · macOS 12+ · iOS 14.8+',
      'hero.replay': '再寫一遍',
      'hero.artAria': '漢字「芽」依筆順逐筆書寫，寫完後長出一棵小芽',
      'hero.stroke': '「芽」第 {n} 筆，共 7 筆',
      'hero.done': '芽 yá · 發芽 —— 寫好了，長出一棵小芽',
      'cards.kicker': '翻一翻', 'cards.title': '點一點字卡，看看背面',
      'cards.lead': '下面的字、組詞和造句都來自字芽的字庫（簡體字）。正面是字，背面是拼音、組詞和一句短句。',
      'cards.word': '組詞', 'cards.sentence': '造句', 'cards.hint': '點我翻面', 'cards.aria': '字卡「{c}」，點一下翻面',
      'learn.kicker': '學一個字', 'learn.title': '看字、聽音、看筆順，一次只學一個字',
      'learn.s1t': '看大字', 'learn.s1': '楷體大字配上拼音，字形規範清楚，適合剛開始認字的眼睛。',
      'learn.s2t': '聽讀音', 'learn.s2': '依序朗讀字、組詞和造句，可以重聽，也可以慢速播放。部分常用字配有自然人聲讀音（AI 語音合成），其餘使用系統離線語音。',
      'learn.s3t': '看筆順', 'learn.s3': '朗讀結束後自動播放筆順動畫，速度可以調整，也可以關閉。',
      'learn.s4t': '記下來', 'learn.s4': '學過的字進入複習，隔一段時間再出現一次，慢慢記牢。',
      'learn.alt': '字芽 Mac 版學習頁：大字「猫」、拼音 māo、組詞小猫和造句',
      'lib.kicker': '字庫', 'lib.title': '3500 個字，從啟蒙排到六年級',
      'lib.lead': '依年級分成 46 個學習單元，也可以依身體、動物、植物、飲食、自然等 100 多個主題來學。字庫頁能用漢字、拼音或組詞搜尋，並依「未學 / 學習中 / 已會」篩選。',
      'lib.st1': '個常用字', 'lib.st2': '個學習單元', 'lib.st3': '個階段：啟蒙 + 一至六年級', 'lib.st4': '個主題分類',
      'lib.alt1': '分類頁：依年級分組的學習單元', 'lib.alt2': '字庫頁：依年級與掌握狀態篩選 3500 個字',
      'rev.kicker': '複習與小測驗', 'rev.title': '學過的字，隔幾天再見一面',
      'rev.t1': '打亂複習', 'rev.p1': '把到期和學過的字打亂，從頭到尾過一遍；也可以依類別或年級複習。',
      'rev.t2': '聽音選字', 'rev.p2': '聽讀音，從幾個字裡選出對的那個。家長先設定題數（5–50 題）和難度（基礎 / 進階 / 挑戰），題目只從孩子學過的字裡出。',
      'rev.t3': '不急著糾錯', 'rev.p3': '答錯先記下來，不當場打斷；做完一輪再一起看錯題。',
      'rev.t4': '成長報告', 'rev.p4': '學了多少字、哪些還在學、哪些已經會了，錯題紀錄也能回看。',
      'rev.alt1': '複習頁：打亂複習、依類別或依年級複習', 'rev.alt2': '聽音選字設定：題數、難度與錯題講解方式',
      'par.kicker': '給家長', 'par.title': '安靜、乾淨，放心交給孩子',
      'par.t1': '離線使用', 'par.p1': '不需要帳號，也不需要網路。學習紀錄只儲存在這台裝置上，不會上傳。',
      'par.t2': '沒有廣告和內購', 'par.p2': '打開就是學習，沒有廣告，也沒有付費解鎖。',
      'par.t3': '楷體規範字', 'par.p3': '識字頁使用系統楷體，筆畫起收清楚，貼近課本字形。',
      'par.t4': '家長中心', 'par.p4': '設定每日學習目標、考試題數和複習方式，進度一目了然。',
      'par.t5': '五套外觀', 'par.p5': '春芽、水墨、海嶼、糖果、星夜，挑一個孩子喜歡的顏色。',
      'par.t6': 'Mac 上用鍵盤', 'par.p6': '空白鍵播放或暫停，左右方向鍵換字，⌘F 查字，大螢幕陪讀更方便。',
      'dl.kicker': '下載', 'dl.title': '免費下載',
      'dl.lead': '字芽沒有在 App Store 上架，安裝檔放在 GitHub 上分享。目前版本 1.2。',
      'dl.macT': 'Mac 版',
      'dl.mac1': '通用版本，Apple 晶片和 Intel 處理器的 Mac 都能使用',
      'dl.mac2': '需要 macOS 12 或更新版本',
      'dl.mac3': '已用 Apple Developer ID 簽署並通過公證，可以直接開啟',
      'dl.mac4': '開啟 DMG，把「字芽」拖進「應用程式」檔案夾即可',
      'dl.macBtn': '下載 DMG（約 5 MB）',
      'dl.iosT': 'iPhone / iPad 版',
      'dl.ios1': '需要 iOS / iPadOS 14.8 或更新版本',
      'dl.ios2': '這個 IPA 是開發版簽署，只能安裝在已登記到開發者帳號的裝置上，其他裝置會安裝失敗',
      'dl.ios3': '也可以試試用 AltStore、Sideloadly 等工具以自己的 Apple ID 重新簽署安裝，能否成功取決於工具和裝置，無法保證',
      'dl.ios4': '目前安裝檔的簽署有效期到 2027 年 4 月',
      'dl.iosBtn': '下載 IPA（約 5 MB）',
      'dl.note': 'App 的介面和字庫都是簡體中文。', 'dl.all': '查看所有版本',
      'foot.tag': '字芽 · 一字一芽，慢慢長大', 'foot.more': 'VanJay 的更多作品', 'foot.repo': 'GitHub 儲存庫', 'foot.issues': '問題回報'
    },
    'en': {
      pageTitle: 'ZiYa · Learn Chinese characters, one sprout at a time',
      pageDesc: 'ZiYa is a Chinese character app for children: large Kaiti characters, pinyin, words and sentences read aloud, and stroke animations. 3,500 characters from first steps to Grade 6. Works offline, no ads, for iPhone, iPad and Mac.',
      skip: 'Skip to content', navAria: 'Page navigation', langAria: 'Language', themeAria: 'Theme', ghAria: 'View on GitHub', footAria: 'Footer links',
      'theme.light': 'Light', 'theme.dark': 'Dark', 'theme.system': 'System',
      'nav.cards': 'Flip cards', 'nav.learn': 'How it works', 'nav.parents': 'For parents', 'nav.download': 'Download',
      'hero.eyebrow': 'Chinese for kids · iPhone, iPad & Mac',
      'hero.title': 'One character,<br>one little sprout',
      'hero.lead': 'ZiYa helps children learn everyday Chinese characters: a large Kaiti character, its sound, a word and a sentence read aloud, then the shape traced stroke by stroke. 3,500 characters run from first steps to Grade 6. It works offline and shows no ads, so you can hand it over with peace of mind.',
      'hero.btnMac': 'Download for Mac', 'hero.btnIOS': 'iPhone & iPad install notes',
      'hero.meta': 'Version 1.2 · Free · Works offline · macOS 12+ · iOS 14.8+',
      'hero.replay': 'Write it again',
      'hero.artAria': 'The character 芽 (sprout) is written stroke by stroke, then a little sprout grows from it',
      'hero.stroke': '芽 · stroke {n} of 7',
      'hero.done': '芽 yá · “to sprout” — and a little sprout appears',
      'cards.kicker': 'Try it', 'cards.title': 'Tap a card to turn it over',
      'cards.lead': 'These characters, words and sentences come straight from ZiYa’s library. The front shows the character; the back shows pinyin, a word and a short sentence.',
      'cards.word': 'Word', 'cards.sentence': 'Sentence', 'cards.hint': 'Tap to flip', 'cards.aria': 'Card {c}, tap to flip',
      'learn.kicker': 'Learning a character', 'learn.title': 'See it, hear it, watch the strokes — one character at a time',
      'learn.s1t': 'See it big', 'learn.s1': 'A large Kaiti character with pinyin above it: standard, clear shapes for young eyes just starting out.',
      'learn.s2t': 'Hear it', 'learn.s2': 'The character, a word and a sentence are read aloud in turn; replay or slow down anytime. Some common characters have natural-sounding voice clips (AI-generated); the rest use the system’s offline voice.',
      'learn.s3t': 'Watch the strokes', 'learn.s3': 'After reading, a stroke animation plays automatically. Its speed is adjustable, and it can be turned off.',
      'learn.s4t': 'Keep it', 'learn.s4': 'Learned characters move into review and come back after a while, so they stick.',
      'learn.alt': 'ZiYa on Mac: the learning page with 猫 (māo), the word 小猫 and a sentence',
      'lib.kicker': 'Library', 'lib.title': '3,500 characters, from first steps to Grade 6',
      'lib.lead': 'Characters are grouped into 46 units by grade, or into 100+ themes such as body, animals, plants, food and nature. The library can be searched by character, pinyin or word and filtered by Not started / Learning / Known.',
      'lib.st1': 'common characters', 'lib.st2': 'learning units', 'lib.st3': 'stages: starter + Grades 1–6', 'lib.st4': 'themes',
      'lib.alt1': 'Categories page: learning units grouped by grade', 'lib.alt2': 'Library page: 3,500 characters filtered by grade and progress',
      'rev.kicker': 'Review & quiz', 'rev.title': 'Learned characters come back for another look',
      'rev.t1': 'Shuffle review', 'rev.p1': 'Due and learned characters are shuffled and gone through once; you can also review by theme or by grade.',
      'rev.t2': 'Listen & pick', 'rev.p2': 'Hear a sound and pick the right character. A parent sets the number of questions (5–50) and the level (Basic / Intermediate / Challenge); questions only use characters your child has learned.',
      'rev.t3': 'No rush to correct', 'rev.p3': 'Mistakes are noted quietly instead of interrupting; you go over them together at the end.',
      'rev.t4': 'Growth report', 'rev.p4': 'See how many characters are learned, which are in progress and which are known, and look back at past mistakes.',
      'rev.alt1': 'Review page: shuffle review, by theme or by grade', 'rev.alt2': 'Listen & pick setup: number of questions, level and how mistakes are reviewed',
      'par.kicker': 'For parents', 'par.title': 'Quiet, clean and easy to trust',
      'par.t1': 'Works offline', 'par.p1': 'No account and no internet needed. Progress is saved only on this device and never uploaded.',
      'par.t2': 'No ads, no in-app purchases', 'par.p2': 'Open it and start learning. There are no ads and nothing to unlock.',
      'par.t3': 'Standard Kaiti script', 'par.p3': 'The learning page uses the system Kaiti font, with clear stroke beginnings and endings close to textbook shapes.',
      'par.t4': 'Parent center', 'par.p4': 'Set a daily learning goal, quiz length and review style, and keep an eye on progress.',
      'par.t5': 'Five skins', 'par.p5': 'Sprout, Ink, Island, Candy and Starlight — let your child pick the colors.',
      'par.t6': 'Keyboard on Mac', 'par.p6': 'Space to play or pause, arrow keys to move between characters, ⌘F to find one. Handy for reading together on a big screen.',
      'dl.kicker': 'Download', 'dl.title': 'Free to download',
      'dl.lead': 'ZiYa isn’t on the App Store; the installers are shared on GitHub. Current version: 1.2.',
      'dl.macT': 'Mac',
      'dl.mac1': 'Universal build for Apple silicon and Intel Macs',
      'dl.mac2': 'Requires macOS 12 or later',
      'dl.mac3': 'Signed with an Apple Developer ID and notarized, so it opens normally',
      'dl.mac4': 'Open the DMG and drag 字芽 into the Applications folder',
      'dl.macBtn': 'Download DMG (about 5 MB)',
      'dl.iosT': 'iPhone / iPad',
      'dl.ios1': 'Requires iOS / iPadOS 14.8 or later',
      'dl.ios2': 'This IPA uses a development signature. It installs only on devices registered to the developer’s account; other devices will refuse it',
      'dl.ios3': 'You can try re-signing it with your own Apple ID using tools such as AltStore or Sideloadly. Whether that works depends on the tool and device, so it can’t be guaranteed',
      'dl.ios4': 'The current package’s signature is valid until April 2027',
      'dl.iosBtn': 'Download IPA (about 5 MB)',
      'dl.note': 'The app’s interface and content are in Simplified Chinese.', 'dl.all': 'All releases',
      'foot.tag': 'ZiYa · one character, one little sprout', 'foot.more': 'More from VanJay', 'foot.repo': 'GitHub repository', 'foot.issues': 'Feedback'
    }
  };

  // 示例字卡：内容取自 App 字库 content.json（gloss 仅英文界面显示）
  var CARDS = [
    { c: '日', py: 'rì', e: '☀️', w: '日出', s: '早上看到了日出。', gw: 'sunrise', gs: 'I saw the sunrise this morning.' },
    { c: '月', py: 'yuè', e: '🌙', w: '月亮', s: '月亮挂在天上。', gw: 'the moon', gs: 'The moon hangs in the sky.' },
    { c: '山', py: 'shān', e: '⛰️', w: '大山', s: '大山又高又大。', gw: 'big mountain', gs: 'The mountain is tall and big.' },
    { c: '水', py: 'shuǐ', e: '💧', w: '喝水', s: '多喝水身体好。', gw: 'drink water', gs: 'Drinking water keeps you healthy.' },
    { c: '火', py: 'huǒ', e: '🔥', w: '火苗', s: '火苗很烫，别碰。', gw: 'flame', gs: 'Flames are hot — don’t touch.' },
    { c: '木', py: 'mù', e: '🪵', w: '木头', s: '木头能做桌子。', gw: 'wood', gs: 'Wood can be made into tables.' },
    { c: '鱼', py: 'yú', e: '🐟', w: '小鱼', s: '小鱼在水里游。', gw: 'little fish', gs: 'The little fish swims in the water.' },
    { c: '花', py: 'huā', e: '🌸', w: '花朵', s: '花朵开得很美。', gw: 'flower', gs: 'The flowers bloom beautifully.' }
  ];

  var params = new URLSearchParams(location.search);
  var reduceMQ = matchMedia('(prefers-reduced-motion: reduce)');
  var darkMQ = matchMedia('(prefers-color-scheme: dark)');
  var lang = doc.getAttribute('lang') || 'zh-CN';

  function t(key) {
    var d = I18N[lang] || I18N['zh-CN'];
    return d[key] != null ? d[key] : (I18N['zh-CN'][key] || '');
  }
  function store(k, v) {
    try { localStorage.setItem(k, v); } catch (e) { /* 隐私模式下忽略 */ }
  }

  // ---------- 语言 ----------
  function applyLang(next, save) {
    if (!I18N[next]) {
      next = 'zh-CN';
    }
    lang = next;
    doc.setAttribute('lang', lang);
    if (save) {
      store('ziya-lang', lang);
    }
    document.title = t('pageTitle');
    var md = document.querySelector('meta[name="description"]');
    if (md) {
      md.setAttribute('content', t('pageDesc'));
    }
    var ot = document.querySelector('meta[property="og:title"]');
    if (ot) {
      ot.setAttribute('content', t('pageTitle'));
    }
    var od = document.querySelector('meta[property="og:description"]');
    if (od) {
      od.setAttribute('content', t('pageDesc'));
    }
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      el.textContent = t(el.getAttribute('data-i18n'));
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      el.innerHTML = t(el.getAttribute('data-i18n-html'));
    });
    document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
      el.setAttribute('alt', t(el.getAttribute('data-i18n-alt')));
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      el.setAttribute('aria-label', t(el.getAttribute('data-i18n-aria')));
    });
    document.querySelectorAll('[data-i18n-title]').forEach(function (el) {
      el.setAttribute('title', t(el.getAttribute('data-i18n-title')));
    });
    document.querySelectorAll('#langSeg button').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-lang') === lang));
    });
    renderCards();
    updateStrokeLabel();
  }

  // ---------- 主题 ----------
  var themePref = doc.getAttribute('data-theme-pref') || 'system';
  function applyTheme(pref, save) {
    themePref = pref;
    var dark = pref === 'dark' || (pref === 'system' && darkMQ.matches);
    doc.setAttribute('data-theme', dark ? 'dark' : 'light');
    doc.setAttribute('data-theme-pref', pref);
    if (save) {
      store('ziya-theme', pref);
    }
    document.querySelectorAll('#themeSeg button').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-theme-set') === pref));
    });
    // 地址栏颜色随当前主题
    document.querySelectorAll('meta[name="theme-color"]').forEach(function (m) {
      m.setAttribute('content', dark ? '#181d16' : '#f6f0e1');
      m.removeAttribute('media');
    });
  }
  darkMQ.addEventListener('change', function () {
    if (themePref === 'system') {
      applyTheme('system', false);
    }
  });

  document.getElementById('langSeg').addEventListener('click', function (e) {
    var b = e.target.closest('button[data-lang]');
    if (b) {
      applyLang(b.getAttribute('data-lang'), true);
    }
  });
  document.getElementById('themeSeg').addEventListener('click', function (e) {
    var b = e.target.closest('button[data-theme-set]');
    if (b) {
      applyTheme(b.getAttribute('data-theme-set'), true);
    }
  });

  // ---------- 翻字卡 ----------
  var flipped = {};
  function renderCards() {
    var deck = document.getElementById('deck');
    if (!deck) {
      return;
    }
    var en = lang === 'en';
    deck.innerHTML = CARDS.map(function (k, i) {
      return '<button type="button" class="fc reveal in' + (flipped[i] ? ' is-flipped' : '') + '" data-i="' + i + '" aria-pressed="' + !!flipped[i] + '" aria-label="' + t('cards.aria').replace('{c}', k.c) + '">' +
        '<span class="fc-in">' +
          '<span class="fc-face fc-front" aria-hidden="' + !!flipped[i] + '"><span class="fc-char" lang="zh-CN">' + k.c + '</span><span class="fc-hint">' + t('cards.hint') + '</span></span>' +
          '<span class="fc-face fc-back" aria-hidden="' + !flipped[i] + '">' +
            '<span class="fc-py">' + k.py + '</span>' +
            '<span class="fc-emoji" aria-hidden="true">' + k.e + '</span>' +
            '<span class="fc-row"><span class="lbl">' + t('cards.word') + '</span><b lang="zh-CN">' + k.w + '</b> <span class="fc-gloss">' + (en ? k.gw : '') + '</span></span>' +
            '<span class="fc-row"><span class="lbl">' + t('cards.sentence') + '</span><span lang="zh-CN">' + k.s + '</span><br><span class="fc-gloss">' + (en ? k.gs : '') + '</span></span>' +
          '</span>' +
        '</span></button>';
    }).join('');
  }
  document.getElementById('deck').addEventListener('click', function (e) {
    var b = e.target.closest('.fc');
    if (!b) {
      return;
    }
    var i = b.getAttribute('data-i');
    flipped[i] = !flipped[i];
    b.classList.toggle('is-flipped', flipped[i]);
    b.setAttribute('aria-pressed', String(flipped[i]));
    b.querySelector('.fc-front').setAttribute('aria-hidden', String(flipped[i]));
    b.querySelector('.fc-back').setAttribute('aria-hidden', String(!flipped[i]));
  });

  // ---------- 首屏：逐笔书写「芽」 ----------
  // 坐标系 1000×1000（y 向下）。每笔由若干段组成，段内是中心线控制点与沿线宽度（起笔顿、行笔细、收笔或顿或出锋）
  var STROKES = [
    [{ p: [[168, 238], [330, 228], [500, 222], [668, 216], [832, 210]], w: [54, 40, 32, 34, 52] }],          // 横
    [{ p: [[360, 110], [372, 220], [386, 336]], w: [52, 40, 20] }],                                        // 竖
    [{ p: [[642, 104], [632, 220], [612, 334]], w: [52, 38, 16] }],                                        // 竖（略撇）
    [{ p: [[250, 458], [420, 448], [600, 440], [778, 432]], w: [52, 36, 32, 50] }],                        // 横
    [{ p: [[352, 500], [342, 590], [326, 680]], w: [46, 36, 34] },                                         // 竖折：竖
     { p: [[326, 680], [500, 674], [660, 668], [812, 660]], w: [34, 30, 30, 48] }],                        //       折
    [{ p: [[616, 400], [620, 560], [622, 720], [614, 892]], w: [54, 42, 40, 42] },                         // 竖钩：竖
     { p: [[614, 892], [584, 878], [548, 852]], w: [42, 22, 4] }],                                         //       钩
    [{ p: [[600, 694], [540, 792], [440, 870], [318, 924], [222, 948]], w: [44, 36, 26, 12, 3] }]          // 撇
  ];
  var SVGNS = 'http://www.w3.org/2000/svg';
  var svg = document.getElementById('hanzi');
  var seal = document.getElementById('seal');
  var strokeLabel = document.getElementById('strokeCount');
  var heroAnims = [];
  var strokeState = 0; // 0：未开始，1..7：正在写第 n 笔，8：完成

  function el(name, attrs, parent) {
    var n = document.createElementNS(SVGNS, name);
    for (var k in attrs) {
      n.setAttribute(k, attrs[k]);
    }
    if (parent) {
      parent.appendChild(n);
    }
    return n;
  }

  // Catmull-Rom 插值，把控制点加密成平滑折线
  function densify(pts) {
    if (pts.length === 2) {
      var out2 = [];
      for (var s = 0; s <= 24; s++) {
        var u = s / 24;
        out2.push([pts[0][0] + (pts[1][0] - pts[0][0]) * u, pts[0][1] + (pts[1][1] - pts[0][1]) * u]);
      }
      return out2;
    }
    var out = [];
    for (var i = 0; i < pts.length - 1; i++) {
      var p0 = pts[Math.max(0, i - 1)], p1 = pts[i], p2 = pts[i + 1], p3 = pts[Math.min(pts.length - 1, i + 2)];
      for (var j = (i === 0 ? 0 : 1); j <= 16; j++) {
        var tt = j / 16, t2 = tt * tt, t3 = t2 * tt;
        out.push([0, 1].map(function (a) {
          return 0.5 * ((2 * p1[a]) + (-p0[a] + p2[a]) * tt + (2 * p0[a] - 5 * p1[a] + 4 * p2[a] - p3[a]) * t2 + (-p0[a] + 3 * p1[a] - 3 * p2[a] + p3[a]) * t3);
        }));
      }
    }
    return out;
  }
  function lerpWidth(ws, tt) {
    var x = tt * (ws.length - 1), i = Math.min(ws.length - 2, Math.floor(x)), f = x - i;
    return ws[i] + (ws[i + 1] - ws[i]) * f;
  }
  // 由中心线与宽度生成毛笔笔画轮廓（两端圆头）
  function outline(seg) {
    var P = densify(seg.p), n = P.length, L = [0];
    for (var i = 1; i < n; i++) {
      L.push(L[i - 1] + Math.hypot(P[i][0] - P[i - 1][0], P[i][1] - P[i - 1][1]));
    }
    var total = L[n - 1], left = [], right = [], hs = [];
    for (var k = 0; k < n; k++) {
      var a = P[Math.max(0, k - 1)], b = P[Math.min(n - 1, k + 1)];
      var dx = b[0] - a[0], dy = b[1] - a[1], len = Math.hypot(dx, dy) || 1;
      var nx = -dy / len, ny = dx / len, h = lerpWidth(seg.w, L[k] / total) / 2;
      hs.push(h);
      left.push([P[k][0] + nx * h, P[k][1] + ny * h]);
      right.push([P[k][0] - nx * h, P[k][1] - ny * h]);
    }
    var f = function (q) { return q[0].toFixed(1) + ' ' + q[1].toFixed(1); };
    var d = 'M' + f(left[0]);
    for (var m = 1; m < n; m++) {
      d += 'L' + f(left[m]);
    }
    var he = Math.max(hs[n - 1], 0.5), h0 = Math.max(hs[0], 0.5);
    d += 'A' + he.toFixed(1) + ' ' + he.toFixed(1) + ' 0 0 0 ' + f(right[n - 1]);
    for (var r = n - 2; r >= 0; r--) {
      d += 'L' + f(right[r]);
    }
    d += 'A' + h0.toFixed(1) + ' ' + h0.toFixed(1) + ' 0 0 0 ' + f(left[0]) + 'Z';
    return { d: d, P: P, len: total };
  }

  function buildHero() {
    svg.innerHTML = '';
    var defs = el('defs', {}, svg);
    // 墨迹边缘的轻微毛糙与晕染
    var rough = el('filter', { id: 'rough', x: '-5%', y: '-5%', width: '110%', height: '110%' }, defs);
    el('feTurbulence', { type: 'fractalNoise', baseFrequency: '0.035', numOctaves: '2', seed: '4', result: 'n' }, rough);
    el('feDisplacementMap', { in: 'SourceGraphic', in2: 'n', scale: '4.5' }, rough);
    var bleed = el('filter', { id: 'bleed', x: '-10%', y: '-10%', width: '120%', height: '120%' }, defs);
    el('feGaussianBlur', { stdDeviation: '6' }, bleed);

    // 田字格（米字格）
    el('rect', { class: 'grid-box', x: 40, y: 40, width: 920, height: 920, rx: 6 }, svg);
    el('path', { class: 'grid-line', d: 'M500 40V960M40 500H960M40 40L960 960M960 40L40 960' }, svg);

    var bleedG = el('g', { filter: 'url(#bleed)' }, svg);
    var inkG = el('g', { filter: 'url(#rough)' }, svg);
    var masks = [];
    STROKES.forEach(function (stroke, si) {
      var maskPts = [], maxW = 0, totalLen = 0;
      var mask = el('mask', { id: 'm' + si, maskUnits: 'userSpaceOnUse', x: -100, y: -200, width: 1200, height: 1300 }, defs);
      stroke.forEach(function (seg) {
        var o = outline(seg);
        el('path', { class: 'ink', d: o.d, mask: 'url(#m' + si + ')' }, inkG);
        el('path', { class: 'bleed', d: o.d, mask: 'url(#m' + si + ')' }, bleedG);
        maskPts = maskPts.concat(maskPts.length ? o.P.slice(1) : o.P);
        maxW = Math.max(maxW, Math.max.apply(null, seg.w));
        totalLen += o.len;
      });
      // 揭示用中心线：首尾各延长半个笔宽，盖住圆头
      var a = maskPts[0], b = maskPts[1], z = maskPts[maskPts.length - 1], y = maskPts[maskPts.length - 2];
      var ext = maxW / 2 + 8;
      var da = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1, dz = Math.hypot(z[0] - y[0], z[1] - y[1]) || 1;
      var start = [a[0] - (b[0] - a[0]) / da * ext, a[1] - (b[1] - a[1]) / da * ext];
      var end = [z[0] + (z[0] - y[0]) / dz * ext, z[1] + (z[1] - y[1]) / dz * ext];
      var pts = [start].concat(maskPts, [end]);
      var d = 'M' + pts.map(function (q) { return q[0].toFixed(1) + ' ' + q[1].toFixed(1); }).join('L');
      var mp = el('path', { d: d, fill: 'none', stroke: '#fff', 'stroke-width': maxW + 16, 'stroke-linejoin': 'round', pathLength: 1, 'stroke-dasharray': '1 1', 'stroke-dashoffset': 1 }, mask);
      masks.push({ path: mp, len: totalLen + ext * 2 });
    });

    // 小芽：从第一横中间长出来
    var sprout = el('g', { class: 'sprout' }, svg);
    var stem = el('path', { class: 'stem sprout-part', d: 'M500 214C492 170 512 128 500 78' }, sprout);
    var leafL = el('g', { class: 'sprout-part' }, sprout);
    el('path', { class: 'leaf', d: 'M498 84C470 22 414 4 372 18C376 72 436 106 498 84Z' }, leafL);
    el('path', { class: 'vein', d: 'M486 80C450 60 418 40 392 26' }, leafL);
    var leafR = el('g', { class: 'sprout-part' }, sprout);
    el('path', { class: 'leaf', d: 'M502 80C528 6 590 -22 642 -12C642 50 576 96 502 80Z' }, leafR);
    el('path', { class: 'vein', d: 'M514 74C556 44 594 16 626 -2' }, leafR);
    [stem, leafL, leafR].forEach(function (p) { p.style.transformBox = 'view-box'; });
    stem.style.transformOrigin = '500px 214px';
    leafL.style.transformOrigin = '498px 84px';
    leafR.style.transformOrigin = '502px 80px';
    sprout.style.transformBox = 'view-box';
    sprout.style.transformOrigin = '500px 214px';

    return { masks: masks, stem: stem, leafL: leafL, leafR: leafR, sprout: sprout };
  }

  function updateStrokeLabel() {
    if (!strokeLabel) {
      return;
    }
    if (strokeState >= 1 && strokeState <= 7) {
      strokeLabel.textContent = t('hero.stroke').replace('{n}', strokeState);
    } else if (strokeState === 8) {
      strokeLabel.textContent = t('hero.done');
    } else {
      strokeLabel.textContent = ' ';
    }
  }

  function setStroke(n) {
    strokeState = n;
    updateStrokeLabel();
  }

  function cancelHero() {
    heroAnims.forEach(function (a) { a.cancel(); });
    heroAnims = [];
  }

  function playHero(instant) {
    cancelHero();
    var parts = buildHero();
    var noAnim = instant || reduceMQ.matches || typeof Element.prototype.animate !== 'function';
    if (noAnim) {
      // 直接给出完成状态
      parts.masks.forEach(function (m) { m.path.setAttribute('stroke-dashoffset', 0); });
      [parts.stem, parts.leafL, parts.leafR].forEach(function (p) { p.style.opacity = 1; });
      seal.style.opacity = 1;
      seal.style.transform = 'rotate(-6deg)';
      setStroke(8);
      return;
    }
    seal.style.opacity = '';
    seal.style.transform = '';
    var tcur = 450;
    parts.masks.forEach(function (m, i) {
      var dur = Math.round(260 + m.len * 0.85);
      var a = m.path.animate([{ strokeDashoffset: 1 }, { strokeDashoffset: 0 }], {
        duration: dur, delay: tcur, fill: 'both', easing: 'cubic-bezier(.45,.05,.35,1)'
      });
      heroAnims.push(a);
      // 开笔时更新计数（用一个零长动画承载时序，可随整体暂停）
      var marker = m.path.animate([{ opacity: 1 }, { opacity: 1 }], { duration: 1, delay: tcur });
      marker.onfinish = function () { setStroke(i + 1); };
      heroAnims.push(marker);
      tcur += dur + 180;
    });
    var grow = 'cubic-bezier(.2,.9,.3,1.25)';
    heroAnims.push(parts.stem.animate([{ opacity: 0, transform: 'scaleY(0)' }, { opacity: 1, transform: 'scaleY(1)' }], { duration: 650, delay: tcur + 120, fill: 'both', easing: 'cubic-bezier(.3,.7,.3,1)' }));
    heroAnims.push(parts.leafL.animate([{ opacity: 0, transform: 'scale(0) rotate(30deg)' }, { opacity: 1, transform: 'scale(1) rotate(0)' }], { duration: 620, delay: tcur + 640, fill: 'both', easing: grow }));
    heroAnims.push(parts.leafR.animate([{ opacity: 0, transform: 'scale(0) rotate(-30deg)' }, { opacity: 1, transform: 'scale(1) rotate(0)' }], { duration: 680, delay: tcur + 780, fill: 'both', easing: grow }));
    var sealA = seal.animate([{ opacity: 0, transform: 'rotate(-6deg) scale(1.6)' }, { opacity: 1, transform: 'rotate(-6deg) scale(1)' }], { duration: 420, delay: tcur + 1300, fill: 'both', easing: 'cubic-bezier(.3,1.4,.5,1)' });
    sealA.onfinish = function () { setStroke(8); };
    heroAnims.push(sealA);
    // 写完后小芽轻轻摆动
    heroAnims.push(parts.sprout.animate([{ transform: 'rotate(0)' }, { transform: 'rotate(3deg)' }, { transform: 'rotate(-2deg)' }, { transform: 'rotate(0)' }], { duration: 4200, delay: tcur + 1500, iterations: Infinity, easing: 'ease-in-out' }));
    setStroke(0);
    syncHeroPlayback();
  }

  // 页面不可见或首屏离开视口时暂停
  var heroVisible = true;
  function syncHeroPlayback() {
    var run = heroVisible && !document.hidden;
    heroAnims.forEach(function (a) {
      if (a.playState === 'finished' || a.playState === 'idle') {
        return;
      }
      if (run) {
        a.play();
      } else {
        a.pause();
      }
    });
  }
  document.addEventListener('visibilitychange', syncHeroPlayback);
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (entries) {
      heroVisible = entries[0].isIntersecting;
      syncHeroPlayback();
    }).observe(document.getElementById('sheet'));
  }
  document.getElementById('replay').addEventListener('click', function () { playHero(false); });
  reduceMQ.addEventListener('change', function () { playHero(false); });

  // 写字卡跟随指针轻微倾斜
  var sheet = document.getElementById('sheet');
  if (!reduceMQ.matches && matchMedia('(hover: hover)').matches) {
    sheet.addEventListener('pointermove', function (e) {
      var r = sheet.getBoundingClientRect();
      var x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
      sheet.style.transform = 'perspective(900px) rotate(-1.6deg) rotateY(' + (x * 6).toFixed(2) + 'deg) rotateX(' + (-y * 6).toFixed(2) + 'deg)';
    });
    sheet.addEventListener('pointerleave', function () { sheet.style.transform = ''; });
    sheet.style.transition = 'transform .5s cubic-bezier(.22,.8,.24,1)';
  }

  // ---------- 滚动渐入 ----------
  function setupReveal() {
    var items = document.querySelectorAll('.reveal:not(.in)');
    if (!('IntersectionObserver' in window) || reduceMQ.matches) {
      items.forEach(function (n) { n.classList.add('in'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add('in');
          io.unobserve(en.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    items.forEach(function (n, i) {
      n.style.transitionDelay = (i % 4) * 70 + 'ms';
      io.observe(n);
    });
  }

  applyTheme(themePref, false);
  applyLang(lang, false);
  setupReveal();
  // ?hero=end 直接显示写完的状态，便于截图验收
  playHero(params.get('hero') === 'end');
})();
