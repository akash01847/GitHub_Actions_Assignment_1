package Assignment;

import org.apache.commons.io.FileUtils;
import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.usermodel.Font;
import org.openqa.selenium.*;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.List;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import resources.Base;

public class VerifyBrokenLinks {

    File src;

    private WebDriver driver;
    private Base base;

    public VerifyBrokenLinks(WebDriver driver, Base base) {
        this.driver = driver;
        this.base = base;
        this.src = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
    }

    public void verifyLinks() throws IOException {
        String homePage = driver.getCurrentUrl();
        HttpURLConnection huc = null;
        int respCode;
        String url;
        WebElement link;

        driver.manage().window().maximize();

        driver.get(homePage);

        List<WebElement> links = driver.findElements(By.tagName("a"));

        XSSFWorkbook workbook = new XSSFWorkbook();
        XSSFSheet sheet = workbook.createSheet("Broken Links");

        int rowNum = 0;
        Row headerRow = sheet.createRow(rowNum++);
        Cell headerCell = headerRow.createCell(0);
        headerCell.setCellValue("Link URL");

        Font headerFont = workbook.createFont();
        headerFont.setBold(true);

        CellStyle headerCellStyle = workbook.createCellStyle();
        headerCellStyle.setFont(headerFont);
        headerCell.setCellStyle(headerCellStyle);

        for (WebElement webElement : links) {
            link = webElement;

            try {
                url = link.getAttribute("href");

                if (url == null || url.isEmpty()) {
                    continue;
                }

                if (!url.startsWith(homePage)) {
                    continue;
                }

                huc = (HttpURLConnection) (new URL(url).openConnection());
                huc.setRequestMethod("HEAD");
                huc.connect();
                respCode = huc.getResponseCode();

                if (respCode >= 400) {
                    System.out.println(url+" is a broken link");
                    Row row = sheet.createRow(rowNum++);
                    Cell cell = row.createCell(0);
                    cell.setCellValue(url);
                } else {
                    System.out.println(url+" is a valid link");
                }

            } catch (NoSuchElementException e) {
                System.out.println("Exception occurred while checking link: " + e.getMessage());
                FileUtils.copyFile(src, new File("/home/knoldus/screenshot1.png"));
            } catch (StaleElementReferenceException e) {
                System.out.println("Exception occurred: " + e.getMessage());
                FileUtils.copyFile(src, new File("/home/knoldus/screenshot2.png"));
            } catch (ElementNotInteractableException e) {
                System.out.println("Exception Occurred: " + e.getMessage());
                FileUtils.copyFile(src, new File("/home/knoldus/screenshot3.png"));
            } catch (TimeoutException e) {
                System.out.println("Exception Occurred: " + e.getMessage());
                FileUtils.copyFile(src, new File("/home/knoldus/screenshot4.png"));
            } catch (WebDriverException e) {
                System.out.println("Exception occurred: " + e.getMessage());
                FileUtils.copyFile(src, new File("/home/knoldus/screenshot5.png"));
            } catch (IOException e) {
                System.out.println("Failed to connect to URL: " + e.getMessage());
                FileUtils.copyFile(src, new File("/home/knoldus/screenshot6.png"));
            }
        }

        try (FileOutputStream outputStream = new FileOutputStream(new File("src/test/resources/testdata/brokenLinks.xlsx"))) {
            workbook.write(outputStream);
        } catch (IOException e) {
            System.out.println("Failed to write to Excel file: " + e.getMessage());
        }

        driver.quit();
    }
}
