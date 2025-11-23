import React from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface DemoPageProps {
  onClose: () => void;
}

interface Person {
  id: string;
  name: string;
  years: string;
  title: string;
  photo: string;
  spouse?: string;
  children?: string[];
  parents?: string[];
}

const romanovDynasty: Record<string, Person> = {
  'mikhail': {
    id: 'mikhail',
    name: 'Михаил I Фёдорович',
    years: '1596-1645',
    title: 'Царь всея Руси (1613-1645)',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Mikhail_I_of_Russia_%281596-1645%29.jpg/220px-Mikhail_I_of_Russia_%281596-1645%29.jpg',
    children: ['alexey']
  },
  'alexey': {
    id: 'alexey',
    name: 'Алексей Михайлович',
    years: '1629-1676',
    title: 'Царь всея Руси (1645-1676)',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Aleksey_Mikhailovich_of_Russia.jpg/220px-Aleksey_Mikhailovich_of_Russia.jpg',
    parents: ['mikhail'],
    children: ['fyodor', 'peter1']
  },
  'fyodor': {
    id: 'fyodor',
    name: 'Фёдор III Алексеевич',
    years: '1661-1682',
    title: 'Царь всея Руси (1676-1682)',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Fyodor_III_of_Russia_%28Dormition_Cathedral%29.jpg/220px-Fyodor_III_of_Russia_%28Dormition_Cathedral%29.jpg',
    parents: ['alexey']
  },
  'peter1': {
    id: 'peter1',
    name: 'Пётр I Великий',
    years: '1672-1725',
    title: 'Император Всероссийский (1721-1725)',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Peter_der-Grosse_1838.jpg/220px-Peter_der-Grosse_1838.jpg',
    parents: ['alexey'],
    children: ['anna', 'elizabeth']
  },
  'anna': {
    id: 'anna',
    name: 'Анна Петровна',
    years: '1708-1728',
    title: 'Цесаревна',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Anna_Petrovna_by_L.Caravaque_%281725%2C_Hermitage%29.jpg/220px-Anna_Petrovna_by_L.Caravaque_%281725%2C_Hermitage%29.jpg',
    parents: ['peter1'],
    children: ['peter3']
  },
  'elizabeth': {
    id: 'elizabeth',
    name: 'Елизавета Петровна',
    years: '1709-1762',
    title: 'Императрица (1741-1762)',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Elizabeth_of_Russia_by_Vigilius_Eriksen.jpg/220px-Elizabeth_of_Russia_by_Vigilius_Eriksen.jpg',
    parents: ['peter1']
  },
  'peter3': {
    id: 'peter3',
    name: 'Пётр III Фёдорович',
    years: '1728-1762',
    title: 'Император (1762)',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Peter_III_of_Russia_by_A.Antropov_%281762%2C_Tretyakov_gallery%29.jpg/220px-Peter_III_of_Russia_by_A.Antropov_%281762%2C_Tretyakov_gallery%29.jpg',
    parents: ['anna'],
    spouse: 'catherine2',
    children: ['paul1']
  },
  'catherine2': {
    id: 'catherine2',
    name: 'Екатерина II Великая',
    years: '1729-1796',
    title: 'Императрица (1762-1796)',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Catherine_II_by_F.Rokotov_after_Roslin_%281763%2C_Hermitage%29.jpg/220px-Catherine_II_by_F.Rokotov_after_Roslin_%281763%2C_Hermitage%29.jpg',
    spouse: 'peter3',
    children: ['paul1']
  },
  'paul1': {
    id: 'paul1',
    name: 'Павел I Петрович',
    years: '1754-1801',
    title: 'Император (1796-1801)',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Paul_I_of_Russia_by_S.Shchukin_%281797%2C_Pavlovsk%29.jpg/220px-Paul_I_of_Russia_by_S.Shchukin_%281797%2C_Pavlovsk%29.jpg',
    parents: ['peter3', 'catherine2'],
    children: ['alexander1', 'nicholas1']
  },
  'alexander1': {
    id: 'alexander1',
    name: 'Александр I Павлович',
    years: '1777-1825',
    title: 'Император (1801-1825)',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Alexander_I_of_Russia_by_G.Dawe_%281826%2C_Peterhof%29.jpg/220px-Alexander_I_of_Russia_by_G.Dawe_%281826%2C_Peterhof%29.jpg',
    parents: ['paul1']
  },
  'nicholas1': {
    id: 'nicholas1',
    name: 'Николай I Павлович',
    years: '1796-1855',
    title: 'Император (1825-1855)',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Franz_Kr%C3%BCger_-_Portrait_of_Emperor_Nicholas_I_-_WGA12289.jpg/220px-Franz_Kr%C3%BCger_-_Portrait_of_Emperor_Nicholas_I_-_WGA12289.jpg',
    parents: ['paul1'],
    children: ['alexander2']
  },
  'alexander2': {
    id: 'alexander2',
    name: 'Александр II Николаевич',
    years: '1818-1881',
    title: 'Император-Освободитель (1855-1881)',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Alexander_II_of_Russia_photo.jpg/220px-Alexander_II_of_Russia_photo.jpg',
    parents: ['nicholas1'],
    children: ['alexander3']
  },
  'alexander3': {
    id: 'alexander3',
    name: 'Александр III Александрович',
    years: '1845-1894',
    title: 'Император-Миротворец (1881-1894)',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Alexander_III_of_Russia.jpg/220px-Alexander_III_of_Russia.jpg',
    parents: ['alexander2'],
    children: ['nicholas2']
  },
  'nicholas2': {
    id: 'nicholas2',
    name: 'Николай II Александрович',
    years: '1868-1918',
    title: 'Последний Император (1894-1917)',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Tsar_Nicholas_II_-1898.jpg/220px-Tsar_Nicholas_II_-1898.jpg',
    parents: ['alexander3']
  }
};

export default function DemoPage({ onClose }: DemoPageProps) {
  const [selectedPerson, setSelectedPerson] = React.useState<Person | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-primary/5 to-background pt-20">
      <div className="min-h-screen pb-24">
        <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-lg z-50 border-b border-border/50 shadow-sm">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                onClick={onClose}
                className="border-primary/30 hover:border-primary"
              >
                <Icon name="ArrowLeft" size={20} className="mr-2" />
                Назад
              </Button>
              <div>
                <h1 className="text-xl font-bold text-foreground">Династия Романовых</h1>
                <p className="text-sm text-muted-foreground">Демонстрационный режим</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-blue-50 px-4 py-2 rounded-lg border border-blue-200">
              <Icon name="Eye" size={18} className="text-blue-600" />
              <span className="text-sm font-semibold text-blue-700">Режим просмотра</span>
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-6 pt-12">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <div className="px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full text-primary text-sm font-semibold border border-primary/20">
                <Icon name="Crown" size={14} className="inline mr-2" />
                1613-1917 • 304 года правления
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Генеалогическое древо династии Романовых
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Интерактивная демонстрация возможностей сервиса на примере царской династии
            </p>
          </div>

          <div className="space-y-16">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">I</span>
                </div>
                Первые Романовы (1613-1725)
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {['mikhail', 'alexey', 'fyodor', 'peter1'].map(personId => {
                  const person = romanovDynasty[personId];
                  return (
                    <Card
                      key={person.id}
                      className="p-6 hover:shadow-xl transition-all cursor-pointer hover:-translate-y-1 border-2"
                      onClick={() => setSelectedPerson(person)}
                    >
                      <div className="aspect-square w-full mb-4 rounded-xl overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5">
                        <img
                          src={person.photo}
                          alt={person.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h4 className="font-bold text-foreground mb-1">{person.name}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{person.years}</p>
                      <p className="text-xs text-primary font-semibold">{person.title}</p>
                    </Card>
                  );
                })}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">II</span>
                </div>
                Эпоха дворцовых переворотов (1725-1801)
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {['anna', 'elizabeth', 'peter3', 'catherine2', 'paul1'].map(personId => {
                  const person = romanovDynasty[personId];
                  return (
                    <Card
                      key={person.id}
                      className="p-6 hover:shadow-xl transition-all cursor-pointer hover:-translate-y-1 border-2"
                      onClick={() => setSelectedPerson(person)}
                    >
                      <div className="aspect-square w-full mb-4 rounded-xl overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5">
                        <img
                          src={person.photo}
                          alt={person.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h4 className="font-bold text-foreground mb-1">{person.name}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{person.years}</p>
                      <p className="text-xs text-primary font-semibold">{person.title}</p>
                    </Card>
                  );
                })}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">III</span>
                </div>
                Расцвет и закат империи (1801-1917)
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {['alexander1', 'nicholas1', 'alexander2', 'alexander3', 'nicholas2'].map(personId => {
                  const person = romanovDynasty[personId];
                  return (
                    <Card
                      key={person.id}
                      className="p-6 hover:shadow-xl transition-all cursor-pointer hover:-translate-y-1 border-2"
                      onClick={() => setSelectedPerson(person)}
                    >
                      <div className="aspect-square w-full mb-4 rounded-xl overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5">
                        <img
                          src={person.photo}
                          alt={person.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h4 className="font-bold text-foreground mb-1">{person.name}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{person.years}</p>
                      <p className="text-xs text-primary font-semibold">{person.title}</p>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mt-16 max-w-3xl mx-auto">
            <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/20">
              <div className="text-center">
                <Icon name="Sparkles" size={32} className="mx-auto mb-4 text-primary" />
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Создайте свою семейную историю
                </h3>
                <p className="text-muted-foreground mb-6">
                  Этот демонстрационный режим показывает возможности сервиса. Создайте свое древо с фотографиями, датами и историями вашей семьи.
                </p>
                <Button
                  onClick={onClose}
                  size="lg"
                  className="shadow-lg shadow-primary/30"
                >
                  <Icon name="TreePine" size={20} className="mr-2" />
                  Начать создавать древо
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {selectedPerson && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPerson(null)}
        >
          <Card
            className="max-w-2xl w-full p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPerson(null)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Icon name="X" size={24} />
            </button>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-48 aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5 flex-shrink-0">
                <img
                  src={selectedPerson.photo}
                  alt={selectedPerson.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1">
                <div className="mb-4">
                  <div className="inline-block px-3 py-1 bg-primary/10 rounded-full text-xs font-semibold text-primary mb-3">
                    <Icon name="Crown" size={12} className="inline mr-1" />
                    Династия Романовых
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {selectedPerson.name}
                  </h3>
                  <p className="text-muted-foreground mb-2">{selectedPerson.years}</p>
                  <p className="text-primary font-semibold">{selectedPerson.title}</p>
                </div>

                {selectedPerson.parents && selectedPerson.parents.length > 0 && (
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                      <Icon name="Users" size={16} />
                      Родители:
                    </p>
                    <div className="space-y-1">
                      {selectedPerson.parents.map(parentId => {
                        const parent = romanovDynasty[parentId];
                        return (
                          <button
                            key={parentId}
                            onClick={() => setSelectedPerson(parent)}
                            className="block text-sm text-primary hover:underline"
                          >
                            {parent.name}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {selectedPerson.spouse && (
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                      <Icon name="Heart" size={16} />
                      Супруг(а):
                    </p>
                    <button
                      onClick={() => setSelectedPerson(romanovDynasty[selectedPerson.spouse!])}
                      className="block text-sm text-primary hover:underline"
                    >
                      {romanovDynasty[selectedPerson.spouse].name}
                    </button>
                  </div>
                )}

                {selectedPerson.children && selectedPerson.children.length > 0 && (
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                      <Icon name="Baby" size={16} />
                      Дети:
                    </p>
                    <div className="space-y-1">
                      {selectedPerson.children.map(childId => {
                        const child = romanovDynasty[childId];
                        return (
                          <button
                            key={childId}
                            onClick={() => setSelectedPerson(child)}
                            className="block text-sm text-primary hover:underline"
                          >
                            {child.name}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}