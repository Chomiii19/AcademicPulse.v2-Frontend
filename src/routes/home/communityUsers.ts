interface Iuser {
  name: string;
  username: string;
  comment: string;
  image: string;
  rowSpan: string;
}

const users = [
  {
    name: 'Gerald Makiling',
    username: '@GerMakiling',
    comment:
      "Using AcadPulse has been a game-changer for our school. The ID validation system is incredibly efficient, ensuring that only the school's students can enter and exit the campus seamlessly. The dashboard provides a clear overview of student traffic, and the ability to track individual logs has saved us so much time. What really stands out is how user-friendly the app is—our admin staff learned to use it in no time. AcadPulse has made managing everything, from security to daily operations, so much easier. Highly recommended!",
    rowSpan: 'row-span-2',
  },
  {
    name: 'Andres Cruz',
    username: '@shaiii29',
    comment:
      'As a parent, I always feel secure being able to know when and what time does my child go in and out of school🥰',
    rowSpan: 'row-span-1',
  },
  {
    name: 'Gwyneth Esguerra',
    username: '@gwyn_esguerra19',
    comment: 'The QR code scanning feature is super handy and fast.',
    rowSpan: 'row-span-1',
  },
  {
    name: 'Sir Mike',
    username: '@mike_edward',
    comment:
      'It’s so easy to use—everyone in the admin team picked it up quickly.',
    rowSpan: 'row-span-1',
  },
  {
    name: 'Angel Cuenca',
    username: '@angelcuenca12',
    comment:
      "Honestly, AcadPulse has made my job so much easier. As a guard I used to spend a ton of time manually checking IDs in the campus, but with the ID validation system in AcadPulse, everything’s automated. It's so quick and accurate, and I don’t have to worry about any mistakes or delays anymore. The entry and exit logs are really helpful too. I can instantly see who’s on or off campus, which has saved us from a lot of confusion.  What I love most is how simple the whole thing is to use. I never have to waste time figuring things out.",
    rowSpan: 'row-span-2',
  },
  {
    name: 'Lara Chua',
    username: '@laraaa_',
    comment:
      'I feel at ease at school knowing that outsiders are now able to be detected',
    rowSpan: 'row-span-1',
  },
  {
    name: 'Sharlien Vargas',
    username: '@SharVargas',
    comment:
      'Using AcadPulse has been a huge relief. Before we had it, tracking student entry and exit was a hassle – a lot of manual work and confusion. But now, with the ID scanning and automatic logs, everything is tracked instantly. I love how easy it is to pull up the student logs too, whether I need to check a specific time or just get a quick overview.I never feel lost trying to figure something out. Plus, the QR code scanning feature is such a time-saver! I used to dread the long lines during entry, but now it’s all so smooth and efficient.',
    rowSpan: 'row-span-2',
  },
  {
    name: 'Sheryll Dumlao',
    username: '@dumlaosheryll',
    comment: 'The ID validation system works perfectly—no more manual checks!',
    rowSpan: 'row-span-1',
  },
  {
    name: 'Veloria Araneta',
    username: '@vel_araneta18',
    comment:
      'AcadPulse’s QR code integration is a game-changer for campus security!',
    rowSpan: 'row-span-1',
  },
];

export { users };
export type { Iuser };
