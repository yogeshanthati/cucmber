package Pages;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import Base.TestBase;

public class LogInPage extends TestBase {

	public LogInPage(){
		super();
	}
	@FindBy(xpath="//input[@name='userName']")
	private WebElement username;
	@FindBy(xpath="//input[@name='password']")
	private WebElement password;
	@FindBy(xpath="//input[@name='login']")
	private WebElement login ;
	
	
	
	
	public void verifyLoginTitle(){	
		String title=driver.getTitle();
		Assert.assertEquals("Welcome: Mercury Tours", title);  
	}
	public void LogIN(String UserName,String Password){
		
		username.sendKeys(UserName);
		password.sendKeys(Password);  
		login.click();  
		 try {
			Thread.sleep(2000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}
	
	
	
	
}

