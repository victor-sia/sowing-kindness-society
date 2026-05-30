export type Article = {
  slug: string;
  tag: string;
  date: string;
  author: string;
  authorRole: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  intro: string;
  image: string;
  readTime: string;
  withPlay?: boolean;
  body: Section[];
  relatedSlugs: string[];
};

export type Section = {
  type: 'h2' | 'h3' | 'p' | 'ul' | 'ol' | 'tip' | 'quote' | 'cta';
  content?: string;
  items?: string[];
  cite?: string;
};

export const ARTICLES: Article[] = [
  {
    slug: 'how-storytelling-helps-children-learn-kindness',
    tag: 'Article',
    date: '12 May 2026',
    author: 'Celina Loh',
    authorRole: 'Founder, Sowing Kindness Society',
    readTime: '6 min read',
    title: 'How Storytelling Helps Children Learn Kindness',
    metaTitle: 'How Storytelling Helps Children Learn Kindness | Sowing Kindness Society',
    metaDescription: 'Discover why storytelling is the most powerful tool for teaching kindness, empathy and values to children aged 3–6. Practical tips for Singapore families.',
    keywords: ['storytelling for children', 'teach kindness to kids', 'children empathy development', 'storytelling Singapore', 'bilingual storytelling children', 'kindness values preschool', 'social emotional learning Singapore', 'picture books kindness'],
    image: '/illustrations/section-5-image-1.png',
    intro: 'Why story is the gentlest classroom — and how families can use it to nurture empathy, patience and care in young children.',
    relatedSlugs: ['five-small-kindness-activities-for-your-saturday', 'growing-compassion-through-everyday-moments'],
    body: [
      { type: 'h2', content: 'Why children learn values through stories, not lectures' },
      { type: 'p', content: 'Ask any early childhood educator what the most powerful teaching tool in their classroom is, and most will say the same thing: a good story. Not a worksheet. Not a reward chart. Not a moral lesson delivered at eye level. A story.' },
      { type: 'p', content: 'There\'s a reason for this. Young children — especially those aged 3 to 6 — are still developing the cognitive capacity for abstract thought. Concepts like "kindness," "fairness," or "empathy" are invisible. You can\'t point to them. You can\'t hold them. But you can watch a lion and a mouse become friends, and understand — in your bones — what it means to be helped by someone smaller than you ever expected.' },
      { type: 'p', content: 'This is the genius of narrative: story makes the invisible visible. It turns values into images, feelings, and moments that a three-year-old can hold in their mind long after the book is closed.' },
      { type: 'h2', content: 'The science behind story and empathy' },
      { type: 'p', content: 'Researchers at Princeton University found that when we listen to a story, our brains synchronise with the storyteller\'s. The neural patterns of the listener begin to mirror those of the speaker — a process called "neural coupling." In children, this effect is even more pronounced.' },
      { type: 'p', content: 'When a child hears a story about a character who is lonely, their brain activates the same emotional circuits as if they themselves were lonely. This is not metaphor. It is biology. Stories build empathy literally, at the level of neural wiring.' },
      { type: 'p', content: 'For children aged 3 to 6, who are right in the heart of what developmental psychologists call the "sensitive period" for social-emotional learning, this matters enormously. The habits of the heart — noticing others, pausing before reacting, choosing to help — are laid down in these early years. And story is one of the most reliable ways to lay them.' },
      { type: 'quote', content: 'Children do not learn kindness by being told to be kind. They learn it by feeling the ache of a character\'s loneliness, the warmth of a stranger\'s generosity, the quiet satisfaction of a small act that changed someone\'s day.', cite: 'Mem Fox, award-winning Australian picture book author' },
      { type: 'h2', content: 'What kinds of stories build the most kindness?' },
      { type: 'p', content: 'Not all stories are equal when it comes to building kindness. Research on narrative and character development suggests that the most effective stories for young children share a few key qualities:' },
      { type: 'ul', items: [
        'A relatable main character — ideally a child or animal close in age or experience to your listener. Children empathise most easily with characters who resemble them.',
        'A moment of choice — a point in the story where the character decides whether or not to be kind. This moment is crucial. It teaches children that kindness is a decision, not just a feeling.',
        'Consequences that matter — not punishment, but natural outcomes. When the character chooses kindness, something good happens — not because they earned a reward, but because the world shifted slightly for the better.',
        'Emotional honesty — stories that acknowledge the difficulty of being kind (it\'s sometimes hard, sometimes scary, sometimes costly) are more powerful than those that make it look effortless.',
      ]},
      { type: 'p', content: 'Bilingual stories carry an additional gift: they allow children to encounter kindness in two emotional registers. In Singapore, many families move between English and Mandarin at home. When a child hears a kindness story in Chinese — in the cadences and vocabulary that belong to a grandparent\'s voice — it reaches a different, deeper part of the self.' },
      { type: 'h2', content: 'Storytelling as a family practice' },
      { type: 'p', content: 'The most powerful storytelling doesn\'t happen in classrooms or auditoriums. It happens in kitchens, at bedtime, on bus journeys. Whenever a parent or grandparent says, "Let me tell you about the time…"' },
      { type: 'p', content: 'Family stories — about a grandmother\'s kindness during a difficult year, about a father who shared his lunch with a stranger, about a cousin who stood up for a friend — are among the most formative moral experiences a child can have. They say: this is who we are. This is what people like us do.' },
      { type: 'tip', content: '💡 Try this tonight: Before bed, tell your child one small true story about a time you chose to be kind — even if it was hard, even if no one noticed. Keep it simple. Keep it real. Watch what it does.' },
      { type: 'h2', content: 'Practical tips for storytelling with young children' },
      { type: 'p', content: 'You don\'t need to be a performer to tell a good story to a child. Here\'s what works:' },
      { type: 'ol', items: [
        'Start with "One day…" — the simplest story opener in the world still works. Even a two-sentence story about a bird who shared a worm is enough.',
        'Pause at the moment of choice — when you reach the point where the character decides whether or not to be kind, slow down. Ask: "What do you think they should do?" This turns passive listeners into active moral reasoners.',
        'Use your child\'s name — "One day, a girl called Mei Lin was at the playground, and she noticed a boy sitting alone…" Personalising the story dramatically increases engagement and empathy.',
        'Ask "How do you think they felt?" — after an act of kindness in the story, pause and wonder aloud about the feelings on both sides. This builds emotional vocabulary alongside moral imagination.',
        'Let stories be imperfect — children don\'t need polished performances. A story told haltingly, with "um"s and restarts, still lands. What matters is the attention and the telling.',
      ]},
      { type: 'h2', content: 'Storytelling and Singapore\'s bilingual families' },
      { type: 'p', content: 'In a city where many children grow up hearing two or more languages, storytelling offers something rare: a space where both languages have equal dignity. A child who hears "好心有好报" — that kindness is repaid — in a Mandarin story will carry that phrase in a different part of their memory than if they encountered the same idea in English.' },
      { type: 'p', content: 'At Sowing Kindness Society, our bilingual storytelling competition exists precisely for this reason. We want children aged 3 to 6 to tell their stories in the language that feels most true to them — and to know that their story, in whatever tongue, is worth hearing.' },
      { type: 'cta', content: 'Is your child aged 3–6? Our bilingual storytelling competition is open for submissions until 20 September 2026. It\'s free to enter, and we can\'t wait to listen.' },
    ],
  },
  {
    slug: 'five-small-kindness-activities-for-your-saturday',
    tag: 'Parenting',
    date: '4 May 2026',
    author: 'Celina Loh',
    authorRole: 'Founder, Sowing Kindness Society',
    readTime: '5 min read',
    title: 'Five Small Kindness Activities for Your Saturday',
    metaTitle: 'Five Kindness Activities for Kids This Weekend | Sowing Kindness Society Singapore',
    metaDescription: 'Easy, no-prep kindness activities for families with children aged 3–6. Try these five simple ideas this Saturday to nurture empathy and compassion at home in Singapore.',
    keywords: ['kindness activities for kids Singapore', 'kindness activities preschoolers', 'teaching kindness children', 'family kindness activities', 'empathy activities young children', 'kindness crafts kids', 'parenting kindness Singapore', 'social emotional learning activities'],
    image: '/illustrations/section-5-image-2.png',
    intro: 'Easy, meaningful ideas you can do together — no preparation, no shopping, no glue gun required.',
    relatedSlugs: ['how-storytelling-helps-children-learn-kindness', 'growing-compassion-through-everyday-moments'],
    body: [
      { type: 'h2', content: 'Why small acts matter most' },
      { type: 'p', content: 'It\'s tempting to think that teaching kindness requires a grand programme — a formal curriculum, a school initiative, a specially designed course. But the research tells a different story.' },
      { type: 'p', content: 'Studies on character development in early childhood consistently find that the most lasting moral habits are formed not in classrooms but in the ordinary moments of family life: at the dinner table, on the bus, in the corridor of a HDB block. What children notice most is not what we tell them to do, but what they see us doing — and what we invite them to do alongside us.' },
      { type: 'p', content: 'The five activities below are deliberately small. None of them requires preparation. None costs money. All of them can be done with a child aged 3 to 6, on any ordinary Saturday, in any Singapore home.' },
      { type: 'h2', content: 'Activity 1: The Kindness Hunt' },
      { type: 'p', content: 'Before you leave the house, tell your child you\'re both going on a Kindness Hunt. Your mission: to spot as many acts of kindness as you can before you get back home.' },
      { type: 'p', content: 'It could be someone holding the lift. A woman helping an elderly man with his groceries at the wet market. A child sharing a swing. A cleaner working quietly so everyone else can enjoy a clean space.' },
      { type: 'tip', content: '💡 When you spot one, crouch down and point it out quietly: "Did you see that? He held the door for the auntie with the pram. That was kind." Then ask: "How do you think she felt?"' },
      { type: 'p', content: 'This activity does two things at once: it trains attention (noticing kindness is the first step to choosing it), and it builds vocabulary. Children who can name what kindness looks like are far more likely to reproduce it.' },
      { type: 'h2', content: 'Activity 2: The Kindness Note' },
      { type: 'p', content: 'Ask your child to think of one person who has been kind to them recently. It could be a grandparent, a friend, a teacher, the downstairs neighbour who always says hello.' },
      { type: 'p', content: 'Then help them write — or draw, if they\'re not yet writing — a note to that person. It doesn\'t need to be long. "Thank you for playing with me. I felt happy" is enough. "Your food is yummy. I like coming to your house" is enough. The note is the message. The act of making it is the lesson.' },
      { type: 'p', content: 'For bilingual families: try doing this in both languages. Ask your child how to say "thank you" and "kind" in Mandarin, then write both. 谢谢你的好意 — thank you for your kindness — is one of the most beautiful phrases in the language.' },
      { type: 'h2', content: 'Activity 3: The Thinking-of-You Call' },
      { type: 'p', content: 'Call someone your child loves who they haven\'t spoken to in a while — a grandparent in another town, a cousin who moved abroad, an auntie who lives alone.' },
      { type: 'p', content: 'Before you dial, help your child prepare one thing they want to say: a funny thing that happened, a question they\'ve been curious about, something they want to share. Then let them lead the conversation.' },
      { type: 'tip', content: '💡 After the call, ask: "How do you think ah ma felt when she heard your voice?" This is the key question — it shifts your child\'s attention from the act to the impact, which is where kindness really lives.' },
      { type: 'p', content: 'This activity is especially powerful for children who are naturally shy. A phone call is lower-stakes than a face-to-face interaction, and the delight on the other end is immediate and unmistakable.' },
      { type: 'h2', content: 'Activity 4: The Give-One-Away' },
      { type: 'p', content: 'Ask your child to choose one toy, book, or belonging they no longer need — something in good condition that another child might love.' },
      { type: 'p', content: 'Don\'t rush this. Sit with them as they consider it. If they\'re uncertain, that\'s good — it means they\'re genuinely thinking about what it means to give something away. Help them think through who might receive it: "If a child who didn\'t have many books found this one, what do you think they\'d feel?"' },
      { type: 'p', content: 'Then donate it together. Let them be the one who puts it in the donation box. The physical act of giving — not just the decision — is part of the lesson.' },
      { type: 'ul', items: [
        'Community Chest collection points are found in most NTUC FairPrice stores across Singapore',
        'The Salvation Army Family Stores accept children\'s items in good condition',
        'Many void decks and community centres have neighbourhood sharing boxes',
        'Or ask a teacher if there\'s a child in your child\'s class who might appreciate a specific item',
      ]},
      { type: 'h2', content: 'Activity 5: The Kindness Jar' },
      { type: 'p', content: 'Find an empty jar — a jam jar, a biscuit tin, any container with a lid. Together with your child, decorate it with whatever you have on hand: stickers, a strip of washi tape, a piece of coloured paper, a word drawn in marker.' },
      { type: 'p', content: 'This becomes your family\'s Kindness Jar. Every evening, anyone in the family can write (or draw, for younger children) one kind thing they did that day, or one kind thing they noticed, and drop it into the jar.' },
      { type: 'p', content: 'At the end of the month, empty it out and read every slip together. Children are often stunned by how full the jar is — and by the kindnesses they\'d already forgotten.' },
      { type: 'tip', content: '💡 Keep the bar low. "I let my sister have the last piece of kaya toast" is a real kindness. So is "I said good morning to the security guard." The point is not to perform grand gestures but to notice the small ones — because small kindnesses, repeated daily, are what actually build a kind life.' },
      { type: 'h2', content: 'A note to parents' },
      { type: 'p', content: 'You don\'t have to do all five of these on the same Saturday. One is enough. The goal isn\'t to complete a list — it\'s to create a moment, together, where your child experiences kindness as something active, something chosen, something that belongs to them.' },
      { type: 'p', content: 'The best kindness education is not a programme. It\'s a parent who pauses, points, and says: "Did you see that? That was kind." Over and over, quietly, for years.' },
      { type: 'cta', content: 'Want to go further? Our bilingual storytelling competition invites children aged 3–6 to share a story about a small act of kindness. It\'s free to enter, and submissions are open until 20 September 2026.' },
    ],
  },
  {
    slug: 'growing-compassion-through-everyday-moments',
    tag: 'Inspiration',
    date: '28 Apr 2026',
    author: 'Celina Loh',
    authorRole: 'Founder, Sowing Kindness Society',
    readTime: '7 min read',
    withPlay: true,
    title: 'Growing Compassion Through Everyday Moments',
    metaTitle: 'Growing Compassion in Children Through Everyday Moments | Sowing Kindness Society',
    metaDescription: 'How small, ordinary moments build lasting compassion in young children. A guide for Singapore parents on raising empathetic, kind children aged 3–6 through daily life.',
    keywords: ['compassion children', 'raising kind children Singapore', 'teaching empathy preschoolers', 'child compassion development', 'empathy activities children Singapore', 'social emotional learning preschool', 'kindness habits children', 'character building young children'],
    image: '/illustrations/section-5-image-3.png',
    intro: 'Small acts, big impact — how daily moments quietly grow kind, caring children.',
    relatedSlugs: ['how-storytelling-helps-children-learn-kindness', 'five-small-kindness-activities-for-your-saturday'],
    body: [
      { type: 'h2', content: 'The problem with kindness lessons' },
      { type: 'p', content: 'There\'s a common pattern in how we try to teach children compassion. We notice that our child pushed someone, or grabbed a toy, or said something unkind — and we sit them down for a Talk. We explain, in careful parent-voice, why we should be kind. We talk about feelings. We might even do a role-play.' },
      { type: 'p', content: 'And then, three days later, it happens again.' },
      { type: 'p', content: 'The truth is that compassion — real, habituated compassion, the kind that shows up automatically when another person is hurting — is not built through lessons. It\'s built through repetition. Through the small, unremarkable moments of ordinary life that happen so frequently we almost forget to notice them.' },
      { type: 'p', content: 'This piece is about those moments. It\'s about how to see them, use them, and trust that they\'re enough.' },
      { type: 'h2', content: 'What developmental science tells us about compassion' },
      { type: 'p', content: 'Compassion is sometimes described as empathy plus action — the combination of feeling what another person feels and choosing to do something about it. Both parts develop gradually in early childhood, and both are shaped far more by environment than by biology.' },
      { type: 'p', content: 'Research from the Greater Good Science Center at UC Berkeley identifies the early childhood years — particularly ages 3 to 7 — as a critical window for compassion development. During this period, children are rapidly developing the capacity for perspective-taking: the ability to understand that other people have thoughts and feelings different from their own.' },
      { type: 'p', content: 'But perspective-taking is a skill, not an instinct. Like reading or counting, it needs to be practised. And the most natural, low-cost practice ground is everyday family life.' },
      { type: 'quote', content: 'Compassion is not what we teach children. It\'s what we model for them — in the way we speak about absent people, in the way we respond when someone drops something in the street, in the way we treat people who have no power over us.', cite: 'Dr Kristin Neff, pioneering researcher in compassion and self-compassion' },
      { type: 'h2', content: 'The 30-second window' },
      { type: 'p', content: 'Most parents feel they don\'t have time to do more. The morning is already full — breakfast, school bag, the bus to catch. The evening is full too. There\'s homework, dinner, bath, the endless negotiation of bedtime.' },
      { type: 'p', content: 'But compassion doesn\'t need a slot in the schedule. It needs a 30-second window.' },
      { type: 'p', content: 'The 30-second window is the gap between noticing something and moving on. It\'s the moment when you\'re walking through Toa Payoh Hub with your four-year-old and you see an elderly woman struggling with her groceries. Most of the time, that moment passes unremarked. The child doesn\'t even notice.' },
      { type: 'p', content: 'But if you stop — even just to say, out loud, "That auntie is carrying a lot. I wonder if she\'s tired. Do you think we should help?" — you have just given your child a lesson in compassion more powerful than anything you could deliver at the dinner table.' },
      { type: 'tip', content: '💡 The 30-second window rule: whenever you notice something that calls for compassion — a person struggling, an animal in distress, a child sitting alone — pause for 30 seconds. Don\'t rush past. Name what you see. Ask how they might feel. Then, if it\'s safe and appropriate, act.' },
      { type: 'h2', content: 'Three everyday moments and how to use them' },
      { type: 'h3', content: 'Moment 1: When your child sees someone crying' },
      { type: 'p', content: 'This happens more than we think — a classmate who falls and cries, a baby sibling in distress, an adult who is visibly upset. Young children\'s responses to tears range from distress to curiosity to laughter (which parents find mortifying, but is actually developmentally normal).' },
      { type: 'p', content: 'The instinct is often to hurry the child away: "Come, don\'t stare." But staring is how children learn. The more useful response is to crouch down, lower your voice, and narrate: "That boy is crying. He might have hurt himself, or maybe he lost something. How do you think he feels?"' },
      { type: 'p', content: 'You don\'t always need to intervene. Sometimes the lesson is simply in noticing, naming, and wondering together.' },
      { type: 'h3', content: 'Moment 2: When someone is unkind in front of your child' },
      { type: 'p', content: 'Children in Singapore regularly witness adult interactions that are less than kind: someone snapping at a service worker, a driver honking aggressively, a person ignoring a greeting. These moments are often more formative than we realise.' },
      { type: 'p', content: 'If it\'s safe to do so, name what happened afterwards: "Did you notice that man didn\'t say thank you to the cleaner? That made me a bit sad. What do you think the cleaner felt?"' },
      { type: 'p', content: 'This doesn\'t require moralising or a lecture. A quiet observation — "I think we can do better than that" — is enough. Children are paying close attention to how we interpret the world around them.' },
      { type: 'h3', content: 'Moment 3: When your child is unkind' },
      { type: 'p', content: 'This is the hardest moment, and the most important. When a child does something unkind — pushes, excludes, says something cruel — the parental response shapes what they learn.' },
      { type: 'p', content: 'The research is clear: shaming ("How could you do that?") or lecturing ("I told you to be kind!") are the least effective responses. What works is a brief, warm, specific conversation: "When you grabbed that from Mei Xin, her face changed. Did you see? I wonder how she felt. What could you do now?"' },
      { type: 'p', content: 'This approach — called "inductive discipline" by developmental psychologists — asks children to consider the perspective and feelings of the person they\'ve hurt, rather than focusing on the wrongness of their own behaviour. It builds the exact neural pathways compassion requires.' },
      { type: 'h2', content: 'Compassion begins at home' },
      { type: 'p', content: 'Perhaps the most overlooked site for compassion education is the family itself. Children who learn to be kind to their siblings, to notice when a parent is tired, to offer help without being asked — are developing the same capacities that will later show up as kindness towards strangers and broader society.' },
      { type: 'p', content: 'In Singapore\'s fast-paced, academically focused culture, there is sometimes pressure to prioritise achievement over character. But the research is unambiguous: children who develop strong social-emotional skills in early childhood are more academically successful, not less. Compassion is not a distraction from success. It is the foundation for it.' },
      { type: 'h2', content: 'The long game' },
      { type: 'p', content: 'Raising a compassionate child is not a project with a timeline. It\'s a long game, measured in years and in the accumulation of thousands of small moments that, taken together, form something invisible but profound: a way of moving through the world that notices others, pauses before reacting, and chooses to help.' },
      { type: 'p', content: 'You don\'t always see it working. Months of noticing, naming, and modelling can feel unrewarded — and then, one day, you\'re at the playground and your child walks over to a child sitting alone and says, quietly, "Do you want to play with us?"' },
      { type: 'p', content: 'That\'s it. That\'s the whole game. The seed, planted one 30-second window at a time, finally broke through.' },
      { type: 'cta', content: 'Sowing Kindness Society runs Singapore\'s bilingual storytelling competition for children aged 3–6. If your child has a story about a small act of kindness — one they saw, did, or wish for — we\'d love to hear it. Submissions are free and open until 20 September 2026.' },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return ARTICLES.find(a => a.slug === slug);
}

export function getRelatedArticles(slugs: string[]): Article[] {
  return slugs.map(s => ARTICLES.find(a => a.slug === s)).filter(Boolean) as Article[];
}
