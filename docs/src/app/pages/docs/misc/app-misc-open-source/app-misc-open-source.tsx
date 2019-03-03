import {Component, Element} from '@stencil/core';

import {MenuService} from '../../../../services/menu/menu.service';

@Component({
  tag: 'app-misc-open-source',
  styleUrl: 'app-misc-open-source.scss'
})
export class AppMiscOpenSource {

  @Element() el: HTMLElement;

  constructor(private menuService: MenuService) {
    this.menuService = MenuService.getInstance();
  }

  async componentWillLoad() {
    this.menuService.enable();
  }

  render() {
    return [
      <app-navigation></app-navigation>,

      <ion-content padding>
        <main><h1 id="app-misc-open-source-open-source">Open source</h1>
<p><a href="https://deckdeckgo.com">DeckDeckGo</a> is <strong>open source</strong> and its source code could be found in the following repos:</p>
<div text-center padding class="github-links">
    <a href="https://github.com/deckgo/deckdeckgo"><ion-badge color="primary"><ion-icon name="logo-github"></ion-icon> deckdeckgo | the core</ion-badge></a>
    <a href="https://github.com/deckgo/deckdeckgo-app"><ion-badge color="primary"><ion-icon name="logo-github"></ion-icon> deckdeckgo-app | the PWA remote control</ion-badge></a>
    <a href="https://github.com/deckgo/deckdeckgo-docs"><ion-badge color="primary"><ion-icon name="logo-github"></ion-icon> deckdeckgo-docs | this PWA documentation</ion-badge></a>
    <a href="https://github.com/deckgo/deckdeckgo-remote"><ion-badge color="primary"><ion-icon name="logo-github"></ion-icon> deckdeckgo-remote | the remote brige</ion-badge></a>
    <a href="https://github.com/deckgo/deckdeckgo-starter"><ion-badge color="primary"><ion-icon name="logo-github"></ion-icon> deckdeckgo-starter | the starter kit</ion-badge></a>
    <a href="https://github.com/deckgo/deckdeckgo-website"><ion-badge color="primary"><ion-icon name="logo-github"></ion-icon> deckdeckgo-website | the website</ion-badge></a>
    <a href="https://github.com/deckgo/deckdeckgo-charts"><ion-badge color="primary"><ion-icon name="logo-github"></ion-icon> deckdeckgo-charts | to plot charts</ion-badge></a>
    <a href="https://github.com/deckgo/deckdeckgo-highlight-code"><ion-badge color="primary"><ion-icon name="logo-github"></ion-icon> deckdeckgo-highlight-code | highlight code</ion-badge></a>
    <a href="https://github.com/deckgo/deckdeckgo-qrcode"><ion-badge color="primary"><ion-icon name="logo-github"></ion-icon> deckdeckgo-qrcode | to create QR code</ion-badge></a>
    <a href="https://github.com/deckgo/deckdeckgo-backend"><ion-badge color="primary"><ion-icon name="logo-github"></ion-icon> deckdeckgo-backend | the signaling server</ion-badge></a>
    <a href="https://github.com/deckgo/deckdeckgo-types"><ion-badge color="primary"><ion-icon name="logo-github"></ion-icon> deckdeckgo-types | interfaces and enums</ion-badge></a>
    <a href="https://github.com/deckgo/deckdeckgo-webpack-plugins"><ion-badge color="primary"><ion-icon name="logo-github"></ion-icon> deckdeckgo-webpack-plugins | plugins</ion-badge></a>
    <a href="https://github.com/deckgo/create-deckdeckgo"><ion-badge color="primary"><ion-icon name="logo-github"></ion-icon> create-deckdeckgo | the cli</ion-badge></a>
</div>

</main>

        <app-footer></app-footer>
      </ion-content>
    ];
  }
}
