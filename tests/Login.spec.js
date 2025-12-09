const test = require('@playwright/test')

test.skip('Login page', async({page}) => {
    console.log("this is Login Page")
    await page.goto("https://www.instagram.com/")
    await page.locator("//input[@type='text']").fill("harishdhoni89@gmail.com")
    await page.locator("//input[@type='password']").fill("chethana@420")
    await page.locator('//*[@id="login_form"]/div/div[1]/div/div[3]/div/div/div/div[1]').click()
    
}); 

test('login of fb', async({page}) => {
    await page.goto("https://www.facebook.com")
    await page.locator("//*[@href='/r.php?entry_point=login']").click()
    await page.locator("//*[@name='firstname']").fill("Namma")
    await page.locator("//*[@name='lastname']").type("QA")
    await page.locator("//*[@name='birthday_day']").selectOption("2")
    await page.locator("//*[@id='month']").selectOption("1")
    await page.locator("//*[@id='year']").selectOption("2025")
    await page.getByLabel("Male").check();
    await page.locator('//*[@name="reg_email__"]').fill("123456789")  
    await page.waitForTimeout(6000)

    
});