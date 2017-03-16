import { TourOfBusyouPage } from './app.po';

describe('tour-of-busyou App', () => {
  let page: TourOfBusyouPage;

  beforeEach(() => {
    page = new TourOfBusyouPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
