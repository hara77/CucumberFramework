package seleniumgluecode;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.List;
import java.util.Map;
import java.util.Properties;

import org.openqa.selenium.WebDriver;

import BaseClass.BrowserSetup;
import PageObjectRepository.CKLoginPage;
import cucumber.api.DataTable;
import cucumber.api.java.en.*;

public class LoginPageTest extends BrowserSetup{
	CKLoginPage ADP;
	
	@When("^CK application is Launch$")
	public void ck_application_is_Launch() throws Throwable {
		String current = System.getProperty("user.dir");
		System.out.println("Current working directory in Java : " + current);
		File file = new File(System.getProperty("user.dir") + "\\config\\file.properties");
		FileInputStream fileInput = null;
		try {
			fileInput = new FileInputStream(file);
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		}
		Properties prop = new Properties();
		try {
			prop.load(fileInput);
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		driver = BrowserSetup.StartBrowser(prop.getProperty("BrowserType"), prop.getProperty("Url"));
	}

	@When("^User enters Credentials to LogIn$")
	public void user_enters_Credentials_to_LogIn(DataTable dt) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
				// For automatic transformation, change DataTable to one of
				// List<YourType>, List<List<E>>, List<Map<K,V>> or Map<K,V>.
				// E,K,V must be a scalar (String, Integer, Date, enum etc)

				/*
				List<Map<String,String>>:Then the table will be automatically converted to a list of maps of string to string.
				here. Map's Key should contain 'First Name' and 'Last Name'
				and values should contain the respective values. So the Map entities would be:

		        <First Name,chatterjeeamit42@gmail.com>,<Last Name,Testing123$  >
		        we are fetching the data from the keys as Map concept.
		        eg List(1).Map.get(Type)


		         https://stackoverflow.com/questions/46130455/how-to-convert-a-datatable-in-cucumber-to-a-list-of-objects

				The asMaps method now takes two arguments -
				the key type and the value type. The returned List is generic,
				and is of the types you passed into the method. Example:

		        Map<String,String> maps = dataTable.asMaps(String.class, String.class);

		         | First Name                 | Last Name            |
		         | chatterjeeamit42@gmail.com | Testing123$          |
		        In the step definition map each row (a map with the header row as keys and the row values as values)
		        to the object of your choice:
				 */


				List<Map<String, String>> list = dt.asMaps(String.class,String.class);
				System.out.println(list.get(0).get("First Name"));
				System.out.println(list.get(0).get("Last Name"));


				ADP = new CKLoginPage(driver);
				ADP.pause(3000);


			//	ADP.gettoastCloseButton();
			//	ADP.pause(3000);

				ADP.clickSignIn();
				ADP.pause(3000);
				ADP.typeUsername(list.get(0).get("First Name"));
				ADP.pause(3000);
				ADP.typePassword(list.get(0).get("Last Name"));
				ADP.pause(3000);
				ADP.clickOnLoginSignInButton();
				ADP.pause(3000);
			//	ADP.loggedInApplication(list.get(0).get("First Name"),list.get(0).get("Last Name"));
	   
	}

	@Then("^User verify tile of the page$")
	public void user_verify_tile_of_the_page() throws Throwable {
		ADP = new CKLoginPage(driver);
		ADP.pause(3000);
		ADP.VerifyTitle();

	}

	@When("^User Clicks on Class tab$")
	public void user_Clicks_on_Class_tab() throws Throwable {
		ADP = new CKLoginPage(driver);
		ADP.pause(3000);
		ADP.clickClassesTab();
	}

	@When("^User enters class code\"([^\"]*)\"$")
	public void user_enters_class_code(String classcode) throws Throwable {
		ADP = new CKLoginPage(driver);
		ADP.pause(3000);
		ADP.typeClassCode(classcode);
		ADP.pause(3000);
		ADP.TearDown();
	}

	@When("^User Clicks on Library tab$")
	public void user_Clicks_on_Library_tab() throws Throwable {
		ADP = new CKLoginPage(driver);
		ADP.pause(3000);
		ADP.clicklibrarybutton();
	}

	@When("^User click on Create new dropdown$")
	public void user_click_on_Create_new_dropdown() throws Throwable {
		ADP = new CKLoginPage(driver);
		ADP.pause(3000);
		ADP.clickcreatenew();
	}

	@Then("^User enters on Quiz option$")
	public void user_enters_on_Quiz_option() throws Throwable {
		ADP = new CKLoginPage(driver);
		ADP.pause(3000);
		ADP.clickquizbutton();
		ADP.pause(10000);
	}

	@Then("^User enters valid QuizTitle \"([^\"]*)\"$")
	public void user_enters_valid_QuizTitle(String QuizTitle) throws Throwable {
		ADP = new CKLoginPage(driver);
		ADP.pause(10000);
		ADP.FindIframe(QuizTitle);
		ADP.pause(5000);
		ADP.TearDown();
	}

}