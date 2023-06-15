import store from "@/store";
import router from "@/router";

export class Emulator {


  startCashin(cb: (amount: number | string) => void) {
    store.state.emulator.cashReader.active = true;
    return cb(store.state.emulator.cashReader.value);
  }

  amountCashin(value: number, cb: (amount: number | string) => void) {
    let am = store.state.emulator.cashReader.value;
    am += value;
    return cb(am);
  }

  stopCashin(cb: (amount: number | string) => void) {
    store.state.emulator.cashReader.active = false;
    return cb(store.state.emulator.cashReader.value);
  }

  //bank transaction
  async processCardPay() {

    store.state.emulator.cardReader.status = 'Connecting to bank...';

    const step1 = await new Promise ((resolve) => {
      setTimeout(()=> {
        store.state.emulator.cardReader.status = 'Status 200 Ok';
        resolve(true);
      }, 1000);
    });

    if (!step1) {
      console.error('Error bank connection')
      return false;
    }

    const step2 = await new Promise ((resolve) => {
      setTimeout(()=> {
        store.state.emulator.cardReader.status = 'Begin transaction...';
        resolve(true);
      }, 1000);
    });

    if (!step2) {
      console.error('Error bank transaction')
      return false;
    }

    const step3 = await new Promise ((resolve) => {
      setTimeout(()=> {
        store.state.emulator.cardReader.status = 'Success';
        resolve(true);
      }, 1000);
    });

    if (!step3) {
      console.error('Error bank answer')
      return false;
    }

    const step4 = await new Promise ((resolve) => {
      setTimeout(()=> {
        const cr = store.state.emulator.cardReader;
        cr.status = 'Ready to accept card';
        cr.active = false;
        resolve(true);
      }, 1000);
    });

    if (!step3) {
      console.error('Unknown error');
      return false;
    }

    return true;
  }

  async prepareDrink(ready: (value: boolean) => void) {
    store.commit('machineActive', true);

    try {
      for (let i=0; i<10; i++) {
        await new Promise((resolve) => {
          setTimeout(() => {
            resolve(true);
          }, 1000)
        }).then(()=>{
          console.log('progress:', i);
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
      console.log('before process pay')
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
