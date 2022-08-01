import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Sidebar from './Sidebar';
import Footer from './Footer';

const sections = [
  { title: 'France', url: 'France' },
  { title: 'Spain', url: 'Spain' },
  { title: 'United States', url: '#' },
  { title: 'China', url: 'China' },
  { title: 'Italy', url: 'Italy' },
  { title: 'Turkey', url: 'Turkey' },
  { title: 'Mexico', url: 'Mexico' },
  { title: 'Thailand', url: 'Thailand' },
  { title: 'Germany', url: 'Germany' },
  { title: 'United Kindgom', url: 'United Kingdom' },
];

const mainFeaturedPost = {
  title: "What countries are on your travel list? ",
  description:
    "Join other tourists in the great debate: Is your country the best place to travel to? ",
  image: 'https://source.unsplash.com/random',
  imageText: 'main image description',
  linkText: 'Join the debate here!',
};

const featuredPosts = [
  {
    title: 'Most Interesting Comment',
    date: 'May 5, 2022',
    description:
      'France is the most popular country because its well organized to receive guests. They have excellent roads and transportation like trains, roads and aircrafts, and France is well-positioned to receive guests from all over the world,”- Annabeth Chase, San Franciso, California.',
    image: 'https://source.unsplash.com/random',
    imageLabel: 'Image Text',
  },
  {
    title: 'Most Voted Comment',
    date: 'March 14, 2020',
    description:
      "I don't know why anyone wants to travel right now. We're in a pandemic.- Karen, United States.",
    image: 'https://source.unsplash.com/random',
    imageLabel: 'Image Text',
  },
  
];

// const posts = [post1, post2, post3];

const sidebar = {
  title: 'About',
  description:
    "I'm Nina-Simone Pettis, and this is my new blog. I plan to travel the world and want to know where the best places are. Please leave a comment; it really helps me out. :).",
  archives: [
    { title: 'July 2022', url: '#' },
    { title: 'June 2022', url: '#' },
    { title: 'May 2022', url: '#' },
    { title: 'April 2022', url: '#' },
    { title: 'March 2022', url: '#' },
    { title: 'February 2022', url: '#' },
    { title: 'January 2022', url: '#' },
    { title: 'December 2021', url: '#' },
    { title: 'November 2021', url: '#' },
    { title: 'October 2021', url: '#' },
    { title: 'September 2021', url: '#' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

const theme = createTheme();

export default function Blog() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Best Countries to Travel To" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            {/* <Main title="From the firehose" posts={posts} /> */}
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer
        title="Footer"
        description="Don't forget to sign-up to my email list! I publish a blog every Wednesday!"
      />
    </ThemeProvider>
  );
}