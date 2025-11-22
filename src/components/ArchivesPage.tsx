import React from 'react';
import Icon from '@/components/ui/icon';

export default function ArchivesPage() {
  return (
    <div className="pt-24 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-foreground">Архивы России</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            База данных государственных и региональных архивов с полезной информацией для генеалогических исследований
          </p>
        </div>

        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Icon name="Search" className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
            <input
              type="text"
              placeholder="Поиск по названию или региону..."
              className="w-full pl-12 pr-4 py-4 rounded-2xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground"
            />
          </div>
        </div>

        <div className="flex gap-4 mb-12 overflow-x-auto pb-2">
          <button className="px-6 py-2 rounded-full bg-primary text-primary-foreground font-medium whitespace-nowrap">
            Все регионы
          </button>
          <button className="px-6 py-2 rounded-full bg-muted text-foreground hover:bg-muted/80 font-medium whitespace-nowrap">
            Москва
          </button>
          <button className="px-6 py-2 rounded-full bg-muted text-foreground hover:bg-muted/80 font-medium whitespace-nowrap">
            Санкт-Петербург
          </button>
          <button className="px-6 py-2 rounded-full bg-muted text-foreground hover:bg-muted/80 font-medium whitespace-nowrap">
            Центральная Россия
          </button>
          <button className="px-6 py-2 rounded-full bg-muted text-foreground hover:bg-muted/80 font-medium whitespace-nowrap">
            Сибирь
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-border">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shrink-0">
                <Icon name="Building2" size={28} className="text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2 text-foreground">РГИА (Российский государственный исторический архив)</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Крупнейший архив документов Российской империи XVIII - начала XX века. Метрические книги, ревизские сказки, формулярные списки.
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-full font-medium">Санкт-Петербург</span>
                  <span className="px-3 py-1 bg-green-50 text-green-700 text-xs rounded-full font-medium">XVIII-XX век</span>
                </div>
                <a href="http://rgia.su" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm font-medium flex items-center gap-1">
                  Перейти на сайт <Icon name="ExternalLink" size={14} />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-border">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shrink-0">
                <Icon name="Landmark" size={28} className="text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2 text-foreground">РГАДА (Российский государственный архив древних актов)</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Документы XI - начала XX века. Родословные книги, дворянские дела, церковные акты, переписные книги.
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="px-3 py-1 bg-red-50 text-red-700 text-xs rounded-full font-medium">Москва</span>
                  <span className="px-3 py-1 bg-amber-50 text-amber-700 text-xs rounded-full font-medium">XI-XX век</span>
                </div>
                <a href="http://rgada.info" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm font-medium flex items-center gap-1">
                  Перейти на сайт <Icon name="ExternalLink" size={14} />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-border">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shrink-0">
                <Icon name="FileText" size={28} className="text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2 text-foreground">ЦГАМ (Центральный государственный архив Москвы)</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Метрические книги московских церквей, документы загсов, домовые книги, адресные справочники.
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="px-3 py-1 bg-purple-50 text-purple-700 text-xs rounded-full font-medium">Москва</span>
                  <span className="px-3 py-1 bg-green-50 text-green-700 text-xs rounded-full font-medium">XIX-XX век</span>
                </div>
                <a href="https://cgamos.ru" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm font-medium flex items-center gap-1">
                  Перейти на сайт <Icon name="ExternalLink" size={14} />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-border">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center shrink-0">
                <Icon name="Ship" size={28} className="text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2 text-foreground">ЦГИА СПб (Центральный государственный исторический архив)</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Метрические книги Санкт-Петербурга и губернии, документы учебных заведений, формулярные списки чиновников.
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="px-3 py-1 bg-teal-50 text-teal-700 text-xs rounded-full font-medium">Санкт-Петербург</span>
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-full font-medium">XVIII-XX век</span>
                </div>
                <a href="https://spbarchives.ru" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm font-medium flex items-center gap-1">
                  Перейти на сайт <Icon name="ExternalLink" size={14} />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-border">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shrink-0">
                <Icon name="Users" size={28} className="text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2 text-foreground">Архивы регионов России</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Региональные архивы хранят местные метрические книги, загсы, документы предприятий и учреждений вашего региона.
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="px-3 py-1 bg-orange-50 text-orange-700 text-xs rounded-full font-medium">Все регионы</span>
                  <span className="px-3 py-1 bg-slate-50 text-slate-700 text-xs rounded-full font-medium">XIX-XXI век</span>
                </div>
                <a href="https://rusarchives.ru" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm font-medium flex items-center gap-1">
                  Список архивов <Icon name="ExternalLink" size={14} />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-border">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center shrink-0">
                <Icon name="Globe" size={28} className="text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2 text-foreground">Портал "Архивы России"</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Единый портал доступа к архивным документам. Поиск по базам данных, оцифрованные документы, онлайн-запросы.
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs rounded-full font-medium">Федеральный</span>
                  <span className="px-3 py-1 bg-green-50 text-green-700 text-xs rounded-full font-medium">Онлайн-доступ</span>
                </div>
                <a href="https://rusarchives.ru" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm font-medium flex items-center gap-1">
                  Перейти на портал <Icon name="ExternalLink" size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 border border-primary/20">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shrink-0">
              <Icon name="Info" size={24} className="text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Как работать с архивами</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Icon name="CheckCircle2" size={18} className="text-primary shrink-0 mt-0.5" />
                  <span>Определите, в каком регионе жили ваши предки и выберите соответствующий архив</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="CheckCircle2" size={18} className="text-primary shrink-0 mt-0.5" />
                  <span>Изучите справочники и описи фондов на сайте архива перед подачей запроса</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="CheckCircle2" size={18} className="text-primary shrink-0 mt-0.5" />
                  <span>Подайте письменный запрос с максимально точными данными (ФИО, даты, место)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="CheckCircle2" size={18} className="text-primary shrink-0 mt-0.5" />
                  <span>Срок ответа на запрос — обычно 30 дней, госпошлина зависит от типа документа</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
