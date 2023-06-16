import store from "@/store";

const steps = [
  'Connecting to bank...',
  'Status 200 Ok',
  'Begin transaction...',
  'Success',
  'Payment successful'
]

export class Emulator {

  //bank transaction
  async processCardPay() {
    const stepCount = steps.length;
    store.state.emulator.cardReader.status = 'Connecting to bank...';

    for (let i=0; i<stepCount; i++) {

      const step = await new Promise ((resolve) => {
        setTimeout(()=> {
          store.state.emulator.cardReader.status = steps[i];
          resolve(true);
        }, 1000);
      });

      if (!step) {
        console.error('transaction error')
        return false;
      }

    }

    return true;

  }


  // startCashin(cb: (amount: number | string) => void) {
  //   store.state.emulator.cashReader.active = true;
  //   return cb(store.state.emulator.cashReader.value);
  // }

  // amountCashin(value: number, cb: (amount: number | string) => void) {
  //   let am = store.state.emulator.cashReader.value;
  //   am += value;
  //   return cb(am);
  // }

  // stopCashin(cb: (amount: number | string) => void) {
  //   store.state.emulator.cashReader.active = false;
  //   return cb(store.state.emulator.cashReader.value);
  // }



  async prepareDrink(ready: (value: boolean) => void) {
    store.commit('machineActive', true);
    try {
      for (let i=1; i<11; i++) {
        await new Promise((resolve) => {
          setTimeout(() => {
            resolve(true);
          }, 1000)
        }).then(()=>{
          // console.log('progress:', i);
          store.commit('machineProgress', i);
        })
      }
    } catch(error) {
      store.commit('machineActive', false);
      console.error(error);
    }

    store.commit('machineActive', false);
    return ready(true);
  }

  payCashPay(cb: (result: boolean) => void) {

    return cb(true);
  }

  payCashCancel(cb: (value: string) => void) {

    return cb('pay cash cancel');
  }

  async payCardSuccess(cb: (value: string) => void) {
    try {

      store.commit('machineProgress', 1);
      await this.processCardPay();

      store.state.emulator.cardReader.active = false;

      return cb('pay card success');

    } catch(error) {
      console.error('paying card process error:', error)
    }

  }

  payCardError(cb: (value: string) => void) {
    store.state.emulator.cardReader.status = 'Error card pay';
    return cb('pay card error!');
  }


}
