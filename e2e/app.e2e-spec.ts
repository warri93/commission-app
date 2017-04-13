import { CommissionFrontPage } from './app.po';

describe('commission-front App', () => {
  let page: CommissionFrontPage;

  beforeEach(() => {
    page = new CommissionFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
