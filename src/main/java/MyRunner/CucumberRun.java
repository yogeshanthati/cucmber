package MyRunner;

import org.junit.runner.RunWith;
import cucumber.api.junit.Cucumber;
import cucumber.api.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
	features= "D:/CuCumber/cucmber/src/main/java/FeatureCucumber",
	glue={"StepDefinition"},
	format={"pretty","html:test-outout","json:Json-cucumber/cucumberout.json","junit:Junit-cucumber/junit.xml"},
	dryRun=false,
	monochrome = true
	strict=true
		)
	

public class CucumberRun {

		
}
