package Base;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.PageFactory;

import com.relevantcodes.extentreports.ExtentReports;

import Utilities.Constants;

public class TestBase extends Constants {
	public TestBase(){
	PageFactory.initElements(driver, this);
	}
	public static void intialization(){
		try {
			prop = new Properties();
			FileInputStream ip = new FileInputStream("src/main/java/Config/testconfig.properties");
			prop.load(ip);
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}			
		
		
		String browserName = prop.getProperty("browser");
		if(browserName.equals("chrome")){
			System.setProperty("webdriver.chrome.driver","./src/main/java/resources/chromedriver.exe");	
			driver = new ChromeDriver(); 
			driver.manage().timeouts().pageLoadTimeout(Constants.PAGE_LOAD_TIMEOUT, TimeUnit.SECONDS);
		}
		else if(browserName.equals("firefox")){
			System.setProperty("webdriver.gecko.driver", "src/main/resources/com/pa/qa/BrowserSpecDrivers/chromedriver.exe");	
			driver = new FirefoxDriver(); 
		}
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		driver.get(prop.getProperty("url"));	
		driver.manage().timeouts().pageLoadTimeout(Constants.PAGE_LOAD_TIMEOUT, TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(Constants.IMPLICIT_WAIT, TimeUnit.SECONDS);	
	}
	
}
