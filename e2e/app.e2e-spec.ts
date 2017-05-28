import { MyCookingAppPage } from './app.po';

describe('my-cooking-app App', () => {
  let page: MyCookingAppPage;

  beforeEach(() => {
    page = new MyCookingAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
