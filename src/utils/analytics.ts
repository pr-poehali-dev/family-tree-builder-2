// Типизация для Яндекс.Метрики
declare global {
  interface Window {
    ym?: (
      counterId: number,
      method: string,
      goalName?: string,
      params?: Record<string, any>
    ) => void;
  }
}

/**
 * Отправка цели в Яндекс.Метрику
 */
export const sendGoal = (goalName: string, params?: Record<string, any>) => {
  try {
    if (window.ym) {
      window.ym(101026698, 'reachGoal', goalName, params);
      console.log(`[Analytics] Goal sent: ${goalName}`, params);
    }
  } catch (error) {
    console.error('[Analytics] Error sending goal:', error);
  }
};

/**
 * Конверсионные цели
 */
export const Goals = {
  // Регистрация и авторизация
  REGISTRATION_START: 'registration_start',
  REGISTRATION_COMPLETE: 'registration_complete',
  LOGIN_SUCCESS: 'login_success',
  
  // Взаимодействие с деревом
  TREE_FIRST_SAVE: 'tree_first_save',
  PERSON_ADDED: 'person_added',
  TREE_EXPORTED: 'tree_exported',
  TREE_IMPORTED: 'tree_imported',
  
  // Тарифные планы
  PRICING_VIEWED: 'pricing_viewed',
  PLAN_SELECTED: 'plan_selected',
  
  // Оплата (для будущего использования)
  PAYMENT_START: 'payment_start',
  PAYMENT_SUCCESS: 'payment_success',
  
  // Прочее
  HELP_OPENED: 'help_opened',
  DASHBOARD_OPENED: 'dashboard_opened',
} as const;
