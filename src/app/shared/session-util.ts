import { Session } from '../session';
import { SessionsByDay } from '../sessionsByDay';

export default class SessionUtil {

    static groupSessions(obj, session: Session) {
      const sessionDate = new Date(session.startTime);
      sessionDate.setHours(0,0,0,0);

      const key = sessionDate.toString();

      obj[key] = obj[key] || [];
      obj[key].push(session);

      return obj;
    }

    static sortGroupedSessions(key: string, sessionsByDay) {
      var sessionGroup = new SessionsByDay();
      sessionGroup.day = new Date(key);

      sessionGroup.sessions = sessionsByDay[key].sort(
        function(session1, session2) {
          return session1.startTime - session2.startTime
            || session1.endTime - session2.endTime;
        });

        return sessionGroup; 
    }

    static sortGroups(sessionsByDay: SessionsByDay[]) {
      return sessionsByDay.sort(function(group1, group2) {
        return group1.day - group2.day;
      });
    }
}
