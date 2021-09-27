import { RiRestartLine } from 'react-icons/ri';
import { useContext, useEffect, useState } from 'react';
import {
  AiOutlineFileAdd,
  AiOutlineDelete,
  AiOutlineSave,
} from 'react-icons/ai';

import { AppContext } from '../Context/AppContext';
import { Schedule, Subject } from '../interfaces';

export const useSchedule = () => {
  const { userData } = useContext(AppContext);
  const [schedule, setSchedule] = useState<Schedule>(
    userData?.schedule || { subjects: [], days: [] }
  );

  const [hours, setHours] = useState<string[]>([]);
  const defaultHours = [
    '8:00 - 9:00',
    '9:00 - 10:00',
    '10:00 - 11:00',
    '12:00 - 13:00',
    '13:00 - 14:00',
    '15:00 - 16:00',
  ];
  const [days, setDays] = useState<string[]>([]);
  const defaultDays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];

  const options = [
    { cb: () => {}, Icon: AiOutlineFileAdd, text: 'Add subject' },
    { cb: () => {}, Icon: AiOutlineDelete, text: 'Delete subject' },
    { cb: () => {}, Icon: RiRestartLine, text: 'Reset schedule' },
    { cb: () => {}, Icon: AiOutlineSave, text: 'Save' },
  ];

  const getColumns = () => (days.length ? days.length : defaultDays.length);
  const getRows = () => (hours.length ? hours.length : defaultHours.length);

  useEffect(() => {
    if (schedule.subjects.length) {
      const { subjects } = schedule;
      let hoursSet: string[] = [];
      subjects.forEach((sbj) => (hoursSet = hoursSet.concat(sbj.hours)));
      console.log(hoursSet);
      setHours(() => hoursSet);
    } else setHours(() => []);
  }, [schedule, setHours]);

  return {
    days,
    defaultDays,
    defaultHours,
    getColumns,
    getRows,
    hours,
    options,
    schedule,
  };
};
