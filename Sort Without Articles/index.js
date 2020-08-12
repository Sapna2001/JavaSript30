const bands = ['The Plot in You',
              'The Devil Wears Prada',
              'Pierce the Veil',
              'Norma Jean',
              'The Bled',
              'Say Anything',
              'The Midway State',
              'We Came as Romans',
              'Counterparts',
              'Oh, Sleeper',
              'A Skylit Drive',
              'Anywhere But Here',
              'An Old Dog'];

const id = document.getElementById("bands");            

function strip(bandName){
    return bandName.replace(/(a |the |an |apple)/i, '').trim(); //replace the articles and trim the white places
    // ^n	Matches any string with n at the beginning of it
}             
             
const sortedBands = bands.sort((a,b) =>{
    const res = strip(a) > strip(b) ? 1 : -1;
    return res;
});

console.log(sortedBands);

id.innerHTML = sortedBands.map( band =>
    `<li>${band}</li>`).join("");
