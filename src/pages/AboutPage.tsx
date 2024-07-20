
import Typography from '@mui/material/Typography';
import {
    OuterContainer,
    StorysContainer,
    StoryContainer,
    InfoContainer,
    Title,
} from '../styles/AboutStyles';

const stories = [
    {
        title: 'My Journey of Passion, Growth, and Ambition',
        text: `Hey there! I'm Alemayehu Mekonen, a creative and multi-talented professional hailing from Adama, Ethiopia. Today, I want to take you on a journey, to share my story, my dreams, and what drives me to pursue excellence in various domains. So, let's dive in!`,
    },
    {
        title: 'Childhood and Love for Learning',
        text: `As a young child, I discovered my insatiable curiosity for the world around me. Even at the age of three, I was eager to explore, learn, and express myself. My passion for knowledge led me to excel academically, and by the time I reached school, I was already writing and speaking foreign languages fluently. It was clear to me that my thirst for knowledge would shape my future.`,
    },
    {
        title: 'Embracing My Many Passions',
        text: `Growing up, I realized that my interests spanned across various fields. From web development and computer programming to photography, driving, mathematics, and IT, I found joy in every endeavor. I embraced these passions wholeheartedly, honing my skills and constantly seeking new challenges.`,
    },
    {
        title: 'Unleashing Creativity through Web Development',
        text: `Web development became my canvas, where I could unleash my creativity and technical expertise simultaneously. Through HTML, CSS, JavaScript, React, and Node.js, I crafted dynamic and responsive web applications that provided seamless user experiences. Attention to detail and commitment to high standards have always been my driving force.`,
    },
    {
        title: 'Capturing Moments through the Lens',
        text: `Beyond the digital realm, I found solace behind the lens of a camera. Photography became my creative outlet, allowing me to capture the beauty of landscapes, the essence of people, and the energy of events. Armed with professional cameras and editing software, I strive to produce captivating and visually stunning photographs.`,
    },
    {
        title: 'Nurturing Minds through Mathematics',
        text: `Mathematics, with its elegance and problem-solving potential, captivated me from an early age. Sharing this passion, I devoted my time to tutoring others in mathematics, guiding students to understand and excel in this beautiful subject. Explaining complex concepts in a clear and concise manner brings me immense satisfaction.`,
    },
    {
        title: 'IT Wizardry and Troubleshooting',
        text: `As an IT technician, I've delved into the intricacies of hardware and software, resolving issues, setting up networks, and providing technical support. My problem-solving and analytical skills shine in this domain, ensuring smooth operations in the IT environment.`,
    },
    {
        title: 'Driving Towards Excellence',
        text: `Throughout my journey, I've been committed to continuous learning and personal growth. Attending conferences, staying up-to-date with the latest trends, and actively engaging in online communities have become an integral part of my development. Additionally, I find immense fulfillment in volunteering my time and skills to assist non-profit organizations in their web development needs, making a positive impact on the world.`,
    },
    {
        title: 'Continuous Growth and Giving Back',
        text: `With a clean driving record and excellent skills, I've navigated the roads with utmost precision and safety. From cars to trucks and vans, I've handled various vehicles, always ensuring the well-being of passengers and adhering to traffic laws. Each journey is an opportunity to showcase my dedication and professionalism.`,
    },
    {
        text: `So, that's a glimpse into who I am and the diverse paths I've embarked upon. I am Alemayehu Mekonen, a passionate individual with a hunger for knowledge and a drive for excellence. With each endeavor, I strive to leave a lasting mark, pushing boundaries, and embracing the unknown.`,
    },
];

const AboutPage = () => (
    <StorysContainer id="about" >
        <OuterContainer>

            {stories.map((story, index) => (
                <StoryContainer key={index} isOdd={index % 2 !== 0}>
                    <InfoContainer>
                        {index !== stories.length - 1 ? (
                            <Title>{story.title}</Title>
                        ) : (
                            <Typography variant="h3" gutterBottom>
                                {story.title}
                            </Typography>
                        )}
                        <Typography variant="body1">{story.text}</Typography>
                    </InfoContainer>
                    {index !== stories.length - 1}
                </StoryContainer>
            ))}
        </OuterContainer>
  </StorysContainer >
);

export default AboutPage;
