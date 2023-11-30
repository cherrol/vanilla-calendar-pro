import VanillaCalendar from '@uvarov.frontend/vanilla-calendar';
import '@uvarov.frontend/vanilla-calendar/build/vanilla-calendar.min.css';

const options = {
  actions: {
    clickDay(event, dates) {
      console.log(dates);
    },
  },
};

const calendar = new VanillaCalendar('#calendar', options);
calendar.init();
