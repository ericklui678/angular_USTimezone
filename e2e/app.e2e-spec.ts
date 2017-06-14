import { USTimezonePage } from './app.po';

describe('ustimezone App', () => {
  let page: USTimezonePage;

  beforeEach(() => {
    page = new USTimezonePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
