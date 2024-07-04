import { Platform } from '~/types';
import useData from './use-data';

const usePlatform = () => useData<Platform>('/platforms/lists/parents')

export default usePlatform