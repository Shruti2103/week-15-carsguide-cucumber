package com.carsguide.pages;


import com.carsguide.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePage extends Utility {
    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public HomePage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//a[contains(text(),'buy + sell')]")
    WebElement buyandsellmousehoover;

    @CacheLookup
    @FindBy(xpath = "//a[contains(text(),'Search Cars')]")
    WebElement searchcarclick;


    public void buyandsellmousehoover() {
        mouseHoverToElement(buyandsellmousehoover);
        log.info("Clicking on buy and sell mouse hoover " + buyandsellmousehoover.toString());
    }


    public void clickonsearchcar() {
        clickOnElement(searchcarclick);
        log.info("Clicking on search car click " + searchcarclick.toString());
    }


}
