import React from "react";
import Quiz from '@site/src/components/Quiz/index'

export default function Practice() {
  const questions = [
    {
      questionText: "林海音的小名是什麼？",
      answerOptions: [
        { answerText: "花兒", isCorrect: false },
        { answerText: "含英", isCorrect: false },
        { answerText: "英子", isCorrect: true },
        { answerText: "瘦雞", isCorrect: false },
      ],
    },
    {
      questionText: "〈爸爸的花兒落了〉的主題為何？",
      answerOptions: [
        { answerText: "健康", isCorrect: false },
        { answerText: "愛情", isCorrect: false },
        { answerText: "和平", isCorrect: false },
        { answerText: "成長", isCorrect: true },
      ],
    },
    {
      questionText: "林海音在〈爸爸的花兒落了〉以「花」象徵父親，更進一步以「爸爸的花兒落了」象徵什麼？",
      answerOptions: [
        { answerText: "父親的病逝", isCorrect: true },
        { answerText: "父親的年邁", isCorrect: false },
        { answerText: "父親的感歎", isCorrect: false },
        { answerText: "父親的成就", isCorrect: false },
      ],
    },
    {
      questionText: "承上題，「花」的象徵之意也暗喻：",
      answerOptions: [
        { answerText: "英子沒盡孝道", isCorrect: false },
        { answerText: "英子童年的結束", isCorrect: true },
        { answerText: "英子延誤了學習", isCorrect: false },
        { answerText: "英子影響父親的心情", isCorrect: false },
      ],
    },
    {
      questionText:
        "〈爸爸的花兒落了〉一文中，作者利用「花兒」串連全文，然而除了「花兒」之外，作者還利用什麼串連整篇文章？",
      answerOptions: [
        { answerText: "驪歌", isCorrect: false },
        { answerText: "正金銀行", isCorrect: false },
        { answerText: "畢業典禮", isCorrect: true },
        { answerText: "瘦雞妹妹", isCorrect: false },
      ],
    },
    {
      questionText: "下列何者不是〈爸爸的花兒落了〉中主角回憶的往事？",
      answerOptions: [
        { answerText: "被父親體罰", isCorrect: false },
        { answerText: "幫母親買菜煮飯", isCorrect: true },
        { answerText: "父親送衣服到學校", isCorrect: false },
        { answerText: "寄錢給在日本讀書的陳叔叔", isCorrect: false },
      ],
    },
    {
      questionText: "〈爸爸的花兒落了〉一文中，現實與過去的場景交錯，作者在現況描寫時，不斷回憶過往，下列何者不是作者對過往的回憶？",
      answerOptions: [
        { answerText: "爸爸愛花如痴", isCorrect: false },
        { answerText: "因賴床不起被爸爸懲罰", isCorrect: false },
        { answerText: "爸爸要她闖練，交代她到銀行匯款", isCorrect: false },
        { answerText: "瘦雞妹妹在搶燕燕的小玩意兒，弟弟把沙土灌進玻璃瓶裡", isCorrect: true },
      ],
    },
    {
      questionText: "〈爸爸的花兒落了〉全文並未出現有關爸爸病危或去世的字詞，但文章中處處可見伏筆，下列何者並非與此相關的伏筆？",
      answerOptions: [
        { answerText: "媽媽今早的眼睛為什麼紅腫著？", isCorrect: false },
        { answerText: "不要怕，英子，你要學做許多事，將來好幫著妳媽媽。", isCorrect: false },
        { answerText: "沒有爸爸，你更要自己管自己，並且管弟弟和妹妹，你已經大了，是不是，英子？", isCorrect: false },
        { answerText: "爸沒說什麼，打開了手中的包袱，拿出來的是我的花夾襖。他遞給我，看我穿上，又拿出兩個銅子兒來給我。", isCorrect: true },
      ],
    },
  ];

  return <Quiz questions={questions} />
} 