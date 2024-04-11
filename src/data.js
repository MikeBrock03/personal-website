export const projects = [  
  {
  image: '/images/punch/logo.png',
  title: 'Punch',
  subtitle: 'Platform to pipeline students to trade school',
  is: "Punch is a platform to pipeline students to high-paying trade work. Right now, students in Oklahoma are pipelined into college despite most Oklahoman college degrees not having a positive return on investment and there being a lack of trade workers. \n\n &nbsp; \n\n We provide schools in Oklahoma, Nebraska, and Idaho a way to easily start and manage their school's internship programs. Now, their transcripts reflect their verified 'work-based learning' hours so that they can move right into apprenticeship rather than wasting time in trade school. \n\n &nbsp; \n\n [Check out our website here!](https://punchdevelopers.com/)",
  looks: [
      '/images/punch/example_1.png',
      '/images/punch/example_2.png',
      '/images/punch/example_3.png',
      '/images/punch/example_4.jpeg',
      '/images/punch/example_5.jpeg',
  ]
},
  
 
  {
    image: '/images/supahot/logo.png', 
    title: 'SUPaHOT',
    subtitle: 'A secure, personalized AI healthcare assistant',
    is: "a secure, personalized AI healthcare assistant. \n\n &nbsp; \n\n Inspired by [LLMonFHIR by the Stanford Byers Center for Biodesign](https://github.com/StanfordBDHG/LLMonFHIR), which uses GPT-4. They recognized that using cloud AI providers is expensive and insecure. \n\n &nbsp; \n\n With my team in CS224N, we created a data pipeline to decrease the amount of tokens that were passed into our small model. We then iterated on a 7b LLaMA model pre-trained with medical data and finetuned on our pipeline tasks. This method achieved similar performance to gpt-3.5-turbo, our oracle. \n\n &nbsp; \n\n [Common phones today can run 7B parameter models](https://www.qualcomm.com/news/onq/2023/09/democratizing-on-device-generative-ai-with-sub-10-billion-parameter-models#:~:text=LLMs%20with%207%20billion%20parameters,cycles%20refresh%20the%20installed%20base). By processing health data locally, it ensures privacy while providing customized health advice. \n\n &nbsp; \n\n We are working to integrate with [Stanford Spezi](https://spezi.sites.stanford.edu/) and the Byers Center for Biodesign, read our paper here.",
    looks: [
      '/images/supahot/example_1.png',
      '/images/supahot/example_2.png',
    ]
  },
  {
    image: '/images/judge/logo.png',
    title: 'JudgeMyStartup',
    subtitle: 'A fun AI-powered quiz to see if your startup will pan out',
    is: "We leveraged historical startup data from Kaggle to predict the potential success or failure of new ventures. This gives entrepreneurs/VC's a fun insight into their startup's viability, grounded in data analytics and predictive modeling. \n\n &nbsp; \n\n With my team in CS221, we used PyTorch to create a classifier that extracts patterns and indicators of startup success. Our model achieved an impressive 86% accuracy rate for historical data! \n\n &nbsp; \n\n Controversially, we defined a 'success' strictly as being acquired and a 'failure' as closing down, because companies that seem like they'll never bust go bankrupt and seemingly irrelevant companies stick around (see Redbox). \n\n &nbsp; \n\n Check out the website here! [https://www.judgemystartup.com/]",
    looks: [
        '/images/judge/example_1.png',
        '/images/judge/example_2.png',
        '/images/judge/example_3.png',
    ]
  },
  {
    image: '/images/quilt/logo.png',
    title: 'Quilt',
    subtitle: 'A way to spend money with your friends',
    is: "Quilt is an app to make spending money with your friends easy. Create groups, share expenses, and manage transactions with your friends, eliminating the cumbersome process of tracking and settling individual debts using Venmo or Splitwise. \n\n &nbsp; \n\n Our goal is to eliminate the tension with finances and let friends focus on the experience. \n\n &nbsp; \n\n The platform introduces a shared card that connects to Apple Pay, just tap and a transaction is split between the group. You can simply change the breakdown or opt out of a transaction in the app. \n\n &nbsp; \n\n For our beta, we individually issue virtual American Express cards. We have received excellent feedback from this, but have found it hard to either 1) scale or 2) become FDIC-insured and issue our own Quilt cards. \n\n &nbsp; \n\n Email me if you'd like to try (or invest!)",
    looks: [
        '/images/quilt/example_1.png',
        '/images/quilt/example_2.png',
        '/images/quilt/example_3.png',
        '/images/quilt/example_4.png',
        '/images/quilt/example_5.png',
        '/images/quilt/example_6.png',
        '/images/quilt/example_7.png',
        '/images/quilt/example_8.png',
    ]
  },
  // {
  //   image: '/images/barbara/logo.png',
  //   title: 'Barbara.ai',
  //   subtitle: 'AI that works to understand you',
  //   is: "AI that works to understand you. \n\n &nbsp; \n\n Barbara.ai is inspired by my research at [Stanford Artificial Intelligence Lab NLP Group](https://nlp.stanford.edu/) answering why 80% of Americans are aware of ChatGPT, but only 20% have experimented with it. \n\n &nbsp; \n\n After hundreds of data points, common themes became clear. We found that it was because people felt disconnected from it for two reasons. 1) Asymmetrical language use, for example, many Oklahomans found GPT verbose and overwhelming to read. 2) Many responses were not relevant to their situation or real-time information, for example inquiring about a visa application. \n\n &nbsp; \n\n This project implements a simple onboarding section that will collect information about a user's background and preferences (and optionally connect to their Google account to have writing examples and more context). By integrating personal data, Barbara.ai offers an AI-assistant experience that is enjoyable for people who have been excluded from current optimization techniques. \n\n &nbsp; \n\n Coming soon to TestFlight, onboarding Oklahomans. The only screenshot attached is the homepage, more soon!",
  //   looks: [
  //     '/images/barbara/example_1.png'
  //   ]
  // },

];

export const collaborations = [
    {
        image: '/images/propaganda/logo.png',
        title: 'Protecting against Propaganda',
        subtitle: 'A chrome extension to detect potential misinformation in media',
        is: "Protecting against Propaganda is a research project with [Stanford Behavioral Design Labs](https://behaviordesign.stanford.edu/) and [Robb Willer](https://sociology.stanford.edu/people/robb-willer), soon a Chrome extension. \n\n &nbsp; \n\n By analyzing content for logical fallacies and deceptive rhetoric, the tool encourages critical engagement with information, fostering a more discerning and informed approach to consuming media. \n\n &nbsp; \n\n I designed the Chrome extension using React and helped tailor the model to recognize patterns indicative of misinformation, focusing on structural and syntactic cues rather than subjective judgments. \n\n &nbsp; \n\n Our preliminary findings showed that users became more critical readers, though the tool's impact on misinformation spread remains under study before being released. \n\n &nbsp; \n\n Paper and chrome extension releasing soon!",
        looks: [
            '/images/propaganda/example_1.png',
            '/images/propaganda/example_2.png',
            '/images/propaganda/example_3.png',
            '/images/propaganda/example_4.png',
            '/images/propaganda/example_5.png',
        ]
      },
      {
        image: '/images/immigration/logo.png',
        title: 'ImmigrationAI',
        subtitle: 'The turbotax of the USCIS immigration process',
        is: "the turbotax of immigration. \n\n &nbsp; \n\n At a small 'legal futurists' team at Filevine, we simplified the complex and often daunting process of navigating immigration paperwork. \n\n &nbsp; \n\n Right now, you have to identify what forms apply to you, print them, and know how to answer the questions. We solve all of that. \n\n &nbsp; \n\n Functioning like a digital guide, ImmigrationAI walks users through the necessary forms and questions, providing clear, AI-generated summaries to demystify legal jargon and make the process more accessible. I designed the user experience in React, created the form flow, and created the OAuth service to connect with Filevine using Passport. \n\n &nbsp; \n\n Check it out here! [https://www.filevine.com/platform/immigrationai/]",
        looks: [
            '/images/immigration/example_1.png',
            '/images/immigration/example_2.png',
            '/images/immigration/example_3.png',
        ]
      },
      {
        image: '/images/lifting/logo.png',
        title: 'Lifting the Bar',
        subtitle: 'A psychological intervention to reduce recitivsm to juvenile detention', 
        is: "an intervention to reduce recidivism among juveniles through a tech-driven psychological intervention by [Greg Walton](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4981081/). \n\n &nbsp; \n\n Right now, a child that goes to juvenile detention has an 80% likelihood of returning (or going to jail). \n\n &nbsp; \n\n We found that writing a letter to school staff decreases recidivism to about 20%. However, we found that some students were not participating at a desired level which undermines the goal of the study. \n\n &nbsp; \n\n So, I got the chance to enhance the user interface using JavaScript within the Qualtrics platform. I took from principles in Greg Walton's own research. This redesign led to a 10x increase in response length and a 20% improvement in Qualtrics-measured response quality, significantly enhancing the intervention's effectiveness and the overall user experience. \n\n &nbsp; \n\n Check out the intervention here! [https://ltbdraft.sites.stanford.edu/]",
        looks: [
            '/images/lifting/example_1.png',
            '/images/lifting/example_2.png',
            '/images/lifting/example_3.png',
        ]
      },
      {
        image: '/images/candid/logo.png',
        title: 'Candid',
        subtitle: 'A video journaling social app',
        is: "social video journaling that uses AI to summarize and conduct sentiment analysis. \n\n &nbsp; \n\n With this platform, users reflect more and perhaps notice patterns they never would have otherwise. Additionally, with a traditional journal or photo library, it is hard to look back on each individual memory. \n\n &nbsp; \n\n At Candid, I designed the page with React and leveraged Whisper and GPT to create bullet point summaries with different levels of granularity - pinch to get a day, week, month, or year lens of your life! \n\n &nbsp; \n\n This feature helps user create a cohesive narrative of their life, rather than disconnected (or forgotten) stories. \n\n &nbsp; \n\n Check it out here! [https://apps.apple.com/us/app/candid-rediscover-social/id6447771018]",
        looks: [
            '/images/candid/example_1.png',
            '/images/candid/example_2.png',
            '/images/candid/example_3.png',
            '/images/candid/example_4.png',
        ]
      },
    ];
