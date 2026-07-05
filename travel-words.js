/* =========================================================================
   たびごっち 旅行英会話フレーズデータ  (window.TRAVEL_DECKS)
   旅程：ハンガリー（娘の大学）→ 電車でウィーン（美術館・観光）→ ローマ（食・買い物）
   - 各デッキ: id / name / data[{w,pos,jp,ex,exjp,col,coljp}]
   - w=フレーズ / jp=意味 / ex=会話例(スラッシュ区切り) / exjp=和訳 / col=キーワード
   - 各デッキは かんたん→応用 の順。編集・追加はこの配列に書き足すだけ。
   ========================================================================= */
window.TRAVEL_DECKS = [

{id:"plane", name:"✈️ 飛行機・空港", data:[
{w:"Here is my passport.", pos:"p", jp:"パスポートをどうぞ", ex:"Here is my passport. / Thank you. Have a nice flight.", exjp:"パスポートをどうぞ。/ ありがとうございます。良いフライトを。", col:"passport", coljp:"パスポート"},
{w:"Where is the check-in counter?", pos:"p", jp:"チェックインカウンターはどこですか", ex:"Where is the check-in counter for Austrian Airlines? / It's over there, counter D.", exjp:"オーストリア航空のチェックインカウンターはどこですか。/ あちらのDカウンターです。", col:"check-in counter", coljp:"搭乗手続きカウンター"},
{w:"I'd like a window seat, please.", pos:"p", jp:"窓側の席をお願いします", ex:"I'd like a window seat, please. / Sure, seat 32A.", exjp:"窓側の席をお願いします。/ かしこまりました、32Aです。", col:"window seat", coljp:"窓側の席"},
{w:"Can I carry this on?", pos:"p", jp:"これは機内に持ち込めますか", ex:"Can I carry this on? / Yes, it fits the size limit.", exjp:"これは機内に持ち込めますか。/ はい、サイズ制限内です。", col:"carry on", coljp:"機内に持ち込む"},
{w:"What is the boarding time?", pos:"p", jp:"搭乗時間は何時ですか", ex:"What is the boarding time? / Boarding starts at 10:20.", exjp:"搭乗時間は何時ですか。/ 搭乗は10時20分からです。", col:"boarding time", coljp:"搭乗時間"},
{w:"Where is gate 22?", pos:"p", jp:"22番ゲートはどこですか", ex:"Excuse me, where is gate 22? / Go straight and turn left.", exjp:"すみません、22番ゲートはどこですか。/ まっすぐ行って左です。", col:"gate", coljp:"搭乗口"},
{w:"Is the flight on time?", pos:"p", jp:"フライトは定刻ですか", ex:"Is the flight to Budapest on time? / Yes, it's on schedule.", exjp:"ブダペスト行きは定刻ですか。/ はい、予定通りです。", col:"on time", coljp:"定刻で"},
{w:"Water, please.", pos:"p", jp:"お水をください（機内）", ex:"Anything to drink? / Water, please. No ice.", exjp:"お飲み物はいかがですか。/ お水をください。氷は無しで。", col:"no ice", coljp:"氷なしで"},
{w:"Could I have a blanket, please?", pos:"p", jp:"毛布をいただけますか", ex:"Could I have a blanket, please? / Of course, here you are.", exjp:"毛布をいただけますか。/ もちろんです、どうぞ。", col:"blanket", coljp:"毛布"},
{w:"Could you help me put this up?", pos:"p", jp:"（荷物を）上に載せるのを手伝ってもらえますか", ex:"Could you help me put this up? / Sure, no problem.", exjp:"これを上に載せるのを手伝ってもらえますか。/ ええ、いいですよ。", col:"put up", coljp:"上に載せる"},
{w:"I have a connecting flight.", pos:"p", jp:"乗り継ぎ便があります", ex:"I have a connecting flight to Budapest. / Follow the transfer signs.", exjp:"ブダペストへの乗り継ぎ便があります。/ 乗り継ぎの標識に従ってください。", col:"connecting flight", coljp:"乗り継ぎ便"},
{w:"I'm here for sightseeing.", pos:"p", jp:"観光で来ました（入国審査）", ex:"What's the purpose of your visit? / I'm here for sightseeing.", exjp:"入国の目的は何ですか。/ 観光で来ました。", col:"purpose of visit", coljp:"訪問の目的"},
{w:"I'm visiting my daughter.", pos:"p", jp:"娘に会いに来ました", ex:"I'm visiting my daughter. She studies at a university in Hungary. / How nice!", exjp:"娘に会いに来ました。ハンガリーの大学で勉強しています。/ それは素敵ですね！", col:"visit", coljp:"訪ねる"},
{w:"I'll stay for ten days.", pos:"p", jp:"10日間滞在します", ex:"How long will you stay? / I'll stay for ten days.", exjp:"どのくらい滞在しますか。/ 10日間滞在します。", col:"stay", coljp:"滞在する"},
{w:"Where is baggage claim?", pos:"p", jp:"手荷物受取所はどこですか", ex:"Where is baggage claim? / It's downstairs, follow the signs.", exjp:"手荷物受取所はどこですか。/ 下の階です。標識に従ってください。", col:"baggage claim", coljp:"手荷物受取所"},
{w:"My suitcase hasn't come out.", pos:"p", jp:"スーツケースが出てきません", ex:"My suitcase hasn't come out. / Please fill in this form at the lost baggage desk.", exjp:"スーツケースが出てきません。/ 手荷物紛失カウンターでこの用紙にご記入ください。", col:"suitcase", coljp:"スーツケース"}
]},

{id:"hotel", name:"🏨 ホテル", data:[
{w:"I have a reservation.", pos:"p", jp:"予約しています", ex:"Hello, I have a reservation. My name is Sato. / Welcome! Let me check.", exjp:"こんにちは、予約しています。佐藤です。/ ようこそ！確認いたします。", col:"reservation", coljp:"予約"},
{w:"Check in, please.", pos:"p", jp:"チェックインをお願いします", ex:"Check in, please. / May I see your passport?", exjp:"チェックインをお願いします。/ パスポートを拝見できますか。", col:"check in", coljp:"チェックイン"},
{w:"Does it include breakfast?", pos:"p", jp:"朝食は含まれていますか", ex:"Does it include breakfast? / Yes, from 7 to 10 on the first floor.", exjp:"朝食は含まれていますか。/ はい、1階で7時から10時までです。", col:"include", coljp:"含む"},
{w:"Could I have the Wi-Fi password?", pos:"p", jp:"Wi-Fiのパスワードを教えてください", ex:"Could I have the Wi-Fi password? / It's on this card.", exjp:"Wi-Fiのパスワードを教えてもらえますか。/ このカードに書いてあります。", col:"password", coljp:"パスワード"},
{w:"What time is check-out?", pos:"p", jp:"チェックアウトは何時ですか", ex:"What time is check-out? / It's 11 a.m.", exjp:"チェックアウトは何時ですか。/ 午前11時です。", col:"check-out", coljp:"チェックアウト"},
{w:"Where is the elevator?", pos:"p", jp:"エレベーターはどこですか", ex:"Where is the elevator? / Around the corner, on your right.", exjp:"エレベーターはどこですか。/ 角を曲がって右側です。", col:"elevator", coljp:"エレベーター"},
{w:"Could I have another towel?", pos:"p", jp:"タオルをもう1枚もらえますか", ex:"Could I have another towel? / Sure, I'll bring one to your room.", exjp:"タオルをもう1枚もらえますか。/ かしこまりました、お部屋にお持ちします。", col:"towel", coljp:"タオル"},
{w:"Can you keep my luggage?", pos:"p", jp:"荷物を預かってもらえますか", ex:"Can you keep my luggage until 3 p.m.? / Of course. Here's your tag.", exjp:"3時まで荷物を預かってもらえますか。/ もちろんです。こちらが引換札です。", col:"luggage", coljp:"荷物"},
{w:"The key doesn't work.", pos:"p", jp:"鍵が開きません", ex:"The key doesn't work. / I'll reset the card for you.", exjp:"鍵が開きません。/ カードを再設定いたします。", col:"key", coljp:"鍵"},
{w:"Could I have a late check-out?", pos:"p", jp:"チェックアウトを遅らせられますか", ex:"Could I have a late check-out? / Until 1 p.m. is fine.", exjp:"チェックアウトを遅らせられますか。/ 午後1時までなら大丈夫です。", col:"late check-out", coljp:"レイトチェックアウト"},
{w:"Is there a convenience store nearby?", pos:"p", jp:"近くにコンビニ（売店）はありますか", ex:"Is there a convenience store nearby? / There's a small shop across the street.", exjp:"近くに売店はありますか。/ 通りの向かいに小さな店があります。", col:"nearby", coljp:"近くに"},
{w:"Could you call a taxi for me?", pos:"p", jp:"タクシーを呼んでもらえますか", ex:"Could you call a taxi for me? / Sure, it will arrive in five minutes.", exjp:"タクシーを呼んでもらえますか。/ かしこまりました、5分で来ます。", col:"call a taxi", coljp:"タクシーを呼ぶ"},
{w:"Can I pay by credit card?", pos:"p", jp:"クレジットカードで払えますか", ex:"Can I pay by credit card? / Yes, we accept Visa and Mastercard.", exjp:"クレジットカードで払えますか。/ はい、VisaとMastercardが使えます。", col:"pay by card", coljp:"カードで払う"},
{w:"Check out, please.", pos:"p", jp:"チェックアウトをお願いします", ex:"Check out, please. Room 502. / Here's your receipt.", exjp:"チェックアウトをお願いします。502号室です。/ こちらが領収書です。", col:"receipt", coljp:"領収書"},
{w:"I really enjoyed my stay.", pos:"p", jp:"とても快適に過ごせました", ex:"I really enjoyed my stay. Thank you. / We're glad to hear that!", exjp:"とても快適に過ごせました。ありがとう。/ そう言っていただけて嬉しいです！", col:"stay", coljp:"滞在"}
]},

{id:"breakfast", name:"🍳 朝ごはん", data:[
{w:"Good morning. Room 502.", pos:"p", jp:"おはようございます。502号室です", ex:"Good morning. Room 502. / Good morning! Please take any seat.", exjp:"おはようございます。502号室です。/ おはようございます！お好きな席へどうぞ。", col:"room number", coljp:"部屋番号"},
{w:"Is this table free?", pos:"p", jp:"この席は空いていますか", ex:"Is this table free? / Yes, go ahead.", exjp:"この席は空いていますか。/ はい、どうぞ。", col:"free", coljp:"空いている"},
{w:"Coffee, please.", pos:"p", jp:"コーヒーをください", ex:"Coffee or tea? / Coffee, please. With milk.", exjp:"コーヒーと紅茶どちらにしますか。/ コーヒーをください。ミルク入りで。", col:"with milk", coljp:"ミルク入りで"},
{w:"Could I have some more bread?", pos:"p", jp:"パンをもう少しもらえますか", ex:"Could I have some more bread? / Of course, I'll bring it right away.", exjp:"パンをもう少しもらえますか。/ もちろん、すぐお持ちします。", col:"some more", coljp:"もう少し"},
{w:"Scrambled, please.", pos:"p", jp:"（卵は）スクランブルでお願いします", ex:"How would you like your eggs? / Scrambled, please.", exjp:"卵はどのようにしますか。/ スクランブルでお願いします。", col:"scrambled eggs", coljp:"スクランブルエッグ"},
{w:"What is this?", pos:"p", jp:"これは何ですか", ex:"Excuse me, what is this? / That's goulash soup, a Hungarian dish.", exjp:"すみません、これは何ですか。/ グヤーシュです。ハンガリー料理ですよ。", col:"dish", coljp:"料理"},
{w:"Is it buffet style?", pos:"p", jp:"ビュッフェ形式ですか", ex:"Is breakfast buffet style? / Yes, help yourself.", exjp:"朝食はビュッフェ形式ですか。/ はい、ご自由にどうぞ。", col:"buffet", coljp:"ビュッフェ"},
{w:"Where are the plates?", pos:"p", jp:"お皿はどこですか", ex:"Where are the plates? / At the end of the counter.", exjp:"お皿はどこですか。/ カウンターの端にあります。", col:"plate", coljp:"皿"},
{w:"One more cup of coffee, please.", pos:"p", jp:"コーヒーをもう一杯ください", ex:"One more cup of coffee, please. / Coming right up.", exjp:"コーヒーをもう一杯ください。/ ただいまお持ちします。", col:"one more", coljp:"もう一つ"},
{w:"Is this vegetarian?", pos:"p", jp:"これはベジタリアン向けですか", ex:"Is this vegetarian? / Yes, it has no meat.", exjp:"これはベジタリアン向けですか。/ はい、お肉は入っていません。", col:"vegetarian", coljp:"ベジタリアン"},
{w:"Can I take this to my room?", pos:"p", jp:"部屋に持って行ってもいいですか", ex:"Can I take this apple to my room? / I'm afraid food should be eaten here.", exjp:"このリンゴを部屋に持って行ってもいいですか。/ 申し訳ありませんが、お食事はこちらでお願いします。", col:"take to", coljp:"〜へ持って行く"},
{w:"It was delicious.", pos:"p", jp:"おいしかったです", ex:"It was delicious. Thank you! / Have a great day!", exjp:"おいしかったです。ありがとう！/ 良い一日を！", col:"delicious", coljp:"とてもおいしい"}
]},

{id:"trouble", name:"🛠️ 部屋トラブル・エアコン", data:[
{w:"The air conditioner doesn't work.", pos:"p", jp:"エアコンが動きません", ex:"The air conditioner doesn't work. / I'll send someone to check it.", exjp:"エアコンが動きません。/ 確認する者を向かわせます。", col:"air conditioner", coljp:"エアコン"},
{w:"How do I turn on the air conditioner?", pos:"p", jp:"エアコンはどうやってつけますか", ex:"How do I turn on the air conditioner? / Use the remote on the wall.", exjp:"エアコンはどうやってつけますか。/ 壁のリモコンを使ってください。", col:"turn on", coljp:"（電源を）つける"},
{w:"The room is too hot.", pos:"p", jp:"部屋が暑すぎます", ex:"The room is too hot. Can you lower the temperature? / Let me adjust it.", exjp:"部屋が暑すぎます。温度を下げられますか。/ 調整いたします。", col:"too hot", coljp:"暑すぎる"},
{w:"The room is too cold.", pos:"p", jp:"部屋が寒すぎます", ex:"The room is too cold. / I'll bring an extra blanket, and please try this switch.", exjp:"部屋が寒すぎます。/ 追加の毛布をお持ちします。このスイッチも試してください。", col:"too cold", coljp:"寒すぎる"},
{w:"There is no hot water.", pos:"p", jp:"お湯が出ません", ex:"There is no hot water in the shower. / Sorry, we'll fix it right away.", exjp:"シャワーのお湯が出ません。/ 申し訳ありません、すぐに直します。", col:"hot water", coljp:"お湯"},
{w:"The Wi-Fi isn't working.", pos:"p", jp:"Wi-Fiがつながりません", ex:"The Wi-Fi isn't working in my room. / Please try this new password.", exjp:"部屋でWi-Fiがつながりません。/ この新しいパスワードを試してください。", col:"work", coljp:"（機械が）動く"},
{w:"The light doesn't turn on.", pos:"p", jp:"電気がつきません", ex:"The light doesn't turn on. / Did you put the key card in the slot by the door?", exjp:"電気がつきません。/ ドア横の差し込み口にカードを入れましたか。", col:"light", coljp:"照明"},
{w:"The toilet is clogged.", pos:"p", jp:"トイレが詰まりました", ex:"The toilet is clogged. / We'll send maintenance right now.", exjp:"トイレが詰まりました。/ すぐに係を向かわせます。", col:"clogged", coljp:"詰まった"},
{w:"Could you send someone to fix it?", pos:"p", jp:"直せる人をよこしてもらえますか", ex:"Could you send someone to fix it? / Yes, within 10 minutes.", exjp:"直せる人をよこしてもらえますか。/ はい、10分以内に伺います。", col:"fix", coljp:"修理する"},
{w:"The room next door is noisy.", pos:"p", jp:"隣の部屋がうるさいです", ex:"The room next door is very noisy. / We'll ask them to be quiet.", exjp:"隣の部屋がとてもうるさいです。/ 静かにするようお願いします。", col:"noisy", coljp:"うるさい"},
{w:"Could I change rooms?", pos:"p", jp:"部屋を替えてもらえますか", ex:"Could I change rooms? / Let me check availability.", exjp:"部屋を替えてもらえますか。/ 空きを確認いたします。", col:"change rooms", coljp:"部屋を替える"},
{w:"I left my charger in the room.", pos:"p", jp:"部屋に充電器を忘れました", ex:"I left my charger in the room I checked out of. / We found it. Here you are.", exjp:"チェックアウトした部屋に充電器を忘れました。/ 見つかりましたよ。どうぞ。", col:"charger", coljp:"充電器"}
]},

{id:"train", name:"🚆 電車でウィーンへ", data:[
{w:"Two tickets to Vienna, please.", pos:"p", jp:"ウィーンまで切符を2枚ください", ex:"Two tickets to Vienna, please. / One way or round trip?", exjp:"ウィーンまで切符を2枚ください。/ 片道ですか、往復ですか。", col:"ticket", coljp:"切符"},
{w:"One way, please.", pos:"p", jp:"片道でお願いします", ex:"One way or round trip? / One way, please.", exjp:"片道ですか往復ですか。/ 片道でお願いします。", col:"one way", coljp:"片道"},
{w:"Which platform for the train to Vienna?", pos:"p", jp:"ウィーン行きは何番ホームですか", ex:"Which platform for the train to Vienna? / Platform 9.", exjp:"ウィーン行きは何番ホームですか。/ 9番ホームです。", col:"platform", coljp:"プラットホーム"},
{w:"What time does the train leave?", pos:"p", jp:"電車は何時に出発しますか", ex:"What time does the train leave? / At 10:40, in fifteen minutes.", exjp:"電車は何時に出発しますか。/ 10時40分、15分後です。", col:"leave", coljp:"出発する"},
{w:"How long does it take to Vienna?", pos:"p", jp:"ウィーンまでどのくらいかかりますか", ex:"How long does it take to Vienna? / About two and a half hours.", exjp:"ウィーンまでどのくらいかかりますか。/ 約2時間半です。", col:"take", coljp:"（時間が）かかる"},
{w:"Do I need a seat reservation?", pos:"p", jp:"座席の予約は必要ですか", ex:"Do I need a seat reservation? / It's optional, but recommended.", exjp:"座席の予約は必要ですか。/ 任意ですが、おすすめします。", col:"seat reservation", coljp:"座席予約"},
{w:"Is this seat taken?", pos:"p", jp:"この席は空いていますか（車内）", ex:"Excuse me, is this seat taken? / No, go ahead.", exjp:"すみません、この席は誰かいますか。/ いいえ、どうぞ。", col:"taken", coljp:"（席が）ふさがっている"},
{w:"Is this the train to Vienna?", pos:"p", jp:"これはウィーン行きの電車ですか", ex:"Is this the train to Vienna? / Yes, it goes to Wien Hauptbahnhof.", exjp:"これはウィーン行きの電車ですか。/ はい、ウィーン中央駅行きです。", col:"train to", coljp:"〜行きの電車"},
{w:"Where should I change trains?", pos:"p", jp:"どこで乗り換えればいいですか", ex:"Where should I change trains? / No need, it's a direct train.", exjp:"どこで乗り換えればいいですか。/ 乗り換え不要です。直通ですよ。", col:"change trains", coljp:"電車を乗り換える"},
{w:"Could you tell me when we arrive?", pos:"p", jp:"着いたら教えてもらえますか", ex:"Could you tell me when we arrive in Vienna? / Sure, I'll let you know.", exjp:"ウィーンに着いたら教えてもらえますか。/ ええ、お知らせしますね。", col:"arrive", coljp:"到着する"},
{w:"Tickets, please.", pos:"p", jp:"切符を拝見します（車掌）", ex:"Tickets, please. / Here you are.", exjp:"切符を拝見します。/ はい、どうぞ。", col:"conductor", coljp:"車掌"},
{w:"Is there a dining car?", pos:"p", jp:"食堂車はありますか", ex:"Is there a dining car on this train? / Yes, in car number 6.", exjp:"この電車に食堂車はありますか。/ はい、6号車です。", col:"dining car", coljp:"食堂車"},
{w:"Where is the luggage rack?", pos:"p", jp:"荷物置き場はどこですか", ex:"Where is the luggage rack? / At the end of the car.", exjp:"荷物置き場はどこですか。/ 車両の端にあります。", col:"luggage rack", coljp:"荷物棚"},
{w:"Does this train stop at Wien Hauptbahnhof?", pos:"p", jp:"この電車はウィーン中央駅に停まりますか", ex:"Does this train stop at Wien Hauptbahnhof? / Yes, it's the last stop.", exjp:"この電車はウィーン中央駅に停まりますか。/ はい、終点です。", col:"last stop", coljp:"終点"}
]},

{id:"museum", name:"🖼️ 美術館・ウィーン観光", data:[
{w:"Two adults, please.", pos:"p", jp:"大人2枚ください", ex:"Two adults, please. / That's 42 euros.", exjp:"大人2枚ください。/ 42ユーロです。", col:"adult ticket", coljp:"大人料金チケット"},
{w:"One student, please.", pos:"p", jp:"学生1枚ください", ex:"One student, please. / May I see the student ID?", exjp:"学生1枚ください。/ 学生証を拝見できますか。", col:"student ID", coljp:"学生証"},
{w:"What time does the museum open?", pos:"p", jp:"美術館は何時に開きますか", ex:"What time does the museum open? / At 10 a.m., and it closes at 6.", exjp:"美術館は何時に開きますか。/ 午前10時です。閉館は6時です。", col:"open", coljp:"開く"},
{w:"Do you have an audio guide in Japanese?", pos:"p", jp:"日本語の音声ガイドはありますか", ex:"Do you have an audio guide in Japanese? / Yes, it's 5 euros.", exjp:"日本語の音声ガイドはありますか。/ はい、5ユーロです。", col:"audio guide", coljp:"音声ガイド"},
{w:"Can I take pictures here?", pos:"p", jp:"ここで写真を撮ってもいいですか", ex:"Can I take pictures here? / Yes, but no flash, please.", exjp:"ここで写真を撮ってもいいですか。/ はい、でもフラッシュは禁止です。", col:"no flash", coljp:"フラッシュ禁止"},
{w:"Where is this painting?", pos:"p", jp:"この絵はどこにありますか", ex:"Where is this painting by Klimt? / It's on the first floor, room 5.", exjp:"このクリムトの絵はどこにありますか。/ 2階の第5室です。", col:"painting", coljp:"絵画"},
{w:"Where can I buy tickets online?", pos:"p", jp:"チケットはオンラインで買えますか", ex:"Can I buy tickets online to skip the line? / Yes, on our official website.", exjp:"列を避けるためオンラインでチケットを買えますか。/ はい、公式サイトで買えます。", col:"skip the line", coljp:"列に並ばずに済む"},
{w:"Is there a guided tour today?", pos:"p", jp:"今日ガイドツアーはありますか", ex:"Is there a guided tour today? / Yes, in English at 2 p.m.", exjp:"今日ガイドツアーはありますか。/ はい、英語のツアーが午後2時にあります。", col:"guided tour", coljp:"ガイド付きツアー"},
{w:"Where is the cloakroom?", pos:"p", jp:"クローク（荷物預け）はどこですか", ex:"Where is the cloakroom? / Next to the entrance, it's free.", exjp:"クロークはどこですか。/ 入口の横です。無料ですよ。", col:"cloakroom", coljp:"手荷物預かり所"},
{w:"When was this palace built?", pos:"p", jp:"この宮殿はいつ建てられたのですか", ex:"When was this palace built? / In the 18th century, for the Habsburgs.", exjp:"この宮殿はいつ建てられたのですか。/ 18世紀、ハプスブルク家のために建てられました。", col:"palace", coljp:"宮殿"},
{w:"I'm interested in history.", pos:"p", jp:"歴史に興味があります", ex:"I'm interested in history. Which exhibition do you recommend? / The Imperial Treasury is a must-see.", exjp:"歴史に興味があります。おすすめの展示はどれですか。/ 王宮宝物館は必見です。", col:"exhibition", coljp:"展示"},
{w:"How do I get to Schönbrunn Palace?", pos:"p", jp:"シェーンブルン宮殿へはどう行けばいいですか", ex:"How do I get to Schönbrunn Palace? / Take metro line U4 to Schönbrunn station.", exjp:"シェーンブルン宮殿へはどう行けばいいですか。/ 地下鉄U4線でシェーンブルン駅までどうぞ。", col:"get to", coljp:"〜へ行く"},
{w:"Could you take a picture of us?", pos:"p", jp:"私たちの写真を撮ってもらえますか", ex:"Could you take a picture of us? / Sure! Say cheese!", exjp:"私たちの写真を撮ってもらえますか。/ いいですよ！はい、チーズ！", col:"take a picture", coljp:"写真を撮る"},
{w:"Is the opera house open for visits?", pos:"p", jp:"オペラ座は見学できますか", ex:"Is the opera house open for visits? / Yes, there are tours every afternoon.", exjp:"オペラ座は見学できますか。/ はい、毎日午後にツアーがあります。", col:"opera house", coljp:"オペラ劇場"},
{w:"Where can I try Sachertorte?", pos:"p", jp:"ザッハトルテはどこで食べられますか", ex:"Where can I try Sachertorte? / Café Sacher is famous, but there's often a line.", exjp:"ザッハトルテはどこで食べられますか。/ カフェ・ザッハーが有名ですが、よく行列ができます。", col:"famous", coljp:"有名な"},
{w:"This is breathtaking.", pos:"p", jp:"息をのむほど素晴らしいです", ex:"This is breathtaking. / The ceiling art is from the 1700s.", exjp:"息をのむほど素晴らしいです。/ その天井画は1700年代のものですよ。", col:"breathtaking", coljp:"息をのむような"}
]},

{id:"dinner", name:"🍽️ 晩ごはん・レストラン", data:[
{w:"A table for two, please.", pos:"p", jp:"2人席をお願いします", ex:"Good evening. A table for two, please. / This way, please.", exjp:"こんばんは。2人席をお願いします。/ こちらへどうぞ。", col:"table for two", coljp:"2人用の席"},
{w:"We have a reservation at seven.", pos:"p", jp:"7時に予約しています", ex:"We have a reservation at seven. Sato. / Welcome, your table is ready.", exjp:"7時に予約しています。佐藤です。/ ようこそ、お席のご用意ができています。", col:"at seven", coljp:"7時に"},
{w:"Do you have an English menu?", pos:"p", jp:"英語のメニューはありますか", ex:"Do you have an English menu? / Yes, here you are.", exjp:"英語のメニューはありますか。/ はい、どうぞ。", col:"menu", coljp:"メニュー"},
{w:"What do you recommend?", pos:"p", jp:"おすすめは何ですか", ex:"What do you recommend? / The carbonara is our specialty.", exjp:"おすすめは何ですか。/ カルボナーラが当店の名物です。", col:"recommend", coljp:"すすめる"},
{w:"I'll have this one.", pos:"p", jp:"これにします", ex:"I'll have this one. / Good choice!", exjp:"これにします。/ いい選択ですね！", col:"I'll have", coljp:"〜にします"},
{w:"Same for me, please.", pos:"p", jp:"私も同じものをお願いします", ex:"Same for me, please. / Two carbonaras, coming up.", exjp:"私も同じものをお願いします。/ カルボナーラ2つですね。", col:"same", coljp:"同じもの"},
{w:"Could we have some water?", pos:"p", jp:"お水をもらえますか", ex:"Could we have some water? / Still or sparkling?", exjp:"お水をもらえますか。/ 普通の水と炭酸水どちらにしますか。", col:"still or sparkling", coljp:"炭酸なし/炭酸入り"},
{w:"Still water, please.", pos:"p", jp:"炭酸なしの水をお願いします", ex:"Still or sparkling? / Still water, please.", exjp:"炭酸なしと炭酸入りどちらにしますか。/ 炭酸なしでお願いします。", col:"still water", coljp:"炭酸なしの水"},
{w:"A glass of house wine, please.", pos:"p", jp:"ハウスワインをグラスでください", ex:"A glass of house wine, please. / Red or white?", exjp:"ハウスワインをグラスでください。/ 赤と白どちらにしますか。", col:"house wine", coljp:"ハウスワイン"},
{w:"I'm allergic to nuts.", pos:"p", jp:"ナッツアレルギーがあります", ex:"I'm allergic to nuts. Does this dish contain any? / Let me ask the chef.", exjp:"ナッツアレルギーがあります。この料理に入っていますか。/ シェフに確認します。", col:"allergic to", coljp:"〜アレルギーがある"},
{w:"Is this for sharing?", pos:"p", jp:"これはシェア用ですか", ex:"Is this pizza for sharing? / Yes, it's good for two people.", exjp:"このピザはシェア用ですか。/ はい、2人でちょうどいいですよ。", col:"share", coljp:"分け合う"},
{w:"It's very good!", pos:"p", jp:"とてもおいしいです！", ex:"How is everything? / It's very good!", exjp:"お料理はいかがですか。/ とてもおいしいです！", col:"How is everything?", coljp:"（味は）いかがですか"},
{w:"This is not what I ordered.", pos:"p", jp:"注文したものと違います", ex:"Excuse me, this is not what I ordered. / I'm so sorry, I'll change it.", exjp:"すみません、注文したものと違います。/ 大変申し訳ありません、お取り替えします。", col:"order", coljp:"注文する"},
{w:"Could we have the check, please?", pos:"p", jp:"お会計をお願いします", ex:"Could we have the check, please? / Right away.", exjp:"お会計をお願いします。/ ただいまお持ちします。", col:"check", coljp:"会計・伝票"},
{w:"Is the cover charge included?", pos:"p", jp:"席料（コペルト）は含まれていますか", ex:"Is the cover charge included? / Yes, two euros per person.", exjp:"席料は含まれていますか。/ はい、お一人2ユーロです。", col:"cover charge", coljp:"席料（伊: コペルト）"},
{w:"Can I get this to go?", pos:"p", jp:"これを持ち帰りにできますか", ex:"Can I get this to go? / Sure, I'll box it up.", exjp:"これを持ち帰りにできますか。/ もちろん、容器に入れますね。", col:"to go", coljp:"持ち帰りで"},
{w:"Everything was wonderful.", pos:"p", jp:"すべて素晴らしかったです", ex:"Everything was wonderful. Thank you! / Grazie! Come again!", exjp:"すべて素晴らしかったです。ありがとう！/ グラツィエ！またお越しください！", col:"wonderful", coljp:"素晴らしい"}
]},

{id:"shopping", name:"🛒 スーパー・買いもの", data:[
{w:"How much is this?", pos:"p", jp:"これはいくらですか", ex:"How much is this? / It's 12 euros.", exjp:"これはいくらですか。/ 12ユーロです。", col:"how much", coljp:"いくら"},
{w:"I'm just looking, thank you.", pos:"p", jp:"見ているだけです、ありがとう", ex:"Can I help you? / I'm just looking, thank you.", exjp:"何かお探しですか。/ 見ているだけです、ありがとう。", col:"just looking", coljp:"見ているだけ"},
{w:"Where can I find water?", pos:"p", jp:"水はどこにありますか（スーパー）", ex:"Where can I find water? / Aisle 3, next to the juice.", exjp:"水はどこにありますか。/ 3番通路、ジュースの隣です。", col:"aisle", coljp:"（店内の）通路"},
{w:"Do I need to weigh this myself?", pos:"p", jp:"これは自分で計るのですか（野菜・果物）", ex:"Do I need to weigh this myself? / Yes, use the scale and put the sticker on.", exjp:"これは自分で計るのですか。/ はい、はかりを使ってシールを貼ってください。", col:"weigh", coljp:"重さを量る"},
{w:"A bag, please.", pos:"p", jp:"袋をください（レジ）", ex:"A bag, please. / That's 10 cents.", exjp:"袋をください。/ 10セントです。", col:"bag", coljp:"袋"},
{w:"Can I pay in cash?", pos:"p", jp:"現金で払えますか", ex:"Can I pay in cash? / Of course.", exjp:"現金で払えますか。/ もちろんです。", col:"in cash", coljp:"現金で"},
{w:"Do you have this in another color?", pos:"p", jp:"色違いはありますか", ex:"Do you have this in another color? / We have it in blue and beige.", exjp:"色違いはありますか。/ 青とベージュがあります。", col:"another color", coljp:"別の色"},
{w:"Can I try this on?", pos:"p", jp:"試着してもいいですか", ex:"Can I try this on? / Sure, the fitting room is over there.", exjp:"試着してもいいですか。/ どうぞ、試着室はあちらです。", col:"try on", coljp:"試着する"},
{w:"I'll take it.", pos:"p", jp:"これをください（買います）", ex:"I'll take it. / Great! Shall I wrap it?", exjp:"これをください。/ ありがとうございます！お包みしましょうか。", col:"take", coljp:"買う"},
{w:"Could you wrap it as a gift?", pos:"p", jp:"プレゼント用に包んでもらえますか", ex:"Could you wrap it as a gift? It's for my daughter. / Of course!", exjp:"プレゼント用に包んでもらえますか。娘へなんです。/ もちろんです！", col:"wrap", coljp:"包む"},
{w:"Do you have tax-free shopping?", pos:"p", jp:"免税はできますか", ex:"Do you have tax-free shopping? / Yes, for purchases over 70 euros.", exjp:"免税はできますか。/ はい、70ユーロ以上のお買い物で可能です。", col:"tax-free", coljp:"免税"},
{w:"Could I have a receipt?", pos:"p", jp:"レシートをもらえますか", ex:"Could I have a receipt? / Here you are.", exjp:"レシートをもらえますか。/ どうぞ。", col:"receipt", coljp:"レシート・領収書"},
{w:"Where can I buy souvenirs?", pos:"p", jp:"お土産はどこで買えますか", ex:"Where can I buy souvenirs? / Try the market near the Pantheon.", exjp:"お土産はどこで買えますか。/ パンテオン近くの市場がおすすめです。", col:"souvenir", coljp:"お土産"},
{w:"Is this local cheese?", pos:"p", jp:"これは地元のチーズですか", ex:"Is this local cheese? / Yes, it's pecorino from this region.", exjp:"これは地元のチーズですか。/ はい、この地方のペコリーノです。", col:"local", coljp:"地元の"}
]},

{id:"campus", name:"🎓 娘の大学へ", data:[
{w:"I'm here to visit my daughter.", pos:"p", jp:"娘に会いに来ました（受付）", ex:"I'm here to visit my daughter. She's a student here. / Welcome! Please sign in.", exjp:"娘に会いに来ました。ここの学生です。/ ようこそ！受付簿にご記入ください。", col:"sign in", coljp:"（受付で）記帳する"},
{w:"Do I need a visitor pass?", pos:"p", jp:"来客用のパスは必要ですか", ex:"Do I need a visitor pass? / Yes, please wear this badge.", exjp:"来客用のパスは必要ですか。/ はい、このバッジをつけてください。", col:"visitor pass", coljp:"来客用パス"},
{w:"Where is the main building?", pos:"p", jp:"本館はどこですか", ex:"Where is the main building? / Straight ahead, the one with the clock tower.", exjp:"本館はどこですか。/ まっすぐ先の、時計塔がある建物です。", col:"main building", coljp:"本館"},
{w:"My daughter studies medicine here.", pos:"p", jp:"娘はここで医学を勉強しています", ex:"My daughter studies medicine here. / Oh, that's a wonderful program.", exjp:"娘はここで医学を勉強しています。/ まあ、素晴らしい課程ですね。", col:"study", coljp:"専攻する"},
{w:"Can we look around the campus?", pos:"p", jp:"キャンパスを見学してもいいですか", ex:"Can we look around the campus? / Sure, here's a campus map.", exjp:"キャンパスを見学してもいいですか。/ どうぞ。こちらがキャンパスマップです。", col:"look around", coljp:"見て回る"},
{w:"Is there a cafeteria for visitors?", pos:"p", jp:"来客も使える食堂はありますか", ex:"Is there a cafeteria for visitors? / Yes, on the ground floor.", exjp:"来客も使える食堂はありますか。/ はい、1階にあります。", col:"cafeteria", coljp:"食堂"},
{w:"Nice to meet you. I'm her mother.", pos:"p", jp:"はじめまして。母です", ex:"Nice to meet you. I'm her mother. / Nice to meet you too! She talks about you a lot.", exjp:"はじめまして。この子の母です。/ はじめまして！娘さんからよく伺っています。", col:"mother", coljp:"母"},
{w:"Thank you for taking care of my daughter.", pos:"p", jp:"娘がお世話になっています", ex:"Thank you for taking care of my daughter. / She's doing really well here.", exjp:"娘がお世話になっています。/ 彼女はこちらでとても頑張っていますよ。", col:"take care of", coljp:"〜の世話をする"}
]},

{id:"help", name:"💊 困ったとき", data:[
{w:"Could you help me?", pos:"p", jp:"助けてもらえますか", ex:"Excuse me, could you help me? / Of course. What's wrong?", exjp:"すみません、助けてもらえますか。/ もちろん。どうしましたか。", col:"help", coljp:"助ける"},
{w:"Could you say that again?", pos:"p", jp:"もう一度言ってもらえますか", ex:"Could you say that again? / Sure. Platform nine.", exjp:"もう一度言ってもらえますか。/ いいですよ。9番ホームです。", col:"again", coljp:"もう一度"},
{w:"Could you speak more slowly?", pos:"p", jp:"もっとゆっくり話してもらえますか", ex:"Could you speak more slowly? / Oh, sorry. Is-this-better?", exjp:"もっとゆっくり話してもらえますか。/ ああ、ごめんなさい。これで、どう、ですか。", col:"slowly", coljp:"ゆっくり"},
{w:"I'm lost.", pos:"p", jp:"道に迷いました", ex:"I'm lost. Where is this hotel? / Let me show you on the map.", exjp:"道に迷いました。このホテルはどこですか。/ 地図でお見せしますね。", col:"lost", coljp:"迷った"},
{w:"I lost my wallet.", pos:"p", jp:"財布をなくしました", ex:"I lost my wallet. / When did you last see it?", exjp:"財布をなくしました。/ 最後に見たのはいつですか。", col:"wallet", coljp:"財布"},
{w:"My phone was stolen.", pos:"p", jp:"携帯を盗まれました", ex:"My phone was stolen on the metro. / Please report it at the police station.", exjp:"地下鉄で携帯を盗まれました。/ 警察署で届け出てください。", col:"stolen", coljp:"盗まれた"},
{w:"Where is the police station?", pos:"p", jp:"警察署はどこですか", ex:"Where is the police station? / Two blocks from here.", exjp:"警察署はどこですか。/ ここから2ブロック先です。", col:"police station", coljp:"警察署"},
{w:"I feel sick.", pos:"p", jp:"気分が悪いです", ex:"I feel sick. / Do you need a doctor?", exjp:"気分が悪いです。/ お医者さんが必要ですか。", col:"feel sick", coljp:"気分が悪い"},
{w:"I have a stomachache.", pos:"p", jp:"お腹が痛いです", ex:"I have a stomachache. Do you have any medicine? / Yes, take this after meals.", exjp:"お腹が痛いです。薬はありますか。/ はい、食後にこれを飲んでください。", col:"stomachache", coljp:"腹痛"},
{w:"Is there a pharmacy nearby?", pos:"p", jp:"近くに薬局はありますか", ex:"Is there a pharmacy nearby? / Yes, the one with the green cross sign.", exjp:"近くに薬局はありますか。/ はい、緑の十字の看板の店です。", col:"pharmacy", coljp:"薬局"},
{w:"Please call an ambulance.", pos:"p", jp:"救急車を呼んでください", ex:"Please call an ambulance! / Calling now. Stay calm.", exjp:"救急車を呼んでください！/ 今かけています。落ち着いて。", col:"ambulance", coljp:"救急車"},
{w:"Where is the Japanese embassy?", pos:"p", jp:"日本大使館はどこですか", ex:"Where is the Japanese embassy? / I'll write down the address for you.", exjp:"日本大使館はどこですか。/ 住所を書いてあげますね。", col:"embassy", coljp:"大使館"}
]},

{id:"greetings", name:"🗣️ 現地語あいさつ", data:[
{w:"Köszönöm (クスヌム)", pos:"p", jp:"ありがとう（ハンガリー語）", ex:"Köszönöm! / Szívesen! (You're welcome!)", exjp:"ありがとう！/ どういたしまして！", col:"ハンガリー語", coljp:"ブダペストで使おう"},
{w:"Szia (シア)", pos:"p", jp:"こんにちは/やあ（ハンガリー語）", ex:"Szia! / Szia! Nice to see you!", exjp:"やあ！/ やあ！会えてうれしいよ！", col:"ハンガリー語", coljp:"くだけた挨拶"},
{w:"Jó napot (ヨーナポト)", pos:"p", jp:"こんにちは（ハンガリー語・丁寧）", ex:"Jó napot! / Jó napot kívánok!", exjp:"こんにちは！/ こんにちは（丁寧に）！", col:"ハンガリー語", coljp:"お店や受付で"},
{w:"Danke (ダンケ)", pos:"p", jp:"ありがとう（ドイツ語・ウィーン）", ex:"Danke! / Bitte! (You're welcome!)", exjp:"ありがとう！/ どういたしまして！", col:"ドイツ語", coljp:"ウィーンで使おう"},
{w:"Grüß Gott (グリュスゴット)", pos:"p", jp:"こんにちは（オーストリア式挨拶）", ex:"Grüß Gott! / Grüß Gott! What can I do for you?", exjp:"こんにちは！/ こんにちは！ご用件は何でしょう。", col:"ドイツ語", coljp:"オーストリア独特の挨拶"},
{w:"Bitte (ビッテ)", pos:"p", jp:"お願いします/どうぞ（ドイツ語）", ex:"Ein Kaffee, bitte. / Kommt sofort!", exjp:"コーヒーを一つお願いします。/ すぐお持ちします！", col:"ドイツ語", coljp:"魔法の言葉"},
{w:"Grazie (グラツィエ)", pos:"p", jp:"ありがとう（イタリア語・ローマ）", ex:"Grazie mille! / Prego!", exjp:"どうもありがとう！/ どういたしまして！", col:"イタリア語", coljp:"ローマで使おう"},
{w:"Buongiorno (ブオンジョルノ)", pos:"p", jp:"おはよう/こんにちは（イタリア語）", ex:"Buongiorno! / Buongiorno, signora!", exjp:"こんにちは！/ こんにちは、マダム！", col:"イタリア語", coljp:"午前〜昼の挨拶"},
{w:"Buonasera (ブオナセーラ)", pos:"p", jp:"こんばんは（イタリア語）", ex:"Buonasera! A table for two? / Buonasera! This way.", exjp:"こんばんは！2名様ですか。/ こんばんは！こちらへどうぞ。", col:"イタリア語", coljp:"夕方からの挨拶"},
{w:"Per favore (ペルファヴォーレ)", pos:"p", jp:"お願いします（イタリア語）", ex:"Un caffè, per favore. / Subito!", exjp:"コーヒーを一つお願いします。/ すぐに！", col:"イタリア語", coljp:"注文に添えて"},
{w:"Quanto costa? (クアントコスタ)", pos:"p", jp:"いくらですか（イタリア語）", ex:"Quanto costa? / Dieci euro. (Ten euros.)", exjp:"いくらですか。/ 10ユーロです。", col:"イタリア語", coljp:"買い物で"},
{w:"Il conto, per favore (イルコント)", pos:"p", jp:"お会計をお願いします（イタリア語）", ex:"Il conto, per favore. / Certo, subito!", exjp:"お会計をお願いします。/ はい、すぐに！", col:"イタリア語", coljp:"レストランで"}
]}

];
