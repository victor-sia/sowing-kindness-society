// Committee source: Storytelling_Starter_Pack_English_Chinese.pdf (4 pages).
// Keep the supplied English/Chinese records paired in their original order.
export type StoryIdea = {
  title: string;
  action: string;
  sample: string;
  prop: string;
  prompt: string;
};

export const STORY_IDEAS: Record<'en' | 'zh', StoryIdea[]> = {
  "en": [
    {
      "title": "I Helped at Home",
      "action": "I can put away my toys.",
      "sample": "My toys were all over the floor. I sorted them into a box. Now I could find my favourite toy, and there was room to play.",
      "prop": "Small empty toy box or a picture of one",
      "prompt": "What did you put away? How did you feel afterwards?"
    },
    {
      "title": "I Shared My Crayons",
      "action": "I can share something I am using.",
      "sample": "My friend wanted to draw but had no crayons. I offered some of mine. We drew together and showed each other our pictures.",
      "prop": "Two large paper crayons",
      "prompt": "Which colour did you share? What did your friend draw?"
    },
    {
      "title": "I Invited a New Friend to Play",
      "action": "I can help someone feel included.",
      "sample": "A new child stood beside our game. I said hello and asked him to join. I explained the game, and we had fun together.",
      "prop": "Paper ball or drawing of a game",
      "prompt": "What game would you invite a new friend to play?"
    },
    {
      "title": "I Said Sorry and Made It Right",
      "action": "I can apologise and help fix a mistake.",
      "sample": "I accidentally knocked down my friend’s blocks. I said sorry and asked if I could help. We rebuilt the tower together.",
      "prop": "Cardboard picture of a block tower",
      "prompt": "What could you do after making a mistake?"
    },
    {
      "title": "I Tried Again",
      "action": "I am not angry when I fail to do something.",
      "sample": "My paper tower fell down. I felt upset, took a breath and tried a wider base. This time it stood up, and I felt proud.",
      "prop": "Two pictures: fallen tower and standing tower",
      "prompt": "What was difficult for you? What did you try next?"
    },
    {
      "title": "I Used My Gentle Words",
      "action": "I can explain my feelings calmly.",
      "sample": "I wanted the toy my friend was using. I almost shouted. I took a breath and asked for a turn. We agreed to take turns.",
      "prop": "Paper toy picture",
      "prompt": "What can you say when you want a turn?"
    },
    {
      "title": "I Made Grandma Smile",
      "action": "I can show care with a small action.",
      "sample": "Grandma looked tired. I made her a drawing and sat beside her. She smiled, and we talked about my drawing.",
      "prop": "Child’s drawing or handmade card",
      "prompt": "Who would you make a picture for? What would you draw?"
    },
    {
      "title": "I Looked After My Plant",
      "action": "I can care for a living thing with an adult’s help.",
      "sample": "I planted a seed with Dad. We checked the soil and watered it when needed. One day I spotted a tiny leaf and called Dad to look.",
      "prop": "Paper seedling with a fold-out leaf",
      "prompt": "What did you notice as your plant grew?"
    },
    {
      "title": "I Kept Our Playground Clean",
      "action": "I can put my rubbish in a bin.",
      "sample": "After my snack, I held on to my wrapper. I found a bin with Mum and threw it away. I was happy to leave the playground clean.",
      "prop": "Clean paper wrapper and a paper bin picture",
      "prompt": "Where did you put your snack wrapper?"
    },
    {
      "title": "I Remembered to Say Thank You",
      "action": "I can thank people who help me.",
      "sample": "My teacher helped me zip my bag. I said thank you. At home I also thanked Dad for helping me, and told him what happened.",
      "prop": "Small bag or a drawing of one",
      "prompt": "Who helped you today? What did they do?"
    }
  ],
  "zh": [
    {
      "title": "《我会收拾玩具》",
      "action": "我可以把玩具放回原处。",
      "sample": "玩具散落在地上。我把它们分类放进盒子里。收拾好了，我找到了最喜欢的玩具，也有地方玩了。",
      "prop": "小空玩具盒或玩具盒图画",
      "prompt": "你收拾了什么？收拾后有什么感觉？"
    },
    {
      "title": "《我把蜡笔借给朋友》",
      "action": "我可以分享正在使用的东西。",
      "sample": "朋友想画画，可是没有蜡笔。我把几支蜡笔借给他。我们一起画画，还互相欣赏对方的作品。",
      "prop": "两支用纸做的大蜡笔",
      "prompt": "你分享了什么颜色？朋友画了什么？"
    },
    {
      "title": "《我邀请新朋友一起玩》",
      "action": "我可以主动邀请别人加入。",
      "sample": "新来的小朋友站在旁边看我们玩。我向他打招呼，邀请他加入，还告诉他怎么玩。我们玩得很开心。",
      "prop": "纸球或游戏图画",
      "prompt": "你会邀请新朋友玩什么游戏？"
    },
    {
      "title": "《我说对不起，也来帮忙》",
      "action": "我可以道歉，并帮忙补救。",
      "sample": "我不小心碰倒了朋友的积木。我说了对不起，又问他要不要我帮忙。我们一起把积木塔重新搭好了。",
      "prop": "纸板画的积木塔",
      "prompt": "做错事以后，你可以怎样补救？"
    },
    {
      "title": "《我再试一次》",
      "action": "遇到困难时，我不生气",
      "sample": "我搭的纸塔倒了，心里有点难过。我深呼吸，把底部搭宽一些，再试一次。这次纸塔站住了，我很开心。",
      "prop": "两张图：倒下的纸塔和站稳的纸塔",
      "prompt": "什么事情让你觉得难？后来你怎么做？"
    },
    {
      "title": "《我好好说话》",
      "action": "我可以平静地说出自己的想法。",
      "sample": "我想玩朋友手里的玩具，差点大声喊出来。我深呼吸，问他可不可以让我接着玩。我们说好轮流玩。",
      "prop": "一张玩具图画",
      "prompt": "想轮流玩的时候，你可以怎么说？"
    },
    {
      "title": "《我让奶奶笑了》",
      "action": "我可以用小小的行动关心家人。",
      "sample": "奶奶看起来有点累。我画了一幅画送给她，又坐在她身边。奶奶笑了，我们一起聊我的画。",
      "prop": "孩子的画或自制卡片",
      "prompt": "你想送一幅画给谁？你会画什么？"
    },
    {
      "title": "《我照顾小植物》",
      "action": "我可以在大人的帮助下照顾植物。",
      "sample": "我和爸爸一起种下种子。我们看看泥土，需要时就浇水。有一天，我发现一片小叶子，赶快叫爸爸来看。",
      "prop": "可展开叶子的纸苗",
      "prompt": "植物长大时，你发现了什么变化？"
    },
    {
      "title": "《我让游乐场更干净》",
      "action": "我可以把自己的垃圾放进垃圾桶。",
      "sample": "吃完点心，我拿好包装纸。我和妈妈一起找到垃圾桶，把包装纸丢进去。看到游乐场干干净净，我很开心。",
      "prop": "干净的纸包装和垃圾桶图画",
      "prompt": "吃完点心后，你把包装纸放在哪里？"
    },
    {
      "title": "《我记得说谢谢》",
      "action": "我感谢帮助我的人。",
      "sample": "老师帮我拉好书包的拉链，我说了谢谢。回到家，我也谢谢爸爸的帮助，还告诉他今天发生的事。",
      "prop": "小书包或书包图画",
      "prompt": "今天谁帮助了你？他做了什么？"
    }
  ]
};
