package StepDefinition;

import org.junit.Assert;
import org.openqa.selenium.By;

import Base.TestBase;
import Pages.FlightFinderPage;
import Pages.LogInPage;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDef extends TestBase {
	
@Before
public void setUp(){
	intialization();
}
@After
public void tearDown(){
	 driver.quit();
}
@Given("^User Already in Log In Page$")
public void user_Already_in_Log_In_Page() {
	LogInPage LogInPage=new LogInPage();
	LogInPage.verifyLoginTitle();
}

@When("^title of the page is Welcome: Mercury Tours$")
public void title_of_the_page_is_Welcome_Mercury_Tours(){

	String title=driver.getTitle();
	Assert.assertEquals("Welcome: Mercury Tours", title);     
}

@Then("^Enter \"([^\"]*)\" and \"([^\"]*)\" and click on Login button$")
public void enter_and_and_click_on_Login_button(String arg1, String arg2)  {
	LogInPage LogInPage=new LogInPage();
	LogInPage.LogIN(arg1, arg2);
	

}



@Given("^User is on Find Flights Page$")
public void user_is_on_Find_Flights_Page() throws Throwable {
	FlightFinderPage FlightFinderPage=new FlightFinderPage();
	FlightFinderPage.CheckTheTitle();
}

@When("^User verified the title$")
public void user_verified_the_title() throws Throwable {
	FlightFinderPage FlightFinderPage=new FlightFinderPage();
	FlightFinderPage.CheckTheTitle();
}

@Then("^Enyter \"([^\"]*)\" and \"([^\"]*)\"$")
public void enyter_and(int arg2, String arg1) throws Throwable {
	FlightFinderPage FlightFinderPage=new FlightFinderPage();
	FlightFinderPage.EnterDetains(arg1, arg2); 
}

@Then("^Close the Browser$")
public void close_the_Browser() throws Throwable {
  


}
}