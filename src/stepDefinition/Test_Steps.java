/**
 * 
 */
package stepDefinition;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.testng.Assert;

import cucumber.api.java.After;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

/**
 * @author Adebola
 *
 */
public class Test_Steps {
	
	public WebDriver driver;
	public int random;
	
	@Given("^I am on the Homepage$")
	public void i_am_on_the_Homepage() throws Throwable {
	    System.setProperty("webdriver.chrome.driver", "C:\\chromedriver.exe");
		//driver = new ChromeDriver();
		
		ChromeOptions options = new ChromeOptions();
		options.addArguments("--disable-extensions");
		driver = new ChromeDriver(options);
				
		driver.navigate().to("http://www.carguruji.com/shop/");
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
	}

	@And("^I click on My Account icon$")
	public void i_click_on_My_Account_icon() throws Throwable {
	    driver.findElement(By.linkText("My Account")).click();
	    Thread.sleep(2000);
	   
	}

	@And("^I see a Welcome message banner$")
	public void i_see_a_Welcome_message_banner() throws Throwable {
		String ExpectedMessage = "Welcome, Please Sign In";
		String ActualMessage = driver.findElement(By.xpath("/html/body/div[1]/div[3]/h1")).getText();
		Assert.assertEquals(ExpectedMessage, ActualMessage );   
	}

	@When("^I enter a valid Username$")
	public void i_enter_a_valid_Username() throws Throwable {
		driver.findElement(By.name("email_address")).sendKeys("adebolaa@hotmail.com");
	}

	@And("^I enter a valid Password$")
	public void i_enter_a_valid_Password1() throws Throwable {
		driver.findElement(By.name("password")).sendKeys("password7");
	}

	@And("^click the Sign In button$")
	public void click_the_Sign_In_button() throws Throwable {
		driver.findElement(By.id("tdb5")).click();
		Thread.sleep(2000);
	}
	@And("^I should be logged in$")
	public void i_should_be_logged_in() throws Throwable {
		String ExpectedMessage = "My Account Information";
		String ActualMessage = driver.findElement(By.xpath("//*[@id='bodyContent']/h1")).getText();	
		Assert.assertEquals(ExpectedMessage, ActualMessage );
	    
	}
	
	@And("^I click on Change my account password$")
	public void i_click_on_Change_my_account_password() throws Throwable {
	    driver.findElement(By.xpath("//*[@id='bodyContent']/div/div[1]/ul/li[3]/a")).click();
	    Thread.sleep(2000);
	}

	@And("^I see a My Password banner$")
	public void i_see_a_My_Password_banner() throws Throwable {
	    String ExpectedMessage = "My Password";
	    String ActualMessage = driver.findElement(By.xpath("//*[@id='bodyContent']/h1")).getText();
	    Assert.assertEquals(ExpectedMessage, ActualMessage );
	}

	@When("^I enter my valid Password$")
	public void i_enter_a_valid_Password() throws Throwable {
	    driver.findElement(By.name("password_current")).sendKeys("password7");
	}
	
	@And("^I enter a new Password$")
	public void i_enter_a_new_Password() throws Throwable {
	    driver.findElement(By.name("password_new")).sendKeys("password8");
	}
	
	@And("^I enter a Password confirmation$")
	public void i_enter_a_Password_confirmation() throws Throwable {
	    driver.findElement(By.name("password_confirmation")).sendKeys("password8");
	}
	
	@And("^I click the Continue button$")
	public void i_click_the_Continue_button() throws Throwable {
	    driver.findElement(By.xpath("//*[@id='tdb5']/span[2]")).click();
	    Thread.sleep(2000);
	}
	
	@Then("^I should see a My Account Information banner$")
	public void i_should_see_a_My_Account_Information_banner() throws Throwable {
	    String ExpectedMessage = "My Account Information";
	    String ActualMessage = driver.findElement(By.xpath("//*[@id='bodyContent']/h1")).getText();
	    Assert.assertEquals(ExpectedMessage, ActualMessage );
	}
	
	
	@When("^I enter all the user data in the registration form$")
	public void i_enter_all_the_user_data_in_the_registration_form() throws Throwable {
		driver.findElement(By.id("tdb3")).click();
		Thread.sleep(3000);
		driver.findElement(By.id("tdb4")).click();
		Thread.sleep(3000);
		driver.findElement(By.name("gender")).click();
		driver.findElement(By.name("firstname")).sendKeys("Ade");
		driver.findElement(By.name("lastname")).sendKeys("Ademiluyi");
		driver.findElement(By.name("dob")).sendKeys("04/04/1988");
		
	    
		random = 100 + (int)(Math.random() * ((1000 - 1) + 1));
		
		System.out.println(random);
		driver.findElement(By.name("email_address")).sendKeys("adebolaa" + random + "@hotmail.com");
		Thread.sleep(1000);
		
		driver.findElement(By.name("company")).sendKeys("Testing");
		driver.findElement(By.name("street_address")).sendKeys("1 Driveway");
		driver.findElement(By.name("postcode")).sendKeys("W2W 8BX");
		driver.findElement(By.name("city")).sendKeys("London");
		driver.findElement(By.name("state")).sendKeys("London");
		driver.findElement(By.name("country")).sendKeys("United Kingdom");
		driver.findElement(By.name("telephone")).sendKeys("07985442644");
		driver.findElement(By.name("password")).sendKeys("password123");
		driver.findElement(By.name("confirmation")).sendKeys("password123");
		driver.findElement(By.id("tdb4")).click();
		Thread.sleep(2000);
	}

	@Then("^I should see Your Account Has Been Created! banner$")
	public void i_should_see_Your_Account_Has_Been_Created_banner() throws Throwable {
		String ExpectedMessage = "Your Account Has Been Created!";
	    String ActualMessage = driver.findElement(By.xpath("//*[@id='bodyContent']/h1")).getText();
	    Assert.assertEquals(ExpectedMessage, ActualMessage );
	    Thread.sleep(2000);
	}

	@Then("^I log out$")
	public void i_log_out() throws Throwable {
		driver.findElement(By.id("tdb4")).click();  
	}
	
	@When("^I enter a \"([^\"]*)\" detail$")
	public void i_enter_a_detail(String email) throws Throwable {
		driver.findElement(By.name("email_address")).sendKeys(email);
	}

	@When("^I enter \"([^\"]*)\" for the user$")
	public void i_enter_for_the_user(String passw) throws Throwable {
		driver.findElement(By.name("password")).sendKeys(passw);
	}
	
	@Then("^I should see an error message$")
	public void i_should_see_an_error_message() throws Throwable {
	String ErrorMessage = driver.findElement(By.xpath("//*[@id='bodyContent']/table/tbody/tr/td")).getText();
	System.out.println(ErrorMessage);
	}

	@And("^I click the Sign In button$")
	public void i_click_the_Sign_In_button() throws Throwable {
		driver.findElement(By.id("tdb5")).click();
		Thread.sleep(2000);
	}
	
	@And("^I am logged in$")
	public void i_am_logged_in() throws Throwable {
		driver.findElement(By.xpath("//*[@id='bodyContent']/h1")).getText();
		Thread.sleep(2000);  
	}

	@And("^I click on the Gadgets Link$")
	public void i_click_on_the_Gadgets_Link() throws Throwable {
		driver.findElement(By.xpath("//*[@id='columnLeft']/div[1]/div[2]/a[4]")).click();
		Thread.sleep(2000);
	}

	@And("^I click on Buy Now button$")
	public void i_click_on_Buy_Now_button() throws Throwable {
		driver.findElement(By.xpath("//*[@id='tdb5']/span[2]")).click();
		Thread.sleep(2000);
	}

	@And("^I click on Checkout button$")
	public void i_click_on_Checkout_button() throws Throwable {
		driver.findElement(By.xpath("//*[@id='tdb6']/span[2]")).click();
		Thread.sleep(2000);
	}

	@And("^I see Delivery Information banner$")
	public void i_see_Delivery_Information_banner() throws Throwable {
		String ExpectedMessage = "Delivery Information";
	    String ActualMessage = driver.findElement(By.cssSelector("h1")).getText();
	    Assert.assertEquals(ExpectedMessage, ActualMessage );
	    Thread.sleep(2000);
	}

	@And("^I click Continue button$")
	public void i_click_Continue_button() throws Throwable {
		driver.findElement(By.xpath("//*[@id='tdb6']/span[2]")).click();
		Thread.sleep(2000);
	}

	@And("^I click on Cash on Delivery button$")
	public void i_click_on_Cash_on_Delivery_button() throws Throwable {
		driver.findElement(By.xpath("//*[@id='bodyContent']/form/div/div[4]/table[1]/tbody/tr/td[2]/input")).click();
		Thread.sleep(2000);
	}

	@When("^I click on Confirm Order$")
	public void i_click_on_Confirm_Order() throws Throwable {
		driver.findElement(By.xpath("//*[@id='tdb5']/span[2]")).click();
		Thread.sleep(2000);
	}

	@Then("^I should see Your Order Has Been Processed banner$")
	public void i_should_see_Your_Order_Has_Been_Processed_banner() throws Throwable {
		String ExpectedMessage = "Your Order Has Been Processed!";
	    String ActualMessage = driver.findElement(By.xpath("//*[@id='bodyContent']/h1")).getText();
	    Assert.assertEquals(ExpectedMessage, ActualMessage );
	    Thread.sleep(2000);
	}
	
	@After
	public void CloseBrowser(){
		driver.quit();
	}
}
	

