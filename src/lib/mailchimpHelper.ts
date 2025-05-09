// src/lib/mailchimpHelper.ts
import * as cheerio from "cheerio";

export function makeMailchimpContentResponsive(html: string): string {
  const $ = cheerio.load(html);

  // Remove fixed widths from tables
  $("table").each((_, table) => {
    $(table).removeAttr("width");
    $(table).css("width", "100%");
    $(table).css("max-width", "100%");
  });

  // Remove fixed widths from table cells
  $("td").each((_, td) => {
    $(td).removeAttr("width");
    $(td).css("width", "auto");
    $(td).css("max-width", "100%");
  });

  // Make images responsive
  $("img").each((_, img) => {
    $(img).css("max-width", "100%");
    $(img).css("height", "auto");
  });

  // Remove "View in Browser" header
  // There are multiple ways this might appear in the HTML, so we'll try several selectors
  $('a:contains("View in Browser")').closest("tr, div, table").remove();
  $('td:contains("View in Browser")').closest("tr").remove();
  $('span:contains("View in Browser")').closest("tr, div, table").remove();

  // Remove footer content
  // Look for common footer elements
  $('a:contains("Forward to a Friend")').closest("table").remove();
  $('a:contains("Unsubscribe")').closest("table").remove();
  $('a:contains("Contact Us")').closest("table").remove();
  $('a:contains("Not a subscriber yet?")').closest("table").remove();
  $('span:contains("Copyright")').closest("table").remove();
  $('td:contains("Copyright")').closest("table").remove();

  // Remove "SEE ALL COMPLETE ISSUES" text and surrounding elements
  $('span:contains("SEE ALL COMPLETE ISSUES")').closest("table").remove();
  $('td:contains("SEE ALL COMPLETE ISSUES")').closest("table").remove();
  $('div:contains("SEE ALL COMPLETE ISSUES")').closest("table").remove();

  // Alternative approach: identify and keep only the main content area
  // This is a more aggressive approach but can be more reliable if the structure is consistent
  // Uncomment and adapt these lines if needed
  /*
  const mainContentTable = $('#templateBody, #templateColumns, .mcnTextContent').first().closest('table');
  if (mainContentTable.length) {
    // Keep only the main content and replace everything else
    $('body').empty().append(mainContentTable);
  }
  */

  // Return the modified HTML
  return $.html();
}
