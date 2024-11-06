import createToInput from '@scripts/creators/createToInput';
import reset from '@scripts/methods/reset';
import errorMessages from '@scripts/utils/getErrorMessages';
import type { Reset, VanillaCalendarPro } from '@src/index';

const update = (self: VanillaCalendarPro, resetOptions?: Partial<Reset>) => {
  if (!self.private.isInit) throw new Error(errorMessages.notInit);
  if (self.inputMode && !self.private.inputModeInit) createToInput(self, false);
  const defaultReset = { year: true, month: true, dates: true, time: true, locale: true };

  reset(self, { ...defaultReset, ...resetOptions });
  if (self.onUpdate) self.onUpdate(self);
};

export default update;
