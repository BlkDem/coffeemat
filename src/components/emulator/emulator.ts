
export class Emulator {
  payCashPay(cb: () => void) {
    console.log('HW(emu): payment cash success');
    return cb();
  }

  payCashCancel(cb: () => void) {
    console.log('HW(emu): payment cash cancelled');
    return cb();
  }


}
