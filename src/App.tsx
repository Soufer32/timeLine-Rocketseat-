import { Header } from './components/Header';
import { Sidebar } from "./components/Sidebar/index";
import { Post, PostProps } from './components/Post/Index';
import styles from "./App.module.css";
import './global.css';

interface Post extends PostProps {
  id: number;
}

export function App() {
    const posts:Post[] = [
    { 
      id: 1,
      author: {
        avatarUrl: 'https://github.com/diego3g.png', 
        name: 'Diego Fernandes', 
        role:'CTO @Rocketseat'
      },
      content: [
        { type: 'paragraph', content: 'Hello Guys',},
        { type: 'paragraph', content: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',},
        { type: 'link', content: 'diego.fernandes/CTO @Rocketseat'},
      ],
      publishedAt: new Date('2022-11-01 15:00:00'),
    },
    { 
      id: 2,
      author: {
        avatarUrl: 'https://github.com/soufer32.png', 
        name: 'Thiago Ferreira', 
        role:'React Developer'
      },
      content: [
        { type: 'paragraph', content: 'Hello Guys',},
        { type: 'paragraph', content: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',},
        { type: 'link', content: 'Soufer/frontend'},
      ],
      publishedAt: new Date('2022-12-15 15:30:00'),
    },
  ]

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  );
}


