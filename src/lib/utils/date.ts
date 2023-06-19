import dayjs, { extend } from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

extend(relativeTime);

export const formatFromNow = (date: string) => dayjs(date).fromNow(true);
