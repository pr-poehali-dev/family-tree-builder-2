/**
 * Список email-адресов администраторов
 * Только эти пользователи имеют доступ к админ-панели
 */
export const ADMIN_EMAILS = [
  'nikitasadovsky@yandex.ru', // Главный администратор
  // Добавьте другие email администраторов здесь
];

/**
 * Проверка, является ли пользователь администратором
 */
export const isAdmin = (email: string | null): boolean => {
  if (!email) return false;
  return ADMIN_EMAILS.includes(email.toLowerCase());
};