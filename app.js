'use strict';

//[0No(1~), 1Word, 2Mean, 3Part, 4Change, 5Note, 6Lv, 7State, 8Sort]
let wordList = [
/*
    [5, `ab|fahren`, `出発する`, 2, `→ fahren`, ``, 2, null, null],
    [6, `abhängig`, `依存した`, 4, ``, ``, 2, null, null],
    [7, `ab|holen`, `迎えに行く`, 2, ``, ``, 0, null, null],
    [8, `ab|pumpen`, `ポンプで排水する`, 2, ``, ``, 5, null, null],
    [9, `ab|reißen`, `もぎ取る`, 2, `→ reißen`, ``, 5, null, null],
    [10, `ab|reisen`, `旅立つ`, 2, ``, ``, 4, null, null],
    [11, `ab|schicken`, `発送する`, 2, ``, ``, 5, null, null],
    [12, `ab|schließen`, `鍵を掛ける`, 2, `→ schließen`, ``, 1, null, null],
    [13, `ab|stürzen`, `堕落する`, 2, `→ stürzen`, ``, 4, null, null],
    [14, `das AKW`, `原子力発電所[= Atomkraftwerk]`, 1, ``, ``, 4, null, null],
    [16, `allein`, `一人きりで`, 4, ``, ``, 0, null, null],
    [17, `als`, `…したとき`, 6, ``, `従属接続詞`, 0, null, null],
    [18, `also`, `それでは`, 3, ``, ``, 0, null, null],
    [20, `altmodisch`, `古風な`, 4, ``, ``, 5, null, null],
    [21, `an`, `…のきわで／に／へ`, 5, ``, `３・４格支配`, 0, null, null],
    [23, `anders`, `異なって`, 3, ``, ``, 0, null, null],
    [24, `an|eignen`, `不当に自分のものにする`, 2, ``, `再`, 5, null, null],
    [25, `aneinander`, `互いに接し合って`, 3, ``, ``, 5, null, null],
    [26, `an|fallen`, `襲いかかる`, 2, `→ fallen`, ``, 5, null, null],
    [27, `an|fangen`, `始める`, 2, `→ fangen`, ``, 1, null, null],
    [28, `an|fliegen`, `〜に向けて飛ぶ`, 2, `→ fliegen`, ``, 5, null, null],
    [29, `die Angabe`, `申し立て`, 1, `Angabe ／ Angaben`, ``, 2, null, null],
    [30, `das Angebot`, `申し出`, 1, `Angebots ／ Angebote`, ``, 0, null, null],
    [31, `an|greifen`, `攻撃する`, 2, `→ greifen`, ``, 4, null, null],
    [32, `die Angst`, `不安`, 1, `Angst ／ Ängste`, ``, 1, null, null],
    [33, `der Anhang`, `付録`, 1, `Anhangs / -es ／ anhänge`, ``, 5, null, null],
    [34, `an|klagen`, `起訴する`, 2, ``, ``, 4, null, null],
    [35, `an|kommen`, `到着する`, 2, `→ kommen`, ``, 0, null, null],
    [36, `an|rufen`, `電話をかける`, 2, `→ rufen`, ``, 0, null, null],
    [37, `an|sehen`, `見る`, 2, `→ sehen`, ``, 1, null, null],
    [38, `an|sprechen`, `話しかける`, 2, `→ sprechen`, ``, 3, null, null],
    */
    [39, `(an)statt`, `…の代わりに`, 5, ``, `２格支配`, 4, null, null],
    /*
    [40, `die Antwort`, `答え`, 1, `Antwort ／ Antworten`, ``, 0, null, null],
    [41, `antworten`, `答える`, 2, ``, ``, 1, null, null],
    [42, `anwesend`, `出席している`, 4, ``, ``, 3, null, null],
    [46, `arbeitslos`, `失業している`, 4, ``, ``, 2, null, null],
    [47, `die Arbeitslosenquote`, `失業率`, 1, `Arbeitslosenquote ／ Arbeitslosenquoten`, ``, 5, null, null],
    [48, `der Arm`, `腕`, 1, `Armes ／ Arme`, ``, 1, null, null],
    [49, `die Armbanduhr`, `腕時計`, 1, `Armbanduhr ／ Armbanduhren`, ``, 5, null, null],
    [50, `die Art`, `やり方`, 1, `Art ／ Arten`, ``, 0, null, null],
    [52, `die Astrologie`, `占星術`, 1, `Astrologie ／ -`, ``, 5, null, null],
    [53, `auch`, `〜も`, 3, ``, ``, 0, null, null],
    [54, `auf`, `…の上で／に／へ`, 5, ``, `３・４格支配`, 0, null, null],
    [55, `auf|bauen`, `組み上げる`, 2, ``, ``, 2, null, null],
    [56, `die Aufgabe`, `課題`, 1, `Aufgabe ／ Aufgaben`, ``, 0, null, null],
    [57, `die Auflage`, `版`, 1, `Auflage ／ Auflagen`, ``, 3, null, null],
    [58, `auf|machen`, `開ける`, 2, ``, ``, 3, null, null],
    [59, `aufmerksam`, `注意深い`, 4, ``, ``, 2, null, null],
    [60, `der Aufsatz`, `作文`, 1, `Aufsatzes ／ Aufsätze`, ``, 5, null, null],
    [61, `auf|stehen`, `起きる`, 2, `→ stehen`, ``, 2, null, null],
    [62, `der Augenblick`, `瞬間`, 1, `Augenblicks ／ Augenblicke`, ``, 1, null, null],
    [64, `der Ausflug`, `ハイキング`, 1, `Ausflugs / -es ／ Aüsflüge`, ``, 2, null, null],
    [65, `aus|gehen`, `外出する`, 2, `→ gehen`, ``, 2, null, null],
    [66, `das Ausland`, `外国`, 1, `Auslands ／ -`, ``, 0, null, null],
    [67, `der Ausländer`, `外国人`, 1, `Ausländer s ／ Ausländer`, ``, 0, null, null],
    [68, `die Aussage`, `発言`, 1, `Aussage ／ Aussagen`, ``, 1, null, null],
    [69, `aus|sehen`, `見える`, 2, `→ sehen`, ``, 0, null, null],
    [70, `der Austritt`, `流出`, 1, `Austritts / -es ／ Austritte`, ``, 5, null, null],
    [71, `der Ausverkauf`, `バーゲンセール`, 1, `Ausverkaufs / -es ／ ausverkäufe`, ``, 5, null, null],
    */
    [72, `außer`, `…の外で／…以外`, 5, ``, `３格支配`, 0, null, null],
    [73, `außerhalb`, `…の外に`, 5, ``, `２格支配`, 1, null, null],
    /*
    [74, `die Ausstellung`, `展示`, 1, `Ausstellung ／ Ausstellungen`, ``, 2, null, null],
    
    
    [77, `backen`, `焼く`, 2, `backte ／ gebacken`, ``, 2, null, null],
    [78, `der Bäcker`, `パン屋`, 1, `Bäckers ／ Bäcker`, ``, 4, null, null],
    [79, `das Bad`, `入浴`, 1, `Bades ／ Bäder`, ``, 1, null, null],
    [80, `die Badewanne`, `湯船`, 1, `Badewanne ／ Badewannen`, ``, 4, null, null],
    [82, `bald`, `まもなく`, 3, `eher ／ am ehesten`, ``, 0, null, null],
    [84, `der Bau`, `建築`, 1, `Baus / -es ／ -`, ``, 2, null, null],
    [85, `bauen`, `建てる`, 2, ``, ``, 2, null, null],
    [86, `der Bauer`, `農民`, 1, `Bauern ／ Bauern`, ``, 2, null, null],
    [87, `beachten`, `守る`, 2, ``, ``, 3, null, null],
    [88, `beantragen`, `願い出る`, 2, ``, ``, 3, null, null],
    [89, `beantworten`, `答える`, 2, ``, ``, 3, null, null],
    [90, `bearbeiten`, `加工する`, 2, ``, ``, 4, null, null],
    [91, `beeindrucken`, `強い印象を与える`, 2, ``, ``, 4, null, null],
    [92, `befestigen`, `固定する`, 2, ``, ``, 4, null, null],
    [93, `befreunden`, `友達になる`, 2, ``, `再`, 5, null, null],
    [94, `begegnen`, `出会う`, 2, ``, ``, 3, null, null],
    [96, `begreifen`, `理解する`, 2, `→ greifen`, ``, 3, null, null],
    [97, `behaupten`, `主張する`, 2, ``, ``, 2, null, null],
    [98, `die Behauptung`, `主張`, 1, `Behauptung ／ Behauptungen`, ``, 4, null, null],
    [99, `die Behörde`, `官庁`, 1, `Behörde ／ Behörden`, ``, 2, null, null],
    */
    [100, `bei`, `…の近くで／…の家で／…の際に`, 5, ``, `３格支配`, 0, null, null],
    /*
    [101, `beiden`, `２つの`, 4, ``, ``, 5, null, null],
    [102, `beinahe`, `ほとんど`, 3, ``, ``, 3, null, null],
    [103, `beißen`, `噛む`, 2, `biss ／ gebissen`, ``, 5, null, null],
    [104, `bekennen`, `白状する`, 2, `→ kennen`, ``, 4, null, null],
    */
    [105, `bekommen`, `もらう`, 2, `→ kommen`, ``, 0, null, null],
    /*
    [106, `bequem`, `快適な`, 4, ``, ``, 3, null, null],
    [107, `der Berg`, `山`, 1, `Berges ／ Berge`, ``, 1, null, null],
    [108, `der Bergsteiger`, `登山家`, 1, `Bergsteigers ／ Bergsteiger`, ``, 5, null, null],
    [109, `der Bericht`, `報告`, 1, `Berichts ／ Berichte`, ``, 2, null, null],
    [110, `berichten`, `報告する`, 2, ``, ``, 1, null, null],
    [113, `berühmt`, `有名な`, 4, ``, ``, 2, null, null],
    [114, `beschäftigen`, `雇う`, 2, ``, ``, 1, null, null],
    [115, `der Beschluss`, `決定`, 1, `Beschlusses ／ Beschlüsse`, ``, 3, null, null],
    */
    [116, `besetzen`, `占める`, 2, ``, ``, 1, null, null],
    /*
    [117, `besitzen`, `所有している`, 2, `→ sitzen`, ``, 2, null, null],
    [118, `besonder`, `特別な`, 4, ``, ``, 5, null, null],
    [119, `besonders`, `特に`, 3, ``, ``, 0, null, null],
    [120, `die Besserung`, `回復`, 1, `Besserung ／ -`, ``, 4, null, null],
    [121, `bestätigen`, `正しいと認める`, 2, ``, ``, 1, null, null],
    [122, `bestehen`, `合格する`, 2, `→ stehen`, ``, 0, null, null],
    [123, `bestimmen`, `定める`, 2, ``, ``, 2, null, null]
    [126, `betonen`, `強調する`, 2, ``, ``, 2, null, null],
    [127, `betrachten`, `じっと見る`, 2, ``, ``, 2, null, null],
    [128, `das Bett`, `ベッド`, 1, `Bettes ／ Betten`, ``, 1, null, null],
    [129, `die Bevölkerung`, `住民`, 1, `Bevölkerung ／ Bevölkerungen`, ``, 1, null, null],
    [130, `bevor`, `…する前に`, 6, ``, `従属接続詞`, 1, null, null],
    [131, `der Bewohner`, `住民`, 1, `Bewohners ／ Bewohner`, ``, 2, null, null],
    [132, `bezahlen`, `代金を支払う`, 2, ``, ``, 1, null, null],
    [133, `die Bibliothek`, `図書館`, 1, `Bibliothek ／ Bibliotheken`, ``, 3, null, null],
    [135, `bieten`, `提供する`, 2, `bot ／ geboten`, ``, 1, null, null],
    [136, `billiger`, `安い`, 4, ``, ``, 5, null, null],
    [138, `bis`, `…するまで`, 6, ``, `従属接続詞`, 0, null, null],
    [139, `bitten`, `頼む`, 2, `bat ／ gebeten`, ``, 1, null, null],
    */
    [141, `bleiben`, `とどまる`, 2, `blieb ／ geblieben`, ``, 0, null, null],
    /*
    [142, `blühen`, `咲いている`, 2, ``, ``, 3, null, null],
    [143, `die Blume`, `花`, 1, `Blume ／ Blumen`, ``, 1, null, null],
    [144, `die Bombe`, `爆弾`, 1, `Bombe ／ Bomben`, ``, 4, null, null],
    [146, `der Brand`, `火事`, 1, `Brands / -es ／ Brände`, ``, 4, null, null],
    [147, `das Brasilien`, `ブラジル`, 1, ``, ``, 4, null, null],
    [148, `brauchen`, `必要とする`, 2, ``, ``, 0, null, null],
    [150, `brechen`, `折る`, 2, `bricht ／ brach ／ gebrochen`, ``, 3, null, null],
    [151, `das Brett`, `板`, 1, `Bretts / -es ／ Bretter`, ``, 4, null, null],
    [155, `das Brötchen`, `ブレートヒェン`, 1, `Brötchens ／ Brötchen`, ``, 3, null, null],
    [158, `das Büro`, `オフィス`, 1, `Büros ／ Büros`, ``, 1, null, null],


    [161, `der Chef`, `長`, 1, `Chefs ／ Chef`, ``, 1, null, null],
    [162, `die Chefin`, `長`, 1, `Chefin ／ Chefinnen`, ``, 1, null, null],
    [164, `der Clown`, `道化師`, 1, `Clowns ／ Clowns`, ``, 5, null, null],
    
    
    [167, `da`, `…だから`, 6, ``, `従属接続詞`, 0, null, null],
    [168, `dabei`, `そのそばに`, 3, ``, ``, 0, null, null],
    [170, `dafür`, `そのために`, 3, ``, ``, 0, null, null],
    [171, `die Dame`, `ご婦人`, 1, `Dame ／ Damen`, ``, 1, null, null],
    [172, `damit`, `…のために`, 6, ``, `従属接続詞`, 0, null, null],
    [173, `der Dank`, `感謝`, 1, `Dankes ／ -`, ``, 0, null, null],
    [174, `dankbar`, `感謝している`, 4, ``, ``, 3, null, null],
    [176, `dann`, `それから`, 3, ``, ``, 0, null, null],
    [177, `daran`, `それに`, 3, ``, ``, 0, null, null],
    [178, `darauf`, `その上に`, 3, ``, ``, 0, null, null],
    [179, `darüber`, `その上の方に`, 3, ``, ``, 1, null, null],
    [180, `darum`, `その周りに`, 3, ``, ``, 1, null, null],
    [181, `dass`, `…ということ`, 6, ``, `従属接続詞`, 0, null, null],
    [182, `da|stehen`, `そこにじっと立っている`, 2, `→ stehen`, ``, 5, null, null],
    [183, `dauern`, `続く`, 2, ``, ``, 1, null, null],
    [184, `der Demonstrant`, `デモ参加者`, 1, `Demonstranten ／ Demonstranten`, ``, 5, null, null],
    [185, `die Demonstration`, `デモ`, 1, `Demonstration ／ Demonstrationen`, ``, 3, null, null],
    [186, `demonstrieren`, `はっきりと示す`, 2, ``, ``, 4, null, null],
    [187, `denken`, `思う`, 2, `dachte ／ gedacht`, ``, 0, null, null],
    [188, `denn`, `なぜなら`, 6, ``, `並列接続詞`, 0, null, null],
    [189, `deshalb`, `それゆえに`, 3, ``, ``, 0, null, null],
    [190, `desto`, `それだけいっそう`, 3, ``, ``, 2, null, null],
    [195, `der Dezember`, `１２月`, 1, `Dezembers ／ Dezember`, ``, 0, null, null],
    [196, `der Diamant`, `ダイアモンド`, 1, `Diamanten ／ Diamanten`, ``, 5, null, null],
    [197, `der Dienstag`, `火曜日`, 1, `Dienstags ／ Dienstage`, ``, 0, null, null],
    [198, `dienstlich`, `勤務上の`, 4, ``, ``, 5, null, null],
    [200, `die Diskussion`, `討論`, 1, `Diskussion ／ Diskussionen`, ``, 1, null, null],
    [201, `diskutieren`, `議論する`, 2, ``, ``, 2, null, null],
    [202, `doppelt`, `２倍の`, 4, ``, ``, 2, null, null],
    [203, `das Dorf`, `村`, 1, `Dorfes ／ Dörfer`, ``, 1, null, null],
    [205, `dorthin`, `あそこへ`, 3, ``, ``, 1, null, null],
    */
    [206, `draußen`, `外に`, 3, ``, ``, 1, null, null],
    /*
    [207, `dreimal`, `３回`, 3, ``, ``, 3, null, null],
    [208, `das Dresden`, `ドレスデン`, 1, ``, ``, 3, null, null],
    [209, `das Drittel`, `３分の１`, 1, `Drittels ／ Drittel`, ``, 2, null, null],
    [210, `dunkel`, `暗い`, 4, ``, ``, 1, null, null],
    */
    [211, `durch`, `…を通って／…によって`, 5, ``, `４格支配`, 0, null, null],
    /*
    [212, `durch||brechen`, `２つに折る、突破する`, 2, `→ brechen`, `両`, 5, null, null],
    
    
    [216, `das Ehepaar`, `夫婦`, 1, `Ehepaars / -es ／ Ehepaare`, ``, 4, null, null],
    [217, `ehrlich`, `正直な`, 4, ``, ``, 3, null, null],
    [218, `der Einbrecher`, `侵入者`, 1, `Einbrechers ／ Einbrecher`, ``, 5, null, null],
    [219, `einfach`, `簡単な`, 4, ``, ``, 0, null, null],
    [220, `ein|fahren`, `入ってくる`, 2, `→ fahren`, ``, 5, null, null],
    [221, `der Eingang`, `入り口`, 1, `Eingangs / -es ／ Eingänge`, ``, 1, null, null],
    [222, `der Einkauf`, `買い物`, 1, `Einkaufs / -es ／ Einkäufe`, ``, 4, null, null],
    [223, `ein|laden`, `招待する`, 2, `→ laden`, ``, 0, null, null],
    [224, `einmal`, `一度`, 3, ``, ``, 0, null, null],
    [225, `ein|schlafen`, `眠り込む`, 2, `→ schlafen`, ``, 3, null, null],
    [226, `ein|steigen`, `乗る`, 2, `→ steigen`, ``, 2, null, null],
    [227, `das Einzelzimmer`, `一人部屋`, 1, `Einzelzimmers ／ Einzelzimmer`, ``, 4, null, null],
    [228, `ein|ziehen`, `引っ込める`, 2, `→ ziehen`, ``, 3, null, null],
    [229, `einzig`, `唯一の`, 4, ``, ``, 1, null, null],
    [230, `die* Eltern`, `両親`, 1, `- ／ Eltern`, ``, 0, null, null],
    [232, `empören`, `憤慨させる`, 2, ``, ``, 5, null, null],
    [234, `endlich`, `やっと`, 3, ``, ``, 1, null, null],
    [236, `der Enkel`, `孫`, 1, `Enkels ／ Enkel`, ``, 3, null, null],
    [237, `entdecken`, `発見する`, 2, ``, ``, 2, null, null],
    [238, `entgegen`, `…に向かって`, 5, ``, `３格支配`, 4, null, null],
    [239, `entlang`, `…に沿って`, 5, ``, `４格支配`, 3, null, null],
    [240, `entlassen`, `解雇する`, 2, `→ lassen`, ``, 3, null, null],
    [241, `entscheiden`, `決める`, 2, `→ scheiden`, ``, 1, null, null],
    [242, `die Entscheidung`, `決定`, 1, `Entscheidung ／ Entscheidungen`, ``, 1, null, null],
    [243, `der Entschluss`, `決心`, 1, `Entschlusses ／ Entschlüsse`, ``, 5, null, null],
    [244, `enttäuschen`, `失望させる`, 2, ``, ``, 3, null, null],
    [245, `die Enttäuschung`, `失望させるもの`, 1, `Enttäuschung ／ Enttäuschungen`, ``, 4, null, null],
    [246, `das Ereignis`, `出来事`, 1, `Ereignisses ／ Ereignisse`, ``, 2, null, null],
    [247, `erfüllen`, `満たす`, 2, ``, ``, 2, null, null],
    [248, `die Erfüllung`, `遂行`, 1, `Erfüllung ／ Erfüllungen`, ``, 4, null, null],
    [249, `erhalten`, `受け取る`, 2, `→ halten`, ``, 0, null, null],
    [250, `erhältlich`, `入手できる`, 4, ``, ``, 4, null, null],
    [251, `erinnern`, `思い出す`, 2, ``, `再`, 1, null, null],
    [253, `die Erkältung`, `風邪`, 1, `Erkältung ／ Erkältungen`, ``, 5, null, null],
    [254, `erklären`, `説明する`, 2, ``, ``, 0, null, null],
    [255, `erkranken`, `病気になる`, 2, ``, ``, 5, null, null],
    [256, `erlauben`, `許す`, 2, ``, ``, 1, null, null],
    [257, `die Erlaubnis`, `許可`, 1, `Erlaubnis ／ Erlaubnisse`, ``, 2, null, null],
    [258, `erleichtern`, `楽にする`, 2, ``, ``, 4, null, null],
    [259, `ernstlich`, `真面目な`, 4, ``, ``, 5, null, null],
    [260, `die Ernte`, `収穫`, 1, `Ernte ／ Ernten`, ``, 3, null, null],
    [261, `erreichen`, `手が届く`, 2, ``, ``, 1, null, null],
    [262, `erscheinen`, `現れる`, 2, `→ scheinen`, ``, 2, null, null],
    [263, `erschrecken`, `驚く`, 2, `→ schrecken`, ``, 3, null, null],
    [264, `erstaunen`, `驚かす`, 2, ``, ``, 4, null, null],
    [265, `ertrinken`, `溺れて死ぬ`, 2, `→ trinken`, ``, 5, null, null],
    [266, `erwachsen`, `生じる`, 2, `→ waschen`, ``, 3, null, null],
    [267, `erwarten`, `到来を待つ`, 2, ``, ``, 1, null, null],
    [268, `erzählen`, `物語る`, 2, ``, ``, 0, null, null],
    [269, `erzielen`, `達成する`, 2, ``, ``, 3, null, null],
    [272, `etwa`, `約`, 3, ``, ``, 0, null, null],
    [273, `das Europa`, `ヨーロッパ`, 1, ``, ``, 0, null, null],
    [275, `extra`, `別に`, 3, ``, ``, 4, null, null],
    
    
    [276, `fähig`, `能力がある`, 4, ``, ``, 4, null, null],
    [277, `die Fähre`, `フェリー`, 1, `Fähre ／ Fähren`, ``, 4, null, null],
    [278, `fahren`, `行く`, 2, `fährt ／ fuhr ／ gefahren`, ``, 0, null, null],
    [279, `die Fahrkarte`, `乗車券`, 1, `Fahrkarte ／ Fahrkarten`, ``, 4, null, null],
    [280, `das Fahrrad`, `自転車`, 1, `Fahrrades ／ Fahrräder`, ``, 2, null, null],
    [281, `der Fall`, `落下`, 1, `Falles ／ Fälle`, ``, 1, null, null],
    [282, `fallen`, `落ちる`, 2, `fällt ／ fiel ／ gefallen`, ``, 1, null, null],
    [283, `die Familie`, `家族`, 1, `Familie ／ Familien`, ``, 0, null, null],
    [285, `fast`, `ほとんど`, 3, ``, ``, 0, null, null],
    [286, `faul`, `怠惰な`, 4, ``, ``, 3, null, null],
    [287, `fehlen`, `欠けている`, 2, ``, ``, 0, null, null],
    [288, `der Fehler`, `誤り`, 1, `Fehlers ／ Fehler`, ``, 1, null, null],
    [289, `das Fenster`, `窓`, 1, `Fensters ／ Fenster`, ``, 1, null, null],
    [290, `die* Ferien`, `休暇`, 1, `- ／ Ferien`, ``, 2, null, null],
    [291, `fern`, `遠い`, 4, ``, ``, 3, null, null],
    [292, `fern|sehen`, `テレビを見る`, 2, `→ sehen`, ``, 1, null, null],
    [293, `fertig`, `出来上がった`, 4, ``, ``, 1, null, null],
    [294, `fest`, `堅い`, 4, ``, ``, 1, null, null],
    [295, `fest|nehmen`, `逮捕する`, 2, `→ nehmen`, ``, 4, null, null],
    [296, `das Fieber`, `熱`, 1, `Fiebers ／ -`, ``, 2, null, null],
    [297, `der Film`, `映画`, 1, `Films ／ Filme`, ``, 0, null, null],
    [298, `das Filmfest`, `映画祭`, 1, `Filmfests ／ Filmfests`, ``, 5, null, null],
    [299, `der Filter`, `フィルター`, 1, `Filters ／ Filter`, ``, 5, null, null],
    [300, `die Finanz`, `財政`, 1, `Finanz ／ Finanzen`, ``, 5, null, null],
    [301, `finanziell`, `財政上の`, 4, ``, ``, 2, null, null],
    [302, `finden`, `見つける`, 2, `fand ／ gefunden`, ``, 0, null, null],
    [303, `die Firma`, `会社`, 1, `Firma ／ Firmaen`, ``, 0, null, null],
    [304, `der Fisch`, `魚`, 1, `Fisches ／ Fische`, ``, 0, null, null],
    */
    [305, `die Flasche`, `瓶`, 1, `Flasche ／ Flaschen`, ``, 2, null, null],
    /*
    [306, `fleißig`, `勤勉な`, 4, ``, ``, 2, null, null],
    [307, `das Fleisch`, `にく`, 1, `Fleisches ／ -`, ``, 0, null, null],
    [308, `fliegen`, `飛行機で行く`, 2, `flog ／ geflogen`, ``, 1, null, null],
    [309, `flink`, `すばしっこい`, 4, ``, ``, 5, null, null],
    [310, `der Flügel`, `翼`, 1, `Flügels ／ Flügel`, ``, 4, null, null],
    [311, `der Flughafen`, `空港`, 1, `Flughafens ／ Flughäfen`, ``, 1, null, null],
    [312, `das Flugzeug`, `飛行機`, 1, `Flugzeugs ／ Flugzeuge`, ``, 1, null, null],
    [314, `das Formular`, `書き込み用紙`, 1, `Formulars ／ Formulare`, ``, 2, null, null],
    [316, `fotografieren`, `写真を撮る`, 2, ``, ``, 3, null, null],
    [319, `das Frankfurt`, `フランクフルト`, 1, ``, ``, 2, null, null],
    [320, `das Frankreich`, `フランス`, 1, ``, ``, 1, null, null],
    [321, `das Französisch`, `フランス語`, 1, `Französischs ／ -`, ``, 2, null, null],
    [322, `französisch`, `フランスの`, 4, ``, ``, 2, null, null],
    [325, `die Freiheit`, `自由`, 1, `Freiheit ／ Freiheiten`, ``, 2, null, null],
    [326, `der Freitag`, `金曜日`, 1, `Freitags ／ Freitage`, ``, 0, null, null],
    [327, `die Fremdsprache`, `外国語`, 1, `Fremdsprache ／ Fremdsprachen`, ``, 3, null, null],
    [328, `die Freude`, `喜び`, 1, `Freude ／ Freuden`, ``, 2, null, null],
    [329, `freuen`, `喜ぶ`, 2, ``, ``, 0, null, null],
    [330, `der Freund`, `友達`, 1, `Freundes ／ Freunde`, ``, 0, null, null],
    [331, `die Freundin`, `女友達`, 1, `Freundin ／ Freundinnen`, ``, 0, null, null],
    [332, `freundlich`, `親切な`, 4, ``, ``, 1, null, null],
    [333, `die Freundschaft`, `友情`, 1, `Freundschaft ／ Freundschaften`, ``, 3, null, null],
    [334, `frisch`, `新鮮な`, 4, ``, ``, 1, null, null],
    [335, `früh`, `早い`, 4, ``, ``, 1, null, null],
    [336, `früher`, `以前`, 3, ``, ``, 0, null, null],
    [337, `der Frühling`, `春`, 1, `Frühlings ／ Frühlinge`, ``, 0, null, null],
    [338, `frühmorgens`, `早朝に`, 3, ``, ``, 5, null, null],
    [339, `fühlen`, `感じる`, 2, ``, ``, 1, null, null],
    [340, `der Führerschein`, `運転免許証`, 1, `Führerscheins / -es ／ Führerscheine`, ``, 3, null, null],
    [342, `für`, `…のために／…の代わりに`, 5, ``, `４格支配`, 0, null, null],
    [343, `der Fuß`, `足`, 1, `Fußes ／ Füße`, ``, 1, null, null],
    [344, `der Fußball`, `サッカー`, 1, `Fußballs ／ Fußbälle`, ``, 1, null, null],
    
    
    [345, `ganz`, `完全に`, 3, ``, ``, 0, null, null],
    [346, `gar`, `全然〜（ない）`, 3, ``, ``, 0, null, null],
    [347, `der Garten`, `庭`, 1, `Gartens ／ Gärten`, ``, 0, null, null],
    [348, `der Gast`, `客`, 1, `Gastes ／ Gäste`, ``, 0, null, null],
    [349, `gebären`, `産む`, 2, `gebar ／ geboren`, ``, 5, null, null],
    [350, `das Gebäude`, `建物`, 1, `Gebäudes ／ Gebäude`, ``, 1, null, null],
    [352, `das Gedächtnis`, `記憶力`, 1, `Gedächtnisses ／ Gedächtnisse`, ``, 4, null, null],
    [354, `die Geduld`, `忍耐`, 1, `Geduld ／ -`, ``, 4, null, null],
    [355, `gefallen`, `気にいる`, 2, `→ fallen`, ``, 0, null, null],
    [356, `gegen`, `…に逆らって／…頃`, 5, ``, `４格支配`, 0, null, null],
    [357, `gegenseitig`, `互いの`, 4, ``, ``, 3, null, null],
    */
    [358, `gegenüber`, `…の向いに`, 5, ``, `３格支配`, 0, null, null],
    /*
    [361, `der Gehsteig`, `歩道`, 1, `Gehsteigs / -es ／ Gehsteige`, ``, 5, null, null],
    [362, `die Geige`, `バイオリン`, 1, `Geige ／ Geigen`, ``, 5, null, null],
    [363, `das Gel`, `ゲル`, 1, `Gels ／ Gele / -s`, ``, 5, null, null],
    [364, `gelb`, `黄色の`, 4, ``, ``, 2, null, null],
    [366, `die Gelegenheit`, `機会`, 1, `Gelegenheit ／ Gelegenheiten`, ``, 1, null, null],
    [367, `gelten`, `効力がある`, 2, `gilt ／ galt ／ gegolten`, ``, 0, null, null],
    [368, `das Gemälde`, `絵画`, 1, `Gemäldes ／ Gemälde`, ``, 4, null, null],
    [369, `gemütlich`, `居心地の良い`, 4, ``, ``, 3, null, null],
    [370, `genau`, `正確な`, 4, ``, ``, 0, null, null],
    [371, `genug`, `十分に`, 3, ``, ``, 0, null, null],
    [372, `gerade`, `今`, 3, ``, ``, 0, null, null],
    [373, `das Gerät`, `器具`, 1, `Geräts / -es ／ Geräte`, ``, 1, null, null],
    [374, `gering`, `わずかな`, 4, ``, ``, 1, null, null],
    [376, `gerne`, `喜んで`, 3, `lieber ／ am liebsten`, ``, 0, null, null],
    [377, `die Gerte`, `小枝`, 1, `Gerte ／ Gerten`, ``, 5, null, null],
    [378, `das Geschäft`, `店`, 1, `Geschäfts ／ Geschäfte`, ``, 0, null, null],
    [380, `das Gesicht`, `顔`, 1, `Gesichts ／ Gesichter`, ``, 1, null, null],
    [381, `das Gespenst`, `幽霊`, 1, `Gespensts / -es ／ Gespenster`, ``, 5, null, null],
    [382, `gestehen`, `自白する`, 2, `→ stehen`, ``, 4, null, null],
    [386, `der Gewinn`, `利益`, 1, `Gewinns ／ Gewinne`, ``, 2, null, null],
    [387, `der Gipfel`, `山頂`, 1, `Gipfels ／ Gipfel`, ``, 4, null, null],
    [389, `glauben`, `思う`, 2, ``, ``, 0, null, null],
    [391, `gleichen`, `似ている`, 2, `glich ／ geglichen`, ``, 5, null, null],
    [396, `grade`, `今`, 3, ``, ``, 5, null, null],
    [397, `greifen`, `手を伸ばす`, 2, `griff ／ gegriffen`, ``, 3, null, null],
    [399, `die* Großeltern`, `祖父母`, 1, `- ／ Großeltern`, ``, 2, null, null],
    [403, `der Grund`, `理由`, 1, `Grundes ／ Gründe`, ``, 0, null, null],
    [404, `gründen`, `創設する`, 2, ``, ``, 2, null, null],
    [405, `der Gruß`, `あいさつ`, 1, `Grußes ／ Grüße`, ``, 2, null, null],
    [406, `grüßen`, `あいさつを伝える`, 2, ``, ``, 3, null, null],
    [408, `das Gymnasium`, `ギムナジウム`, 1, `Gymnasiums ／ Gymnasien`, ``, 3, null, null],
    
    
    [409, `das Haar`, `髪の毛`, 1, `Haarer ／ Haare`, ``, 1, null, null],
    [411, `halb`, `半分`, 4, ``, ``, 0, null, null],
    [412, `die Hälfte`, `半分`, 1, `Hälfte ／ Hälften`, ``, 1, null, null],
    [414, `das Hamburg`, `ハンブルク`, 1, ``, ``, 2, null, null],
    [415, `die Hand`, `手`, 1, `Hand ／ Hände`, ``, 0, null, null],
    [416, `handeln`, `商売をする`, 2, ``, ``, 1, null, null],
    [417, `hängen`, `掛かっている`, 2, `hing ／ gehangen`, ``, 1, null, null],
    [418, `hart`, `固い`, 4, ``, ``, 1, null, null],
    [419, `der Hass`, `憎しみ`, 1, `Hasses ／ -`, ``, 4, null, null],
    [420, `der Hauptbahnhof`, `中央駅`, 1, `Hauptbahnhofs / -es ／ Hauptbahnhöfe`, ``, 2, null, null],
    [423, `das Heft`, `ノート`, 1, `Heftes ／ Hefte`, ``, 3, null, null],
    [424, `heftig`, `激しい`, 4, ``, ``, 2, null, null],
    [425, `die Heimat`, `故郷`, 1, `Heimat ／ Heimaten`, ``, 1, null, null],
    [426, `heimlich`, `秘密の`, 4, ``, ``, 4, null, null],
    [427, `heiraten`, `結婚する`, 2, ``, ``, 0, null, null],
    [428, `heißen`, `〜という名である`, 2, `hieß ／ geheißen`, ``, 0, null, null],
    [431, `der Herausgeber`, `編者`, 1, `Herausgebers ／ Herausgeber`, ``, 5, null, null],
    [432, `der Herbst`, `秋`, 1, `Herbstes ／ Herbste`, ``, 0, null, null],
    [434, `das Herz`, `心臓`, 1, `Herzens ／ Herzen`, ``, 1, null, null],
    [435, `herzlich`, `心からの`, 4, ``, ``, 1, null, null],
    [436, `heut`, `今日`, 3, ``, ``, 5, null, null],
    [438, `heutzutage`, `今日では`, 3, ``, ``, 2, null, null],
    [440, `hierher`, `こちらへ`, 3, ``, ``, 2, null, null],
    [441, `die Hilfe`, `助け`, 1, `Hilfe ／ Hilfen`, ``, 0, null, null],
    [442, `hinein|fahren`, `中に入っていく`, 2, `→ fahren`, ``, 5, null, null],
    [443, `hinter`, `…のうしろで／に／へ`, 5, ``, `３・４格支配`, 0, null, null],
    [444, `der Hinweis`, `指示`, 1, `Hinweises ／ Hinweise`, ``, 2, null, null],
    [445, `historisch`, `歴史の`, 4, ``, ``, 2, null, null],
    [446, `das Hobby`, `趣味`, 1, `Hobbys ／ Hobbys`, ``, 2, null, null],
    [447, `hoch`, `高い`, 4, ``, ``, 0, null, null],
    [448, `das Hochhaus`, `高層建築物`, 1, `Hochhauses ／ Hochhäuser`, ``, 5, null, null],
    [449, `die Hochzeit`, `結婚式`, 1, `Hochzeit ／ Hochzeiten`, ``, 1, null, null],
    [450, `hoffen`, `望む`, 2, ``, ``, 1, null, null],
    [451, `höflich`, `礼儀正しい`, 4, ``, ``, 2, null, null],
    [452, `die Höhle`, `洞穴`, 1, `Höhle ／ Höhlen`, ``, 5, null, null],
    [453, `holen`, `行って持ってくる`, 2, ``, ``, 1, null, null],
    [454, `hören`, `聞こえる`, 2, ``, ``, 0, null, null],
    [456, `hübsch`, `きれいな`, 4, ``, ``, 2, null, null],
    [457, `der Hubschrauber`, `ヘリコプター`, 1, `Hubschraubers ／ Hubschrauber`, ``, 5, null, null],
    [460, `der Hut`, `帽子`, 1, `Hutes ／ Hüte`, ``, 4, null, null],
    
    
    [462, `in`, `…の中で／に／へ`, 5, ``, `３・４格支配`, 0, null, null],
    [463, `indem`, `…することで`, 6, ``, `従属接続詞`, 2, null, null],
    [464, `indessen`, `その間に`, 3, ``, ``, 5, null, null],
    [465, `die Information`, `情報`, 1, `Information ／ Informationen`, ``, 0, null, null],
    [466, `informieren`, `情報を知らせる`, 2, ``, ``, 2, null, null],
    [467, `der Inhalt`, `中身`, 1, `Inhalts / -es ／ Inhalte`, ``, 1, null, null],
    [468, `innerhalb`, `…の内に`, 5, ``, `２格支配`, 1, null, null],
    [469, `intensiv`, `集中的な`, 4, ``, ``, 3, null, null],
    [470, `interessant`, `興味深い`, 4, ``, ``, 0, null, null],
    [471, `interessieren`, `興味を持つ`, 2, ``, ``, 0, null, null],
    [472, `inzwischen`, `その間に`, 3, ``, ``, 1, null, null],
    [473, `irgendwie`, `なんとかして`, 3, ``, ``, 2, null, null],
    [474, `irgendwo`, `どこかで`, 3, ``, ``, 2, null, null],
    [475, `das Italien`, `イタリア`, 1, ``, ``, 2, null, null],
    
    
    [479, `das Jahrhundert`, `世紀`, 1, `Jahrhunderts ／ Jahrhunderte`, ``, 1, null, null],
    [484, `je`, `かつて`, 3, ``, ``, 0, null, null],
    [488, `die* Jura`, `法学`, 1, `- ／ Jura`, ``, 5, null, null],
    
    
    [490, `die Kaffeepause`, `コーヒーブレイク`, 1, `Kaffeepause ／ Kaffeepausen`, ``, 5, null, null],
    [491, `kalt`, `寒い`, 4, ``, ``, 1, null, null],
    [492, `kämpfen`, `戦う`, 2, ``, ``, 2, null, null],
    [493, `der Kapitän`, `船長`, 1, `Kapitäns ／ Kapitäne`, ``, 4, null, null],
    [494, `kaputt`, `壊れた`, 4, ``, ``, 2, null, null],
    [495, `die Karte`, `カード`, 1, `Karte ／ Karten`, ``, 1, null, null],
    [496, `die Kartoffel`, `ジャガイモ`, 1, `Kartoffel ／ Kartoffeln`, ``, 2, null, null],
    [497, `das Kasino`, `カジノ`, 1, `Kasinos ／ Kasinos`, ``, 5, null, null],
    [500, `das Kaufhaus`, `デパート`, 1, `Kaufhauses ／ Kaufhäuser`, ``, 3, null, null],
    [501, `der Keller`, `地下室`, 1, `Kellers ／ Keller`, ``, 2, null, null],
    [502, `kennen`, `知っている`, 2, `kannte ／ gekannt`, ``, 0, null, null],
    [503, `der Kerl`, `やつ`, 1, `Kerls / -es ／ Kerle`, ``, 5, null, null],
    [504, `das Kilo`, `キログラム`, 1, `Kilos ／ Kilo`, ``, 2, null, null],
    [509, `das Klassenzimmer`, `教室`, 1, `Klassenzimmers ／ Klassenzimmer`, ``, 5, null, null],
    [510, `klatschen`, `ぱちっと音を立てる`, 2, ``, ``, 5, null, null],
    [511, `das Klavier`, `ピアノ`, 1, `Klaviers ／ Klaviere`, ``, 3, null, null],
    [512, `das Kleid`, `ワンピース`, 1, `Kleides ／ Kleider`, ``, 2, null, null],
    [514, `klingeln`, `ベルを鳴らす`, 2, ``, ``, 2, null, null],
    [515, `die Klinik`, `病院`, 1, `Klinik ／ Kliniken`, ``, 3, null, null],
    [516, `klopfen`, `たたく`, 2, ``, ``, 3, null, null],
    [517, `klug`, `利口な`, 4, ``, ``, 3, null, null],
    [518, `kochen`, `煮る`, 2, ``, ``, 0, null, null],
    [519, `der Koffer`, `スーツケース`, 1, `Koffers ／ Koffer`, ``, 2, null, null],
    [520, `der Kollege`, `同僚`, 1, `Kollegeen ／ Kollegeen`, ``, 1, null, null],
    [521, `die Kollegin`, `同僚`, 1, `Kollegin ／ Kolleginnen`, ``, 1, null, null],
    [522, `das Köln`, `ケルン`, 1, ``, ``, 2, null, null],
    [524, `der König`, `王`, 1, `Königs ／ Könige`, ``, 2, null, null],
    [525, `das Konzert`, `コンサート`, 1, `Konzerts ／ Konzerte`, ``, 0, null, null],
    [526, `kopieren`, `複写する`, 2, ``, ``, 4, null, null],
    [527, `der Körper`, `体`, 1, `Körpers ／ Körper`, ``, 1, null, null],
    [528, `kostbar`, `高価な`, 4, ``, ``, 4, null, null],
    [529, `kosten`, `〜の値段である`, 2, ``, ``, 0, null, null],
    [530, `krabbeln`, `くすぐる`, 2, ``, ``, 5, null, null],
    [533, `der Krebs`, `癌`, 1, `Krebses ／ Krebse`, ``, 5, null, null],
    [534, `kreuz`, `？`, 3, ``, ``, 3, null, null],
    [535, `der Krimi`, `探偵`, 1, `Krimi / -s ／ Krimi / s`, ``, 4, null, null],
    [536, `die Krise`, `危機`, 1, `Krise ／ Krisen`, ``, 2, null, null],
    [537, `die Küche`, `台所`, 1, `Küche ／ Küchen`, ``, 2, null, null],
    [538, `der Kuchen`, `ケーキ`, 1, `Kuchens ／ Kuchen`, ``, 1, null, null],
    [539, `der Kugelschreiber`, `ボールペン`, 1, `Kugelschreibers ／ Kugelschreiber`, ``, 3, null, null],
    [540, `kühl`, `涼しい`, 4, ``, ``, 2, null, null],
    [541, `der Kunde`, `客`, 1, `Kundeen ／ Kundeen`, ``, 0, null, null],
    [542, `der Kurs`, `針路`, 1, `Kurses ／ Kurse`, ``, 1, null, null],
    [543, `kurz`, `短い`, 4, ``, ``, 0, null, null],
    [544, `kürzlich`, `最近`, 3, ``, ``, 3, null, null],
    [545, `küssen`, `キスをする`, 2, ``, ``, 3, null, null],
    [546, `die Küste`, `海岸`, 1, `Küste ／ Küsten`, ``, 3, null, null],
    
    
    [547, `laden`, `積む`, 2, `lädt ／ lud ／ geladen`, ``, 1, null, null],
    [548, `das Land`, `国`, 1, `Landes ／ Länder`, ``, 0, null, null],
    [549, `lang`, `長い`, 4, ``, ``, 0, null, null],
    [550, `lange`, `長い間`, 3, ``, ``, 0, null, null],
    [551, `langsam`, `遅い`, 4, ``, ``, 0, null, null],
    [555, `die Lausitz`, `ラウジッツ`, 1, ``, ``, 5, null, null],
    [556, `laut`, `大きい`, 4, ``, ``, 0, null, null],
    [557, `lauter`, `純粋な`, 4, ``, ``, 5, null, null],
    [558, `der Lavendel`, `ラベンダー`, 1, `Lavendels ／ Lavendel`, ``, 5, null, null],
    [559, `das Leben`, `生命`, 1, `Lebens ／ -`, ``, 0, null, null],
    [561, `die Lebenserfahrung`, `人生経験`, 1, `Lebenserfahrung ／ Lebenserfahrungen`, ``, 5, null, null],
    */
    [562, `leer`, `空いた`, 4, ``, ``, 1, null, null],
    /*
    [563, `legen`, `置く`, 2, ``, ``, 0, null, null],
    [564, `das Lehrbuch`, `教科書`, 1, `Lehrbuchs / -es ／ Lehrbücher`, ``, 5, null, null],
    [565, `lehren`, `教える`, 2, ``, ``, 3, null, null],
    [568, `leiben`, `？`, 2, ``, ``, 5, null, null],
    [569, `leicht`, `軽い`, 4, ``, ``, 0, null, null],
    [570, `leid`, `うんざりする`, 4, ``, ``, 4, null, null],
    [571, `leiden`, `苦しむ`, 2, `litt ／ gelitten`, ``, 2, null, null],
    [574, `das Leipzig`, `ライプツィヒ`, 1, ``, ``, 3, null, null],
    [575, `leise`, `小さい`, 4, ``, ``, 2, null, null],
    [576, `leiten`, `率いる`, 2, ``, ``, 2, null, null],
    [579, `letzt`, `最後の`, 4, `letzter ／ -`, ``, 5, null, null],
    [580, `die* Leute`, `人々`, 1, `- ／ Leute`, ``, 0, null, null],
    [582, `lieber`, `より好んで`, 3, ``, ``, 0, null, null],
    */
    [583, `liegen`, `横になっている`, 2, `lag ／ gelegen`, ``, 0, null, null],
    /*
    [584, `lila`, `藤色の`, 4, `- ／ -`, ``, 5, null, null],
    [585, `links`, `左に`, 3, ``, ``, 0, null, null],
    [586, `die Literatur`, `文学`, 1, `Literatur ／ Literaturen`, ``, 1, null, null],
    [587, `loben`, `ほめる`, 2, ``, ``, 3, null, null],
    [588, `das London`, `ロンドン`, 1, ``, ``, 5, null, null],
    [589, `lösen`, `はがす`, 2, ``, ``, 2, null, null],
    [590, `die Lösung`, `解決`, 1, `Lösung ／ Lösungen`, ``, 0, null, null],
    [592, `der Luftangriff`, `空襲`, 1, `Luftangriffs / -es ／ Luftangriffe`, ``, 5, null, null],
    [593, `die Lupe`, `虫眼鏡`, 1, `Lupe ／ Lupen`, ``, 5, null, null],
    [594, `die Lust`, `気持ち`, 1, `Lust ／ -`, ``, 1, null, null],
    [595, `lustig`, `愉快な`, 4, ``, ``, 2, null, null],
    [596, `der Luxusdampfer`, `豪華客船`, 1, `Luxusdampfers ／ Luxusdampfer`, ``, 5, null, null],
    
    
    [599, `der Mai`, `５月`, 1, `Mai ／ Maie`, ``, 0, null, null],
    [600, `mal`, `掛ける`, 3, ``, ``, 0, null, null],
    [601, `manchmal`, `時々`, 3, ``, ``, 1, null, null],
    [603, `die Mannschaft`, `チーム`, 1, `Mannschaft ／ Mannschaften`, ``, 2, null, null],
    [604, `das Manuskript`, `原稿`, 1, `Manuskripts / -es ／ Manuskripte`, ``, 5, null, null],
    [605, `das Märchen`, `おとぎ話`, 1, `Märchens ／ Märchen`, ``, 4, null, null],
    [606, `die Mathematik`, `数学`, 1, `Mathematik ／ -`, ``, 4, null, null],
    [607, `die Mauer`, `壁`, 1, `Mauer ／ Mauern`, ``, 3, null, null],
    [608, `die Medizin`, `医学、薬`, 1, `Medizin ／ Medizinen`, ``, 2, null, null],
    [609, `mehr`, `より多くの、もう〜（ない）`, 4, ``, ``, 0, null, null],
    [610, `melden`, `報道する`, 2, ``, ``, 2, null, null],
    [611, `der Mensch`, `人間`, 1, `Menschen ／ Menschen`, ``, 0, null, null],
    [612, `der Mercedes`, `メルセデス`, 1, `Mercedes ／ Mercedes`, ``, 5, null, null],
    [613, `das Metall`, `金属`, 1, `Metalls ／ Metalle`, ``, 2, null, null],
    [614, `die Miene`, `表情`, 1, `Miene ／ Mienen`, ``, 5, null, null],
    [615, `mieten`, `賃借りする`, 2, ``, ``, 2, null, null],
    [616, `die Million`, `100万`, 1, `Million ／ Millionen`, ``, 2, null, null],
    [617, `mindestens`, `少なくとも`, 3, ``, ``, 1, null, null],
    [618, `der Minister`, `大臣`, 1, `Ministers ／ Minister`, ``, 5, null, null],
    [619, `die Minute`, `分`, 1, `Minute ／ Minuten`, ``, 0, null, null],
    [620, `mit`, `…と共に／…でもって`, 5, ``, `３格支配`, 0, null, null],
    [621, `mit|bringen`, `持ってくる`, 2, `→ bringen`, ``, 2, null, null],
    [622, `miteinander`, `いっしょに`, 3, ``, ``, 2, null, null],
    [623, `mit|fahren`, `いっしょに乗って行く`, 2, `→ fahren`, ``, 4, null, null],
    [624, `mit|nehmen`, `持って行く`, 2, `→ nehmen`, ``, 2, null, null],
    [626, `der Mittagsschlaf`, `昼寝`, 1, `Mittagsschlafs / -es ／ -`, ``, 5, null, null],
    [628, `die Mode`, `流行`, 1, `Mode ／ Moden`, ``, 2, null, null],
    [629, `das Modell`, `手本`, 1, `Modells ／ Modelle`, ``, 2, null, null],
    [630, `möglich`, `可能な`, 4, `- ／ möglichst`, ``, 0, null, null],
    */
    [631, `der Monat`, `月（暦）`, 1, `Monats ／ Monate`, ``, 0, null, null],
    /*
    [632, `monatlich`, `毎月の`, 4, ``, ``, 3, null, null],
    [633, `der Montag`, `月曜日`, 1, `Montags ／ Montage`, ``, 0, null, null],
    [634, `der Mordes`, `殺人`, 1, `Mordess / -es ／ Mordese`, ``, 5, null, null],
    [636, `der Müller`, `粉屋`, 1, `Müllers ／ Müller`, ``, 5, null, null],
    [638, `das Museum`, `博物館`, 1, `Museums ／ Museen`, ``, 1, null, null],
    [639, `die Musik`, `音楽`, 1, `Musik ／ Musiken`, ``, 1, null, null],
    [640, `der Musiker`, `音楽家`, 1, `Musikers ／ Musiker`, ``, 4, null, null],
    [641, `mutmaßlich`, `推測による`, 4, ``, ``, 5, null, null],
    
    
    [643, `das Nabenzimmer`, `隣室`, 1, `Nabenzimmers ／ Nabenzimmer`, ``, 5, null, null],
    */
    [644, `nach`, `…の方へ／…の後で`, 5, ``, `３格支配`, 0, null, null],
    /*
    [645, `der Nachbar`, `隣人`, 1, `Nachbarn ／ Nachbarn`, ``, 1, null, null],
    [646, `der Nachmittag`, `午後`, 1, `Nachmittags ／ Nachmittage`, ``, 1, null, null],
    [647, `die Nachricht`, `知らせ`, 1, `Nachricht ／ Nachrichten`, ``, 1, null, null],
    [649, `nahe`, `近い`, 4, ``, ``, 2, null, null],
    [650, `die Nähe`, `近く`, 1, `Nähe ／ -`, ``, 1, null, null],
    [652, `neben`, `…の傍らで／に／へ`, 5, ``, `３・４格支配`, 0, null, null],
    [653, `nebenan`, `隣に`, 3, ``, ``, 4, null, null],
    */
    [659, `noch`, `まだ`, 3, ``, ``, 0, null, null],
    /*
    [660, `nochmal`, `もう一度`, 3, ``, ``, 5, null, null],
    [662, `die Not`, `窮乏`, 1, `Not ／ Nöte`, ``, 3, null, null],
    [663, `die Nudel`, `ヌードル`, 1, `Nudel ／ Nudeln`, ``, 4, null, null],
    [664, `nun`, `今`, 3, ``, ``, 0, null, null],
    [665, `nur`, `ただ〜だけど`, 3, ``, ``, 0, null, null],
    
    
    [666, `ob`, `…かどうか`, 6, ``, `従属接続詞`, 0, null, null],
    [667, `das Obst`, `果物`, 1, `Obstes ／ -`, ``, 1, null, null],
    [668, `obwohl`, `…ではあるが`, 6, ``, `従属接続詞`, 0, null, null],
    [669, `oder`, `あるいは`, 6, ``, `並列接続詞`, 0, null, null],
    [670, `offen`, `開いている`, 4, ``, ``, 1, null, null],
    [671, `öffnen`, `開ける`, 2, ``, ``, 0, null, null],
    [673, `öfters`, `しばしば`, 3, ``, ``, 5, null, null],
    [674, `ohne`, `…なしで`, 5, ``, `４格支配`, 0, null, null],
    [675, `das Oktoberfest`, `１０月祭`, 1, `Oktoberfests / -es ／ Oktoberfeste`, ``, 5, null, null],
    [676, `das Öl`, `油`, 1, `Öls / -es ／ Öle`, ``, 2, null, null],
    [677, `die Oma`, `おばあちゃん`, 1, `Oma ／ Omas`, ``, 2, null, null],
    [679, `die Oper`, `オペラ`, 1, `Oper ／ Opern`, ``, 3, null, null],
    [680, `operieren`, `手術する`, 2, ``, ``, 3, null, null],
    [681, `ordentlich`, `きちんとした`, 4, ``, ``, 2, null, null],
    [682, `die Ortschaft`, `村`, 1, `Ortschaft ／ Ortschaften`, ``, 5, null, null],
    [683, `das Österreich`, `オーストリア`, 1, ``, ``, 1, null, null],
    
    
    [684, `der Palast`, `宮殿`, 1, `Palasts / -es ／ Paläste`, ``, 5, null, null],
    [685, `panisch`, `慌てふためいた`, 4, ``, ``, 5, null, null],
    [686, `der Papa`, `パパ`, 1, `Papas ／ Papas`, ``, 5, null, null],
    [687, `der Park`, `公園`, 1, `Parks ／ Parks`, ``, 1, null, null],
    [688, `parken`, `駐車する`, 2, ``, ``, 3, null, null],
    [689, `die Party`, `パーティー`, 1, `Party ／ Partys`, ``, 2, null, null],
    [690, `passen`, `合う`, 2, ``, ``, 1, null, null],
    [691, `passieren`, `起こる`, 2, ``, ``, 1, null, null],
    [692, `der Patient`, `患者`, 1, `Patienten ／ Patienten`, ``, 1, null, null],
    [693, `die Perle`, `パール`, 1, `Perle ／ Perlen`, ``, 4, null, null],
    [694, `persönlich`, `個人の`, 4, ``, ``, 2, null, null],
    [697, `die Physik`, `物理学`, 1, `Physik ／ -`, ``, 3, null, null],
    [698, `die Pistole`, `ピストル`, 1, `Pistole ／ Pistolen`, ``, 4, null, null],
    [701, `plaudern`, `おしゃべりをする`, 2, ``, ``, 5, null, null],
    [705, `die Polizei`, `警察`, 1, `Polizei ／ -`, ``, 0, null, null],
    [706, `der Polizist`, `警官`, 1, `Polizisten ／ Polizisten`, ``, 2, null, null],
    [707, `populärer`, `人気のある`, 4, ``, ``, 5, null, null],
    [708, `der Portier`, `門番`, 1, `Portiers ／ Portiers`, ``, 5, null, null],
    [710, `praktisch`, `実際的な`, 4, ``, ``, 2, null, null],
    [711, `prima`, `素晴らしい`, 4, `- ／ -`, ``, 2, null, null],
    [712, `das Problem`, `問題`, 1, `Problems ／ Probleme`, ``, 0, null, null],
    [713, `der Professor`, `教授`, 1, `Professors ／ Professoren`, ``, 2, null, null],
    [714, `das Programm`, `プログラム`, 1, `Programms ／ Programme`, ``, 0, null, null],
    [715, `das Projekt`, `計画`, 1, `Projekts ／ Projekte`, ``, 2, null, null],
    */
    [716, `die Prüfung`, `試験`, 1, `Prüfung ／ Prüfungen`, ``, 1, null, null],
    /*
    [717, `pünktlich`, `時間通りの`, 4, ``, ``, 2, null, null],
    
    
    [718, `quer`, `横に`, 3, ``, ``, 3, null, null],
    
    
    [719, `randalieren`, `大暴れする`, 2, ``, ``, 5, null, null],
    [721, `raten`, `助言する`, 2, `räten ／ riet ／ geraten`, ``, 3, null, null],
    [722, `das Rathaus`, `市役所`, 1, `Rathauses ／ Rathäuser`, ``, 2, null, null],
    [724, `die Rechnung`, `請求書`, 1, `Rechnung ／ Rechnungen`, ``, 1, null, null],
    [725, `recht`, `右の、適切ない`, 4, ``, ``, 1, null, null],
    [726, `reden`, `話す`, 2, ``, ``, 1, null, null],
    [727, `das Referat`, `研究報告`, 1, `Referats / -es ／ Referate`, ``, 5, null, null],
    [728, `das Regal`, `棚`, 1, `Regals ／ Regale`, ``, 3, null, null],
    */
    [729, `der Regen`, `雨`, 1, `Regens ／ Regen`, ``, 1, null, null],
    /*
    [730, `der Regenschirm`, `雨傘`, 1, `Regenschirms / -es ／ Regenschirme`, ``, 5, null, null],
    [731, `die Regierung`, `政府`, 1, `Regierung ／ Regierungen`, ``, 0, null, null],
    [732, `der Regisseur`, `演出家`, 1, `Regisseurs ／ Regisseure`, ``, 3, null, null],
    [733, `regnen`, `雨が降る`, 2, ``, `非`, 1, null, null],
    [734, `reich`, `金持ちの`, 4, ``, ``, 1, null, null],
    [735, `reichen`, `足りる`, 2, ``, ``, 2, null, null],
    [736, `reißen`, `引きちぎる`, 2, `riss ／ gerissen`, ``, 3, null, null],
    [737, `die Reise`, `旅`, 1, `Reise ／ Reisen`, ``, 0, null, null],
    [738, `reisen`, `旅をする`, 2, ``, ``, 1, null, null],
    [739, `der Reisepass`, `旅券`, 1, `Reisepasses ／ Reisepässe`, ``, 5, null, null],
    [740, `relativ`, `相対的な`, 4, ``, ``, 2, null, null],
    [741, `renovieren`, `改修する`, 2, ``, ``, 4, null, null],
    [742, `reparieren`, `修理する`, 2, ``, ``, 2, null, null],
    [743, `reservieren`, `予約する`, 2, ``, ``, 3, null, null],
    [744, `respektieren`, `尊重する`, 2, ``, ``, 4, null, null],
    [745, `der Rest`, `残り`, 1, `Rests / -es ／ Reste`, ``, 2, null, null],
    [746, `das Restaurant`, `レストラン`, 1, `Restaurants ／ Restaurants`, ``, 0, null, null],
    [747, `retten`, `救う`, 2, ``, ``, 2, null, null],
    [748, `die Rezession`, `景気後退`, 1, `Rezession ／ Rezessionen`, ``, 5, null, null],
    [749, `der Richter`, `裁判官`, 1, `Richters ／ Richter`, ``, 2, null, null],
    [750, `richtig`, `正しい`, 4, ``, ``, 0, null, null],
    [751, `riechen`, `〜なにおいがする`, 2, `roch ／ gerochen`, ``, 2, null, null],
    [752, `das Risiko`, `危険`, 1, `Risikos ／ Risiken`, ``, 2, null, null],
    [753, `der Rivalen`, `競争相手`, 1, `Rivalenn ／ Rivalenn`, ``, 5, null, null],
    [754, `die Rolle`, `役割`, 1, `Rolle ／ Rollen`, ``, 0, null, null],
    [755, `der Roman`, `長編小説`, 1, `Romans ／ Romane`, ``, 2, null, null],
    [756, `die Rose`, `バラ`, 1, `Rose ／ Rosen`, ``, 3, null, null],
    [758, `der Rotwein`, `赤ワイン`, 1, `Rotweins / -es ／ Rotweine`, ``, 5, null, null],
    [759, `der Ruf`, `呼び声`, 1, `Rufs / -es ／ Rufe`, ``, 3, null, null],
    [760, `rufen`, `呼ぶ`, 2, `rief ／ gerufen`, ``, 2, null, null],
    [762, `die Ruhe`, `静けさ`, 1, `Ruhe ／ -`, ``, 2, null, null],
    [763, `rund`, `丸い`, 4, ``, ``, 0, null, null],
    [764, `das Russisch`, `ロシア語`, 1, `Russischs ／ -`, ``, 2, null, null],
    [765, `rutschen`, `滑る`, 2, ``, ``, 5, null, null],
    
    
    [766, `sachverständig`, `専門知識をもった`, 4, ``, ``, 5, null, null],
    [768, `das Salz`, `塩`, 1, `Salzes ／ Salze`, ``, 2, null, null],
    [769, `der Satz`, `文`, 1, `Satzes ／ Sätze`, ``, 1, null, null],
    [770, `sauer`, `酸っぱい`, 4, `saurer ／ sauerst`, ``, 2, null, null],
    [771, `der Schaden`, `損害`, 1, `Schadens ／ Schäden`, ``, 2, null, null],
    [772, `schaden`, `害する`, 2, ``, ``, 2, null, null],
    [773, `die Schallmauer`, `音速の壁`, 1, `Schallmauer ／ -`, ``, 5, null, null],
    [774, `schämen`, `恥じる`, 2, ``, `再`, 4, null, null],
    [775, `scheiden`, `離婚させる`, 2, `schied ／ geschieden`, ``, 3, null, null],
    [776, `scheinen`, `見える`, 2, `schien ／ geschienen`, ``, 0, null, null],
    [778, `schicken`, `送る`, 2, ``, ``, 1, null, null],
    [779, `das Schiff`, `船`, 1, `Schiffes ／ Schiffe`, ``, 2, null, null],
    [780, `das Schild`, `表示板`, 1, `Schilds / -es ／ Schilder`, ``, 2, null, null],
    [781, `schimpfen`, `ののしる`, 2, ``, ``, 3, null, null],
    [783, `schlagen`, `打つ`, 2, `schlägt ／ schlug ／ geschlagen`, ``, 2, null, null],
    */
    [784, `schlecht`, `悪い`, 4, ``, ``, 0, null, null],
    /*
    [785, `schließen`, `閉める`, 2, `schloss ／ geschlossen`, ``, 0, null, null],
    [786, `schlimmer`, `困った`, 4, ``, ``, 5, null, null],
    [787, `das Schloss`, `城`, 1, `Schlosses ／ Schlösser`, ``, 1, null, null],
    [788, `der Schlüssel`, `鍵`, 1, `Schlüssels ／ Schlüssel`, ``, 2, null, null],
    [789, `schmecken`, `味がする`, 2, ``, ``, 0, null, null],
    [790, `schnarchen`, `いびきをかく`, 2, ``, ``, 5, null, null],
    [791, `der Schnee`, `雪`, 1, `Schnees ／ -`, ``, 2, null, null],
    */
    [792, `schnell`, `速い`, 4, ``, ``, 0, null, null],
    /*
    [795, `schrecken`, `驚かす`, 2, `schrak ／ geschreckt`, ``, 4, null, null],
    [796, `schrecklich`, `恐ろしい`, 4, ``, ``, 2, null, null],
    [798, `schriftlich`, `文字で書かれた`, 4, ``, ``, 3, null, null],
    [799, `der Schriftsteller`, `作家`, 1, `Schriftstellers ／ Schriftsteller`, ``, 3, null, null],
    [800, `schuld`, `責任がある`, 4, ``, ``, 2, null, null],
    [804, `der Schulleiter`, `校長`, 1, `Schulleiters ／ Schulleiter`, ``, 5, null, null],
    [805, `die Schulzeit`, `学校時代`, 1, `Schulzeit ／ Schulzeiten`, ``, 5, null, null],
    [806, `schussbereit`, `発射準備の整った`, 4, ``, ``, 5, null, null],
    [808, `das Schweigen`, `沈黙`, 1, `Schweigens ／ -`, ``, 3, null, null],
    [809, `die Schweiz`, `スイス`, 1, `Schweiz ／ -`, ``, 1, null, null],
    [810, `schwer`, `重い`, 4, ``, ``, 0, null, null],
    [811, `die Schwere`, `重さ`, 1, `Schwere ／ -`, ``, 5, null, null],
    [812, `schwerkrank`, `重病の`, 4, ``, ``, 5, null, null],
    [813, `schwerverletzt`, `重傷の`, 4, ``, ``, 5, null, null],
    [815, `die Schwierigkeit`, `困難`, 1, `Schwierigkeit ／ Schwierigkeiten`, ``, 2, null, null],
    [816, `schwimmen`, `泳ぐ`, 2, `schwamm ／ geschwommen`, ``, 2, null, null],
    [817, `schwindeln`, `めまいがする`, 2, ``, `非`, 5, null, null],
    [818, `der See`, `湖`, 1, `Sees ／ Seen`, ``, 1, null, null],
    [819, `die See`, `海`, 1, `See ／ -`, ``, 1, null, null],
    [822, `die Seilbahn`, `ケーブルカー`, 1, `Seilbahn ／ Seilbahnen`, ``, 5, null, null],
    [823, `sein`, `〜である`, 2, `ist ／ war ／ gewesen`, ``, 0, null, null],
    [824, `seit`, `…して以来`, 6, ``, `従属接続詞`, 0, null, null],
    */
    [825, `seit`, `…以来`, 5, ``, `３格支配`, 0, null, null],
    /*
    [826, `die Seite`, `面`, 1, `Seite ／ Seiten`, ``, 0, null, null],
    [827, `selten`, `めったに〜ない`, 3, ``, ``, 1, null, null],
    [828, `der Sessel`, `安楽いす`, 1, `Sessels ／ Sessel`, ``, 2, null, null],
    [830, `sicher`, `安全な`, 4, ``, ``, 0, null, null],
    */
    [831, `sicherlich`, `確かに`, 3, ``, ``, 3, null, null],
    /*
    [832, `die Signatur`, `サイン`, 1, `Signatur ／ Signaturen`, ``, 5, null, null],
    [833, `das Silber`, `銀`, 1, `Silbers ／ -`, ``, 4, null, null],
    [834, `der Silvesterabend`, `大晦日の晩`, 1, `Silvesterabends ／ Silvesterabende`, ``, 5, null, null],
    [836, `sinken`, `沈む`, 2, `sank ／ gesunken`, ``, 3, null, null],
    [837, `sitzen`, `座っている`, 2, `saß ／ gesessen`, ``, 0, null, null],
    [838, `die Sitzung`, `会議`, 1, `Sitzung ／ Sitzungen`, ``, 2, null, null],
    [840, `sobald`, `…したらすぐに`, 6, ``, `従属接続詞`, 2, null, null],
    [841, `sofort`, `すぐに`, 3, ``, ``, 0, null, null],
    [844, `der Sommer`, `夏`, 1, `Sommers ／ Sommer`, ``, 0, null, null],
    [845, `die* Sommerferien`, `夏休み`, 1, `- ／ Sommerferien`, ``, 4, null, null],
    [846, `die Sonne`, `太陽`, 1, `Sonne ／ Sonnen`, ``, 1, null, null],
    [847, `der Sonntag`, `日曜日`, 1, `Sonntags ／ Sonntage`, ``, 0, null, null],
    [848, `der Sonntagmorgen`, `日曜日の朝`, 1, `Sonntagmorgens ／ Sonntagmorgen`, ``, 5, null, null],
    [849, `sonntags`, `日曜日に`, 3, ``, ``, 4, null, null],
    [850, `sonst`, `そのほかに`, 3, ``, ``, 1, null, null],
    [851, `sorgen`, `世話をする`, 2, ``, ``, 1, null, null],
    [852, `sorgfältig`, `入念な`, 4, ``, ``, 4, null, null],
    [853, `die Soziologie`, `社会学`, 1, `Soziologie ／ -`, ``, 5, null, null],
    [854, `spannen`, `ぴんと張る`, 2, ``, ``, 4, null, null],
    [855, `sparen`, `蓄える`, 2, ``, ``, 1, null, null],
    [856, `der Spargel`, `アスパラガス`, 1, `Spargels ／ Spargel`, ``, 5, null, null],
    [858, `spazieren`, `ぶらぶら歩く`, 2, ``, ``, 3, null, null],
    [859, `der Spezialist`, `専門家`, 1, `Spezialisten ／ Spezialisten`, ``, 4, null, null],
    [860, `der Spiegel`, `鏡`, 1, `Spiegels ／ Spiegel`, ``, 2, null, null],
    [861, `das Spiel`, `遊び`, 1, `Spiels ／ Spiele`, ``, 1, null, null],
    [863, `der Spieler`, `プレーヤー`, 1, `Spielers ／ Spieler`, ``, 2, null, null],
    [864, `die Sportart`, `スポーツ種目`, 1, `Sportart ／ Sportarten`, ``, 4, null, null],
    [865, `die Sprache`, `言語`, 1, `Sprache ／ Sprachen`, ``, 0, null, null],
    [866, `der Sprachwissenschaftler`, `言語学者`, 1, `Sprachwissenschaftlers ／ Sprachwissenschaftler`, ``, 5, null, null],
    [868, `die Sprechstunde`, `面会時間`, 1, `Sprechstunde ／ Sprechstunden`, ``, 4, null, null],
    [869, `das Staatsexamen`, `国家試験`, 1, `Staatsexamens ／ Staatsexamen`, ``, 5, null, null],
    [870, `das Stadion`, `競技場`, 1, `Stadions ／ Stadien`, ``, 3, null, null],
    [871, `die Stadt`, `町`, 1, `Stadt ／ Städte`, ``, 0, null, null],
    [872, `stark`, `強い`, 4, ``, ``, 0, null, null],
    [873, `statt|finden`, `開催される`, 2, `→ finden`, ``, 1, null, null],
    [875, `stehlen`, `盗む`, 2, `stiehlt ／ stahl ／ gestohlen`, ``, 3, null, null],
    [876, `steigen`, `登る`, 2, `stieg ／ gestiegen`, ``, 2, null, null],
    [879, `der Stich`, `刺し傷`, 1, `Stichs / -es ／ Stiche`, ``, 5, null, null],
    [880, `still`, `静かな`, 4, ``, ``, 3, null, null],
    [881, `das Stipendium`, `奨学金`, 1, `Stipendiums ／ Stipendien`, ``, 5, null, null],
    [882, `stolz`, `誇りを持った`, 4, ``, ``, 3, null, null],
    */
    [883, `die Störung`, `邪魔`, 1, `Störung ／ Störungen`, ``, 4, null, null],
    [884, `die Straße`, `道路`, 1, `Straße ／ Straßen`, ``, 0, null, null],
    /*
    [885, `die Strecke`, `区間`, 1, `Strecke ／ Strecken`, ``, 1, null, null],
    [886, `das Stück`, `部分`, 1, `Stücks ／ Stücke`, ``, 1, null, null],
    [891, `die Stunde`, `時間`, 1, `Stunde ／ Stunden`, ``, 0, null, null],
    [892, `der Supermarkt`, `スーパーマーケット`, 1, `Supermarkts / -es ／ Supermärkte`, ``, 2, null, null],
    
    
    [893, `die Tablette`, `錠剤`, 1, `Tablette ／ Tabletten`, ``, 3, null, null],
    [894, `die Tafel`, `板`, 1, `Tafel ／ Tafeln`, ``, 3, null, null],
    [896, `täglich`, `毎日の`, 4, ``, ``, 1, null, null],
    [897, `tagsüber`, `昼間`, 3, ``, ``, 4, null, null],
    [898, `der Taifun`, `台風`, 1, `Taifuns ／ Taifune`, ``, 5, null, null],
    */
    [901, `die Tasche`, `バッグ、ポケット`, 1, `Tasche ／ Taschen`, ``, 2, null, null],
    /*
    [902, `die Tasse`, `カップ`, 1, `Tasse ／ Tassen`, ``, 2, null, null],
    [903, `die Tat`, `行為`, 1, `Tat ／ Taten`, ``, 2, null, null],
    [904, `der Täter`, `犯人`, 1, `Täters ／ Täter`, ``, 2, null, null],
    [905, `die Tatsache`, `事実`, 1, `Tatsache ／ Tatsachen`, ``, 2, null, null],
    [906, `tatsächlich`, `実際は`, 3, ``, ``, 1, null, null],
    [907, `das Taxi`, `タクシー`, 1, `Taxis ／ Taxis`, ``, 0, null, null],
    [908, `der Tee`, `お茶`, 1, `Tees ／ Tees`, ``, 0, null, null],
    [909, `teilen`, `分ける`, 2, ``, ``, 2, null, null],
    [910, `teil|nehmen`, `参加する`, 2, `→ nehmen`, ``, 1, null, null],
    [911, `telefonieren`, `電話で話をする`, 2, ``, ``, 2, null, null],
    [912, `telefonisch`, `電話による`, 4, ``, ``, 5, null, null],
    [913, `das Tennis`, `テニス`, 1, `Tennis ／ -`, ``, 2, null, null],
    [914, `der Termin`, `期日`, 1, `Termins ／ Termine`, ``, 2, null, null],
    [916, `das Theater`, `劇場`, 1, `Theaters ／ Theater`, ``, 1, null, null],
    [917, `tief`, `深い`, 4, ``, ``, 1, null, null],
    [918, `das Tier`, `動物`, 1, `Tieres ／ Tiere`, ``, 1, null, null],
    [919, `der Tierschutz`, `動物保護`, 1, `Tierschutzes ／ -`, ``, 5, null, null],
    */
    [920, `der Tisch`, `テーブル`, 1, `Tisches ／ Tische`, ``, 1, null, null],
    /*
    [921, `die Tochter`, `娘`, 1, `Tochter ／ Töchter`, ``, 0, null, null],
    [922, `die Tomate`, `トマト`, 1, `Tomate ／ Tomaten`, ``, 2, null, null],
    [923, `der Tourist`, `観光客`, 1, `Touristen ／ Touristen`, ``, 1, null, null],
    [924, `tragbar`, `携帯用の`, 4, ``, ``, 5, null, null],
    [926, `der Traum`, `夢`, 1, `Traums / -es ／ Träume`, ``, 2, null, null],
    [927, `traurig`, `悲しい`, 4, ``, ``, 2, null, null],
    [928, `treffen`, `会う`, 2, `trifft ／ traf ／ getroffen`, ``, 0, null, null],
    [929, `treiben`, `追い立てる`, 2, `trieb ／ getrieben`, ``, 3, null, null],
    [930, `der Trend`, `傾向`, 1, `Trends ／ Trends`, ``, 3, null, null],
    */
    [931, `treten`, `蹴る`, 2, `tritt ／ trat ／ getreten`, ``, 1, null, null],
    /*
    [932, `triefen`, `滴る`, 2, `troff ／ getroffen`, ``, 5, null, null],
    */
    [934, `trotz`, `…にもかかわらず`, 5, ``, `２格支配`, 1, null, null],
    /*
    [935, `trotzdem`, `それにもかかわらず`, 3, ``, ``, 1, null, null],
    [936, `die Tulpe`, `チューリップ`, 1, `Tulpe ／ Tulpen`, ``, 5, null, null],
    [938, `die Tür`, `ドア`, 1, `Tür ／ Türen`, ``, 1, null, null],
    
    
    [939, `üben`, `練習する`, 2, ``, ``, 3, null, null],
    [940, `über`, `…の上方で／に／へ／…を越えて`, 5, ``, `３・４格支配`, 0, null, null],
    [941, `überall`, `いたるところで`, 3, ``, ``, 1, null, null],
    [942, `überarbeiten`, `手に入れる`, 2, ``, ``, 5, null, null],
    [943, `überhaupt`, `全然〜（ない）`, 3, ``, ``, 2, null, null],
    [944, `überraschen`, `驚かす`, 2, ``, ``, 3, null, null],
    [945, `über||setzen`, `翻訳する、渡す`, 2, ``, `両`, 2, null, null],
    [946, `überzeugen`, `納得させる`, 2, ``, ``, 2, null, null],
    [947, `das Ufer`, `岸`, 1, `Ufers ／ Ufer`, ``, 3, null, null],
    [948, `die Uhr`, `時計`, 1, `Uhr ／ Uhren`, ``, 0, null, null],
    [949, `um`, `…のまわりに／…をめぐって`, 5, ``, `４格支配`, 0, null, null],
    [950, `um||gehen`, `広まる、迂回する`, 2, `→ gehen`, `両`, 3, null, null],
    [951, `um|schauen`, `見回す`, 2, ``, `再`, 5, null, null],
    [952, `umso`, `ますます`, 3, ``, ``, 3, null, null],
    [953, `um|steigen`, `乗り換える`, 2, `→ steigen`, ``, 3, null, null],
    [954, `die Umwelt`, `環境`, 1, `Umwelt ／ -`, ``, 2, null, null],
    [955, `um||ziehen`, `引っ越す、取り囲む`, 2, `→ ziehen`, `両`, 2, null, null],
    [956, `unbedingt`, `絶対に`, 3, ``, ``, 1, null, null],
    [957, `unbeliebt`, `好かれていない`, 4, ``, ``, 5, null, null],
    [958, `und`, `そして`, 6, ``, `並列接続詞`, 0, null, null],
    [959, `undurchführbar`, `実行できない`, 4, ``, ``, 5, null, null],
    [960, `der Unfall`, `事故`, 1, `Unfalls / -es ／ Unfälle`, ``, 1, null, null],
    [961, `der Unfall`, `事故`, 1, `Unfalls / -es ／ Unfälle`, ``, 1, null, null],
    [962, `unglücklich`, `不幸な`, 4, ``, ``, 4, null, null],
    [964, `die Universität`, `大学`, 1, `Universität ／ Universitäten`, ``, 1, null, null],
    [965, `unmöglich`, `不可能な`, 4, ``, ``, 3, null, null],
    [966, `der Unsinn`, `ばかげたこと`, 1, `Unsinns / -es ／ -`, ``, 4, null, null],
    [967, `unter`, `…の下で／に／へ`, 5, ``, `３・４格支配`, 0, null, null],
    [968, `unterdrücken`, `抑圧する`, 2, ``, ``, 5, null, null],
    [969, `unterlassen`, `しない`, 2, `→ lassen`, ``, 4, null, null],
    [970, `der Unternehmer`, `企業家`, 1, `Unternehmers ／ Unternehmer`, ``, 3, null, null],
    [971, `unterrichten`, `教える`, 2, ``, ``, 2, null, null],
    [972, `unterstützen`, `援助する`, 2, ``, ``, 2, null, null],
    [973, `die Unterstützung`, `援助`, 1, `Unterstützung ／ Unterstützungen`, ``, 2, null, null],
    [974, `untersuchen`, `調べる`, 2, ``, ``, 1, null, null],
    [975, `unverändert`, `変わらない`, 4, ``, ``, 4, null, null],
    [976, `das Unwetter`, `悪天候`, 1, `Unwetters ／ Unwetter`, ``, 5, null, null],
    [977, `die Unwissenheit`, `無知`, 1, `Unwissenheit ／ -`, ``, 5, null, null],
    [978, `der Urlaub`, `休暇`, 1, `Urlaubs ／ Urlaube`, ``, 1, null, null],
    [980, `die Ursache`, `原因`, 1, `Ursache ／ Ursachen`, ``, 2, null, null],
    
    
    [981, `die Vase`, `花瓶`, 1, `Vase ／ Vasen`, ``, 5, null, null],
    [983, `verändern`, `変わる`, 2, ``, ``, 2, null, null],
    [984, `verbieten`, `禁じる`, 2, `→ bieten`, ``, 1, null, null],
    [985, `verbringen`, `過ごす`, 2, `→ bringen`, ``, 3, null, null],
    [986, `verdienen`, `稼ぐ`, 2, ``, ``, 1, null, null],
    [987, `die Verfassung`, `憲法`, 1, `Verfassung ／ Verfassungen`, ``, 1, null, null],
    [988, `verfilmen`, `映画化する`, 2, ``, ``, 5, null, null],
    [989, `verfolgen`, `追う`, 2, ``, ``, 3, null, null],
    [990, `die Verfügung`, `意のままにすること`, 1, `Verfügung ／ Verfügungen`, ``, 2, null, null],
    [993, `vergleichen`, `比較する`, 2, `→ gleichen`, ``, 1, null, null],
    [994, `verhaften`, `逮捕する`, 2, ``, ``, 3, null, null],
    [995, `verheiraten`, `結婚する`, 2, ``, `再`, 5, null, null],
    [996, `verkaufen`, `売る`, 2, ``, ``, 0, null, null],
    [997, `die Verkehrsregel`, `交通規則`, 1, `Verkehrsregel ／ Verkehrsregeln`, ``, 5, null, null],
    [998, `der Verlag`, `出版社`, 1, `Verlags / -es ／ Verlage`, ``, 2, null, null],
    [999, `verlassen`, `去る`, 2, `→ lassen`, ``, 2, null, null],
    [1000, `verlaufen`, `経過する`, 2, `→ laufen`, ``, 3, null, null],
    [1001, `verletzen`, `怪我をさせる`, 2, ``, ``, 1, null, null],
    [1002, `verlieren`, `失くす`, 2, `verlor ／ verloren`, ``, 1, null, null],
    [1003, `vernehmen`, `尋問する`, 2, `→ nehmen`, ``, 5, null, null],
    [1004, `verpassen`, `逃す`, 2, ``, ``, 2, null, null],
    [1005, `verraten`, `裏切る`, 2, `→ raten`, ``, 3, null, null],
    [1006, `die Versammlung`, `集会`, 1, `Versammlung ／ Versammlungen`, ``, 3, null, null],
    [1007, `verschollen`, `行方不明の`, 4, ``, ``, 5, null, null],
    [1008, `versenken`, `沈める`, 2, ``, ``, 5, null, null],
    [1009, `verspäten`, `遅れる`, 2, ``, ``, 4, null, null],
    [1010, `versprechen`, `約束する`, 2, `→ sprechen`, ``, 1, null, null],
    [1011, `verstehen`, `理解する`, 2, `→ stehen`, ``, 0, null, null],
    [1012, `versuchen`, `試みる`, 2, ``, ``, 0, null, null],
    [1013, `vertreiben`, `追い払う`, 2, `→ treiben`, ``, 4, null, null],
    [1014, `verwandt`, `親類の`, 4, ``, ``, 2, null, null],
    [1015, `verwechseln`, `取り違える`, 2, ``, ``, 3, null, null],
    [1016, `verweigern`, `拒否する`, 2, ``, ``, 4, null, null],
    [1017, `verwirklichen`, `実現する`, 2, ``, ``, 4, null, null],
    [1018, `verzeihen`, `許す`, 2, `→ zeihen`, ``, 3, null, null],
    [1019, `die Verzeihung`, `許し`, 1, `Verzeihung ／ -`, ``, 3, null, null],
    [1020, `viel`, `多くの`, 4, `mehr ／ meist`, ``, 0, null, null],
    [1021, `vielleicht`, `ひょっとしたら`, 3, ``, ``, 0, null, null],
    [1023, `das Volk`, `民族`, 1, `Volkes ／ Völker`, ``, 1, null, null],
    [1024, `das Volkslied`, `民謡`, 1, `Volkslieds / -es ／ Volkslieder`, ``, 5, null, null],
    [1025, `der Volkswagen`, `フォルクスワーゲン`, 1, `Volkswagens ／ Volkswagen`, ``, 5, null, null],
    [1027, `völlig`, `まったく`, 3, ``, ``, 1, null, null],
    */
    [1028, `von`, `…から／…の／…について`, 5, ``, `３格支配`, 0, null, null],
    [1029, `vor`, `…の前で／に／へ`, 5, ``, `３・４格支配`, 0, null, null],
    /*
    [1030, `vorbei`, `通り過ぎて`, 3, ``, ``, 1, null, null],
    [1031, `der Vorgang`, `出来事`, 1, `Vorgangs / -es ／ Vorgänge`, ``, 3, null, null],
    [1032, `der Vorgänger`, `前任者`, 1, `Vorgängers ／ Vorgänger`, ``, 4, null, null],
    [1033, `vorgestern`, `一昨日`, 3, ``, ``, 3, null, null],
    [1034, `vorher`, `その前に`, 3, ``, ``, 1, null, null],
    [1035, `das Vorjahr`, `昨年`, 1, `Vorjahrs / -es ／ Vorjahre`, ``, 3, null, null],
    [1036, `die Vorlesung`, `講義`, 1, `Vorlesung ／ Vorlesungen`, ``, 5, null, null],
    [1038, `vor|schlagen`, `提案する`, 2, `→ schlagen`, ``, 1, null, null],
    [1039, `vor|sitzen`, `議長を務める`, 2, `→ sitzen`, ``, 5, null, null],
    [1040, `vor|stehen`, `飛び出している`, 2, `→ stehen`, ``, 5, null, null],
    [1041, `vor|stellen`, `紹介する`, 2, ``, ``, 0, null, null],
    [1042, `der Vortrag`, `講演`, 1, `Vortrags ／ Vorträge`, ``, 3, null, null],
    
    
    [1043, `der Wagen`, `自動車`, 1, `Wagens ／ Wagen`, ``, 1, null, null],
    [1044, `wählen`, `選ぶ`, 2, ``, ``, 1, null, null],
    [1045, `wahr`, `真実の`, 4, ``, ``, 0, null, null],
    [1046, `während`, `…する間に／…の一方で`, 6, ``, `従属接続詞`, 0, null, null],
    */
    [1047, `während`, `…のあいだ`, 5, ``, `２格支配`, 0, null, null],
    /*
    [1048, `die Wahrheit`, `真実`, 1, `Wahrheit ／ Wahrheiten`, ``, 2, null, null],
    [1050, `die Wand`, `壁`, 1, `Wand ／ Wände`, ``, 2, null, null],
    [1051, `wandern`, `ハイキングをする`, 2, ``, ``, 2, null, null],
    [1052, `wann`, `いつ`, 3, ``, `疑問副詞`, 0, null, null],
    [1053, `warm`, `暖かい`, 4, ``, ``, 1, null, null],
    [1054, `warten`, `待つ`, 2, ``, ``, 0, null, null],
    [1055, `warum`, `なぜ`, 3, ``, ``, 0, null, null],
    [1056, `der Waschbär`, `アライグマ`, 1, `Waschbären ／ Waschbären`, ``, 5, null, null],
    [1057, `waschen`, `洗う`, 2, `wäscht ／ wusch ／ gewaschen`, ``, 2, null, null],
    [1058, `das Wasser`, `水`, 1, `Wassers ／ -`, ``, 0, null, null],
    [1059, `wechseln`, `取り替える`, 2, ``, ``, 1, null, null],
    [1060, `der Weg`, `道`, 1, `Weges ／ Wege`, ``, 0, null, null],
    */
    [1061, `wegen`, `…のゆえに`, 5, ``, `２格支配`, 0, null, null],
    /*
    [1062, `das Weihnachten`, `クリスマス`, 1, `Weihnachten ／ Weihnachten`, ``, 2, null, null],
    [1063, `weil`, `…なので`, 6, ``, `従属接続詞`, 0, null, null],
    [1064, `der Wein`, `ワイン`, 1, `Weines ／ Weine`, ``, 0, null, null],
    [1065, `weinen`, `泣く`, 2, ``, ``, 2, null, null],
    [1066, `die Weise`, `やり方`, 1, `Weise ／ Weisen`, ``, 1, null, null],
    [1067, `weit`, `広い`, 4, ``, ``, 0, null, null],
    [1068, `weiter`, `さらに先へ`, 3, ``, ``, 0, null, null],
    [1069, `die Welt`, `世界`, 1, `Welt ／ Welten`, ``, 0, null, null],
    [1070, `der Weltmeister`, `世界チャンピオン`, 1, `Weltmeisters ／ Weltmeister`, ``, 5, null, null],
    [1071, `die Weltreise`, `世界旅行`, 1, `Weltreise ／ Weltreisen`, ``, 5, null, null],
    [1072, `wenig`, `少しの`, 4, `wenigst / mindest ／ weniger / minder`, ``, 0, null, null],
    [1073, `wenn`, `…ならば／…したとき`, 6, ``, `従属接続詞`, 0, null, null],
    [1074, `wenn auch`, `…ではあるが`, 6, ``, `従属接続詞`, 5, null, null],
    [1075, `der Wettbewerb`, `競技会`, 1, `Wettbewerbs / -es ／ Wettbewerbe`, ``, 3, null, null],
    [1076, `das Wetter`, `天気`, 1, `Wetters ／ Wetter`, ``, 0, null, null],
    [1077, `wichtig`, `重要な`, 4, ``, ``, 0, null, null],
    */
    [1078, `wie`, `どのように`, 3, ``, `疑問副詞`, 0, null, null],
    /*
    [1079, `wieder|auf|bauen`, `再興する`, 2, ``, ``, 5, null, null],
    [1080, `wieder||holen`, `繰り返す、取って来る`, 2, ``, `両`, 1, null, null],
    [1081, `das Wien`, `ウィーン`, 1, ``, ``, 2, null, null],
    [1082, `wievielt`, `何番目の`, 4, ``, ``, 5, null, null],
    [1083, `wild`, `野生の`, 4, ``, ``, 4, null, null],
    [1084, `der Wind`, `風`, 1, `Winds / -es ／ Winde`, ``, 1, null, null],
    [1085, `der Winter`, `冬`, 1, `Winters ／ Winter`, ``, 0, null, null],
    [1086, `wirklich`, `本当に`, 3, ``, ``, 0, null, null],
    [1087, `die Wirklichkeit`, `現実`, 1, `Wirklichkeit ／ Wirklichkeiten`, ``, 2, null, null],
    [1088, `wissen`, `知っている`, 2, `weiß ／ wusste ／ gewusst`, ``, 0, null, null],
    [1090, `woanders`, `他の場所で`, 3, ``, ``, 5, null, null],
    [1091, `die Woche`, `週`, 1, `Woche ／ Wochen`, ``, 0, null, null],
    [1092, `das Wochenende`, `週末`, 1, `Wochenendes ／ Wochenenden`, ``, 0, null, null],
    */
    [1093, `woher`, `どこから`, 3, ``, `疑問副詞`, 1, null, null],
    [1094, `wohin`, `どこへ`, 3, ``, `疑問副詞`, 1, null, null],
    /*
    [1095, `das Wohl`, `幸せ`, 1, `Wohls / -es ／ -`, ``, 0, null, null],
    [1096, `wohlhabend`, `裕福な`, 4, ``, ``, 5, null, null],
    */
    [1098, `die Wohnung`, `住まい`, 1, `Wohnung ／ Wohnungen`, ``, 0, null, null],
    /*
    [1099, `das Wohnzimmer`, `居間`, 1, `Wohnzimmers ／ Wohnzimmer`, ``, 2, null, null],
    [1100, `der Wolf`, `オオカミ`, 1, `Wolfs / -es ／ Wölfe`, ``, 3, null, null],
    [1101, `womit`, `何によって`, 3, ``, ``, 4, null, null],
    [1102, `das Wort`, `単語`, 1, `Wortes ／ Wörter`, ``, 0, null, null],
    [1103, `das Wörterbuch`, `辞書`, 1, `Wörterbuchs ／ Wörterbucher`, ``, 3, null, null],
    [1104, `worüber`, `何の上方に`, 3, ``, ``, 5, null, null],
    [1105, `das Wunder`, `奇跡`, 1, `Wunder s ／ Wunder`, ``, 3, null, null],
    [1106, `der Wunsch`, `願望`, 1, `Wunsches ／ Wünsche`, ``, 1, null, null],
    [1107, `wünschen`, `欲しい`, 2, ``, ``, 1, null, null],
    [1108, `würdig`, `威厳のある`, 4, ``, ``, 5, null, null],
    
    
    [1109, `zahlen`, `支払う`, 2, ``, ``, 0, null, null],
    [1110, `zahlreichen`, `多数の`, 4, ``, ``, 5, null, null],
    [1111, `der Zahnarzt`, `歯科医`, 1, `Zahnarztes ／ Zahnärzte`, ``, 4, null, null],
    [1112, `die Zeche`, `飲食代`, 1, `Zeche ／ Zechen`, ``, 5, null, null],
    [1113, `die Zeichnung`, `スケッチ`, 1, `Zeichnung ／ Zeichnungen`, ``, 3, null, null],
    [1115, `zeihen`, `責める`, 2, `zieh ／ geeziehen`, ``, 5, null, null],
    [1117, `die Zeitschrift`, `雑誌`, 1, `Zeitschrift ／ Zeitschriften`, ``, 2, null, null],
    [1118, `die Zeitung`, `新聞`, 1, `Zeitung ／ Zeitungen`, ``, 0, null, null],
    [1119, `zerstören`, `破壊する`, 2, ``, ``, 2, null, null],
    [1120, `ziehen`, `引く`, 2, `zog ／ gezogen`, ``, 1, null, null],
    [1121, `das Ziel`, `目的地`, 1, `Ziels ／ Ziele`, ``, 0, null, null],
    [1122, `das Zimmer`, `部屋`, 1, `Zimmers ／ Zimmer`, ``, 0, null, null],
    [1123, `der Zirkus`, `サーカス`, 1, `Zirkus ／ Zirkussse`, ``, 5, null, null],
    [1124, `zittern`, `震える`, 2, ``, ``, 4, null, null],
    [1125, `der Zorn`, `怒り`, 1, `Zorns / -es ／ -`, ``, 3, null, null],
    */
    [1126, `zu`, `…へ`, 5, ``, `３格支配`, 0, null, null],
    [1127, `zufrieden`, `満足した`, 4, ``, ``, 2, null, null],
    /*
    [1129, `zu|machen`, `閉める`, 2, ``, ``, 4, null, null],
    [1130, `zurück|geben`, `返す`, 2, `→ geben`, ``, 3, null, null],
    [1131, `zurück|kommen`, `帰ってくる`, 2, `→ kommen`, ``, 4, null, null],
    [1132, `zurück|zahlen`, `返済する`, 2, ``, ``, 5, null, null],
    [1133, `zusammen`, `いっしょに`, 3, ``, ``, 0, null, null],
    [1134, `der Zuschauer`, `見物人`, 1, `Zuschauers ／ Zuschauer`, ``, 2, null, null],
    [1135, `zwar`, `確かに`, 3, ``, ``, 0, null, null],
    [1136, `die Zweidrittelmehrheit`, `３分の２の多数`, 1, `Zweidrittelmehrheit ／ Zweidrittelmehrheiten`, ``, 5, null, null],
    [1137, `zweimal`, `2回`, 3, ``, ``, 3, null, null],
    [1138, `zwischen`, `…の間で／に／へ`, 5, ``, `３・４格支配`, 0, null, null],
   */
    [1140, `wen`,`誰かを`, 3, ``, `※、疑問副詞`, 0, null, null],
    [1141, `selbst`,`自ら`,3,``,``, 0, null, null],
    [1142, `führen`,`連れて行く`,2,``,``,0,null,null,]
   
   
];


let chooseList1 = [];
let chooseList2 = [];
let chooseList3 = [];
let sortList = [];

let Qcard1 = document.getElementById('Qcard1');
let Qcard2 = document.getElementById('Qcard2');
let Acard1 = document.getElementById('Acard1');
let Acard2 = document.getElementById('Acard2');
let Acard3 = document.getElementById('Acard3');
let Acard4 = document.getElementById('Acard4');
let EcardQ = document.getElementById('EcardQ');
let EcardA = document.getElementById('EcardA');
let btn0 = document.getElementById('btn0');
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let btn4 = document.getElementById('btn4');
let btn5 = document.getElementById('btn5');
let rLv = document.getElementsByName('rnLv');
let rPart = document.getElementsByName('rnPart');
let rState = document.getElementsByName('rnState');
let rTimes = document.getElementsByName('rnTimes');
let rDirection = document.getElementsByName('rnDirection');
let Lv;
let Part;
let State;
let Times;
let Direction;
let now;
let play;

window.onload = load();
window.onload = numbering();

function numbering() {
    for (let i = 0; i < wordList.length; i++) {
        wordList[i][0] = i + 1;
        console.log(wordList[i]);
    }
};

function load() {
    now = 0;
    play = 0;
    Qcard1.innerHTML = null;
    Qcard2.innerHTML = null;
    Acard1.innerHTML = null;
    Acard2.innerHTML = null;
    Acard3.innerHTML = null;
    Acard4.innerHTML = null;
    btn3.innerHTML = null;
    btn4.innerHTML = null;
    btn5.innerHTML = `開始`;
    EcardQ.innerHTML = `
        <form id="rLv">
            <input type="radio" name="rnLv" checked>All</input>
            <input type="radio" name="rnLv">Lv.0</input>
            <input type="radio" name="rnLv">Lv.1</input>
            <input type="radio" name="rnLv">Lv.2</input>
            <br>
            <input type="radio" name="rnLv">Lv.3</input>
            <input type="radio" name="rnLv">Lv.4</input>
            <input type="radio" name="rnLv">Lv.5</input>
        </form>
        <hr>
        <form id="rPart">
            <input type="radio" name="rnPart" checked>All</input>
            <input type="radio" name="rnPart">名詞</input>
            <input type="radio" name="rnPart">動詞</input>
            <input type="radio" name="rnPart">副詞</input>
            <br>
            <input type="radio" name="rnPart">形容詞</input>
            <input type="radio" name="rnPart">前置詞</input>
            <input type="radio" name="rnPart">接続詞</input>
            <!--
            <br>
            <input type="radio" name="rnPart">冠詞</input>
            <input type="radio" name="rnPart">代名詞</input>
            <input type="radio" name="rnPart">数詞</input>
            <input type="radio" name="rnPart">間投詞</input>
            -->
        </form>`;
    EcardA.innerHTML = `
        <form id="rState">
            <input type="radio" name="rnState">All</input>
            <input type="radio" name="rnState">正解</input>
            <input type="radio" name="rnState">不正解</input>
            <input type="radio" name="rnState">未解答</input>
        </form>
        <hr>
        <form id="rTimes">
            <input type="radio" name="rnTimes" checked>All</input>
            <input type="radio" name="rnTimes">10</input>
            <input type="radio" name="rnTimes">30</input>
            <input type="radio" name="rnTimes">50</input>
            <input type="radio" name="rnTimes">100</input>
        </form>
        <hr>
        <form id="rDirection">
            <input type="radio" name="rnDirection" checked>独→日</input>
            <input type="radio" name="rnDirection">日→独</input>
        </form>
        `;
        if (Lv == 9) {
            rLv[0].checked = true;
        } else if (Lv <= 5) {
            rLv[Lv + 1].checked = true;
        } else {
            return;
        }
        if (Part <= 10) {
            rPart[Part].checked = true;
        } else {
            return;
        }
        if (State == 9) {
            rState[0].checked = true;
        } else if (State == 0) {
            rState[3].checked = true;
        } else if (State <= 2) {
            rState[State].checked = true;
        } else {
            return;
        }
        if (Times === null) {
            rTimes[0].checked = true;
        } else if (Times == 10) {
            rTimes[1].checked = true;
        } else if (Times == 30) {
            rTimes[2].checked = true;
        } else if (Times == 50) {
            rTimes[3].checked = true;
        } else if (Times == 100) {
            rTimes[4].checked = true;
        } else {
            return;
        }
        if (Direction <= 1) {
            rDirection[Direction].checked = true;
        } else {
            return;
        }
    console.log(`onload`);
    console.log(`wordList length: ${wordList.length}`);
};

toTop.onclick = function () {
    console.log(`toTop onclick`);
    return reload();
}

function reload() {
    console.log(`reload`);
    return load();
}

btn5.onclick = function () {
    console.log(`btn5 onclick`);
    mode();
};

function mode() {
    if (rLv[0].checked == true) {
        Lv = 9;
    } else if (rLv[1].checked == true) {
        Lv = 0;
    } else if (rLv[2].checked == true) {
        Lv = 1;
    } else if (rLv[3].checked == true) {
        Lv = 2;
    } else if (rLv[4].checked == true) {
        Lv = 3;
    } else if (rLv[5].checked == true) {
        Lv = 4;
    } else if (rLv[6].checked == true) {
        Lv = 5;
    } else {
        console.log(`Lv is not choosed.`)
        return reload();
    }
    //0All, 1名詞, 2動詞, 3副詞, 4形容詞, 5前置詞, 6接続詞, 7冠詞, 8代名詞 ,9数詞, 10間投詞
    if (rPart[0].checked == true) {
        Part = 0;
    } else if (rPart[1].checked == true) {
        Part = 1;
    } else if (rPart[2].checked == true) {
        Part = 2;
    } else if (rPart[3].checked == true) {
        Part = 3;
    } else if (rPart[4].checked == true) {
        Part = 4;
    } else if (rPart[5].checked == true) {
        Part = 5;
    } else if (rPart[6].checked == true) {
        Part = 6;
        /*
            } else if (rPart[7].checked == true) {
                Part = 7;
            } else if (rPart[8].checked == true) {
                Part = 8;
            } else if (rPart[9].checked == true) {
                Part = 9;
            } else if (rPart[10].checked == true) {
                Part = 10;
        */
    } else {
        console.log(`Part is not choosed.`)
        return reload();
    }
    if (rState[0].checked == true) {
        State = 9;
    } else if (rState[1].checked == true) {
        State = 1;
    } else if (rState[2].checked == true) {
        State = 2;
    } else if (rState[3].checked == true) {
        State = 0;
    } else {
        console.log(`State is not choosed.`)
        return reload();
    }
    if (rTimes[0].checked == true) {
        Times = null;
    } else if (rTimes[1].checked == true) {
        Times = 10;
    } else if (rTimes[2].checked == true) {
        Times = 30;
    } else if (rTimes[3].checked == true) {
        Times = 50;
    } else if (rTimes[4].checked == true) {
        Times = 100;
    } else {
        console.log(`Times is not choosed.`)
        return reload();
    }
    if (rDirection[0].checked == true) {
        Direction = 0;
    } else if (rDirection[1].checked == true) {
        Direction = 1;
    } else {
        console.log(`Direction is not choosed.`)
        return reload();
    }
    EcardQ.innerHTML = null;
    EcardA.innerHTML = null;
    btn5.innerHTML = null;
    console.log(`Started: Lv = ${Lv}, Part = ${Part}, State = ${State}, Times = ${Times}, Direction = ${Direction}`);
    chooseReset();
}

function chooseReset() {
    chooseList1 = [];
    chooseList2 = [];
    chooseList3 = [];
    sortList = [];
    chooseLv();
}

function chooseLv() {
    if (Lv == 0) {
        for (let i = 0; i < wordList.length; i++) {
            if (wordList[i][6] == 0) {
                chooseList1.push(wordList[i]);
            }
        }
    } else if (Lv == 1) {
        for (let i = 0; i < wordList.length; i++) {
            if (wordList[i][6] == 1) {
                chooseList1.push(wordList[i]);
            }
        }
    } else if (Lv == 2) {
        for (let i = 0; i < wordList.length; i++) {
            if (wordList[i][6] == 2) {
                chooseList1.push(wordList[i]);
            }
        }
    } else if (Lv == 3) {
        for (let i = 0; i < wordList.length; i++) {
            if (wordList[i][6] == 3) {
                chooseList1.push(wordList[i]);
            }
        }
    } else if (Lv == 4) {
        for (let i = 0; i < wordList.length; i++) {
            if (wordList[i][6] == 4) {
                chooseList1.push(wordList[i]);
            }
        }
    } else if (Lv == 5) {
        for (let i = 0; i < wordList.length; i++) {
            if (wordList[i][6] == 5) {
                chooseList1.push(wordList[i]);
            }
        }
    } else if (Lv == 9) { //all
        for (let i = 0; i < wordList.length; i++) {
            chooseList1.push(wordList[i]);
        }
    } else {
        return reload();
    }
    console.log(`after Lv :`);
    console.log(chooseList1);
    choosePart();
}

function choosePart() {
    //0All, 1名詞, 2動詞, 3副詞, 4形容詞, 5前置詞, 6接続詞, 7冠詞, 8代名詞 ,9数詞, 10間投詞
    if (Part == 1) {
        for (let i = 0; i < chooseList1.length; i++) {
            if (chooseList1[i][3] == 1) {
                chooseList2.push(chooseList1[i]);
            }
        }
    } else if (Part == 2) {
        for (let i = 0; i < chooseList1.length; i++) {
            if (chooseList1[i][3] == 2) {
                chooseList2.push(chooseList1[i]);
            }
        }
    } else if (Part == 3) {
        for (let i = 0; i < chooseList1.length; i++) {
            if (chooseList1[i][3] == 3) {
                chooseList2.push(chooseList1[i]);
            }
        }
    } else if (Part == 4) {
        for (let i = 0; i < chooseList1.length; i++) {
            if (chooseList1[i][3] == 4) {
                chooseList2.push(chooseList1[i]);
            }
        }
    } else if (Part == 5) {
        for (let i = 0; i < chooseList1.length; i++) {
            if (chooseList1[i][3] == 5) {
                chooseList2.push(chooseList1[i]);
            }
        }
    } else if (Part == 6) {
        for (let i = 0; i < chooseList1.length; i++) {
            if (chooseList1[i][3] == 6) {
                chooseList2.push(chooseList1[i]);
            }
        }
        /*
        } else if (Part == 7) {
            for (let i = 0; i < chooseList1.length; i++) {
                if (chooseList1[i][3] == 7) {
                    chooseList2.push(chooseList1[i]);
                }
            }
        } else if (Part == 8) {
            for (let i = 0; i < chooseList1.length; i++) {
                if (chooseList1[i][3] == 8) {
                    chooseList2.push(chooseList1[i]);
                }
            }
        } else if (Part == 9) {
            for (let i = 0; i < chooseList1.length; i++) {
                if (chooseList1[i][3] == 9) {
                    chooseList2.push(chooseList1[i]);
                }
            }
        } else if (Part == 10) {
            for (let i = 0; i < chooseList1.length; i++) {
                if (chooseList1[i][3] == 10) {
                    chooseList2.push(chooseList1[i]);
                }
            }
        */
    } else if (Part == 0) { //all
        for (let i = 0; i < chooseList1.length; i++) {
            chooseList2.push(chooseList1[i]);
        }
    } else {
        return reload();
    }
    console.log(`after Part :`);
    console.log(chooseList2);
    chooseState();
}

function chooseState() {
    if (State == 1) {
        for (let i = 0; i < chooseList2.length; i++) {
            if (chooseList2[i][7] == 1) {
                chooseList3.push(chooseList2[i]);
            }
        }
    } else if (State == 2) {
        for (let i = 0; i < chooseList2.length; i++) {
            if (chooseList2[i][7] == 2) {
                chooseList3.push(chooseList2[i]);
            }
        }
    } else if (State == 0) {
        for (let i = 0; i < chooseList2.length; i++) {
            if (chooseList2[i][7] == (0 || null)) {
                chooseList3.push(chooseList2[i]);
            }
        }
    } else if (State == 9) { //all
        for (let i = 0; i < chooseList2.length; i++) {
            chooseList3.push(chooseList2[i]);
        }
    } else {
        return reload();
    }
    console.log(`after State :`);
    console.log(chooseList3);
    sort();
}

function sort() {
    let realTimes
    if (Times === null) {
        realTimes = chooseList3.length;
    } else {
        realTimes = Times;
    }
    if (realTimes > chooseList3.length){
        realTimes = chooseList3.length;
    }
    for (let i = 0; i < realTimes; i++) {
        let rdm = null;
        rdm = Math.floor(Math.random() * chooseList3.length);
        sortList.push(chooseList3[rdm]);
        chooseList3.splice(rdm, 1);
    }
    console.log(`sortList :`);
    console.log(sortList);
    appear();
}

function appear() {
    if (sortList.length == 0) {
        return end();
    } else {
        console.log(`now is ${now}.`)
        play = 1;
        Qcard1.innerHTML = `No: ${sortList[now][0]}  Last: ${sortList.length - now}`;
        if (Direction == 0) {
            Qcard2.innerHTML = sortList[now][1];
        } else if (Direction == 1) {
            Qcard2.innerHTML = sortList[now][2];
        } else {
            return;
        }
        Acard1.innerHTML = `<br>`;
        Acard2.innerHTML = null;
        Acard3.innerHTML = null;
        Acard4.innerHTML = null;
        btn3.innerHTML = `解答を表示`;
    }
}

btn3.onclick = function () {
    open();
    btn3.innerHTML = null;
};

function open() {
    if (Direction == 0) {
        Acard1.innerHTML = sortList[now][2];
    } else if (Direction == 1) {
        Acard1.innerHTML = sortList[now][1]; 
    }
    //0All, 1名詞, 2動詞, 3副詞, 4形容詞, 5前置詞, 6接続詞, 7冠詞, 8代名詞 ,9数詞, 10間投詞
    let openState;
    if (sortList[now][3] == 1) {
        openState = `名詞`;
    } else if (sortList[now][3] == 2) {
        openState = `動詞`
    } else if (sortList[now][3] == 3) {
        openState = `副詞`
    } else if (sortList[now][3] == 4) {
        openState = `形容詞`
    } else if (sortList[now][3] == 5) {
        openState = `前置詞`
    } else if (sortList[now][3] == 6) {
        openState = `接続詞`
        /*
        } else if (sortList[now][3] == 7) {
            openState = `冠詞`
        } else if (sortList[now][3] == 8) {
            openState = `代名詞`
        } else if (sortList[now][3] == 9) {
            openState = `数詞`
        } else if (sortList[now][3] == 10) {
            openState = `間投詞`
        */
    } else {
        return;
    }
    Acard2.innerHTML = `品詞： ${openState}`;
    if (!(sortList[now][4] == ``)) {
        Acard3.innerHTML = `変化： ${sortList[now][4]}`;
    };
    if (!(sortList[now][5] == ``)) {
        Acard4.innerHTML = `備考： ${sortList[now][5]}`;
    }
}

btn0.onclick = function () {
    if (play == 0) {
        return;
    }
   wordList[sortList[now][0] - 1][7] = 0;
   console.log(wordList[sortList[now][0] - 1]);
    next()
};

btn1.onclick = function () {
    if (play == 0) {
        return;
    }
  wordList[sortList[now][0] - 1][7] = 1;
  console.log(wordList[sortList[now][0] - 1]);
    next()
};

btn2.onclick = function () {
    if (play == 0) {
        return;
    }
   wordList[sortList[now][0] - 1][7] = 2;
   console.log(wordList[sortList[now][0] - 1]);
    next()
};

function next() {
    if (now + 1 < sortList.length) {
        now++;
        appear();
    } else {
        play = 0;
        end();
    }
};

function end() {
    Qcard1.innerHTML = `Last: 0`;
    Qcard2.innerHTML = null;
    Acard1.innerHTML = null;
    Acard2.innerHTML = null;
    Acard3.innerHTML = null;
    Acard4.innerHTML = null;
    EcardQ.innerHTML = `<br>`;
    EcardA.innerHTML = `<br>`;
    btn3.innerHTML = null;
    btn4.innerHTML = `トップに戻る`;
}

btn4.onclick = function () {
    console.log(`End and relode.`)
    reload();
}
