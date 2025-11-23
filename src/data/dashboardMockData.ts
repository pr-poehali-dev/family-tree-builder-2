export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  progress: number;
  maxProgress: number;
  unlocked: boolean;
  reward: string;
}

export interface Stats {
  totalPeople: number;
  generations: number;
  photosAdded: number;
  storiesWritten: number;
  documentsUploaded: number;
  completionPercentage: number;
  weeklyPeopleChange?: number;
  weeklyPhotosChange?: number;
  weeklyStoriesChange?: number;
}

export interface RecentActivity {
  action: string;
  person: string;
  time: string;
  icon: string;
}

export const mockStats: Stats = {
  totalPeople: 47,
  generations: 5,
  photosAdded: 28,
  storiesWritten: 15,
  documentsUploaded: 8,
  completionPercentage: 64
};

export const mockAchievements: Achievement[] = [
  {
    id: 'first-person',
    title: 'Первый шаг',
    description: 'Добавьте первого человека в древо',
    icon: 'User',
    progress: 1,
    maxProgress: 1,
    unlocked: true,
    reward: '+50 XP'
  },
  {
    id: 'family-of-10',
    title: 'Большая семья',
    description: 'Добавьте 10 членов семьи',
    icon: 'Users',
    progress: 47,
    maxProgress: 10,
    unlocked: true,
    reward: '+100 XP'
  },
  {
    id: 'photographer',
    title: 'Фотограф',
    description: 'Загрузите 20 фотографий',
    icon: 'Camera',
    progress: 28,
    maxProgress: 20,
    unlocked: true,
    reward: '+150 XP'
  },
  {
    id: 'storyteller',
    title: 'Хранитель историй',
    description: 'Напишите 10 семейных историй',
    icon: 'BookOpen',
    progress: 15,
    maxProgress: 10,
    unlocked: true,
    reward: '+200 XP'
  },
  {
    id: 'archivist',
    title: 'Архивариус',
    description: 'Загрузите 15 документов',
    icon: 'FileText',
    progress: 8,
    maxProgress: 15,
    unlocked: false,
    reward: '+250 XP'
  },
  {
    id: 'century',
    title: 'Век истории',
    description: 'Охватите 100 лет семейной истории',
    icon: 'Calendar',
    progress: 87,
    maxProgress: 100,
    unlocked: false,
    reward: '+300 XP'
  },
  {
    id: 'dynasty',
    title: 'Династия',
    description: 'Заполните 7 поколений',
    icon: 'Crown',
    progress: 5,
    maxProgress: 7,
    unlocked: false,
    reward: '+500 XP'
  },
  {
    id: 'researcher',
    title: 'Исследователь',
    description: 'Добавьте информацию из архивов',
    icon: 'Search',
    progress: 3,
    maxProgress: 5,
    unlocked: false,
    reward: '+350 XP'
  }
];

export const mockRecentActivity: RecentActivity[] = [
  { action: 'Добавлен портрет', person: 'Мария Ивановна', time: '2 часа назад', icon: 'Camera' },
  { action: 'Написана история', person: 'Александр Петрович', time: '5 часов назад', icon: 'BookOpen' },
  { action: 'Добавлен член семьи', person: 'Елена Сергеевна', time: '1 день назад', icon: 'UserPlus' },
  { action: 'Загружен документ', person: 'Свидетельство о рождении', time: '2 дня назад', icon: 'FileText' }
];

export const mockLevelData = {
  level: 7,
  currentXP: 650,
  nextLevelXP: 1000
};