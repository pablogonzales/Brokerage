import { BrokeragePage } from './app.po';

describe('brokerage App', function() {
  let page: BrokeragePage;

  beforeEach(() => {
    page = new BrokeragePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
