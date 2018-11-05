import { AngularHnPage } from './app.po';

describe('angular-hn App', () => {
  let page: AngularHnPage;

  beforeEach(() => {
    page = new AngularHnPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('hn works!');
  });
});
