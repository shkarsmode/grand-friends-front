import { ILandingInfo, LandingBlocks, Reasons } from "../../app/shared";

export const landingInfo: ILandingInfo = {
    home: [
        {
            tag: LandingBlocks.MainBanner,
            title: "<span class='marked'>Weaving Stories</span> Together to Create the <span class='marked'>Social Fabric</span> of Our Lives",
            img: 'main-banner.webp',
        },
        {
            tag: LandingBlocks.AdditionalBanner,
            title: "Where <span class='marked'>Every Story</span> Matters",
            description:
                "GrandFriends is a groundbreaking platform born from a simple, yet profound belief: every life is a tapestry of stories waiting to be told. In an age where digital connections often overshadow personal ones, we're on a mission to reverse the tide. <br /><br />GrandFriends bridges generations, turning moments into memories and wisdom into shared treasures.",
            bgImg: 'bg-banner-1.webp',
        },
        {
            tag: LandingBlocks.InfoBlock,
            title: "Weaving <span class='marked'>Connections</span> Across Generations",
            description:
                "At the core of GrandFriends is a vision where every person's journey is honored and preserved. From the laughter of youth to the reflections of age, we believe in capturing the essence of life's stories. <br /><br />Our mission extends beyond mere conversation; it's about building a repository of human experience, the largest collection of personal biographies, told in the words of those who lived them. Because a life lived is indeed a million stories waiting to be embraced.",
            img: 'info-group-1.webp',
            isImgRight: true,
            showMoreLink: '/about'
        },
        {
            tag: LandingBlocks.InfoBlock,
            title: "<span class='marked'>Artificial Intelligence</span> Bridging Generations",
            description:
                'At GrandFriends, we harness smart technology to seamlessly connect generations. Our AI-driven platform prompts deeper, more meaningful interactions, transforming simple conversations into rich, shared stories. <br /><br />This approach ensures technology acts as a bridge, not a barrier, creating a space where every generation can find common ground and weave a collective narrative.',
            img: 'info-group-2.webp',
            isImgRight: false,
        },
        {
            tag: LandingBlocks.InfoBlock,
            title: "For the <span class='marked'>Community</span>",
            description:
                "Our platform stands as a beacon for communities striving to weave tighter bonds of understanding and respect. <br /><br />By inviting seniors, cultural centers, and city organizations to join, we foster an environment where every elder's story is a lesson, and every young listener, a keeper of legacy. GrandFriends revitalizes the social fabric, one story at a time.",
            img: 'info-group-3.webp',
            isImgRight: true,
            showMoreLink: '/community'
        },
        {
            tag: LandingBlocks.InfoBlock,
            title: "For <span class='marked'>Schools</span>",
            description:
                'GrandFriends offers a program emphasizing empathy, listening, and engagement, going beyond traditional academics. It nurtures social skills alongside education, preparing students for positive societal contributions. <br /><br />Schools are invited to join, enhancing their educational offerings.',
            img: 'info-group-4.webp',
            isImgRight: false,
            isAdditionalPadding: true,
            showMoreLink: '/schools'
        },
        {
            tag: LandingBlocks.AdsBlock,
            title: 'Join Us in this Journey',
            description:
                "Whether you're an individual eager to share your story, a school looking to broaden your students' horizons, or a community center aiming to bridge generational gaps, GrandFriends welcomes you. <br /><br /> Together, let's turn every life into a legacy, ensuring that no story goes untold, and no voice, unheard. <br /><br /> <strong>Because Every Story Matters.</strong>",
            img: 'phone-order.png',
            bgImg: 'bg-ads-2.webp',
            isAdditionalPadding: true,
            formType: Reasons.GeneralInquiry
        },
    ],
    about: [
        {
            tag: LandingBlocks.Banner,
            title: "The GrandFriends <span class='marked'>Story</span>",
            img: 'about-us-banner.webp',
        },
        {
            tag: LandingBlocks.AdditionalBanner,
            title: "<span class='marked'>The Genesis</span> of GrandFriends",
            description:
                'Our founding principle was simple yet profound: to ensure that no story, no matter how seemingly ordinary, goes untold. <br /><br />We recognized the power of narrative in bridging generations, cultures, and distances, fostering a world where every life is acknowledged, celebrated, and learned from.',
            bgImg: 'additional-banner-1.webp',
        },
        {
            tag: LandingBlocks.InfoBlock,
            title: "<span class='marked'>Our Mission</span>",
            description:
                "At the heart of GrandFriends is the mission to weave the world's largest tapestry of memorable moments. We believe in the uniqueness and value of every individual's journey.<br /><br />Our platform serves as a global stage for personal biographies, allowing everyone — from the young student in a bustling city to the elder in a quiet village — to document, share, and preserve their life stories. It's more than a collection; it's a celebration of humanity in all its diversity.",
            img: 'about-info-group-1.webp',
            isImgRight: true,
        },
        {
            tag: LandingBlocks.InfoBlock,
            title: "<span class='marked'>Innovation </span> Through Artificial Intelligence ",
            description:
                'Understanding that meaningful connections are fostered through thoughtful dialogue, GrandFriends harnesses advanced AI to enrich the storytelling experience. <br /> <br />Our technology thoughtfully analyzes previous conversations, using insights to nudge questions and prompts that delve deeper, encouraging a rich exchange of experiences and wisdom. This AI-driven approach ensures that each interaction is not just a conversation, but a journey of discovery and understanding.',
            img: 'about-info-group-2.webp',
            isImgRight: false,
        },
        {
            tag: LandingBlocks.InfoBlock,
            title: "For <span class='marked'>A Vision</span> for Every Story",
            description:
                "Our vision extends beyond digital interaction; it's about creating a legacy. GrandFriends aspires for every human to have their own personal biography — living life while capturing the essence of their existence. <br /><br />From laughter - filled moments to challenges overcome, we champion the belief that every story matters and every story is special.",
            img: 'about-info-group-3.webp',
            isImgRight: true,
        },
        {
            tag: LandingBlocks.InfoBlock,
            title: "The World's <span class='marked'> Repository of Life</span> Stories",
            description:
                "Imagine a repository where millions of stories from across the globe are preserved in their own words. That's the future GrandFriends is building. <br />A future where the tapestry of human experience is accessible to all, offering endless lessons, inspirations, and connections. It's a bold ambition: to host the world's largest collection of personal stories, each a testament to a life lived and the million stories it encompasses.",
            img: 'about-info-group-4.webp',
            isImgRight: false,
            isAdditionalPadding: true,
        },
        {
            tag: LandingBlocks.AdsBlock,
            title: 'Join Us in this Journey',
            description:
                "Whether you're an individual eager to share your story, a school looking to broaden your students' horizons, or a community center aiming to bridge generational gaps, GrandFriends welcomes you. <br> <br> Together, let's turn every life into a legacy, ensuring that no story goes untold, and no voice, unheard. <br> <br> <b>Because Every Story Matters.</b> ",
            img: 'phone-order.png',
            bgImg: 'bg-ads-2.webp',
            isAdditionalPadding: true,
            formType: Reasons.GeneralInquiry
        },
    ],
    community: [
        {
            tag: LandingBlocks.Banner,
            title: "Communities weave our <span class='marked'> <br> Social Fabric</span>",
            img: 'community-banner.webp',
        },
        {
            tag: LandingBlocks.AdditionalBanner,
            title: "Bridging Generations, Building <span class='marked'>Community</span>",
            description:
                'GrandFriends is a vibrant initiative that transcends traditional boundaries to bring together individuals from all walks of life.<br /><br />By leveraging the power of storytelling and genuine connections, we aim to fortify the bonds within our communities, making them more cohesive, supportive, and vibrant.',
            bgImg: 'community-bg.webp',
        },
        {
            tag: LandingBlocks.InfoBlock,
            title: "<span class='marked'>Community</span> Participation",
            description:
                'Our platform invites senior centers, cultural centers, city organizations, and community members to play an integral role in this transformative journey. <br /><br />Through GrandFriends, we celebrate diversity, share wisdom across generations, and foster a sense of unity and mutual respect.',
            img: 'com-info-group-1.webp',
            isImgRight: true,
        },
        {
            tag: LandingBlocks.InfoBlock,
            title: "<span class='marked'>Always</span> Available",
            description:
                'With GrandFriends accessible on both mobile and web browsers, geographical and physical barriers dissolve.<br /><br />Seniors can share their life stories with youth from their community or from miles away, making every interaction a step towards a more connected and empathetic world.',
            img: 'com-info-group-2.webp',
            isImgRight: false,
        },
        {
            tag: LandingBlocks.InfoBlock,
            title: "<span class='marked'>Inclusive</span> Connections",
            description:
                'GrandFriends is dedicated to inclusivity, allowing individuals from various parts of the community to engage, whether they’re from senior living facilities looking for companionship or cultural centers aiming to preserve and share heritage stories. <br /><br />It’s about creating a tapestry of life experiences that enriches all participants.',
            img: 'com-info-group-3.webp',
            isImgRight: true,
            isAdditionalPadding: true,
        },
        {
            tag: LandingBlocks.HowItWorksBlock,
            title: 'How It Works',
            blocks: [
                {
                    img: 'house.webp',
                    title: 'Encouraging Participation',
                    description:
                        'Community centers can introduce GrandFriends to their members, facilitating a space where seniors feel valued and heard.',
                },
                {
                    img: 'house-2.webp',
                    title: 'Sharing Wisdom',
                    description:
                        'Through the platform, elders can impart their c, traditions, and insights, contributing to a living library of human history.',
                },
            ],
        },
        {
            tag: LandingBlocks.InfoBlock,
            title: "The GrandFriends <span class='marked'>Impact</span>",
            description:
                '<ul><li><span>Fostering Connections:</span> By engaging with students and young individuals, seniors can form meaningful relationships that affirm their role and significance in society. </li> <li><span>Cultural Preservation: </span> GrandFriends acts as a conduit for cultural exchange, ensuring that invaluable traditions and stories are preserved and celebrated across generations.</li></ul>',
            img: 'com-info-group-4.webp',
            isImgRight: false,
        },
        {
            tag: LandingBlocks.InfoBlock,
            title: "<span class='marked'>A Legacy</span> of Listening and Learning",
            description:
                'GrandFriends champions the timeless tradition of storytelling, where every narrative shared is a thread in the fabric of our collective history. <br /><br />It’s an invitation to listen, learn, and leave a legacy of knowledge and compassion for future generations.',
            img: 'com-info-group-5.webp',
            isImgRight: true,
        },
        {
            tag: LandingBlocks.InfoBlock,
            title: "<span class='marked'>Enhancing</span> Community Well-Being",
            description:
                '<ul><li><span>Combating Isolation:</span> Our initiative provides seniors with a sense of purpose and belonging, significantly reducing feelings of loneliness.</li> <li><span>Promoting Cultural Richness: </span> By facilitating the sharing of diverse life stories, GrandFriends enriches the cultural understanding and cohesion within communities.</li></ul>',
            img: 'com-info-group-6.webp',
            isImgRight: false,
            isAdditionalPadding: true,
        },
        {
            tag: LandingBlocks.HowItWorksBlock,
            title: "Why <span class='marked'>GrandFriends</span> is Vital for Communities",
            blocks: [
                {
                    img: 'love-hands.webp',
                    title: 'Enriching Lives',
                    description:
                        'Through the exchange of stories and experiences, GrandFriends enriches lives, making communities more inclusive and supportive.',
                },
                {
                    img: 'brain.webp',
                    title: 'Empowering Seniors',
                    description:
                        'The platform recognizes the invaluable contribution of seniors, empowering them to share their wisdom and perspectives with younger generations.',
                },
                {
                    img: 'hands.webp',
                    title: 'Strengthening Connections',
                    description:
                        'GrandFriends fortifies the social fabric of our communities, fostering bonds that are essential for a harmonious and thriving society.',
                },
            ],
        },
        {
            tag: LandingBlocks.AdsBlock,
            title: 'Join Us in this Journey',
            description:
                 "Whether you're an individual eager to share your story, a school looking to broaden your students' horizons, or a community center aiming to bridge generational gaps, GrandFriends welcomes you. <br> <br> Together, let's turn every life into a legacy, ensuring that no story goes untold, and no voice, unheard. <br> <br> <b>Because Every Story Matters.</b> ",
            img: 'phone-order.png',
            bgImg: 'bg-ads-2.webp',
            isAdditionalPadding: true,
            formType: Reasons.CommunityEngagement
        },
    ],
    schools: [
        {
            tag: LandingBlocks.Banner,
            title: "<span class='marked'>Weaving Empathy</span> into Education",
            img: 'schools-banner.webp',
        },
        {
            tag: LandingBlocks.AdditionalBanner,
            title: "Fostering Generational <span class='marked'>Connections</span>",
            description:
                'At GrandFriends, we open the door to an enriching experience that transcends the traditional classroom setting. <br /><br /> Our initiative supports schools in fostering a culture where the art of storytelling and genuine connections between generations thrive.',
            bgImg: 'schools-bg.webp',
        },
        {
            tag: LandingBlocks.InfoBlock,
            title: "<span class='marked'>School</span> Participation",
            description:
                'Become a part of the GrandFriends journey, where schools play a supportive role in encouraging a community of sharing, learning, and mutual respect.  <br /><br /> Educators and students together partake in an enriching exchange of life\'s stories and wisdom.',
            img: 'school-info-group-1.webp',
            isImgRight: true,
        },
        {
            tag: LandingBlocks.InfoBlock,
            title: "<span class='marked'>Always</span> Available",
            description:
                'GrandFriends isn\'t confined to any single device or location. <br /><br /> Accessible through mobile and web browsers, our platform ensures that every student can invite a grandparent, neighbor, aunt, parent — anyone significant in their lives — to share stories, regardless of whether they\'re in the same home, down the street, or across the globe.',
            img: 'school-info-group-2.webp',
            isImgRight: false,
        },
        {
            tag: LandingBlocks.InfoBlock,
            title: "<span class='marked'>Generational</span> Bridges",
            description:
                'With GrandFriends, students have the freedom to connect with individuals from their personal circles or reach out to seniors seeking companionship in senior living facilities. <br /><br /> Our platform is designed to bridge distances and create heartfelt connections, fostering a sense of belonging and community.',
            img: 'school-info-group-3.webp',
            isImgRight: true,
            isAdditionalPadding: true,
        },
        {
            tag: LandingBlocks.HowItWorksBlock,
            title: 'How It Works',
            blocks: [
                {
                    img: 'comunity.webp',
                    title: 'Welcoming Involvement',
                    description:
                        'Schools facilitate the introduction of the GrandFriends platform, allowing students to connect with their wider community.',
                },
                {
                    img: 'contact.webp',
                    title: 'Interactive Storytelling',
                    description:
                        'Students reach out to engage with elders, inviting them to share their life experiences, creating a living library of personal histories.',
                },
            ],
        },
        {
            tag: LandingBlocks.InfoBlock,
            title: "The GrandFriends <span class='marked'>Experience</span>",
            description:
                '<ul><li><span>Collective Biographies:</span> Students embark on a quest akin to a friendly competition, gathering the rich narratives of those around them, enhancing their sense of empathy and community </li> <li><span>Mastering Dialogue: </span> GrandFriends guides young minds through the nuances of conversation — from asking insightful questions to developing the art of listening. </li></ul>',
            img: 'school-info-group-4.webp',
            isImgRight: false,
        },
        {
            tag: LandingBlocks.InfoBlock,
            title: "<span class='marked'> Impact </span> Beyond School Walls",
            description:
                '<ul><li><span>Community Engagement:</span> The program extends to visits at local senior centers, where students and seniors create new friendships, enriching both lives and learning through shared experiences. </li> <li><span> Social Enrichment: </span> These visits serve as a powerful antidote to isolation, knitting a fabric of companionship and mutual respect that reverberates through our communities. </li></ul>',
            img: 'school-info-group-5.webp',
            isImgRight: true,
        },
        {
            tag: LandingBlocks.InfoBlock,
            title: "<span class='marked'>A Modern Tribute to</span> Timeless Values",
            description:
                'GrandFriends is more than a platform; it\'s a modern-day salute to the times when listening and storytelling were at the heart of community and education.  <br /><br /> We\'re crafting a legacy with every shared tale.',
            img: 'school-info-group-6.webp',
            isImgRight: false,
        },
        {
            tag: LandingBlocks.InfoBlock,
            title: "Benefits of <span class='marked'>Intergenerational</span> Engagement",
            description:
                '<ul><li><span>Development of Empathy: </span> Engaging with the GrandFriends platform allows students to experience the profound benefits of intergenerational relationships, which studies have shown to improve emotional intelligence and social understanding* </li> <li><span> Cultural Appreciation: </span> Students gain access to a wealth of knowledge and life experiences, fostering a greater appreciation for history and diversity, with research indicating these interactions enhance cultural competence** </li></ul>',
            img: 'school-info-group-7.webp',
            isImgRight: true,
            isSources: true,
            isAdditionalPadding: true
        },
        {
            tag: LandingBlocks.HowItWorksBlock,
            title: "Why <span class='marked'>GrandFriends ?</span>",
            blocks: [
                {
                    img: 'heard.webp',
                    title: 'Character <br> Building',
                    description:
                        'Through the exchange of stories and experiences, GrandFriends enriches lives, making communities more inclusive and supportive.',
                },
                {
                    img: 'handshake.webp',
                    title: 'Life-Enhancing <br> Skills',
                    description:
                        'We provide real-world interactions that develop essential skills not typically acquired in a classroom setting.',
                },
                {
                    img: 'head-heart.webp',
                    title: 'Community <br> Building',
                    description:
                        'As a microcosm of society, schools benefit from GrandFriends by strengthening the societal fabric, paving the way for a more empathetic future.',
                },
            ],
        },
        {
            tag: LandingBlocks.AdsBlock,
            title: 'Join Us in this Journey',
            description:
                "Whether you're an individual eager to share your story, a school looking to broaden your students' horizons, or a community center aiming to bridge generational gaps, GrandFriends welcomes you. <br> <br> Together, let's turn every life into a legacy, ensuring that no story goes untold, and no voice, unheard. <br> <br> <b>Because Every Story Matters.</b> ",
            img: 'phone-order.png',
            bgImg: 'bg-ads-2.webp',
            isAdditionalPadding: true,
            formType: Reasons.SchoolEnrollment
        },
    ],
};