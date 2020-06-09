const {Builder, By, until} = require('selenium-webdriver');

describe('exercise_2', () => {
  const driver = new Builder().forBrowser('chrome').build();


  it('exercise_2_1', async () => {
    await driver.get('http://software-testing.ru/');
    await driver.findElement(By.css('.item40')).click();
    await driver.wait(until.titleIs("Новости проекта"),2000);
  });

  it('exercise_2_3', async () => {
      await driver.get('http://www.litecart.com/admin/');
      await driver.findElement(By.name('username')).sendKeys('admin');
      await driver.findElement(By.name('password')).sendKeys('admin');
      await driver.findElement(By.name('login')).click();
      await driver.wait(until.elementLocated(By.css('.logotype')),2000);
  });

  after( async () => {
    driver.quit()
  });

})
