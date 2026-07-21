
import{test,expect} from "@playwright/test"

test("automating the app.vwo website",async({page})=>{
    await page.goto("https://app.vwo.com");
   // await page.getByRole("link",{name: "Make Appointment"}).click();
    await page.getByRole("textbox",{name:"email"}).fill("ravikant@gmail.com");
    await page.getByRole("textbox",{name:"password"}).fill("admin@123")
    await page.getByRole("button",{name:"Sign in" , exact:true}).click();
    let error_massage = page.locator("#js-notification-box-msg");
    await expect(error_massage).toContainText("Your email, password, IP address or location did not match")




    // await page.locator("#btn-make-appointment").click()
    // let userName = page.locator("#txt-username");
    // let passWord = page.locator("#txt-password");
    // await userName.fill("John Doe");
    // await passWord.fill("ThisIsNotAPassword");
    // await page.locator("#btn-login").click();
    // await expect(page).toHaveURL("https://katalon-demo-cura.herokuapp.com/#appointment");
    
})