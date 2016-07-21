import { TrackingPage } from './app.po';

describe('tracking App', function() {
  let page: TrackingPage;

  beforeEach(() => {
    page = new TrackingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
