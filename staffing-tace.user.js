// ==UserScript==
// @name         PYS Tace
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://app.pickyourskills.com/reporting/staffing_dashboard?view=user
// @icon         https://www.google.com/s2/favicons?domain=pickyourskills.com
// @grant        none
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// ==/UserScript==

(function() {
    'use strict';

    var $ = window.jQuery;
    var taces = {
        Dev: 100,
        Architecte: 80,
        'VP Tech': 50,
        'CA / PO': 50,
        'DP / PM / AM': 50
    }

    function highlightGoodComments (jNode) {
        console.log(jNode);

        var role = jNode.find('[label=Position]').text();


        jNode.find('div.cell.main_cell[width=85] > div > div').each(function(jNode) {
            var staffing = $(this).text();

            if (staffing.endsWith('%')) {
                var staffingNumber = parseInt(staffing.slice(0, -1));

                if (staffingNumber >= taces[role]) {
                    $(this).removeClass('imyEOq').addClass('iVOJD');
                }
            }
        });

    }

    waitForKeyElements ("#individual_staffing_reporting_table_export .row", highlightGoodComments);
    // Your code here...
})();
