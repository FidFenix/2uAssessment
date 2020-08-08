const dateFormat = require('dateformat');

module.exports = {
   dateToPostgres: function (timestamp) {
      if (timestamp == null || timestamp == '') return null;
      return new Date(+timestamp);
   },
   dateToSaveFromString: function(dat) {
      const parts = dat.split('-');
      const newDate = new Date(parts[0], parts[1] - 1, parts[2]);
      return newDate; //.toDateString();
   },
   dateFromPostgres: function (date) {
      if (date == null || date == '')
        return date;
      return dateFormat(new Date(date), "yyyy-mm-dd");
   },
}