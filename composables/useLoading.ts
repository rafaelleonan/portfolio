import type {LogsLoading} from '@/interfaces/geral'

export const useLoading = () => useState('loading', () => true);
export const useCountLoading = () => useState('countLoading', () => 0);
export const useInfoLoading = () => useState<LogsLoading[]>('infoLoading', () => []);
