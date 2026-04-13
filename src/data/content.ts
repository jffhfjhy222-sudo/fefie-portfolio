export type Language = 'en' | 'zh';

export interface Content {
  nav: {
    home: string;
    about: string;
    portfolio: string;
    contact: string;
    cv: string;
  };
  home: {
    greeting: string;
    name: string;
    roles: string[];
  };
  about: {
    title: string;
    paragraphs: string[];
    goalsTitle: string;
    goals: string[];
    images: string[];
  };
  portfolio: {
    preProductionTitle: string;
    videoTitle: string;
    images: {
      url: string;
      title: string;
    }[];
    videos: {
      url: string;
      title: string;
      thumbnail?: string;
      type: 'local' | 'youtube';
    }[];
  };
  cv: {
    title: string;
    pdfUrl: string;
    downloadLabel: string;
  };
  contact: {
    title: string;
    email: string;
    linktreeLabel: string;
    linktreeUrl: string;
  };
}

export const content: Record<Language, Content> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      portfolio: 'Portfolio',
      contact: 'Contact',
      cv: 'CV',
    },
    home: {
      greeting: "Hello, I'm",
      name: 'FEFIE (She/Her)',
      roles: ['Animator', 'Character Designer', 'Director', 'Storyboard Artist'],
    },
    about: {
      title: "Hi, I'm FEFIE, from China.",
      paragraphs: [
        'I have explored 2D, 3D and stop-motion animation, with a strong preference for 2D.',
        'I have developed visual novel projects using Unity and also create short films.',
        'I am curious and motivated, constantly exploring new tools and creative fields.',
      ],
      goalsTitle: 'My career goal is to work in the 2D animation industry as:',
      goals: ['Director', 'Character Designer', 'Storyboard Artist'],
      images: ['/images/profile1.jpg', '/images/profile2.jpg'],
    },
    portfolio: {
      preProductionTitle: 'Pre-production',
      videoTitle: 'Video Projects',
      images: [
        { url: "/images/work1.jpg", title: "Work 1" },
        { url: "/images/work2.jpg", title: "Work 2" },
        { url: "/images/work3.jpg", title: "Work 3" },
        { url: "/images/work4.jpg", title: "Work 4" },
        { url: "/images/work5.jpg", title: "Work 5" },
        { url: "/images/work6.jpg", title: "Work 6" },
        { url: "/images/work7.jpg", title: "Work 7" },
        { url: "/images/work8.jpg", title: "Work 8" },
        { url: "/images/work9.jpg", title: "Work 9" },
        { url: "/images/work10.jpg", title: "Work 10" },
        { url: "/images/work11.jpg", title: "Work 11" },
        { url: "/images/work12.jpg", title: "Work 12" },
        { url: "/images/work13.jpg", title: "Work 13" },
        { url: "/images/work14.jpg", title: "Work 14" },
        { url: "/images/work15.jpg", title: "Work 15" }
      ],
      videos: [
        {
          url: "/videos/video1.mp4",
          title: "My Animation 1",
          type: "local"
        },
        {
          url: "/videos/video2.mp4",
          title: "My Animation 2",
          type: "local"
        },
        {
          url: "https://www.youtube.com/embed/30iDk879l9w",
          title: "Animation Project 1",
          type: "youtube"
        },
        {
          url: "https://www.youtube.com/embed/sgV0esi5Q70",
          title: "Animation Project 2",
          type: "youtube"
        },
        {
          url: "https://www.youtube.com/embed/_N8w8x6QxpQ",
          title: "Animation Project 3",
          type: "youtube"
        },
        {
          url: "https://www.youtube.com/embed/2Zgkj6btReg",
          title: "Animation Project 4",
          type: "youtube"
        }
      ],
    },
    cv: {
      title: 'Curriculum Vitae',
      pdfUrl: '/cv.pdf',
      downloadLabel: 'Download CV',
    },
    contact: {
      title: 'Get in Touch',
      email: '13641274526@163.com',
      linktreeLabel: 'Visit my Linktree',
      linktreeUrl: 'https://linktr.ee/jffhfjhy222',
    },
  },
  zh: {
    nav: {
      home: '首页',
      about: '关于',
      portfolio: '作品集',
      contact: '联系方式',
      cv: '简历',
    },
    home: {
      greeting: '你好，我是',
      name: '狒狒',
      roles: ['动画师', '角色设计师', '导演', '分镜师'],
    },
    about: {
      title: '嗨，我是狒狒，来自中国。',
      paragraphs: [
        '由于我的学习经历，我接触过二维动画、三维动画和定格动画，其中更偏好二维动画。',
        '我也使用 Unity 开发过视觉小说项目，并拍摄一些短片。',
        '我是一个具有强烈求知欲和上进心的人，目前仍在探索新的领域和软件。',
      ],
      goalsTitle: '未来希望进入二维动画行业，目标方向包括：',
      goals: ['导演', '角色设计师', '分镜师 (Storyboard Artist)'],
      images: ['/images/profile1.jpg', '/images/profile2.jpg'],
    },
    portfolio: {
      preProductionTitle: '前期设计',
      videoTitle: '视频项目',
      images: [
        { url: "/images/work1.jpg", title: "作品 1" },
        { url: "/images/work2.jpg", title: "作品 2" },
        { url: "/images/work3.jpg", title: "作品 3" },
        { url: "/images/work4.jpg", title: "作品 4" },
        { url: "/images/work5.jpg", title: "作品 5" },
        { url: "/images/work6.jpg", title: "作品 6" },
        { url: "/images/work7.jpg", title: "作品 7" },
        { url: "/images/work8.jpg", title: "作品 8" },
        { url: "/images/work9.jpg", title: "作品 9" },
        { url: "/images/work10.jpg", title: "作品 10" },
        { url: "/images/work11.jpg", title: "作品 11" },
        { url: "/images/work12.jpg", title: "作品 12" },
        { url: "/images/work13.jpg", title: "作品 13" },
        { url: "/images/work14.jpg", title: "作品 14" },
        { url: "/images/work15.jpg", title: "作品 15" }
      ],
      videos: [
        {
          url: "/videos/video1.mp4",
          title: "我的动画 1",
          type: "local"
        },
        {
          url: "/videos/video2.mp4",
          title: "我的动画 2",
          type: "local"
        },
        {
          url: "https://www.youtube.com/embed/30iDk879l9w",
          title: "动画项目 1",
          type: "youtube"
        },
        {
          url: "https://www.youtube.com/embed/sgV0esi5Q70",
          title: "动画项目 2",
          type: "youtube"
        },
        {
          url: "https://www.youtube.com/embed/_N8w8x6QxpQ",
          title: "动画项目 3",
          type: "youtube"
        },
        {
          url: "https://www.youtube.com/embed/2Zgkj6btReg",
          title: "动画项目 4",
          type: "youtube"
        }
      ],
    },
    cv: {
      title: '个人简历',
      pdfUrl: '/cv.pdf',
      downloadLabel: '下载简历',
    },
    contact: {
      title: '联系我',
      email: '13641274526@163.com',
      linktreeLabel: '访问我的 Linktree',
      linktreeUrl: 'https://linktr.ee/jffhfjhy222',
    },
  },
};
