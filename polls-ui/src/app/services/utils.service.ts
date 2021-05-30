import { PopoverController, LoadingController } from '@ionic/angular';
import { Injectable, Component, ComponentRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  loading;

  constructor(private popoverController: PopoverController,
    private loadingController: LoadingController) { }

  async showResult(componentName: any, params?: {[key: string]: any}) {
    const resultPopover = await this.popoverController.create({
      component: componentName,
      showBackdrop: true,
      cssClass: 'popover',
      componentProps: {
        ...params,
      }
    });

    await resultPopover.present();
  }

  async showLoading() {
    this.loading = await this.loadingController.create({
      message: 'Please wait...',
    });

    await this.loading.present();
  }

  async hideLoading() {
    await this.loading.dismiss();
  }


}
