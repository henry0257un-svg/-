
window.CHAPTERS = [
  {
    num:"CHAPTER 01", title:"不存在的記憶", sub:"妳看見的，真的是過去嗎？", progress:8, image:"assets/chapter_1.png",
    scenes:[
      {eyebrow:"PROLOGUE // 00:17", line:"凌晨 00:17。", sub:"房間裡只剩冷氣運轉的聲音。妳原本只是看著手機，畫面卻突然黑了一下。"},
      {eyebrow:"PROLOGUE // SIGNAL FOUND", line:"沒有通知。\n沒有寄件人。\n也沒有任何說明。", sub:"螢幕中央只剩下一行文字：MEMORY_404。"},
      {eyebrow:"PROLOGUE // MEMORY DETECTED", line:"「偵測到一段不應存在的記憶。」", sub:"照片只閃過不到一秒。昏暗的房間、半開的門，還有一個妳看不清楚的人影。"},
      {eyebrow:"PROLOGUE // OWNER MATCH", line:"記憶持有人：妳。", sub:"可是妳完全不記得這張照片，也不記得自己去過那個地方。"}
    ],
    puzzle:{label:"PUZZLE 01 // CALIBRATION", title:"記憶校準", terminal:"SYSTEM MESSAGE<br>在繼續之前，系統必須確認妳能辨認『記憶的基本單位』。", clue:"我沒有形狀，卻一直向前。<br>我抓不住，但照片可以留下我的某一瞬間。<br><br>我是什麼？", answers:["時間","TIME"], hint:"提示：我們總說它過得很快，也總想把某一刻留下。", placeholder:"輸入答案"}
  },
  {
    num:"CHAPTER 02", title:"螢幕外的證據", sub:"如果它只是一個網站，現實裡為什麼會有痕跡？", progress:20, image:"assets/chapter_2.png",
    scenes:[
      {eyebrow:"MEMORY // PARTIALLY RESTORED", line:"雜訊短暫消失了。", sub:"妳看見一張紙條、一段模糊的聲音波形，還有一個極短的畫面。它們都讓妳覺得熟悉。"},
      {eyebrow:"TRACE // PHYSICAL", line:"下一段資料不在手機裡。", sub:"系統偵測到一個『實體痕跡』，而且位置就在妳現在所在的空間。"},
      {eyebrow:"TRACE // WARNING", line:"「先別急著找特別的東西。」", sub:"這一次，妳找的不是禮物。只是有人留下的一張證明。"}
    ],
    puzzle:{label:"PUZZLE 02 // PHYSICAL TRACE", title:"找到第一個實體痕跡", terminal:"PHYSICAL TRACE ........ DETECTED<br>LOCATION .............. CURRENT ROOM<br>OBJECT TYPE ........... PAPER", clue:"找一個妳每天離開這個房間以前，一定會經過的地方。", answers:["M404","MEMORY404"], hint:"它離門很近。那裡應該有一張寫著 MEMORY_404 的小紙條。", placeholder:"輸入紙條上的識別碼"}
  },
  {
    num:"CHAPTER 03", title:"記憶開始有了味道", sub:"這次恢復的，不是畫面。", progress:36, image:"assets/chapter_3.png",
    scenes:[
      {eyebrow:"TRACE VERIFIED", line:"紙條是真的。", sub:"所以這件事不只存在於網站裡。妳剛剛找到的東西，證明有人提前把『記憶』放進了現實。"},
      {eyebrow:"SENSORY DATA // RESTORING", line:"新的記憶開始恢復。", sub:"影像依舊模糊，但系統讀到了另一種資料：柔軟、紅色，還有一種甜甜的氣味。"},
      {eyebrow:"SENSORY DATA // SCENT", line:"「有些記憶，不需要看見。」", sub:"只要靠得夠近，一個味道就可以把某個人重新帶回腦海裡。"}
    ],
    puzzle:{label:"PUZZLE 03 // SCENT", title:"找到氣味來源", terminal:"COLOR ........ RED / PINK<br>TACTILE ...... SOFT<br>SCENT ........ SWEET<br>DISTANCE ..... VERY CLOSE", clue:"在這個房間裡，找到符合這些條件的東西。找到後，輸入妳聞到／想到的關鍵字。", answers:["草莓","草莓熊","STRAWBERRY"], hint:"提示：這一次，妳真的會找到一個『東西』。", placeholder:"輸入關鍵字"}
  },
  {
    num:"CHAPTER 04", title:"同源記憶", sub:"它和上一段記憶很像，卻準備離開這裡。", progress:52, image:"assets/chapter_4.png",
    scenes:[
      {eyebrow:"MEMORY 01 // RESTORED", line:"第一段實體記憶恢復了。", sub:"但系統沒有停止。附近還有另一個訊號，與剛才的來源相似度高達 92%。"},
      {eyebrow:"SECOND SIGNAL // FOUND", line:"一樣熟悉，卻小很多。", sub:"系統顯示它可以跟著一個人移動，而且身上還帶著另一個不明物件。"},
      {eyebrow:"SECOND SIGNAL // MOVEMENT", line:"「它似乎不打算一直留在這個房間。」", sub:"找到它之後，別只看它本身。"}
    ],
    puzzle:{label:"PUZZLE 04 // COMPANION", title:"找出附加物件", terminal:"SOURCE MATCH ....... 92%<br>SIZE ............... SMALLER<br>MOVEMENT ........... READY<br>ATTACHED OBJECT .... UNKNOWN", clue:"找到那個『較小的同源記憶』，然後檢查它身上帶著什麼。", answers:["鑰匙","KEY"], hint:"提示：那個東西可以打開某個地方。", placeholder:"輸入附加物件"}
  },
  {
    num:"CHAPTER 05", title:"記憶原點", sub:"那把鑰匙不是答案，只是一張通行證。", progress:68, image:"assets/chapter_5.png",
    scenes:[
      {eyebrow:"LOCATION ERROR", line:"目前位置錯誤。", sub:"妳找到鑰匙的瞬間，系統重新定位。它告訴妳：這段記憶真正屬於另一個地方。"},
      {eyebrow:"LOCATION TRANSFER", line:"「回到它真正屬於的地方。」", sub:"帶著鑰匙離開這裡。去打開它真正能打開的那扇門。"},
      {eyebrow:"SOURCE LOCATION // FOUND", line:"門打開了。", sub:"網站第一次認出了這個房間。最後一段記憶，藏在妳每天生活的地方。"}
    ],
    puzzle:{label:"PUZZLE 05 // FRAGMENT A", title:"第一個房間碎片", terminal:"SOURCE LOCATION ...... VERIFIED<br>MEMORY FRAGMENTS ..... 3<br>FRAGMENT A ........... ACTIVE", clue:"一天結束之後，它總是離妳最近。", answers:["枕頭","PILLOW","床","BED"], hint:"提示：睡覺時，妳的頭會靠在它上面。", placeholder:"輸入答案"}
  },
  {
    num:"CHAPTER 06", title:"看得見，卻留不住", sub:"最後的記憶正在變得清楚。", progress:82, image:"assets/chapter_6.png",
    scenes:[
      {eyebrow:"FRAGMENT A // RESTORED", line:"第一個碎片恢復。", sub:"妳看見更多日常的畫面。這些地方妳每天都看得到，所以才更容易被忽略。"},
      {eyebrow:"FRAGMENT B // SEARCHING", line:"有一個東西每天都會看見妳。", sub:"可是它從來沒有真正保存過妳的任何一個瞬間。"}
    ],
    puzzle:{label:"PUZZLE 06 // FRAGMENT B", title:"第二個房間碎片", terminal:"VISUAL SOURCE ......... ACTIVE<br>RECORDING .............. NONE<br>REFLECTION ............. DETECTED", clue:"它每天都看見妳，卻一次也留不住妳。", answers:["鏡子","MIRROR"], hint:"提示：妳出門以前，很可能會看它一眼。", placeholder:"輸入答案"}
  },
  {
    num:"CHAPTER 07", title:"把時間留下來", sub:"如果記憶終究會模糊，我們為什麼還要記得？", progress:94, image:"assets/chapter_7.png",
    scenes:[
      {eyebrow:"FRAGMENT B // RESTORED", line:"畫面終於接近完整。", sub:"系統只剩下一個問題。這次沒有標準答案。"},
      {eyebrow:"FINAL MEMORY // QUESTION", line:"「人為什麼要拍照？」", sub:"也許是因為，有些瞬間我們知道自己終究會忘記細節，所以才想留下證明。"}
    ],
    puzzle:{label:"PUZZLE 07 // FINAL", title:"留下妳自己的答案", terminal:"FINAL MEMORY .......... 94%<br>REQUIRED INPUT ......... PERSONAL ANSWER", clue:"人為什麼要拍照？", hint:"沒有正確答案。只要留下妳真正想到的理由。", placeholder:"我覺得是因為……", freeText:true}
  }
];
