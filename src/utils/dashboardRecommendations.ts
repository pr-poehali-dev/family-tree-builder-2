import { FamilyNode, Edge } from '@/components/TreeCanvas';

export interface Recommendation {
  title: string;
  description: string;
  icon: string;
  count: number;
}

export function getRecommendations(nodes: FamilyNode[], edges: Edge[]): Recommendation[] {
  const recommendations: Recommendation[] = [];

  const nodesWithoutParents = nodes.filter(node => {
    const hasParentEdges = edges.some(edge => edge.target === node.id && edge.type !== 'spouse');
    return !hasParentEdges && node.relation !== 'self';
  });

  if (nodesWithoutParents.length > 0) {
    recommendations.push({
      title: 'Добавьте родителей',
      description: `У ${nodesWithoutParents.length} ${getPluralForm(nodesWithoutParents.length, 'члена', 'членов', 'членов')} семьи не указаны родители`,
      icon: 'UserPlus',
      count: nodesWithoutParents.length
    });
  }

  const nodesWithoutPhotos = nodes.filter(node => !node.bio || !node.bio.includes('фото'));
  if (nodesWithoutPhotos.length > 0) {
    recommendations.push({
      title: 'Загрузите фотографии',
      description: `${nodesWithoutPhotos.length} ${getPluralForm(nodesWithoutPhotos.length, 'профиль', 'профиля', 'профилей')} без фотографий`,
      icon: 'Camera',
      count: nodesWithoutPhotos.length
    });
  }

  const nodesWithoutBirthDate = nodes.filter(node => !node.birthDate);
  if (nodesWithoutBirthDate.length > 0) {
    recommendations.push({
      title: 'Укажите даты',
      description: `Заполните даты рождения для ${nodesWithoutBirthDate.length} ${getPluralForm(nodesWithoutBirthDate.length, 'человека', 'человек', 'человек')}`,
      icon: 'Calendar',
      count: nodesWithoutBirthDate.length
    });
  }

  const nodesWithoutBio = nodes.filter(node => !node.bio || node.bio.length < 50);
  if (nodesWithoutBio.length > 0) {
    recommendations.push({
      title: 'Напишите истории',
      description: `${nodesWithoutBio.length} ${getPluralForm(nodesWithoutBio.length, 'профиль', 'профиля', 'профилей')} без биографии`,
      icon: 'BookOpen',
      count: nodesWithoutBio.length
    });
  }

  const nodesWithoutOccupation = nodes.filter(node => !node.occupation);
  if (nodesWithoutOccupation.length > 0) {
    recommendations.push({
      title: 'Укажите профессии',
      description: `У ${nodesWithoutOccupation.length} ${getPluralForm(nodesWithoutOccupation.length, 'человека', 'человек', 'человек')} не указана профессия`,
      icon: 'Briefcase',
      count: nodesWithoutOccupation.length
    });
  }

  const nodesWithoutPlace = nodes.filter(node => !node.birthPlace);
  if (nodesWithoutPlace.length > 0) {
    recommendations.push({
      title: 'Добавьте места рождения',
      description: `${nodesWithoutPlace.length} ${getPluralForm(nodesWithoutPlace.length, 'профиль', 'профиля', 'профилей')} без места рождения`,
      icon: 'MapPin',
      count: nodesWithoutPlace.length
    });
  }

  return recommendations.slice(0, 3);
}

function getPluralForm(count: number, one: string, few: string, many: string): string {
  const mod10 = count % 10;
  const mod100 = count % 100;

  if (mod10 === 1 && mod100 !== 11) {
    return one;
  }
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) {
    return few;
  }
  return many;
}
