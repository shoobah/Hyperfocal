import { HyperfocalPage } from './app.po';

describe('hyperfocal App', () => {
  let page: HyperfocalPage;

  beforeEach(() => {
    page = new HyperfocalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
