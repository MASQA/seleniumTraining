const {Builder, By, until} = require('selenium-webdriver');

describe('exercise_2', () => {
  const driver = new Builder().forBrowser('chrome').build();


  it('exercise_2_1', async () => {
    await driver.get('http://software-testing.ru/');
    await driver.findElement(By.css('.item40')).click();
    await driver.wait(until.titleIs("Новости проекта"),2000);
  });

  after( async () => {
    driver.quit()
  });

})
