import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<App />, document.getElementById('table'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

var csv_file_API = './CSV Healthcare Resources v3';
// var excel_file_API = './soccer_players.xlsx';

$.ajax({

    type: 'GET',

    url: csv_file_API,

    dataType: 'text',

    error: function (e) {
        alert('An error occurred while processing API calls');
        console.log("API call Failed: ", e);
    },

    success: function (data) {

        var jsonData = $.csv.toObjects(data);

        console.log(jsonData);

        $.each(jsonData, function (index, value) {

            $('#showCSV').append(

                '<li class="list-group-item d-flex justify-content-between align-items-center">' + 
                    
                    '<span style="margin-right: 2rem; font-size: 2rem; font-weight: bold; color: #37474F">' +
                        value['Name'] +
                    '</span>' +

                    '<span style="margin-right: 2rem; font-size: 2rem; font-weight: bold; color: #37474F">' +
                        value['Address'] +
                    '</span>' +

                    '<span class="badge badge-primary badge-pill">' +
                        value.Description +
                    '</span>' +

                    '<span class="badge warning-color-dark badge-pill">' + 
                        value['PHONE NUMBER'] +
                    '</span>' +

                    '<span class="badge success-color-dark badge-pill">' +
                        value['Hours'] +
                    '</span>' +

                '</li>'
            );

        });

    } // end: Ajax success API call

}); // end: of Ajax call

