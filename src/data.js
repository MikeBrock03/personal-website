export const projects = [
  {
    image: '/images/punch/logo.png',
    title: 'Punch',
    subtitle: 'a platform to pipeline students to trade school',
    is: "a platform to pipeline students to high-paying trade work. Right now, students in Oklahoma are pipelined into college despite most Oklahoman college degrees not having a positive return on investment and there being a lack of trade workers. \n\n &nbsp; \n\n We provide schools in Oklahoma, Nebraska, and Idaho a way to easily start and manage their school's internship programs. Now, their transcripts reflect their verified 'work-based learning' hours so that they can move right into apprenticeship rather than wasting time in trade school. \n\n &nbsp; \n\n [Check out our website here!](https://punchdevelopers.com/)",
    looks: [
      '/images/punch/example_1.png',
      '/images/punch/example_2.png',
      '/images/punch/example_3.png',
      '/images/punch/example_4.jpeg',
      '/images/punch/example_5.jpeg',
    ],
    previews: [
      '/images/punch/preview_1.JPG',
      '/images/punch/preview_2.jpg',
    ],
    explanations: [
      'software can make a difference.',
      'bryce and i pitching to our first venture capital firm!',
    ],
    quotes: [
      '"why are our friends working at mechanic shops without getting credit for it?"',
      '"what if kids could skip trade school and jump right into apprenticeship?"',
    ],
  },
  {
    image: '/images/supahot/logo.png',
    title: 'SUPaHOT',
    subtitle: 'A secure, personalized AI healthcare assistant',
    is: "a secure, personalized AI healthcare assistant. \n\n &nbsp; \n\n Inspired by [LLMonFHIR by the Stanford Byers Center for Biodesign](https://github.com/StanfordBDHG/LLMonFHIR), which uses GPT-4. They recognized that using cloud AI providers is expensive and insecure. \n\n &nbsp; \n\n With my team in CS224N, we created a data pipeline to decrease the amount of tokens that were passed into our small model. We then iterated on a 7b LLaMA model pre-trained with medical data and finetuned on our pipeline tasks. This method achieved similar performance to gpt-3.5-turbo, our oracle. \n\n &nbsp; \n\n [Common phones today can run 7B parameter models](https://www.qualcomm.com/news/onq/2023/09/democratizing-on-device-generative-ai-with-sub-10-billion-parameter-models#:~:text=LLMs%20with%207%20billion%20parameters,cycles%20refresh%20the%20installed%20base). By processing health data locally, it ensures privacy while providing customized health advice. \n\n &nbsp; \n\n We are working to integrate with [Stanford Spezi](https://spezi.sites.stanford.edu/) and the Byers Center for Biodesign, [read our paper here](/supahot.pdf).",
    looks: [
      '/images/supahot/example_1.png',
      '/images/supahot/example_2.png',
    ],
    previews: [
      '/images/supahot/preview_1.jpg',
      '/images/supahot/preview_2.jpg',
    ],
    explanations: [
      'we worked until the wee hours of the night!',
      'biggest breakthroughs post hallway soccer.',
    ],
    quotes: [
      '"what if we could make healthcare chat assistants private and cheap?"',
      '"so that original research group named their project LLMonFIRE...can we call ours SUPaHOT?"',
    ],
  },
];

export const collaborations = [
  
  {
    image: '/images/immigration/logo.png',
    title: 'ImmigrationAI',
    subtitle: 'The turbotax of the USCIS immigration process',
    is: "the turbotax of immigration. \n\n &nbsp; \n\n At a small 'legal futurists' team at Filevine, we simplified the complex and often daunting process of navigating immigration paperwork. \n\n &nbsp; \n\n Right now, you have to identify what forms apply to you, print them, and know how to answer the questions. We solve all of that. \n\n &nbsp; \n\n Functioning like a digital guide, ImmigrationAI walks users through the necessary forms and questions, providing clear, AI-generated summaries to demystify legal jargon and make the process more accessible. I designed the user experience in React, created the form flow, and created the OAuth service to connect with Filevine using Passport. \n\n &nbsp; \n\n [Check it out here!](https://www.filevine.com/platform/immigrationai/)",
    looks: [
      '/images/immigration/example_1.png',
      '/images/immigration/example_2.png',
      '/images/immigration/example_3.png',
    ],
    previews: [
      '/images/immigration/preview_1.jpg',
      '/images/immigration/preview_2.jpg',
    ],
    explanations: [
      'i wanted to build something that could help people like my mom.',
      'i love salt lake city!',
    ],
    quotes: [
      '"how am i supposed to know which forms apply to me, know how to answer the questions, then print it out and mail it to the United States?"',
      '"immigrationai will save thousands of hours that will be given back to the labor force rather than waiting to join it!!"',
    ],
  },
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
    ],
    previews: [
      '/images/propaganda/preview_1.JPG',
      '/images/propaganda/preview_2.JPG',
    ],
    explanations: [
      'i have always been interested in government',
      'lake lagunita = favorite work spot',
    ],
    quotes: [
      '"my classmates at Stanford and my neighbors in Oklahoma see completely different realities. how can we create mutually beneficial political future?"',
      '"from working at the Oklahoma House of Representatives, i saw that transparency is discouraged."',
    ],
  },
  {
    image: '/images/lifting/logo.png',
    title: 'Lifting the Bar',
    subtitle: 'A psychological intervention to reduce recidivism to juvenile detention',
    is: "an intervention to reduce recidivism among juveniles through a tech-driven psychological intervention by [Greg Walton](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4981081/). \n\n &nbsp; \n\n Right now, a child that goes to juvenile detention has an 80% likelihood of returning (or going to jail). \n\n &nbsp; \n\n We found that writing a letter to school staff decreases recidivism to about 20%. However, we found that some students were not participating at a desired level which undermines the goal of the study. \n\n &nbsp; \n\n So, I got the chance to enhance the user interface using JavaScript within the Qualtrics platform. I took from principles in [Greg Walton's own research](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4981081/). This redesign led to a 10x increase in response length and a 20% improvement in Qualtrics-measured response quality, significantly enhancing the intervention's effectiveness and the overall user experience. \n\n &nbsp; \n\n [Check out the intervention here!](https://ltbdraft.sites.stanford.edu/)",
    looks: [
      '/images/lifting/example_1.png',
      '/images/lifting/example_2.png',
      '/images/lifting/example_3.png',
    ],
    previews: [
      '/images/lifting/preview_1.jpg',
      '/images/lifting/preview_2.jpg',
    ],
    explanations: [
      'colombia has cycles of crime starting from childhood.',
      'whiteboards are my best friend!',
    ],
    quotes: [
      '"80 percent of kids who go to juvenile detention go back. we need to stop this."',
      '"why does every psychological study look like it was made in the 90s?"',
    ],
  },
];

export const personalSection = {
  leftCol: {
    quote: "Hi, it's Michael!",
    image: '/images/michael/michael-1.jpg',
    explanation: 'i love the stanford farm!',
  },
  middleCol: {
    subtitle: "I'm an Oklahoman at Stanford, passionate about bringing the benefits of AI to all.",
    logo: '/images/michael/michael-2.jpg',
    explanation: 'big plans @ big sur with bryce',
  },
  rightCol: {
    image: '/images/michael/michael-3.jpg',
    explanation: 'camp cooking above all'
  },
};