/**
 * Takes a date in and return it in this format
 * 12th, Novemeber 2000
 * @param {String} date Date in string format
 */
const formatDate = date => {
  date = new Date(date.toString()).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });
  let formattedDate = date.split(" ");
  let day =  formatter(formattedDate[0]);
  formattedDate[0] = day  ;
  formattedDate = formattedDate.join(" ");
  return formattedDate;
};

const formatter = (date) => {

  let last =  null;
  if ( +date > 10 && +date<21  )
  {
    date = `${date}th,`;
  }
  else
  {
    last = date[date.length - 1];

    switch (last) {
      case "1":
          date = `${date}st,`;
        break;
      case "2":
              date = `${date}nd,`;
        break;
        case "3":
              date = `${date}rd,`;
          break;  
      default:
              date = `${date}th,`;
        break;
    }
  }

  return date;
}

const stripSrc = (title) =>
{
     const indexOfDash = title.toString().lastIndexOf('-');
     return title.substring(0,indexOfDash);
}

export 
{
  stripSrc,
  formatDate
};