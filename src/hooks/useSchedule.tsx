import { useEffect } from "react";
import { useContext, useState } from "react";

import { AppContext } from "../Context/AppContext";
import { Schedule, Subject } from "../interfaces";

export const useSchedule = () => {
  const {userData} = useContext(AppContext);
  const [schedule, setSchedule] = useState<Schedule>(userData?.schedule || {subjects: [], days: []});
  const [hours, setHours] = useState<string[]>();

  useEffect(() => {
    if(schedule.subjects.length) {
      const {subjects} = schedule;
      let hoursSet: string[] = [];
      subjects.forEach((sbj) => 
        hoursSet = hoursSet.concat(sbj.hours)
      );
      console.log(hoursSet);
      setHours(() => hoursSet);
    }
    else
      setHours(() => []);
  }, [schedule, setHours]);
  return {hours, schedule};
};