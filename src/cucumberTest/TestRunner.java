/**
 * 
 */
package cucumberTest;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

/**
 * @author Adebola
 *
 */
@RunWith(Cucumber.class)
@CucumberOptions(
		format = {"pretty", "html:target"},
		features = "Feature",
		glue={"stepDefinition"},
		tags = {"@Login2"}
		)
public class TestRunner {

}
