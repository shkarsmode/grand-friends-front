import { ILandingInfo, LandingBlocks } from "../../app/shared";

export const landingInfo: ILandingInfo = {
	'home': [
		{
			tag: LandingBlocks.MainBanner,
			title: "<span class='marked'>Weaving Stories</span> Together to Create the <span class='marked'>Social Fabric</span> of Our Lives",
			img: 'main-banner.png',
		},
		{
			tag: LandingBlocks.AdditionalBanner,
			title: "Where <span class='marked'>Every Story</span> Matters",
			description: "GrandFriends is a groundbreaking platform born from a simple, yet profound belief: every life is a tapestry of stories waiting to be told. In an age where digital connections often overshadow personal ones, we're on a mission to reverse the tide. <br /><br />GrandFriends bridges generations, turning moments into memories and wisdom into shared treasures.",
			img: 'bg-banner-1.png'
		},
		{
			tag: LandingBlocks.InfoBlock,
			title: "Weaving <span class='marked'>Connections</span> Across Generations",
			description: "At the core of GrandFriends is a vision where every person's journey is honored and preserved. From the laughter of youth to the reflections of age, we believe in capturing the essence of life's stories. <br /><br />Our mission extends beyond mere conversation; it's about building a repository of human experience, the largest collection of personal biographies, told in the words of those who lived them. Because a life lived is indeed a million stories waiting to be embraced.",
			img: 'info-group-1.png',
			isImgRight: true
		},
		{
			tag: LandingBlocks.InfoBlock,
			title: "<span class='marked'>Artificial Intelligence</span> Bridging Generations",
			description: "At GrandFriends, we harness smart technology to seamlessly connect generations. Our AI-driven platform prompts deeper, more meaningful interactions, transforming simple conversations into rich, shared stories. <br /><br />This approach ensures technology acts as a bridge, not a barrier, creating a space where every generation can find common ground and weave a collective narrative.",
			img: 'info-group-2.png',
			isImgRight: false
		},
		{
			tag: LandingBlocks.InfoBlock,
			title: "For <span class='marked'>Schools</span>",
			description: "GrandFriends offers a program emphasizing empathy, listening, and engagement, going beyond traditional academics. It nurtures social skills alongside education, preparing students for positive societal contributions. <br /><br />Schools are invited to join, enhancing their educational offerings.",
			img: 'info-group-3.png',
			isImgRight: true,
			isAdditionalPadding: true
		},
		{
			tag: LandingBlocks.AdsBlock,
			title: "Join Us in this Journey",
			description: "Whether you're an individual eager to share your story, a school looking to broaden your students' horizons, or a community center aiming to bridge generational gaps, GrandFriends welcomes you. <br /><br /> Together, let's turn every life into a legacy, ensuring that no story goes untold, and no voice, unheard. <br /><br /> <strong>Because Every Story Matters.</strong>",
			img: 'phone.png',
			bgImg: 'bg-ads-1.png',
			isAdditionalPadding: true
		},
	]
};