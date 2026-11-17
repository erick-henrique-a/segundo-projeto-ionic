export interface Registration {
  name: string;
  email: string;
  phone: string;
}

const STORAGE_KEY = 'registrations';

function isRegistration(value: unknown): value is Registration {
  if (typeof value !== 'object' || value === null) {
    return false;
  }

  const registration = value as Record<string, unknown>;
  return typeof registration.name === 'string'
    && typeof registration.email === 'string'
    && typeof registration.phone === 'string';
}

export function getRegistrations(): Registration[] {
  const storedRegistrations = window.localStorage.getItem(STORAGE_KEY);
  if (storedRegistrations === null) {
    return [];
  }

  const registrations: unknown = JSON.parse(storedRegistrations);
  if (!Array.isArray(registrations) || !registrations.every(isRegistration)) {
    throw new Error('Os dados de cadastro armazenados são inválidos.');
  }

  return registrations;
}

export function saveRegistration(registration: Registration): void {
  const registrations = getRegistrations();
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify([...registrations, registration]));
}
