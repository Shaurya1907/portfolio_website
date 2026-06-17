export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];


export const myProjects = [
  {
    title: 'Unreal Engine 5 C++ Third Person Shooter Game',
    desc: 'A third-person shooter prototype built with Unreal Engine 5 and C++, currently in active early-stage development. It implements core gameplay mechanics including smooth third-person character movement, dynamic camera control, precise aiming, and responsive shooting.',
    subdesc:
      'An in-progress UE5 third-person shooter project focused primarily on core C++ character movement, aiming, and shooting mechanics.',
    href: 'https://github.com/Shaurya1907/UE_5_ThirdPersonShooter',
    texture: '/textures/project/TPS1.mp4',
    logo: '/assets/Gun1.png',
    logoStyle: {
      backgroundColor: 'rgb(10, 11, 29)',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'C++',
        path: 'assets/cpp.png',
      },      
      {
        id: 2,
        name: 'Unreal Engine',
        path: '/assets/UnrealLogo.png',
      },
      {
        id: 3,
        name: 'Visual Studio',
        path: '/assets/visual-studio-icon.png',
      },
    ],
  },
  {
    title: 'Unreal Engine 5 C++ Tank Shooter Game',
    desc: 'Battle Blaster is a 3D tank combat game built with Unreal Engine 5 and C++. You pilot a tank through an open arena patrolled by AI-controlled enemy towers, each tracking your position and firing back. Survive by dodging incoming projectiles, positioning strategically, and aiming with precision.',
    subdesc:
      'Features modular, reusable components for health management, projectile physics, and enemy targeting systems. Includes full game state handling conditions driven through a custom GameMode.',
    href: 'https://github.com/Shaurya1907/UE_5TankShooter',
    texture: '/textures/project/TankDemo.mp4',
    logo: '/assets/Tank.png',
    logoStyle: {
      backgroundColor: '#011710',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'C++',
        path: 'assets/cpp.png',
      },      
      {
        id: 2,
        name: 'Unreal Engine',
        path: '/assets/UnrealLogo.png',
      },
      {
        id: 3,
        name: 'Visual Studio',
        path: '/assets/visual-studio-icon.png',
      },
    ],
  },
  {
    title: 'C/C++ OpenGL Rendering Engine',
    desc: 'A custom rendering engine built in C++ using OpenGL, implementing the complete graphics pipeline from vertex processing to fragment shading. It supports real-time rendering with advanced lighting techniques and dynamic shadow mapping, showcasing core concepts of modern graphics programming.',
    subdesc:
      'Implements Phong/Blinn-Phong lighting, multiple light sources, and shadow mapping, with a modular design for extending features like post-processing and HDR.',
    href: 'https://github.com/Shaurya1907/learn-OpenGL',
    texture: '/textures/project/Engine.mp4',
    logo: '/assets/Engine.png',
    logoStyle: {
      backgroundColor: '#051324',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'C++',
        path: 'assets/cpp.png',
      },      
      {
        id: 2,
        name: 'OpenGL',
        path: '/assets/OpenGL.png',
      },
      {
        id: 3,
        name: 'Visual Studio',
        path: '/assets/visual-studio-icon.png',
      },
    ],
  },
  {
    title: 'Flappy Bird Clone SFML in C++',
    desc: 'I developed a Flappy Bird–style game using SFML in C++, featuring smooth 2D rendering, real-time input handling, gravity-based physics, precise collision detection, scoring mechanics, and dynamically generated obstacles to create an engaging and challenging gameplay experience.',
    subdesc:
      'Designed using an efficient game loop, the project demonstrates object-oriented programming and ensures smooth performance with clean, maintainable code.',
    href: 'https://github.com/Shaurya1907/sfml-game-repo',
    texture: '/textures/project/flappyVideo.mp4',
    logo: '/assets/yellowbird-upflap.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'C++',
        path: '/assets/cpp.png'
      },
      {
        id: 2,
        name: 'SFML',
        path: '/assets/sfml.svg'
      },
      {
        id: 3,
        name: 'Visual Studio',
        path: '/assets/visual-studio-icon.png'
      }
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.04 : isMobile ? 0.06 : 0.1,
    deskPosition: isMobile ? [0.4, -7.0, 0.4] : [0.29, -7, 0],
    cubePosition: isSmall ? [-4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [5, 7, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    cppLogoScale: isSmall ? 0.005 : isMobile ? 0.006 : 0.01,
    cppLogoPosition: isSmall
      ? [3, 7, 0]
      : isMobile
      ? [0, 4, 0]
      : isTablet
      ? [0, 5, 0]
      : [-25, 9, 0],
  };
};

export const EducationalBackground = [
  {
    id: 1,
    name: 'Guru Gobind Singh Indraprastha University',
    pos: 'B.Tech (CSE)',
    duration: '2024 - Present',
    title: "I am pursuing a B.Tech in Computer Science from GGSIPU, where I am learning programming, data structures, and software development. I aim to use these skills to build a career in game development and create engaging gaming experiences.",
    icon: '/assets/GGSIPU_logo.png',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Sant Gyaneshwar Model School',
    pos: 'Student',
    duration: '2022 - 2024',
    title: "I studied PCM (Physics, Chemistry, Mathematics) in Class 11 & 12 from Sant Gyaneshwar Model School, where I built a strong base in science and problem-solving. I also developed logical thinking and analytical skills during this time.",
    icon: '/assets/GGSIPU_logo.png',
    animation: 'bow',
  },
  {
    id: 3,
    name: 'DAV Public School',
    pos: 'Student',
    duration: '2017 - 2022',
    title: "I completed my Class 6 to 10 from DAV Public School, where I built a strong academic foundation and developed key skills like discipline, teamwork, and problem-solving. This period played an important role in shaping my learning habits and overall personality.",
    icon: '/assets/GGSIPU_logo.png',
    animation: 'salute',
  },
];